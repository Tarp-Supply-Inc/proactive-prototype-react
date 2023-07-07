import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactUs from "./components/ContactUs/ContactUs";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <HomePage/>
                    </>
                }/>

                <Route path="/services" element={
                    <>
                        <Services/>
                    </>
                }/>

                <Route path="/about" element={
                    <>
                        <AboutUs/>
                    </>
                }/>

                <Route path="/portfolio" element={
                    <>
                        <Portfolio/>
                    </>
                }/>

                <Route path="/contact-us" element={
                    <>
                        <ContactUs/>
                    </>
                }/>

            </Routes>

        </BrowserRouter>


    );
}

export default App;
