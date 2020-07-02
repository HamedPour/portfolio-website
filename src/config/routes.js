// views
import Home from "../views/Home";
import About from "../views/About";
import Education from "../views/Education";
import Community from "../views/Community";

export default [
  {
    path: "/portfolio-website",
    name: "HomePage",
    linkName: "Projects",
    component: Home,
    exact: true,
  },
  {
    path: "/portfolio-website/education",
    name: "EducationPage",
    linkName: "Education",
    component: Education,
    exact: false,
  },
  {
    path: "/portfolio-website/about",
    name: "AboutPage",
    linkName: "About",
    component: About,
    exact: false,
  },
  {
    path: "/portfolio-website/community",
    name: "CommunityPage",
    linkName: "Community",
    component: Community,
    exact: false,
  },
];
