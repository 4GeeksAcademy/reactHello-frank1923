import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./navbar";
import JumboTron from "./jumboTron";
import Card from "./card";
import Footer from "./footer"
//create your first component
const Home = () => {
	return (
		<>
		<NavBar />
		<div className="container">
		<JumboTron />
		<div className= "row text-center mb-5">
			<div className="col-3 aling-self-start"><Card/></div>
			<div className="col-3 aling-self-center"><Card/></div>
			<div className="col-3 aling-self-end"><Card/></div>
			<div className="col-3 aling-self-end"><Card/></div>
			</div>
			</div>
			<Footer/>
	</>
	)
}

export default Home;
