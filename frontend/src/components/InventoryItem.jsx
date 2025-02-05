// InventoryItem component
const InventoryItem=({item})=>{
    return(
        <div>
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
        </div>
    )
}
export default InventoryItem;