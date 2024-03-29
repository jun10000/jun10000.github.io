---
title: "OM60 rev.1 ビルドガイド"
date: 2022-09-15T00:00:00+09:00
tags: ["自作キーボード", "OM60", "ビルドガイド"]
---
## はじめに

OM60キーボードをお買い上げいただき、ありがとうございます。

当キーボードはオーソリニア（格子配列）キーボードとして、または巨大なマクロパッドなどとしてお使いいただける汎用性重視のキーボードとなります。

Poker互換な60%ケースに合わせて設計されており、さらにスイッチプレートのデータを公開しております。  
ケースは幅広いラインナップから選択でき、スイッチプレートは切断堂、遊舎工房などに依頼して、自分好みの材質や仕上げのものを作成できます。

~~将来のファームウェア更新により、OM60に更なる機能追加をする予定です。~~  
2023/2/16 更新：Ver 2.0.1を以て、ファームウェア更新を終了させていただきます。  

## 購入対象者

半田付けにある程度慣れている方  
（ICのような極細ピッチを持つ、USB-Cコネクタの半田付けが出来る方）

## 部品/工具

### 付属品（標準キットの場合）

|名称|型番（仕様)|数量|備考|
|---|----------|---|---|
|PCB|OM60 PCB|1||
|ダイオード|1N4148W SOD123|80|リードタイプでの代用可|
|ピンソケット|FSS-41035-13|2||
|USB-C メスコネクタ|5077CR-16-SMC2-BK-TR|1||
|MicroUSB オスコネクタ|MOUSB-5BM103AS|1||
|タクトスイッチ|DTS-63-F-N-V-RED (TS-0606-F-N-R)|1||
|なべねじ|M2, 長さ12mm, 黄銅/金メッキ|5||
|六角ナット|M2, 長さ1.4mm, ポリカーボネート|2||
|中空スペーサー|M2, 長さ1mm, 黄銅/脱脂|10|足りない場合は別途追加|
|PORONフォーム|KBDfans module foam|1マスx8, 3マスx3, 4マスx3||
|リード線|UL1429AWG28|5cm x4||
|抵抗|5.1kΩ, リードタイプ|2||

### 別途必要な部品

|名称|型番（仕様)|数量|備考|
|---|----------|---|---|
|キーボードケース|Poker互換60%ケース|1|必要なネジ穴の位置は、「組み立て>ケースの加工」にて記述|
|スイッチプレート|2~3mm厚|1|切断堂、遊舎工房などに依頼して作成。おすすめの厚さ：3mm|
|キースイッチ|Cherry MX互換|68||
|キーキャップ|Cherry MX互換|68||
|ロータリーエンコーダ|EC12E互換, プッシュ対応|1||
|ロータリーエンコーダノブ|直径 ~30mm|1||
|キースイッチソケット|Kailh Switch Socket (Cherry MX用)|68||
|LED|SK6812MINI-E|69|キーボードのRGBライティングが必要な方のみ||
|マイコン|Pro Micro (MicroUSB版)|1|BLE Micro Proは、要望があれば対応するかもしれません|
|絶縁テープ||10cm~|破けにくいテープがおすすめ|
|USBケーブル|片方がType-Cのタイプ (C to C/A to C)|1||

### 別途必要な工具

|名称|試作で使用|備考|
|---|--------|----|
|半田ごて|白光 FX600-02、こて先：T18-D16、こて台：633-01|温度調節機能付き|
|半田|goot 0.6mm, 1.2mm半田|0.3mmなどの極細半田を追加するとより良いと思います|
|テスター|A&D AD-5504|導通、ダイオードチェック機能付き|
|拡大鏡、ライト||ダイオードなどの極小部品のチェックに必要|
|フラックス|ホーザン H-722|細かな部品の半田付けに必要。フラックスリムーバー、ウエスは必要に応じて追加|
|作業用耐熱マット||机などを傷めないために必要|
|ニッパー||切れ味が悪くないものがおすすめ|
|ピンセット|ホーザン P-89|表面実装部品の正確な配置に必要|
|仮止めテープ||マスキングテープがおすすめらしい|
|ワイヤーストリッパー||リード線の被膜を剥くのにかなりおすすめ
|+ドライバー||M2ネジを回すのに必要。ISO No.1, JIS No.0, JCIS No.0でOKのはずです([参考](http://faq.hozan.co.jp/support/faq/detail?id=2))
|慌てない心||品質よりもスピードを重視しすぎて、エラーを重ねないように気を付けましょう

他にも必要な工具があったらその都度追加してください。

## 付録データ

[こちら](https://github.com/jun10000/OM60/tree/main/rev1/other)でデータを公開しています。

## 組み立て

### ケースの加工

Poker互換ケースは製品によって、ネジ穴の数が違うことがあります。  
今回は、左端、右端、中央、左上、右上のネジ穴を使うため、それ以外は切除します。

![Imgur](https://i.imgur.com/omTeOCs.png)

以下は、プラスチックケースの例です。

![Imgur](https://i.imgur.com/YF7xaaRh.jpg)

プラスチックケースの場合、ニッパーなどで簡単にネジ穴を切除できます。

![Imgur](https://i.imgur.com/9gL5C35h.jpg)

### PCB半田付け作業前に

PCBの表面には「OM60」ロゴが入っており、キースイッチ、抵抗、ロータリーエンコーダが載る面になります。

![Imgur](https://i.imgur.com/dLeo6PIh.jpg)

PCBの裏面には、それ以外の部品が載る面になります。

![Imgur](https://i.imgur.com/mTY5dLOh.jpg)

半田付け作業にはUSB-Cコネクタの取付も含まれています。

![Imgur](https://i.imgur.com/lQS2Pa8h.jpg)

なので、こういった極細ピッチの作業が初めての方は、先にUSB-Cコネクタの取付をすることをお勧めします。  
仮に失敗しても、交換する材料が基板とUSB-Cコネクタだけで済むためです。

### ダイオード x69の取り付け

これから半田付け作業に入ります。  
付属している表面実装タイプのダイオードの場合、裏面に半田付けしていきます。  
表面実装タイプは刻印が小さくて見えずらいため、拡大鏡やライトを照らしたりなどして、刻印を確認します。  
以降、表面実装のダイオード、LED、USBコネクタなどの微小部品は、フラックスを使ってください。  
PCBのシルクの極性とダイオードの極性を必ず一致させながら、半田付けを行ってください。

![Imgur](https://i.imgur.com/fSdJkMUh.jpg)

全てのダイオードの取り付けが終わったら、下写真のようになります。

[![Imgur](https://i.imgur.com/7NiT5tWh.jpg)](https://i.imgur.com/7NiT5tW.jpg)

### キースイッチソケット x68の取り付け

この手順は、多量の半田を必要とします。  
1.0mm以上の半田を用意することをお勧めします。

穴に合わせてソケットを置き、

![Imgur](https://i.imgur.com/DLhXSxyh.jpg)

これでもかというほど多量の半田で半田付けします。

![Imgur](https://i.imgur.com/fLyuosIh.jpg)

全てのソケットの取り付けが完了したら、以下の通りになります。

[![Imgur](https://i.imgur.com/sRvPVLMh.jpg)](https://i.imgur.com/sRvPVLM.jpg)

### LED x2の取り付け

※LEDを光らせない方は、この手順をスキップしてください。

LEDに隣り合っているピンソケット（長い四角形のシルクがある場所）になるべく干渉しないように、下写真の通りにLEDを2個だけ取り付けます。  
LEDの極性には注意してください。4ピンのうち1ピンだけ切り欠きがあるのですが、それがGndです。

![Imgur](https://i.imgur.com/29V3p9oh.jpg)

その後基板に、ピンソケットとピンヘッダー、マイコンを合体させた（半田付けはしない）ものを載せられるかどうかチェックします。

![Imgur](https://i.imgur.com/NYfQEzXh.jpg)

### マイコンとピンヘッダーの半田付け

下写真の通りに、USBコネクタがある側にピンヘッダーを取り付けます。  
ピンヘッダーの余り部分をニッパーで切り落としてから半田付けすると、仕上がりは写真よりもきれいになると思います。

![Imgur](https://i.imgur.com/oSGvOBzh.jpg)

### USB-Cコネクタの取り付け

※極細ピッチの作業が初めての方はこちらを先に実施することをお勧めします。

基板に設けられた穴にUSB-Cコネクタを嵌め、半田付けします。  
必ずフラックスを塗り、0.6mm以下の極細半田を使い、半田がコネクタの根元に流れないように注意したいです。  
事前にインターネット動画などを見まくってコツなどを知りつつ、イメージをすることをお勧めします。  
「IC はんだ付け」などで検索するといっぱい出てくるはずです。

![Imgur](https://i.imgur.com/ir1UsLah.jpg)

取り付けが終わったら、テスター、拡大鏡で隣り合うピン同士がブリッジしていないかをチェックします。  
穴よりも内側の12ピンのうち、左から1,2番目、右から1,2番目のピンは、それぞれGround (0V)とVBus (5V)、つまり電源ピンです。  
特にこの2ピンだけはブリッジしないように注意しなければ、最悪PC側のUSBポートも壊れる可能性があります。

![Imgur](https://i.imgur.com/cOtWYaih.jpg)

### タクトスイッチの取り付け

マイコンにファームウェアを書き込んだりする際にタクトスイッチを使います。  
下写真のように、タクトスイッチを半田付けします。

![Imgur](https://i.imgur.com/GexmlAJh.jpg)

### 基板とピンソケットの半田付け

基板にピンソケットを半田付けします。

![Imgur](https://i.imgur.com/Tj1JHE6h.jpg)

### リード線 x4の取り付け

写真の通りに、5cmくらいのリード線を4本用意し、予備半田しておきます。

![Imgur](https://i.imgur.com/ULGKhkhh.jpg)

まずは、USBオスコネクタにリード線を取り付けます。  
USBオスコネクタのピンアサインは以下の通りになります。

![Imgur](https://i.imgur.com/Da41rKh.png)

|Number|Pin Assignment|
|------|--------------|
|1|VBUS|
|2|D-|
|3|D+|
|4|ID（未接続）|
|5|GND|

半田付けが終わったら、テスターなどでブリッジがないかどうかを確認します。

完了したら、リード線のもう片方をそれぞれ基板に取り付けます。  
上記ピンアサインと基板上のシルクを一致させてください。

半田付けが終わり、USBオスコネクタをマイコンに接続した様子は以下写真の通りになります。  
マイコンがPro Microの場合、世間では「モゲMicro」と揶揄されるほどMicroUSBコネクタの強度が弱いため、不安な方は一応何かしらで補強しておいてもよいかもしれませんね。

![Imgur](https://i.imgur.com/0f5fMFhh.jpg)

### 抵抗 x2の取り付け

5.1kΩ抵抗を写真の通りに取り付けます。

![Imgur](https://i.imgur.com/ORT7DUJh.jpg)

### 動作テスト1

PCと基板をUSBケーブルで接続して、デバイスが認識されるかどうかを確認します。  
認識された場合、おそらく「Pro Micro」などのような名前でデバイスリストに出現すると思います。  
認識されなかった場合、USB-Cを裏返しにして差し込んだり、PCにマイコンに直に接続したり、抵抗を付け忘れていないかどうかをチェックなどしてトラブルシューティングしてください。

問題がなければ、次の手順に進みます。

### ファームウェア書き込み

マイコンにファームウェアを書き込みます。  
[Remap](https://remap-keys.app/)の[OM60ページ](https://remap-keys.app/catalog/SwWjvkwkobo9wZiQiGs9)にてファームウェアを書き込むことができます。  
Bootloaderはcaterinaを指定してください。  
細かな手順は変更される可能性があるため、ここでは紹介できません。ご了承ください。  
書き込みが成功した場合、デバイスの名前は「OM60」と表示されるようになります。

### 動作テスト2（オプション）
全てのダイオードが正しく取り付けられているかどうかをチェックします。  
基板をPCに接続した状態で、下記画像の通りにピンセットなどでショートさせることにより、該当するキーが認識されます。  
キーチェッカーを使い、全ての該当するキーが認識されるかどうかを確認してください。

![Imgur](https://i.imgur.com/UqfelkXh.jpg)

### LED x67の取り付け

前にやった、LEDの取り付けの続きです。  
残りの67個のLEDを半田付けしていきます。

![Imgur](https://i.imgur.com/eJtt3dvh.jpg)

完了したら、以下の通りになります。

[![Imgur](https://i.imgur.com/MJ2aM5Yh.jpg)](https://i.imgur.com/MJ2aM5Y.jpg)

### 動作テスト3

もう一度基板をPCに接続します。  
全てのLEDが光れば成功です。  
あるLEDからまとまって点灯しない場合、半田付けがしっかりできていないか、LEDが半田ごての熱などで壊れている可能性があります。

問題がなければ次に進みます。

### ロータリーエンコーダの取り付け

基板にロータリーエンコーダを取り付けます。  
下写真は、PCBの裏面です。

![Imgur](https://i.imgur.com/Lb2yDsNh.jpg)

現時点での、PCB表面の全体像は下記の通りになります。

[![Imgur](https://i.imgur.com/2IKqK0Qh.jpg)](https://i.imgur.com/2IKqK0Q.jpg)

### 絶縁テープを貼る

ケースが金属製などの場合、マイコン周りと接触してショートしないように、絶縁テープでガードしておきます。

![Imgur](https://i.imgur.com/V3tmF4ph.jpg)

他にも怪しいところがあったら、絶縁テープを貼っておくことをお勧めします。

### 動作テスト4

基板をPCに接続し、ロータリーエンコーダを回したりプッシュしたりして、音量-/+、ミュートになるか確認します。  
問題なければ、次へ。

### PORONフォームの貼り付け

スイッチプレートと少量のキースイッチ、PORONフォーム（ここではKBDfans module foam）を用意します。  
PORONフォームは打鍵感の改善のほかに、キースイッチとスイッチプレートが分離しないようにするための軽減策として用います。

下写真を参考にしながら、スイッチプレートにPORONフォームを貼り付けていきます。  
ネジ穴の近くにPORONフォームを貼り付けていきつつ、ガラ空き部分ができないようにまんべんなく貼り付けていきます。  
下写真ではロータリーエンコーダにも貼っちゃっていますが、本当は要りません。

![Imgur](https://i.imgur.com/y5eJ3Foh.jpg)

### キースイッチ x68の取り付け

スイッチプレートにキースイッチをはめ、さらにキースイッチの足を基板に差し込みます。  
キースイッチの足がなかなか入らない場合、足が曲がっていると思われます。曲がっていたら真っ直ぐに修正してください。

![Imgur](https://i.imgur.com/Z4aRLmhh.jpg)

### スペーサーの挟み込み（オプション）

キースイッチがスイッチプレートから分離してしまう方は、スペーサーをご利用ください。  
ネジ穴周りのスイッチプレートと基板の隙間が必ず保持され、スイッチプレートが沈むことがほぼ無くなります。  
ただし、打鍵感は固くなる可能性があります。  
スペーサーの長さは1mmなので、3mmプレートならスペーサー2個、2mmプレートならスペーサー3個使います。

![Imgur](https://i.imgur.com/gsik4eYh.jpg)

### ナットの取り付け

ネジ穴のうち、左上、右上のところにネジを通し、裏からナットを取り付けます。  
締め付けはしなくて結構です。

![Imgur](https://i.imgur.com/slbvpFdh.jpg)

### キーボードケースへの格納

基板群をケースに取り付けます。  
USB-Cコネクタをケースの穴にくぐらせ、基板やネジに力が強くかかり過ぎないようにしながら、5本のネジでネジ止めします。  
初めに左上と右上のねじをかなり弱めてから、5本のネジを全体的に締め付けていきます。  
ネジが引っかかったら、基板群全体をケースの下側に寄せ、さらにネジを締め付けます。  
あまりネジ止めを強くしすぎると、キースイッチがスイッチプレートから分離してしまうのでやめましょう。

![Imgur](https://i.imgur.com/ALhXKgah.jpg)

ネジ止めしたら、ケースのUSB端子用の穴からUSB-Cコネクタが出ているか、ケースの裏面の穴からタクトスイッチにアクセスできるかどうかなどをチェックしましょう。

### ケースの仕上げ

ケースの裏面にゴム足が取り付けられていない場合、ゴム足を取り付けます。

![Imgur](https://i.imgur.com/HY8iM9Fh.jpg)

### キーキャップ x68の取り付け

キースイッチにキーキャップを取り付けます。

![Imgur](https://i.imgur.com/dTJZZjwh.jpg)

### ロータリーエンコーダノブの取り付け

ロータリーエンコーダにノブを取り付けます。

![Imgur](https://i.imgur.com/fZYV7hOh.jpg)

### 動作テスト5 (Final)

PCにキーボードを接続します。  
キーチェッカーを使い、全てのキースイッチが認識するかどうかをチェックします。  
認識テストがパスしたなら・・・

おめでとうございます！！！  
無事にキーボードが完成しました。  
基本的に[Remap](https://remap-keys.app/)、ロータリーエンコーダへの機能割り当てについては[VIA](https://www.caniusevia.com/)を使って、キーの割り当て、LEDの光らせ方などのカスタマイズを楽しんでもらえたらと思います。

![Imgur](https://i.imgur.com/n9C3eNFh.jpg)
