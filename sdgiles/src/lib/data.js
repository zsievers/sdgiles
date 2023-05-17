/**
 * main logo
 * mission statement
 * headshot img
 * about me text
 * 4 pillars text
 * contact info
 */

import boeing from "../images/companies/boeing.png";
import bw from "../images/companies/bw.png";
import ics from "../images/companies/ICS.png";
import mmt from "../images/companies/mmt.png";
import spt from "../images/companies/spt.png";
// import bm
// import sp
// import pm
// import la

export const logos = [boeing, mmt, bw, spt, ics];

export const paragraph = [
  "For over 40 years Sam Giles has held leadership and management positions in the Automotive, Aerospace, Nuclear, Food, and Flexible Packaging industries. He has worked for both Fortune 500 Companies as well as small start-ups, having responsibility for a broad range of business functions including: Operations, Manufacturing, Engineering, Quality Assurance, Lean Manufacturing, Procurement, Strategic Planning, Facilities, and Program Management.",

  "He holds a Bachelor of Science in Mechanical Engineering, a Master of Science in Industrial Engineering, and Master of Business Administration, all from the University of Tennessee.",

  "This broad range of business experience coupled with extensive Lean expertise for making improvements in manufacturing and business processes and systems enables SDG Business Consulting Services LLC to support your business needs.",
];

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/services",
    text: "services",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const servicesText =
  "With four decades of experience, SDG Business Consulting Services can support your business needs in";

export const servicesLogos = {};

export const servicesContent = [
  {
    // logo:
    title: "Business Management",
    subtext:
      "Develop and implement new business processes and systems or streamline and improve existing ones.",
    points: [
      "New Business Start-Up",
      "Procurement & Supplier Development",
      "Manufacturing & Operations",
      "Performance Management",
      "Quality Management Systems",
    ],
  },
  {
    // logo:
    title: "Strategic Planning",
    subtext:
      "Develop an integrated plan that drives business success by linking the company vision and goals with proven strategies and the development of detailed action plans",
    points: [
      "Create desired company culture",
      "Engage and empower employees",
      "Connect the 'How' to the 'What'",
      "Drive continuous improvement",
    ],
  },
  {
    // logo:
    title: "Project Management",
    subtext:
      "Ensure project success through the use of proven project management tools and techniques",
    points: [
      "Facility Start-Up",
      "Equip. & System Installation",
      "Production Readiness",
      "Estimating & Scheduling",
      "Program / Project Reviews",
    ],
  },
  {
    // logo:
    title: "Lean Application",
    subtext:
      "Improve business performance by significantly reducing costs and lead times through the application of Lean improvement techniques",
    points: [
      "Value Stream Mapping",
      "Kaizen Events",
      "Standard Work",
      "Setup Improvement",
      "Visual Management",
    ],
  },
];
