import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../components/customButton';

const Buttons = () => (
  <div>
    <h2>
      Buttons
    </h2>
    <p>This page contains Modal Rakyat standardized controls for standard
       button and other type of buttons.
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6">
        <div className="standard-button">
          <div className="section-title">
            <h4>Basic Button</h4>
            <p>Contains basic buttons with action</p>
            <br />
            <p><strong>Customize button size</strong></p>
            <Row>
              <Col xs="3">
                <CustomButton size="minimal" type="primary">
              Minimal
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="small" type="primary">
              Small
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="medium" type="primary">
              Medium
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="large" type="primary">
              Large
                </CustomButton>
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <p><small>size=&#34;minimal&#34;</small></p>
              </Col>
              <Col xs="3">
                <p><small>size=&#34;small&#34;</small></p>
              </Col>
              <Col xs="3">
                <p><small>size=&#34;medium&#34;</small></p>
              </Col>
              <Col xs="3">
                <p><small>size=&#34;large&#34;</small></p>
              </Col>
            </Row>
            <p><strong>Customize button type</strong></p>
            <Row className="mt-3">
              <Col xs="3">
                <CustomButton size="medium" type="primary">
              Primary
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="medium" type="secondary">
              Secondary
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="medium" type="dark">
              Dark
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="medium" type="outline">
              Outline
                </CustomButton>
              </Col>
            </Row>
            <Row>
              <Col xs="3">
                <p><small>type=&#34;primary&#34;</small></p>
              </Col>
              <Col xs="3">
                <p><small>type=&#34;secondary&#34;</small></p>
              </Col>
              <Col xs="3">
                <p><small>type=&#34;dark&#34;</small></p>
              </Col>
              <Col xs="3">
                <p><small>type=&#34;outline&#34;</small></p>
              </Col>
            </Row>
            <p><strong>Use custom content inside button</strong></p>
            <Row className="mt-3">
              <Col xs="3">
                <CustomButton size="minimal" type="primary">
                  <FontAwesomeIcon icon={faChevronRight} />
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="small" type="secondary">
                  <FontAwesomeIcon icon={faChevronRight} />
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="medium" type="dark">
                  <FontAwesomeIcon icon={faChevronRight} />
                </CustomButton>
              </Col>
              <Col xs="3">
                <CustomButton size="large" type="outline">
                  <FontAwesomeIcon icon={faChevronRight} />
                </CustomButton>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
      <Col xs="12" sm="12" md="12" lg="6" />
    </Row>
  </div>
);

export default Buttons;
