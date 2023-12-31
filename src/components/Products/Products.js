import {Card, CardBody, CardSubtitle, CardTitle} from "reactstrap";
import {Badge} from 'antd';
import './Products.css';
import classes from "./Products.module.css";
import {useEffect, useState} from "react";
import React from "react";



function Product(props) {
    const [costType, setCostType] = useState('');
    const [costTittleType, setTitleCostType] = useState('');
    const [costTypeName, setCostTypeName] = useState('Estimated cost:');
    useEffect(() => {
        if (props.cost_type === 'upgrade'){
            setTitleCostType(classes.ProductTitleGreen);
            setCostType(classes.ProductCostGreen);
            setCostTypeName('User can pay above');
        }
        if (props.cost_type === "above"){
            setCostTypeName('User needs above');
            setTitleCostType(classes.ProductTitleOrange);
            setCostType(classes.ProductCostOrange);
        }
        if(props.cost_type === "straight"){
            setTitleCostType(classes.ProductTitleBlue);
            setCostType(classes.ProductCostBlue);
            setCostTypeName('Straight');
        }
    },[])
    return(
        <>
                <Card
                    style={{
                        width: '100%',
                        position: "relative",
                        border: "none"
                    }}
                    key={props.key}
                >
                <span id="card-type">
                    {props.category}
                </span>
                    <div id="products"
                         style={{backgroundImage: `url("${props.img}")`}}>
                    </div>
                    <CardBody className="px-0 py-2">
                        <div className="d-none d-md-block">
                            <Badge.Ribbon text={props.cost_type === 'straight' ? "est: ~" + Number(props.cost).toLocaleString("en-US") + " AED" : "~" + Number(props.second_cost).toLocaleString("en-US") + " AED"}
                                          style={{
                                              color: "#ffffff",
                                              right: "0px",
                                              top: "1px"}}
                                          className={costType}
                            >
                            </Badge.Ribbon>
                        </div>
                        <div className="d-block d-md-none">
                            <Badge.Ribbon text={props.cost_type === 'straight' ? "est: ~" + Number(props.cost).toLocaleString("en-US") + " AED" :"~" + Number(props.second_cost).toLocaleString("en-US") + " AED"}
                                          style={{
                                              color: "#ffffff",
                                              left: "0px",
                                              right: '0',
                                              top: "23px",
                                              fontSize: '16px',
                                              textAlign: "center"
                                          }}
                                          className={costType}
                            >
                            </Badge.Ribbon>
                        </div>
                        <CardTitle tag="h6" className={costTittleType}>
                            {costTypeName}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 mt-4 mt-md-0 pt-2 pt-md-0"
                            tag="h6"
                        >
                            {props.name}
                        </CardSubtitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Year: {props.year} • KM: {Number(props.milage).toLocaleString("en-US")}
                        </CardSubtitle>
                    </CardBody>
                </Card>
        </>
    );
}
export default Product;