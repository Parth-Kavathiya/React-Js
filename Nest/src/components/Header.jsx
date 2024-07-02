import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container, Row, Button } from 'react-bootstrap'
import Nest from '../assets/images/logo.png'
const Header = () => {
    return (

        <>
            <div className="w-full mx-auto">
                <Row>
                    <div className="col-md-4 pb-0">
                        <ol className="head-list">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ol>
                    </div>
                    <div className="col-md-4 pb-0">
                        <p className="offer">Get great devices up to 50% off <a href="#" className="text-success">View details</a></p>
                    </div>
                    <div className="col-md-4 pb-0">
                        <ol className="list2">
                            <li><p>Need Help Call Usa<a href="#" className="text-success">+ 1800 900</a> |</p></li>
                            <li>
                                <p>&nbsp;&nbsp;
                                    <span className="bi bi-globe-americas">&nbsp;</span>
                                    English&nbsp;&nbsp;|
                                </p>
                            </li>
                            <li>
                                <p>
                                    &nbsp;&nbsp;USD&nbsp;
                                    <span className="bi bi-caret-down-fill"></span>
                                </p>
                            </li>
                        </ol>
                    </div>
                    <hr />
                </Row>
            </div>
            <div className="w-100 pb-2">
                <Row className="pb-3">
                    <div className="col-md-2 logo-img">
                        <img src={Nest} className="img-fluid" />
                    </div>
                    <div className="col-md-4 px-2">
                        <div className="input-group mx-5 px-2">
                            <input type="text" placeholder="search anything here...." className="form-control" />
                            <Button className="btn text-dark search-button"><span className="bi bi-search"></span></Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="mx-5 list3">
                            <li className="">
                                <select className="form-select" id="validationCustom04" required="">
                                    <option selected="" disabled="" value="">
                                        Your Location
                                    </option>
                                    <option>Rajkot</option>
                                    <option>Surat</option>
                                    <option>Ahemdabad</option>
                                    <option>Jamnagar</option>
                                </select>
                            </li>
                            <li>
                                <p><span className="bi bi-arrow-repeat"><sup className="bg-success">0</sup></span> Compare</p>
                            </li>
                            <li>
                                <p><span className="bi bi-heart"><sup className="bg-success">0</sup></span> Wishlist</p>
                            </li>
                            <li>
                                <p><span className="bi bi-cart-check"><sup className="bg-success">0</sup></span> Cart</p>
                            </li>
                            <li>
                                <p><span className="bi bi-person"></span> Account</p>
                            </li>
                        </ul>
                    </div>
                </Row>
                <hr />
            </div>
        </>
    )
}

export default Header