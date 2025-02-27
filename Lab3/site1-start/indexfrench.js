const enLangJSON = '{"title":"E-Commerce Demo","home":"Home","products":"Products","about":"About","welcomeMessage":"Welcome to Our Store","shopNow":"Shop Now","aboutUsText":"We are a demo e-commerce store showcasing the latest trends in technology and fashion. Our mission is to provide high-quality products at affordable prices.","footerText":"© 2025 Development of Interactive Systems Course.","priceLow":"Price: Low to High","priceHigh":"Price: High to Low","addToCart":"Add to Cart"}';
const enLang = JSON.parse(enLangJSON);

const frLangJSON = '{"title":"Démo E-Commerce","home":"Accueil","products":"Produits","about":"À Propos","welcomeMessage":"Bienvenue dans Notre Magasin","shopNow":"Acheter Maintenant","aboutUsText":"Nous sommes un magasin de démonstration de commerce électronique présentant les dernières tendances en technologie et en mode. Notre mission est de fournir des produits de haute qualité à des prix abordables.","footerText":"© 2025 Cours de Développement de Systèmes Interactifs.","priceLow":"Prix : Du Plus Bas au Plus Élevé","priceHigh":"Prix : Du Plus Élevé au Plus Bas","addToCart":"Ajouter au Panier"}';
const frLang = JSON.parse(frLangJSON);

const selectLanguage = document.querySelector("#language-select");
const homeBtn = document.querySelector("#nav-home");
const productsBtn = document.querySelector("#nav-products");
const aboutBtn = document.querySelector("#nav-about");
const welcomeMsg = document.querySelector("#welcome");
const aboutMsg = document.querySelector("#aboutInfo");
const shopNowBtn = document.querySelector("#shopBtn");
const footerTxt = document.querySelector(".footerText");

const productsPageTitle = document.querySelector("#productsTitle");
const priceSorting = document.querySelector("#price-sort");
const lowToHighOptn = document.querySelector("#lowToHigh");
const highToLowOptn = document.querySelector("#HighToLow");
const addToCartBtn = document.querySelector(".addToCart");

selectLanguage.addEventListener("change", (event) => {
    if(event.target.value === "en"){
        homeBtn.textContent = enLang.home;
        productsBtn.textContent = enLang.products;
        aboutBtn.textContent = enLang.about;
        welcomeMsg.textContent = enLang.welcomeMessage;
        aboutMsg.textContent = enLang.aboutUsText;
        shopNowBtn.textContent = enLang.shopNow;
        footerTxt.textContent = enLang.footerText;

    }

    else{
        homeBtn.textContent = frLang.home;
        productsBtn.textContent = frLang.products;
        aboutBtn.textContent = frLang.about;
        welcomeMsg.textContent = frLang.welcomeMessage;
        aboutMsg.textContent = frLang.aboutUsText;
        shopNowBtn.textContent = frLang.shopNow;
        footerTxt.textContent = frLang.footerText;
    }
    
});   