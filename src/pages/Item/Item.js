import {useState} from "react";
import {Image} from "antd";

function Item(props) {
    const [visible, setVisible] = useState(false);
    return(
        <>
            <Image.PreviewGroup
                preview={{
                    visible,
                    onVisibleChange: (vis) => setVisible(vis),
                }}
            >
                <Image src={props.img} />
                <Image src="https://telegra.ph/file/9f0904ef295ca1f62b0f9.png" />
            </Image.PreviewGroup>
        </>
    );
}
export default Item;