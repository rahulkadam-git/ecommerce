import { Divider } from "@mui/material";
import React from "react";
import "./Footer.css";
import amazonLogo from "../../imgs/amazon_PNG25.png";

function Footer(props) {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_container_one">
          <h4>Get to know us</h4>
          <p>About us</p>
          <p>Careers</p>
          <p>Press releases</p>
          <p>Amazon cares</p>
          <p>Get a smile</p>
          <p>Amazon science</p>
        </div>
        <div className="footer_container_two">
          <h4>Connect with us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer_container_three">
          <h4>Make money with us</h4>
          <p>Sell on amazon</p>
          <p>Sell under amazon accelerator</p>
          <p>Amazon Global selling</p>
          <p>Become an affiliate</p>
          <p>Fulfillment by amazon</p>
          <p>Advertise your products</p>
          <p>Amazon pay on merchants</p>
        </div>
        <div className="footer_container_four">
          <h4>let Us help you</h4>
          <p>Covid-19 and Amazon</p>
          <p>Your accounts</p>
          <p>Return Centers</p>
          <p>100% Purchase protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <Divider />
      <div className="last_footer">
        <div className="footer_nav_logo">
          <img src={amazonLogo} alt="logo"></img>
        </div>
        <div className="country_name">
          <a href="https://www.amazon.com.au/ref=footer_au">Australia</a>
          <a href="https://www.amazon.com.br/ref=footer_br">Brazil</a>
          <a href="https://www.amazon.com.au/ref=footer_au">Mexico</a>
          <a href="https://www.amazon.com.au/ref=footer_au">Netherland</a>
          <a href="https://www.amazon.com.au/ref=footer_au">Poland</a>
          <a href="https://www.amazon.com.au/ref=footer_au">Singapore</a>
          <a href="https://www.amazon.com.au/ref=footer_au">Spain</a>
          <a href="https://www.amazon.com.au/ref=footer_au">Turkey</a>
          <a href="https://www.amazon.com.au/ref=footer_au">
            United Arab Emirates
          </a>
          <a href="https://www.amazon.com.au/ref=footer_au">United Kingdom</a>
          <a href="https://www.amazon.com.au/ref=footer_au">
            United state America
          </a>
        </div>
      </div>
      <div className="footer_links">
        <div className="footer_links_one">
          <h5>AbeBooks</h5>
          <p>Covid-19 and Amazon</p>
          <p>Your accounts</p>
        </div>
        <div className="footer_links_one">
          <h5>Amazon Web Service</h5>
          <p>Covid-19 and Amazon</p>
        </div>
        <div className="footer_links_one">
          <h5>Auditable</h5>
          <p>Covid-19 and Amazon</p>
        </div>
        <div className="footer_links_one">
          <h5>DPReview</h5>
          <p>Covid-19 and Amazon</p>
          <p>Your accounts</p>
        </div>
        <div className="footer_links_one">
          <h5>IMDB</h5>
          <p>Covid-19 and Amazon</p>
          <p>Your accounts</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
