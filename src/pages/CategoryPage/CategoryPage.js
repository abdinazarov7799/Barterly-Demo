import {Link, useParams} from "react-router-dom";
import Header from "../../Layouts/Header/Header";
import NavbarMenu from "../../Layouts/Navbar/Navbar";
import Footer from "../../Layouts/Footer/Footer";
import {Col, Container, Row} from "reactstrap";
import Product from "../../components/Products/Products";
import {Spin} from "antd";
import React, {useEffect, useState} from "react";
import getItems from "../../components/fetch/getItems";
import getCategories from "../../components/fetch/getCategories";
import classes from "./CategoryPage.module.css";
import FilterItem from "../../components/FilterItem/FilterItem";
import SubMenu from "../../components/SubMenu/SubMenu";

function CategoryPage() {
    let {category_id} = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getItems().then(data => {
            setProducts(data);
            setLoading(false)
        });
        getCategories().then(data => setCategories(data));
    }, []);
    return (
        <>
            <NavbarMenu />
            <Header />
                <Container>
                    <h1 className={classes.Title}>
                        Category : {categories.map((cat) => {
                        if (category_id === cat.id) {
                            return cat.category
                        }})}
                    </h1>
                    <p className="mt-3">
                        Welcome to our Car category page dedicated to barter deals! Here, you can explore a diverse selection of cars available for bartering. If you're interested in exchanging
                        goods or services for a car, you've come to the right place.
                    </p>
                    <Row className="mb-3">
                        <Col>
                            <FilterItem />
                        </Col>
                    </Row>
                        <Row>
                            <Col xs={12} md={9}>
                                <Row className="flex-wrap py-md-2">
                                    {!loading ?
                                        products.map((product) => (
                                            <Col xs={6} sm={6} md={6} lg={4} className="px-md-1 px-xl-2">
                                                <Link to={`/product/${product.id}`}>
                                                    <Product
                                                        category_id={product.category_id}
                                                        key={product.id}
                                                        category={categories.map((cat) => {
                                                            if (product.category_id === cat.id){
                                                                return  cat.category
                                                            }
                                                        })}
                                                        img={product.image}
                                                        cost={product.cost}
                                                        name={product.name}
                                                        year={product.year}
                                                        milage={product.milage}
                                                        cost_type={product.cost_type}
                                                        second_cost={product.second_cost}
                                                    />
                                                </Link>
                                            </Col>
                                        )) : <Spin size={'large'} className="mt-5"/>
                                    }
                                </Row>
                            </Col>
                            <Col md={3} className="mt-3 mt-md-0">
                                <SubMenu />
                            </Col>
                        </Row>
                </Container>
            <Footer />
        </>
    );
}
export default CategoryPage;