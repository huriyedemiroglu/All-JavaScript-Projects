let inputSayı = document.getElementById("input_numara");
let check = document.getElementById("input_submit");
let kalanHak = document.getElementById("kalan_hak");
let ilk_değer = document.getElementById("ilk_değer");
let son_değer = document.getElementById("son_değer");
let mesaj = document.getElementById("mesaj");
let resim = document.getElementById("resim");
let reset = document.getElementById("input_reset");


//***+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//***+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//***+++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// sabit olarak 1-100 arası bir sayıyı tukmak için kullandım.
const sayıTahmin = Math.floor(Math.random() * 100) + 1;


//Check butonunun event kısmı
check.addEventListener("click", (event) => {
  if (inputSayı.value == "") {
    alert("Sayı Girişi Yapmadın\n****Tekrar Başlayalım****");
    window.location.reload(false);
  }

  if (inputSayı.value < sayıTahmin) {
    kalanHak.innerHTML--;
    ilk_değer.innerHTML = inputSayı.value;
    inputSayı.value = "";
    if (kalanHak.innerHTML == 0) {
      mesaj.innerText = "You Lost!";
      mesaj.style.color = "red";
     
    }
  } else if (inputSayı.value > sayıTahmin) {
    kalanHak.innerHTML--;
    son_değer.innerHTML = inputSayı.value;
    inputSayı.value = "";
    if (kalanHak.innerHTML == 0) {
      mesaj.innerText = "You Lost!";
      
    }
  } else if (inputSayı.value == sayıTahmin) {
    mesaj.innerText = "You Win!";
    mesaj.style.color = "rgb(12, 223, 12)";
    mesaj.style.fontWeight = "900";
    
  }


  event.preventDefault();
});


//****+++++++++++++++++++++++++++++++++++++++++++++++++ */
//Reset butonunun event kısmı
reset.addEventListener("click", (event) => {
  //window.location.reload(false)  sayfanın yenilenmesini sağlar.
  window.location.reload(false);
});
