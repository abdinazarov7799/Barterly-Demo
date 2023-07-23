import NavbarMenu from "../../Layouts/header/Navbar/Navbar";
import Footer from "../../Layouts/footer/Footer";
import Header from "../../Layouts/header/Header";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";


function ErrorPage() {
    return(
      <>
        <NavbarMenu />
        <Header />
          <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Link to='/'><Button type="primary" style={{background: '#0A6FB7'}}>Back Home</Button></Link>}
          />
        <Footer />
      </>
    );
}
export default ErrorPage;