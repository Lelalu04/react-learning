import ShopItem from "../Components/ShopItem/ShopItem"

export function renderArray(arr) {
    if (arr.length === 0) {
        return <p>„Your shopping list is empty."</p>
    }
    let items = arr.map((item, index) => {
        return <ShopItem key={index} title={item.title} boolean={String(item.boolean)}></ShopItem>
    })
    return <ul>{items}</ul>;
}