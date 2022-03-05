import React,{useEffect} from 'react'
import logo from './1.jpg'
import avatar from './Netflix-avatar.jpg'
import "./Nav.css";
import { useState } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Nav() {
    const[show,handleShow] = useState(false);
    // used to push the profile page
    const history = useHistory();
    // When scroll then do something with nav like show the black colour at background
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            // jb ho jaye ek baar ke liye then remove
             window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                onClick={() => history.push('/')}
                className='nav_logo'
                src={logo}
                alt='Netflix logo'
            />
            <img 
                onClick={() => history.push('./profile')}
                className='nav_avatar'
                src={avatar}
                alt='Netflix avatar'
            />
        </div>
    )
}

export default Nav
