import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Componenet/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Footer from "./Componenet/Footer"
import ProductDetails from "./Pages/ProductDetail"
import BuyPage from "./Pages/BuyPage"
import SellerDashboard from "./Pages/SellerDashboard"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/buy" element={<BuyPage />}/>
      <Route path="/dashboard" element={<SellerDashboard />}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
