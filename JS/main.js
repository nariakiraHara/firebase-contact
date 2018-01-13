
// DOMの操作
let strDisName = document.getElementById('name');
let strEmail = document.getElementById('eMail');

// 初期化
function init(user) {
    return userInfo = {
        userid: user.uid,
        userName: user.displayName,
        email: user.email
    };
}

function setUser(userInfo) {
    strEmail.innerHTML = userInfo.email;
    strDisName.innerHTML = userInfo.userName;
}

// 送信ボタン押下時の処理
function sendMessage(userInfo) {
    // textareaのメッセージを取得
    let strContent = document.getElementById('content').value;

    console.log(strContent);
    if (strContent == "" || strContent == null) {
        alert("メッセージを入力してください。");
        return;
    }

    if (confirm("メッセージを送信してよろしいですか？")) {
        // メールに記載したい情報
        writeUserData(userInfo);
    } else {
        return
    }

    function writeUserData(userInfo) {
      firebase.database().ref('contact/').push({
        username: userInfo.userName,
        email: userInfo.email,
        message: strContent,
        userid: userInfo.userid
      });
    }
}

