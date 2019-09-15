import React from "react";
import "./App.css";
import Gallary from "./Gallary";
import skillset from "./skills";

class App extends React.Component {
  constructor() {
    super();
    this.onClickFacebook = this.onClickFacebook.bind(this);
    this.onClickInsta = this.onClickInsta.bind(this);
  }
  onClickFacebook() {
    window.open("https://www.facebook.com/arnav.srivastava.90");
  }

  onClickInsta() {
    window.open("https://www.instagram.com/arnavsrivastava/");
  }

  render() {
    const skills = skillset;
    return (
      <div>
        <div className="sidenav">
          <div className="row side_top">
            <div className="col-4 side_top_left">
              <img src="images/arnav123.jpg" alt="news image" className="img-fluid navimg" />
            </div>
            <div className="col-8 side_top_right">
              <h6>Arnav Srivastava</h6>
              <p>Photographer</p>
            </div>
          </div>
          <header>
            <div className="container-fluid px-md-5 ">
              <nav className="mnu mx-auto">
                <label for="drop" className="toggle">
                  Menu
              </label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li className="active">
                    <a href="#home" className="scroll">
                      Home
                  </a>
                  </li>
                  <li className="mt-sm-3">
                    <a href="#about" className="scroll">
                      About
                  </a>
                  </li>
                  <li className="mt-sm-3">
                    <a href="#gallery" className="scroll">
                      Gallery
                  </a>
                  </li>
                  <li className="mt-sm-3">
                  <a href="#skills" className="scroll">
                    Skills
                  </a>
                </li> 
                  <li className="mt-sm-3">
                    <a href="#contact" className="scroll">
                      Contact
                  </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        <div className="main" id="home">
          <div className="banner-text-w3ls">
            <div className="container">
              <div className="mx-auto text-center">
                <h1>
                  "The picture that you took with your camera is the imagination
                  you want to create with reality."
                <br /> –Scott Lorenzo
              </h1>
                <p className="banp mx-auto mt-3">
                  My photographs have essence of nature, travel and streets. My inspiration is everyone and everything around me.{" "}
                </p>
                <a
                  className="btn btn-primary mt-lg-5 mt-3 agile-link-bnr"
                  href="#about"
                  role="button"
                >
                  Learn More
              </a>
              </div>
            </div>
          </div>
          {/* <!-- about --> */}
          <section className="slide-wrapper" id="about">
            <h3 className="w3_head mb-5">About Me </h3>
            <img src="images/1.jpg" className="img-fluid" alt="" />
            <p className="iner mt-5">
              {" "}
              An Engineer by Profession, an artist by luck, a photographer by choice.
              It all started  on a trip to Andaman and Nicobar,
               with a Nikon L35AF 35mm Compact Film Camera with a desire to capture all beauty viewed by human eye.
               With every new camera I held and with every new click, skills evolved and I gained more interest.
                Photography is an instrument through which I want to convey that it's good to
                capture every moment in life to look back upon.
             <br /> Streets and nature are my inspiration, I see a story everywhere, I wish to capture as much stories as possible.
             <br /> The journey has just started, stay connected!
             <br />​- Arnav Srivastava
             <br />
            </p>

          </section>
          {/* <!-- //about --> */}

          {/* <!-- news --> */}
          <div className="news" id="gallery">
            <div className="text-center">
              <h2 className="w3_head">Gallery</h2>
            </div>
            <div><Gallary /></div>
          </div>
          {/* <!-- //news --> */}
          <div className="news" id="skills">
            <div className="text-center">
              <h2 className="w3_head">Skills</h2>
            </div>
          </div>
          <div>
          
          <div class="col-md-9 skills-left bar_group group_ident-1" style={{marginLeft: "3%", boxSizing:"border-box" } }>

          <div className = "headline">Softwares Proficient</div>
          <div></div>
					
					<p class="b_label">Adobe Lightroom</p><div class="bar_group__bar thin" label="Lorem ipsum &nbsp;&nbsp; 80%" value="200" style={{width: "90%"}}></div>
					<p class="b_label">Adobe Photoshop</p><div class="bar_group__bar thin" label="Quis nostrud &nbsp;&nbsp; 100%" value="250" style={{width: "80%"}}></div>
					<p class="b_label">Snapseed</p><div class="bar_group__bar thin" label="Sed do eiusmod &nbsp;&nbsp; 72%" value="180" style={{width: "90%"}}></div>
					<p class="b_label">VSCO</p><div class="bar_group__bar thin" label="Ut enim adnim &nbsp;&nbsp; 88%" value="220" style={{width: "85%"}}></div>
				</div>
        </div>
        <div style={{marginLeft: "49px" } }>
          <div className = "headline row">Cameras Handeled</div>
          <div className="row">
          <div className="col-md-2">
          <img src="images/adobe/canon.png" style={{marginTop:"40%", width:"100%"}} />
          </div>
          <div className="col-md-2">
          <img src="images/adobe/nikon-logo-png.png" />
          </div>
          </div>
        </div>
          {/* <!-- contact --> */}
          <section className="wedo" id="contact">
            <h3 className="w3_head mb-5">Contact </h3>
            <p className="main_p mb-5  text-center mx-auto">

            </p>
            <div className="contact_grid_right mt-5 mx-auto text-center">
            <p class="font_8" style={{lineHeight:"1.7em"}}><span style={{letterSpacing:"0.05em"}}>Tel: +91-8225993666</span></p>
            <p class="font_8" style={{lineHeight:"1.7em"}}><span style={{letterSpacing:"0.05em"}}>Email Id: srivarnav@gmail.com</span></p>
            </div>
            <div className="cpy-right text-center">
              <div className="follow">
                <ul className="social_section_1info">
                  <li>
                    <a onClick={this.onClickFacebook}>
                      <span className="fa fa-facebook" id="facebook" style={{ color: "white" }} ></span>
                    </a>
                  </li>
                  <li>
                    <a onClick={this.onClickInsta}>
                      <span className="fa fa-instagram" id="instagram" style={{ color: "white" }} ></span>
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                © 2019 Srivarnav. All rights reserved | Design by Arnav Srivastava
            </p>
            </div>
          </section>
          {/* <!-- //contact --> */}
        </div>
      </div>
    );
  }
}

export default App;
