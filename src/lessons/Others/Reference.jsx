import {useState, useEffect, useRef} from "react"

function Reference() {
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        console.log(inputRef1)
        console.log(inputRef2)
        console.log(inputRef3)
    })

    function handleClick1() {
        inputRef1.current.focus();
        // inputRef1.current.style.backgroundColor = "yellow";
    }

    function handleClick2() {
        inputRef2.current.focus();
        // inputRef2.current.style.backgroundColor = "yellow";
    }

    function handleClick3() {
        inputRef3.current.focus();
        // inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Click me!
            </button>
            <input ref={inputRef1} type="text" />

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2} type="text" />

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3} type="text" />
        </div>
        
    )
}

export default Reference