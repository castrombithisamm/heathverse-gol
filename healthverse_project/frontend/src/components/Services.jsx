import { MdHealthAndSafety } from "react-icons/md";
import SectionHead from "./SectionHead";
import { ImBookmarks } from "react-icons/im";
import { services } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { GiArmoredBoomerang } from "react-icons/gi";
// import Modal from './components/Modal'
// import axios from "axios";
import { useState } from "react";
import { SiReadthedocs } from "react-icons/si";
import { SiLit } from "react-icons/si";


const Services = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="programs__head">
          <SectionHead icon={<MdHealthAndSafety />} title="Services" />
        <div className="programs__wrapper">
          {services.map(({ id,icon,title, info, path}) => {
            return (
              <Card className="programs__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link key={id} to={"/services"} className="btn sm">
                  Learn More
                  <GiArmoredBoomerang />
                </Link>
              </Card>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
