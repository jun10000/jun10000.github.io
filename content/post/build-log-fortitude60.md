---
title: "Fortitude60 ビルドログ"
date: 2022-05-07T18:34:00+09:00
tags: ["fortitude60", "ビルドログ", "遊舎工房"]
---
## 前置き

この度、遊舎工房のギルドメンバーになったJunと申します。  
ギルド活動の一発目は、遊舎工房から無償提供させて頂いた、Fortitude60というキットを使ってキーボードを自作することになります。

## 遊舎工房とは

https://yushakobo.jp/

東京・秋葉原にある、自作キーボード専門店。  
実店舗だけでなく、通販もやっています。  
品揃えが良くて、商品説明もわかりやすく、初めての方には使いやすい店です。

## 遊舎工房ギルドとは

https://yushakobo.jp/news/2022/02/23/guild/

遊舎工房が行っている、商品の魅力などをアピールする（広報）活動です。  
ブログ、Twitter、YouTubeなどのメディアを通し、各々のメンバーが楽しみながら活動している様子を多くの人に広めることを願って作られました。  
なお、活動の見返りとしては、商品の無償提供などが待っています。  
純粋にキーボードを自作したいと考えている方、自作キーボードが高くて躊躇している現金な方も、ギルドへの参加を検討してみる価値はあると思います。

## ビルドの進め方について

ではここから、Fortitude60の組み立てに必要な材料や工具などを紹介していきます。
基本的には、公式ビルドガイドに沿って進行していきます。

https://github.com/Pekaso/fortitude60/blob/master/Documents/buildguide_jp_v1.1.md  
https://github.com/Pekaso/fortitude60/blob/master/Documents/buildguide_jp_v1.0.md

基本的にv1.1、LED実装部分はv1.0を参考にします。

## 必要な材料

|カテゴリ|必要性|選定条件|今回使用した材料|説明|
|------|-----|-------|-------------|---|
|キーボードキット|必要|-|[Fortitude60 [イキリホワイト]](https://shop.yushakobo.jp/products/fortitude60?variant=37665699889313)|遊舎工房から提供させて頂いたキットです。|
|キースイッチ x60|必要|Cherry MX系|[Gateron Pre-lubed 3 Pins Linear Switches（10個） [Red]](https://shop.yushakobo.jp/products/gateron-pre-lubed-3-pins-linear-switches?variant=40285971972257)、[Tecsee Gold Metal Switch（35個）](https://shop.yushakobo.jp/products/2969)|今回は、軽快で負担が軽いのをコンセプトにしています。キースイッチテスター（[KEY SWITCH SELECTION Vol.1 [2022.03]](https://shop.yushakobo.jp/products/3729)）で選定した結果、親指用にTecseeスイッチ x12、その他にGateronスイッチ x48を使用。|
|キーキャップ x60|必要|Cherry MX系|[KAT Alpha PBT Keycaps set [Ergo KIT]](https://shop.yushakobo.jp/products/kat-alpha-pbt-keycaps-set?variant=37665430110369)|形状は使ってみなければ分からないので、フォントで決めました。触り心地が良いです。|
|USBケーブル|必要|片方がUSB-C端子|[NIMASO USB 3.0 A-Cケーブル [グレー, 2m]](https://www.amazon.co.jp/gp/product/B09B1S259F/)||
|TRRSケーブル|必要|4極仕様|[TRRSケーブル 1m [白]](https://shop.yushakobo.jp/products/trrs_cable?variant=40975953166497)||
|配線材 60cm~|必要|太くないもの。Underglow時は+2mで余裕のはず|キットに付属していたものと、家に転がっていたもの|径はある程度細い方が良いと思います。|
|抵抗 5.1kΩ x4|必要|リードタイプ|[OSOYOO 電子工作基本部品セット](https://www.amazon.co.jp/gp/product/B01MFBMX8A/)|2017/12に購入していたものを流用。部品セットで買っておくのはおすすめ。|
|テープLED|Underglowで必要|WS2812B搭載|[フルカラーシリアルLEDテープ 6個タイプ [x3]](https://shop.yushakobo.jp/products/a01sl-00)|とりあえず、x18（公式ガイド）を使います。数は自由なので、より光らせたい方は増やしてください。|

## 必要な工具

|カテゴリ|必要性|選定条件|今回使用した工具|説明|
|------|-----|-------|-------------|---|
|半田ごて|必要|温度調整付き|[白光(HAKKO) ダイヤル式温度制御はんだこて FX600-02](https://www.amazon.co.jp/gp/product/B006MQD7M4/)|多くの方（私も含む）がおすすめしている半田ごてです。|
|こて台|必要|半田ごてに対応したもの。クリーニングワイヤー付き|[白光(HAKKO) こて台 FX-600/FX-601/PRESTO/DASH用 633-01](https://www.amazon.co.jp/gp/product/B000TGNWCS/)||
|こて先|推奨|C/CF型 or D型、Φ1.5mm付近|[白光(HAKKO) こて先 1.6D型 FX-600/FX-8801/FX-8803用 T18-D16](https://www.amazon.co.jp/gp/product/B004OR9BV4/)|半田ごてに大体付属するB型では熱の伝わりが悪いので交換をお勧めします。[1.5CF型](https://www.amazon.co.jp/gp/product/B004OR9BLO/)も同時に購入して使い勝手を比較検討した結果、D型を選択しました。|
|コンセントスイッチ|推奨|-|家に転がっていたもの|FX600と組み合わせて、電源のON/OFFが出来るようにもしておきます。|
|半田|必要|0.6mm + 0.8mm +1.0mm、高品質、鉛入り|[goot(グット) 高密度集積基板用 鉛入りはんだ Φ0.6mm SD-60](https://www.amazon.co.jp/gp/product/B0029LGAJI/)、[goot(グット) 精密プリント基板用 鉛入りはんだ Φ0.8mm SD-62](https://www.amazon.co.jp/gp/product/B0029LGAMA/)、1.0mmは家に転がっていたもの。|今回はほぼ0.6mm+1.0mmを使いました。慣れていたら0.8mm+1.2mmで手早く半田付けできるかもしれません。中華製の半田はやめた方が良いです。|
|フラックス|推奨|-|[ホーザン(HOZAN) フラックス 鉛フリーハンダ対応 容量30mL H-722](https://www.amazon.co.jp/gp/product/B000TGJTUW/)|これがあるだけで、半田付けがしやすくなります。|
|フラックスリムーバー|推奨|ペンタイプ|[ホーザン(HOZAN) ペンタイプのフラックスクリーニング剤 Z-293-P](https://www.amazon.co.jp/gp/product/B07QK3VHKK/)|H-722の場合は、腐食防止よりも掃除の方が目的として大きいです。|
|ウエス|フラックスリムーバー使用で必要|-|[日本製紙クレシア ワイプオール X70 (50枚入り) 60570](https://www.amazon.co.jp/gp/product/B001EHK01M/)|もともと自転車の手入れに使っていたウエスを流用。汚れをふき取るのに使いました。もっと柔らかいウエスを使う方がbetter。|
|半田吸い取り線|必要|-|[goot(グット) はんだ吸取り線 3mm幅 1.5m巻き CP-3015 日本製](https://www.amazon.co.jp/gp/product/B001PR1KPQ/)|半田付けに失敗したときに必要。幅がもっと狭いものの方がbetter。|
|作業用耐熱マット|必要|-|家に転がっていたもの|半田付け時に必要。（机を傷つけないため。）|
|ニッパー|必要|-|家に転がっていたもの||
|ピンセット|推奨|-|家に転がっていたもの|通常のピンセットと逆作用ピンセットはどちらか好みの方を選べばOKです。|
|逆作用ピンセット|推奨|-|[ホーザン(HOZAN) 逆作用ピンセット P-89](https://www.amazon.co.jp/gp/product/B000TGJTLQ/)|通常のピンセットと逆作用ピンセットはどちらか好みの方を選べばOKです。今回、こちらを主に使っています。|
|テスター|必要|抵抗値計測機能付き|家に転がっていたもの|導通チェッカー、ダイオード確認機能付きがおすすめらしい。|
|仮止め/絶縁用テープ|必要|-|家に転がっていたセロハンテープ|仮止め用なら、マスキングテープがおすすめらしい。|
|ワイヤーストリッパー|推奨|握ると被膜が剥けるタイプ|家に転がっていたもの|ニッパーでの被膜剥きは失敗が多いし時間がかかる中で、ワイヤーストリッパーは失敗0で作業を完了できます。|
|キースイッチプラー|あると良い|-|[Switch puller (Blue and purple gradation scrub)](https://shop.yushakobo.jp/products/3820)|きれいなので購入。|
|キーキャッププラー|推奨|-|[Kailhキーキャッププラー](https://shop.yushakobo.jp/products/a0400kk-00-1)|せっかくなら一味違うやつを選びたいと思いました。付いているスイッチは押し心地が良くて楽しいです。|
|無反動ハンマー|あると良い|-|家に転がっていたもの|後半のアクリルケースのはめ込み工程で使用しました。完璧にケースを仕上げたい方は、やすりもご用意ください。|

## 今回買わなかった工具

- [リードベンダー](https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%83%8F%E3%83%A4%E3%83%88-RB-5-%E3%83%AA%E3%83%BC%E3%83%89%E3%83%99%E3%83%B3%E3%83%80%E3%83%BC-%E3%83%AA%E3%83%BC%E3%83%89%E7%B7%9A%E3%80%81%E9%83%A8%E5%93%81%E3%81%AE%E7%B0%A1%E6%98%93%E6%8A%98%E3%82%8A%E6%9B%B2%E3%81%92%E5%99%A8/dp/B00J3E11VQ/)  
  60個のダイオードのリード線全てを正確に折り曲げるのに使えそう。
- [半田吸い取り器](https://shop.yushakobo.jp/products/ss-02)  
  半田吸い取りの成功率を上げられそう。

材料や工具をしっかり吟味したら、準備は完了です。

<!--nextpage-->

## ビルド開始！

まずは、キットの中にある2枚のPCBとプレートを用意します。

![Imgur](https://i.imgur.com/PglYRCCh.jpg?1)

今回のキットにはリードタイプのダイオードが含まれていました。

![Imgur](https://i.imgur.com/TGzA0nRh.jpg)

キースイッチとダイオード（リードタイプ）は表面（ビルドガイドではスイッチ面）、他は裏面（部品面）に取り付けます。  
表面実装なダイオードが付属していた場合は、部品面に取り付けます。

## ダイオード x60の取り付け

手始めに1つのダイオードを取り付けます。  
リードベンダーか爪でリードを折り曲げた後、半田付けします。  
ダイオードには極性があり、カソード(K)側に線がくるようにします。

![Imgur](https://i.imgur.com/UXpAuIt.png)

![Imgur](https://i.imgur.com/52GE2FFh.jpg)  
スイッチ面

![Imgur](https://i.imgur.com/zs9do1th.jpg)  
部品面

終わったら、テスターで極性と半田付けの確認を行ってください。  
OKならば、残り59個のダイオードも同様に作業してください。

[![Imgur](https://i.imgur.com/Af0kYyYh.jpg?1)](https://i.imgur.com/Af0kYyY.jpg?1)

これで、3つの山場のうち1つが終わりました。  
一旦休憩をはさむことをお勧めします。

<!--nextpage-->

## TRRSジャック、タクトスイッチの取り付け

次はTRRSジャック、タクトスイッチを取り付けます。  
それぞれ穴に差し込んだ後、垂直になるようにマスキングテープなどで固定します。

![Imgur](https://i.imgur.com/wlvmWNNh.jpg)

半田付けします。

![Imgur](https://i.imgur.com/YJEuiqVh.jpg?1)

左右両方分が終わったら、TRRSケーブルを接続します。

![Imgur](https://i.imgur.com/CzzQPbfh.jpg)

テスターでTRRSジャックの各対称ピンの導通をチェックします。

## MCU用ピンヘッダの取り付け

キットに付属している6連結なピンヘッダを乗せます。

![Imgur](https://i.imgur.com/Ja1oMLGh.jpg)

その上に、MCUを差し込みます。

![Imgur](https://i.imgur.com/zB9go0th.jpg)

MCUとピンヘッダはまだ半田付けしません。ピンヘッダの位置固定のために差し込んだだけです。  
スイッチ面で半田付けします。

![Imgur](https://i.imgur.com/6lC6fhMh.jpg)

終わったら、一旦MCUを取り外して結構です。

## USB-Cコネクタ用ピンヘッダの取り付け

残りのピンヘッダをニッパーなどで2連結に切り分け、これを4つ用意します。

![Imgur](https://i.imgur.com/U50E9l7h.jpg)

ピンヘッダを乗せて固定します。

![Imgur](https://i.imgur.com/ZjgEeWFh.jpg)

スイッチ面から半田付けします。

![Imgur](https://i.imgur.com/9ab5ejkh.jpg)

一応USB-Cコネクタを乗せてみて、位置確認をします。

![Imgur](https://i.imgur.com/FGWP662h.jpg)

現時点の全体像は次のような感じです。

[![Imgur](https://i.imgur.com/Gdg4AIPh.jpg?1)](https://i.imgur.com/Gdg4AIP.jpg?1)  
スイッチ面

[![Imgur](https://i.imgur.com/7qIYCuoh.jpg?1)](https://i.imgur.com/7qIYCuo.jpg?1)  
部品面

## プレートへのキースイッチ x60のはめ込み

キースイッチを用意してください。

![Imgur](https://i.imgur.com/psTb03xh.jpg)  
（右）親指用スイッチ、（左）その他用スイッチ

今回は、親指用 (x12)とその他用(x48)に分けています。  
キースイッチを1つずつプレートに奥まではめ込んでいきます。

![Imgur](https://i.imgur.com/VhRWMH6h.jpg)  
表面

![Imgur](https://i.imgur.com/6At5jVih.jpg?1)  
裏面

## キースイッチ x60の取り付け

ケースの一部を下図のように用意します。（左右両方）

![Imgur](https://i.imgur.com/Hu3XOVph.jpg)  
左手側、キースイッチをはめ込んでいない時点での写真になります。

プレートとPCBを慎重に重ね合わせて、全てのキースイッチのピンがPCBのスイッチ穴から出ているかどうかを確認します。  
確認したら、ケースの一部で固定します。

![Imgur](https://i.imgur.com/LFI2aqlh.jpg?2)

たくさんの半田（1.0mmくらいの太めのもの）で半田付けします。

![Imgur](https://i.imgur.com/pIeXdeph.jpg?1)

ピンヘッダ付近のキースイッチのピンは短く切っておいてください。（干渉を避けるため）

これで、3つの山場のうち2つはクリアです。  
全体像は下図のような感じです。

[![Imgur](https://i.imgur.com/gm21RYnh.jpg)](https://i.imgur.com/gm21RYn.jpg)  
スイッチ面

[![Imgur](https://i.imgur.com/jZP4LwHh.jpg)](https://i.imgur.com/jZP4LwH.jpg)
部品面

<!--nextpage-->

## USB-Cコネクタの準備

USB-C to Cケーブルでキーボードを使うことも想定しなければいけないので、コネクタのCC1, CC2ピンを5.1kΩ抵抗でそれぞれプルダウン（抵抗を介してGNDにつなぐこと）します。  
5.1kΩ抵抗を4つ用意します。

![Imgur](https://i.imgur.com/ZPSKVg8h.jpg?1)

半田付けします。

![Imgur](https://i.imgur.com/bA0oAaah.jpg?1)

終了です。

## USB-CコネクタとMCU間の配線材の準備

配線材を5.5cmくらいの長さで8本切り出します。

![Imgur](https://i.imgur.com/XVJ3RYah.jpg)

ワイヤーストリッパーなどで両端を2mmくらい被膜を剥きます。

![Imgur](https://i.imgur.com/iML3YoAh.jpg)

予備半田します。  
先端がばらけないようにするのと、被膜を出来るだけ溶かさないように注意します。

![Imgur](https://i.imgur.com/88t992Rh.jpg)

配線材の準備は完了です。

## USBコネクタとMCUの接続

MCUのUSB端子を予備半田します。

![Imgur](https://i.imgur.com/fy3B2A3h.jpg)

USBコネクタと配線材、配線材とMCUを半田付けします。  
USBコネクタ裏面の半田付け突出部分はより短く切っておいてください。（干渉するため）

![Imgur](https://i.imgur.com/Xcz30zwh.jpg)  
表面

![Imgur](https://i.imgur.com/rlfIoFTh.jpg)  
裏面

完了したら、テスターで各ピンの導通チェックしてください。

## MCUに実装されている電源LEDの取り外し

MCUにあるPと書かれた部分にLEDが実装されていますが、かなり明るいらしいです。  
邪魔なので取り外しましょう。  
半田吸い取り線などを使って半田を吸い取っていき、LEDを取り外します。

[![Imgur](https://i.imgur.com/cqDyOcLh.jpg)](https://i.imgur.com/cqDyOcL.jpg)  
成功例

[![Imgur](https://i.imgur.com/rzheI0Eh.jpg)](https://i.imgur.com/rzheI0E.jpg)  
失敗例

## [Underglow] 配線材をMCUに追加

Underglowする場合、各MCUの5V, GNDに追加で長めの配線材を半田付けします。

![Imgur](https://i.imgur.com/9BO7xZqh.jpg?1)

![Imgur](https://i.imgur.com/9502AFMh.jpg)  
写真のような長さがあればOKです。

配線材の先端は絶縁用のテープで巻いておいてください。

## USBコネクタとMCUの取り付け

PCBの各ピンヘッダーとUSBコネクタ、MCUを半田付けします。  
USBコネクタは裏表どちらでも良いです。乗せたときにキースイッチのピンの尖りとUSBコネクタ基板の裏が干渉しないことを確認します。  
MCUは裏表を考えて、PCBとMCU上のシルク（3V3など）を一致させてください。

![Imgur](https://i.imgur.com/9502AFMh.jpg)

出来たら、TRRSケーブルは抜いている状態であることを確認します。

<!--nextpage-->

## 動作テスト (1/2)

### USBコネクタ、MCUのテスト

この段階でキーボードが正常機能するかどうかを確認しておきたいです。  
まずは動作テストの前準備を行います。  
今回使用するOSはWindows 11です。  
「PCの設定 > Bluetoothとデバイス > その他のデバイスを表示」を開いておきます。  
キーボードとPCを接続します。異常があれば早めにケーブルを抜いて、トラブルシューティングしてください。

認識できたら、Arduinoか何かが表示されます。

### MCUへのファームウェア書き込み

まずはPCにビルド環境などをセットアップします。

https://docs.qmk.fm/#/newbs_getting_started

qmk setupまでを実行し、

https://qiita.com/s14stat/items/958fff68ee682208c685

上記ページを参考に、etc/nsswitch.confを確認します。  
これでファームウェア書き込み環境は構築できました。

https://github.com/Pekaso/fortitude60/blob/master/Documents/firmware_flashing-jp_new.md

上記ページを参考に、ファームウェアの書き込みを行います。

### キースイッチ x60のテスト

全部のキースイッチが押して反応するかどうかをチェックします。  
ビルドガイドに掲載されている「テスト用ファームのキーマップ」を参考に、キーボードテストツールで全キーを確認してください。

## [Underglow] LEDテープの取り付け

追加の配線材とLEDテープを用意し、適切な長さに切り分けておきます。  
今回はLEDを18個使います。

![Imgur](https://i.imgur.com/HYp1UDMh.jpg)

下写真を参考に、配線していきます。

[![Imgur](https://i.imgur.com/8gDgAzxh.jpg)](https://i.imgur.com/8gDgAzx.jpg)

LEDテープと配線材間は、絶縁用テープで巻いておきます。

![Imgur](https://i.imgur.com/5H4dhIqh.jpg)

他の金属むき出し部分も絶縁用テープで巻いておきます。

## [Underglow] 動作テスト (2/2)

LEDが光るかどうかのテストを行います。  
Underglowをしない方はこの手順はスキップしてください。

qmk_firmware/keyboards/fortitude60/keymaps/defaultを開き、  
rules.mkに"RGBLIGHT_ENABLE = yes"、  
config.hに"define RGBLED_NUM <LEDの数>"を追記します。

キーボードにTRRSケーブルを接続します。  
PCとキーボードの左手側を接続します。  
2回目以降のファームウェア書き込み（通常版）を行います。  
書き込みが完了してLEDが全て光ったら、動作テストオールグリーンです。

## ケースの組み立てなど

ハードウェア編最後の手順であり、3つのうちの最後の山場です。  
下写真でケースパーツの形と位置を確認します。  
平らな辺は上、凸凹は下にします。

![Imgur](https://i.imgur.com/lTpAzXzh.jpg?1)

アクリルの保護シートを両面とも剥がし、慎重に割れないように組み立てていってください。  
色々な組み方があるようなので、ダクったり (DuckDuckGo)、ググったりして自分に合う方法を見つけてください。

終わったら、底蓋とゴム足を取り付けます。  
この時点で次の通りになります。

![Imgur](https://i.imgur.com/n2KORU7h.jpg)  
上面

![Imgur](https://i.imgur.com/3EQPfLph.jpg)  
裏面

最後にキーキャップを取り付けて完成です。

![Imgur](https://i.imgur.com/G6e7PpSh.jpg)

TRRSケーブルとUSBケーブルをつないだら実際に使えます。

![Imgur](https://i.imgur.com/PecDl3ch.jpg)  
TRRSケーブルが十分長いと、このような配置も可能です。（これは1m）

Underglowの場合、ゲーミングキーボードのようなパリピなライティング設定もできれば、

![Imgur](https://i.imgur.com/z0GmJnjh.jpg)  
CoolerMasterぽい設定、彩度/輝度MAX

![Imgur](https://i.imgur.com/FS69LESh.jpg)  
Razerぽい設定、彩度/輝度MAX

Appleぽい光り方もさせられます。

![Imgur](https://i.imgur.com/ZxDq9Llh.jpg)  
Appleぽい設定、彩度0%、輝度50%

あえて光らせない設定も可能です。

<!--nextpage-->

## ファームウェアのチューニング

ここから完全にソフトウェア編です。  
このままキーボードを使い始めても良いですが、追加設定でより快適になります。

https://docs.qmk.fm/#/syllabus  
https://zenn.dev/koron/articles/98324ab760e83a

上記サイトや次のようなものなどを参考に、設定を煮詰めていってください。

### スリープ時LED自動消灯

qmk_firmware/keyboards/fortitude60/keymaps/<キーマップ名>/config.hに、  
「#define RGBLIGHT_SLEEP」を追記します。

### ファームウェアサイズ縮小など

qmk_firmware/keyboards/fortitude60/keymaps/<キーマップ名>/rules.mkに、  
「LTO_ENABLE = yes」を追記します。

### マウスキー無効化

qmk_firmware/keyboards/fortitude60/keymaps/<キーマップ名>/rules.mkに、  
「MOUSEKEY_ENABLE = no」を追記します。

### 拡張キー無効化

qmk_firmware/keyboards/fortitude60/keymaps/<キーマップ名>/rules.mkに、  
「EXTRAKEY_ENABLE = no」を追記します。

### BIOSにこのキーボードで入りたい

上記全て実行している場合、少なくとも私の環境では上手くいっています。

## キーマップのカスタマイズ

3つの方法があります。

- keymap.cを直接編集する
- [QMK Configurator](https://config.qmk.fm/#/fortitude60/rev1/LAYOUT)と[QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases)を使う  
  （config.h, rules.mk, keymap.cの追加関数が無視されそうで怖い）
- 上記2つのハイブリッド（おすすめ）
    1. [QMK Configurator](https://config.qmk.fm/#/fortitude60/rev1/LAYOUT)でjsonファイルを吐き出し、  
        qmkコマンドでc形式（拡張子は.h）に変換。
    1. keymap.cでhファイルをincludeする。
    1. hファイルに合わせる形で、keymap.cを編集する。
    1. あとはファームウェアのビルドと書き込みを行う。

これでソフトウェア編も終了です。  
お疲れさまでした。