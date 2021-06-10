import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { Col, Card } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';

import '../productCardCart/ProductCardCart';

// Assets Import
import ProductImage from '../../../assets/product-1.jpg';

// Data Import
import availableProducts from '../../../data/availableProductsData.json';

function ProductCard() {

    const cartItemsQuantity = useSelector((state) => state.items)

    // const dispatch = useDispatch();

    // const onAddProduct = (event) => {

    //     dispatch(addItem(itemDetails))
        
    // }

    // const onAddProduct = () => {

    //     console.log("dasdsadsa");

    // }

    // let pName;
    // let pDesc;
    // let pPrice;

    // const itemDetails = [

    //     pName = 'a',
    //     pDesc = 'b',
    //     pPrice = '$100'

    // ]

    // const onAddProduct = (event) => {
    
    //         dispatch(switchActiveBusiness(businessName, _id));
    
    // }

    // console.log(availableProducts);

    return (

        <Col md = "12 mt-4">

            <div className = "added__product__container mb-2">
        
                <Card className = "product__card">
                    <Card.Img className = "product__img" variant="top" src={ProductImage} />
                </Card>

                <div className = "product__details ml-2 mr-2 mt-3">
        
                    <p className = "text__gray text__bold">Product Name</p>
                    <p>Product Description</p>
        
                    <div className = "product__remove">
            
                        <p className = "text__bold">$100</p>
                        <Link to = "/"><FaCartPlus className = "product__action"/></Link>
        
                    </div>
            
                </div>
        
            </div>
    
        </Col>
        
    );
}

export default ProductCard;
