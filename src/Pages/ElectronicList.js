import { renderArray } from "../Components/Function";
import { Item } from "../Components/Class/Item";

const ElectronicList = () => {
    const phone = new Item("Samsung", true, `electronic`)
    const television = new Item("LG", false, `electronic`)
    const computer = new Item("Apple", true, `electronic`)
    const homeCinema = new Item("Asus", true, `electronic`)
    const monitor = new Item("Samsung", false, `electronic`)

    let array = [
        {
            ...phone
        },
        {
            ...television
        },
        {
            ...computer
        },
        {
            ...homeCinema
        },
        {
            ...monitor
        },
    ]

  return (
    <>
    <div>Electronic List</div>
    {renderArray(array)}
    </>
  )
}

export default ElectronicList