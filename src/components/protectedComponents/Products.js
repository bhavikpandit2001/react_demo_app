import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './products.css'

const Products = () => {
    const products = useSelector((state) => state.allProducts.products);
    const Renderlist = products.map((product) => {
        const { id, image, price, title, category } = product
        return (
            <div className="four wide column " key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title}></img>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="price">${price}</div>
                                <div className="category">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <>{Renderlist}</>
    )
}
export default Products