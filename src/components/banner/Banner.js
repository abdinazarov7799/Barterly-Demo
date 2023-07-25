import {Container} from "reactstrap";
import './Banner.css';

function Banner() {
    return(
      <>
            <Container>
                <div className="banner">
                    <h1 className='d-none d-md-block'>Welcome to Barterly - Revolutionizing the Way You Trade!</h1>
                    <h2 className='d-block d-md-none'>Welcome to Barterly - Revolutionizing the Way You Trade!</h2>
                    <p>
                        Our platform is designed to cater to your needs, whether you're a passionate collector, a fashion enthusiast, or simply looking to refresh
                        your belongings. With Barterly, you can unlock a world of possibilities, connecting with like-minded individuals worldwide to trade
                        items and expand your collection in ways you never thought possible.
                    </p>
                </div>
            </Container>
      </>
    );
}

export default Banner;