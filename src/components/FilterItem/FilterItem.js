import {Menu} from "antd";
import React from "react";
import {useState} from "react";


function FilterItem() {
    const items = [
        {
            label: 'Recommendations',
            key: 'recommendations',
            count: 98,
        },
        {
            label: 'Newest',
            key: 'newest',
            count: 99
        },
        {
            label: 'Nearby',
            key: 'nearby',
            count: 56
        },
    ];
    const [current, setCurrent] = useState('recommendations');
    return (
        <>
            <Menu onClick={(e) => {
                setCurrent(e.key);
            }} selectedKeys={[current]} mode="horizontal">
                {items.map((item) => (
                    <Menu.Item key={item.key}>
                        <span className="me-2">{item.label}</span>
                        <span id="menu-badge">{item.count}</span>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );
}
export default FilterItem;