import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import './cart.css'
import {Link} from "react-router-dom";

function Cart(props) {
    return(
        <>
            <Link to={`/categories/${props.category_id}`}>
                <Card style={{height: "85px"}}>
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
            </Link>
        </>
    );
}

export default Cart;