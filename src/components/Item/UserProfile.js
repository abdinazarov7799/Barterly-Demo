import {Col} from "reactstrap";
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
                <img src={UserIcon} width={100} height={100}/>
                <h2 className={classes.Title}>AMIR AUTO LLC</h2>
                <p className={classes.SubTitle}>Entity, On Barterly from 2023</p>
                <p className={classes.Price}>{costType}{props.cost_type !== 'straight' ? <span
                    className={costClass}>{Number(props.second_cost).toLocaleString("en-US") + " AED"}</span> : null}</p>
                <Col md={12}>
                    <Button className={classes.MakeBtn} type={"ghost"} onClick={showModal}>Make an offer</Button>
                    <Button className={classes.Btn} type={"ghost"}>Go to 58 user ads</Button>
                    <Button className={classes.Btn} type={"ghost"}>Subscribe to this user</Button>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                    </Modal>
                </Col>
            </Col>
        </>
    );
}

export default UserProfile;