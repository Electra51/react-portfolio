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
          }
      ]
    },
]);
  
export default router;