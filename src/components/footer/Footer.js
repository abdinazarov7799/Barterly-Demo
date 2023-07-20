import classes from './footer.module.css';
import {Col, Container} from "reactstrap";

function Footer() {
    return(
        <>
            <div className={classes.Footer}>
                <Container className={classes.FooterContainer}>
                    <Col sm={12} md={6} className="text-md-start">
                        <p className={classes.FooterText}>© 2023 Barterly LLC. All rights are reserved</p>
                    </Col>
                    <Col sm={12} md={6} className="text-md-end">
                        <p className={classes.FooterText}>This is demo version of Barterly v0.99</p>
                    </Col>
                </Container>
            </div>
        </>
    )
}
export default Footer;