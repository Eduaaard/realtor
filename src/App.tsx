import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./Pages/MainPage/MainPage";
import { ProductPage } from "./Pages/ProductPage/ProdictPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>
  },
  {
    path: "/Product",
    element: <ProductPage/>
  }
]);

const App: React.FC = () => {
  return (
          <div className="App"><RouterProvider router={routerConfig}/></div>
          // <h1>Hello</h1>
  );
};


export default App