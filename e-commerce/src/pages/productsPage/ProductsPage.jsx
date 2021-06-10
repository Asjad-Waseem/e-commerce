import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';

// Common Layout
import Navbar from '../../components/common/navbar/AppNavbar';

// Components Import
import PayNowButton from '../../components/common/PayNowButton';
import ProductCardCart from '../../components/common/productCardCart/ProductCardCart';
import ProductCardAvailableProducts from '../../components/common/productCardAvailableProducts/ProductCardAvailableProducts';

// Assets Import
import './ProductsPage.css';

function ProductsPage() {

    // const { cartItems } = useSelector((state) => state.cartItems);
    // const dispatch = useDispatch();

    return (
        <div className = "products__page">

            <Navbar/>

            <Container fluid className = "mt-4">
                <Row className = "ml-2 mr-2">
                    <Col className = "cart__col" md = "7">
                        <div className="text-center">
                            <h4 className = "total__amount mt-4">Total Amount</h4>
                            <h2>$ 4,500.00</h2>
                            <br/>
                            <PayNowButton />
                        </div>

                        <br/>
                        <br/>

                        <div className = "cart__details">

                            <p>CUSTOMER CART</p>
                            <p>ORDER ID: #57486797394759345</p>
                            <Link className = "reset__cart">RESET CART</Link>

                        </div>

                        <div className = "added__products">

                            <Row className = "added__products__row">

                                <ProductCardCart />
                                <ProductCardCart />
                                <ProductCardCart />
                                <ProductCardCart />

                            </Row>

                        </div>

                    </Col>
                    <Col className = "available__products__col" md = {{ span: 4, offset: 1 }}>

                    <div className="text-center">

                        <h4 className = "total__amount mt-4">Available Products</h4>
                        <Form>
                            <FormControl type="text" placeholder="Search" className="search__products mr-sm-2" />
                        </Form>
                               
                    </div>

                    <div className = "available__products">

                    <Row>

                        <ProductCardAvailableProducts />                    
                        <ProductCardAvailableProducts />
                        <ProductCardAvailableProducts />
                        <ProductCardAvailableProducts />
                        <ProductCardAvailableProducts /> 

                    </Row>

                    </div>

                    </Col>
                    </Row>
            </Container>

        </div>
    );
}

export default ProductsPage;
