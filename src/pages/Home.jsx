import React from "react";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import Restaulist from "../components/Restaulist";

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