import React from "react";
import { Link } from "react-router-dom";
function Lienhe() {
  return (
    <>
      <div>
        <p></p>
        <center>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.212841519772!2d106.71968101382275!3d10.79500416180472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%20TVGB%2081!5e0!3m2!1svi!2s!4v1656309041849!5m2!1svi!2s"
            width="1170px"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </center>
        <p />{" "}
        <center>
          <br />
          <p></p>
          <h4>
            {" "}
            <b> BOOM</b>
          </h4>
          <br />
          <h6>Giờ hoạt động: 09:30 – 22:00 (T2 – CN)</h6>
          <br />
          <h6>Hotline: 0337 493 651</h6>
          <br />
          <h6>E-mail: doanvui2k@gmail.com</h6>
        </center>
        <p />
        <br />
        <footer id="footer">
          <div className="container grid">
            <div className="footer-item one">
              <a href="/#" className="navbar-brand">
                <span className="brand-text">B.O.O.M</span>
              </a>
              <p className="text">Landmark81</p>
            </div>
            <div className="footer-item">
              <h4>Menu</h4>
              <ul className="footer-links">
                <li>
                  <Link className="nav-link" to="/women">
                    Women
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/men">
                    Men
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/children">
                    Children
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>Shopping</h4>
              <ul className="footer-links">
                <li>
                  <Link className="nav-link" to="/gioithieu">
                    Giới Thiệu
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/baohanh">
                    Chính Sách Bảo Hành
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/lienhe">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-item four">
              <h4>Contact Us</h4>
              <span>boom@gmail.com</span>
              <ul className="footer-social-links flex">
                <li>
                  <a href="/#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Lienhe;
