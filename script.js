//fetch("https://picsum.photos/v2/list?limit=3")
//https://testapi.io/api/johnny/fotos
fetch("http://localhost:3000/fotos")
.then(response => response.json())
.then(data => {
var novoarr = []; 
for(i = 0; i < data.img.length; i++)
{
  novoarr.push(data.img[i])
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
  setTimeout(showSlides, 500); // Change image every 2 seconds
}

})