import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Register from "./Components/Register";
import ChatBot from "./Components/Chatbot";


const  App=() => (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Navigate to="/Register"/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/Register" element={<Register/>} />
      <Route exact path="/Chatbot" element={<ChatBot/>} />
      <Route exact path="/not-Found" element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
  </div>
)
export default App;
