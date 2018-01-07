const functions = require('firebase-functions');
// const モジュール名(任意) = require('モジュールの場所')
const nodemailer = require('nodemailer');

// nodemailer: https://qiita.com/hshimo/items/ac599f5f25a3fa105ddd

exports.onCreateContact = functions.database.ref('/contact/{contactId}').onCreate(event => {
 // メール送信の処理を入れる。
});

// 関数のデプロイ方法
// firebase deploy --only functions

// 個別の関数のデプロイ
// firebase deploy --only functions:関数名

// exports.関数名 = functions.トリガー{
// 任意の処理
//}