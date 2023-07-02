import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.png";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "web-design",
    title: "Finance Technology Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://movie-r-app.vercel.app/",
    siteButton:'Live Site',
  },

  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Python",
    title: "Resume Generator Using Python",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Python","ttkBootstrap", "MongoDB", "SQLite", "PDF","ATS"],
    siteUrl: "https://github.com/JAGADEESHWARAN20/Resume-Generator",
    siteButton:'View Page',
  },

  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Cryptography",
    title: "Encrypt Your Image",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Python", "ttkBootstrap", "Img","3 DES"],
    siteUrl: "https://github.com/JAGADEESHWARAN20/ImageEncryption",
    siteButton:'View Page',
  },
  
];

export default portfolios;
