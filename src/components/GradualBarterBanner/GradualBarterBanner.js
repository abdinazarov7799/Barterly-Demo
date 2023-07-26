import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import classes from "./GradualBarterBanner.module.css";
import {Col} from "reactstrap";
const { Title, Paragraph } = Typography;

const GradualBarter = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerStyles = {
        backgroundColor: '#0a6fb7',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const imageStyles = {
        width: '256px',
        height: '256px',
        order: isMobile ? '-1' : '0'
    };

    return (
        <div style={containerStyles}>
            <div>
                <Title level={2} style={{ color: '#fff' }}>Discover the Power of Gradual Barter</Title>
                <Title level={4} style={{ color: '#fff' }}>Start small, dream big. Trade up your items gradually, from a book to a house!</Title>
                <Paragraph style={{ color: '#fff' }}>
                    Gradual Barter allows you to start with small items and gradually trade up to larger, more valuable items.
                    It's a unique feature that sets Barterly apart from other trading platforms. Here's how it works:
                    <ul>
                        <li>Start with a small item that you want to trade.</li>
                        <li>Find a user who is interested in your item and has a slightly more valuable item to trade.</li>
                        <li>Make the trade and repeat the process until you've traded up to your desired item.</li>
                    </ul>
                </Paragraph>
                    <Col xs={12} md={10}>
                        <Button type="primary" className={classes.Btn} size="large">Start Your Gradual Barter Journey Now</Button>
                    </Col>
            </div>
            <img src="https://tes.mediasolutions.uz/gradual-barter.svg" alt="Gradual Barter" style={imageStyles} />
        </div>
    );
};

export default GradualBarter;