import classes from './footer.module.css';
import {Container} from "reactstrap";

function Footer() {
    return(
        <>
            <div className={classes.Footer}>
                <Container className={classes.FooterContainer}>
                    <p className={classes.FooterText}>© 2023 Barterly LLC. All rights are reserved</p>
                    <p className={classes.FooterText}>This is demo version of Barterly v0.99</p>
                </Container>
            </div>
        </>
    )
}
export default Footer;