let body = document.body;
let html = document.getElementsByTagName("html")[0];


let menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener("click", () => {
  console.log("hello");
});

let langBtn = document.getElementById('langBtn');
langBtn.addEventListener("click", () => {
  if (html.lang == 'ar') {
    html.setAttribute('lang', 'en')
    langBtn.innerText = 'arabic'
    setLang('en');
  } else {
    html.setAttribute('lang', 'ar')
    langBtn.innerText = 'english'
    setLang('ar');
  }
})

function setLang(lang) {
  console.log(lang)
}

console.log(langBtn.innerText)