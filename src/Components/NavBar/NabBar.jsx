import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1} from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
const NabBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    return (
        <nav className="text-red-500 bg-green-400 p-6">
            <div className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <RxCross1></RxCross1> : <HiMenuAlt1 className="" />
                }

            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-green-400 ${open ? 'top-20' : '-top-64'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NabBar;