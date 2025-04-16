import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
	<div>
		<div className="text-center">
			<Navbar/>
		</div>
		<div className="container">
			<Jumbotron/>
			<div className="row  mg-4">
				<div className="col-md-3">
					<Card/>
				</div>
				<div className="col-md-3">
					<Card/>
				</div>
				<div className="col-md-3">
					<Card/>
				</div>
				<div className="col-md-3">
					<Card/>
				</div>
			</div>

		</div>
		

	
    </div>
		
		
	);
};

export default Home;