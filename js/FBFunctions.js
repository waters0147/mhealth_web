window.fbAsyncInit = function() {
    FB.init({
      appId      : '1095415993853029',
      xfbml      : true,
      version    : 'v2.8'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));




function checkLoginState(){
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {

    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      fetchFBId();

    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      alert('Please log into this app.');
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      alert('Please log into Facebook.');
    }
}

function fetchFBId() {

    FB.api('/me', function(response) {
      alert('Successful login for: ' + response.name);
      
      console.log('Successful login for: ' + response.name);
      document.cookie = 'username='+response.id;
      document.location.href='foodCalendar.php';    
    });
}

function fbLogIn(){
    FB.login(function(response) {
    // handle the response
    checkLoginState();
    }, {scope: 'public_profile,email'});
}

function fblogout(){     // facebook 登出
  FB.getLoginStatus(function (response){
    if(response.status === 'connected'){
      FB.logout(function(response){    //使用者已成功登出
        alert("成功登出。");
        localStorage.clear();
        //再 refresh 一次，讓登入登出按鈕能正常顯示
        location.replace( "放欲導回網站的URL" );
      });
    } 
    else if(response.status === 'not_authorized'){
      // 使用者已登入 Facebook，但是在你的app是無效的
      FB.logout(function (response) {     // 使用者已登出
        alert("請重新登入！");
      });
      } 
    else{    // 使用者沒有登入 Facebook
      alert("請重新登入！");
    }
  });
}


/*function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}*/
function getCookie(sName) {
  var aCookie = document.cookie.split('; ');
    for (var i=0; i < aCookie.length; i++) {
    var aCrumb = aCookie[i].split('=');
    if (sName == aCrumb[0])
    return decodeURI(aCrumb[1]);
 }
 return '';
}



