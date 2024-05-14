import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/footer/footerlogo.png";
import footerEmail from "../../assets/images/footer/email-send.png";
import footerQrcode from "../../assets/images/footer/Qrcode.svg";
import footerPlay from "../../assets/images/footer/png-transparent-google-play.svg";
import footerStory from "../../assets/images/footer/download-appstore.svg";
import footerFacebook from "../../assets/images/footer/IconFacebook.svg";
import footerTwitter from "../../assets/images/footer/IconTwitter.svg";
import footerInstagram from "../../assets/images/footer/iconinstagram.svg";
import footerLinkedin from "../../assets/images/footer/Icon-Linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <div class="footer__cards">
              <div class="footer__card">
                <a class="footer__logo" href="#">
                  <img src={footerLogo} alt="Logo footer" />
                </a>
                <h3 class="footer__title">Subscribe</h3>
                <p class="footer__desc">Get 10% off your first order</p>
                <div class="footer__form">
                  <input type="email" placeholder="Enter your email" />
                  <img src={footerEmail} alt="email-send" />
                </div>
              </div>
              <div class="footer__card">
                <h3 class="footer__title">Support</h3>
                <p class="footer__desc">
                  111 Bijoy sarani, Dhaka,
                  <br />
                  DH 1515, Bangladesh.
                </p>
                <p class="footer__desc">exclusive@gmail.com</p>
                <p class="footer__desc">+88015-88888-9999</p>
              </div>
              <ul class="footer__card">
                <li>
                  <h3 class="footer__title">Account</h3>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    My Account
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="">
                    Login / Register
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    Cart
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    Shop
                  </a>
                </li>
              </ul>
              <ul class="footer__card">
                <li>
                  <h3 class="footer__title">Quick Link</h3>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="">
                    Terms Of Use
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a class="footer__desc" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div class="footer__card">
                <h3 class="footer__title">Download App</h3>
                <p class="footer__save-desc">Save $3 with App New User Only</p>
                <div class="footer__card__part">
                  <img src={footerQrcode} alt="Qrcode" />
                  <div>
                    <a href="https://play.google.com/" target="_blank">
                      <img src={footerPlay} alt="Gooogle play" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank">
                      <img src={footerStory} alt="App story" />
                    </a>
                  </div>
                </div>
                <div class="footer__card__networks">
                  <a href="facebook.com" target="_blank">
                    <img src={footerFacebook} alt="Facebook img" />
                  </a>
                  <a href="twitter.com" target="_blank">
                    <img src={footerTwitter} alt="Twitter img" />
                  </a>
                  <a href="instagram.com" target="_blank">
                    <img src={footerInstagram} alt="icon-instagram img" />
                  </a>
                  <a href="linkedin.com" target="_blank">
                    <img src={footerLinkedin} alt="Icon-Linkedin img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__bottom__desc">
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
