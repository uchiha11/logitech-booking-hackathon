import React, { useContext } from "react"
import RoomContext from "../contexts/RoomContext"
import "../css/Seat.css"

const Header = () => {

	const { rooms } = useContext(RoomContext)
	const roomData = useContext(RoomContext)

	const GenerateOptions = () => {
		const roomObject = rooms.roomNames
		return Object.keys(roomObject).map((room, key) => {
			return <option value={room} key={key}>{room}</option>
		})
	}
	const GenerateTimes = () => {
		const roomObject = rooms.timeSlots
		return Object.keys(roomObject).map((room, key) => {
			return <option value={room} key={key}>{room}</option>
		})
	}

	const roomSwitchHandler = (e) => {
		let selectedRoom = rooms.roomNames[e.target.value]
		roomData.changeState({...rooms}, selectedRoom);
		let finalRooms = (selectedRoom ==1)?'IT- side' : (selectedRoom ==2)?'meeting rooms':'developer side';
		localStorage.setItem('selectedRooms', JSON.stringify(finalRooms));
	}

	const timeHandler = (e) => {
		let time = rooms.timeSlots[e.target.value]
		let finalTime = (time ==1)?' from 9 am to 9:30am' : (time ==2)?'from 10 am to 10:30am':'from 10:30 am to 11am';
		localStorage.setItem('selectedTime', JSON.stringify(finalTime));
	}

	return (
		<div className="dropdown-container">
		<div className="container" style={{ textAlign: "center" }}>
			<select className="room-selector" onChange={roomSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
		<div className="container" style={{ textAlign: "center" }}>
<select className="time-selector" onChange={timeHandler}>
		{GenerateTimes()}
</select>
</div>
	</div>
	)
}

export default Header
