import Logo from "../../assets/logos/Слой 1.svg";
import classes from "./Sider.module.css";


function Sider() {
    return(
        <>
            <div className={classes.Sider}>
                <img src={Logo} width={180}/>
            </div>
        </>
    );
}
export default Sider