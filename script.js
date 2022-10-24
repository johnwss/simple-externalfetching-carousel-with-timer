//fetch("https://picsum.photos/v2/list?limit=3")
//https://testapi.io/api/johnny/fotos
//https://fancy-rugby-shirt-bull.cyclic.app
//http://localhost:3000/fotos
fetch("https://fancy-rugby-shirt-bull.cyclic.app")
.then(response => response.json())
.then(data => {
console.log(data.fotos.img.length);
console.log(data.fotos.img);
var novoarr = []; 
for(i = 0; i < data.fotos.img.length; i++)
{
  novoarr.push(data.fotos.img[i])
};

for(i = 0; i < novoarr.length; i++){
  document.getElementById("fotos").innerHTML += `<img class="fts" src="${novoarr[i]}" ></img>`;
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("fts");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

})

setTimeout(location.reload(), 10000);