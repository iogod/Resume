
import USC from "../media/USC.jpg";
import MSU from "../media/morganstate.jpg";
import GPS from "../media/gps.jpg";
import DDG from "../media/ddg.jpg";

const experience = {
  exp: [
    {
      university: "Morgan State University",
      role: "BS Electrical Engineering",
      city: "Baltimore",
      state: "Maryland",
      description:
        " Bachelors of Science Electrical Engineering with a focus on communication systems",
      span: "2014",
      image: MSU,
    },
    {
      university: "University of Southern California",
      role: "MS Systems Engineering",
      city: "Los Angeles",
      state: "California",
      description:
        "Masters of Science Systems Engineering focusing on system architecture, requirements analysis, and system modeling",
      span: "2016",
      image: USC,
    },
    {
      university: "Johns Hopkins University APL",
      city: "Laurel",
      state: "Maryland",
      role: "Systems Engineer",
      span: "2017-2019",
      image: GPS,
      description:
        "Global Positioning System (GPS) hot start system upgrade in support of the US Navy's missile guidance. Decomposed high-level requirements to a functional sub-system design. Managed a 3-5 engineering team to conceptualize, design lower levels, and trace requirements to implementation. GPS and RF uplink hardware-in-the-loop testing. Reported discoveries to Missile Defense Agency and external sponsors",
    },
    {
      university: "Johns Hopkins University APL",
      city: "Laurel",
      state: "Maryland",
      role: "Software Developer/Data Analyst",
      span: "2019- Current",
      image: DDG,
      description:
        "Developed / Collaborated on test and evaluation visualization tools in support of US Navy Destroyer combat system requirement verification. Utilized aforementioned software package for on-site test and evaluation for go / no-go recommendation to Chief Scientist on live fire missile exercises.",
    },
  ],
};

export default experience;
