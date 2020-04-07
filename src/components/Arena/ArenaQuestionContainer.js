import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { QuestionAnswer } from "../Section";

import bgImg from "../Overview/images/game_background_1.png";

const styles = {
    root: {
		height: "100%",
		width: "100%",
		backgroundImage: `url(${bgImg})`,
		backgroundSize: "cover",
		backgroundAttachment: "fixed"
	},
	container: {
		paddingTop: "20px",
		paddingBottom: "20px"
	}
};

export default function() {

	const { qID } = useParams();
	const history = useHistory();
	const [questionSet, setQuestion] = useState({
		id: qID,
		answer: 0,
		question: "",
		options: [],
	});
	const [title, setTitle] = useState("Loading...");
	const [subtitle, setSubtitle] = useState("");

	const firstResponseCallback = (id, isAns) => {
		const medals = isAns ? 1 : 0;
		//Add user to list of users who attempted the question and set medals for this user in DB
	};
	const correctResponseCallback = (id) => {
		alert("Good job, you answered question " + id + " correctly!");
		history.push("/arena"); //Note: medals are aready set through firstResponseCallback
	};

    useEffect(() => {
		fetchQuestion();
    }, []);
    
    const fetchQuestion = () => {
		axios
			.get(process.env.REACT_APP_API + "/russ/GetSelectArenaQuestions/?questionID=" + qID) //Missing end of link
			.then(res => {
				const data = res.data; //Verify if data format is correct, otherwise format before setQuestion()
				console.log(data);
				const qnSet = {
					id: qID,
					answer: data.answer,
					question: data.question,
					options: data.options
				};
				const t = "Question created by user " + data.creator;
				const sub = "Total attempts: " + data.attempts;
				setQuestion(qnSet);
				setTitle(t);
				setSubtitle(sub);
			});
	};

    return (
        <div style={styles.root}>
            <Container style={styles.container}>
                <QuestionAnswer qnSet={questionSet} title={title} subtitle={subtitle} onFirstResponse={firstResponseCallback} onCorrectResponse={correctResponseCallback}/>
            </Container>
        </div>
    );
}