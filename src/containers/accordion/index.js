import React from 'react';
import { Row, Col } from 'reactstrap';
import CustomAccordion from '../../components/customAccordion';
import CustomMediaAccordion from '../../components/customMediaAccordion';
import AccordionData from '../../components/customAccordionData';
import { accordionData1, accordionData2 } from '../../components/customMediaAccordionData';

const Accordion = () => (
  <div>
    <h2>
Accordion
    </h2>
    <p>This page contains Modal Rakyat standardized controls for accordion with its
   usage using dynamic data.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="4">
        <div className="standard-button">
          <div className="section-title">
            <p><strong>Specify size of accordion</strong></p>
            <small>size=&#34;medium&#34;</small>
            <CustomAccordion data={AccordionData} size="medium" />
            <small>size=&#34;large&#34;</small>
            <CustomAccordion data={AccordionData} size="large" />
          </div>
        </div>
      </Col>
      <Col xs="12" sm="12" md="12" lg="8">
        <div className="standard-button">
          <div className="section-title">
            <p><strong>Accordion with media</strong></p>
            <small>col=&#34;6&#34;</small>
            <CustomMediaAccordion data={accordionData1} col="6" />
            <br />
            <small>col=&#34;4&#34;</small>
            <CustomMediaAccordion data={accordionData2} col="4" />
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Accordion;
