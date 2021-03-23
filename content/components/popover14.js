import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHtmlParser from 'react-html-parser';

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">shall</Popover.Title>
    <Popover.Content>In statutory language the word "shall" means "must."</Popover.Content>
  </Popover>
);

class Popover14 extends Component {
  render() {
    // assumes that show and active are classes for css
    return (
      <div>
        the court
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="link">shall</Button>
        </OverlayTrigger>
        make a finding of poverty if the person shows in an affidavit that:
      </div>
    );
  }
}
export default Popover14;
