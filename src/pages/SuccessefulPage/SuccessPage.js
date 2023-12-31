import NavbarMenu from "../../Layouts/Navbar/Navbar";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import {Col, Container, Row} from "reactstrap";
import classes from "./successfulPage.module.css";
import Star from '../../assets/icons/star.svg';
import {Button} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

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
                        <LazyLoadImage
                            effect="opacity"
                            width={256}
                            height={256}
                            src={Star}
                        />
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col md={4}>
                        <Link to='/'>
                            <Button
                                type={"primary"}
                                className={classes.BackBtn}
                            >
                                Go to home
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