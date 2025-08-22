import React, {useState, useEffect} from "react";
import "./items.css";

export default function Items() {
  // Dummy products array (you can replace with API data later)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date (set to 5 days from now for example)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);



  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      img: "https://t3.ftcdn.net/jpg/01/31/11/00/360_F_131110045_AR9Doi9uqraU5KWpY66R6RXlDSil2KH3.jpg",
      rating: 88,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB28rUi-Qoh2vTc-pnX65I4nUBFtE5euqYbA&s",
      rating: 75,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/6/WD/AK/BJ/55002018/asus-gaming-monitor.jpg",
      rating: 99,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxf3-2e6DsF1ZLvgDmeDxr_NCWd9gT2RlSQ&s",
      rating: 99,
    },
  ];

  return (
    <div className="flash-sales">
      <div className="header">
        <h2>⚡ Flash Sales</h2>
        <div className="timer">
          <span>{String(timeLeft.days).padStart(2, "0")} Days</span> :
          <span>{String(timeLeft.hours).padStart(2, "0")} Hours</span> :
          <span>{String(timeLeft.minutes).padStart(2, "0")} Min</span> :
          <span>{String(timeLeft.seconds).padStart(2, "0")} Sec</span>
        </div>
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <span className="discount">{item.discount}</span>
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <div className="price">
              <span className="new">${item.price}</span>
              <span className="old">${item.oldPrice}</span>
            </div>
            <div className="rating">⭐ {item.rating}</div>
            <button className="add-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Products</button>
    </div>
  );
}
