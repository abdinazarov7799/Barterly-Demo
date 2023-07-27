import React, {Component} from 'react';
import NavbarMenu from "../../Layouts/Navbar/Navbar";
import Header from "../../Layouts/Header/Header";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import HeroMenu from "../../components/Hero-menu/HeroMenu";
import Footer from "../../Layouts/Footer/Footer";

class App extends Component {
    render() {
        return (
            <>
                <NavbarMenu />
                <Header />
                <Banner />
                <Categories />
                <HeroMenu />
                <Footer />
            </>
        );
    }
}

export default App;