import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "../src/pages/Auth/Signin/index";
import Dashboard from "../src/pages/Dashboard";
import ProtectedRoute from "../src/pages/ProtectedRoute";

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Navbar/>}>
                        <Route path="login" element={<SignIn/>}/>
                        <Route path="dashboard"
                               element={
                                   <ProtectedRoute>
                                       {<Dashboard/>}
                                   </ProtectedRoute>
                               }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
