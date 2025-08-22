import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div>
          <h4>Exclusive</h4>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>&#10148;</button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Column 3 */}
        <div>
          <h4>Account</h4>
          <a href="#">My Account</a>
          <a href="#">Login / Register</a>
          <a href="#">Cart</a>
          <a href="#">Wishlist</a>
          <a href="#">Shop</a>
        </div>

        {/* Column 4 */}
        <div>
          <h4>Quick Link</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>

        {/* Column 5 */}
        <div>
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="download">
            <img src="https://hexdocs.pm/qr_code/docs/qrcode.svg" alt="QR Code" />
            <div>
              <img src="https://images.moneycontrol.com/static-mcnews/2024/08/20240829123242_Play-Store.jpg" alt="Google Play" />
              <img src="https://w7.pngwing.com/pngs/1015/380/png-transparent-app-store-logo-iphone-app-store-google-play-apple-app-store-electronics-text-logo.png" alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
}
