
//transition effet
$(window).scroll(function() {
if ($(this).scrollTop() > 500){
   $('#news').addClass("news");
 }
 else{
     $('#news').removeClass("news");
 }
});



//initiate the plugin and pass the id of the div containing gallery images
 $("#zoom_03").elevateZoom({constrainType:"height", constrainSize:274, zoomType: "lens", containLensZoom: true, gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: "active"}); //pass the images to Fancybox

$("#zoom_03").bind("click", function(e) { var ez = $('#zoom_03').data('elevateZoom');	$.fancybox(ez.getGalleryList()); return false; });
