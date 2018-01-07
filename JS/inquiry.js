// 取得したクライアントID
var clientid = '708484824182-jo8temsd8ddea99eppdih3hfvi01gf5b.apps.googleusercontent.com'; 
// スコープを配列で指定して分解
var scopes = ['https://www.googleapis.com/auth/gmail.send'].join(' '); 

function onLoadCallbackFunction() {
    gapi.auth.authorize({'client_id': clientid, 'scope': scopes, 'immediate': true}, handleAuthResult);
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      // 認証後の処理
    } else {
      // 認証できていない時やエラーの時の処理
    }
}

function inquiryProcessing(strContent) {
    var bSend = false;
    bsend = gapi.client.load('gmail', 'v1', callbackFunction(strContent));
    return bsend;
}


function callbackFunction(strContent) {
    var mimeData = ["To: nariakra@gmail.com",
        "Subject: =?utf-8?B?" + window.btoa(unescape(encodeURIComponent("お取合せフォームからのメッセージ"))) + "?=",
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=UTF-8",
        "Content-Transfer-Encoding: 7bit",
            "",
        strContent].join("\n").trim();

        var raw = window.btoa(unescape(encodeURIComponent(mimeData))).replace(/\+/g, '-').replace(/\//g, '_');
        gapi.client.gmail.users.messages.send({
            'userId': 'me',
                'resource': {
                'raw': raw
            }
        }).execute(function() {
            // 送信後の処理
            return true;
        });
}