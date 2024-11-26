import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Instagram, LinkedIn } from "@mui/icons-material"; 

function Portfol() {
  const [details, setDetails] = useState("");

  return (
    <>
  <div className="body" style={{backgroundColor:'black', minHeight:'100vh'}}>
      <nav className="nav-bar">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="navlink">
            ℌ𝔬𝔪𝔢
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/casestudies" className="navlink">
            𝙲𝚊𝚜𝚎𝚂𝚝𝚞𝚍𝚒𝚎𝚜
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/textimonial" className="navlink">
            𝚃𝚎𝚡𝚝𝚒𝚖𝚘𝚗𝚊𝚒𝚕
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="navlink">
            𝚁𝚎𝚌𝚎𝚗𝚝 𝚆𝚘𝚛𝚔𝚜
            </Link>
          </li>
          <li className="nav-item">
            <Link to="https://www.linkedin.com/in/sumin-raj-d-8592a62a0/" className="navlink">
            𝙶𝚎𝚝 𝙸𝚗 𝚃𝚘𝚞𝚌𝚑
            </Link>
          </li>
          <li className="item">
            <Link to="https://www.instagram.com/haurn_vein/profilecard/?igsh=b3RlaWFjMWtydWN1">
            <img src="\instagram.png"  className="logo logset"/>
            </Link>
          </li>
          <li className="item">
            <Link to="https://www.linkedin.com/in/sumin-raj-d-8592a62a0/" >
               <img src="https://cdn-icons-png.flaticon.com/128/2111/2111499.png" className="logo"></img>
            </Link>
          </li>
          <li className="item">
            <Link to="https://x.com/SuminRaj9061?t=VVkyoRtt2YSlDQkgYro9yg&s=08">
               <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" className="logo"></img>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Portfolio Section */}
      <Container className="mt-5">
        <Row>
          {/* Left Section */}
          <Col md={6} className="left-section">
            <h1 style={{color:'white'}}>𝓢𝓤𝓜𝓘𝓝 𝓡𝓐𝓙 𝓓</h1>
            <p style={{color:'white'}}> 𝙰 𝙼𝙴𝚁𝙽 𝙵𝚞𝚕𝚕-𝚂𝚝𝚊𝚌𝚔 𝚆𝚎𝚋 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝙸𝚗𝚝𝚎𝚛𝚗 𝚠𝚒𝚝𝚑 𝚊 𝚙𝚊𝚜𝚜𝚒𝚘𝚗 𝚏𝚘𝚛 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝, 𝚜𝚌𝚊𝚕𝚊𝚋𝚕𝚎, 𝚊𝚗𝚍 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 𝚠𝚎𝚋 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜. 𝙸 𝚎𝚗𝚓𝚘𝚢 𝚠𝚘𝚛𝚔𝚒𝚗𝚐 𝚊𝚌𝚛𝚘𝚜𝚜 𝚝𝚑𝚎 𝚏𝚞𝚕𝚕 𝚜𝚝𝚊𝚌𝚔, 𝚏𝚛𝚘𝚖 𝚌𝚛𝚊𝚏𝚝𝚒𝚗𝚐 𝚍𝚢𝚗𝚊𝚖𝚒𝚌 𝚏𝚛𝚘𝚗𝚝-𝚎𝚗𝚍 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎𝚜 𝚝𝚘 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚒𝚗𝚐 𝚛𝚘𝚋𝚞𝚜𝚝 𝚋𝚊𝚌𝚔-𝚎𝚗𝚍 𝚜𝚎𝚛𝚟𝚒𝚌𝚎𝚜.
            </p>
            <button className="button">
              <Link to="/profile">
                GET TO KNOW ME
              </Link>
            </button>
          </Col>

          {/* Right Section */}
          <Col md={6} className="right-section text-center">
            <img
              src="\WhatsApp Image 2024-06-22 at 14.17.46_bb686a36.jpg"
              alt="Portfolio"
              style={{width:'300px', height:'auto', marginTop:'30px', borderRadius:'150px'}}
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
     
    <h4 style={{position:'absolute', padding:'50px', fontSize:'14px', color:'grey'}}>Worked with</h4>
     <section style={{ padding: '100px', display: 'flex', justifyContent: 'space-around', position:'absolute' }}>
          <div style={{ display: 'flex', gap: '27px', alignItems: 'center', }}>
          <img src="https://th.bing.com/th/id/OIP.abznQzXMmlCbu0KrsDnCygAAAA?w=313&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Airtm" style={{ width: '100px', height: 'auto' }} />
          <img src="https://th.bing.com/th/id/OIP.kXHxR4eA2WEEuWG1OeVUZwHaDt?w=322&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Company 2" style={{ width: '100px', height: 'auto' }} />
          <img src="https://unizone-emotorsport.com/wp-content/uploads/2023/05/unizone_ogp.png" alt="Company 3" style={{ width: '100px', height: 'auto' }} />
        </div>
    </section>
</div>
    </>
  );
}

export default Portfol;
