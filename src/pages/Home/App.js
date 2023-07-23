import React, {Component} from 'react';
import NavbarMenu from "../../Layouts/header/Navbar/Navbar";
import Header from "../../Layouts/header/Header";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import HeroMenu from "../../components/hero-menu/HeroMenu";
import Footer from "../../Layouts/footer/Footer";

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