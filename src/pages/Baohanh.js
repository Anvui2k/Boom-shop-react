import React from "react";
import { Link } from "react-router-dom";

function Baohanh() {
  return (
    <>
      <div>
        <p></p>
        <br /> &emsp;<h2>CHÍNH SÁCH ÁP DỤNG</h2> <br />
        &emsp;* Áp dụng <b>1 lần đổi / 1 đơn hàng</b>
        <br />
        &emsp;* Sản phẩm <b>đổi trong vòng 7 ngày </b> tính từ ngày
        <b> mua hàng đối với khách hàng mua hàng trực tiếp tại cửa hàng</b>{" "}
        <br />
        &emsp;* Sản phẩm <b>đổi trong vòng 7 ngày</b> tính từ ngày
        <b> nhận hàng đối với khách mua hàng Online</b> <br />
        &emsp; * Chính sách chỉ áp dụng khi sản phẩm còn hoá đơn mua hàng, còn
        nguyên nhãn mác của sản phẩm. Sản phẩm không bị dơ bẩn, hư hỏng bởi
        những tác nhân bên ngoài cửa hàng sau khi mua hàng <br />
        &emsp; * Có thể đổi sang sản phẩm bất kỳ, hoặc đổi 1 sản phẩm sang nhiều
        sản phẩm khác. Nếu có chênh lệch về giá ICON DENIM sẽ tính bù trừ.{" "}
        <br />
        &emsp;* Sản phẩm mua trong chương trình khuyến mãi Quý khách vui lòng
        đổi trong chương trình khuyến mãi để được áp dụng ưu đãi, khi kết thúc
        chương trình khuyến mãi sẽ áp dụng đổi trên giá đang được niêm yết
        <p /> <br />
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

export default Baohanh;
