import React from "react"
import Seat from './Seat'
import '../css/Seat.css'

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

const SeatMatrix = () => {
	return (
		<div className="room-complex">
			<p>Please choose your seats!</p>
			<div className="container row room-layout">
				<div className="room-column-1">
					{GenerateSeats([1,2,3,4])}
					<span className="dot"></span>
					{GenerateSeats([5,6,7,8])}
				</div>
			</div>
		</div>
	)
}

export default SeatMatrix
