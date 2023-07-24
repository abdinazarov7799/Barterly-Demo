import NavbarMenu from "../../Layouts/header/Navbar/Navbar";
import Header from "../../Layouts/header/Header";
import Footer from "../../Layouts/footer/Footer";
import {Container} from "reactstrap";
import {Form, Select} from "antd";
import {Option} from "antd/es/mentions";

function Item(props) {
    return(
        <>
            <NavbarMenu />
            <Header />
                <Container>
                    <Form.Item
                        name="select-multiple"
                        label="Select[multiple]"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your favourite colors!',
                                type: 'array',
                            },
                        ]}
                    >
                        <Select mode="multiple"
                                placeholder="Please select favourite colors"
                                onChange={(e) => {
                                    console.log(e)
                                }}
                        >
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </Form.Item>
                </Container>

            <Footer />
        </>
    );
}
export default Item;