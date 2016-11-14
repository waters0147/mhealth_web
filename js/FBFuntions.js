window.fbAsyncInit = function() {
	FB.init({
	appId      : '562962317233940',
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
      console.log('Successful login for: ' + response.id);
      document.location.href="member.php?username="+response.id;
      
    });
}

function fb_logout() {
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {
            window.location = 'https://www.facebook.com/logout.php?access_token=' + response.authResponse.accessToken + '&next=登出後要導向的頁面';
        }
    });
}

