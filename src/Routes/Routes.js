import Blogs from "../Components/Blogs";


import Home from "../Components/Home";
import ProjectDetailOne from "../Components/ProjectDetail/ProjectDetailOne";
import ProjectDetailThree from "../Components/ProjectDetail/ProjectDetailThree";
import ProjectDetailTwo from "../Components/ProjectDetail/ProjectDetailTwo";
import Main from "../LayOuts/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
          },
          // {
          //   path: '/project/:id',
          //   element: <Details></Details>,
          //   loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`),
          // },
          {
            path: '/blogs',
            element:<Blogs></Blogs>
          },
          {
            path: '/projectDetailOne',
            element:<ProjectDetailOne></ProjectDetailOne>
          },
          {
            path: '/projectDetailTwo',
            element:<ProjectDetailTwo></ProjectDetailTwo>
          },
          {
            path: '/projectDetailThree',
            element:<ProjectDetailThree></ProjectDetailThree>
          },
          {
            path: '/projectDetailFour',
            element:<ProjectDetailThree></ProjectDetailThree>
          }
          
      ]
    },
]);
  
export default router;