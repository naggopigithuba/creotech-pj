import React from "react";
import "./Sellingproducts.css"; 


const products = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    oldPrice: 360,
    image: "https://images-cdn.ubuy.co.id/654045c8f953674bfa37928a-the-north-face-men-39-s-flare-2.jpg",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuCFmWUIdx6Uzx8Y0rC9blFeYtI7cKUNLkg&s",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZz3XW3moDKh3iz3RF7yzI9r_Iy2pNl4mT2w&s",
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: 360,
    oldPrice: null,
    image: "https://images.meesho.com/images/products/477846018/zgkzo_512.webp?width=512",
    rating: 4.5,
    reviews: 65,
  },
];

export default function Sellingproducts() {
  return (
    <div className="products-container">
      <div className="header">
        <div>
          <p className="sub-title">This Month</p>
          <h2 className="main-title">Best Selling Products</h2>
        </div>
        <button className="view-all">View All</button>
      </div>

      <div className="products-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img">
              <img src={product.image} alt={product.name} />
              <div className="icons">
                <button>♡</button>
                <button>👁</button>
              </div>
            </div>
            <h3>{product.name}</h3>
            <div className="price">
              <span className="new">${product.price}</span>
              {product.oldPrice && <span className="old">${product.oldPrice}</span>}
            </div>
            <div className="rating">
              {"⭐".repeat(5)}
              <span>({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
