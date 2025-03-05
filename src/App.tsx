import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "./router/router";
import GlobalStyles from "./styles/GlobalStyles";
import "./styles/fonts.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
