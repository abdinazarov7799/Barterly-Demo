import NavbarMenu from "../../Layouts/Navbar/Navbar";
import Footer from "../../Layouts/Footer/Footer";
import Header from "../../Layouts/Header/Header";
import {Col, Container, Row} from "reactstrap";
import classes from "./addItem.module.css";
import {Upload, message, Button, Input, Form, Select, Spin, notification} from "antd";
import React, {useEffect, useState} from 'react';
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import getCategories from "../../components/fetch/getCategories";
import getCarModel from "../../components/fetch/getCarModel";
import getCarBrands from "../../components/fetch/getCarBrands";
import {Option} from "antd/es/mentions";
import {useNavigate} from "react-router";
import SocialMedia from '../../assets/icons/social-media.png';
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    preferred_categories: [],
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
        label: 'Straight GradualBarterBanner',
    }
];


function AddItems() {
    const [form] = Form.useForm();
    const [next, setNext] = useState(false);
    const [success, setSuccess] = useState(false)
    const [categories, setCategories] = useState([]);
    const [carModels, setCarModels] = useState([]);
    const [carBrands, setCarBrands] = useState([]);
    const [formData, setFormData] = useState(initialFormData)
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [textVisible, setTextVisible] = useState(true)
    const [coastButton, setCoastButton] = useState('Estimate the value!')
    const [coast, setCoast] = useState(
        Number(Math.round((Math.floor(Math.random() * (30000 - 20000)) + 20000) / 100) * 100));
    const [whatYouWant, setWhatYouWant] = useState([])
    const [selectedBrandId, setSelectedBrandId] = useState();
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: 'Error',
            description:
                'You can only upload a car image. Please try again',
        });
    };
    useEffect(() => {
        getCategories().then(data => setCategories(data));
        getCarModel(selectedBrandId).then(data => setCarModels(data));
        getCarBrands().then(data => setCarBrands(data));
    }, [formData]);
    const onChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }
        ));
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


            const formData = new FormData();
            formData.append('image', info.file.originFileObj);

            fetch(process.env.REACT_APP_FORM_POST_API, {
                method: 'POST',
                credentials: 'include',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 'failed'){
                            openNotificationWithIcon('error');
                    }else {
                        setFormData((prevState) => ({
                            ...prevState,
                            image: data.url,
                        }));
                        setImageUrl(data.url);
                    }
                })
                .catch((error) => {
                    console.error('Error uploading image:', error);
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
                ['cost']: `${coast}`
            }
        ));
    }
    const navigate = useNavigate();
    if (success){
        navigate('/successeful-page')
    }
    const onFinish = () => {
        if (whatYouWant === 'straight'){
            setFormData((prevState) => ({
                    ...prevState,
                    second_cost: null
                }
            ));
        }
        if (next){
            fetch(process.env.REACT_APP_FORM_POST_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:  JSON.stringify(formData) })
                .then(response => response.json())
                .then(data => {
                    console.log('Server answer:', data);
                    setSuccess(data.success);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }else {
            setNext(true);
        }

    }

    return (
        <>
            {contextHolder}
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
                <Form form={form} onFinish={onFinish} layout="vertical">
                    {!next ?
                        <>
                            <Row className="flex-wrap justify-content-between">
                                <Col md={4}>
                                    <Form.Item
                                        name="category"
                                        label="Select the category of item"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select category'
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="Cars"
                                            allowClear
                                            onChange={(value) => {
                                                setFormData((prevState) => ({
                                                        ...prevState,
                                                        ['category_id']: value
                                                    }
                                                ));
                                            }}
                                        >
                                            {categories.length !== 0 ?
                                                categories.map((el) => {
                                                    return <Option value={el.id}>{el.category}</Option>
                                                }) : null
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col md={7}>

                                    <Form.Item
                                        name="name"
                                        label="Please add short description of your item:
                                (e.g.
                                Honda Accord 2013 for bartering)"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please add short description of your item'
                                            },
                                        ]}
                                    >
                                        <Input className="w-100"
                                               onChange={onChange}
                                               placeholder="Honda Accord 2013 for bartering"
                                               name="name"
                                               value={formData.name}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Item
                                                name="year"
                                                label="Input the year of your car"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please select car year'
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    placeholder="2011"
                                                    allowClear
                                                    onChange={(value) => {
                                                        setFormData((prevState) => ({
                                                            ...prevState,
                                                            ['year']: value
                                                        }));
                                                    }}
                                                >
                                                    {itemYear.length !== 0 ?
                                                        itemYear.map((el) => {
                                                            return <Option value={el.value}>{el.label}</Option>
                                                        }) : null
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Item
                                                name="milage"
                                                label="Input the milage of your car (km)"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please enter the milage of your car'
                                                    },
                                                ]}
                                            >
                                                <Input className="w-100"
                                                       onChange={onChange}
                                                       placeholder="198,000"
                                                       type="number"
                                                       name="milage"
                                                       value={formData.milage}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Item
                                                name="carBrand"
                                                label="Select the car brand"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please select car brand'
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    placeholder="Chevrolet"
                                                    allowClear
                                                    onChange={(value) => {
                                                        setSelectedBrandId(value);
                                                        setFormData((prevState) => ({
                                                            ...prevState,
                                                            ['car_brand_id']: value,
                                                        }));
                                                    }}
                                                >
                                                    {carBrands.length !== 0 ?
                                                        carBrands.map((el) => {
                                                            return <Option value={el.id}>{el.brand}</Option>
                                                        }) : null
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Item
                                                name="CarModel"
                                                label="Select the car model"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please select car model'
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    placeholder="Chevrolet"
                                                    allowClear
                                                    onChange={(value) => {
                                                        setFormData((prevState) => ({
                                                            ...prevState,
                                                            ['car_model']: value
                                                        }));
                                                    }}
                                                >
                                                    {carModels.length !== 0 ?
                                                        carModels.map((el) => {
                                                            return <Option value={el.id}>{el.model}</Option>
                                                        }) : null
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} className="d-flex align-items-center justify-content-between">
                                            <Col md={2}>
                                                <p className={classes.InputTitle}><span>*</span> Upload photo:</p>
                                            </Col>

                                            <Form.Item
                                                name="image"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please upload image'
                                                    },
                                                ]}
                                            >
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
                                            </Form.Item>
                                            <Col md={6}>
                                                <p className={classes.InputText}>
                                                    Recommanded resolution is 1920x1080 with file size less than 2MB, keep visual
                                                    elements centered
                                                </p>
                                            </Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <Form.Item
                                        name="description"
                                        label="Please add detailed description of your item:"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please add detailed description of your item!'
                                            },
                                        ]}
                                    >
                                        <TextArea
                                            onChange={onChange}
                                            name="description"
                                            value={formData.description}
                                            placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, atque
                        consequatur doloribus ducimus magnam provident qui repellat similique vel? Amet aperiam dolorem
                        dolorum excepturi, expedita illum labore non officia quas, reprehenderit totam ullam, vitae.
                        Animi consequatur dignissimos, exercitationem incidunt labore libero natus nisi officiis optio
                        ratione repellendus sapiente velit?"
                                            autoSize={{
                                                minRows: 11,
                                                maxRows: 11,
                                            }}
                                        />
                                    </Form.Item>
                                </Col>

                            </Row>
                            <Row className="flex-wrap justify-content-between mt-2 mt-md-4 align-items-center">
                                <Col md={12} lg={6} className="d-flex align-items-center align-self-baseline justify-content-between">
                                    <Col md={8} className='pe-5'>
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
                                                    name='costBtn'
                                                    className={classes.CoastButton}
                                                    onClick={coastBtn}>
                                                {coastButton}
                                                {coastButton === 'Loading' ?
                                                    <LoadingOutlined
                                                        style={{
                                                            fontSize: 24,
                                                        }}
                                                        spin
                                                    /> : null
                                                }
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
                                                                    ['cost']: `${coast}`
                                                                }
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
                                                                    ['cost']: `${coast}`
                                                                }
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
                                            <Form.Item
                                                name="whatYouWant"
                                                label="Select what you want"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please select what do you want: Compensation in GradualBarterBanner or upgrade item?'
                                                    },
                                                ]}
                                            >
                                                <Select
                                                    placeholder="Select"
                                                    allowClear
                                                    onChange={(value) => {
                                                        setWhatYouWant(value);
                                                        setFormData((prevState) => ({
                                                            ...prevState,
                                                            ['cost_type']: value
                                                        }));
                                                    }}
                                                >
                                                    {selectWant.length !== 0 ?
                                                        selectWant.map((el) => {
                                                            return <Option value={el.value}>{el.label}</Option>
                                                        }) : null
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        {whatYouWant === 'upgrade' ? <Col md={6}>
                                            <Form.Item
                                                name="second_cost"
                                                label="How much can you pay for upgrade?"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please enter the amount of money in AED'
                                                    },
                                                ]}
                                            >
                                                <Input className="w-100"
                                                       onChange={onChange}
                                                       placeholder="198,000"
                                                       type="number"
                                                       name="second_cost"
                                                       value={formData.second_cost}
                                                />
                                            </Form.Item>
                                        </Col> : null}

                                        {whatYouWant === 'above' ? <Col md={6}>
                                            <Form.Item
                                                name="second_cost"
                                                label="How much do you want above item?"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please enter the above of money in AED'
                                                    },
                                                ]}
                                            >
                                                <Input className="w-100"
                                                       onChange={onChange}
                                                       placeholder="198,000"
                                                       type="number"
                                                       name="second_cost"
                                                       value={formData.second_cost}
                                                       required
                                                />
                                            </Form.Item>
                                        </Col> : null}
                                    </Row>
                                </Col>
                            </Row>
                        </>
                        : <>
                            <Row>
                                <Col className="d-flex justify-content-center mb-1">
                                    <LazyLoadImage
                                        effect="opacity"
                                        width={256}
                                        height={256}
                                        src={SocialMedia}
                                    />
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center">
                                <Col xs={12} md={9} lg={6}>
                                    <Form.Item
                                        name="select-multiple"
                                        label="Select preferred categories for barter your item. You can choose 2 or more categories also:"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select preferred categories!',
                                                type: 'array',
                                            },
                                        ]}
                                    >
                                        <Select mode="multiple"
                                                placeholder="Please select preferred categories!"
                                                onChange={(e) => {
                                                    setFormData((prevState) => ({
                                                            ...prevState,
                                                            preferred_categories: e
                                                        }
                                                    ));
                                                }}
                                        >
                                            {categories.map((el) => <Option value={el.id}>{el.category}</Option>)}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </>
                    }
                    <Row>
                        <Col md={12} className="d-flex justify-content-center mb-3 mb-md-0">
                            {!next ? <button type={"submit"} className={classes.AddItemBtn}>Next</button>:
                                <button type={"submit"} className={classes.AddItemBtn}>Place Your Ad</button>
                            }
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Footer/>
        </>
    );
}

export default AddItems;