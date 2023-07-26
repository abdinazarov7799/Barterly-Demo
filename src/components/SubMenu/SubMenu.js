import {SettingOutlined} from '@ant-design/icons';
import { Menu } from 'antd';


const initialCategoryData = [
    {
        label: 'Motors',
        icon: <SettingOutlined />
    },
    {
        label: "Real Estate",
        icon: <SettingOutlined />
    },
    {
        label: "Electronics",
        icon: <SettingOutlined />
    },
    {
        label: "Spare Parts",
        icon: <SettingOutlined />
    },
    {
        label: "Ready business and equipment",
        icon: <SettingOutlined />
    },
    {
        label: "Hobbyand rest",
        icon: <SettingOutlined />
    },
    {
        label: "Furnitures for home",
        icon: <SettingOutlined />
    },
    {
        label: "Clothes, shoes, accessories",
        icon: <SettingOutlined />
    },
    {
        label: "Animals",
        icon: <SettingOutlined />
    }
]

const SubMenu = () => {

    return (
        <Menu
            mode="inline"
            items={initialCategoryData}
        />
    );
};
export default SubMenu;