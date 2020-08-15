import React, { useContext } from "react";
import RoomContext from "../contexts/RoomContext";
import Button from "@material-ui/core/Button";
// import emailjs from "emailjs-com";
import Speech from 'speak-tts'

const SeatCalculator = () => {
	const { rooms } = useContext(RoomContext);
	const context = useContext(RoomContext);
	const handleClick = () => {
		context.changeState({
			...rooms,
			bookedSeats: rooms.seatNumbers,
		});
		console.log(rooms)
		const speech = new Speech() // will throw an exception if not browser supported
		speech.init({
			'volume': 1,
			'lang': 'en-us',
			'rate': 1,
			'pitch': 1,
			'voice':'Google US English Female',
			'splitSentences': true,
		})
let user = JSON.parse(localStorage.getItem("testObject"))
		let roomSelected = JSON.parse(localStorage.getItem("selectedRooms"))
		let timeSelected = JSON.parse(localStorage.getItem("selectedTime"))
		console.log(rooms.seatNumbers, user.email, roomSelected, timeSelected)
		speech.speak({
			text: `successfully booked seats numbers ${rooms.seatNumbers} " " by ${user.email} in ${roomSelected} during the period ${timeSelected}`,
		}).then(() => {
			console.log("Success !")
		}).catch(e => {
			console.error("An error occurred :", e)
		})
	};

	return (
		<div>
			<p>Available seats {rooms.maximumSeats - rooms.bookedSeats.length}</p>
			<Button variant="contained" onClick={handleClick} color="primary" style={{background:"rgba(71,111,117,1)"}} className="confirmButton" >
				Confirm
			</Button>
		</div>

	);
};

export default SeatCalculator;
