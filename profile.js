import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import {about,service, work} from "./details";

import { Col, Container, Row ,Button,Card} from "react-bootstrap";
import { Email, Home, Http, Instagram, LinkedIn, LocationOn, Phone, SmartDisplay, Twitter } from "@mui/icons-material";
import { FaSnapchat,FaEnvelope,FaInstagram,FaTwitter,FaLinkedin, FaTelegram} from "react-icons/fa";

function Profile () {
    const [formData, SetFormData] = useState({
      firstname: "",
      lastname: "",
      mail: "",
      message: "",
    
    });

    const handleChange=(e)=>{
      const {name,value}=e.target;
      SetFormData({...FormData,[name]:value,});
    };

    const handleSubmit=(e)=>{
      e.preventDefault();   
      console.log('Form submitted:', formData);  // we can put alertbox in here to , The preventdefault() is set for the form termintion only
    };

    const onSubmit=()=>{
       alert(`​🇹​​🇭​​🇦​​🇳​​🇰​​🇸​ ​🇫​​🇴​​🇷​ ​🇹​​🇭​​🇪​ ​🇫​​🇪​​🇪​​🇩​​🇧​​🇦​​🇨​​🇰​❗ ​🇼​​🇪​❜​🇷​​🇪​ ​🇨​​🇴​​🇲​​🇵​​🇮​​🇱​​🇮​​🇳​​🇬​ ​🇾​​🇴​​🇺​​🇷​ ​🇸​​🇺​​🇬​​🇬​​🇪​​🇸​​🇹​​🇮​​🇴​​🇳​​🇸​. ${formData.firstname}!`)
    };

   
    return(
        <>
        <div style={{backgroundColor:'black'}}>
        {/* about */}
        <div style={{padding:'20px'}}>
             <Container  style={{backgroundColor:'#3c3e3f', borderRadius:'50px'}}>
                  <Row>
                      <Col md={5} className="left-section profile-image">
                       <img src="\WhatsApp Image 2024-06-22 at 14.17.46_bb686a36.jpg" alt='profile' className="img-fluid" style={{borderRadius:'150px', width:"350px", height:'auto'}}></img>
                      </Col>

                      <Col md={6} className="right-section profile-details">
                      <h4 style={{color:'white'}}>About me</h4>
                          <p className="about-description"  style={{color:'white'}}>{about.item}</p>

                           {/* Skills Section */}
            <Row className="skills-section">
            <Col className="skill-badge">HTML5</Col>
            <Col className="skill-badge">CSS3</Col>
            <Col className="skill-badge">JavaScript</Col>
            <Col className="skill-badge">Bootstrap</Col>
            <Col className="skill-badge">Next.js</Col>
          </Row>

          <Link to={"https://flowcv.me/sumin-devarajan"}><Button variant="danger" className="mt-4">
            Download CV
          </Button></Link>
        </Col>
    </Row>
    </Container>
    </div>

      <Container>
        <p style={{position:'absolute',color:'white'}}>▶my service</p>
        <div style={{padding:'17px'}}>
          <h2 style={{position:'absolute', color:'white'}}>What Can I Do</h2>
          </div>
      </Container>

      <Container className="my-5">
           <Row>
            {service.map((service,index)=>(
                <Col md={4} className="mb-4" key={index}>
                        <Card className="service-card text-center p-3">
                        <div className="service-icon mb-3">{service.icon}</div>
                        <Card.Title style={{color:"white"}}>{service.title}</Card.Title>
                        <Card.Text style={{color:"white"}}>{service.description}</Card.Text>
                       </Card>
                </Col>
                ))}
            </Row>
      </Container>
      

 {/* resume */}
      <Container>
<div className="code-resume-container">
  <div className="left-section">
    <h1 className="resume" style={{ color: 'white', borderRadius: '10px'}}>𝚁𝚎𝚜𝚞𝚖𝚎</h1>
    <div className="profile-section">
      <img src="\WhatsApp Image 2024-06-22 at 14.17.46_bb686a36.jpg" alt="Profile" className="profile-pic" />
    </div>
    <div className="profile-info">
      <span className="code-comment">// Profile Information</span>
      <div className="code-line">
        <span className="code-key">const</span> <span className="code-variable">profile</span> = {'{'}
      </div>
      <div className="code-line code-indent">
        <span className="code-key">name</span>: <span className="code-string">'Richard Sanchez'</span>,
      </div>
      <div className="code-line code-indent">
        <span className="code-key">title</span>: <span className="code-string">'Product Designer'</span>,
      </div>
      <div className="code-line code-indent">
        <span className="code-key">location</span>: <span className="code-string">'Sydney, Australia'</span>,
      </div>
      <div className="code-line">{'};'}</div>

      <span className="code-comment">//Language</span>
      <div className="code-line">
        <span className="code-key">const</span> <span className="code-variable">Lang</span> = {'{'}
      </div>
      <div className="code-line code-indent">
        <span className="code-key">malayalam</span>: <span className="code-string">'native'</span>,
      </div>
      <div className="code-line code-indent">
        <span className="code-key">english</span>: <span className="code-string">'Proficient'</span>,
      </div>
      <div className="code-line code-indent">
        <span className="code-key">hindi</span>: <span className="code-string">'moderate'</span>,
      </div>
      <div className="code-line">{'};'}</div>
    </div>
  </div>
         
  <div className="right-section">
          <span className="code-comment">// Contact Information</span>
          <div className="code-line">
            <span className="code-key">const</span> <span className="code-variable">contactInfo</span> = {'{'}
          </div>
          <div className="code-line code-indent">
            <span className="code-key"><Phone></Phone>phone</span>: <span className="code-string">'+91 9061433640'</span>,
          </div>
          <div className="code-line code-indent">
            <span className="code-key"><Email></Email>email</span>: <span className="code-string">'suminrajd.connect@gmail.com'</span>,
          </div>
          <div className="code-line code-indent">
            <span className="code-key"><LocationOn></LocationOn>address</span>: <span className="code-string">'S.S Bhavan TRA 223 Alamcode(p.0),Attingal,T.V.M'</span>,
          </div>
          <div className="code-line">{'};'}</div>

          <span className="code-comment">// Education</span>
          <div className="code-line">
            <span className="code-key">const</span> <span className="code-variable">education</span> = {'['}
          </div>
          <div className="code-line code-indent">
            {'{'} <span className="code-key">degree</span>: <span className="code-string">'B.C.A'</span>, <span className="code-key">location</span>: <span className="code-string">'Kerala University'</span>, <span className="code-key">year</span>: <span className="code-string">'2021-2024'</span> {'},'}
          </div>
          <div className="code-line code-indent">
            {'{'} <span className="code-key">Intern</span>: <span className="code-string">'Web Developer.'</span>, <span className="code-key">location</span>: <span className="code-string">'Softzane Solution, Kollam'</span>, <span className="code-key">month</span>: <span className="code-string">'jun-dec'</span> {'},'}
          </div>
          <div className="code-line">{'];'}</div>

          <span className="code-comment">// Experience</span>
          <div className="code-line">
            <span className="code-key">const</span> <span className="code-variable">experience</span> = {'['}
          </div>
          <div className="code-line code-indent">
            {'{'} <span className="code-key">company</span>: <span className="code-string">'Softzane Solution'</span>, <span className="code-key">location</span>: <span className="code-string">'Kollam, Kerala'</span>, <span className="code-key">month</span>: <span className="code-string">'jun-dec'</span> {'},'}
          </div>
         
          <div className="code-line">{'];'}</div>

          <span className="code-comment">// Skills</span>
          <div className="code-line">
            <span className="code-key">const</span> <span className="code-variable">skills</span> = {'{'}
          </div>
          <div className="code-line code-indent">
            <span className="code-key">React.js</span>: <span className="code-number">62</span>,
          </div>
          <div className="code-line code-indent">
            <span className="code-key">Express.js</span>: <span className="code-number">75</span>,
          </div>
          <div className="code-line code-indent">
            <span className="code-key">Node.js</span>: <span className="code-number">78</span>,
          </div>
          <div className="code-line code-indent">
            <span className="code-key">HTML5, CSS3, Tailwid, boostrap</span>: <span className="code-number">81</span>,
          </div>
          <div className="code-line code-indent">
            <span className="code-key">MongoDB, MySQL</span>: <span className="code-number">72</span>,
          </div>
            
          <div className="code-line">{'};'}</div>
            <div>
            <span className="code-key">GitHub<img src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-square-black-pack-logos-icons-437906.png" style={{width:'33px', height:'auto',borderRadius:'50px'}} alt="github"/></span>: <span className="code-number"><Link to="/">Get into the github </Link></span>,
          </div>
          <div className="my-4 social-icons-container"><Instagram></Instagram><LinkedIn></LinkedIn><Twitter></Twitter><FaSnapchat></FaSnapchat></div>
        </div>
    </div>
    </Container>
      
      {/* card style */}
      <Container>
            <div className="container-card">
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s" alt="React" />
                
                <h3>React</h3>
              </div>
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&s" alt="Node.js" />
                <h3>Node.js</h3>
              </div>
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2k717qBb6-pXKkCbG-NCUXC0Ntbm0hTVyg&s" alt="MongoDB" />
                <h3>MongoDB</h3>
              </div>
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQekWelnQLyNrIhnqKRm27jhiK_KGRxBwhKdQ&s" alt="Express.js" />
                <h3>Express.js</h3>
              </div>
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76htUv99PcmoXOAmy8jZYI5OgRGy2RzEKqQ&s" alt="html.js" />
                <h3>HTML5</h3>
              </div>
              <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXH35MxByZ8ijXJl6psG_g5ZoGo-e-DMkUg&s" alt="css" />
                <h3>CSS3</h3>
              </div>
            </div>
      </Container>

   {/* Login form */}
<Container>
       <div className="contact-form-container">
       <h1 >​🇮​❜​🇩​ ​🇱​​🇴​​🇻​​🇪​ ​🇹​​🇴​ ​🇭​​🇪​​🇦​​🇷​ ​🇫​​🇷​​🇴​​🇲​ ​🇾​​🇴​​🇺​❗</h1> 
         <form onSubmit={handleSubmit}>
               <input type="text" name="firstName" placeholder="FirstName" value={formData.firstname} onChange={handleChange} required/>
               <input type="text" name="lastname" placeholder="LastName" value={formData.lastname} onChange={handleChange} required/>
               <input type="email" name="email"placeholder="Mail"value={formData.mail} onChange={handleChange} required/>
               <textarea name="message" placeholder="Message..."value={formData.message} onChange={handleChange} required/>
               <button className="button-submit" type="submit" onClick={onSubmit}>Submit</button>
          </form>  
       
    
       </div>
</Container>

<div style={{padding:'10px'}}>
  <img src="\webmodelpage3.webp" style={{width:'350px', height:'170px'}}></img>
  <img src="\webpagemodel1.png" style={{width:'350px', height:'170px'}}></img>
  <img src="\webpagemodel2.png" style={{width:'350px', height:'170px'}}></img>
  {/* <img src="\webpagemodel1.png" alt="webmodel" style={{width:'1200px', height:'auto', padding:'17px', overflow:'hidden', position:'relative'}}></img> */}
</div>

     <Container style={{padding:'30px'}}>
           <Row>
            {work.map((work,index)=>(
               <Col md={6} key={index} >
               <h1 style={{fontWeight:'600', color:'white'}}>{work.item}</h1>
               <p style={{fontWeight:'400', color:'white'}}>{work.describe}</p>
               </Col>
             ))}
               <Col md={6}>
               <Button  variant="danger" className="mt-5">Connect</Button>
               </Col>
             </Row>
      </Container>

      <Container>
        {/* <Row>
          {images.map((image,index)=>(
             <Col md={4} className="mb-4" key={index}>
               <div className="card mb-3" style={{color:'white'}}>{image.image1},{image.title}</div>
             </Col>
          ))}
          </Row> */}
      </Container>
  
      {/* footer */}
      <Container>
      <footer className="footer">
      <div className="container">
        <h2 className="footer-title">Get in Touch</h2>
        <p className="footer-description">
          Ecosystem bootstrapping learning curve lean startup disruptive. Marketing long tail disruptive agile development partner.
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/haurn_vein/profilecard/?igsh=b3RlaWFjMWtydWN1" target="_blank" rel="noopener noreferrer">
           <div> <FaInstagram /></div>
          </a>
          <a href="https://www.linkedin.com/in/sumin-raj-d-8592a62a0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/SuminRaj9061?t=VVkyoRtt2YSlDQkgYro9yg&s=08" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <FaTelegram />
            <a href="http://t.me/Sumin_Devarajan" target="_blank" rel="noopener noreferrer">telegram.com/example</a>
          </div>
          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:contact@example.com">rdalex9061@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
      </Container>
      </div>   
        </>
    );

};
export default Profile;

