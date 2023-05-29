import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiAmazonaws,
} from "react-icons/si";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://code.visualstudio.com/" target={"_blank"}>
        <SiVisualstudiocode />
        <p>Visualstudio</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://www.postman.com/" target={"_blank"}>
        <SiPostman />
        <p>Postman</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://aws.amazon.com/free/?trk=09863622-0e2a-4080-9bba-12d378e294ba&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|AWS|Core|IN|EN|Text&s_kwcid=AL!4422!3!453325184866!e!!g!!amazon%20aws&ef_id=EAIaIQobChMIhJmJ8ce89wIVmlpgCh0KowkQEAAYASAAEgJL9vD_BwE:G:s&s_kwcid=AL!4422!3!453325184866!e!!g!!amazon%20aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all" target={"_blank"}>
        <SiAmazonaws />
        <p>Amazonaws</p>
        </a>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://www.salesforce.com/in/form/demo/platform-heroku/?d=7013y0000022Se2AAE&nc=7013y000002Qp9QAAS&utm_source=google&utm_medium=sem&utm_campaign=in_br_itlobcon&utm_content=exact_7013y0000022se2aaebr-google-/form/demo/platform-heroku/&ef_id=EAIaIQobChMIu7zciMi89wIVGD5gCh3GgwS-EAAYASAAEgJYu_D_BwE:G:s&s_kwcid=AL!4720!3!592749580290!e!!g!!heroku&gclid=EAIaIQobChMIu7zciMi89wIVGD5gCh3GgwS-EAAYASAAEgJYu_D_BwE" target={"_blank"}>
        <SiHeroku />
        <p>Heroku</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://vercel.com/guides/deploying-react-with-vercel" target={"_blank"}>
        <SiVercel />
        <p>Vercel</p>
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href = "https://www.netlify.com/" target={"_blank"}>
        <SiNetlify />
        <p>Netlify</p>
        </a>
      </Col>
    </Row>
  );
}

export default ToolStack;