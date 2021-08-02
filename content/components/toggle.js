import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHtmlParser from 'react-html-parser';

const items = [
  {
    uuid: 1,
    heading: '▷ Failure to Pay Forfeiture Suspensions',
    content:
      '<b>Failure to Pay Forfeiture (FPF) suspensions</b> are one-year suspensions for failure to pay a traffic ticket. This is the most common suspension. It is also the most frequent suspension among our clinic clients. Sometimes FPF suspensions are accompanied by other types of suspensions.',
  },
  {
    uuid: 2,
    heading: '▷ Driving Record Suspensions',
    content:
      'Another common suspension is the <b>Driving Record (DR) or “points,” suspension</b> This occurs when a driver accrues 12 or more demerit points (received due to traffic tickets) in any twelve-month period. The length of the suspension depends upon the total number of points the driver has and the type of license they hold.',
  },
  {
    uuid: 3,
    heading: '▷ Operating While Suspended Suspensions',
    content:
      'An <b>Operating While Suspended (OWS) suspension</b> is a discretionary, court-ordered suspension based on an operating while suspended conviction. It  can last up to six months.',
  },
  {
    uuid: 4,
    heading: '▷ Operating While Suspended and Operating After Revocation Revocations',
    content:
      'Similarly, there are revocations for <b>Operating While Suspended (OWS)</b> and <b>Operating After Revocation (OAR)</b>. These are discretionary, court-ordered revocations upon a fourth or subsequent OWS or OAR ticket within a five-year period. This revocation may last up to six months and will require SR-22, that is Safety Responsibility, insurance for three years from the end of the revocation.',
  },
  {
    uuid: 5,
    heading: '▷ Failure to Complete Course Suspension',
    content:
      'A <b>Failure to Complete Course (FCC) suspension</b> occurs when an individual fails to complete the Right of Way Course that is required after certain violations. This suspension can be for up to five years.',
  },
  {
    uuid: 6,
    heading: '▷ Failure to Pay Support Suspension',
    content:
      'A <b>Failure to Pay Support (FPS) suspension</b> occurs when a person fails to pay child support. These suspensions can last up to two years when court-imposed and up to five years when imposed by the Department of Workforce Development.',
  },
  {
    uuid: 7,
    heading: '▷ Safety Responsibility Suspension',
    content:
      'A <b>Safety Responsibility (SR) suspension</b> results from an uninsured accident, with damages greater than $1,000, where a driver fails to provide proof of insurance, to post a bond, or to prove a lack of fault for the accident. The length may be listed as indefinite, but it is actually one year. SR-22 insurance is required for three years from the end of the suspension.        ',
  },
  {
    uuid: 8,
    heading: '▷ Damage Judgment Suspension',
    content:
      'A <b>Damage Judgment (DJN) suspension</b> is a suspension due to a court judgment for damages greater than $500 from an uninsured accident. The suspension begins on the date of the court judgment. SR-22 insurance is required for 3 years from the end of the suspension.',
  },
  {
    uuid: 9,
    heading: '▷ Habitual Traffic Offender Revocation',
    content:
      'An <b>Habitual Traffic Offender (HTO) revocation</b>  is a revocation for four major violations or 12 minor violations in a five-year period. The length of the revocation is five years, but an occupational license can be granted through a court order after two years of the revocation. SR-22 insurance is required for three years from the end of the revocation.        ',
  },
  {
    uuid: 10,
    heading: '▷ Operating While Intoxicated Revocation',
    content:
      'An <b>Operating While Intoxicated (OWI) revocation</b> occurs for different lengths of time based upon the number of previous OWI tickets the individual has received.',
  },
  {
    uuid: 11,
    heading: '▷ Blood Alcohol Content Suspension',
    content:
      'A <b>Blood Alcohol Content (BAC) suspension </b> is an administrative suspension imposed by the DMV for a period of six months when a chemical test result is at least .08 after an OWI arrest.',
  },
];

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">SR-22 insurance</Popover.Title>
    <Popover.Content>
      SR-22 insurance is a requirement that a driver carry insurance of at least $25,000 for
      liability, $50,000 for personal injury or death, and $10,000 for property damage. Proof of
      insurance is filed by obtaining an SR-22 certificate issued by an insurance company licensed
      to do business in Wisconsin.
    </Popover.Content>
  </Popover>
);

class Toggle extends Component {
  render() {
    // assumes that show and active are classes for css
    return (
      <Accordion>
        {items
          .filter(item => item.uuid < 7)
          .map(item => (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={item.uuid}>
                {item.heading}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={item.uuid}>
                <Card.Body>{ReactHtmlParser(item.content)}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}

        {items
          .filter(item => item.uuid == 7)
          .map(item => (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={item.uuid}>
                {item.heading}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={item.uuid}>
                <Card.Body>
                  A{ReactHtmlParser(' <b>Safety Responsibility (SR) suspension</b>')}
                  results from an uninsured accident, with damages greater than $1,000, where a
                  driver fails to provide proof of insurance, to post a bond, or to prove a lack of
                  fault for the accident. The length may be listed as indefinite, but it is actually
                  one year.
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button variant="link">SR-22 insurance</Button>
                  </OverlayTrigger>
                  is required for three years from the end of the suspension.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}

        {items
          .filter(item => item.uuid > 7)
          .map(item => (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={item.uuid}>
                {item.heading}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={item.uuid}>
                <Card.Body>{ReactHtmlParser(item.content)}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
      </Accordion>
    );
  }
}
export default Toggle;
