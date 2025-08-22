import React from "react";
import "./Products.css";

const App = () => {
  const products = [
    { image: "https://images-cdn.ubuy.co.in/66c19d647dff4809b77f81ff-cesar-small-breed-rotisserie-chicken-and.jpg", title: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGEKSqlHRT60y4se5VJai1Qqu54iR-Bba0g&s", title: "CANON EOS DSLR Camera", price: 360, rating: 4, reviews: 95 },
    { image: "https://m.media-amazon.com/images/I/61jSHaXCNEL._UF1000,1000_QL80_.jpg", title: "ASUS FHD Gaming Laptop", price: 700, rating: 5, reviews: 325 },
    { image: "https://images.unsplash.com/photo-1571782742478-0816a4773a10?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D", title: "Curology Product Set", price: 500, rating: 4, reviews: 145 },
    { image: "https://www.kidscarsdirect.com/media/catalog/product/cache/c5d069e8aaff04c04dad8dd7a2e5a2f3/e/v/evoque-pink-000.png", title: "Kids Electric Car", price: 960, rating: 5, reviews: 65, tag: "NEW", colors: ["red", "black"] },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILYv3ypo2B_UUG83ZVCWo7ESUasqBC0dbFw&s", title: "Jr. Zoom Soccer Cleats", price: 1160, rating: 5, reviews: 35, colors: ["yellow", "green"] },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oIec5-p9x0ZMX-kxBFV6dTFKNFQE1wkMFQ&s", title: "GP11 Shooter USB Gamepad", price: 660, rating: 5, reviews: 55, tag: "NEW", colors: ["black", "red"] },
    { image: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_600,h_780,q_auto,f_auto,e_sharpen/SD_01_T49_5298_FS_X_EC_94", title: "Quilted Satin Jacket", price: 660, rating: 5, reviews: 55, colors: ["green", "black"] },
  ];

  return (
    <div className="container">
      <h2 className="title">Explore Our Products</h2>
      
      <div className="grid">
        {products.map((p, i) => (
          <div key={i} className="card">
            <div className="image-container">
              {p.tag && <span className="tag">{p.tag}</span>}
              
              <img src={p.image} alt={p.title} className="product-image" />

              <div className="icons">
                <span>♡</span>
                <span>👁</span>
              </div>

              <button className="add-to-cart">Add To Cart</button>
            </div>

            <h3 className="product-title">{p.title}</h3>
            <p className="price">
              ${p.price}
              {p.oldPrice && <span className="old-price">${p.oldPrice}</span>}
            </p>

            <div className="rating">
              {"★".repeat(p.rating)}
              {"☆".repeat(5 - p.rating)}
              <span className="reviews">({p.reviews})</span>
            </div>

            {p.colors && (
              <div className="colors">
                {p.colors.map((c, idx) => (
                  <span key={idx} style={{ background: c }}></span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="view-btn-container">
        <button className="view-all">View All Products</button>
      </div>
    </div>
  );
};

export default App;
