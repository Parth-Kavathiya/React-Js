import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const menuList = [{
    id: 101,
    photo: "https://tse3.mm.bing.net/th?id=OIP.cE24LdMhz4IsRiZprnLeegHaLH&pid=Api&P=0&h=180",
    Name: "Milk Sheck",
    oldPrice: "150",
    NewPrice: "99"
},
{
    id: 102,
    photo: "https://tse4.mm.bing.net/th?id=OIP.leZPXq-YEnglEBgQOAqOAwHaHa&pid=Api&P=0&h=180",
    Name: "Cold Coffe",
    oldPrice: "310",
    NewPrice: "270"
},
{
    id: 103,
    photo: "https://tse2.explicit.bing.net/th?id=OIP.nksWaHL6t12d7iK4P6ucngHaJQ&pid=Api&P=0&h=180",
    Name: "pastry",
    oldPrice: "280",
    NewPrice: "120"
},
{
    id: 104,
    photo: "https://tse4.mm.bing.net/th?id=OIP.xQm60DAkG1d30HvLFCPT-AHaFj&pid=Api&P=0&h=180",
    Name: "cold drinks",
    oldPrice: "350",
    NewPrice: "200"
},
{
    id: 105,
    photo: "https://tse1.mm.bing.net/th?id=OIP.D4lCG7dGjMJwO07EHm1uIQHaHa&pid=Api&P=0&h=180",
    Name: "Pizza",
    oldPrice: "260",
    NewPrice: "210"
},
{
    id: 106,
    photo: "https://tse3.mm.bing.net/th?id=OIP.rNTaDBjS6SpuNQ-OHlM-2gHaHa&pid=Api&P=0&h=180",
    Name: "Vegetable Sandwich",
    oldPrice: "240",
    NewPrice: "150"
},
{
    id: 107,
    photo: "https://st3.depositphotos.com/1762750/16611/i/450/depositphotos_166119878-stock-photo-pasta-with-vegetables.jpg",
    Name: "Pasatta",
    oldPrice: "240",
    NewPrice: "170"
},
{
    id: 108,
    photo: "https://tse2.mm.bing.net/th?id=OIP.uWnp4sZVPQ7miYnC5qCDpwHaFG&pid=Api&P=0&h=180",
    Name: "Green Tea",
    oldPrice: "240",
    NewPrice: "150"
},
{
    id: 109,
    photo: "https://mydietbymehakbansal.com/wp-content/uploads/2022/07/Masala-Chai-Featured.jpg",
    Name: "Tea",
    oldPrice: "60",
    NewPrice: "40"
},
{
    id: 110,
    photo: "https://tse2.mm.bing.net/th?id=OIP.RYLj9amplObWucWG0nYXPAHaGM&pid=Api&P=0&h=180",
    Name: "StarkBuck Coffe",
    oldPrice: "300",
    NewPrice: "240"
},
{
    id: 111,
    photo: "https://i.pinimg.com/originals/cc/77/60/cc77608f8721b2d6f6723fac6a7f581b.jpg",
    Name: "Cake",
    oldPrice: "550",
    NewPrice: "460"
},
{
    id: 112,
    photo: "https://tse4.mm.bing.net/th?id=OIP.PkdLo18IR_HEbeZcZQh8QgHaE8&pid=Api&P=0&h=180",
    Name: "Nudle",
    oldPrice: "240",
    NewPrice: "150"
}
]
function Menu() {
    return (
        <>
            < Header />
            <div className="w-full">
                <div className="row">
                    <h2 className="h2 text-blue-950 mt-5" style={{ textAlign: "center" }}>Menu List</h2>
                    <hr />
                    {menuList && menuList.map((items) => {
                        return (
                            <>
                                <div className="col-md-3 mt-4 shadow border border-gray-400 mt-4">
                                    <img src={items.photo} alt="coffe" className="img-fluid" style={{ width: "100%", height: "250px" }} />
                                    <p className="text-center fs-4 mt-2">{items.Name}</p>
                                    <p className="text-center fs-5">Rs &nbsp;<del>{items.oldPrice}</del> {items.NewPrice}</p>
                                    <p className="text-center"><button type="button" className="bg-black text-white mt-3 p-2">Order Now</button></p>
                                    <p className="mb-4"></p>
                                </div>
                            </>
                        )
                    }
                    )}
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Menu