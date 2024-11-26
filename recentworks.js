import React from 'react';
import './portfolio.css';
import { Col, Container,Row} from 'react-bootstrap';
import { project,shopify,expenseTracker,banners} from './details';

const BannerRow = () => {
  return (
    <>
    <div style={{backgroundColor:'#333',marginTop:'-50px'}}>

<div className="portfolio-heading">
  <h1>My Work Portfolio</h1>
  <p>Explore the projects I’ve contributed to, showcasing my skills, creativity, and technical expertise.</p>
  <hr className="divider" />
</div>

   <div>
<h2 className='hosp'>HOSPITAL MANAGEMENT</h2>
<div className="project-container">
      {/* Left Section: Video */}
      <div className="video-section">
        <video
          src={project.videoSrc}
          controls
          style={{ width: '70%', borderRadius: '8px' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Section: Details */}
      
      <div className="details-section">
  <h2>{project.title}</h2>
  <p>{project.description}</p>
  <h4>Technologies Used:</h4>
  <div className="technologies">
    {project.technologies.map((tech, index) => (
      <div key={index} className="tech-item">
        <img src={tech.icon} alt={tech.name} className="tech-icon" />
        <span>{tech.name}</span>
      </div>
    ))}
  </div>
</div>
</div>


 <p style={{color:'whitesmoke'}}>"In the fast-paced world of healthcare, it's vital to manage hospital tasks effectively to ensure top-notch patient care. This article explores creating a strong Hospital Management App using the MERN stack – that's MongoDB, Express, React, and Node.js, breaking down the process for easier understanding."</p>
    <div className="banner-row">
      <div className="banner">
        <div className="banner-inner">
          <div className="banner-front">
            {/* Front side content */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHW6cOdYs3P3DFIS98P-TauGJ3RATHozukg&s" alt="Banner Front 1" />
          </div>
          <div className="banner-back">
            {/* Back side content */}
            <p className='paragraph'>It is the management that helps in managing the functioning of the hospital or a health unit. </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner-inner">
          <div className="banner-front">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjRopphjGRvNqlNAJoSjdB4A2TAkRHtPTkw&s" alt="Banner Front 2" />
          </div>                          
          <div className="banner-back">
            <p className='paragraph'>The emergency room is a hospital or primary care department that provides initial treatment to patients with a broad span of illnesses and injuries.</p>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="banner-inner">
          <div className="banner-front">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAU_iJH8yb_32-KywmospB8xGAaowIkdgAhg&s      " alt="Banner Front 3" />
          </div>
          <div className="banner-back">
            <p className='paragraph'>Operational Management: A hospital administrator is responsible for the hospital's daily operations, which require efficient resource management, process optimisation, workflows.</p>
          </div>
        </div>
      </div>
    </div>
</div>

<hr className='horizontalline'/>

    <div>
        <h2 className="shopify-heading">SHOPIFY</h2>
    </div>

<div style={{color:'white'}}>
<p style={{padding:'10px', justifyContent:'center', justifyItems:"center"}}>
The online shopping platform developed using the MERN stack (MySQL, Express.js, React.js, and Node.js) is a robust, feature-rich application that provides a seamless shopping experience for users. Designed to be scalable and user-friendly, this platform bridges the gap between customers and sellers with advanced functionalities and modern design principles.
</p>
</div>


<div className="project-container1">
      {/* Left Section: Video */}
      <div className="details-section1">
  <h2>{shopify.title}</h2>
  <p>{shopify.description}</p>
  <h4>Technologies Used:</h4>
  <div className="technologies">
    {shopify.technologies.map((tech, index) => (
      <div key={index} className="tech-item">
        <img src={tech.icon} alt={tech.name} className="tech-icon" />
        <span>{tech.name}</span>
      </div>
    ))}
  </div>
</div>

      {/* Right Section: Details */ }
      
   <div className="video-section">
        <video
          src={shopify.videoSrc}
          controls
          style={{ width: '70%', borderRadius: '8px' }}
        >
          Your browser does not support the video tag.
        </video>
   </div>
</div>

<hr className='horizontalline'/>
    <h2 className='expence'>Expence Traker</h2>


 <div className="project-container1">
      {/* Left Section: Video */}
      <div className="video-section">
        <video
          src={expenseTracker.videoSrc}
          controls
          style={{ width: '70%', borderRadius: '8px' }}
        >
          Your browser does not support the video tag.
        </video>
   </div>
    

      {/* Right Section: Details */ }
      
          <div className="details-section2">
      <h2 style={{color:'white'}}>{expenseTracker.title}</h2>
      <p style={{color:'white'}}>{expenseTracker.description}</p>
      <h4 style={{color:'white'}}>Technologies Used:</h4>
      <div className="technologies">
        {expenseTracker.technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={tech.icon} alt={tech.name} className="tech-icon" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>

    

  </div>
  <div className="banner-grid">
      {banners.map((banner) => (
        <div key={banner.id} className="banner-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={banner.imageSrc} alt={`Banner ${banner.id}`} />
            </div>
            <div className="card-back">
              <p>{banner.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

</div>
</>
  );
};

export default BannerRow;
