import React from "react";
import Hero from "../components/comHomePage/Hero";
import Searchbar from "../components/comHomePage/Searchbar";
import Restaulist from "../components/comHomePage/Restaulist";

const Home = () => {
    return (
        <>
        <Hero/>
        <Searchbar/>
        <Restaulist/>
        </>

    );
}

export default Home;