import NavbarMenu from "../../Layouts/header/Navbar/Navbar";
import Header from "../../Layouts/header/Header";
import Footer from "../../Layouts/footer/Footer";
import {Col, Container, Row} from "reactstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getItem from "../../components/fetchData/getItem";
import classes from "./Item.module.css";
import UserProfile from "../../components/Item/UserProfile";
import {Button, Image} from "antd";
import getCategories from "../../components/fetchData/getCategories";
import {HeartOutlined, RetweetOutlined} from "@ant-design/icons";
import Logo from '../../assets/logos/Слой 1.svg';
import './item.css'
import Sider from "../../Layouts/Sider/Sider";


function Item() {
    let { id } = useParams();
    const [itemData, setItemData] = useState({});
    const [categories, setCategories] = useState([]);
    const { image } = itemData;
    const { preferred_categories } = itemData;
    useEffect(()=>{
        getItem(id).then(data => setItemData(data))
        getCategories().then(data => setCategories(data));
    },[])
    console.log(itemData)

    return(
        <>
            <NavbarMenu />
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col md={10}>
                        <Row>
                            <Col md={8}>
                                <h1 className={classes.Title}>{itemData.name}</h1>
                                <div className={classes.Image} style={{backgroundImage: `url("${image}")`}}>
                                    <span className={classes.CategoryType}>
                                    {categories.map((cat) => {
                                        if (itemData.category_id === cat.id){
                                            return  cat.category
                                        }
                                    })}
                                   </span>
                                </div>
                                <Row className="mt-2 mb-3">
                                    <Col md={6}>
                                        <Button type={"ghost"} className={classes.Buttons}>
                                            <HeartOutlined />Add to your favorites
                                        </Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button type={"ghost"} className={classes.Buttons}>
                                            <RetweetOutlined />Compare
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 className={classes.Title}>Preferred categories for barter</h1>
                                    {/*<p>{preferred_categories.map((cat) => {*/}
                                    {/*    if (categories.id === cat){*/}
                                    {/*        return  cat.category*/}
                                    {/*    }*/}
                                    {/*})}</p>*/}
                                    <p>Cars, Electronics, Properties</p>
                                </Row>
                                <Row>
                                    <h1 className={classes.Title}>Specifications</h1>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <p>Release year: {itemData.year}</p>
                                        <p>Generation: VI restyling (2017-2023)</p>
                                        <p>Mileage: {itemData.milage} km</p>
                                        <p>Mileage: {itemData.milage}</p>
                                        <p>Mileage history: 2 records in the report</p>
                                        <p>PTS: Original</p>
                                        <p>Title owners: 1</p>
                                        <p>Condition: not broken</p>
                                        <p>Modification: 2.3 AT (317 hp)</p>
                                        <p>Engine size: 2.3 l</p>
                                    </Col>
                                    <Col md={6}>
                                        <p>Engine type: Gasoline</p>
                                        <p>Drive: Rear</p>
                                        <p>Body type: Convertible</p>
                                        <p>Color: Purple</p>
                                        <p>Steering wheel: left</p>
                                        <p>VIN or body number: 1FAT*************</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <h1 className={classes.Title}>Description of item</h1>
                                    <p>{itemData.description}</p>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <h1 className={classes.Title}>Est.: <span style={{color: '#0A6FB7'}}>~{Number(itemData.cost).toLocaleString("en-US") + " AED"}</span></h1>
                                <UserProfile cost_type={itemData.cost_type} second_cost={itemData.second_cost}/>
                            </Col>
                        </Row>
                        </Col>
                        <Col md={2} >
                            <Sider />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Item;