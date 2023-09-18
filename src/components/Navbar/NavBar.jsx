import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
    const [open, SetOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 }
      ];
      

    return (
        <nav className="text-black bg-yellow-200 p-6">
           <div className=" md:hidden text-2xl" onClick={()=>SetOpen(!open)}>
            {
                open === true? <AiOutlineClose></AiOutlineClose> :  <AiOutlineMenu></AiOutlineMenu>
            }
          
           </div>
      <ul className={`md:flex duration-1000 absolute md:static
      ${open? 'top-16' : '-top-60'}
      bg-yellow-200 p-3 rounded-lg shadow-xl md:shadow-none `}>
        {
              routes.map(route=><Link key={route.id} route={route}></Link>)
        }
      </ul>
        </nav>
    );
};

export default NavBar;