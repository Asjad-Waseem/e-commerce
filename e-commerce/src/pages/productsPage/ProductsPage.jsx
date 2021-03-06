import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { searchItem, resetCart } from '../../redux/cartItems';

import { Container, Row, Col } from 'react-bootstrap';

// Common Layout
import Navbar from '../../components/common/navbar/AppNavbar';

// Components Import
import PayNowButton from '../../components/common/PayNowButton';
import ProductCardCart from '../../components/common/productCardCart/ProductCardCart';
import ProductCardAvailableProducts from '../../components/common/productCardAvailableProducts/ProductCardAvailableProducts';
import SearchBox from '../../components/common/search box/SearchBox';

// Assets Import
import './ProductsPage.css';

function ProductsPage() {

    const totalAmount = useSelector(state => state.cartItems.totalAmount);
    const dispatch = useDispatch();

    const onSearchItem = (e) => {

        dispatch(searchItem(e.target.value));

    }

    const onCartReset = () => {

        dispatch(resetCart())

    }

    return (
        <div className = "products__page">

            <Navbar/>

            <Container fluid className = "mt-4">
                <Row className = "ml-2 mr-2">
                    <Col className = "cart__col" md = "7">
                        <div className="text-center">
                            <h4 className = "total__amount mt-4">Total Amount</h4>
                            <h2>$ { totalAmount }</h2>
                            <br/>
                            <PayNowButton onClick = { () => alert("Your order has been placed") }/>
                        </div>

                        <br/>
                        <br/>

                        <div className = "cart__details">

                            <p>CUSTOMER CART</p>
                            <p>ORDER ID: #57486797394759345</p>
                            <Link className = "reset__cart" onClick = {onCartReset}>RESET CART</Link>

                        </div>

                        <div className = "added__products">

                            <Row className = "added__products__row">

                                <ProductCardCart />

                            </Row>

                        </div>

                    </Col>
                    <Col className = "available__products__col" md = {{ span: 4, offset: 1 }}>

                        <div className="text-center">
    
                            <h4 className = "total__amount mt-4">Available Products</h4>
    
                            <SearchBox placeholder = "Search"
                                handleChange = { onSearchItem } />
    
                        </div>

                    <div className = "available__products">

                        <Row> <ProductCardAvailableProducts /> </Row>
    
                    </div>

                    </Col>
                    </Row>
            </Container>

        </div>
    );
}

export default ProductsPage;
