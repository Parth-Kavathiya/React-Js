import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const img=[{
    image : "https://tealogy.in/storage/cms-pages/img2-27052406060056.jpg"
},
{
    image : "https://tealogy.in/storage/cms-pages/img7-27052406060027.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img5-27052406060017.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img1-27052406060025.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img8-27052406060097.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img11-27052406060052.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img12-27052406060013.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img13-27052406060081.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img16-27052406060084.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img14-27052406060022.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img15-27052406060046.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img6-27052406060024.jpg"

},
{
    image : "https://tealogy.in/storage/cms-pages/img18-27052406060083.jpg"

}
]


function Gallery() {
    return (
        <>
            <Header />
            <div className="container mx-0 p-20 px-36">
                <div className="row">
                    <div className="col-md-12 gallery-hader">
                       <a className="h3" href="#"><span className="text-yellow-500"> OUR MENU </span> | MOMENTS @ TEALOGY</a>
                       <hr />
                    </div>
                    {img && img.map((items) => {
                        return (
                            <>
                                <div className="col-md-3 mt-4 gallery-img">
                                    <img src={items.image} className="img-fluid" />
                                </div>
                            </>
                        )
                    }
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Gallery