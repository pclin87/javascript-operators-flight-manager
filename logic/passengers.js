function Passengers() {
    checkFlightCapacity = (capacity, passengersArray) => {
        passengersNumber = 0
        passengersArray.forEach((number) => passengersNumber += number)
        if (passengersNumber > capacity) {
            throw new Error("Flight capacity (" + capacity + ") exceeded. You have " + passengersNumber + " passengers.");
        } return passengersNumber;
    }
    distributeAllSeatsToAllPassengers = (vip, regular, numberFlights, businessSeats, economySeats) =>{

        let vipPassengersWithBusinessSeats = 0, 
        vipPassengersWithEconomySeats = 0, 
        regularPassengersWithBusinessSeats = 0, 
        regularPassengersWithEconomySeats = 0;
        businessSeatsPerFlight = numberFlights * businessSeats
        economeySeatsPerFlight = numberFlights * economySeats

        if (vip < businessSeatsPerFlight){
            businessSeatsLeft = businessSeatsPerFlight - vip
            vipPassengersWithBusinessSeats = vip
            economySeatsLeft = economeySeatsPerFlight 
            vip = 0 
        } else if (vip > businessSeatsPerFlight){
            vipsLeft = vip - businessSeatsPerFlight
            vipPassengersWithBusinessSeats = businessSeatsPerFlight
            businessSeatsLeft = 0
        } else if (vipsLeft && vipsLeft < economeySeatsPerFlight) {
            vipPassengersWithEconomySeats = vipsLeft
            economySeatsLeft = economeySeatsPerFlight - vipsLeft
        } else if (vipsLeft && vipsLeft > economeySeatsPerFlight) { 
            throw new Error ("Flight capacity exceeded")
        } else if (businessSeatsLeft && regular < businessSeatsLeft) {
            regularPassengersWithBusinessSeats = regular
            regular = 0
        } else if (businessSeatsLeft && regular > businessSeatsLeft) {
            regularPassengersWithBusinessSeats = businessSeatsLeft
            regularLeft = regular - businessSeatsLeft
            businessSeatsLeft = 0
        } else if (economySeatsLeft && regularLeft < economySeatsLeft) {
            regularPassengersWithEconomySeats = regularLeft
            regularLeft = 0
        } else if (economySeatsLeft && regularLeft > economySeatsLeft) {
            throw new Error ("Flight capacity exceeded")
        } return {
            vipWithBusinessSeats: vipPassengersWithBusinessSeats,
            vipWithEconomySeats: vipPassengersWithEconomySeats,
            regularWithBusinessSeats: regularPassengersWithBusinessSeats,
            regualrWithEconomySeats: regularPassengersWithEconomySeats,
        }
    }
    // updateConfigoration = (configuration, seatsPerFlight) => {
    //     let passengersWithSeats = 0
    //     while(configuration.passenger > 0) {
    //         if(configuration.seats > 0) {
    //             if(configuration.passenger >= configuration.seats){
    //                 if(configuration.seats > configuration.seatsPerFlight){
    //                     configuration.passenger -+ seatsPerFlight
    //                 }
    //             }
    //         }
    //     }

    // }
    return {checkFlightCapacity}
}
module.exports = Passengers();
