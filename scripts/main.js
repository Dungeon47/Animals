//title
var Heading1 = document.querySelector('h1');
Heading1.innerHTML = 'Animals!';

//on-click message
//document.querySelector('img').onclick = function() {
//  alert('Bear five!');
//}

//bear image cycle
var bearImage = document.querySelector('#bearimg');

bearImage.onclick = function() {
   var bearSrc = bearImage.getAttribute('src');
   if (bearSrc === 'images/bear1.jpg') {
     bearImage.setAttribute ('src','images/bear2.jpg');
   } else {
   if (bearSrc === 'images/bear2.jpg') {
     bearImage.setAttribute ('src','images/bear3.jpg');
   } else {
     bearImage.setAttribute ('src','images/bear1.jpg');
   }
}
}

//moose image cycle
var mooseImage = document.querySelector('#mooseimg');

mooseImage.onclick = function() {
   var mooseSrc = mooseImage.getAttribute('src');
   if (mooseSrc === 'images/moose1.jpg') {
     mooseImage.setAttribute ('src','images/moose2.jpg');
   } else {
   if (mooseSrc === 'images/moose2.jpg') {
     mooseImage.setAttribute ('src','images/moose3.jpg');
   } else {
     mooseImage.setAttribute ('src','images/moose1.jpg');
   }
   }
}
