import NavbarMenu from "../../Layouts/header/Navbar/Navbar";
import Header from "../../Layouts/header/Header";
import Footer from "../../Layouts/footer/Footer";
import {Col, Container, Row} from "reactstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getItem from "../../components/fetchData/getItem";

function Item() {
    let { id } = useParams();
    const [itemData, setItemData] = useState();
    useEffect(()=>{
        getItem(id).then(data => setItemData(data))
    },[])
    console.log(itemData)
    return(
        <>
            <NavbarMenu />
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col >
                            <img src={itemData.image} />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default Item;