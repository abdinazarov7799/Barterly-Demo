import {Col, Collapse, Container, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {Dropdown, Space} from "antd";
import {DownOutlined, MenuOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

function NavbarMenu() {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const items = [
        {
            label: (
                <NavLink href="#">
                    1st menu item
                </NavLink>
            ),
            key: '0',
        },
        {
            label: (
                <NavLink href="#">
                    2nd menu item
                </NavLink>
            ),
            key: '1',
        },
    ];
    return (
        <>
            <section id="navbar">
                <Container>
                    <Navbar id="navbar"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 0,
                            margin: 0
                        }}>
                        <button onClick={toggleNavbar} className="nav-togle-btn d-md-none"><MenuOutlined/></button>
                        <Nav className="d-md-flex" id='nav-one'>
                            <NavItem>
                                <NavLink className="nav-text ps-0" href="#">Vacancies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="#">Help</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                    placement="topLeft"
                                >
                                    <NavLink className="nav-text" href="#" style={{width: "10%"}}>
                                        <Space>
                                            Catalogue
                                            <DownOutlined className="down-icon"/>
                                        </Space>
                                    </NavLink>
                                </Dropdown>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="#">About us</NavLink>
                            </NavItem>
                        </Nav>
                        <Col className="right-menu">
                                <NavLink className="nav-text" href="#">Sign Up or Sign in</NavLink>
                                <Link to='/addItems' style={{margin: 0}}>
                                    <button>
                                        Place Your Ad
                                    </button>
                                </Link>
                        </Col>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar style={{justifyContent: "center", alignItems: "center"}}>
                                <NavItem>
                                    <NavLink className="nav-text" href="#">Vacancies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-text" href="#">Help</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        placement="bottomLeft"
                                    >
                                        <NavLink className="nav-text" href="#" style={{width: "10%"}}>
                                            <Space>
                                                Catalogue
                                                <DownOutlined className="down-icon"/>
                                            </Space>
                                        </NavLink>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-text" href="#">About us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </Navbar>
                </Container>
            </section>
        </>
    )
}

export default NavbarMenu;