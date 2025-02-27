const enLangJSON = '{"title":"E-Commerce Demo","home":"Home","products":"Products","about":"About","aboutUsText":"Nous sommes un magasin de démonstration de commerce électronique présentant les dernières tendances en technologie et en mode. Notre mission est de fournir des produits de haute qualité à des prix abordables.","footerText":"© 2025 Cours de Développement de Systèmes Interactifs.","priceLow":"Prix : Du Plus Bas au Plus Élevé","priceHigh":"Prix : Du Plus Élevé au Plus Bas","addToCart":"Ajouter au Panier","aboutUsTitle":"About Us","aboutUsText":"We are a demo e-commerce store showcasing the latest trends in technology and fashion. Our mission is to provide high-quality products at affordable prices.","footerText":"© 2025 Development of Interactive Systems Course."}';
const enLang = JSON.parse(enLangJSON);

const frLangJSON = '{"title":"Démo E-Commerce","home":"Accueil","products":"Produits","about":"À Propos","aboutUsTitle":"À Propos de Nous","aboutUsText":"Nous sommes un magasin de démonstration de commerce électronique présentant les dernières tendances en technologie et en mode. Notre mission est de fournir des produits de haute qualité à des prix abordables.","footerText":"© 2025 Cours de Développement de Systèmes Interactifs."}';
const frLang = JSON.parse(frLangJSON);



const selectLanguage = document.querySelector("#language-select");
const homeBtn = document.querySelector("#nav-home");
const productsBtn = document.querySelector("#nav-products");
const aboutBtn = document.querySelector("#nav-about");
const footerTxt = document.querySelector(".footerText");
const aboutUsTitle = document.querySelector("#aboutUs");
const aboutUsText = document.querySelector("#aboutUsText");

selectLanguage.addEventListener("change", (event) => {
    if(event.target.value === "en"){
        homeBtn.textContent = enLang.home;
        productsBtn.textContent = enLang.products;
        aboutBtn.textContent = enLang.about;
        aboutUsTitle.textContent = enLang.aboutUsTitle;
        aboutUsText.textContent = enLang.aboutUsText;
        footerTxt.textContent = enLang.footerText;
    }

    else{
        homeBtn.textContent = frLang.home;
        productsBtn.textContent = frLang.products;
        aboutBtn.textContent = frLang.about;
        aboutUsTitle.textContent = frLang.aboutUsTitle;
        aboutUsText.textContent = frLang.aboutUsText;
        footerTxt.textContent = frLang.products;
    }
    
});   