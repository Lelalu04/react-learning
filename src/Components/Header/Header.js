import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/ShoppingList">Shopping List</Link></li>
        </ul>
    )
}
export default Header