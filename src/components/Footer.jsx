import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <h1 className="footer_logo">Perfect_Fit</h1>
        <p className="footer_about">
          At Perfect_Fit, we believe style shouldn't demand a huge investment of
          time or money. Style should be comfortable, accessible and easy to
          achieve. That's why our footwear feels as good as it looks,
          effortlessly taking you from the boardroom to the restaurant, to the
          park with your family. We strive to ensure your shopping experience is
          easy on your wallet, and your schedule, by delivering fashion and
          value to everyone in your household.
        </p>
        <div className="footer_social-block">
          <div className="footer_social-wraper">
            <a target={"_blank"} href="facebook.com">
              <Facebook style={{ color: "#2977E8" }} />
            </a>
          </div>
          <div className="footer_social-wraper">
            <Instagram style={{ color: "#e156b3" }} />
          </div>
          <div className="footer_social-wraper">
            <Twitter style={{ color: "#36A1F2" }} />
          </div>
          <div className="footer_social-wraper">
            <Pinterest style={{ color: "#B8081B" }} />
          </div>
        </div>
      </div>
      <div className="footer_center">
        <h2 className="footer_center-title">Useful Links</h2>
        <div className="footer_nav">
          <ul className="footer_nav-list">
            <li className="footer_nav-item">Home</li>
            <li className="footer_nav-item">Catalog</li>
            <li className="footer_nav-item">Accessories</li>
            <li className="footer_nav-item">Cart</li>
            <li className="footer_nav-item">My Account</li>
          </ul>
          <ul className="footer_nav-list">
            <li className="footer_nav-item">Order Tracking</li>
            <li className="footer_nav-item">Wishlist</li>
            <li className="footer_nav-item">Delivery</li>
            <li className="footer_nav-item">Terms and Conditions</li>
            <li className="footer_nav-item">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer_right">
        <h2 className="footer_right-title">Contact</h2>
        <div>
          <div className="footer_right-item">
            <Room style={{ marginRight: 10 }} />
            7061 Mumford Road Halifax
          </div>
          <div className="footer_right-item">
            <Phone style={{ marginRight: 10 }} />
            +1 514 658 3210
          </div>
          <div className="footer_right-item">
            <MailOutline style={{ marginRight: 10 }} />
            contact@perfectfit.com
          </div>
        </div>
        <img
          className="footer_right-img"
          src="https://res.cloudinary.com/okay-rent-a-car/images/v1617474656/content/images/payment-method-no-credit-card-needed/payment-method-no-credit-card-needed.webp"
          alt="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
