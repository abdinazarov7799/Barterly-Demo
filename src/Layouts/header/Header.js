import './Header.css';
import {Col, Container, Row} from "reactstrap";
import {Badge, Dropdown, Menu, Space} from "antd";
import {DownOutlined, HeartOutlined, PushpinOutlined} from "@ant-design/icons";
import LogoDefoult from '../../assets/logos/logo-barterly@3000px 1.svg';
import React, {useEffect, useState} from "react";
import getCategories from "../../components/fetch/getCategories";
import {Link} from "react-router-dom";
import useFavoritesCount from "../../Store/useFavoritesCount";


function Header() {
    const [categories, setCategories] = useState([]);
    const {count} = useFavoritesCount();
    useEffect(() => {
        getCategories().then(data => setCategories(data));
    }, []);
    return (
        <>
            <section id="header">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col xs={6} md={6} lg={2} className="me-md-4">
                            <Link to='/'>
                                <img src={LogoDefoult} alt="logo" style={{width: "177px", height: "50px"}}/>
                            </Link>
                        </Col>

                        <Col xs={6} md={3} className="d-flex justify-content-end align-content-center d-lg-none">
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginRight: "10px"
                            }}>
                                <HeartOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                <p style={{fontSize: "14px", margin: 0}}>Favorites</p>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginLeft: "5px"
                            }}>
                                <PushpinOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                <p style={{fontSize: "14px", margin: 0, width: "87px"}}>Select Region</p>
                            </div>
                        </Col>
                        <Col sm={4} md={3} lg={2} className="">
                            <Dropdown overlay={
                                <Menu>
                                    {categories.map(item => {
                                        return (<Menu.Item key={item.id}>{item.category}</Menu.Item>)
                                    })}
                                </Menu>
                            }>
                                <button className="btn float-start" id="selectBtn">
                                    <Space>
                                        Select category
                                        <DownOutlined/>
                                    </Space>
                                </button>
                            </Dropdown>
                        </Col>
                        <Col sm={8} md={9} lg={5} xl={6} className="row input-col pe-sm-3">
                            <div className="input-group mt-lg-0 pe-sm-2" id="header-input">
                                <input type="text" className="form-control"
                                       placeholder="Enter search text here (e.g. Chevrolet Camaro SS)"/>
                                <button className="btn input-group-append">Search</button>
                            </div>
                        </Col>
                        <Col lg={2} id="icons"
                             className="d-flex justify-content-between align-content-center d-sm-none d-lg-flex">
                            <Badge count={count} style={{right: "14px"}}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                    <HeartOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                    <p style={{fontSize: "14px", margin: 0}}>Favorites</p>
                            </div>
                            </Badge>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                marginLeft: "5px"
                            }}>
                                <PushpinOutlined style={{fontSize: "25px", marginBottom: "5px"}}/>
                                <p style={{fontSize: "14px", margin: 0, width: "87px"}}>Select Region</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Header;
