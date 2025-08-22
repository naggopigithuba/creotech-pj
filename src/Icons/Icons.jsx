import React, { useState } from "react";
import "./Icons.css";

// You can replace emojis with icons (react-icons or SVGs) later
const categories = [
  { id: 1, name: "Phones", icon: "📱" },
  { id: 2, name: "Computers", icon: "💻" },
  { id: 3, name: "SmartWatch", icon: "⌚" },
  { id: 4, name: "Camera", icon: "📷" },
  { id: 5, name: "HeadPhones", icon: "🎧" },
  { id: 6, name: "Gaming", icon: "🎮" },
];

export default function Icons() {
  const [active, setActive] = useState("Camera");

  return (
    <div className="categories-container">
      <h4 className="sub-title">Categories</h4>
      <h2 className="main-title">Browse By Category</h2>

      <div className="categories-list">
        {categories.map((item) => (
          <div
            key={item.id}
            className={`category-card ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <div className="icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
