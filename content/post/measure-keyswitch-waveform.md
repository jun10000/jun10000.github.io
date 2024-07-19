---
title: "キースイッチ押下時の波形計測（てきとー）"
date: 2024-07-19T10:59:34+09:00
tags: ["自作キーボード", "fortitude60", "キースイッチ"]
---
## 前置き

[Fortitude60を組み立ててから](/build-log-fortitude60/)、2年2カ月使っています。  
3か月ほど前に一部のキースイッチが反応しにくくなったり、チャタリングが発生するようになりまして、再びスイッチを交換しました。  
最初のキースイッチ交換記事は[こちら](/change-key-switch-fortitude60/)をご覧ください。  

今回は、反応が悪くなったキースイッチの押したとき、離した時の波形を計測しています。  
ただし、計測はあくまでも興味本位のため、この記事に厳密さはないことをご了承ください～  

## 計測環境

![Imgur](https://i.imgur.com/sEdAo2xh.jpg)

- 抵抗：330Ω
- 電源：5.0V

## 計測結果

### ほぼ未使用のキースイッチ

![Imgur](https://i.imgur.com/IdSodvWh.png)  
スイッチ1、立ち上がり  

![Imgur](https://i.imgur.com/GkdVlE1h.png)  
スイッチ1、立ち下がり  

![Imgur](https://i.imgur.com/kvXp7M6h.png)  
スイッチ2、立ち上がり  

![Imgur](https://i.imgur.com/3xQBfJhh.png)  
スイッチ2、立ち下がり  

![Imgur](https://i.imgur.com/pjTJDPeh.png)  
立ち上がりの最悪波形  

ほぼ未使用のキースイッチは、やはり応答が早いことを再確認しました。  
チャタリングが発生しても、最大100μs（0.0001秒）で収束します。  

### 反応の悪くなったキースイッチ

![Imgur](https://i.imgur.com/dMOsfA5h.png)  
立ち上がり、チャタリング：1.2ms  

![Imgur](https://i.imgur.com/ggyy4Iwh.png)  
立ち上がり、チャタリング：90ms  

![Imgur](https://i.imgur.com/4p8OISzh.png)  
立ち上がり、反応なし、チャタリング：52ms  

![Imgur](https://i.imgur.com/4RUvGrdh.png)  
立ち下がり、チャタリング：4.3ms  

![Imgur](https://i.imgur.com/umzf2smh.png)  
立ち下がり、チャタリング：7.5ms  

![Imgur](https://i.imgur.com/bPqnTwnh.png)  
立ち下がり、チャタリング：8ms  

スイッチによって応答にばらつきがありました。  
理由ははっきりとはわかりません。考えられることは、ルブのやり方が悪かった、使用頻度が少ないことが挙げられます。  

劣化が少ない個体に関しては、10ms（0.01秒）だけ入力待機させればチャタリングを回避できると思います。  

## 後書き

適当な記事になってしまいましたが、最後までご覧いただきありがとうございます～  
何か参考にできるところがあれば幸いです。  

この記事は、一部のキースイッチをTecsee Blue Sky Switch (Linear)に交換したFortitude60を使って執筆しています。  
結構ソリッドな感触です。
