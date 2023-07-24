import NavbarMenu from "../../Layouts/header/Navbar/Navbar";
import Header from "../../Layouts/header/Header";
import Footer from "../../Layouts/footer/Footer";
import {Col, Container, Row} from "reactstrap";

function Item(props) {
    return(
        <>
            <NavbarMenu />
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col >

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