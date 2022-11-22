import ShopItem from './ShopItem/ShopItem'

const RenderPage = ({array, title}) => {
    function renderArray(arr) {
        if (arr.length === 0) {
            return <p>„Your shopping list is empty."</p>
        }
        let items = arr.map((item, index) => {
            return <ShopItem key={index} title={item.title} inStock={item.inStock}></ShopItem>
        })
        return <ul>{items}</ul>;
    }
    return (
        <>
            <h1>{title}</h1>
            {renderArray(array)}
        </>
    )
}
export default RenderPage