import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function Carousel() {
  let projects = useSelector((state) => state.project.projects);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className={"container"}>
      {projects.length > 0 && (
        <div className={"containerCard"}>
          <h1> Galeria de proyectos </h1>

          <div className={"sliderContainer"}>
            <Slider {...settings}>
              {projects.slice(0,9).map((data) => {
                return (
                  <div key={data.id} className={"cardProjectContainer"} >
                    <div className={"imgProjectContainer"}>
                      <img src={data.img} alt="" />
                    </div>
                    <div className={"titleDescriptionContainer"}>
                      <h2>{data.title}</h2>
                      <p>{data.description.substr(0,200)}</p>
                    </div>
                    
                    <Link to={`/proyectos/${data.id}`} style={{Button:"0"}}>
                      <Button variant="outlined" style={{ color: "#FF9F1C", borderColor:"#FF9F1C", margin:".2rem .5rem 0 .5rem", fontSize:".8rem"}}>
                        Saber mas
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </Slider>

            <Link to="/proyectos" style={{ color: "#fff" }}>  
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
