

// eyes show-hide
$(document).ready(function(){
    document.querySelector("#pass").addEventListener("submit",function(e){
        e.preventDefault()
    })
    $(".show-pass").on("click",function(){
        $(".show-pass").css("display","none");
        $(".hide-pass").css("display","block")
        $("#pass").attr("type","text")
    })
    $(".hide-pass").on("click",function(){
        $(".hide-pass").css("display","none");
        $(".show-pass").css("display","block")
        $("#pass").attr("type","password")
    })
})
$(document).ready(function(){
    document.querySelector("#passiki").addEventListener("submit",function(e){
        e.preventDefault()
    })
    $(".show-passiki").on("click",function(){
        $(".show-passiki").css("display","none");
        $(".hide-passiki").css("display","block")
        $("#passiki").attr("type","text")
    })
    $(".hide-passiki").on("click",function(){
        $(".hide-passiki").css("display","none");
        $(".show-passiki").css("display","block")
        $("#passiki").attr("type","password")
    })
})

// 

document.querySelector("#uye").addEventListener("submit", function(e) {
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let passwordiki = document.querySelector("#passiki").value;
  
    // Ad kontrolü
    if (name.length < 2) {
      alert("Lütfen geçerli bir isim giriniz.");
      event.preventDefault();
      return;
    }
  
    // Soyad kontrolü
    if (surname.length < 2) {
      alert("Lütfen geçerli bir soyisim giriniz.");
      e.preventDefault();
      return;
    }
  
    // Email kontrolü
    if (!email.includes("@")) {
      alert("Lütfen geçerli bir e-posta adresi giriniz.");
      e.preventDefault();
      return;
    }
  
    // Şifre kontrolü
    if (password.length < 6) {
      alert("Şifreniz en az 6 karakter olmalıdır.");
      e.preventDefault();
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Şifrenizde en az 1 büyük harf olmalıdır.");

      e.preventDefault();
      return;
    }else if(password!=passwordiki){
                alert("parola uyuşmuyor");
                e.preventDefault();
                return;
    }
    alert("Form gönderildi!");
  });
  
  