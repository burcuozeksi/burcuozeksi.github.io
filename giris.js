$(document).ready(function(){
    document.querySelector(".psw").addEventListener("submit",function(e){
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


// 

document.querySelector("#uye").addEventListener("submit", function(e) {
   
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
  
 
  

  
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
    }
  
    alert("Giriş Yapıyorsunuz!");
  });
  