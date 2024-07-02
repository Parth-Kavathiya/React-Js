import React from "react";
import { Container, Row, Button } from 'react-bootstrap'
import logo from "../assets/images/logo.png"
import app from "../assets/images/app-store.jpg"
import play from "../assets/images/google-play.jpg"
import payment from "../assets/images/payment-methods.png"

function Footer() {
    return (
        <>
            <div className="w-full my-5">
                <Row className="pb-4">
                    <div className="col-md-3 px-5" >
                        <img src={logo} className="img-fluid footer-img" />
                        <br />
                        <p style={{ color: '#777' }}>Awesome grocery store website template</p>
                        <p style={{ color: '#777' }}><span className="bi bi-geo-alt">&nbsp;</span><b>Address: </b>5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                        <p style={{ color: '#777' }}><span className="bi bi-headset">&nbsp;</span><b>Call Us:</b> (+91) - 540-025-124553</p>
                        <p style={{ color: '#777' }}><span className="bi bi-send">&nbsp;</span><b>Email: </b>sale@Nest.com</p>
                        <p style={{ color: '#777' }}><span className="bi bi-clock">&nbsp;</span> <b>Working Hours:</b> 10:00 - 18:00, Mon - Sat</p>
                    </div>
                    <div className="col-md-2">
                        <h4 className="ps-4">Company</h4>
                        <ul className="ul">
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4 className="ps-4">Categories</h4>
                        <ul className="ul">
                            <li>
                                <a href="#">Milks and Dairies</a>
                            </li>
                            <li>
                                <a href="#">Clothing & beauty</a>
                            </li>
                            <li>
                                <a href="#">Pet Toy</a>
                            </li>
                            <li>
                                <a href="#">Baking material</a>
                            </li>
                            <li>
                                <a href="#">Fresh Fruit</a>
                            </li>
                            <li>
                                <a href="#">Wines & Drinks</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4 className="ps-4">Information</h4>
                        <ul className="ul">
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Returns & Exchanges</a>
                            </li>
                            <li>
                                <a href="#">Shipping & Delivery</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="ps-5">Install App</h4>
                        <p className="ps-5 pt-3">From App Store or Google Play</p>
                        <p className="ps-5">
                            <a href="#"><img src={app} className="img-fluid" width={100} /></a>&nbsp;&nbsp;
                            <a href="#"><img src={play} className="img-fluid" width={100} /></a>
                        </p>
                        <p className="ps-5 pt-5">Secured Payment Gateways</p>
                        <a className="ps-5" href="#"><img src={payment} alt="" width={200} /></a>
                    </div>
                </Row>
                <hr />
                <Row>
                    <div className="col-md-4">
                        <p style={{ color: "#777" }}>Copyright © 2024 Nest all rights reserved. Powered by Botble.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="service24 call ps-5">
                            <i class="bi bi-telephone-outbound fs-4"></i>&nbsp;&nbsp;
                            <h3 className="text-success">1900 - 888 <br /><p style={{ color: "#777" }}>&nbsp;&nbsp;24/7 supportCenter</p></h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="social-media">
                            <p className="social">Follow Us:</p>
                            <a href="#" className="bg-success"><span className="bi bi-facebook"></span></a>
                            <a href="#" className="bg-success"><span className="bi bi-twitter"></span></a>
                            <a href="#" className="bg-success"><span className="bi bi-instagram"></span></a>
                            <a href="#" className="bg-success"><span className="bi bi-pinterest"></span></a>
                            <a href="#" className="bg-success"><span className="bi bi-youtube"></span></a>
                        </div>
                    </div>

                </Row>
            </div>
        </>
    )
}
export default Footer