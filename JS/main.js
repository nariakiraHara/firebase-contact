// DOMの操作
var strDisName = document.getElementById('name');
var strEmail = document.getElementById('eMail');

// 初期化
var strAddress = "";
var strUserName = "";
var strUserId = "";
function init(user) {
    strUserId = user.uid
    strAddress = user.email;
    strUserName = user.displayName;
    strEmail.innerHTML = user.email;
    strDisName.innerHTML = user.displayName;
}

// 送信ボタン押下時の処理
function sendMessage() {
    // textareaのメッセージを取得
    var strContent = document.getElementById('content').value;

    console.log(strContent);
    if (strContent == "" || strContent == null) {
        alert("メッセージを入力してください。");
        return;
    }

    if (confirm("メッセージを送信してよろしいですか？")) {
        // メールに記載したい情報
        var IsSendComp = inquiryProcessing(strContent);
        writeUserData(IsSendComp);
    } else {
        return
    }

    function writeUserData(bSend) {
      firebase.database().ref('contact/').set({
        username: strUserName,
        email: strEmail,
        message: strContent,
        userid: strUserId,
        sendFlag: bSend
      });
    }
}

