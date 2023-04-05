// media

const message = "%F0%9F%87%BA%F0%9F%87%B8 Send Whatsapp Messages To Any Number Without Add it To Contacts!\nارسل رسائل واتساب إلى أي رقم دون إضافته إلى جهات الاتصال! %F0%9F%87%B8%F0%9F%87%A6".replace(/\n/g, "%0D%0A").replace(/ /g, "%20");
const url = "https://youssefover.github.io/whatsapp-messages";
const q = "\n\n🌐 ";
const qu = "%0D%0A%0D%0A%F0%9F%8C%90%20";

$("#whatsapp").click(function(){
  window.open("https://wa.me/?text=" + `${message}\n\n${url}`.replace(/\n/g, "%0D%0A"));
});

$("#facebook").click(function(){
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + url);
});

$("#massenger").click(function(){
  window.open("fb-messenger://share/?link=" + url);
});

$("#twitter").click(function(){
  window.open("https://twitter.com/intent/tweet?text=" + message + q + "&url=" + url);
});

$("#google_plus").click(function(){
  window.open("https://plus.google.com/share?url=" + url);
});

$("#link").click(function(){
  navigator.clipboard.writeText(message.replace(/%0D%0A/g, "\n").replace(/%20/g, " ").replace("%F0%9F%87%BA%F0%9F%87%B8", "🇺🇸").replace("%F0%9F%87%B8%F0%9F%87%A6", "🇸🇦") + q + url).then(() => {
    $(".copied").css("visibility", "visible");

    setTimeout(function(){
      $(".copied").css("visibility", "hidden");
    }, 3000);
  });
});

// w

$("#number").keyup(function(){
  let number = document.getElementById("number");
  if (number.value.length < 8) {
    $("#chat").attr("disabled", "");
  } else {
    $("#chat").removeAttr("disabled");
  }
});

$("#chat").click(function(){
  let phone = document.getElementById("number").value.replace("+", "").replace("(", "").replace(")", "").replace(/-/g, "").replace(/ /g, "");
  if (phone.startsWith("05")) {
    phone = phone.replace("05", "9665");
  }
  else if (phone.startsWith("0020")) {
    phone = phone.replace("0020", "20");
  }

  window.location.href = "https://api.whatsapp.com/send?phone=" + phone;
});
