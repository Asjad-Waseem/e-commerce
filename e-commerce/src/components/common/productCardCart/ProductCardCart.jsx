import React from 'react';

import { Link } from 'react-router-dom';

import { Col, Card } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import './ProductCardCart.css';

// Assets Import
import ProductImage from '../../../assets/product-1.jpg';

function ProductCard() {
    return (

        <Col md = "6">

            <div className = "added__product__container mb-2">
    
                <Card className = "product__card">
                    <Card.Img className = "product__img" variant="top" src={ProductImage} />
                </Card>

                <div className = "product__details ml-2 mr-2 mt-3">
        
                    <p className = "text__gray text__bold">Product Name</p>
                    <p>Product Description</p>
    
                    <div className = "product__remove">
           
                        <p className = "text__bold">$100</p>
                        <Link to = "/"><AiFillDelete className = "product__action" style = {{fill: "red"}} /></Link>
           
                    </div>
           
                </div>
        
            </div>
    
        </Col>
        
    );
}

export default ProductCard;
