var data = [
    {
        title: "ASUS TUF F15 FX507ZE HN093W", 
        price: 28490000,
        image: 'https://product.hstatic.net/1000026716/product/hn093w_f885c53fcc5d4b82b3c55b52dd4ce038_large.png',
        link: "laptopgaming.html"
    }, 
    {
        title: "Acer Nitro 5 Eagle AN515 57 54MV", 
        price: 21990000,
        image: 'https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_54mv_3e5cc4ba80be4c8595540963d469ccc3_large.jpg',
        link: "laptopgaming.html"
    }, 
    {
        title: "Acer Nitro 5 Tiger AN515 58 773Y",
        price: 28990000,
        image: 'https://product.hstatic.net/1000026716/product/773y_5364964b798144f88c6137ff9a8afc60_large.png',
        link: "laptopgaming.html"
    }, 
    {
        title: "Asus ZenBook 13 UX325EA KG656W", 
        price: 17990000,
        image: 'https://product.hstatic.net/1000026716/product/laptop-asus-zenbook-ux325ea-kg656w_33160483676c416081a2d4c83e86306f.png',
        link: "laptopoffice.html"
    }, 
    {
        title: "ASUS Vivobook 15X OLED A1503ZA L1421W", 
        price: 18990000,
        image: 'https://product.hstatic.net/1000026716/product/l1421w_2b115562199d462b82b92e89e95b2473.png',
        link: "laptopoffice.html"
    }, 
    {
        title: "Dell Vostro 5410 V4I5214W1", 
        price: 19990000,
        image: 'https://product.hstatic.net/1000026716/product/1_79b6ab66ac2047068430616035180e67.png',
        link: "laptopoffice.html"
    }, 
    {
        title: "Dell Inspiron 15 3511 P112F001EBL", 
        price: 12290000,
        image: 'https://product.hstatic.net/1000026716/product/dell_66e818ea50d14910b4c11a7ab93998a5.png',
        link: "laptopoffice.html"
    }
];

var products = document.querySelector('.my-search-products');
var container = document.querySelector('.my-search-container');
products.innerHTML = '';
// nut xoa
var unShow = document.createElement('div');
unShow.innerHTML = `<i class="fas fa-times my-search-unShow-btn"></i>`;
products.appendChild(unShow);
unShow.addEventListener('click', function() {
    products.classList.add('my-search-hide');
    container.classList.remove('my-search-scroll');
})
data.forEach(item=>{

    var newProduct = document.createElement('div');
    newProduct.classList.add('my-search-product');
    newProduct.innerHTML = 
    `
        <img src="${item.image}" alt="">
        <div class="info">
            <div class="my-search-name">${item.title}</div>
            <div class="my-search-price">${item.price}</div>
        </div>
    `
    products.appendChild(newProduct);
    // neu chon thi hien ra trang ket qua tim kiem
    newProduct.addEventListener('click', function() {
        window.location = `${item.link}`;
    });
});

var searchInput = document.querySelector('.my-search-search input');

var showArea = document.querySelector('.my-search-container');

searchInput.addEventListener('click', function() {
    products.classList.remove('my-search-hide');
    container.classList.add('my-search-scroll');
});

searchInput.addEventListener('input', function(e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDOM = document.querySelectorAll('.my-search-product');
    listProductDOM.forEach(item=>{
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('my-search-hide');
        }
        else {
            item.classList.add('my-search-hide');
        }
    })
});



