import React,{useEffect,useCallback,useMemo} from 'react';
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductPage=()=>{
    const product=useSelector((state)=>state.allProducts.product);
    const dispatch=useDispatch();
    const fetchProducts=async()=>{
        const response=await axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log("Err",err);
            });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
    
    console.log("Products:",product);
    return(
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    );
};
export default ProductPage;