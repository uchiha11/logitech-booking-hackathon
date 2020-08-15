import React, { useState } from "react";
import "./css/App.css";

import RoomSelector from "./components/RoomSelector";
import SeatAvailability from "./components/SeatAvailability";
import SeatMatrix from "./components/SeatMatrix";
import SeatCalculator from "./components/SeatCalculator";

import RoomContext from "./contexts/RoomContext";

const App = () => {
	const [rooms, EditRooms] = useState({
		roomNames: {
			"IT side": 1,
			"Meeting room": 2,
			"Developer side": 3,
		},
		timeSlots: {
			"9 am - 9:30am": 1,
			"10 am - 10:30am": 2,
			"10:30 am - 11am": 3,
		},
		totalSeats: 0,
		maximumSeats: 8,
		seatNumbers: [],
		bookedSeats: [],
	});

	return (
		<div className="main">
			<RoomContext.Provider value={{ rooms, changeState: EditRooms }}>
				<div>
					<div className="title">
						{" "}
						WELCOME TO LOGITECH{" "}
					</div>
					<div className="desc">
						{" "}
						This is a seat reservation system{" "}
					</div>
				</div>
				<RoomSelector />
				<SeatMatrix />
				<SeatAvailability />
				<SeatCalculator />
			</RoomContext.Provider>
		</div>
	);
};

export default App;
