import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page">
      <Hero hero="roomsHero">
        <Banner title="About Us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="services">
        <Title title="Why Ideal Property Hub" />
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
         est laborum."
        </p>
        <br />
      </section>
      <section className="services">
        <Title title="Who is Ideal Property Hub" />
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
         est laborum."
        </p>
      </section>
      <section className="services">
        <Title title="Ideal Property Hub for you" />
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
         est laborum."
        </p>
        <br />
        <br />
      </section>
      <Footer />
    </div>
  );
};

export default About;
