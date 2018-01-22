var smallPhotos = document.getElementsByClassName('small-photo');
var bigPhoto = document.querySelector(".big-photo");
var bigPhotoCaption = document.querySelector(".big-photo-caption");

smallPhotos = Array.from(smallPhotos);
smallPhotos.forEach(function(photo) {
  photo.addEventListener('click', function() {
    bigPhoto.src = this.src;

    bigPhotoCaption.innerHTML = this.alt;
  })
})
