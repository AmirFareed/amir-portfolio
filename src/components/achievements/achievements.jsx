import React from "react";
import "./achievements.css"; // Ensure your CSS matches the styling of your portfolio

// Import images for achievements
import ACH1 from "../../assets/achievement1.jpg";
import ACH2 from "../../assets/achievement2.jpg";
import ACH3 from "../../assets/achievement3.jpg";
import ACH4 from "../../assets/achievement4.png";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Google IT Automation with Python Professional Certificate",
      img: ACH1,
      description: "The Google-developed six-course certificate equips IT professionals with sought-after skills like Python, Git, and IT automation, fostering career advancement. The hands-on curriculum emphasizes Python coding for automating tasks in IT support and systems administration.",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/6C22E63ZVV8Q",
      moreInfo: "https://www.credly.com/earner/earned/badge/7487e37b-1e9f-4d8c-a101-2cd3ee1ffb07"
    },
    {
      id: 2,
      title: "Technology Support Specialist Level 4",
      img: ACH2,
      description: "The Technology Support Specialist Level 4 badge provides current T-Specs managers with skills and knowledge to better lead their teams and organizational strategy.",
      date: "2023",
      link: "https://www.credly.com/badges/2f6b420e-36a6-4f64-b315-cce6653a359e/linked_in_profile",
      moreInfo: "https://www.coursera.org/account/accomplishments/specialization/VKE5JZQ3MHPK"
    },
    {
        id: 3,
        title: "Google IT Support",
        img: ACH3,
        description: "Google IT Support Certificate graduates have completed five Google-developed courses with hands-on assessments, preparing them for entry-level IT support roles. They're skilled in troubleshooting, customer service, networking, operating systems, system administration, and security.",
        date: "2023",
        link: "https://www.coursera.org/account/accomplishments/specialization/JKKD274FVCK3",
        moreInfo: "https://www.credly.com/badges/143b1feb-c397-4252-97e7-ba7ee857d7ac"
      },
    {
      id: 4,
      title: "Research Paper Published in ScienceDirect Journal",
      img: ACH4,
      description: "I authored a pioneering research paper on recommendation systems, serving as the main author, which was published in the esteemed journal \"Machine Learning with Applications.\" This paper, which was nominated for the Best Research Award, represents a significant contribution to the field and showcases meticulous research and innovative insights.",
      date: "2023",
      link: "https://www.sciencedirect.com/science/article/pii/S2666827023000488?via%3Dihub",
      moreInfo: "https://www.researchgate.net/profile/Aamir-Fareed"
    },
    
  ];

  return (
    <section id="achievements">
      <h5>My Professional Achievements</h5>
      <h2>Achievements</h2>

      <div className="container achievements__container">
        {achievements.map((achievement) => (
          <article className="achievements__item" key={achievement.id}>
            <div className="achievements__item-image">
              <img src={achievement.img} alt={achievement.title} />
            </div>
            <div className="achievements__item-content">
              <h3>{achievement.title}</h3>
              <small>{achievement.date}</small>
              <p>{achievement.description}</p>
              <div className="achievements__item-cta">
                <a href={achievement.link} target="_blank" className="btn" rel="noreferrer">
                  View
                </a>
                <a href={achievement.moreInfo} target="_blank" className="btn btn-primary" rel="noreferrer">
                  More Info
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
