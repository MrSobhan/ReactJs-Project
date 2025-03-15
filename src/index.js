import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "./index.css";

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
// import App from "./DashBoardFullAdmin/frontend/App";
// import App from "./Tichy/App";
// import App from "./AmoHasan/App";
// import App from "./MovieApp/App";
// import App from "./Tailwindcss_Project/App";
import App from "./CarRental/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <StrictMode>
//       <App />
//     </StrictMode>
//   </BrowserRouter>
// )