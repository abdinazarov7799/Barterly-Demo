import NavbarMenu from "../../components/header/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {Col, Container, Row} from "reactstrap";
import classes from "./addItem.module.css";
import {Cascader, Upload, message, Button} from "antd";
import React, {useState} from 'react';
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";


const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
    },
];
const onChange = (value) => {
    console.log(value);
};

function AddItems() {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <>
            <NavbarMenu/>
            <Header/>
            <Container>
                <Row>
                    <h1 className={classes.Title}>Place your Advertisement </h1>
                </Row>
                <Row>
                    <p>Thank you for choosing our platform to advertise your item! To create a compelling ad, please
                        fill in the necessary information below. Your ad will reach a wide audience
                        and increase your chances of finding the right buyer.</p>
                </Row>
                <Row className="flex-wrap justify-content-between">
                    <Col md={4}>
                        <p className={classes.InputTitle}><span>*</span> Select the category of item</p>
                        <Cascader className="w-100" options={options} onChange={onChange} placeholder="Cars"/>
                        <p className={classes.InputText}>Please select category of item</p>
                    </Col>
                    <Col md={7}>
                        <p className={classes.InputTitle}><span>*</span> Please add short description of your item:
                            (e.g.
                            Honda Accord 2013 for bartering)</p>
                        <Cascader className="w-100" options={options} onChange={onChange}
                                  placeholder="Honda Accord 2013 for bartering"/>
                        <p className={classes.InputText}>Please add short description of your item</p>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <p className={classes.InputTitle}><span>*</span> Input the year of your car</p>
                                <Cascader className="w-100" options={options} onChange={onChange} placeholder="2011"/>
                                <p className={classes.InputText}>Please enter the year of your car</p>
                            </Col>
                            <Col md={6}>
                                <p className={classes.InputTitle}><span>*</span> Input the milage of your car (km)</p>
                                <Cascader className="w-100" options={options} onChange={onChange}
                                          placeholder="198,000"/>
                                <p className={classes.InputText}>Please enter the milage of your car</p>
                            </Col>
                            <Col md={6}>
                                <p className={classes.InputTitle}><span>*</span> Select the car model</p>
                                <Cascader className="w-100" options={options} onChange={onChange}
                                          placeholder="Select car brand first"/>
                                <p className={classes.InputText}>Please select category of item</p>
                            </Col>
                            <Col md={6}>
                                <p className={classes.InputTitle}><span>*</span> Select the car brand</p>
                                <Cascader className="w-100" options={options} onChange={onChange}
                                          placeholder="Chevrolet"/>
                                <p className={classes.InputText}>Please select car brand</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="d-flex align-items-center justify-content-between">
                                <Col md={2}>
                                    <p className={classes.InputTitle}><span>*</span> Upload photo:</p>
                                </Col>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader w-50"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? (
                                        <img
                                            src={imageUrl}
                                            alt="avatar"
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    ) : (
                                        uploadButton
                                    )}
                                </Upload>
                                <p className={classes.InputText}>
                                    Recommanded resolution is 1920x1080 with file size less than 2MB, keep visual
                                    elements centered
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <p className={classes.InputTitle}><span>*</span> Please add detailed description of your item:
                        </p>
                        <TextArea
                            // value={value}
                            // onChange={(e) => setValue(e.target.value)}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tempor nunc,
                                 eleifend pharetra nisl. Fusce faucibus efficitur turpis, quis vehicula massa dictum at.
                                Proin molestie metus non lectus semper, quis consequat elit tempus. Curabitur ac velit
                                 lacus. Duis lacinia diam est, et semper lectus suscipit quis. Sed elementum erat
                                massa, sit amet feugiat tortor vulputate id. Praesent auctor et massa a rutrum. Nam
                                congue malesuada urna, ut tristique tellus hendrerit a. Mauris in dui orci. Vestibulum
                                sagittis justo id pellentesque tempor. Vestibulum eu commodo est."
                            autoSize={{
                                minRows: 11,
                                maxRows: 11,
                            }}
                        />
                    </Col>
                </Row>
                <Row className="flex-wrap justify-content-between">
                    <Col md={6} className="d-flex align-items-center">
                        <Col md={8}>
                            <p className={classes.InputText} style={{margin: 0}}>In this section you can estimate the value of your item. Remember that the estimated value
                                can be incorrect</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <button className={classes.CoastButton}>Estimate the value!</button>
                        </Col>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>


            <Footer/>
        </>
    );
}

export default AddItems;