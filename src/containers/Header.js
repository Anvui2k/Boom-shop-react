import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setShow, size }) => {
  return (
    <>
      <div>
        <div className="header-top flex">
          <div className="container flex">
            <div className="header-top-left">
              <span>
                <i class="fas fa-envelope"></i> boom@gmail.com
              </span>
              <span>
                <i class="fas fa-phone-alt"></i> 0337 493 650
              </span>
            </div>
            <div className="header-top-right">
              <ul className="header-top-btns flex">
                <li>
                  <a to="/#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a to="/#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a to="/#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a to="/#" className="header-top-btn"></a>
                </li>
                <li>
                  <a to="/#" className="header-top-btn"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*----------------------------------------------------*/}
        <div className="navbar">
          <nav className="top-navbar-pc flex">
            <div className="container flex">
              <ul className="navbar-nav-left flex">
                <li>
                  <Link to="/women" className="nav-link active">
                    Women
                  </Link>
                </li>
                <li>
                  <Link to="/Men" className="nav-link">
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/children" className="nav-link">
                    Children
                  </Link>
                </li>
              </ul>
              {/* logo */}
              <Link to="/home" className="navbar-brand flex">
                <span className="brand-text" onClick={() => setShow(true)}>
                  B.O.O.M
                </span>
              </Link>
              {/* end of logo */}
              <ul className="navbar-nav-right flex">
                <li>
                  <Link to="/gioithieu" className="nav-link">
                    Giới Thiệu
                  </Link>
                </li>
                <li>
                  <Link to="/baohanh" className="nav-link">
                    Chính Sách Bảo Hành
                  </Link>
                </li>
                <li>
                  <Link to="/lienhe" className="nav-link">
                    Liên Hệ
                  </Link>
                </li>
                <div className="cart" onClick={() => setShow(false)}>
                  <span>
                    <i class="fas fa-shopping-cart"></i>
                  </span>
                  <span>{size}</span>
                </div>
              </ul>
              {/* menu icon */}
              <label
                htmlFor="nav-mobile-input"
                type="button"
                className="navbar-toggler"
              >
                <i className="fa fa-bars" />
              </label>
              <input
                type="checkbox"
                hidden
                name
                className="nav__input"
                id="nav-mobile-input"
              />
              {/* overlay */}
              <label htmlFor="nav-mobile-input" className="nav__overlay" />
              <input
                type="checkbox"
                name
                className="nav__input"
                id="nav-mobile-input"
              />
              {/**/}
              <nav className="top-navbar-mobile">
                <label
                  htmlFor="nav-mobile-input"
                  className="nav__mobile-clothes"
                >
                  <i className="fas fa-times" />
                </label>
                <div className="container">
                  <ul className="navbar-nav-mobile">
                    <li>
                      <Link to="/women" className="nav-mobile-link active">
                        Women
                      </Link>
                    </li>
                    <li>
                      <Link to="/men" className="nav-mobile-link">
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link to="/children" className="nav-mobile-link">
                        Children
                      </Link>
                    </li>
                  </ul>
                  {/* logo */}
                  {/* end of logo */}
                  <ul className="navbar-nav-mobile-right">
                    <li>
                      <Link to="/gioithieu" className="nav-mobile-link">
                        Giới Thiệu
                      </Link>
                    </li>
                    <li>
                      <Link to="/baohanh" className="nav-mobile-link">
                        Chính Sách Bảo Hành
                      </Link>
                    </li>
                    <li>
                      <Link to="/lienhe" className="nav-mobile-link">
                        Liên Hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
