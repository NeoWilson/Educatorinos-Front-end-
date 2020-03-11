import React from "react";
import { Avatar } from "../Common";

import { Card } from "react-bootstrap";
import { Badges } from "../Common";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const imagesize = {
	width: "200px"
};

const styles = {
	card: {
		width: "500px"
	}
};

export default function(props) {
	const { playerName = "Player Name", matric = "U171711G" } = props;

	return (
		<Card className="m-4 p-4" style={styles.card}>
			<Row>
				<Col className="d-flex flex-column justify-content-center">
					<Avatar className="mb-4" size={imagesize}></Avatar>
					<Button className="w-30 mx-auto" variant="outline-primary">
						edit
					</Button>
				</Col>
				<Col className="d-flex flex-column align-items-center justify-content-center">
					<div class="w-100 d-flex justify-content-center my-2">
						{playerName}
					</div>
					<div class="w-100 d-flex justify-content-center my-2">{matric}</div>
					<div class="w-100 d-flex justify-content-center my-2">
						<Badges stars={0} medals={10} />
					</div>
				</Col>
			</Row>
		</Card>
	);
}
