#ForceCLI-GUI
A GUI app for Force.com CLI

##Introduction
This application is an implementation of [Force.com CLI][4] using [NodeWebkit][1]. The purpose is to make Force.com CLI easier to use.

This app is currently only running as a NodeWebkit app. And will be wrap as a package after finish implement some other Force.CLI features.

##Feature
Covered below feature from Force.com CLI, and will be add some more in the near future: 

以下のForce.com CLIの機能を実装しています。他の機能もこれから続々実装する予定：

 * [SOQL Query][6] 

##Usage

###English

 1. Download NodeWebkit binary [here][2]
 2. Download Force.com CLI binary that fit your OS [here][3]
 3. Clone this repository
 4. Place your Force.com CLI binary file inside the the source directory
 5. Place and run your NodeWebkit binary file from outside the the source directory

###日本語：

 1.  NodeWebkitのバイナリファイルをダウンロンド。[こちら][2]
 2. 自分のパソコンのOSのマッチしているForce.com CLIのバイナリをダウンロンド 。[こちら][3]
 3. このレポジトリをクローン
 4. Force.com CLIのバイナリをソースフォルダーに設置
 5. NodeWebkitのバイナリをソースフォルダーの外に設置し、実行

     $ node-webkit ForceCLI-GUI/

[1]: https://github.com/rogerwang/node-webkit
[2]: https://github.com/rogerwang/node-webkit/blob/master/README.md#downloads
[3]: https://github.com/heroku/force/tree/master/binaries
[4]: https://github.com/heroku/force
[5]: http://www.salesforce.com/us/developer/docs/soql_sosl/Content/sforce_api_calls_soql.htm