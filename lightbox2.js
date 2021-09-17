function expand(imgs) {//for single image
        display(imgs);
        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.display = "none";
      }
      function showGallery(galleryName, imgs){//for gallery of images
        var gallery = document.getElementsByClassName(galleryName);
        display(imgs);
        document.getElementById("imagebg").className = "container " + galleryName; //save gallery class for later
        if(gallery.length > 0){
          document.getElementById("prev").style.display = "block";
          document.getElementById("next").style.display = "block";
        }
      }
      function display(imgs){
        document.getElementsByTagName("body")[0].style.overflow = "hidden";//prevent scrolling
        var expandImg = document.getElementById("expandedImg");
        expandImg.src = imgs.src;
        if (expandImg.width > expandImg.height){
          document.getElementById("expandedImg").style.maxWidth = "90%";
          document.getElementById("expandedImg").style.height = "auto";
        }else{
          document.getElementById("expandedImg").style.width = "auto";
          document.getElementById("expandedImg").style.maxHeight = "90%";
        }
         var imgText = document.getElementById("imgtext");
        imgText.innerHTML = imgs.title;
        expandImg.parentElement.style.display = "block";
      }
      function plusSlides(next){
        event.stopPropagation();//don't click through and close by mistake
        var expandImg = document.getElementById("expandedImg");
        var getGallery = "";
        getGallery = expandImg.parentElement.className.split(" ")[1];//get 2nd class
        expandImg.parentElement.className = "container";
        var gallery = document.getElementsByClassName(getGallery);
        var slideNo = 0;
        for (var i = 0; i<gallery.length; i++){
          if (gallery[i].src === expandImg.src) slideNo = i;
        }
        console.log(slideNo+next);
        if(slideNo+next > -1 && slideNo+next < gallery.length){
          showGallery(getGallery, gallery[slideNo+next]);
        }else{
          expandImg.parentElement.className = "container " + getGallery; //save gallery class for later
        }
      }
      function closeModal() {
        console.log("close");
        document.getElementById("imagebg").style.display = "none";
        document.getElementsByTagName("body")[0].style.overflow = "";
        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.display = "none";
      }