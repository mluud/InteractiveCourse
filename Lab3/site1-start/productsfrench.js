const enLangJSON = '{"title":"E-Commerce Demo","home":"Home","products":"Products","about":"About","welcomeMessage":"Welcome to Our Store","shopNow":"Shop Now","aboutUsText":"We are a demo e-commerce store showcasing the latest trends in technology and fashion. Our mission is to provide high-quality products at affordable prices.","footerText":"© 2025 Development of Interactive Systems Course.","priceLow":"Price: Low to High","priceHigh":"Price: High to Low","addToCart":"Add to Cart"}';
const enLang = JSON.parse(enLangJSON);

const frLangJSON = '{"title":"Démo E-Commerce","home":"Accueil","products":"Produits","about":"À Propos","welcomeMessage":"Bienvenue dans Notre Magasin","shopNow":"Acheter Maintenant","aboutUsText":"Nous sommes un magasin de démonstration de commerce électronique présentant les dernières tendances en technologie et en mode. Notre mission est de fournir des produits de haute qualité à des prix abordables.","footerText":"© 2025 Cours de Développement de Systèmes Interactifs.","priceLow":"Prix : Du Plus Bas au Plus Élevé","priceHigh":"Prix : Du Plus Élevé au Plus Bas","addToCart":"Ajouter au Panier"}';
const frLang = JSON.parse(frLangJSON);

const selectLanguage = document.querySelector("#language-select");
const homeBtn = document.querySelector("#nav-home");
const productsBtn = document.querySelector("#nav-products");
const aboutBtn = document.querySelector("#nav-about");
const footerTxt = document.querySelector(".footerText");

const productsPageTitle = document.querySelector("#productsTitle");
const productsTitle = document.querySelector("#productsTitle");
const lowToHighOptn = document.querySelector("#lowToHigh");
const highToLowOptn = document.querySelector("#highToLow");
const addToCartOneBtn = document.querySelector("#addToCartOne");
const addToCartTwoBtn = document.querySelector("#addToCartTwo");
const addToCartThreeBtn = document.querySelector("#addToCartThree");

selectLanguage.addEventListener("change", (event) => {
    if(event.target.value === "en"){
        homeBtn.textContent = enLang.home;
        productsBtn.textContent = enLang.products;
        aboutBtn.textContent = enLang.about;
        productsTitle.textContent = enLang.products;
        lowToHighOptn.textContent = enLang.priceLow;
        highToLowOptn.textContent = enLang.priceHigh;
        addToCartOneBtn.textContent = enLang.addToCart;
        addToCartTwoBtn.textContent = enLang.addToCart;
        addToCartThreeBtn.textContent = enLang.addToCart;
        footerTxt.textContent = enLang.footerText;
    }

    else{
        homeBtn.textContent = frLang.home;
        productsBtn.textContent = frLang.products;
        aboutBtn.textContent = frLang.about;
        productsTitle.textContent = frLang.products;
        lowToHighOptn.textContent = frLang.priceLow;
        highToLowOptn.textContent = frLang.priceHigh;
        addToCartOneBtn.textContent = frLang.addToCart;
        addToCartTwoBtn.textContent = frLang.addToCart;
        addToCartThreeBtn.textContent = frLang.addToCart;
        footerTxt.textContent = frLang.footerText;
    }
    
});   