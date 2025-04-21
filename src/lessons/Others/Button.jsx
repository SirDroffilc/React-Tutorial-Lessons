function Button() {

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return (
        <button onDoubleClick={(e) => handleClick(e)}>CLICK ME</button>
    )
}

export default Button