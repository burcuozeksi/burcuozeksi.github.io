// slide 2



$(document).ready(function(){
  $('.mini').hover(function(){
    $(this).css('box-shadow', '0 0 10px 5px #800000');
  }, function(){
    $(this).css('box-shadow', '0 0 0 0');
  });
});

// fav
$(document).ready(function(){
  $('.miniuc').hover(function(){
    $(this).css('transform', 'scale(1.1)');
  }, function(){
    $(this).css('transform', 'scale(1)');
  });
});


// sepet



let card = document.getElementsByClassName("card");
let ekleSepet = document.getElementsByClassName("sepeteEkle");
let sepetiAc = document.querySelector(".sepetAc");
let sepetListe = document.querySelector(".sepet");
let toplam = document.querySelector("#toplam")

class Shopping{
  constructor(aciklama,fiyat,image){
      this.image = image;
      this.aciklama = aciklama;
      this.fiyat = fiyat;
  }
}
// sepete ekleme
class Ekle{

  urunEkle(shopping){
      let liste = document.createElement("div");
      liste.classList = "list-item";

      liste.innerHTML = 
      `
      <div class="row align-items-center text-dark">
          <div class="col-md-3">
              <img src= ${shopping.image} alt="product" class="w-100"  style="height: 75px;">
          </div>
          <div class="col-md-5">
              <div class="aciklama">${shopping.aciklama}</div>
          </div>
          
          <div class="col-md-2">
              <div class="fiyat">${shopping.fiyat}</div>
          </div>
          <div class="col-md-2">
              <button class="btn urunSil">
              <i class="fa-solid fa-trash" style="color: #000000;"></i>
              </button>
          </div>
      </div>

      
      `
      sepetListe.appendChild(liste);
  }
//ürün sil
  removeCart(){
      let btnRemove = document.getElementsByClassName("urunSil");
      let self = this;
      for (let i = 0; i < btnRemove.length; i++) {
          btnRemove[i].addEventListener("click", function(){
              this.parentElement.parentElement.parentElement.remove();
              self.cartCount();
              let toplamFiyat = self.calculateCartTotal();
        toplam.innerText = "₺" + toplamFiyat.toFixed(2);
          })
          this.updateCartTotal();
      }
      
  }
//  sepetteki ürünleri say-sayaç
  cartCount(){
      let urunListe = sepetListe.getElementsByClassName("list-item");
      let urunSay = document.getElementById("sayac");
      urunSay.innerHTML = urunListe.length;
  }
// sepeti aç-kapa
  cartToggle(){
      sepetiAc.addEventListener("click", function(){
          sepetListe.classList.toggle("d-none");
      })
  }
  
  //  sepetteki ürünlerin toplamı
 
  updateCartTotal() {
    let urunlerListe = sepetListe.getElementsByClassName("list-item");
    let toplamFiyat = 0;

    for (let i = 0; i < urunlerListe.length; i++) {
      let ucretElementi = urunlerListe[i].querySelector(".fiyat");
      let fiyat = parseFloat(ucretElementi.innerText.replace("₺", ""));
      toplamFiyat += fiyat;
    }

    document.getElementById("toplam").innerText = "₺" + toplamFiyat.toFixed(2);
  }
// sepetten ürün silindiğinde toplamdaki fiyatı güncelleme
  calculateCartTotal() {
    let urunlerListe = sepetListe.getElementsByClassName("list-item");
    let toplamFiyat = 0;

    for (let i = 0; i < urunlerListe.length; i++) {
      let ucretElementi = urunlerListe[i].querySelector(".fiyat");
      let fiyat = parseFloat(ucretElementi.innerText.replace("₺", ""));
      toplamFiyat += fiyat;
    }

    return toplamFiyat;
  }
  
  // Ürün arttır-azalt
 

  

}

for (let i = 0; i < card.length; i++) {
  ekleSepet[i].addEventListener("click", function(e){
      let title = card[i].getElementsByClassName("card-title")[0].textContent;
      let ucret = card[i].getElementsByClassName("ucret")[0].textContent;
      let image = card[i].getElementsByClassName("card-img-top")[0].src;
      
      let shopping = new Shopping(title,ucret,image);
      let ekle = new Ekle();

      ekle.urunEkle(shopping);
     
      ekle.removeCart()
      ekle.cartCount();
      ekle.updateCartTotal();
     
     
     

     


      e.preventDefault();
  })
 
}
// 







document.addEventListener("DOMContentLoaded", ()=> {
  let ekle = new Ekle();

  ekle.cartToggle();
})


















