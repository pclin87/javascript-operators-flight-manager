function Flights() {
    var calculateNumberOfFlights = (passengers, capacity) =>{
        var flights 
        if(passengers < 0 || (!Number.isInteger(Number(passengers)))) throw new Error("The number of passengers must be a positive integer value")
        if(capacity <0 || (!Number.isInteger(Number(capacity)))) throw new Error("The capacity of the flight must be a positive integer value")
        if(passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = Math.floor(passengers/capacity + 1)
        }
        return flights
    }
    return {calculateNumberOfFlights}
}

module.exports = Flights()