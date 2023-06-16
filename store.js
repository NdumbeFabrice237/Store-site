//list of shoe images, their names, prices in XAF and categories

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 50000,
    category: "Running",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fnike-air-max-pulse-air-max-day-2023-release-info-001.jpg?w=1600&cbr=1&q=90&fit=max",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 55000,
    category: "Running",
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2022/11/22/637d5b077dfcc21272eb690f/m_637d5bf5eb7e7afd1bd3bdc3.jpg",
  },
  {
    id: 3,
    name: "Puma Suede Classic",
    price: 35000,
    category: "Casual",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374915/01/sv01/fnd/IND/fmt/png/PUMA-Suede-Classic-+Sneakers",
  },
  {
    id: 4,
    name: "Converse Chuck Taylor All Star",
    price: 30000,
    category: "Casual",
    image:
      "https://images.awsmcdn.com/product/360/460/i50/s800/converse-chuck-taylor-all-star-hi-friendly-floral-white-pixel-purple-canvas.jpg",
  },
  {
    id: 5,
    name: "Vans Old Skool",
    price: 40000,
    category: "Skateboarding",
    image: "https://images.vans.com/is/image/VansEU/VD3HY28-HERO?$583x583$",
  },
  {
    id: 6,
    name: "Reebok Classic Leather",
    price: 45000,
    category: "Casual",
    image:
      "https://images.reebok.eu/reebok-classic-leather-sp-shoes_19727346_44790962_2048.jpg?c=1",
  },
  {
    id: 7,
    name: "New Balance 574",
    price: 50000,
    category: "Running",
    image: "https://m.media-amazon.com/images/I/71btIYoru2L._AC_SR920,736_.jpg",
  },
  {
    id: 8,
    name: "Timberland 6-Inch Premium Boots",
    price: 80000,
    category: "Boots",
    image:
      "https://images.timberland.com/is/image/timberland/10061024-HERO?$PDP-FULL-IMAGE$",
  },
  {
    id: 9,
    name: "Dr. Martens 1460",
    price: 75000,
    category: "Boots",
    image:
      "https://d2ob0iztsaxy5v.cloudfront.net/product/144801/1448017020_zm.jpg",
  },
  {
    id: 10,
    name: "Gucci Ace Leather Sneakers",
    price: 400000,
    category: "Luxury",
    image:
      "https://cdn-images.farfetch-contents.com/12/56/27/63/12562763_22135963_600.jpg",
  },
  {
    id: 11,
    name: "Balenciaga Triple S",
    price: 600000,
    category: "Luxury",
    image: "https://cms-cdn.thesolesupplier.co.uk/2022/07/balenciaga-triple-s-red.jpg",
  },
  {
    id: 12,
    name: "Nike Air Force 1",
    price: 45000,
    category: "Casual",
    image:
      "https://sneakernews.com/wp-content/uploads/2021/11/Nike-Air-Force-1-Low-Pink-DO6724-601-5.jpg?w=1140",
  },
  {
    id: 13,
    name: "Nike Air Jordan 1",
    price: 150000,
    category: "Basketball",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrvij66npy4yXI16a_HeURBaxPU7C8q1gvQ&usqp=CAU",
  },
  {
    id: 14,
    name: "Nike Air Max 97",
    price: 60000,
    category: "Running",
    image:
      "https://cdn.shopify.com/s/files/1/2358/2817/products/nike-air-max-97-blueberry-wethenew-1_1.png?v=1655288554",
  },
  {
    id: 15,
    name: "Nike Air Max 90",
    price: 55000,
    category: "Running",
    image:
      "https://cdn.restocks.net/cdn-cgi/image/width=1000/storage/images/products/DC1161-100/1.png",
  },
  {
    id: 16,
    name: "Nike Air Max 270",
    price: 70000,
    category: "Running",
    image:
      "https://images.stockx.com/images/Nike-Air-Max-270-Essential-Black-Grey-Orange.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1647574275",
  },
  {
    id: 17,
    name: "Nike Air Max 720",
    price: 80000,
    category: "Running",
    image:
      "https://images.stockx.com/images/Nike-Air-Max-720-Pixel-Black-Blue.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607669997",
  },
  {
    id: 18,
    name: "Nike Air Max 2090",
    price: 90000,
    category: "Running",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_k1lzdtClViEozvrsNjp43AtbTC_w9si_g&usqp=CAU",
  },
  {
    id: 19,
    name: "Nike Air Max Plus",
    price: 70000,
    category: "Running",
    image:
      "https://cdn.shopify.com/s/files/1/2358/2817/products/NikeAirMaxPlusBlueBlack1.png?v=1652170726",
  },
  {
    id: 20,
    name: "Nike Air Max 95",
    price: 65000,
    category: "Running",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwfsYPC1OVg-giWcBHCe1SOHp1Yg_TDoIZA&usqp=CAU",
  },
  {
    id: 21,
    name: "Nike Air Max 98",
    price: 65000,
    category: "Running",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrzwXWLaBB1LSx-AEaPSV76sUqI0PJfyvZw&usqp=CAU",
  },
  {
    id: 22,
    name: "Nike Air Max 200",
    price: 65000,
    category: "Running",
    image:
      "https://www.outbacksylt.com/files/image/id/9846/fixed/1/w/1000/h/1000/n/nike-air-max-200-rasta-aq2568-101-1.jpg",
  },
];

// <img class="product-image" src="https://via.placeholder.com/300" alt="product">

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-bar");
const categoriesContainer = document.querySelector(".cats");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts.map(
  (product) => `<div class="product">
  <img class="product-image" src=${product.image} alt="product">
  <h3 class="product-name">${product.name}</h3>
  <p class="product-cat">${product.category}</p>
  <p class="product-price"><span class="price-value">${product.price}</span><span class="unit">FCFA</span></p>
  <button class="buy-btn">Add to Cart</button>
  </div>`
  ).join("");
}

const setCategories = () => {
const categoriesList = products.map(product => product.category);

const cats = ["All", ...categoriesList.filter ((cat, index) => categoriesList.indexOf(cat) === index)];

console.log(cats);

categoriesContainer.innerHTML = cats.map(cat => ` <span class="cat">${cat}</span>`).join("")
}
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  setCategories();
  searchInput.onkeyup = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
    displayProducts(products.filter(product => 
      product.price.toString().indexOf(searchTerm) !== -1 ||
      product.name.toLowerCase().
    indexOf(searchTerm.toLowerCase()) !== -1));

    if(products.filter(product => product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || product.price.toString().indexOf(searchTerm) !== -1).length === 0) {
      productsContainer.innerHTML = `<div class="error"> Product not found</div>`
    }
  } else {
    displayProducts(products);
  }
}

categoriesContainer.onclick = (e) => {
  const selectedCat = e.target.textContent;
  if (selectedCat === "All") {
    displayProducts(products);
  } else if (products.filter(product => product.category == selectedCat).length > 0) {
    displayProducts(products.filter((product) => product.category === selectedCat))
  } else {
    return;
  }
}
});
