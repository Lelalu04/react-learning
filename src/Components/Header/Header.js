import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/CreateItem">CreateItem</Link></li>
               <li><Link to="/ElectronicList">Electronic List</Link></li>
               <li><Link to="/ShoppingList">Shopping List</Link></li>
        </ul>
    )
}
export default Header