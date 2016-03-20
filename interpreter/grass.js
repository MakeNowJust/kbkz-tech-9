(function () {
'use strict'

var grass = window.grass = {}

//  __  __           _      _ 
// |  \/  | ___   __| | ___| |
// | |\/| |/ _ \ / _` |/ _ \ |
// | |  | | (_) | (_| |  __/ |
// |_|  |_|\___/ \__,_|\___|_|

grass.model = {}

// Env

grass.model.Env = function Env(data) {
  data = data || {}
  this.stack = m.prop((data.stack || []).slice())
}

grass.model.Env.prototype.push = function push(value) {
  this.stack().push(value)
}

grass.model.Env.prototype.get = function get(index) {
  var stack = this.stack()
  return stack[stack.length - index]
}

grass.model.Env.prototype.copy = function copy() {
  return new grass.model.Env({
    stack: this.stack(),
  })
}

grass.model.Env.initStack = function initStack() {
  return [grass.value.In, new grass.value.Char('w'.charCodeAt(0)), grass.value.Succ, grass.value.Out]
}

// Output

grass.model.Output = function Output() {
  this.text = m.prop([]) // UTF-8 encoded byte string
}

grass.model.Output.prototype.putChar = function putChar(charCode) {
  if (charCode === undefined) throw new Error('not a char')
  this.text(this.text() + String.fromCharCode(charCode))
}

// Input

grass.model.Input = function Input(data) {
  data = data || {}
  this.text = m.prop(data.text || '')
}

grass.model.Input.prototype.readChar = function readChar() {
  if (this.text().length === 0) return null

  var charCode = this.text().charCodeAt(0)
  this.text(this.text().slice(1))
  return charCode
}

// Option

grass.model.Option = function Option(data) {
  data = data || {}
  this.tailCallOptimization = m.prop(data.tailCallOptimization || false)
}

// Machine

grass.model.Machine = function Machine(data) {
  data = data || {}
  this.code = m.prop(data.code || [])
  this.env = m.prop(new grass.model.Env(data.env))
  this.dump = m.prop(data.dump || [])

  this.output = m.prop(new grass.model.Output(data.output))
  this.input = m.prop(new grass.model.Input(data.input))

  this.option = m.prop(new grass.model.Option(data.option))

  this.status = m.prop(grass.model.Machine.status.READY)
}

grass.model.Machine.status = 'running terminated'
  .split(' ')
  .reduce(function (status, name) {
    status[name.toUpperCase()] = name
    return status
  }, {})

grass.model.Machine.prototype.evalStep = function evalStep() {
  if (this.status() === grass.model.Machine.status.READY) throw new Error('invalid status')
  if (this.status() === grass.model.Machine.status.TERMINATED) return

  var code = this.code()

  if (code.length === 0) {
    var ret = this.env().get(1)
    var dump = this.dump()

    if (dump.length === 0) {
      this.status(grass.model.Machine.status.TERMINATED)
      return
    }

    var frame = dump.pop()

    this.code(frame.code)
    this.env(frame.env)

    this.env().push(ret)
  } else {
    var insn = code.shift()

    insn.evalStep(this)
  }
}

//  ___           _                   _   _             
// |_ _|_ __  ___| |_ _ __ _   _  ___| |_(_) ___  _ __  
//  | || '_ \/ __| __| '__| | | |/ __| __| |/ _ \| '_ \ 
//  | || | | \__ \ |_| |  | |_| | (__| |_| | (_) | | | |
// |___|_| |_|___/\__|_|   \__,_|\___|\__|_|\___/|_| |_|

grass.instruction = {}

// App

grass.instruction.App = function App(func, arg, meta) {
  this.func = func
  this.arg = arg

  this.meta = meta || {}
}

grass.instruction.App.prototype.evalStep = function evalStep(machine) {
  var func = machine.env().get(this.func)
  var arg = machine.env().get(this.arg)

  func.app(machine, arg)
}

grass.instruction.App.prototype.toElem = function toElem(current, selected) {
  var prop = {
    class: [current === this.meta.index ? 'current' : '', selected === this.meta.index ? 'selected' : ''].join(' '),
  }
  var elem = m('span.app', prop, 'W'.repeat(this.func) + 'w'.repeat(this.arg))
  return this.meta.withSep ? [m('span.sep', 'v'), elem] : elem
}

// Abs

grass.instruction.Abs = function Abs(arity, body, meta) {
  this.arity = arity
  this.body = body

  this.meta = meta || {}
}

grass.instruction.Abs.prototype.evalStep = function evalStep(machine) {
  machine.env().push(new grass.value.Func(this.arity, this.body, machine.env().copy(), this.meta))
}

grass.instruction.Abs.prototype.toElem = function toElem(current, selected) {
  var prop = {
    class: [current === this.meta.index ? 'current' : '', selected === this.meta.index ? 'selected' : ''].join(' '),
  }
  var elem = m('span.abs', prop, [
    'w'.repeat(this.arity),
    this.body.map(function (insn) { return insn.toElem(current, selected) }),
  ])
  return this.meta.withSep ? [m('span.sep', 'v'), elem] : elem
}

// __     __    _            
// \ \   / /_ _| |_   _  ___ 
//  \ \ / / _` | | | | |/ _ \
//   \ V / (_| | | |_| |  __/
//    \_/ \__,_|_|\__,_|\___|

grass.value = {}

// Func

grass.value.Func = function Func(arity, body, env, meta) {
  this.arity = arity
  this.body = body
  this.env = env

  this.meta = meta
}

grass.value.Func.prototype.app = function app(machine, arg) {
  var env = this.env.copy();
  env.push(arg)
  
  if (this.arity === 1) {
    if (!(machine.option().tailCallOptimization() && machine.code().length === 0)) {
      var frame = {
        code: machine.code(),
        env: machine.env(),
      }

      machine.dump().push(frame)
    }

    machine.code(this.body.slice())
    machine.env(env)
  } else {
    machine.env().push(new grass.value.Func(this.arity - 1, this.body, env, this.meta));
  }
}

grass.value.Func.prototype.toElem = function toElem(select) {
  if (this.meta.name) {
    return m('div.btn.btn-default', {
      class: 'value-' + this.meta.name.toLowerCase(),
    }, this.meta.name)
  }

  var prop = {
    onmouseover: function () {
      select(this.meta.index)
    }.bind(this),
    onmouseout:  function () {
      select(null)
    }
  }

  return m('div.btn.btn-default.value-func', prop, [
    'w'.repeat(this.arity),
    this.body.map(function (insn) { return insn.toElem() }),
  ])
}

// True/False

grass.value.True = new grass.value.Func(2, [new grass.instruction.Abs(1, []), new grass.instruction.App(1, 3)], new grass.model.Env([]), { name: 'True' })
grass.value.False = new grass.value.Func(2, [], new grass.model.Env([]), { name: 'False' })

// Char

grass.value.Char = function Char(charCode) {
  this.charCode = charCode;
}

grass.value.Char.isPrint = function isPrint(charCode) {
  return 0x20 <= charCode && charCode <= 0x7E;
}

grass.value.Char.prototype.app = function app(machine, arg) {
  var charCode = arg.charCode
  if (charCode === undefined) throw new Error('not a char')
  machine.env().push(this.charCode === charCode ? grass.value.True : grass.value.False)
}

grass.value.Char.prototype.toElem = function toElem() {
  var isPrint = grass.value.Char.isPrint(this.charCode)
  return m('div.btn.btn-default.value-char',
      'Char(' + (isPrint ? '\'' + String.fromCharCode(this.charCode) + '\'' : '0x' + ('00' + this.charCode.toString(16)).slice(-2)) + ')')
}

// primitive

grass.value.Out = {
  app: function (machine, arg) {
    machine.output().putChar(arg.charCode)
    machine.env().push(arg)
  },
  toElem: function () { return m('div.btn.btn-default.value-out', 'Out') }
}

grass.value.In = {
  app: function (machine, arg) {
    var charCode = machine.input().readChar()
    machine.env().push(charCode === null ? arg : new grass.value.Char(charCode))
  },
  toElem: function () { return m('div.btn.btn-default.value-in', 'In') }
}

grass.value.Succ = {
  app: function (machine, arg) {
    machine.env().push(new grass.value.Char((arg.charCode + 1) & 0xff));
  },
  toElem: function () { return m('div.btn.btn-default.value-succ', 'Succ') },
}

//  ____                     
// |  _ \ __ _ _ __ ___  ___ 
// | |_) / _` | '__/ __|/ _ \
// |  __/ (_| | |  \__ \  __/
// |_|   \__,_|_|  |___/\___|

grass.parse = function (source) {
  var index = 0
  return source
    .replace('\uFF57', 'w')
    .replace('\uFF37', 'W')
    .replace('\uFF56', 'v')
    .replace(/^[^w]+/, '')
    .replace(/[^wWv]+/g, '')
    .split('v')
    .reduce(function (code, source, i) {
      var list = source.match(/w+|W+/g).map(function (src) { return src.length })
      var arity = /^w+/.test(source) ? list.shift() : 0
      var body = []
      if (list.length % 2 !== 0) throw new Error('pase error')

      while (list.length) {
        body.push(new grass.instruction.App(list.shift(), list.shift(), {index: index++}))
      }
      body = arity === 0 ? body : [new grass.instruction.Abs(arity, body, {index: index++})]
      if (i !== 0) body[0].meta.withSep = true

      return code.concat(body)
    }, [])
}

//   ____                                             _   
//  / ___|___  _ __ ___  _ __   ___  _ __   ___ _ __ | |_ 
// | |   / _ \| '_ ` _ \| '_ \ / _ \| '_ \ / _ \ '_ \| __|
// | |__| (_) | | | | | | |_) | (_) | | | |  __/ | | | |_ 
//  \____\___/|_| |_| |_| .__/ \___/|_| |_|\___|_| |_|\__|
//                      |_|                               

// Main

grass.Main = {
  controller: function (args) {
    this.machine = m.prop(new grass.model.Machine({
      env: {
        stack: grass.model.Env.initStack(),
      },
      dump: [{
        code: [],
        env: new grass.model.Env([]),
      },{
        code: [new grass.instruction.App(1, 1)],
        env: new grass.model.Env([]),
      }],
    }))
    this.codeText = m.prop('')
    this.codeParsed = m.prop([])
    this.selected = m.prop(null)

    this.start = function () {
      var codeParsed = grass.parse(this.codeText())
      this.codeParsed(codeParsed.slice())
      this.machine().code(codeParsed)
      this.machine().status(grass.model.Machine.status.RUNNING)
    }.bind(this)

    this.step = function () {
      this.machine().evalStep()
    }.bind(this)
  },

  view: function (ctrl, args) {
    var machine = ctrl.machine()
    var isReady = machine.status() === grass.model.Machine.status.READY
    var isTerminated = machine.status() === grass.model.Machine.status.TERMINATED
    var index = (machine.code()[0] || {meta: {}}).meta.index

    return m('div.container', [
      m('div.row', [
        m('div.col-md-12.col-sm-12', [
          m('h1', [
            'Grass Interpreter',
            m('small', 'by MakeNowJust'),
          ]),
        ]),
      ]),
      m.component(grass.Control,      { isReady: isReady, isTerminated: isTerminated, option: machine.option, start: ctrl.start, step: ctrl.step }),
      m('div.row', [
        m.component(grass.Code,       { isReady: isReady, codeText: ctrl.codeText, codeParsed: ctrl.codeParsed, index: index, selected: ctrl.selected }),
        m.component(grass.Info,       { machine: machine, selected: ctrl.selected }),
      ]),
      m('div.row', [
        m.component(grass.Output,     { output: machine.output }),
        m.component(grass.Input,      { input : machine.input }),
      ]),
    ])
  }
}

grass.Control = {
  controller: function (args) {
    this.autoId = m.prop(null)

    this.autoStart = function () {
      this.autoId(setInterval(function () {
        args.step()
        m.redraw()
      }, 1000 / 20))
    }.bind(this)

    this.autoStop = function () {
      clearInterval(this.autoId())
      this.autoId(null)
    }.bind(this)
  },

  view: function (ctrl, args) {
    var autoId = ctrl.autoId()
    var autoStart = ctrl.autoStart
    var autoStop = ctrl.autoStop

    return m('div.row', [
      args.isReady ?
        [
          m('div.col-md-2.col-sm-2', [
            m('button.btn.btn-default.form-control', { onclick: args.start }, [m('span.glyphicon.glyphicon-play')]),
          ]),
          m('div.col-md-2.col-sm-2'),
        ] :
        [
          m('div.col-md-2.col-sm-2', [
            m('button.btn.btn-default.form-control', {
              disabled: args.isTerminated,
              onclick: args.step,
            }, [m('span.glyphicon.glyphicon-step-forward')]),
          ]),
          m('div.col-md-2.col-sm-2', [
            m('button.btn.btn-default.form-control', {
              disabled: args.isTerminated,
              onclick: autoId === null ? autoStart : autoStop,
            }, [m('span.glyphicon', {
              class: autoId === null ? 'glyphicon-fast-forward' : 'glyphicon-pause',
            })]),
          ]),
        ],
      m('div.col-md-8.col-sm-8', [
        m('div.checkbox', [
          m('label', [
            m('input', {
              type: 'checkbox',
              onchange: m.withAttr('checked', args.option().tailCallOptimization),
              checked: args.option().tailCallOptimization(),
            }),
            'tail call optimization',
          ]),
        ]),
      ]),
    ])
  }
}

grass.Code = {
  view: function (ctrl, args) {
    var elem
    if (args.isReady) {
      elem = m('textarea.form-controledit', {
        placeholder: 'code here...',
        oninput: m.withAttr('value', args.codeText),
      }, args.codeText())
    } else {
      elem = m('pre.pre-scrollable.parsed', {
      }, [
        m('code', [
          args.codeParsed().map(function toElem(insn) {
            return insn.toElem(args.index, args.selected())
          }),
        ]),
      ])
    }

    return m('div.col-md-8.col-sm-8.code', elem)
  }
}

grass.Info = {
  view: function (ctrl, args) {
    var machine = args.machine
    var code = machine.code()
    var env = machine.env().stack()
    var dump = machine.dump()

    return m('div.col-md-4.col-sm-4.info', [
      m('div.machine', [
        ['Code', m('span.badge', '' + code.length)],
        ['Dump', m('span.badge', '' + dump.length)],
        ['Env',  m('span.badge', '' + env.length)],
      ]),
      m('div.env', [
        env.slice().reverse().map(function (value) {
          return value.toElem(args.selected)
        }),
      ]),
    ])
  }
}

grass.Output = {
  view: function (ctrl, args) {
    return m('div.col-md-6.col-sm-6', [
      m('textarea.form-control', {
        placeholder: 'output here...',
        readOnly: true,
      }, utf8.decode(args.output().text())),
    ])
  }
}

grass.Input = {
  view: function (ctrl, args) {
    return m('div.col-md-6.col-sm-6', [
      m('textarea.form-control', {
        placeholder: 'input here...',
        oninput: m.withAttr('value', function (text) {
          args.input().text(utf8.encode(text))
        }),
      }, utf8.decode(args.input().text())),
    ])
  }
}


m.mount(document.querySelector('main'), grass.Main)

})()
