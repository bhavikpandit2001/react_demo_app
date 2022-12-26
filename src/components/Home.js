import React, { useEffect } from "react";
import { setProducts } from "../redux/actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
import './Home.css'
import axios from "axios";
import Products from "./protectedComponents/Products";

const Home = ({ name }) => {
    //const navigate = useNavigate()
    if (name !== "CART") {
        throw new Error("something went wrong!!")
    }
    // const View = () => {
    //     navigate('/productlist/productview')
    // }
    const products = useSelector((state) => state);

    const dispatch = useDispatch();

    const getProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
            .catch(error => {
                console.log(error)
            })
        dispatch(setProducts(res.data))
        // console.log(res.data)

    }

    useEffect(() => {
        getProducts();
    }, [])

    console.log("products:", products)

    return (
        <div className="ui grid con">
            <Products/>
        </div>
    )
}
export default Home