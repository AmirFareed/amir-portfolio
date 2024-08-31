import "./portfolio.css";

import IMG1 from "../../assets/techbyte.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG4 from "../../assets/writing.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Content Writing",
      img: IMG4,
      description:
        "This module encompass a wide array of written works, from scholarly articles and technical reports to essays, thesis, and research papers.",
      technologies: "Academic | Technical | Essay | Thesis | Research Papers",
      link: "https://drive.google.com/drive/u/1/folders/1Nd-kmcYLSgzpU_KAhSFXUAcLMfUVdS6q",
      github: "https://drive.google.com/drive/u/1/folders/1Nd-kmcYLSgzpU_KAhSFXUAcLMfUVdS6q",
    },
    {
      id: 2,
      title: "Portfolio Website with React.js",
      img: IMG1,
      description:
        "A portfolio website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://techbytescholar",
      github: "https://github.com/",
    },
    {
      id: 3,
      title: "The Basuri Restaurant",
      img: IMG2,
      description: "A website for restaurant reservations. The website is designed using Wix for a user-friendly experience and offers seamless functionality.",
      technologies: "Wix.com",
      link: "https://kha23203807.wixsite.com/my-site-2",
      github: "https://kha23203807.wixsite.com/my-site-2",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
