let smallPhotos = document.getElementsByClassName('small-photo');
let BIG_IMG_SELECTOR = '[data-img-type="big"]';
let SMALL_IMG_SELECTOR = '[data-img-type="small"]';
let PHOTO_FRAME_SELECTOR = '[data-img-type="frame"]'
let CLASS_BIG_PHOTO_HIDDEN = 'big-photo-hidden';
let RULE_SMALL_PHOTO = 'very-small-photo';
let bigImg = document.querySelector(BIG_IMG_SELECTOR);
let bigImgCaption = document.querySelector(SMALL_IMG_SELECTOR);
let frame = document.querySelector(PHOTO_FRAME_SELECTOR)
//smallPhotos = Array.from(smallPhotos);
smallPhotos = [].slice.call(smallPhotos);

function changeBigImg() {
  if (document.body.classList.contains(CLASS_BIG_PHOTO_HIDDEN)) {
    document.body.classList.remove(CLASS_BIG_PHOTO_HIDDEN);
  }

  frame.classList.add(RULE_SMALL_PHOTO);
  setTimeout(function() {
    frame.classList.remove(RULE_SMALL_PHOTO);
  }, 50);

  bigImg.src = this.src;
  bigImgCaption.innerHTML = this.alt;
}

function hideBigPhoto() {
  document.body.classList.add(CLASS_BIG_PHOTO_HIDDEN);
}

smallPhotos.forEach(function(photo) {
  photo.addEventListener('click', changeBigImg);
})

bigImg.addEventListener('click', function() {
  document.body.classList.add(CLASS_BIG_PHOTO_HIDDEN)
})
