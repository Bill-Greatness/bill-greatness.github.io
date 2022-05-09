import me from "./me.png";
import mongo from "./mongodb.jpg";
import node from "./nodejs.png";
import firebase from "./firebase.png";
import react from "./react.png";
import sql from "./sql.png";
import golang from "./go.png";
import tailwind from "./tailwind.png";
import semantic from "./semantic.png";
import next from "./next.png";
import project from "./project.png";
import access from "./access.png";
export { me, mongo, node, firebase, react, project, access };

export const data = [
  {
    img: react,
    item: "React",
  },
  {
    img: semantic,
    item: "Semantic UI",
  },
  {
    img: tailwind,
    item: "Tailwind Css",
  },
  {
    img: next,
    item: "NextJs",
  },
  {
    img: golang,
    item: "Golang",
  },
  {
    img: node,
    item: "NodeJs",
  },
  {
    img: mongo,
    item: "Mongo DB",
  },
  {
    img: firebase,
    item: "Firebase",
  },
  {
    img: sql,
    item: "MySQL",
  },
];

export const projects = [
  {
    meta: "My Startup",
    header: "Logic Kids Ghana",
    content: `Training kids to code... Wish me success!😊`,
    link: "https://thelogickids.com",
  },
  {
    header: "JSON Samples Generator",
    meta: "Hobby Project (Python)",
    content: " Generate fake samples for projects",
    link: "https://github.com/bill-greatness/generate-samples",
  },
  {
    header: "Greater Heights School",
    meta: "Freelance (ReactJs)",
    content: "Work in progress about (75%) done",
    link: "https://g-heights.web.app",
  },
  {
    header: "JSON Samples API",
    meta: "Hobby Project (Golang & Gin)",
    content: "Query API for sample JSON samples",
    link: "https://github.com/bill-greatness/generate-json-samples",
  },
  {
    meta: "Freelance (React & Node)",
    header: "Western Region School",
    content: "Basic Website with limited features!",
    link: "https://wrisgh.com",
  },
  {
    meta: "Joint Project (React & Firebase)",
    header: "Eyepa Stores",
    content: `A collaborative Project.`,
    link: "https://github.com/bill-greatness/eyepa-project",
  },
];

export const schoolsx = [
  {
    name: "Administrator",
    link: "https://admin.thelogickids.com",
    description: `Registration,messaging, visualization,generate PDF...`,
    screens: "All Screens",
    tech: "React & Firebase",
    cred: {
      accessCode: "GUESTUSER",
      mail: "admin@logickids.com",
      pwd: "gue$tU$er",
    },
  },
  {
    name: "Accountant",
    link: "https://accounts.thelogickids.com",
    description: `Finance reports,prepare and print payslips...`,
    tech: "React & Firebase",
    screens: "All Screens",
    cred: {
      accessCode: "N/A",
      mail: "admin@logickids.com",
      pwd: "gue$tU$er",
    },
  },
  {
    name: "Staff",
    link: "https://staff.thelogickids.com",
    description: `Mark attendance,exams reports, give
		assignments...`,
    tech: "React, Firebase",
    screens: "All Screens",
    cred: {
      accessCode: "N/A",
      mail: "LOGIC-ST-001",
      pwd: "gue$tU$er",
    },
  },
  {
    name: "Student",
    link: "https://portal.thelogickids.com",
    description: `Timetables, reports, news, assignments, fees history...`,
    tech: "React, Firebase",
    screens: "Mobile Only",
    cred: {
      accessCode: "N/A",
      mail: "LOGIC-00-01",
      pwd: "gue$tU$er",
    },
  },
];
