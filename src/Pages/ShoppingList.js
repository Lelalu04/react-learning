import { renderArray } from "../Components/Function";
import { Item } from "../Components/Class/Item";
const ShoppingList = () => {
    
    const apple = new Item("Apple", true, `fruits`);
    const orange = new Item("Orange", false, `fruits`);
    const watermelon = new Item("Watermelon", true, `fruits`);
    const pear = new Item("Pear", true, `fruits`);
    const banana = new Item("Banana", false, `fruits`);
    // let array = [
    //     {
    //         title: "Apple",
    //         boolean: true,
    //         category: `fruits`
    //     },
    //     {
    //         title: "Orange",
    //         boolean: false,
    //         category: `fruits`
    //     },
    //     {
    //         title: "Watermelon",
    //         boolean: true,
    //         category: `fruits`
    //     },
    //     {
    //         title: "Pear",
    //         boolean: true,
    //         category: `fruits`
    //     },
    //     {
    //         title: "Banana",
    //         boolean: false,
    //         category: `fruits`
    //     }
    // ]
    let array = [
        {
            ...apple
        },
        {
            ...orange
        },
        {
            ...watermelon
        },
        {
            ...pear
        },
        {
            ...banana
        }
    ]
    return (
        <>
            <h1>Shopping List</h1>
            {renderArray(array)}
        </>
    )
}
export default ShoppingList