import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from "./components/Body";
import Watch from "./components/Watch"
import Maincontainer from './components/Maincontainer';
import Login from './components/Login';
import SignUp from './components/SignUp';
const appRouter = createBrowserRouter([
  {path:"/",
    element:<App />,
    children:[
      {path:"/",
        element:<Body />,
        children:[{
          path:"/maincontainer",
        element:<Maincontainer />},
        ]
      },
      {path:"/watch",
        element:<Watch />
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp />
      }
    ]
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
