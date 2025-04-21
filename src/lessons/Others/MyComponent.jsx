import {useState} from "react"

function MyComponent() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(e, newName) {
        console.log(e)
        console.log(newName)
        setName(e.target.value)
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    function handleCommentChange(e) {
        setComment(e.target.value)
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }

    function handleShippingChange(e) {
        setShipping(e.target.value)
    }

    return (
        <div>
            <input onChange={(e) => handleNameChange(e)} value={name} type="text" />
            <p>Name: {name}</p>

            <input onChange={handleQuantityChange} value={quantity} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea onChange={handleCommentChange} value={comment} placeholder="What do you think?"></textarea>
            <p>Comment: {comment}</p>

            <select onChange={handlePaymentChange} value={payment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            
            <label>
                <input type="radio" value="Pick Up" 
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" 
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default MyComponent