//add favicon (this is what I get for having a badly planned and haphazardly built static site.... sigh)
document.getElementsByTagName("head").item(0).innerHTML +=  '<link rel="icon" href="http://bluef00t.neocities.org/favicon.ico" type="image/x-icon"/>';


var html = '';

html+= '<a href="https://bluef00t.neocities.org/"><img src="https://bluef00t.neocities.org/imgs/bluef00t_button.gif"></a>';

html += '<br>';
html += 'CREATIONS';
html += '<p><a href="https://bluef00t.neocities.org/art.html">art</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/zines/index.html">zines</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/robots/index.html">robots</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/misc/index.html">miscellany</a></p>';

html += 'FUN STUFF';
html += '<p><a href="https://bluef00t.neocities.org/music/index.html">music</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/music/tmbg/">TMBG</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/misc/articles.html">articles</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/links.html">links</a></p>';
html += '<p><a href="https://bluef00t.neocities.org/awards.html">webrings</a></p>';

html += 'ME';
html += '<p><a href="https://bluef00t.neocities.org/me.html">about</a></p>';
html += '<p><a href="contact.html">my links</a></p>';
html += '<a href="https://neocities.org/"><img src="https://bluef00t.neocities.org/imgs/neocities.gif"></a>';

//desktop version
var desktop = '<sidebar>' + html + '</sidebar>';


desktop += '<topbar>';
desktop += '» <a href="https://bluef00t.neocities.org/navigation.html" style="text-decoration:underline;">NAVIGATION</a> «';
desktop += '</topbar>';

var path = window.location.pathname;
var page = path.split("/").pop();

if(page=='navigation.html'){ //if on the navigation page, show the full navigation.
  document.getElementById("sidebar").innerHTML = html;
}else {
  document.getElementById("sidebar").innerHTML = desktop;
}