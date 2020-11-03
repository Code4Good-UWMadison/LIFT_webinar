import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const items = [
    {
        uuid: 1,
        heading: "Failure to Pay Forfeiture Suspensions",
        content: "'Failure to Pay Forfeiture (FPF) suspensions' are one-year suspensions for failure to pay a traffic ticket. This is the most common suspension, accounting for 59% of all suspensions in 2018. It is also the most frequent suspension among our clinic clients. Sometimes it is accompanied by additional suspensions and other types of suspensions.",
    },
    {
        uuid: 2,
        heading: "Driving Record Suspensions",
        content: "Another common suspension is the 'Driving Record (DR) or “points,” suspension' This occurs when a driver accrues 12 or more points in any twelve-month period. The length of the suspension depends upon the total number of points the driver has and the type of license they hold.        ",
    },
    {
        uuid: 3,
        heading: "Operating While Suspended Suspensions",
        content: "An 'operating While Suspended (OWS) suspension' is a discretionary court-ordered suspension based on an operating while suspended conviction. These can last up to six months.        ",
    },
    {
        uuid: 4,
        heading: "Operating While Suspended and Operating After Revocation Revocations",
        content: "Similarly, there are revocations for 'Operating While Suspended (OWS)' and 'Operating After Revocation (OAR)'. These are discretionary, court-ordered revocations upon a fourth or subsequent OWS or OAR ticket within a five-year period. This revocation may last up to six months and will require SR-22, that is Safety Responsibility, insurance for three years from the end of the revocation.        ",
    },
    {
        uuid: 5,
        heading: "Failure to Complete Course Suspension",
        content: "A 'Failure to Complete Course (FCC) suspension' occurs when an individual fails to complete the Right of Way Course that is required after certain violations. This suspension can be for up to five years.        ",
    },
    {
        uuid: 6,
        heading: "Failure to Pay Support",
        content: "A 'Failure to Pay Support (FPS) suspension' is due to a person’s failure to pay child support. These suspensions can last up to two years when court-imposed and up to five years when imposed by the Department of Workforce Development.",
    },
    {
        uuid: 7,
        heading: "Safety Responsibility Suspensions",
        content: "A 'Safety Responsibility (SR) suspension' is due to an uninsured accident, with damages greater than $1,000, where a driver fails to provide proof of insurance, to post a bond, or to prove a lack of fault for the accident. The length may be listed as indefinite, but it is actually one year. SR-22 insurance is required for three years from the end of the suspension.        ",
    },
    {
        uuid: 8,
        heading: "Damage Judgment Suspension",
        content: "A 'Damage Judgment (DJN) suspension' is a suspension due to damages greater than $500 from an uninsured accident where the individual was found liable in court. The suspension begins on the date of the court judgment. SR-22 insurance is required for 3 years from the end of the suspension.        ",
    },
    {
        uuid: 9,
        heading: "Habitual Traffic Offender Revocation",
        content: "An 'Habitual Traffic Offender (HTO) revocation' is a revocation for four major violations or 12 minor violations in a five-year period. The length of the revocation is five years, but an occupational license can be granted through a court order after two years of the revocation. SR-22 insurance is required for three years from the end of the revocation.        ",
    },
    {
        uuid: 10,
        heading: "Operating While Intoxicated Suspensions",
        content: "An 'Operating While Intoxicated (OWI) revocation occurs for different lengths of time based upon the number of previous OWI tickets the individual has received.        ",
    },
    {
        uuid: 11,
        heading: "Blood Alcohol Content Suspension",
        content: "A 'Blood Alcohol Content (BAC) suspension' is an administrative suspension imposed by the DMV for a period of six months when a chemical test result is at least .08 after an OWI arrest.        ",
    },
    {
        uuid: 12,
        heading: "Driver’s License Removals to Address First",
        content: "There are three types of driver’s license removals that must be dealt with prior to any other suspension or revocation: \n (1) 'Non-Compliance with Assessment Interview (NCI) revocation'. This revocation is due to failure to complete an alcohol assessment following an OWI conviction. The length of the revocation is indefinite and lasts until the assessment is completed.\n(2) 'Non-Compliance with Assessment Fee (NCF) suspension'. This suspension occurs due to failure to pay an alcohol assessment fee after receiving an OWI conviction. The length of the suspension is indefinite unless/until the assessment fee is paid.\n(3) 'Non-Compliance with Safety Plan (NCP) revocation'. This revocation is due to failure to complete a driver safety plan following an OWI conviction. This revocation is indefinite until the Safety Plan is completed.",
    },

];

class Toggle extends Component {
  render() {
    // assumes that show and active are classes for css
    return (
      <Accordion allowMultipleExpanded>
        {items.map(item => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
}
export default Toggle;
