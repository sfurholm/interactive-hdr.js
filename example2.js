var c2d;

function init(){
  var c=document.querySelector('canvas'), c2d=c.getContext('2d'); // our canvas node and its 2d context.
  c2d.drawImage(document.querySelector('.mask img'),0,0); // draw the photo starting top left.
}