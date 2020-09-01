document.write('INTERESTS');
document.write('<p><a href="comics/index.html">articles</a></p>');
document.write('<p><a href="music/index.html">music</a></p>');
document.write('<p><a href="links.html">links</a></p>');
document.write('ME');
document.write('<p><a href="about.html">about</a></p>');
document.write('<p><a href="mylinks.html">elsewhere</a></p>');



function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || window.innerWidth <= 800
 ){
    return true;
  }
 else {
    return false;
  }
}


var html = '<a href="https://bluef00t.neocities.org/"><img src="https://bluef00t.neocities.org/imgs/bluef00t_button.gif"></a>';

html += '<br>';
html += 'CREATIONS';
html += '<p><a href="https://bluef00t.neocities.org/art.html">art</a></p>';
html += '<p><a href="https://gumroad.com/bluef00t">comix/zines</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/robots/index.html">robots</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/blinkies.html">graphics</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/misc/index.html">misc</a></p>';

html += 'INTERESTS';
html += '<p><a href="https://bluef00t.neocities.org/music/index.html">music</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/misc/articles.html">articles</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/links.html">links</a></p>';

html += 'ME';
html += '<p><a href="https://bluef00t.neocities.org/me.html">about</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/mylinks.html">elsewhere</a></p>';

html += '<a href="https://neocities.org/"><img src="https://bluef00t.neocities.org/imgs/neocities.gif"></a>';

//desktop version
var desktop = '<sidebar>' + html + '</sidebar>';

//mobile redirect
var mobile = '';

mobile += '<topbar>';
mobile += '<a href="https://bluef00t.neocities.org/"><img src="https://bluef00t.neocities.org/imgs/bluef00t_button.gif" style="float:left;width:20%"></a>';
mobile += '<a href="https://bluef00t.neocities.org/navigation.html"><a href="https://bluef00t.neocities.org/navigation.html" style="font-size:200%; text-decoration:underline;"> SITE MAP </a>';
mobile += '<a href="https://neocities.org/"><img src="https://bluef00t.neocities.org/imgs/neocities.gif" style="float:right; width:20%;"></a>';
mobile += '</topbar>';


var path = window.location.pathname;
var page = path.split("/").pop();

if(page=='navigation.html'){ //if on the navigation page, show the full navigation.
  document.getElementById("sidebar").innerHTML = desktop;
}else if(detectmob()){
  document.getElementById("sidebar").innerHTML = mobile;
}else {
  document.getElementById("sidebar").innerHTML = desktop;
}