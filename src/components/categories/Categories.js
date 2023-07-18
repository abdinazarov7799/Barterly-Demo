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

function Categories() {
    return(
        <>
            <Container>
                <Row className="mt-3">
                    <Col className="my-2">
                        <Cart title={"Motors"} img={motors}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Real Estate"} img={RealEstate}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Electronics"} img={Electronics}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Spare Parts"} img={SpareParts}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Ready business and equipment"} img={business}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2">
                        <Cart title={"Hobbyand rest"} img={hobby}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Furnitures for home"} img={furniture}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Clothes, shoes, accessories"} img={clothes}/>
                    </Col>
                    <Col className="my-2">
                        <Cart title={"Animals"} img={animals}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Categories;