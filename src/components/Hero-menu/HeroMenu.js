import React, {useEffect, useState} from "react";
import {Menu, Spin} from "antd";
import {Col, Container, Row} from "reactstrap";
import "./HeroMenu.css";
import Product from "../Products/Products";
import getCategories from "../fetch/getCategories";
import getItems from "../fetch/getItems";
import {Link} from "react-router-dom";
import FilterItem from "../FilterItem/FilterItem";
import GradualBarter from "../GradualBarterBanner/GradualBarterBanner";
import {isArray, isEmpty} from "lodash";



function HeroMenu() {
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


    return(
        <>
            <Container className="mt-4">
                <GradualBarter />
                <FilterItem />
                <section className="mt-4 mb-2">
                    <Row className="flex-wrap py-md-2">
                        {!loading ? (
                            isEmpty(products) && (
                                isArray(products) && (
                                    products.map((product) => (
                                        <Col xs={6} sm={6} md={4} lg={3} className="px-md-1 px-xl-2">
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
                                    ))
                                )
                            )
                        ) : <Spin />
                        }
                    </Row>
                </section>
            </Container>
        </>
    );
}

export default HeroMenu;
