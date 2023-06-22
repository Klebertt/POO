class Product {
    constructor(name, price, imageUrl) {
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.isFavorite = false;
    }

    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }

  // Classe Lista de Produtos
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

  // Criação dos produtos
  const productList = new ProductList();
  const product1 = new Product("Produto 1", 10, "https://m.media-amazon.com/images/I/61PVKYOAf4L._AC_UL320_.jpg");
  const product2 = new Product("Produto 2", 15, "https://example.com/product2.jpg");
  const product3 = new Product("Produto 3", 20, "https://example.com/product3.jpg");
  productList.addProduct(product1);
  productList.addProduct(product2);
  productList.addProduct(product3);

  // Array para armazenar os itens selecionados
  const selectedItems = [];

  // Função para exibir os produtos na página
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

      const price = document.createElement("span");
      price.textContent = `$${product.price}`;
      productDiv.appendChild(price);

      // Adiciona um evento de clique ao item do produto
      productDiv.addEventListener("click", () => {
        selectItem(product);
      });

      productListDiv.appendChild(productDiv);
    });
  }

  // Função para selecionar/desselecionar um item
  function selectItem(product) {
    const index = selectedItems.findIndex(item => item === product);

    if (index === -1) {
      selectedItems.push(product);
    } else {
      selectedItems.splice(index, 1);
    }
  }

  // Função para mostrar a aba selecionada
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

  // Função para adicionar os itens selecionados aos favoritos
  function addToFavorites() {
    selectedItems.forEach(item => {
      productList.addToFavorites(item);
    });

    // Limpa a seleção dos itens
    selectedItems.length = 0;

    showProducts("favorites");
  }

  // Inicialmente, mostra a aba "Todos os produtos"
  showTab("all");
