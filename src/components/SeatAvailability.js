import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (<div>
		<div className="row">
			Empty: <Seat seatColor="seat-grey" />
			Selected : <Seat seatColor="seat-green" />
		</div>
		<div className="row">
		Booked: <Seat seatColor="seat-red" />
		</div>
		</div>

	)
}

export default SeatAvailability
