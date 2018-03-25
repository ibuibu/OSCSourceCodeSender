# OSCSourceCodeSender
TidalCyclesやGLSLを使ったライブコーディング向けに、ソースコードをOSCを経由して、各描画系のソフトに送ってくれるAtomのパッケージです。

Send the source code via OSC in real time for visual coding of live coding.

# 各コマンドの説明
## init
ここでOSCで送りたいホストとポートを設定できます。ホストとポートを入力して`setup osc`ボタンを押すと自動的に現在開いているファイルをソフト側に送るファイルとして設定して、ファイルの監視を開始します。
> 現在謎のバグとして、ホストとポートの変更をしようとした時に、`delete`では消えず、`cmd + delete`を押すことによって、消去することができます。

## attach_editor
送りたいファイルをAtomエディタで開いて、このコマンドを実行すると、ソースコードを送るファイルを変更できます。

## close
OSCの配信を停止します。

# OSCのパス

`"/editor_text" text`
ソースコードがリアルタイムで送信されてきます。

`"/run" 1`
TidalCyclesなどで`cmd + enter`や`shift + enter`を入力した時に検知してOSCを吐きます。

## 良いライブコーディングライフを!!
