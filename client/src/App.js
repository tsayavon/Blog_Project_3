import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home.jsx"
import Single from "./pages/single/Single.jsx"
import Write from "./pages/write/Write.jsx"
import Settings from "./pages/settings/Settings"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/register' element={user ? <Home /> : <Register />} />
                <Route path='/login' element={user ? <Home /> : <Login />} />
                <Route path='/write' element={user ? <Write /> : <Register />} />
                <Route path='/settings' element={user ? <Settings /> : <Register />} />
                <Route path='/post/:postId' element={<Single />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;