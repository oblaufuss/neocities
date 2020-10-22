function display(imgs){
        //show left and right arrows
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "block";
        //show image caption
        var imgText = document.getElementById("imgtext");
        imgText.innerHTML = imgs.title;
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
        expandImg.parentElement.style.display = "block";
      }
      function plusSlides(next){
        event.stopPropagation();//don't click through and close by mistake
        var expandImg = document.getElementById("expandedImg");
        expandImg.parentElement.className = "container";
        var gallery = document.getElementsByClassName("gallery");
        var slideNo = 0;
        for (var i = 0; i<gallery.length; i++){
          if (gallery[i].src === expandImg.src) slideNo = i;
        }
        console.log(slideNo+next);
        if(slideNo+next > -1 && slideNo+next < gallery.length){
          display(gallery[slideNo+next]);
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