import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import CustomTooltip from '../../components/customTooltip';
import CustomButton from '../../components/customButton';

const Tooltip = () => (
  <div>
    <h2>
      Tooltip
    </h2>
    <p>This page contains Modal Rakyat standardized controls for tooltip
    </p>
    <Row>
      <Col xs="12" sm="12" md="12" lg="6" >
        <p><strong>Customize tooltip position</strong></p>
        <CustomTooltip tooltip="This is top tooltip" placement="top">
          <CustomButton id="tooltip1" size="medium" type="primary">
              Top
          </CustomButton>
        </CustomTooltip>
        <CustomTooltip tooltip="This is bottom tooltip" placement="bottom">
          <CustomButton id="tooltip2" size="medium" type="primary">
              Bottom
          </CustomButton>
        </CustomTooltip>
        <CustomTooltip tooltip="This is left tooltip" placement="left">
          <CustomButton id="tooltip3" size="medium" type="primary">
              Left
          </CustomButton>
        </CustomTooltip>
        <CustomTooltip tooltip="This is right tooltip" placement="right">
          <CustomButton id="tooltip4" size="medium" type="primary">
              Right
          </CustomButton>
        </CustomTooltip>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col xs="12" sm="12" md="12" lg="6" >
        <p><strong>Customize tooltip target</strong><br />
          <small>Tooltip target is unlimited to every HTML tag/element</small>
        </p>
        <div>
          <small>Icon:&nbsp;</small>
          <CustomTooltip tooltip="This is tooltip on icon" placement="top">
            <FontAwesomeIcon id="tooltip5" icon={faInfoCircle} />
          </CustomTooltip>
        </div>
        <div>
          <small>Plain text/label:&nbsp;</small>
          <CustomTooltip tooltip="This is tooltip on label" placement="top">
            <label id="tooltip6"><strong>Hover me!</strong></label>
          </CustomTooltip>
        </div>
      </Col>
    </Row>
  </div>
);

export default Tooltip;
