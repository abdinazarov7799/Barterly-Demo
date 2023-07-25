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
                                    <Image style={{opacity: 0}} src={image} />
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
                                </Row>
                            </Col>
                            <Col md={4}>
                                <h1 className={classes.Title}>Est.: <span style={{color: '#0A6FB7'}}>~{Number(itemData.cost).toLocaleString("en-US") + " AED"}</span></h1>
                                <UserProfile />
                            </Col>
                        </Row>
                        </Col>
                        <Col md={2} id={classes.Sider}>
                            <h1 className="text-white text-center">Barterly</h1>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Item;