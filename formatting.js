//add favicon
document.getElementsByTagName("head").item(0).innerHTML +=  '<link rel="icon" href="http://bluef00t.neocities.org/favicon.ico" type="image/x-icon"/>';

var html = '';

html+= '<a href="https://bluef00t.neocities.org/"><img src="https://bluef00t.neocities.org/imgs/bluef00t_button.gif"></a>';

html += '<br>';
html += '<a href="https://bluef00t.neocities.org/art">My Art</a>';
html += '<li><a href="https://bluef00t.neocities.org/art/illustrations">illustration</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/art/comics">comics</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/art/zines">zines</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/art/blinkies">blinkies</a></li>';

html += '<a href="https://bluef00t.neocities.org/music">Music</a>';
html += '<li><a href="https://bluef00t.neocities.org/music/tmbg/">TMBG</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/music/lemondemon/">Neil Cic</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/music/tallyhall">tally hall</a></li>';

html += '<a href="https://bluef00t.neocities.org/misc">Misc</a>';
html += '<li><a href="https://bluef00t.neocities.org/misc">writing</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/comics/">comics</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/tech/sites">site design</a></li>';

html += '<a href="https://bluef00t.neocities.org/me.html">about</a>';
html += '<li><a href="https://bluef00t.neocities.org/contact.html">contact</a></li>';
html += '<li><a href="https://bluef00t.neocities.org/awards.html">webrings</a></li>';
html += '<p></p>'
html += '<a href="https://neocities.org/"><img src="https://bluef00t.neocities.org/imgs/neocities.gif"></a>';

//sidebar code
var desktop = '<div id="sidebar">' + html + '</div>';

//plain navigation link code
desktop += '<div class="frontpage-section" id="topbar">';
desktop += '<a href="https://bluef00t.neocities.org/navigation.html"> > Sitemap < </a>';
desktop += '<hr>';
desktop += '</div>';

var path = window.location.pathname;
var page = path.split("/").pop();

if(page=='navigation.html'){ //if on the navigation page, show the full navigation.
  document.getElementsByTagName("nav")[0].innerHTML = html;
}else {
  document.getElementsByTagName("nav")[0].innerHTML = desktop;
}

//build footer
let divider = ' | ';
let footerString = "";
footerString += '<hr>'
footerString += 'July 2018—Present.'
footerString += divider;
footerString += '<a href="https://bluef00t.neocities.org/contact.html">Contact</a>'
footerString += divider;
footerString +='<form style="display:inline-block;" method="get" action="https://www.google.com/search">Search: <input type="text" class="page__search-text" name="q" size="10" maxlength="255"/> <input type="hidden" name="sitesearch" value="bluef00t.neocities.org" /><button type="submit" class="page__search-submit" style="display:none;"></button></form>'
footerString += '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="float:right"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"></a>';
document.getElementsByTagName('footer')[0].innerHTML = footerString;
//document.getElementsByTagName('footer')[0].style.display="block";