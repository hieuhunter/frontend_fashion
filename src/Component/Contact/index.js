import React from "react";
import Layout from "../Layout";

const Contact = () => {
  return (
    <Layout>
      <div>
        <div className="banner-top">
          <div className="container">
            <h1>Contact</h1>
            <em />
            <h2>
              <a href="index.html">Home</a>
              <label>/</label>Contact
            </h2>
          </div>
        </div>
        <div className="contact">
          <div className="contact-form">
            <div className="container">
              <div className="col-md-6 contact-left">
                <h3>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
                </h3>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas. At vero eos et accusamus et iusto odio
                  dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas.At vero eos et
                  accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et
                  quas.{" "}
                </p>
                <div className="address">
                  <div className=" address-grid">
                    <i className="glyphicon glyphicon-map-marker" />
                    <div className="address1">
                      <h3>Address</h3>
                      <p>Lorem ipsum dolor, TL 19034-88974</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className=" address-grid ">
                    <i className="glyphicon glyphicon-phone" />
                    <div className="address1">
                      <h3>Our Phone:</h3>
                      <h3>
                        <p>+123456789</p>
                      </h3>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className=" address-grid ">
                    <i className="glyphicon glyphicon-envelope" />
                    <div className="address1">
                      <h3>Email:</h3>
                      <p>
                        <a href="mailto:info@example.com"> Lorem@example.com</a>
                      </p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                  <div className=" address-grid ">
                    <i className="glyphicon glyphicon-bell" />
                    <div className="address1">
                      <h3>Open Hours:</h3>
                      <p>Monday-Friday, 7AM-5PM</p>
                    </div>
                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 contact-top">
                <h3>Want to work with me?</h3>
                <form>
                  <div>
                    <span>Your Name </span>
                    <input type="text" defaultValue />
                  </div>
                  <div>
                    <span>Your Email </span>
                    <input type="text" defaultValue />
                  </div>
                  <div>
                    <span>Subject</span>
                    <input type="text" defaultValue />
                  </div>
                  <div>
                    <span>Your Message</span>
                    <textarea defaultValue={" "} />
                  </div>
                  <label className="hvr-skew-backward">
                    <input type="submit" defaultValue="Send" />
                  </label>
                </form>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37494223.23909492!2d103!3d55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sin!4v1415776049771"
              title="Map location"
            />
          </div>
        </div>
        {/*//contact*/}
        {/*brand*/}
        <div className="container">
          <div className="brand">
            <div className="col-md-3 brand-grid">
              <img src="images/ic.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="images/ic1.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="images/ic2.png" className="img-responsive" alt="abc" />
            </div>
            <div className="col-md-3 brand-grid">
              <img src="images/ic3.png" className="img-responsive" alt="abc" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/*//brand*/}
      </div>
    </Layout>
  );
};
export default Contact;
