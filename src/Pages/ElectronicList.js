import { Item } from "../Class/Item";
import RenderPage from "../Components/RenderPage";

const ElectronicList = () => {
    const phone = new Item("Samsung", true, `electronic`)
    const television = new Item("LG", false, `electronic`)
    const computer = new Item("Apple", true, `electronic`)
    const homeCinema = new Item("Asus", true, `electronic`)
    const monitor = new Item("Samsung", false, `electronic`)

    let array = [phone,television,computer,homeCinema,monitor]

  return (
    <RenderPage array={array} title="Shopping List"/>
  )
}
export default ElectronicList