import RenderPage from "../Components/RenderPage"
const ShoppingList = () => {
    
    let array = [
        {
            title: "Apple",
            inStock: true,
            category: `fruits`
        },
        {
            title: "Orange",
            inStock: false,
            category: `fruits`
        },
        {
            title: "Watermelon",
            inStock: true,
            category: `fruits`
        },
        {
            title: "Pear",
            inStock: true,
            category: `fruits`
        },
        {
            title: "Banana",
            inStock: false,
            category: `fruits`
        }
    ]
    return (
        <RenderPage array={array} title="Shopping List"/>
    )
}
export default ShoppingList