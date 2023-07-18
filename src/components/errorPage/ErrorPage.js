import NavbarMenu from "../header/Navbar/Navbar";
import Footer from "../footer/Footer";
import Header from "../header/Header";


function ErrorPage() {
    return(
      <>
        <NavbarMenu />
        <Header />
          <h1 className="text-center mt-5">404</h1>
          <h1 className="text-center mt-5">Page not fount</h1>
        <Footer />
      </>
    );
}
export default ErrorPage;