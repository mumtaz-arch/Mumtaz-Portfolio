
var typed = new Typed(".typing", {
  strings: [
    
    "Junior Web Developer",
    
    
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }
    //Loop for removing active class
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    //Adding active class
    this.classList.add("active");
    showSection(this); //Function call
    //Nav click event - Hiding the nav menu
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  //Loop for removing active class
  for (let k = 0; k < totalSection; k++) {
    allSection[k].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

//For Hire me section
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this);
  updateNav(this);
});

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

//For Nav Toggler Button
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
function sendEmail() {
	var pesan = {
		name : document.getElementById('name').value,
		email : document.getElementById('email').value,
		message : document.getElementById('message').value
	};
	emailjs.send('service_qjlz3a3', 'template_1nj9jc4', pesan).then(function (res) {
		alert("Pesan berhasil dikirim!");
		
 
})
}	
 src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">

  // Inisialisasi EmailJS
  (function() {
    emailjs.init("01gpmKpkie6T7nbYQ"); // Ganti dengan User ID dari EmailJS
  })();

  // Menangani pengiriman formulir
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_qjlz3a3", "template_1nj9jc4", this)
      .then(function(response) {
        alert("Pesan berhasil dikirim! 🎉");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Gagal mengirim pesan, coba lagi!");
      });
  });

