import React from "react";
import Layout from "../components/Layout";
import "../pages/About.css";

function About() {
  return (
    <div className="container">
      <Layout>
        <div className="about">
          <h1>Despre istoria noastră</h1>
          <div className="row">
            <div className="col-6">
              <img src="https://i.imgur.com/ENu8n56.jpg" alt="" />
            </div>
            <div className="col-6">
              Toată lumea visează la o casa de vis. Prin intermediul nostru,
              Confort Suites, visele tale se pot îndeplini fără griiji. Suntem o
              companie relativ nouă pe piața imobiliară cu un precendetn de 2
              ani în trecut iar toți clienții noștri au fost super mulțumiti de
              profesionalismul întregii echipe!
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
