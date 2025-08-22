import React from "react";
import "./Arrival.css";

const Arrival = () => {
  const items = {
    ps5: {
      id: 1,
      title: "PlayStation 5",
      desc: "Black and White version of the PS5 coming out on sale.",
      img: "https://computerspace.in/cdn/shop/products/NewProject_61.png?v=1629055138",
      btn: "Shop Now",
    },
    women: {
      id: 2,
      title: "Women’s Collections",
      desc: "Featured woman collections that give you another vibe.",
      img: "https://stado.in/cdn/shop/articles/blog_1.jpg?v=1681458148",
      btn: "Shop Now",
    },
    speakers: {
      id: 3,
      title: "Speakers",
      desc: "Amazon wireless speakers",
      img: "https://i.pcmag.com/imagery/reviews/03V8y6C5wPv1ZV44gbJFZtQ-8..v1698156812.jpg",
      btn: "Shop Now",
    },
    perfume: {
      id: 4,
      title: "Perfume",
      desc: "GUCCI INTENSE OUD EDP",
      img: "https://parfumlab.in/cdn/shop/products/1_637fe482-c278-4a47-b5ed-6519e43cbbee.png?v=1677935508&width=1445",
      btn: "Shop Now",
    },
  };

  return (
    <div className="new-arrival">
      <h4 className="featured">Featured</h4>
      <h2 className="title">New Arrival</h2>

      <div className="arrival-grid">
        {/* Left column: PlayStation */}
        <div className="left-col">
          <div className="arrival-card large">
            <img src={items.ps5.img} alt={items.ps5.title} />
            <div className="overlay">
              <h3>{items.ps5.title}</h3>
              <p>{items.ps5.desc}</p>
              <button>{items.ps5.btn}</button>
            </div>
          </div>
        </div>

        {/* Right column: women top, speakers+perfume bottom */}
        <div className="right-col">
          <div className="arrival-card medium">
            <img src={items.women.img} alt={items.women.title} />
            <div className="overlay">
              <h3>{items.women.title}</h3>
              <p>{items.women.desc}</p>
              <button>{items.women.btn}</button>
            </div>
          </div>

          <div className="bottom-row">
            <div className="arrival-card small">
              <img src={items.speakers.img} alt={items.speakers.title} />
              <div className="overlay">
                <h3>{items.speakers.title}</h3>
                <p>{items.speakers.desc}</p>
                <button>{items.speakers.btn}</button>
              </div>
            </div>

            <div className="arrival-card small">
              <img src={items.perfume.img} alt={items.perfume.title} />
              <div className="overlay">
                <h3>{items.perfume.title}</h3>
                <p>{items.perfume.desc}</p>
                <button>{items.perfume.btn}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
