import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../../../redux/cartItems';

import { Col, Card } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';

import '../productCardCart/ProductCardCart';

// Assets Import
import ProductImage from '../../../assets/product-1.jpg';

// Data Import
import availableProducts from '../../../data/availableProductsData.json';

function ProductCard() {

    const dispatch = useDispatch();

    // const cartItemsQuantity = useSelector((state) => state.cartItems.cartItemsQuantity);

    const productsAvailable = availableProducts.products;

    const onAddProductToCart = (product) => {

        dispatch(addItem(product));

    }

    return (

        <>

        { productsAvailable && productsAvailable.map((product) => (

        <Col md = "12 mt-4">

            <div className = "added__product__container mb-2">
        
                <Card className = "product__card">
                    <Card.Img className = "product__img" variant="top" src={ProductImage} />
                </Card>

                <div className = "product__details ml-2 mr-2 mt-3">
        
                    <p className = "text__gray text__bold">{product.Name}</p>
                    <p>{product.Description}</p>
        
                    <div className = "product__remove">
            
                        <p className = "text__bold">{product.Price}</p>
                        <Link to = "/" onClick = {() => onAddProductToCart(product)}><FaCartPlus className = "product__action"/></Link>
        
                    </div>
            
                </div>
        
            </div>
    
        </Col>

        ))}

        </>
        
    );
}

export default ProductCard;
