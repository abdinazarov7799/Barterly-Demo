import {Col, Container, Row} from "reactstrap";
import Cart from "./cart";
import motors from "../../assets/images/categories/motors.png";
import RealEstate from "../../assets/images/categories/RealEstate.png";
import Electronics from "../../assets/images/categories/Electronics.png";
import SpareParts from "../../assets/images/categories/SpareParts.png";
import business from "../../assets/images/categories/business.png";
import hobby from "../../assets/images/categories/hobby.png";
import furniture from "../../assets/images/categories/furniture.png";
import clothes from "../../assets/images/categories/clothes.png";
import animals from "../../assets/images/categories/animals.png";
import {useEffect, useState} from "react";
import getCategories from "../fetchData/getCategories";

const initialCategoryData = [
    {
        title: 'Motors',
        img: motors,
        id: ''
    },
    {
        title: "Real Estate",
        img: RealEstate,
        id: ''
    },
    {
        title: "Electronics",
        img: Electronics,
        id: ''
    },
    {
        title: "Spare Parts",
        img: SpareParts,
        id: ''
    },
    {
        title: "Ready business and equipment",
        img: business,
        id: ''
    },
    {
        title: "Hobbyand rest",
        img: hobby,
        id: ''
    },
    {
        title: "Furnitures for home",
        img: furniture,
        id: ''
    },
    {
        title: "Clothes, shoes, accessories",
        img: clothes,
        id: ''
    },
    {
        title: "Animals",
        img: animals,
        id: ''
    }
]
function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        getCategories().then(data => setCategories(data))
    },[])
    return(
        <>
            <Container>
                <Row className="mt-3">
                    {
                        initialCategoryData.map((el) => (
                                <Col className="my-2">
                                    <Cart title={el.title} category_id={1}  img={el.img}/>
                                </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Categories;