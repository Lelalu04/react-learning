import ShopItem from "../Components/ShopItem/ShopItem"
const ShoppingList = () => {
    let array = [
        {
            title: "Obuolys",
            boolean: true
        },
        {
            title: "Apelsinas",
            boolean: false
        },
        {
            title: "Arbuzas",
            boolean: true
        },
        {
            title: "Kriause",
            boolean: true
        },
        {
            title: "Bananas",
            boolean: false
        }
    ]
    function renderArray(arr) {
        if(arr.length === 0){
            return <p>„Your shopping list is empty."</p>
        }
        let items = arr.map((item, index) => {
            return <ShopItem key={index} title={item.title} boolean={String(item.boolean)}></ShopItem>
        })

        return <ul>{items}</ul>;
    } 
    return (
        <>
        <h1>Shopping List</h1>
        {renderArray(array)}
        </>
    )
}
export default ShoppingList