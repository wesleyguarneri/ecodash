import styles from "../styles/NavBar.module.scss";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import menu from '../images/menu.svg'
import Hamburger from 'hamburger-react' // yum

function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
    return (
    <header className={styles.header1}>
        
        <Link href={"/"}>
        <a>
            <div className={styles.logo}>Energy Dashboard</div>
        </a>
        </Link>
        <div className={styles.list_wrapper}>
            <div className={styles.menu_items}>
                <Link href={`/Competition`}>
                    <a className={styles.comp_btn}>Kill-A-Watt Competition</a>

                </Link>
                <Link href={`/EnergyTips`}>
                    <a className={styles.tips_btn}>Energy Savings Tips</a>
                </Link>
                <Link href={`/About`}>
                    <a className={styles.about_btn}>Info</a>
                </Link>
            </div>
        </div>

        <div className={styles.menu_wrapper}>
            <div className={styles.navBar}>
            <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} />           
             </div>
            {navbarOpen && <menu>
            <div className={styles.menu}>
                <div className={styles.menu_list}>
                <ul>
                    
                <a href={`/Competition`}>
                    <li>Kill-A-Watt Competition</li>
                </a>
                
                <a href={`/EnergyTips`}>
                <li>Energy Savings Tips</li>
        
                </a>
                <a href={`/About`}>
                    <li>Info</li>

                </a>
                </ul>
                </div>
            </div>
            </menu>}
        </div>
    </header>

    );
  };
  export default NavBar;
