var c2d;

function init(){
  var c=document.querySelector('canvas'), c2d=c.getContext('2d'); // our canvas node and its 2d context.
  c2d.drawImage(document.querySelector('.mask img'),0,0); // draw the photo starting top left.

  function getPixelColor(e){
    var colors_images={36:0,80:1,132:2,191:3,255:4} // I wanted to have stronger colors than #010101, #020202 etc
    var pixel=c2d.getImageData(e.layerX,e.layerY,1,1).data; // get the pixel for this position
    var luminance=pixel[0]; // RGBA but we only need one sample since it's grayscale
    var desiredExp=colors_images[luminance]; // look it up
    console.log('Desired exposure: ' + desiredExp);
  }

  c.addEventListener('mousemove', getPixelColor);
}