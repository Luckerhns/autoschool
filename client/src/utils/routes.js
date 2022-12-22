import Autoschool from "../components/Autoschool/Autoschool";
import MainPage from "../components/Main/MainPage";
import Profile from "../components/Profile/Profile";
import AutoschoolBlank from "../components/SecondComponents/AutoschoolBlank/AutoschoolBlank";
import Registration from "../components/SecondComponents/Registration/Registration";
import {
  AUTOSCHOOL_ROUTE,
  AUTOSTUDENT_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from "./links";

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    element: <Registration />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Registration />,
  },
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: AUTOSCHOOL_ROUTE,
    element: <Autoschool />,
  },
];

export const loginRoutes = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
  },
  {
    path: PROFILE_ROUTE,
    element: <Profile />,
  },
  {
    path: AUTOSCHOOL_ROUTE,
    element: <Autoschool />,
  },
  {
    path: AUTOSTUDENT_ROUTE,
    element: <AutoschoolBlank />,
  },
];
