//insert breadcrumbs on top bar
let url = window.location.href;
const crumbs = url.split("/");

let stepURL = 'https://bluef00t.neocities.org/';
let crumbstring = '<li><a href="https://bluef00t.neocities.org">Home</a> > <a href="https://bluef00t.neocities.org/navigation.html">Sitemap</a>';
for (let i = 3; i < crumbs.length-1; i++){
	stepURL += '/' + crumbs[i];
	crumbUppercase = crumbs[i].charAt(0).toUpperCase() + crumbs[i].slice(1)
	crumbstring += ' > ';
	crumbstring += '<a href="' + stepURL + '">' + crumbUppercase + '</a>';
}
crumbstring += '</li>';

crumbInsertLocations = document.getElementsByClassName('sitemap');
console.log(crumbInsertLocations)
for (let insertHere of crumbInsertLocations){
	insertHere.children[0].innerHTML = crumbstring;
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