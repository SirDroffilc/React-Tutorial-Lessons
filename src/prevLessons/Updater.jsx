import {useState} from "react"

function Updater() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar() {
        const carYearInputEl = document.getElementById("carYearInput") 
        const carMakeInputEl = document.getElementById("carMakeInput") 
        const carModelInputEl = document.getElementById("carModelInput") 

        const newCar = {
            year: carYearInputEl.value,
            make: carMakeInputEl.value,
            model: carModelInputEl.value
        }

        setCars(prevCars => [...prevCars, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index) {
        setCars(prevCars => prevCars.filter((_, i) => i !== index))
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }

    return (
        <div>
            <h1>List of Car Objects</h1>
            <ul>
                {cars.map((car, i) => 
                    <li key={i}> 
                        <p>{car.year} {car.make} {car.model}</p> 
                        <button onClick={() => handleRemoveCar(i)}>Remove</button>
                    </li>
                
                )}
            </ul>

            <input id="carYearInput" onChange={handleYearChange} value={carYear} type="number" /> <br />
            <input id="carMakeInput" onChange={handleMakeChange} value={carMake} placeholder="Enter car make" type="text" /> <br />
            <input id="carModelInput" onChange={handleModelChange} value={carModel} placeholder="Enter car model" type="text" /> <br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
     )
}

export default Updater