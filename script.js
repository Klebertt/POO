class Product {
    constructor(name, imageUrl) {
      this.name = name;
      this.imageUrl = imageUrl;
      this.isFavorite = false;
    }
  
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
  
  class ProductList {
    constructor() {
      this.products = [];
      this.favorites = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    addToFavorites(product) {
      product.toggleFavorite();
      if (product.isFavorite) {
        this.favorites.push(product);
      } else {
        const index = this.favorites.findIndex(fav => fav === product);
        this.favorites.splice(index, 1);
      }
    }
  }
  
  const productList = new ProductList();
  const product1 = new Product("Macacão infantil para bebês meninos e meninas, roupa de neve acolchoada", "https://m.media-amazon.com/images/I/61PVKYOAf4L._AC_UL320_.jpg");
  const product2 = new Product("Calças de neve sólidas", "https://m.media-amazon.com/images/I/518UxyAmJ4L._AC_SX466_.jpg");
  const product3 = new Product("Botas de Neve para Meninos e Meninas Solas Grossas", "https://m.media-amazon.com/images/I/61v44A2etLL._AC_SY625_.jpg");
  const product4 = new Product("Kit 5 Camisas Camisetas Masculina Slim Voker Premium 100% Algodão", "https://m.media-amazon.com/images/I/51Y01dAFj+L._AC_SX679_.jpg");
  const product5 = new Product("KIT 2 Calças Masculina Moletom Conforto Corrida Skinny", "https://m.media-amazon.com/images/I/51O5GfcV-sS._AC_SY625_.jpg");
  const product6 = new Product("REGATA NEON Speedo Feminino", "https://m.media-amazon.com/images/I/61MMKitL6nL._AC_SX522_.jpg");
  const product7 = new Product("Cardigã masculino", "https://m.media-amazon.com/images/I/61IJ1cWXMkL._AC_SX522_.jpg");
  const product8 = new Product("JMSUN Jaqueta masculina casaco de outono e de inverno camuflagem militar de algodão", "https://m.media-amazon.com/images/I/51uHX9hE8sL._AC_SX679_.jpg");
  const product9 = new Product("Jaqueta masculina de couro", "https://m.media-amazon.com/images/I/71h9QfV3y2L._AC_SX522_.jpg");
  const product10 = new Product("Jaqueta corta-vento masculina leve", "https://m.media-amazon.com/images/I/51pSFpbWe9L._AC_SX466_.jpg");
  const product11 = new Product("Jaqueta aviador masculina", "https://m.media-amazon.com/images/I/71Iq09B19VL._AC_SY741_.jpg");
  const product12 = new Product("Kit 2 Conjuntos Calça Legging", "https://m.media-amazon.com/images/I/51eutIR62oL._AC_SX679_.jpg");
  const product13 = new Product("Blusa Frio Moletom Sem Estampa Liso Unissex", "https://m.media-amazon.com/images/I/51U-3aSWroL._AC_SX466_.jpg");
  const product14 = new Product("Calça Moletom Masculina Jogger Skinny", "https://m.media-amazon.com/images/I/31XYe1zATSL._AC_.jpg");
  const product15 = new Product("Moletom Canguru Groot Guardiões Da Galáxia", "https://m.media-amazon.com/images/I/51cDocozhDL._AC_SX679_.jpg");
  const product16 = new Product("Moletom Canguru Unissex Rick And Morty", "https://m.media-amazon.com/images/I/51-J+Rk6E9L._AC_SX679_.jpg");
  const product17 = new Product("Moletom Canguru Unissex Harry Potter", "https://m.media-amazon.com/images/I/51mYXeFIenL._AC_SX679_.jpg");
  const product18 = new Product("Camiseta Masculina Manga Longa Longline Swag Oversized", "https://m.media-amazon.com/images/I/51tYN9J-NLL._AC_SX679_.jpg");
  const product19 = new Product("Camiseta Térmica Puma Manga Longa Uv50+ Masculina", "https://m.media-amazon.com/images/I/61dBik+9xUL._AC_SX679_.jpg");
  const product20 = new Product("Casaco Moletom Blusa De Frio Canguru Et Tumblr Alien", "https://m.media-amazon.com/images/I/619TLuZQYyL._AC_SX466_.jpg");
  
  productList.addProduct(product1);
  productList.addProduct(product2);
  productList.addProduct(product3);
  productList.addProduct(product4);
  productList.addProduct(product5);
  productList.addProduct(product6);
  productList.addProduct(product7);
  productList.addProduct(product8);
  productList.addProduct(product9);
  productList.addProduct(product10);
  productList.addProduct(product11);
  productList.addProduct(product12);
  productList.addProduct(product13);
  productList.addProduct(product14);
  productList.addProduct(product15);
  productList.addProduct(product16);
  productList.addProduct(product17);
  productList.addProduct(product18);
  productList.addProduct(product19);
  productList.addProduct(product20);


  
  const selectedItems = [];
  
  function showProducts(tab) {
    const productListDiv = document.getElementById("productList");
    productListDiv.innerHTML = "";
  
    const products = tab === "favorites" ? productList.favorites : productList.products;
  
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const image = document.createElement("img");
      image.src = product.imageUrl;
      productDiv.appendChild(image);
  
      const name = document.createElement("span");
      name.textContent = product.name;
      productDiv.appendChild(name);
  
      productDiv.addEventListener("click", () => {
        selectItem(product);
      });
  
      productListDiv.appendChild(productDiv);
    });
  }
  
  function selectItem(product) {
    const index = selectedItems.findIndex(item => item === product);
  
    if (index === -1) {
      selectedItems.push(product);
    } else {
      selectedItems.splice(index, 1);
    }
  }
  
  function showTab(tab) {
    const tabs = document.getElementById("tabs").children;
    for (let i = 0; i < tabs.length; i++) {
      const tabButton = tabs[i];
      if (tabButton.textContent.toLowerCase().includes(tab.toLowerCase())) {
        tabButton.classList.add("active");
      } else {
        tabButton.classList.remove("active");
      }
    }
    showProducts(tab);
  }
  
  function addToFavorites() {
    selectedItems.forEach(item => {
      productList.addToFavorites(item);
    });
  
    selectedItems.length = 0;
  
    showProducts("favorites");
  }
  
  showTab("all");
