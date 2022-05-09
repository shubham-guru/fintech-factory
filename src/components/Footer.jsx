import React from "react";
import "../css/footer.css";
// import footerImg from "../images/footerImg.png";
import ig from "../images/instagram.png";
import fb from "../images/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div>
          <ul>
            <li>
              <h2>LINKS</h2>
            </li>
            <li>
              <a href="#">Shop Online</a>
            </li>
            <li>
              <a href="#">Phone Consultation</a>
            </li>
            <li>
              <a href="#">Request Demo</a>
            </li>
            <li>
              <a href="#">Track your order</a>
            </li>
            <li>
              <a href="#">Specials</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2>ABOUT</h2>
            </li>
            <li>
              <a href="#">About Fintech Factory</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">News & Specials</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <h2>CONTACT</h2>
            </li>
            <li>
              <a href="#">
                200 feet bypass<br /> Jaipur, Raj
              </a>
            </li>
            <li>
              <a href="#">Office Hours from 10am-6pm</a>
            </li>
            <li>
              <a href="#">
                We offer delivery to all over India
              </a>
            </li>
            <li id="contactLi">
              <a href="#">Main(915)596-9040</a>
              <a href="#">Fax(707)329-6560</a>
              <a href="#">info@fintechfactory.com</a>
            </li>
          </ul>
        </div>

        <div className="joinBox">
          <h3>JOIN THE LIST</h3>
          <p>Subscribe to stay to date on latest news</p>
          <form>
            <input type="text" placeholder="Email Address" required />
            <br />
            <button>SUBSCRIBE</button>
          </form>
          <h3>FOLLOW US</h3>
          <div className="logos">
            <img src={ig} alt="insta_icon" />
            <img src={fb} alt="facebook_icon" />
          </div>
        </div>
      </div>
      <div className="base">
          {/* <hr /> */}
          <div>
            <p>
              <b>LICENSE:</b> C10-00F4666-RAJ
            </p>
            <div className="base2">
            <p>
              <b>NOTE:</b> This site is designed and maintained by Fintech Factory
            </p>
            <p>&#169; 2021 Fintech Factory | All Right Reserved</p>
            </div>
         
          </div>
        </div>
    </div>
  );
};

export default Footer;
