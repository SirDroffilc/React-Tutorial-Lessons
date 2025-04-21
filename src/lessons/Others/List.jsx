
function List(props) {
    const itemList = props.items;
    const category = props.category

    const listItems = itemList.map(item => 
        <li key={item.id}>Name: <b>{item.name}</b> | Calories: <b>{item.calories}</b></li>
    )

    return (
        <>
            <h3 className="category">{category}</h3>
            <ul className="list">{listItems}</ul>
        </>
    )
}

export default List