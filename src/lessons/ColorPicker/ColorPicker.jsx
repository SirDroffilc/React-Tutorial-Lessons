import {useState} from "react"
import "./ColorPicker.css"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(e) {
        setColor(e.target.value)
    }

    function getTextColor(bgColor) {
        // Remove the "#" and parse the hex values
        const r = parseInt(bgColor.substr(1,2), 16);
        const g = parseInt(bgColor.substr(3,2), 16);
        const b = parseInt(bgColor.substr(5,2), 16);

        // Calculate the brightness (standard formula)
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness > 128 ? "black" : "white"; 
        // Bright background = black text, dark background = white text
    }

    return (
        <div className="color-picker-container">
            <h1 className="color-picker-title">Color Picker</h1>

            <div className="color-display" 
                style={{
                    backgroundColor: color,
                    color: getTextColor(color)
                }}
            >
                <p><b>Selected Color:</b> <br /> {color}</p>
            </div>

            <div className="color-input-container">
                <label>Select a Color:</label>
                <input type="color" onChange={handleColorChange}/>
            </div>
            

        </div>
    )
}

export default ColorPicker