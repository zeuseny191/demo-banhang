import React from "react";
import logo from "../../assets/image/logoEcommerce.png";
import gaoIcon from "../../assets/image/gao.png";
import cafeIcon from "../../assets/image/cafe.png";
import beanIcon from "../../assets/image/bean.png";
import seedIcon from "../../assets/image/seed.png";
import vegetableIcon from "../../assets/image/vegetable.png";
import product from "../../assets/image/product.jpeg";
import "./MainEcommerce.css";
function MainEcommerce() {
    return <div>
        <div className="container-commerce">
            <img className="logo-ecommerce" src={logo}></img>
            <section className="category-section">
                <h3>DANH MỤC</h3>
                <ul className="category-list">
                    <li>
                        <figure>
                            <img className="image-category" src={gaoIcon} alt="gao"></img>
                            <figcaption className="name-category">Gạo</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img className="image-category" src={cafeIcon} alt="cafe"></img>
                            <figcaption className="name-category">Cà phê</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img className="image-category" src={beanIcon} alt="dau"></img>
                            <figcaption className="name-category">Đậu</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img className="image-category" src={vegetableIcon} alt="raucu"></img>
                            <figcaption className="name-category">Rau củ</figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img className="image-category" src={seedIcon} alt="hatgiong"></img>
                            <figcaption className="name-category">Hạt giống</figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
            <div className="line-cutting"></div>
            <section className="product-section">
                <div class="grid-container">
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                    <div class="grid-item">
                        <figure>
                            <img className="image-product" src={product} alt="gao"></img>
                            <figcaption className="name-product">Gạo ST25 (Bao 5 ký Gạo Thơm Cao cấp)</figcaption>
                            <div className="price-product">
                                <figcaption className="price old-price">250000đ</figcaption>
                                <span className="sales">(-20%)</span>
                                <figcaption className="price new-price">125000đ</figcaption>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    </div>;
}
export default MainEcommerce;
