import "../styles/Newsletter.scss";
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2 className="newsletter_title">Newsletter</h2>
      <p className="newsletter_subtitle">
        Get timely updates from your favorite shoes store
      </p>
      <div className="newsletter_input-block">
        <input className="newsletter_input" placeholder="Enter your email" />
        <button className="newsletter_btn">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
