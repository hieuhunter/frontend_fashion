import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

const Banner = () => {
  return (
    <div>
      {/*<!--header--> */}
      <Header />
      {/*header*/}

      {/*banner*/}
      <div className="banner">
        <div className="container">
          <section className="rw-wrapper">
            <h1 className="rw-sentence">
              <span>Fashion &amp; Beauty</span>
              <div className="rw-words rw-words-1">
                <span>Beautiful Designs</span>
                <span>Sed ut perspiciatis</span>
                <span> Totam rem aperiam</span>
                <span>Nemo enim ipsam</span>
                <span>Temporibus autem</span>
                <span>intelligent systems</span>
              </div>
              <div className="rw-words rw-words-2">
                <span>We denounce with right</span>
                <span>But in certain circum</span>
                <span>Sed ut perspiciatis unde</span>
                <span>There are many variation</span>
                <span>The generated Lorem Ipsum</span>
                <span>Excepteur sint occaecat</span>
              </div>
            </h1>
          </section>
        </div>
      </div>
      {/*//banner*/}

      {/*content*/}
      <Content />
      {/*//content*/}

      {/*footer*/}
      <Footer />
      {/*//footer*/}
    </div>
  );
};
export default Banner;
