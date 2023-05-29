import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello! My name is Shubham Singh. I am an independent developer & designer. I like many different directions related to the development of digital products.
            <br/>
            <br/>
          I loves to build user interfaces and develop them. Strong believer that deep user understanding leads to the most innovative products. I passionately love what I do. The digital world is still very young and it is developing very rapidly, so there are always discoveries in it.
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;