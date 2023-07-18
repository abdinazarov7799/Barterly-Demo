import React, {Component} from 'react';
import NavbarMenu from "../components/header/Navbar/Navbar";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Categories from "../components/categories/Categories";
import HeroMenu from "../components/hero-menu/HeroMenu";

class App extends Component {
    render() {
        return (
            <>
                <NavbarMenu />
                <Header />
                <Banner />
                <Categories />
                <HeroMenu />
            </>
        );
    }
}

export default App;