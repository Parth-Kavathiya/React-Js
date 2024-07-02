import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../assets/images/bg2.png"
import slider2 from "../assets/images/bg1.png"
import Top from "../assets/images/1.png"
import Top1 from "../assets/images/2.png"
import Top2 from "../assets/images/3.png"

const categories = [
    {
        image: "https://nest.botble.com/storage/product-categories/image-1.png", // Replace with actual image URL
        title: "Milks & Da..",
        itemCount: 7,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-2.png", // Replace with actual image URL
        title: "Clothing &",
        itemCount: 11,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-3.png", // Replace with actual image URL
        title: "Pet Toy",
        itemCount: 5,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-4.png", // Replace with actual image URL
        title: "Black ma..",
        itemCount: 7,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-5.png", // Replace with actual image URL
        title: "Fresh Fruit",
        itemCount: 6,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-6.png", // Replace with actual image URL
        title: "Wines & dr.",
        itemCount: 6,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-7.png", // Replace with actual image URL
        title: "Fresh Sea..",
        itemCount: 10,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-8.png", // Replace with actual image URL
        title: "Fast food",
        itemCount: 8,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-9.png", // Replace with actual image URL
        title: "Vegetables",
        itemCount: 12,
    },
    {
        image: "https://nest.botble.com/storage/product-categories/image-10.png", // Replace with actual image URL
        title: "Bread & Ju.",
        itemCount: 4,
    },
    // {
    //     image: "https://nest.botble.com/storage/product-categories/image-11.png", // Replace with actual image URL
    //     title: "Cake & mi.",
    //     itemCount: 4,
    // },
    // {
    //     image: "https://nest.botble.com/storage/product-categories/image-12.png", // Replace with actual image URL
    //     title: "Coffe & Te.",
    //     itemCount: 8,
    // },
    // Add more categories here...
];
function Content() {
    return (
        <>
            {/* Slider */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={slider1} className="d-block w-100" height={400} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Don't miss amazing grocery deals</h1>
                            <p>Sign up for the daily newsletter.</p>
                            <input type="email" placeholder="Enter Your Email *" />&nbsp;<button className="btn btn-sm btn-success">Subscribe</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src={slider2} className="d-block w-100" height={400} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Fresh vegetables <br /> Big discount</h1>
                            <p>Save up to 50% off on your first order.</p>
                            <input type="email" placeholder="Enter Your Email *" />&nbsp;<button className="btn btn-sm btn-success">Subscribe</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="w-full mt-4">

                <div className="row">
                    <div className="col-md-12">
                        <h3 className="top-categories">Top Categories</h3>
                    </div>
                    {categories && categories.map((items) => {
                        return (
                            <>
                                <div className="col-md-1 categories">
                                    <img src={items.image} alt="" /><br />
                                    <a href="#">{items.title}</a><br />
                                    <p>{items.itemCount} items</p>
                                </div>
                            </>
                        )
                    }
                    )}
                </div>
                <div className="row mt-5 px-4">
                    <div className="col-md-4 Container">
                        <img src={Top} className="img-fluid" alt="" />
                        <div className="one">
                            <h4 className="py-3">
                                Everyday Fresh &
                                <br />
                                Clean with Our
                                <br />
                                Products
                            </h4>
                            <a href="#" className="btn btn-success btn-sm">Shop Now &nbsp; <span className="bi bi-arrow-right"></span></a>
                        </div>
                    </div>
                    <div className="col-md-4 Container">
                        <img src={Top1} className="img-fluid" alt="" />
                        <div className="one">
                            <h4 className="py-3">
                            Make your Breakfast Healthy 
                            <br />
                             and Easy
                             <br /><br />
                            </h4>
                            <a href="#" className="btn btn-success btn-sm">Shop Now &nbsp; <span className="bi bi-arrow-right"></span></a>
                        </div>
                    </div>
                    <div className="col-md-4 Container">
                        <img src={Top2} className="img-fluid" alt="" />
                        <div className="one">
                            <h4 className="py-3">
                            The best Organic Products 
                            <br />
                            Online
                            <br /><br />
                            </h4>
                            <a href="#" className="btn btn-success btn-sm">Shop Now &nbsp; <span className="bi bi-arrow-right"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content