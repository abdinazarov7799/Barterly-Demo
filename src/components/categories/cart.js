import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import './cart.css'

function Cart(props) {
    return(
        <>
            <Card style={{
                height: "85px"
            }}>
                <CardImg
                    id="categories-img"
                    alt="Card image cap"
                    src={props.img}
                />
                <CardImgOverlay>
                    <CardTitle tag="h6" className="w-75" >
                        {props.title}
                    </CardTitle>
                </CardImgOverlay>
            </Card>
        </>
    );
}

export default Cart;