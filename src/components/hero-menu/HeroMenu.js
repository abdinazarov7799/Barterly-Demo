import React, {useEffect, useState} from "react";
import {Menu, Spin} from "antd";
import {Col, Container, Row} from "reactstrap";
import "./HeroMenu.css";
import Product from "../Products/Products";
import getCategories from "../fetchData/getCategories";
import getItems from "../fetchData/getItems";
import {Link} from "react-router-dom";



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
    const items = [
        {
            label: 'Recommendations',
            key: 'recommendations',
            count: 98,
        },
        {
            label: 'Newest',
            key: 'newest',
            count: 99
        },
        {
            label: 'Nearby',
            key: 'nearby',
            count: 56
        },
    ];
    const [current, setCurrent] = useState('recommendations');

    return(
        <>
            <Container className="mt-4">

                <Menu onClick={(e) => {
                    setCurrent(e.key);
                }} selectedKeys={[current]} mode="horizontal">
                    {items.map((item) => (
                        <Menu.Item key={item.key}>
                            <span className="me-2">{item.label}</span>
                            <span id="menu-badge">{item.count}</span>
                        </Menu.Item>
                    ))}
                </Menu>
                <section className="mt-4 mb-2">
                    <Row className="flex-wrap py-md-2">
                        {!loading ?
                            products.map((product) => (
                                    <Col xs={12} sm={6} md={4} lg={3} className="px-md-1 px-xl-2">
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
                                                description={product.description}
                                                cost_type={product.cost_type}
                                                second_cost={product.second_cost}
                                            />
                                        </Link>
                                    </Col>
                                )) : <Spin />
                        }
                    </Row>
                </section>
            </Container>
        </>
    );
}

export default HeroMenu;