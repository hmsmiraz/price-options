import PropTypes from 'prop-types'
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const[open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Portfolio", path: "/portfolio" },
        { id: 5, name: "Contact", path: "/contact" }
      ];

      
  return (
    <nav>
        <div onClick={() => setOpen(!open)} className='md:hidden text-2xl text-black bg-gray-100 p-6'>
        {
            open === true ? <AiOutlineClose></AiOutlineClose> 
            : <AiOutlineMenu></AiOutlineMenu>
        }
        </div>
        <ul className={`md:flex absolute md:static bg-gray-100 duration-1000
        ${open ? 'top-16' : '-top-60'}
        text-center rounded-md px-3`}>
        {
            routes.map(route => <Link key={route.id} route={route}></Link>)
        }
        </ul>
    </nav>
  )
};

Navbar.propTypes = {
    routes : PropTypes.array,
}

export default Navbar