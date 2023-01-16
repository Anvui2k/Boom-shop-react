import React, { useState } from "react";
import list from "./data";
import Cards from "./card";
import { Link } from "react-router-dom";
function Home({ handleClick }) {
  return (
    <>
      <div>
        <div className="header-banner">
          <div className="container flex">
            <div className="header-banner-left flex">
              <h1>Hãy khám phá những mùa thời trang cùng nhau.</h1>
              <p className="text">
                Ở nước ta, thời tiết giữa hai miền Bắc Nam có sự khác biệt rõ
                rệt. Cũng chính vì vậy mà gu thời trang ở mỗi nơi đều có nét đặc
                trưng riêng. Nếu như ở miền Bắc có 4 mùa xuân, hạ, thu, đông thì
                ở miền Nam chỉ có hai mùa nắng và mưa. Tùy vào thời tiết, xu
                hướng thời trang sẽ thay đổi liên tục để đảm bảo cho sức khỏe.
                Vậy làm thế nào để có một gu thời trang ấn tượng theo từng mùa?
                Hãy cùng tham khảo một số sản phẩm bên B.O.O.M nha .
              </p>
              <a href="/#" className="btn btn-lg">
                shop now
              </a>
            </div>
            <div className="header-banner-right">
              <img src="./assets/header-banner-1.jpg" alt />
            </div>
          </div>
        </div>

        <section id="collection-2">
          <div className="container">
            <div className="collection-2-grid grid">
              {list
                .filter((x) => x.id == 1 || x.id == 2 || x.id == 3 || x.id == 4)
                .map((item) => (
                  <Cards key={item.id} item={item} handleClick={handleClick} />
                ))}
            </div>
          </div>
        </section>

        <section id="about-us" className="container">
          <div className="about-us-left" />
          <div className="about-us-right">
            <a href="/#" className="navbar-brand">
              Story of B.O.O.M
            </a>
            <p className="text">
              B.O.O.M được thành lập năm 2017 – là nơi truyền ý tưởng về thời
              trang thiết kế lấy cảm hứng `dựa trên bức tranh chân dung một
              người phụ nữ xinh đẹp, kiêu kì và bí ẩn. Luôn theo đuổi sự lãng
              mạn và tinh tế như chính tên thương hiệu vốn có, những sản phẩm
              của chúng tôi phần lớn xoay quanh hai gam màu đen &amp; trắng kinh
              điển.
            </p>
          </div>
        </section>
        {/* end of about us section */}
        {/* footer */}
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
        {/* end of footer */}
      </div>
    </>
  );
}

export default Home;
