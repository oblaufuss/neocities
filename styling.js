//change stylesheet
    var oldlink = document.getElementsByTagName("link").item(0);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "style/light.css");

    //document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);