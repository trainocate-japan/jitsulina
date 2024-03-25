(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{308:function(t,s,a){"use strict";a.r(s);var _=a(14),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"実務で使えるlinux-入門編-演習手順"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#実務で使えるlinux-入門編-演習手順"}},[t._v("#")]),t._v(" 実務で使えるLinux 入門編 演習手順")]),t._v(" "),s("h2",{attrs:{id:"演習4-プロセス管理とパッケージ管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習4-プロセス管理とパッケージ管理"}},[t._v("#")]),t._v(" 演習4 プロセス管理とパッケージ管理")]),t._v(" "),s("h3",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),s("ul",[s("li",[t._v("アプリケーションソフトウェアの管理単位であるプロセスの基本的な確認方法や操作方法を学びます")]),t._v(" "),s("li",[t._v("アプリケーションパッケージのインストールとアンインストール、代表的なパッケージ管理コマンドであるdnfやrpmの基本的な操作方法を学びます")])]),t._v(" "),s("h4",{attrs:{id:"所要時間"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所要時間"}},[t._v("#")]),t._v(" 所要時間")]),t._v(" "),s("p",[t._v("40分")]),t._v(" "),s("h3",{attrs:{id:"実施内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#実施内容"}},[t._v("#")]),t._v(" 実施内容")]),t._v(" "),s("ul",[s("li",[t._v("プロセスの稼働状況の確認")]),t._v(" "),s("li",[t._v("ジョブの管理")]),t._v(" "),s("li",[t._v("パッケージ管理とサーバープロセスの管理")])]),t._v(" "),s("h3",{attrs:{id:"演習-プロセスの稼働状況の確認"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-プロセスの稼働状況の確認"}},[t._v("#")]),t._v(" 演習：プロセスの稼働状況の確認")]),t._v(" "),s("h4",{attrs:{id:"_1-プロセス一覧を確認するコマンドを実行してください。表示形式は問いません"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-プロセス一覧を確認するコマンドを実行してください。表示形式は問いません"}},[t._v("#")]),t._v(" 1. プロセス一覧を確認するコマンドを実行してください。表示形式は問いません")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("ps")])]),t._v(" "),s("h4",{attrs:{id:"_1-プロセス一覧を確認するコマンドを実行してください。今回は、全てのプロセスを詳細に長いフォーマットで表示してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-プロセス一覧を確認するコマンドを実行してください。今回は、全てのプロセスを詳細に長いフォーマットで表示してください"}},[t._v("#")]),t._v(" 1. プロセス一覧を確認するコマンドを実行してください。今回は、全てのプロセスを詳細に長いフォーマットで表示してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("ps -efl")])]),t._v(" "),s("h4",{attrs:{id:"_1-全てのユーザーのbashプロセスのみを表示してください。パイプラインを使いましょう。フォーマットは問いません"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-全てのユーザーのbashプロセスのみを表示してください。パイプラインを使いましょう。フォーマットは問いません"}},[t._v("#")]),t._v(" 1. 全てのユーザーのbashプロセスのみを表示してください。パイプラインを使いましょう。フォーマットは問いません")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("ps -efl|grep bash")])]),t._v(" "),s("h4",{attrs:{id:"_1-ツリー状に全プロセスを表示し、pidが1番のプロセスが何かを確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ツリー状に全プロセスを表示し、pidが1番のプロセスが何かを確認してください"}},[t._v("#")]),t._v(" 1. ツリー状に全プロセスを表示し、PIDが1番のプロセスが何かを確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("pstree -p")])]),t._v(" "),s("h4",{attrs:{id:"_1-ツリー状に全プロセスを表示し、pidが1番のプロセスを確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ツリー状に全プロセスを表示し、pidが1番のプロセスを確認してください"}},[t._v("#")]),t._v(" 1. ツリー状に全プロセスを表示し、PIDが1番のプロセスを確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("pstree -p")])]),t._v(" "),s("h4",{attrs:{id:"_1-現在稼働中のプロセスをリアルタイムで確認して、最もcpuを使用しているプロセス名を確認してください。確認が終わったらそのコマンドを終了してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-現在稼働中のプロセスをリアルタイムで確認して、最もcpuを使用しているプロセス名を確認してください。確認が終わったらそのコマンドを終了してください"}},[t._v("#")]),t._v(" 1. 現在稼働中のプロセスをリアルタイムで確認して、最もcpuを使用しているプロセス名を確認してください。確認が終わったらそのコマンドを終了してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("top\n"),s("br"),t._v("\nq ボタンで終了")])]),t._v(" "),s("h4",{attrs:{id:"_1-現在稼働中のプロセスをリアルタイムで確認して、最もcpuを使用しているプロセス名を確認してください。確認が終わったらそのコマンドを終了してください-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-現在稼働中のプロセスをリアルタイムで確認して、最もcpuを使用しているプロセス名を確認してください。確認が終わったらそのコマンドを終了してください-2"}},[t._v("#")]),t._v(" 1. 現在稼働中のプロセスをリアルタイムで確認して、最もcpuを使用しているプロセス名を確認してください。確認が終わったらそのコマンドを終了してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("top\n"),s("br"),t._v("\nq ボタンで終了")])]),t._v(" "),s("h4",{attrs:{id:"_1-「vmstat」を実行してください。何がおきるでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-「vmstat」を実行してください。何がおきるでしょうか"}},[t._v("#")]),t._v(" 1. 「vmstat」を実行してください。何がおきるでしょうか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("メモリの状況やCPU使用率などが1行、表示される")])]),t._v(" "),s("h4",{attrs:{id:"_1-次は「vmstat-1」を実行してください。何がおきるでしょうか-またどうすれば停止できるでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-次は「vmstat-1」を実行してください。何がおきるでしょうか-またどうすれば停止できるでしょうか"}},[t._v("#")]),t._v(" 1. 次は「vmstat 1」を実行してください。何がおきるでしょうか？またどうすれば停止できるでしょうか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("メモリの状況やCPU使用率などが1秒ごとに表示される。Ctrl+C キーを押すことで停止")])]),t._v(" "),s("h3",{attrs:{id:"演習-ジョブの管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-ジョブの管理"}},[t._v("#")]),t._v(" 演習：ジョブの管理")]),t._v(" "),s("h4",{attrs:{id:"_1-vmstat-1-を実行し、その結果をsystem-status-txt-ファイルに保存してください。10秒ほど実行したら保存を停止してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vmstat-1-を実行し、その結果をsystem-status-txt-ファイルに保存してください。10秒ほど実行したら保存を停止してください"}},[t._v("#")]),t._v(" 1. vmstat 1 を実行し、その結果をsystem-status.txt ファイルに保存してください。10秒ほど実行したら保存を停止してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("vmstat 1 > system-status.txt\nCtrl + C キーで停止")])]),t._v(" "),s("h4",{attrs:{id:"_1-実行したコマンドの結果が画面に表示されなかった理由はなんでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-実行したコマンドの結果が画面に表示されなかった理由はなんでしょうか"}},[t._v("#")]),t._v(" 1. 実行したコマンドの結果が画面に表示されなかった理由はなんでしょうか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("出力リダイレクトでファイルに出力していたため")])]),t._v(" "),s("h4",{attrs:{id:"_1-system-status-txt-を表示してvmstatの実行結果を確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-system-status-txt-を表示してvmstatの実行結果を確認してください"}},[t._v("#")]),t._v(" 1. system-status.txt を表示してvmstatの実行結果を確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("cat system-status.txt")])]),t._v(" "),s("h4",{attrs:{id:"_1-現在時刻をsystem-status-txtの最後に追記しておいてください。次に進む前に結果を確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-現在時刻をsystem-status-txtの最後に追記しておいてください。次に進む前に結果を確認してください"}},[t._v("#")]),t._v(" 1. 現在時刻をsystem-status.txtの最後に追記しておいてください。次に進む前に結果を確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("date >> system-status.txt\n"),s("br"),t._v("\ncat system-status.txt\n"),s("br"),t._v("\nファイルの最後にdateコマンドの結果が記載されていればよい")])]),t._v(" "),s("h4",{attrs:{id:"_1-再びvmstat-1-を実行します。system-status-txtファイルに結果を追記していくように出力リダイレクトしてください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-再びvmstat-1-を実行します。system-status-txtファイルに結果を追記していくように出力リダイレクトしてください"}},[t._v("#")]),t._v(" 1. 再びvmstat 1 を実行します。system-status.txtファイルに結果を追記していくように出力リダイレクトしてください")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("出力リダイレクトの仕方を間違えるとこれまでの記録が全て消えますので十分注意してください")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("vmstat 1 >> system-status.txt")])]),t._v(" "),s("h4",{attrs:{id:"_1-vmstat-1-がフォアグラウンドで実行されているため、このままではシェルの操作を行えません。vmstat-1-の実行を一時停止してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vmstat-1-がフォアグラウンドで実行されているため、このままではシェルの操作を行えません。vmstat-1-の実行を一時停止してください"}},[t._v("#")]),t._v(" 1. vmstat 1 がフォアグラウンドで実行されているため、このままではシェルの操作を行えません。vmstat 1 の実行を一時停止してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("Ctrl + Z キーを押す")])]),t._v(" "),s("h4",{attrs:{id:"_1-このままではファイルへの記録が止まったままです。バックグラウンドで処理を続行してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-このままではファイルへの記録が止まったままです。バックグラウンドで処理を続行してください"}},[t._v("#")]),t._v(" 1. このままではファイルへの記録が止まったままです。バックグラウンドで処理を続行してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("jobs\n"),s("br"),t._v("\nジョブ番号を確認\n"),s("br"),t._v("\nbg ジョブ番号")])]),t._v(" "),s("h4",{attrs:{id:"_1-ジョブの状況を確認してください。vmstat-1-は実行中-running-ですか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ジョブの状況を確認してください。vmstat-1-は実行中-running-ですか"}},[t._v("#")]),t._v(" 1. ジョブの状況を確認してください。vmstat 1 は実行中(running)ですか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("jobs")])]),t._v(" "),s("h4",{attrs:{id:"_1-tail-f-system-status-txt-コマンドを実行して結果を確認し、何が起きているかを説明してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tail-f-system-status-txt-コマンドを実行して結果を確認し、何が起きているかを説明してください"}},[t._v("#")]),t._v(" 1. tail -f system-status.txt コマンドを実行して結果を確認し、何が起きているかを説明してください")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("tail -f は、更新されているファイルの末尾をリアルタイムに表示し続けるコマンドです")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("vmstat 1 はバックグラウンドで実行され、system-status.txtを更新し続けている")])]),t._v(" "),s("h4",{attrs:{id:"_1-vmstat-1-の実行を終了してください。方法は何でも構いません"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vmstat-1-の実行を終了してください。方法は何でも構いません"}},[t._v("#")]),t._v(" 1. vmstat 1 の実行を終了してください。方法は何でも構いません")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("ps|grep vmstat\n"),s("br"),t._v("\nkill プロセスID\n"),s("br"),t._v("\nもしくは\n"),s("br"),t._v("\nfg vmstatのジョブ番号\n"),s("br"),t._v("\nCtrl + C キー")])]),t._v(" "),s("h3",{attrs:{id:"演習-パッケージ管理とサーバープロセスの管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#演習-パッケージ管理とサーバープロセスの管理"}},[t._v("#")]),t._v(" 演習：パッケージ管理とサーバープロセスの管理")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("p",[t._v("パッケージ管理やサーバープロセスの操作はroot権限が必要です。演習では root ユーザーでの作業を行いますが、実務ではsudoなど安全な方法を使ってください。また、パスワードについても非常に簡単なものを設定していますが、実務では予想不可能な文字を使うように心がけてください")])]),t._v(" "),s("h4",{attrs:{id:"_1-rootユーザーに変更してください。パスワードは-password-です"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-rootユーザーに変更してください。パスワードは-password-です"}},[t._v("#")]),t._v(" 1. rootユーザーに変更してください。パスワードは password です")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("su -\n"),s("br"),t._v("\nパスワードを入力")])]),t._v(" "),s("h4",{attrs:{id:"_1-httpd-apache-web-server-が、まだインストールされていないことを確認してください。確認方法は問いません"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-httpd-apache-web-server-が、まだインストールされていないことを確認してください。確認方法は問いません"}},[t._v("#")]),t._v(" 1. httpd (Apache Web Server) が、まだインストールされていないことを確認してください。確認方法は問いません")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("rpm -qa|grep httpd\nなど")])]),t._v(" "),s("h4",{attrs:{id:"_1-httpd-apache-web-server-を-dnf-コマンドでインストールしてください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-httpd-apache-web-server-を-dnf-コマンドでインストールしてください"}},[t._v("#")]),t._v(" 1. httpd (Apache Web Server) を dnf コマンドでインストールしてください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("dnf install httpd")])]),t._v(" "),s("h4",{attrs:{id:"_1-httpd-を起動し、正常に起動したことを確認してください。可能であれば、curlコマンドなどでwebアクセスをしてみてください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-httpd-を起動し、正常に起動したことを確認してください。可能であれば、curlコマンドなどでwebアクセスをしてみてください"}},[t._v("#")]),t._v(" 1. httpd を起動し、正常に起動したことを確認してください。可能であれば、curlコマンドなどでWebアクセスをしてみてください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("systemctl start httpd\n"),s("br"),t._v("\nsystemctl status httpd\n"),s("br"),t._v("\ncurl http://localhost")])]),t._v(" "),s("h4",{attrs:{id:"_1-httpd-を停止してください。停止を確認後、アンインストールしてください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-httpd-を停止してください。停止を確認後、アンインストールしてください"}},[t._v("#")]),t._v(" 1. httpd を停止してください。停止を確認後、アンインストールしてください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("systemctl stop httpd\n"),s("br"),t._v("\nsystemctl status httpd\n"),s("br"),t._v("\ndnf remove httpd")])]),t._v(" "),s("h4",{attrs:{id:"_1-httpd-がアンインストールされたことを確認してください。方法は問いません"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-httpd-がアンインストールされたことを確認してください。方法は問いません"}},[t._v("#")]),t._v(" 1. httpd がアンインストールされたことを確認してください。方法は問いません")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("rpm -qa|grep httpd\nなど")])]),t._v(" "),s("h4",{attrs:{id:"_1-dnfコマンドを使い、httpd-のrpmパッケージファイルをカレントディレクトリにダウンロードしてください。ダウンロードができたことも確認してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-dnfコマンドを使い、httpd-のrpmパッケージファイルをカレントディレクトリにダウンロードしてください。ダウンロードができたことも確認してください"}},[t._v("#")]),t._v(" 1. dnfコマンドを使い、httpd のRPMパッケージファイルをカレントディレクトリにダウンロードしてください。ダウンロードができたことも確認してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("dnf download httpd\n"),s("br"),t._v("\nls -l")])]),t._v(" "),s("h4",{attrs:{id:"_1-rpmコマンドを使って、ダウンロードしたrpmファイルをインストールしてください。結果はどうでしょうか"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-rpmコマンドを使って、ダウンロードしたrpmファイルをインストールしてください。結果はどうでしょうか"}},[t._v("#")]),t._v(" 1. rpmコマンドを使って、ダウンロードしたrpmファイルをインストールしてください。結果はどうでしょうか？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("rpm -ivh httpd-2.4.57-8.el9.x86_64.rpm\n"),s("br"),t._v("\nエラー（依存性の欠如）が発生し、インストールできない")])]),t._v(" "),s("h4",{attrs:{id:"_1-dnfコマンドでは問題なくhttpdをインストールできたのに、rpmコマンドではできなかったわけを説明してください"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-dnfコマンドでは問題なくhttpdをインストールできたのに、rpmコマンドではできなかったわけを説明してください"}},[t._v("#")]),t._v(" 1. dnfコマンドでは問題なくhttpdをインストールできたのに、rpmコマンドではできなかったわけを説明してください")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("解答例")]),t._v(" "),s("p",[t._v("dnfコマンドでは、依存関係にあるRPMパッケージも同時にダウンロードしていた。rpmコマンドでは単体のパッケージのインストールしか行わないため、依存関係を解決できずにエラーとなった")])]),t._v(" "),s("h3",{attrs:{id:"以上で演習4は終了です。お疲れ様でした。早く終わった方は、復習や周りのメンバーのヘルプを行いましょう"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以上で演習4は終了です。お疲れ様でした。早く終わった方は、復習や周りのメンバーのヘルプを行いましょう"}},[t._v("#")]),t._v(" 以上で演習4は終了です。お疲れ様でした。早く終わった方は、復習や周りのメンバーのヘルプを行いましょう")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/intro/"}},[t._v("入門編の目次に戻る")]),t._v(" "),s("br")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/"}},[t._v("トップページに戻る")])],1)])}),[],!1,null,null,null);s.default=v.exports}}]);