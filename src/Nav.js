import React, {useEffect, useState} from "react";
import './Nav.css';
import {useNavigate} from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                    onClick={() => {navigate('/')}}
                />
                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" onClick={() => {navigate('/profile')}}/>
            </div>
        </div>
    )
}

export default Nav
