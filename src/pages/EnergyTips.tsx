/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavBar from "../components/NavBar";
import Image from 'next/image';
import styles from "../styles/EnergyTips.module.scss";

import bodyStyles from "../styles/Home.module.scss";
import light_bulb from "../../dashboard_graphics/light_bulb.png";
import bulb from '../images/bulb.svg'
import water from '../images/125-wash-hand.svg';
import temperature from '../images/123-temprature-meter.svg';
import globe from '../images/globe.svg';
import faucet from '../images/faucet.svg';
import furnace from '../images/furnace.svg';

/*
     The energy tips page outlines actions users can take to save on energy
*/


function EnergyTips() {

     return (
     <body className={bodyStyles.body}>
          <div className = {styles.body}>
          <NavBar></NavBar>

          <section className = {styles.section}>
          <html>
          <body>
               <h1>
               <u><a className = {styles.headers_link} href="https://docs.google.com/forms/d/e/1FAIpQLSdj8fPOYUH94kiAKTM07Qj9ywnX5a2Y25MtZRai1OPTcVkBSw/viewform">Click here to take the Lehigh University Energy Pledge 2022!</a></u>
               </h1>
          </body>
          </html>
          </section>

          <section className = {styles.section}>
               <div className = {styles.main_inner}>
                    <div className = {styles.wrapper_right}>
                         <Image className= {styles.image} src={globe} />
                    </div>
                    <div className = {styles.wrapper_left}>
                         <div className = {styles.inner_wrapper}>
                              <h1>
                                   Electricity
                              </h1>
                              <p>Turn the brightness down on your phone and laptop to save battery life.</p>
                              <p>Turn off every light when you leave a room.</p>
                              <p>Unplug your devices once they are fully charged.</p>
                              <p>When you can, use your desk lamp instead of your room&rsquo;s light switch.</p>
                         </div>
                    </div>
               </div>
               </section>
          <section className = {styles.section}>
          <div>
          <div className = {styles.main_inner}>
               <div className = {styles.wrapper_left}>
                    <div className = {styles.inner_wrapper}>
                         <h1>
                              Water
                         </h1>
                         <p>Wash your next load of laundry in cold water.</p>
                         <p>Take a cold shower - or at least a cooler one - instead of a hot shower tomorrow morning.</p>
                         <p>Turn the faucet off while brushing your teeth, shaving, or lathering hand soap.</p>
                    </div>
                    </div>
                    <div className = {styles.wrapper_right}>
                         <Image className= {styles.image} src={faucet} />
                    
                    </div>

               </div>
               </div>
               </section>

          <section className = {styles.section}>
          <div>
          <div className = {styles.main_inner}>
                    <div className = {styles.wrapper_right}>
                         <Image className= {styles.image} src={furnace} />
                    </div>
                    <div className = {styles.wrapper_left}>
                         <div className = {styles.inner_wrapper}>
                         <h1>
                              Heating/Cooling
                         </h1>
                         <p>Close your windows when the A/C or heater is on.</p>
                         <p>Let the sun provide natural heat and light to your room whenever possible.</p>
                         <p>Turn your heat or A/C to the lowest setting when you leave your room.</p>
                         </div>
                         </div>
                    </div>
               </div>
          </section>

   

          {/* <Image src={light_bulb}
          width={500}
          height={500} /> */}
          </div>
     </body>
    );


 }


 export default EnergyTips;
