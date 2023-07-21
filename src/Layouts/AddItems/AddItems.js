import NavbarMenu from "../../components/header/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {Col, Container, Row} from "reactstrap";
import classes from "./addItem.module.css";
import {Cascader, Upload, message, Button, Input} from "antd";
import React, {useEffect, useState} from 'react';
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import './addItem.css';
import {Link} from "react-router-dom";
import getCategories from "../../components/fetchData/getCategories";
import getCarModel from "../../components/fetchData/getCarModel";
import getCarBrands from "../../components/fetchData/getCarBrands";

const initialFormData = {
    category_id: '',
    car_brand_id: '',
    car_model: '',
    year: '',
    milage: '',
    image: '',
    name: '',
    cost: '',
    second_cost: '',
    cost_type: '',
    description: '',
}


const itemYear = [];
for (let i = 2023; i >= 2000; i--) {
    itemYear.push(
        {
            value: `${i}`,
            label: `${i}`,
        })
}
const selectWant = [
    {
        value: 'upgrade',
        label: 'Upgrade my item',
    },
    {
        value: 'above',
        label: 'Money above item',
    },
    {
        value: 'straight',
        label: 'Straight barter',
    }
];

function AddItems() {
    const category = []
    const carModel = []
    const carBrand = []
    const [categories, setCategories] =useState([]);
    const [carModels, setCarModels] =useState([]);
    const [carBrands, setCarBrands] =useState([]);
    const [formData, setFormData] = useState(initialFormData)
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [textVisible, setTextVisible] = useState(true)
    const [coastButton, setCoastButton] = useState('Estimate the value!')
    const [coast, setCoast] = useState(
        Number(Math.round((Math.floor(Math.random()* (30000 - 20000)) + 20000) / 100) * 100));
    const [whatYouWant, setWhatYouWant] = useState([])
    const [selectedBrandId , setSelectedBrandId] = useState();

    useEffect(() => {
        getCategories().then(data => setCategories(data));
        getCarModel(selectedBrandId).then(data => setCarModels(data));
        getCarBrands().then(data => setCarBrands(data));
    }, [formData]);
    categories.map((el) => {
        if (categories.length !== category.length){
            category.push(
                {
                    value: `${el.id}`,
                    label: `${el.category}`
                }
            )
        }
    })
    carModels.map((el) => {
        if (carModels.length !== carModel.length){
            carModel.push(
                {
                    value: `${el.brand_id}`,
                    label: `${el.model}`
                }
            )
        }
    })
    carBrands.map((el) => {
        if (carBrands.length !== carBrand.length){
            carBrand.push(
                {
                    value: `${el.id}`,
                    label: `${el.brand}`
                }
            )
        }
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
                ...prevState,
                [name]: value}
        ));
    };

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
            setLoading(false);
            setImageUrl(info.file.response.url); // Set the imageUrl state with the URL received from the server
            setFormData((prevState) => ({
                ...prevState,
                image: info.file.response.url, // Set the 'image' field in the formData state to the URL
            }));
            console.log(info.file)
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
    const coastBtn = (e) => {
        if (coastButton === 'Estimate the value!') {
            setCoastButton('Loading')
        }
        setTimeout(() => {
            setTextVisible(false);
            e.target.setAttribute('style', "background: #007505")
            if (e.target.innerHTML === "Loading") {
                e.target.parentElement.setAttribute('style', "background: #007505")
            }

            setCoastButton(`${coast.toLocaleString("en-US")} AED`)
        }, 2000);
        setFormData((prevState) => ({
                ...prevState,
                ['cost']: `${coast}`}
        ));
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData)
    }
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
                <form onSubmit={SubmitHandler}>
                    <Row className="flex-wrap justify-content-between">
                        <Col md={4}>
                            <p className={classes.InputTitle}><span>*</span> Select the category of item</p>
                            <Cascader className="w-100"
                                      options={category}
                                      onChange={(value) =>{
                                          setFormData((prevState) => ({
                                              ...prevState,
                                              ['category_id']: value[0]}
                                          ));
                                      }}
                                      placeholder="Cars"
                            />
                            <p className={classes.InputText}>Please select category of item</p>
                        </Col>
                        <Col md={7}>
                            <p className={classes.InputTitle}><span>*</span> Please add short description of your item:
                                (e.g.
                                Honda Accord 2013 for bartering)</p>
                            <Input className="w-100"
                                   onChange={onChange}
                                   placeholder="Honda Accord 2013 for bartering"
                                   name="name"
                                   value={formData.name}
                            />
                            <p className={classes.InputText}>Please add short description of your item</p>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> Input the year of your car</p>
                                    <Cascader className="w-100"
                                              options={itemYear}
                                              onChange={(value) =>{
                                                  setFormData((prevState) => ({
                                                      ...prevState,
                                                      ['year']: value[0]
                                                  }));
                                              }}
                                              placeholder="2011"
                                              name="year"
                                              value={formData.year}
                                    />
                                    <p className={classes.InputText}>Please enter the year of your car</p>
                                </Col>
                                <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> Input the milage of your car (km)
                                    </p>
                                    <Input className="w-100"
                                           onChange={onChange}
                                           placeholder="198,000"
                                           type="number"
                                           name="milage"
                                           value={formData.milage}
                                    />
                                    <p className={classes.InputText}>Please enter the milage of your car</p>
                                </Col>
                                <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> Select the car brand</p>
                                    <Cascader className="w-100"
                                              options={carBrand}
                                              onChange={(value) =>{
                                                  setSelectedBrandId(value[0]);
                                                  setFormData((prevState) => ({
                                                      ...prevState,
                                                      ['car_brand_id']: value[0]
                                                  }));
                                              }}
                                              placeholder="Chevrolet"
                                              name="carBrand"
                                    />
                                    <p className={classes.InputText}>Please select car brand</p>
                                </Col>
                                <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> Select the car model</p>
                                    <Cascader className="w-100"
                                              options={carModel}
                                              onChange={(value) =>{
                                                  setFormData((prevState) => ({
                                                      ...prevState,
                                                      ['car_model']: value[0]
                                                  }));
                                              }}
                                              placeholder="Select car brand first"
                                              name="CarModel"
                                              value={formData.car_model}
                                    />
                                    <p className={classes.InputText}>Please select category of item</p>
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
                                        action="https://tes.mediasolutions.uz/api.php"
                                        withCredentials={true}
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
                            <p className={classes.InputTitle}><span>*</span> Please add detailed description of your
                                item:
                            </p>
                            <TextArea
                                onChange={onChange}
                                name="description"
                                value={formData.description}
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
                    <Row className="flex-wrap justify-content-between mt-2 mt-md-4 align-items-center">
                        <Col md={12} lg={6} className="d-flex align-items-center align-self-baseline">
                            <Col md={8}>
                                <Col className={textVisible ? classes.DisplayBlock : classes.DisplayNone}>
                                    <p className={classes.InputText} style={{margin: 0}}>In this section you can
                                        estimate the
                                        value of your item. Remember that the estimated value
                                        can be incorrect</p>
                                </Col>
                                <Col className={!textVisible ? classes.DisplayBlock : classes.DisplayNone}>
                                    <p className={classes.InputTitle} style={{color: '#007505'}}>This is estimated value
                                        of your item by Barterly:</p>
                                    <p className={classes.InputText} style={{margin: 0}}>In this section you can add or
                                        subtract the value of your
                                        item if it is not correct. You can increase this value max. to 20%.</p>
                                </Col>

                            </Col>
                            <Col md={4} className="d-flex justify-content-end">
                                <Button type="primary"
                                        className={classes.CoastButton}
                                        onClick={coastBtn}>
                                    {coastButton}
                                </Button>
                                {!textVisible ?
                                    <Col className="ms-1">
                                        <Button type='default'
                                                className={classes.CountBtn}
                                                onClick={() => {
                                                    setCoast(coast + 200);
                                                    setCoastButton(`${coast.toLocaleString("en-US")} AED`)
                                                    setFormData((prevState) => ({
                                                            ...prevState,
                                                            ['cost']: `${coast}`}
                                                    ));
                                                }}
                                        >
                                            +
                                        </Button>
                                        <Button type='default'
                                                className={classes.CountBtn}
                                                onClick={() => {
                                                    setCoast(coast - 200);
                                                    setCoastButton(`${coast.toLocaleString("en-US")} AED`)
                                                    setFormData((prevState) => ({
                                                            ...prevState,
                                                            ['cost']: `${coast}`}
                                                    ));
                                                }}
                                        >
                                            -
                                        </Button>
                                    </Col> : null}
                            </Col>
                        </Col>
                        <Col md={12} lg={6}>
                            <Row className="flex-wrap mt-3 mt-lg-0">
                                <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> Select what you want</p>
                                    <Cascader className="w-100 h-auto"
                                              options={selectWant}
                                              onChange={(value) => {
                                                  setWhatYouWant(value);
                                                  setFormData((prevState) => ({
                                                      ...prevState,
                                                      ['cost_type']: value[0]
                                                  }));
                                              }}
                                              value={formData.cost_type}
                                              name="whatYouWant"
                                              placeholder="Select"/>
                                    <p className={classes.InputText}>Please select what do you want: Compensation in
                                        barter or upgrade item?</p>
                                </Col>
                                {whatYouWant[0] === 'upgrade' ? <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> How much can you pay for upgrade?
                                    </p>
                                    <Input className="w-100"
                                           onChange={onChange}
                                           placeholder="198,000"
                                           type="number"
                                           name="second_cost"
                                           value={formData.second_cost}
                                    />
                                    <p className={classes.InputText}>Please enter the amount of money in AED</p>
                                </Col> : null}

                                {whatYouWant[0] === 'above' ? <Col md={6}>
                                    <p className={classes.InputTitle}><span>*</span> How much do you want above item?
                                    </p>
                                    <Input className="w-100"
                                           onChange={onChange}
                                           placeholder="198,000"
                                           type="number"
                                           name="second_cost"
                                           value={formData.second_cost}
                                    />
                                    <p className={classes.InputText}>Please enter the amount of money in AED</p>
                                </Col> : null}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="d-flex justify-content-center mb-3 mb-md-0">
                            {/*<Link to="/addItem/successeful-page">*/}
                            <button type={"submit"} className={classes.AddItemBtn}>Place Your Ad</button>
                            {/*</Link>*/}
                        </Col>
                    </Row>
                </form>
            </Container>

            <Footer/>
        </>
    );
}

export default AddItems;