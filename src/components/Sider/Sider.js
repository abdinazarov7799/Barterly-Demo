import Logo from "../../assets/logos/Слой 1.svg";
import classes from "./Sider.module.css";


function CustomSider() {
    return(
        <>
            <div className={classes.Sider}>
                <img src={Logo} width={180}/>
            </div>
        </>
    );
}
export default CustomSider;