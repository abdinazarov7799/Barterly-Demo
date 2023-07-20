import NavbarMenu from "../../components/header/Navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {Col, Container, Row} from "reactstrap";
import classes from "./successfulPage.module.css";
import Star from '../../assets/images/star.svg';
import {Button} from "antd";
import {Link} from "react-router-dom";
import React from "react";

function SuccessPage() {
    return (
        <>
            <NavbarMenu/>
            <Header/>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h1 className={classes.Title}>Your advertisement is placed successfully! </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={classes.Text}>Congratulations! Your advertisement has been successfully placed on our platform. You're now
                            one step closer to connecting with potential buyers and selling your item.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <img width={256} height={256} src={Star}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Link to='/addItems'>
                            <Button
                                type={"primary"}
                                className={classes.BackBtn}
                            >
                                Go back
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>


            <Footer/>
        </>
    );
}

export default SuccessPage;