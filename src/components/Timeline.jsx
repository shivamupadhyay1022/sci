import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
    const WorkIcon = () => <></>;
  return (
    <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">SolCielo Innovacion</h3>
          <h4 className="vertical-timeline-element-subtitle">SaaS,CRM,AI/ML,Social Media Marketing service Provider</h4>
          <p>
            We hire Full Stack Developers, Android/ios Developers, Graphic Designers, Data Sceintists and Software developers.<br/>
            Interested ?
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">How to ?</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
            Register on the website and follow the instructions
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">What do I get?</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <p>Regular Freelance work based on your expertise, and maybe even an Internship Certificate, if you wish so.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<WorkIcon />}
        />
      </VerticalTimeline>
  )
}

export default Timeline