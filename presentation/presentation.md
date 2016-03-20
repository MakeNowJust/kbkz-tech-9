class: center, middle, inverse

# Grassで草を生やそう！

[@MakeNowJust](https://github.com/MakeNowJust)

---
class: center, middle, inverse

## 自己紹介

---

.left-column[
### 名前
]

.right-column[
![icon](img/icon.png)

[@MakeNowJust](https://github.com/MakeNowJust)
]

---

.left-column[
### 名前
### 特技
]

.right-column[
- 色んな言語でQuineを書く
- 200言語くらい
- →[MakeNowJust/quine](https://github.com/MakeNowJust/quine)
- Brainf\*ck, Lazy Kなどの<br>**Esolangも含む**
]

---
class: center, middle

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/make_now_just">@make_now_just</a> Esolang全般は、多分みんなBrainfuckの名前ぐらいは聞いたことがあるのでどういうものか程度はわかっているのではないのかなぁ。</p>&mdash; Ryou Ezoe (@EzoeRyou) <a href="https://twitter.com/EzoeRyou/status/704216218916392960">2016年2月29日</a></blockquote>

---
class: center, middle, inverse

# 本編

---
class: center, middle, inverse

## Grassとは？

`wWWwwww`

---

### Grassとは？

- 公式サイト: http://www.blue.sky.or.jp/grass/doc_ja.html
- 2006年9月17日に[@uenoB](https://twitter.com/uenob)氏が考案
- スタックベースの関数型言語
- ↑ラムダ計算に基づく
- ↑しっかりとした意味論

一番の特徴は‥‥

---
class: center, middle, inverse

## プログラムが<br>草を生やしているように見えるwww

---

### 例 (Hello, World)

```
wWwwwWwwwwwWWWWwvwvwwWWWWwWWWWwwwvwwWWwwWwwvwwWWWwWWWwvwWWwWwvwWWwww
wwWwwvwwWWwWWWwvWwvwwwWWWwwWwwWWWWwvWwwwWWWWwWWWWwwwWwwWWWWWwWWWWWWw
vwwWWwWWWwvWwwWWwwwwWWWwwwwwwWWWWWWWWWWwwwwwwwwWwwWWwwwwWWWwwwwwwvww
wWWWwwWwwWWWWwvWwwwwwwWWwwwwWWWwwwwWWWWwWWWWWWWWWWWWWWWWWWWwwwwwWwwW
WwWWWwWWWWwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwWwwwwwwwwwWwwwwww
WwwwwwwwWwwwwwwwWwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwvwwvWWwWw
wWwwwwwwWwwwwwwWwwwwwwwwwWwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwvw
```

(by [irie](http://www11.atwiki.jp/s-irie/pages/20.html))

---

### 例 (FizzBuzz)

```
wvwwWWWwwvwwwWWWwwWwwWWWWwvwwwwWWWWwwWWWWwwwWwwwWWWwvwwwwWWWwwWWWWWwWwwwvwwWWWWWWWwvwwWWwvwwWWwWWWwvwWWWWWwwWwwwWwwwvwWWWWWWwwwWwwwWwwwvwWWWWWWWwwwwWwwwWwwwvwWWWWWWWWwwwwwWwwwWwwwvwWWWWWWWWWwwwwwwWwwwWwwwvwWWWWWWWWWWwwwwwwwWwwwWwwwvwwWWWWWWWWWWWWWWWWwwvwwWWWWWWWWWWWWWWWWWwvwwwWwwwWwwwvwWwwwWWWwWWWwwwwwWWWWWWWWWWWWWWWWWWWwWWWwvwWwwWWWWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwWWWwWwwwwwwwwwvwwWwwwWwwwvwwWWwWwwwwwwwwvwwWWwwwwwwwwwWwwvwWwwwwwwwwWwwwwwwwwwwvwWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwWWwWwwwwwwwwwwwwvwwWWWWWWWwwWwwWWWWWwvwwWWWwwWwwWWWWWWWWWwWWWWWWwwwwWwwwwwwWWWwvwwWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwvwwwwwWwwwwwWwwwwwWwwwwwWwwwwwvwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwvwWwwvwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwvwWwwvwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwvwWwwvwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwWwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwvwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwvWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwWWWWwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwWwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwWWwWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwWwwwwwwwwwwWwwwwwWwwwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWwv
```

(by [@ki6o4](http://solorab.net/blog/2015/12/01/fizzbuzz-in-grass/))

---
class: center, middle, inverse

## ちょwww

---

### Grassとは？

- プログラムが `w` と `W` と `v`
- ↑結果、草を生やしてるように見える
- 名前の由来も当然ここから

---
class: center, middle, inverse

## 構文とかwww

---

### Grassの構文

- `w` と `W` と `v` 以外は無視
- 最初の `w` までの文字も無視

```
これはWWコメントwWW
ちょwwwwこれもコメントWWww
```

---

### Grassの構文

- プログラムは `v` で区切られる
- `w` から始まるのは関数定義（ラムダ抽象）
- `W` から始まるのは関数適用

```
wWWwwww v これは関数定義
w       v これも関数定義
WWWwwwwwv これは関数適用
WWWWw     関数適用が連続する場合
WWWwwww   vは省略できる
```

---

### スタック

内部にスタックを持っている

```
stack = [In, w, Succ, Out]
```

- `Out` 引数を出力し、引数を返す
- `Succ` 引数の次の文字を返す(255→0)
- `w` 文字 `'w' = 119`。関数として呼び出した場合、引数と等しいかどうかをtrue、falseで返す
- `In` 入力された文字を返す

---

### 関数定義

```
wwwWWWWwwwwwWWwww
```

- 最初の `w` が引数の数(=n)
- それ以降の `W` と `w` の並びは関数の内容(=c)
- スタックをコピーしてクロージャを作ってpush

```
stack.push(Closure.new(n, c, stack))
```

---

### 関数適用

```
WWWwwww
```

- `W` の個数(=n)が適用する関数、 `w` の個数(=m)が引数
- スタックのn番目の値を、スタックのm番目の値を引数として呼び出す
- （引数はn番目の値の持っているスタックにpushされる）

```
stack[-n].call(stack[-m])
```

---

### プログラムの実行

1. プログラムをパースする
2. 一つずつ関数適用と関数定義を実行していく
3. 最後まで辿り着いたら、スタックの1番上の値を自身を引数として呼び出す
4. その返り値がプログラムの実行結果

---
class: center, middle, inverse

## とまあ、<br>こんな感じでwww

---
class: center, middle, inverse

## 分かりましたか？

---

### 分からないなら、

処理系のソースコードを読んだり、**実装してみたり** すればすぐに分かります（そんなに大変じゃないですし）

これはEsolang一般に通じる話ですが、ある言語を理解するには **実際に処理系を作ってみる** のが一番効率的だと思います

---

### 作った処理系1

- [Crystal](http://crystal-lang.org)で書いたやつ
- コマンドラインで動く
- 末尾呼び出し最適化
- とても早い
- （[@pine613](https://twitter.com/pine613)氏のCrystalの発表に期待）

---

### 作った処理系2

- HTML+CSS+JavaScript
- Webアプリケーション
- かなり遅い
- 色々表示できる
- デモ用

---
class: center, middle, inverse

## 実際のプログラム

---
class: center, middle, inverse

## 流行に乗り遅れるな

既に遅れてるじゃんwww

---

## [ズンドコキヨシ](http://qiita.com/make_now_just/items/d3c67880e3a157bfdd13)

```
wwWWwWWWwvwwwWWWwwWwwWWWWwvWwwWWwWWWwWWWWwvwwWWwwwwwwwWwwvWwwwwWwwwWWWwwwwwwwwwWwwWWWWWWWWWWwvwwvwwWWWWWWWWWwWWWwWwwwwwvWwwwwwwwwwwwwWwwwwwwwWWWWWWWWWWWWWWWwWWWWwwwwwwwwwwwwwwwWwwwwwwwvwvWwwwwwwwwwwwwwwwwwwwwwwWWwwwwwwwwwwwwwwwwwwwwwwwwWwWWWwwWWWwwwWWWWwwvwwWwwwwwwwWWWWWWWwwwwwWWWwwwwwwwWWWWWWWWWwwwwwwWWWWWWwwwwwwWWWwwWwwWWWWWWWwwwwwwWwwWWWWWWWWWWWWWWWWWwwwwwwwwwwWWWWWWWWWWWWWWWWWWwWWWwvWwWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWWwwwwwwwwwWWWWwWWWWwwwwwwwwwwwWWWWWWwWWWWWWwwwwwwwwwwwwwWWWWWWWW
wWWWWWWWWwwwwwwwwwwwwwwwWWWWWWWWWWwWWWWWWWWWWwwwwwwwwwwwwwwwwwWWWWWWWWWWWWwWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWwWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwvwwwwwwwwwwwwwwwwWWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWwwwWwwWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwww
wwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwvwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwvWWWWWWWWWWWWWwwwwwwwwwwwwWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWwWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwWwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwWWwwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwWWWWwwwwwwwwwwwWWWWWwwwwwwwwWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwvwWWWwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwwWWWWWwwwwwwwwwwwwwwwwwwwwwwWWWWWWwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwww
wwwwwwwWWWWWWWWwwwwwwwwwwwwwwwwwwwvwwwWWWWWWwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWwwwwwwwwwwwwWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwwwWWWWWWWWWWWWwwwwwwwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWW
WwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwWwwwwwwwwwwwWwwwWWWWWWWwwwwwwwwwWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwWWwwwwwwwwwWwwWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwWWWWWWWWwWwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwWwwwwwwWwwwwwwwwwwwwwwwwwvWwvwWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
```

`ズン` と `ドコ` をランダムに表示し続けて、`ズン` 4回のあとに `ドコ` が表示されたら `キ・ヨ・シ！` と表示して終了するプログラム

<!-- 3865byte -->

---

### アルゴリズム

1. チャーチ数から `ズン` 、 `ドコ`、 `キヨシ` の文字を作成
2. 乱数のシードを、入力を受け取って初期化
3. 乱数の値から `ズン` か `ドコ` のどちらかを出力する
4. `3` を繰り返し `ズン` が4回以上続いたあとに `ドコ`  が表示されたら `キ・ヨ・シ！` と表示して終了

---

### チャーチ数

```
0 = (f, x) => x

1 = (f, x) => f(x)

2 = (f, x) => f(f(x))

3 = (f, x) => f(f(f(x)))

...
```

---

### なぜ？

`'z'` が欲しい

→`w` に3回 `Succ` を適用する必要がある

--

`'u'` が欲しい

→`w` に **254回** `Succ` を適用する必要がある

---

### なぜ？

普通にSuccを適用しまくる

→ `Succ(Succ(Succ(....(Succ(w))....)))`

--

チャーチ数を使う

→ `254(Succ, w)`

---

### チャーチ数

チャーチ数は四則演算ができる

```
inc = (n) => (f, x) => f(n(f, x))

add = (n, m) => n(inc, m)

mul = (n, m) => n(add(m), 0)

-- 引き算と割り算は省略
```

短く書ける

---

### 乱数

- Grassは時刻をシードにしたりできない
- →ユーザーに入力してもらう
- M系列を使用
- `m[n] = m[n - 1] ^ m[n - 15]`
- 15要素のタプルにtrue/falseを入れて、ビット列を表現

---

### タプル

```
-- 15だと無駄に多いので5くらいで勘弁
tuple = (x1, x2, x3, x4, x5) => (f) => f(x1, x2, x3, x4, x5)
hoge = tuple(1, 2, 3, 4, 5)

-- 値を取り出す
get_first = (x1, x2, x3, x4, x5) => x1
get_third = (x1, x2, x3, x4, x5) => x3

hoge(get_first) -- 1
hoge(get_third) -- 3
```

---

### タプル

```
--- 値の更新
update_first = (x) => (x1, x2, x3, x4, x5) =>
  tuple(x, x2, x3, x4, x5)
update_third = (x) => (x1, x2, x3, x4, x5) =>
  tuple(x1, x2, x, x4, x5)

fuga = hoge(update_first(11))(update_third(33))
fuga(get_first) -- 11
fuga(get_third) -- 33
```

---
class: center, middle, inverse

## デモる

---

### どうやって書いたの？

手で書くのはちょっと厳しい気がしたので、CrystalでEDSLを作って自動生成しました

Esolangだとよくあることです

---

### EDSL

```
n_2 = lambda(2) { |args| args[0].(args[0].(args[1])) }
n_succ = lambda(3) { |args| args[1].(args[0].(args[1], args[2])) }
n_3 = n_succ.(n_2)
n_4 = n_succ.(n_3)
n_5 = n_succ.(n_4)
n_6 = n_succ.(n_5)
n_plus = lambda(2) { |args| args[0].(n_succ, args[1]) }
n_10 = n_plus.(n_4, n_6)
n_12 = n_plus.(n_2, n_10)
n_13 = n_succ.(n_12)
n_0 = lambda(2) { }
n_mul = lambda(2) { |args| args[0].(n_plus.(args[1]), n_0) }
n_31 = n_succ.(n_mul.(n_3, n_10))
n_39 = n_mul.(n_3, n_13)
```

---
class: center, middle, inverse

# まとめ

---

## まとめ

2つに分けます

- Grassの魅力
- Esolangの魅力

---

### Grassの魅力

- 関数型言語！
- ラムダ計算の知識が役に立つ
- 意味論がちゃんと存在するので実装しがいがある
- ~~Brainf\*ckより書くのが楽でLazy Kより速度が出やすい~~

---

### Esolangの魅力

- 処理系を実装しやすい（ことが多い）
- 言語を理解したとき、コードを書き上げたときの達成感

---
class: center, middle, inverse

## Esolangを書こう！

---
class: center, middle, inverse

## Grassで草を生やそう！

---
class: center, middle, inverse

# ご清聴<br>ありがとうございました

---

class: center, middle, inverse

# おまけ

細く書きすぎて話す時間が無くなった

---
class: center, middle, inverse

## Grass詳細

---

### 流れ

- ラムダ計算について
- Grassの操作的意味論について

---
class: center, middle, inverse

## ラムダ計算

λg. (λx. g (x x)) (λx. g (x x))

---

### ラムダ計算とは

- アロンゾ・チャーチとクリーネによって1930年代に考案
- 関数の定義とその実行についての計算モデル
- チューリングマシンと等価な計算能力
- 関数型言語の基礎となっている
- ともかくなんでも関数

---

### 表記

```
-- 引数xを受け取って、xを返す関数
(x) => x

-- fとxの二つの引数を受け取って、fにxを適用した結果を返す関数
(f, x) => f(x)
```

（※通常は `λx y. x` のような表記をする）

---

### カリー化

```
(f, x) => f(x)

-- 実際はこう
(f) => (x) => f(x)
-- 関数を返す関数になっている

(f, x, y) => f(x, y)
-- も
(f) => (x) => (y) => f(x)(y)
-- も同じことにする
```

---

### なんでも関数

例えば、 `true` とか `false` はどう表す？

```
true = (x, y) => x

false = (x, y) => y
```

---

### true/false

```
-- foo と bar が等しいとき true 、そうでないとき false を返す
eq(foo, bar)
```

---

### true/false

```
-- foo と bar が等しいとき true 、そうでないとき false を返す
eq(foo, bar)(on_true, on_false)

-- eq(foo, bar) ? on_true : on_false のように動く
```

--

こんな風にして色んなものを関数として表す

---
class: center, middle, inverse

## Grassの操作的意味論

---

### 操作的意味論

```
-- syntax
I ::= App(n, n) | Abs(n, C)
C ::= ε | I :: C

-- type
f ::= (C, E)
E ::= ε | f :: E
D ::= ε | (C, E) :: D
（長いので続く）
```

---

### 操作的意味論

```
-- transformation (C, E, D) → (C', E', D')
(App(m, n) :: C, E, D) → (Cm, (Cn, En) :: Em, (C, E) :: D)
  where E = (C1, E1) :: (C2, E2) :: … :: (Ci, Ei) :: E' (i = m, n)
(Abs(n, C') :: C, E, D) → (C, (C', E) :: E, D)
  if n = 1
(Abs(n, C') :: C, E, D) → (C, (Abs(n - 1, C')::ε, E) :: E, D)
  if n > 1
(ε, f :: E, (C', E') :: D) → (C', f :: E', D)

-- toplevel execution
(C0, E0, D0) →* (ε, f :: ε, ε)
E0 = Out :: Succ :: w :: In :: ε
D0 = (App(1, 1) :: ε, ε) :: (ε, ε) :: ε
```

---

### Grassの構文

- `w` と `W` と `v` 以外は無視
- 最初の `w` までの文字も無視

```
これはWWコメントwWW
ちょwwwwこれもコメントWWww
```

---

### Grassの構文

- プログラムは `v` で区切られる
- `w` から始まるのは関数定義（ラムダ抽象）
- `W` から始まるのは関数適用

```
wWWwwww v これは関数定義
w       v これも関数定義
WWWwwwwwv これは関数適用
WWWWw     関数適用が連続する場合
WWWwwww   vは省略できる
```

---

### 関数適用

```
WWWwwww
```

- `W` が適用する関数、 `w` が引数

```
App(n, m) -- n が関数、 m が引数を表す [wW] の数

App(3, 4)
```

---

### 関数定義

```
wwwWWWWwwwwwWWwww
```

- 最初の `w` が引数の数
- それ以降の `W` と `w` の並びは関数の内容

```
Abs(n, C) -- n が引数を表す [w] の数、 C が関数の内容

Abs(3, App(4, 5) :: App(2, 3) :: ε)
```

---

### 内部状態

```
(C, E, D)
```

- `C` コード （Code)
- `E` 環境 (Env)、スタック
- `D` ダンプ (Dump)

どれもリスト

```
(C, E, D) → (C', E', D')
```

---

### 初期状態

```
(C0, E0, D0)
```

- `C0` 実行するコード（`App` とか `Abs` のリスト）
- `E0` プリミティブ
- `D0 ::= (App(1, 1) :: ε, ε) :: (ε, ε) :: ε` 

---

### プリミティブ

```
E0 = Out :: Succ :: w :: In :: ε
```

- `Out` 引数を出力する。引数をそのまま返す
- `Succ` 引数の次の文字を返す
- `w` 文字 `'w' = 119`。 `Out` や `Succ` の引数に渡す。関数として呼び出した場合、引数と等しいかどうかをtrue、falseで返す
- `In` 入力された文字を返す。EOFなら引数をそのまま返す

---

### `E` の中身（クロージャ）

```
(C, E)
```

- `C` はコード
- `E` は環境

---

### 実行のルール

```
-- transformation (C, E, D) → (C', E', D')
(App(m, n) :: C, E, D) → (Cm, (Cn, En) :: Em, (C, E) :: D)
  where E = (C1, E1) :: (C2, E2) :: … :: (Ci, Ei) :: E' (i = m, n)
(Abs(n, C') :: C, E, D) → (C, (C', E) :: E, D)
  if n = 1
(Abs(n, C') :: C, E, D) → (C, (Abs(n - 1, C')::ε, E) :: E, D)
  if n > 1
(ε, f :: E, (C', E') :: D) → (C', f :: E', D)
```

---

### 関数定義（引数が1つ）

```
(Abs(n, C') :: C, E, D) → (C, (C', E) :: E, D)
  if n = 1
```

- `C` から `Abs(n, C')` を取り除いて、
- `E` に `(C', E)` を追加（クロージャ）

---

### 関数定義（引数が2つ以上）

```
(Abs(n, C') :: C, E, D) → (C, (Abs(n - 1, C')::ε, E) :: E, D)
  if n > 1
```

- `C` から `Abs(n, C')` を取り除いて、
- `E` に `Abs(n - 1, C')` を追加（カリー化）

---

### 関数適用

```
(App(m, n) :: C, E, D) → (Cm, (Cn, En) :: Em, (C, E) :: D)
  where E = (C1, E1) :: (C2, E2) :: … :: (Ci, Ei) :: E' (i = m, n)
```

- `C` から `App(m, n)` を取り除き、
- `D` に現在の `C` と `E` を追加して、
- `E` から `m` 番目のもの（関数）と `n` 番目のもの（引数）を取ってきて、
- `E` と `C` を関数のものに置き換え、
- `E` に引数を追加

---

### `C` が `ε`

```
(ε, f :: E, (C', E') :: D) → (C', f :: E', D)
```

- つまり(関数|プログラム)の終わり
- `D` に保存しておいた `C'` と `E'` を復元
- `E` の一番上の値を、 `E'` に追加（リターン）

---

### プログラムの実行

```
(C0, E0, D0) →* (ε, f :: ε, ε)
D0 = (App(1, 1) :: ε, ε) :: (ε, ε) :: ε
```

- `C` と `D` が `ε` になるまで実行を続ける
- `f` がプログラムの実行結果
- 最初にプログラムを一通り実行したら、結果の関数を自身を引数として呼び出す

---
class: center, middle, inverse

## 実際のプログラム

---

### Tic Tac Toe

```
wwvwwWWwvwwWWwWWWwvwwwWWWwwWwwWWWWwvwwWWwwwWwwvwwWWWwWWWwWwwwwwwwwwvwwWWWwwWWwWwwwwwwwwwvWWWWwwwwwWWWWwwwwwwWwwWWWWWWwWwwwwwwwwwWWWWWWWWWwWWWWWWWWWwwwwWwwwWWWWWWWWWWwWwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwWwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwWwwwwwwwwwWWWWWWWWWWWWWWWWWwwwwwwwWwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWwwwWwwWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwvwvwwWWWwwvwwvwwwWWWwwWWWWwwWWwWwwwwwwwWwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwwwwwwwwwWWWWWWWWWWwwwwwwwwwWwwwwwwWwwwWWWWWWWWWWWWWwwwwwwwwwwWwwwwwwwwwWwwwwwwwwWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwWwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwvwwwWWWwwWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWwwwwwwwwwWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWwwwwwwwWwwWWWWWWWWWWWWWWWWwwwwwwwwwwwwwWwwvwwwwwwwwwWWWWWWWWWWwwwwwwwwwWwwwwwwWwwwWWWWWWWWWWWWWwwwwwwwwwwWwwwwwwwwwWwwwwwwwwWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwWwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwwwwwwwwwwwwwwwvwwwWwwwWwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWwwwwwwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWwwwwwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWwwwwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWwwwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWwwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWwvWWWWWWWWWWwWwwwwwwwwwwwwwwwwwWWWWWWWWWWWWwwwwWwwWWWWWWWWWWWWWWwwwwwwwWwwWWWWWWWWWWWWWWWWwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwWwwvwwwwWWWWwwWWWWwWwwwvwwwwwwwwwwwWwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWWWWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWWWWWWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWWWWWWWWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvWWWWWWWWWWWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwwwwwwWwwwwwwwwwwvWWWWWWWWWWWWWWWWwvwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwvWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWWWWwwwwwwwwwwwwWWWWWwwwwwwwwwwwWWWWWWwwwwwwwWWWWWwwwwvwWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWwwwwwwwwwwwWWWWWWWwwwwwwwwWWWWWWwwwwvwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwWwwwwwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwWwwWwwwwwwwwwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwvwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwvwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwwwWwwWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwwwwwwwwwWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwwWWWWwwwwwwwwwwwwwwwwWwwWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwWwwwwwwwwwWwwwwwwwwwvwwwwwwwwwWWWWwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwWWWWwWwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWwWwwwwwwwwwwwwwwWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwWwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWWWWWWWwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwWwwwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwwwwwwwwwWWWwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWwwWwwWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwWwwwwwwwwwwwwwwWWWWWWWWwwwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwWwwwwwwwwwvwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwwwWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwWwwwwwwwwwwwwwwwwWwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwwWwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwWwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
```

いわゆる○×ゲーム。CPUがとても弱い
