import NavbarMenu from "../../Layouts/Navbar/Navbar";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import {Col, Container, Row} from "reactstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getItem from "../../components/fetch/getItem";
import classes from "./Item.module.css";
import UserProfile from "../../components/UserProfile/UserProfile";
import {Button} from "antd";
import getCategories from "../../components/fetch/getCategories";
import {HeartFilled, HeartOutlined, RetweetOutlined} from "@ant-design/icons";
import './item.css'
import CustomSider from "../../components/Sider/Sider";
import Loading from "../../components/Loading/Loading";
import useFavoritesCount from "../../Store/useFavorites";


function Item() {
    let {id} = useParams();
    const { increment , decrement } = useFavoritesCount();
    const [isClicked, setIsClicked] = useState(false);
    const [itemData, setItemData] = useState({});
    const [categories, setCategories] = useState([]);
    const {image} = itemData;
    const [isLoading, setIsLoading] = useState(true);
    // const { preferred_categories } = itemData;
    // let preferred_category = preferred_categories.split(',');
    useEffect(() => {
        const fetchData = async () => {
            const item = await getItem(id);
            const cats = await getCategories();
            setItemData(item);
            setCategories(cats);
            setIsLoading(false);
        };
        fetchData();
    }, [id]);
    // useEffect(() =>{
    //     preferred_categories.map((cat) => {
    //         categories.map((el) => {
    //             if (el.id === cat){
    //                 preferred_category.push(el.category);
    //             }
    //         })
    //
    //     })
    // },[])
    if (isLoading) {
        return <Loading />; // Render loading component while data is being fetched
    }
    return (
        <>
            <NavbarMenu/>
            <Header/>
            <main>
                <Container>
                    <Row>
                        <Col md={12} lg={10}>
                            <Row>
                                <Col md={8}>
                                    <span className="d-none d-md-block"><h1
                                        className={classes.Title}>{itemData.name}</h1></span>
                                    <div className={classes.Image} style={{backgroundImage: `url("${image}")`}}>
                                    <span className={classes.CategoryType}>
                                    {categories.map((cat) => {
                                        if (itemData.category_id === cat.id) {
                                            return cat.category
                                        }
                                    })}
                                   </span>
                                    </div>
                                    <div className='d-block d-md-none mt-3'>
                                        <p className="fs-4">Estimated price: <span
                                            style={{color: '#0A6FB7'}}
                                            className={classes.Title}
                                        >~{Number(itemData.cost).toLocaleString("en-US") + " AED"}</span>
                                        </p>
                                    </div>
                                    <div className="d-block d-md-none mb-3"><h1
                                        className={classes.Title}>{itemData.name}</h1></div>
                                    <Row className="mt-2 mb-3">
                                        <Col xs={6} className="mb-2 mb-md-0">
                                            <Button type={"ghost"} className={classes.Buttons} onClick={() => {!isClicked ? increment() : decrement(); setIsClicked(!isClicked)}}>
                                                {!isClicked ? <><HeartOutlined/>Add to your favorites</> :
                                                    <><HeartFilled style={{color: "#d90a0a"}}/>Add to your favorites</>
                                                }
                                            </Button>
                                        </Col>
                                        <Col xs={6}>
                                            <Button type={"ghost"} className={classes.Buttons}>
                                                <RetweetOutlined/>Compare
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <h1 className={classes.Title}>Preferred categories for barter</h1>
                                        <p>Cars</p>
                                    </Row>
                                    <Row>
                                        <Col className="d-block d-md-none mb-3">
                                            <UserProfile cost_type={itemData.cost_type} second_cost={itemData.second_cost}/>
                                        </Col>
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
                                    <Row className="mb-3">
                                        <h1 className={classes.Title}>Description of item</h1>
                                        <p>{itemData.description}</p>
                                    </Row>
                                </Col>
                                <Col md={4} className='d-none d-md-block'>
                                    <div>
                                        <h1 className={classes.Title}>Est.: <span
                                            style={{color: '#0A6FB7'}}>~{Number(itemData.cost).toLocaleString("en-US") + " AED"}</span>
                                        </h1>
                                    </div>
                                    <UserProfile cost_type={itemData.cost_type} second_cost={itemData.second_cost}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="d-none d-lg-block">
                            <CustomSider/>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer/>
        </>
    );
}

export default Item;