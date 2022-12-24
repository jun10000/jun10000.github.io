---
title: "Fortitude60のキーマップ紹介"
date: 2022-06-01T17:49:00+09:00
tags: ["自作キーボード", "fortitude60", "キーマップ"]
---
## 更新情報

|日付|内容|
|---|----|
|2022/9/17|追記しました|
|2022/6/8|keymap.cを更新しました|

## 前書き

自作キーボードを持つようになるとやっぱり、キーマップにこだわるようになります。  
私の場合、キーマップの改訂をすでに15回以上はやっている気がします。  
最近はようやく落ち着いてきたので、この時点でマイルストーンとして紹介します。

## キーマップ

### レイヤー0: Default

![Imgur](https://i.imgur.com/nswpUqw.png)

- ハイフンはよく使うので、2列目に設置
- バックスラッシュは左手側の空きスペースに設置
- Modifierキーのほとんどは親指側に設置
- Shiftキーだけは両手側に設置  
（組み合わせるキーがほぼ全てのため）
- TOコードは、後述するkeymap.cにて挙動を変更  
単押しでTOコード、長押しでMOコードになるように変更している。
- Controlキーと組み合わせるキーはほぼ左手にしかない代わりに、届きにくいキーも対象になる。  
そこで、右下への設置が妥当だと判断。
- IME ON、IME OFFキーは小指に担当させるため、Shiftキーに内包させる。  
長押し時にShiftキーとして、単押し時に左手側は英数、右手側はかなとして動作させる。  
なぜかWindows 11では「無変換」「変換」は認識せず、「英数」「かな」で認識。
- CapsLock, Deleteキーはレイヤーを切り替えずに使いたいので、右手の親指側の空き領域に設置

### レイヤー1: Lower

![Imgur](https://i.imgur.com/kbmO20j.png)

- ESDFカーソルを左手側に設置
- キーボード制御系コードを右手側に設置
- RESETコードの誤爆を防ぐため、ホームポジションからあえてずらしています。

### レイヤー2: Raise

![Imgur](https://i.imgur.com/uYgYn7a.png)

- Escキー、ファンクションキー、最上段の数字・記号、その他あまり使わないコンビネーションキーなどをこのレイヤーに置いています。
- テンキーのような便利さを手に入れるため、3列目に数字キーとピリオドを設置

## 各種ソースファイルなど

### config.h

```cpp
#pragma once

#define USE_SERIAL

#define RGBLED_NUM 18
#define RGBLIGHT_SLEEP
```

- 自動スリープ機能有効化

### rules.mk

```
VIA_ENABLE = no
LTO_ENABLE = yes

MOUSEKEY_ENABLE = no
EXTRAKEY_ENABLE = no
RGBLIGHT_ENABLE = yes
```

- VIAは非対応のため無効化
- マウスキー、拡張キー無効化

### keymap.c

```cpp
#include "jun.h"

#define _LOWER 1
#define _RAISE 2

#define LOWER TO(_LOWER)
#define RAISE TO(_RAISE)
#define ENG   KC_LANG2
#define JPN   KC_LANG1
#define SPACE KC_SPC
#define ENTER KC_ENT

static bool lower_pressed = false;
static bool raise_pressed = false;
static uint16_t lower_pressed_time = 0;
static uint16_t raise_pressed_time = 0;

bool process_record_user(uint16_t keycode, keyrecord_t *record) {
	switch (keycode) {
		case LOWER:
			if (record->event.pressed) {
				lower_pressed = true;
				lower_pressed_time = record->event.time;

				layer_off(_RAISE);
				layer_on(_LOWER);
			} else {
				if (!lower_pressed || (TIMER_DIFF_16(record->event.time, lower_pressed_time) >= TAPPING_TERM)) {
					layer_off(_LOWER);
				}

				lower_pressed = false;
			}
			return false;
			break;
		case RAISE:
			if (record->event.pressed) {
				raise_pressed = true;
				raise_pressed_time = record->event.time;

				layer_off(_LOWER);
				layer_on(_RAISE);
			} else {
				if (!raise_pressed || (TIMER_DIFF_16(record->event.time, raise_pressed_time) >= TAPPING_TERM)) {
				    layer_off(_RAISE);
				}

				raise_pressed = false;
			}
			return false;
			break;
		default:
			if (record->event.pressed) {
				lower_pressed = false;
				raise_pressed = false;
			}
			break;
	}
	return true;
}
```

- "jun.h"は、QMK Configuratorでエクスポートしたjsonファイルを"qmk json2c"コマンドでc形式ファイルに変換したもの  
つまり、大体のキーマップ変更はkeymap.cをいじる必要はない。
- LOWER, RAISEキーは単押しでTOコード、長押しでMOコードとして動作させている。

下記の情報を参考にさせて頂きました。ありがとうございます！

- [QMK Firmware で Raise/Lower と変換/無変換を同じキーに割り当てる](https://okapies.hateblo.jp/entry/2019/02/02/133953)
- [ErgoDash keymap implementing “correct” dual role RAISE/LOWER keys without `LT` advanced keycode](https://gist.github.com/okapies/5d13a174cbb13ce34dbd9faede9d0b71)

## 追記（2022/9/17）

[各種ソースファイルの最新版](https://github.com/jun10000/fortitude60_keymap)を公開しています。
