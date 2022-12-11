import Blogs from "../Components/Blogs";
import Details from "../Components/Details";

import Home from "../Components/Home";
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
          {
            path: '/project/:id',
            element: <Details></Details>,
            loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`),
          },
          {
            path: '/blogs',
            element:<Blogs></Blogs>
      },
      ]
    },
]);
  
export default router;