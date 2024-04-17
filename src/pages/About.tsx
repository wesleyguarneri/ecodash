import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/About.module.scss";
import bodyStyles from "../styles/Home.module.scss";

/*
  This defines the about page that explains the goal and purpose of our project
*/

function About() {
  return (

    <body className={bodyStyles.body}>
    <NavBar></NavBar>
    <section className={styles.section}>
      <div className={styles.main_inner}>
        <div className={styles.inner_wrapper}>
          <p>
            Welcome to Lehigh University&rsquo;s Energy Dashboard! This website displays our University&rsquo;s energy usage at the building level. 
          </p>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.main_inner}>
        <div className={styles.inner_wrapper}>
          <h1>
            Measuring Energy Usage
          </h1>
          <p>
            It is important to understand the difference between a unit of power and a unit of energy. 
            A kilowatt 
            (kW) is a unit of power, while a 
            kilowatt-hour 
            (kWh) is a unit of energy. 
            In other words, a kilowatt-hour is 1,000 watts used for one hour.
            <br></br><br></br>
            EUI 
            stands for Energy Use Intensity. It is a measure of daily energy use per building
            area, which allows us to account for the square footage of a building. A kBtu stands for a kilo-British thermal unit, which is a unit of energy; 1 kWh is equal to 3.412 kBtu.
          </p>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.main_inner}>
        <div className={styles.inner_wrapper}>
          <h1>
            Environmental Impact
          </h1>
          <p>
            Our energy usage has a direct impact on the environment. 
            Most of the world&rsquo;s energy comes from the combustion of fossil fuels. When these materials are burned
            they release 
            greenhouse gases 
            including carbon dioxide and nitrous oxide into the atmosphere. 
            At high atmospheric concentrations, these gases heavily contribute to the warming of our atmosphere - 
            or what we commonly refer to as the
            greenhouse effect.
            <br></br><br></br>
            The greenhouse effect is necessary for all life on Earth; without it, our atmosphere would be less 
            than 0° F! However, humans have put the greenhouse effect out of balance. The atmospheric concentrations of 
            harmful greenhouse gases are rapidly increasing due to fossil fuel usage. Soon, we will reach a point of no return, and the 
            effects of 
            climate change 
            will be irreversible.
            <br></br><br></br>
            By reducing our energy usage, we can limit the amount of greenhouse 
            gas emissions and slow or even reverse the effects of climate change. 
          </p>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.main_inner}>
        <div className={styles.inner_wrapper}>
          <h1>
            Sustainability at Lehigh
          </h1>
          <p>
            What is Lehigh doing to become a more sustainable institution and reduce its energy usage? The 
            Office of Sustainability (OOS), in conjunction with campus partners, spearheads a number 
            of campus initiatives promoting sustainable student behaviors.
            <br></br><br></br>
            Each November, the OOS hosts its annual Kill-a-Watt competition, an essential part of 
            Energy Conservation Month. All first-year dorms participate in this four-week long competition aimed at reducing energy usage 
            per person. The dorm with the lowest energy usage per person wins a prize chosen by the 
            Eco-Rep Leadership Program, a team of students dedicated to promoting 
            sustainable behavior in residential halls and Greek houses. Students can also take the Energy Conservation Pledge, a commitment 
            to adopting energy saving behaviors. Read more about Energy Conservation Month&nbsp;
            <section className = {styles.section}>
          <html>
          <body>
         
            <u><a className = {styles.section_link} href="https://sustainability.lehigh.edu/energy-conservation-month">here.</a></u>
           
            </body>
          </html>
          </section>
            <br></br><br></br> 
            Lehigh is also committed to sustainability on a larger scale. Several buildings on Lehigh&rsquo;s campus are 
            Leadership in Energy and Environmental Design     
            (LEED) certified, including STEPS; Williams Hall; Chandler-Ullman; Health, Science, & Technology; and Singleton, Hitch, & 
            Maida. The upcoming Clayton University Center renovations and the Rauch Business Center expansion are also pursuing LEED certification. 
            LEED certified buildings meet a set of requirements concerning sustainability, energy and water efficiency, air quality, and other important criteria set by the U.S. Green Building Council.
          </p>
        </div>
      </div>
    </section>


    </body>
  );
 }

 export default About;
