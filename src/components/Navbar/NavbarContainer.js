import React from "react";
import Container from "react-bootstrap/Container"; // Container from react-bootstrap
import Navbar from "react-bootstrap/Navbar"; // Navbar from react-bootstrap

export default function(props) {
	return (
		<Navbar expand="lg" variant="dark" bg="dark">
			<Container>
				<Navbar.Brand href="/">{props.title}</Navbar.Brand>
			</Container>
		</Navbar>
	);
}
