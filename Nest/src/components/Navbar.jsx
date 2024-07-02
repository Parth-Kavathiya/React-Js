import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavbarBrand } from 'react-bootstrap'
function Navbar() {
    return (
        <>
            <Nav className="nav navbar navbar-expand-md px-5">
                <div className="dropdown">
                    <button
                        className="btn btn-success dropdown-toggle btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="bi bi-grid">&nbsp;</span>Browse All Categories
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="nav-links">
                    <li><Link to="/"><span className="bi bi-fire text-success">&nbsp;</span>Hot Deals</Link></li>
                    <li><Link to="#" className="text-success">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Shop</Link></li>
                    <li><Link to="#">Vendors</Link></li>
                    <li><Link to="#">Mego Menu</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Pages</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
                <div className="service24 ps-5">
                    <i class="bi bi-headset fs-1">&nbsp;</i>
                    <h3 className="text-success">1900 - 888 <br /><p>&nbsp;&nbsp;24/7 supportCenter</p></h3>
                </div>
            </Nav>
            <hr />

        </>
    )
}
export default Navbar