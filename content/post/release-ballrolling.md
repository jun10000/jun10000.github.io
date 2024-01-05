---
title: "「BallRolling」というゲームを開発中です"
date: 2024-01-05T15:34:43+09:00
tags: ["ゲーム", "BallRolling"]
---
## 2023年の振り返り

2023年も終わり、2024年に差し掛かりました。  
去年は、[OM60](https://junsgamingstore.booth.pm/items/4203190)という私が開発した自作キーボードがあるのですが、[最終版のファームウェアにMinesweeperを組み込んで遊べるようにした](/introduce-om60-minesweeper/)のが2月。  
3~5月のゴールデンウィークまではESP32-S3などでUSB HIDやHOGP(BLE + HID)による通信を試しにやってみたりしました。  
テスト用コードは[こちら](https://github.com/jun10000/qmk_firmware/tree/v0.18/keyboards/test)に置いています。  

...少し飛びまして、10月くらいからUnreal Engine 5を使ったゲーム開発をStartしました。  
まずその1弾として、11月から「BallRolling」を開発開始。  

## BallRollingについて

![Imgur](https://i.imgur.com/6pCbrCah.png)  
BallRolling開発画面 (Ver. 0.0.1)  

文字通り、ボール転がしです。  
基本的には、ただステージを傾けることでボールを転がし、ゴールを目指すことが目的です。  
ゲームプロジェクトは[こちら](https://github.com/jun10000/BallRolling)で公開しています。  
BallRollingのこれからに関しては、障害物、複数のボールなどのギミックを追加し、難しくてやりごたえのあるゲームに作りこみたいし、操作方法に自作ゲームコントローラを追加したいですね～。  

今回の記事執筆に使用したキーボードは、[OM60](https://junsgamingstore.booth.pm/items/4203190)です。  

![Imgur](https://i.imgur.com/SKwPya0h.jpg)  
