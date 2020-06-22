// views
import Home from "../views/Home";
import About from "../views/About";
import Education from "../views/Education";
import Community from "../views/Community";

export default [
  {
    path: "/",
    name: "HomePage",
    component: Home,
    exact: true,
  },
  {
    path: "/education",
    name: "EducationPage",
    component: Education,
    exact: false,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: About,
    exact: false,
  },
  {
    path: "/community",
    name: "CommunityPage",
    component: Community,
    exact: false,
  },
];
