import {Col, Row} from "reactstrap";
import UserIcon from '../../assets/images/icons/user-icon.svg';
import classes from "./UserProfile.module.css";
import {Button, Modal} from "antd";
import {useEffect, useState} from "react";


function UserProfile(props) {
    const [costType, setCostType] = useState('');
    const [costClass, setCostClass] = useState();
    useEffect(() => {
        if (props.cost_type === 'above') {
            setCostType('Needs: ')
            setCostClass(classes.Orange);
        }
        if (props.cost_type === 'upgrade') {
            setCostType('Can pay: ')
            setCostClass(classes.Green);
        }
        if (props.cost_type === 'straight') {
            setCostType('Straight barter')
            setCostClass(classes.Blue);
        }
    })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Col className={classes.Profile}>
                <Col xs={12} className="d-flex flex-wrap align-items-center mb-2 mb-md-0">
                    <Col xs={4} md={12} className="d-flex justify-content-start justify-content-md-center">
                        <img src={UserIcon} width={100} height={100}/>
                    </Col>
                    <Col xs={8} md={12} className="text-center">
                        <span className="d-none d-md-block"><h2 className={classes.Title}>AMIR AUTO LLC</h2></span>
                        <h1 className='d-block d-md-none'>AMIR AUTO LLC</h1>
                        <span className="d-none d-md-block"><p className={classes.SubTitle}>Entity, On Barterly from 2023</p></span>
                        <p className='d-block d-md-none'>Entity, On Barterly from 2023</p>
                    </Col>
                </Col>

               <Col>
                   <p className={classes.Price}>{costType}{props.cost_type !== 'straight' ? <span
                       className={costClass}>{Number(props.second_cost).toLocaleString("en-US") + " AED"}</span> : null}</p>
               </Col>
                <Col xs={12} md={12}>
                    <Col xs={12}>
                        <Button className={classes.MakeBtn} type={"ghost"} onClick={showModal}>Make an offer</Button>
                    </Col>
                    <Row>
                        <Col xs={6} md={12}>
                            <Button className={classes.Btn} type={"ghost"}>Go to 58 user ads</Button>
                        </Col>
                        <Col xs={6} md={12}>
                            <Button className={classes.Btn} type={"ghost"}>Subscribe to this user</Button>
                        </Col>
                    </Row>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                    </Modal>
                </Col>
            </Col>
        </>
    );
}

export default UserProfile;