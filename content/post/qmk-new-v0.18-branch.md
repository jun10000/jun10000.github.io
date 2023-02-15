---
title: "QMK FirmwareのフォークリポジトリにVer 0.18ブランチを作成する方法"
date: 2023-02-16T04:37:59+09:00
tags: ["自作キーボード", "備忘録"]
---
## はじめに
ここでは、手順のみを載せています。  
後述の参考章もご活用ください。  

## 作成前準備

1. あらかじめ、qmkコマンド、gitコマンドとGUIクライアント（GitHub Desktopなど）がインストールされているものとする
1. リモートリポジトリとローカルリポジトリを更新、同期する
1. タグ一覧を表示する：`git tag`
1. `0.18.17` (0.18の最新版）が存在するか確認する  
存在しなかった場合、タグに対応するハッシュ値（例えば、`0.18.17`ならば`133fe1c`）を下記URLから確認する  
https://github.com/qmk/qmk_firmware/tags

## ブランチ作成

### タグを使用してブランチ作成

```
git checkout -b {A} refs/tags/{B}
{A}: upstreamのタグ一覧と被らない、任意のタグ名（例：v0.18）
{B}: 参照するタグ（例：0.18.17）
```

### ハッシュ値を使用してブランチ作成

```
git checkout -b {A} {B}
{A}: upstreamのタグ一覧と被らない、任意のタグ名（例：v0.18）
{B}: 参照するハッシュ値（例：133fe1c）
```

## QMK開発環境の設定

1. `git status`などで身に覚えのない変更があれば、全て取り消す
1. `git diff`を実行してsubmoduleに変更があれば、  
`git submodule update -f --init`を実行して取り消す
1. `qmk doctor`を実行し、表示されたエラーや警告を出来るだけ解消する  
Ver 0.18.17の場合、avr-gccのバージョンダウン推奨は放置でいいかもしれない

## 環境テスト

1. 試しに、任意のキーボードファームウェアをコンパイルしてみる  
`qmk compile -kb {keyboard} -km {keymap}`
1. 成功したら、最後にリモートリポジトリに変更を反映して終わり

## 参考コマンド

### 作業ブランチを確認する

`git branch`  
作業ブランチに`*`が付いている

### ブランチを削除する

1. 作業ブランチを確認
1. 作業ブランチが削除対象ならば退避：`git checkout {another-branch}`
1. ブランチ削除：`git branch -D {delete-branch}`  
`-D`は、削除オプション + マージ済みでないブランチも対象

### ブランチのログを表示する

`git log`  
オプションなしの場合、作業ブランチに関するログのみ表示される  

## 参考文献

- [git checkout解説](https://qiita.com/yunano/items/f3133ea64efed762df2f)
- [gitでタグをチェックアウトする](https://h2ham.net/git-tag-checkout/)
- [gitの不要なブランチを消すコマンド](https://qiita.com/mather314/items/a1536c52a2eb0426b2b5)
- [変更をgitサブモジュールに戻すにはどうすればよいですか？](https://qastack.jp/programming/10906554/how-do-i-revert-my-changes-to-a-git-submodule)
- [初心者がしっかりと理解できるようにGitのブランチを説明する](https://qiita.com/gakisan8273/items/0e0ad1fee2a7c623f8d6)
- [Gitの初級者から中級者になる](https://zenn.dev/coder_ka/articles/1424213850674e)
