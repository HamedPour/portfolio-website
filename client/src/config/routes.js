// views
import Home from "../views/Home";
import About from "../views/About";
import Education from "../views/Education";
import Community from "../views/Community";

export default [
  {
    path: "/",
    name: "HomePage",
    linkName: "Works",
    component: Home,
    exact: true,
  },
  {
    path: "/education",
    name: "EducationPage",
    linkName: "Education",
    component: Education,
    exact: false,
  },
  {
    path: "/about",
    name: "AboutPage",
    linkName: "About",
    component: About,
    exact: false,
  },
  {
    path: "/community",
    name: "CommunityPage",
    linkName: "Community",
    component: Community,
    exact: false,
  },
];
