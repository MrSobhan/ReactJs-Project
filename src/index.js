import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// ? Project React

// import App from "./projects/test/App/App";
// import Counter from "./projects/counter/App/count";
// import Quiz from "./projects/Quiz/Quiz";
// import Ticket from "./projects/Ticket/Ticket";
// import App from "./projects/booklist/App";
// import App from "./projects/Shop/App";
// import App from "./projects/Todo/App";
// import App from "./projects/NoteApp/App";
// import App from "./projects/react-bootstrap/App";
// import BasicAccordion from "./projects/mui/App";
// import App from "./projects/Spa/App";
// import App from "./Tichy/App";
// import App from "./DashboardAdmin/App";
// import App from "./projects/CustomHooks/App";
// import App from "./projects/memo & useMemo & useCallback/App";
// import App from "./projects/useRef/App";
// import App from "./projects/pagination/App";
// import App from "./projects/exp-HOC/App";
// import App from "./menu-project/App";
// import App from "./projects/ContextApi/App";
// import App from "./ProductShop/App";
import App from "./DashBoardFullAdmin/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.querySelector("body"));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
