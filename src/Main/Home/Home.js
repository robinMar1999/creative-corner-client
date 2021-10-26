import React from "react";
import classes from "./Home.module.css";
import Testimonial from "./Testimonial/Testimonial";

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <section className={classes.bg + " " + classes.bg1}>
        <div className={classes.container}>
          <div className={classes.subtitle}>Your friendly architect</div>
          <div className={classes.title}>CreativeCorner</div>
        </div>
      </section>
      <section className={classes.mainContent}>
        <h1>Services</h1>

        <ul className={classes.services}>
          <li className={classes.service}>Autocad 2D Planning</li>
          <li className={classes.service}>
            Exterior & Interior Design 3D View
          </li>
          <li className={classes.service}>Architecture 3D Design</li>
          <li className={classes.service}>Facade Design 3D</li>
          <li className={classes.service}>Landscape Design</li>
          <li className={classes.service}>Renovation</li>
        </ul>
      </section>
      <section className={classes.bg + " " + classes.bg2}></section>
      <section className={classes.mainContent}>
        <h1>Testimonials</h1>
        <Testimonial author="Robin">
          Puneet Panwar did amazing job. He is very friendly and creative.
        </Testimonial>
        <Testimonial author="Aman">
          Puneet Panwar is very intelligent. He did amazing job in such a small
          period. Thanks.
        </Testimonial>
      </section>
    </div>
  );
};

export default Home;
