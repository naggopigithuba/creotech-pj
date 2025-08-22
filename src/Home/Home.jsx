import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li>Woman's Fashion ➤</li>
          <li>Men's Fashion ➤</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>

      {/* Banner */}
      <section className="banner">
        <div className="banner-content">
          <h4>iPhone 14 Series</h4>
          <h2>Up to 10% off Voucher</h2>
          <button className="shop-btn">Shop Now →</button>
        </div>
        <div className="banner-img">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1660753619946"
            alt="iPhone"
          />
        </div>
      </section>
    </div>
  );
}
