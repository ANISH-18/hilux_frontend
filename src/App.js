import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
// import Topbar from "./components/Topbar";
import Navigation from "./components/Navigation";

import Aboutus from "./components/Aboutus";
import Products from "./components/Products";

import CATEGORY_ONE from "./components/Table/Category_One";
import CATEGORY_TWO from "./components/Table/Category_Two";
import CATEGORY_THREE from "./components/Table/Category_Three";
import CATEGORY_FOUR from "./components/Table/Category_Four";
import CATEGORY_FIVE from "./components/Table/Category_Five";
import CATEGORY_SIX from "./components/Table/Category_Six";
import CATEGORY_SEVEN from "./components/Table/Category_Seven";
import CATEGORY_EIGHT from "./components/Table/Category_Eight";
import CATEGORY_ELEVEN from "./components/Table/Category_Eleven";
import CATEGORY_THIRTEEN from "./components/Table/Category_Thirteen";
import CATEGORY_FOURTEEN from "./components/Table/Category_Fourteen";
import CATEGORY_FIFTEEN from "./components/Table/Category_Fifteen";
import CATEGORY_SIXTEEN from "./components/Table/Category_Sixteen";
import CATEGORY_SEVENTEEN from "./components/Table/Category_Seventeen";
import CATEGORY_EIGHTEEN from "./components/Table/Category_Eighteen";
import CATEGORY_NINETEEN from "./components/Table/Category_Nineteen";
import CATEGORY_TWENTY from "./components/Table/Category_Twenty";
import CATEGORY_TWELVE from "./components/Table/Category_Twelve";

import { useEffect } from "react";
import Foot from "./components/Foot";
import Contact from "./components/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Topbar /> */}
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/category_one" element={<CATEGORY_ONE />} />
          <Route path="/category_two" element={<CATEGORY_TWO />} />
          <Route path="/category_three" element={<CATEGORY_THREE />} />
          <Route path="/category_four" element={<CATEGORY_FOUR />} />
          <Route path="/category_five" element={<CATEGORY_FIVE />} />
          <Route path="/category_six" element={<CATEGORY_SIX />} />
          <Route path="/category_seven" element={<CATEGORY_SEVEN />} />
          <Route path="/category_eight" element={<CATEGORY_EIGHT />} />

          <Route path="/category_eleven" element={<CATEGORY_ELEVEN />} />
          <Route path="/category_twelve" element={<CATEGORY_TWELVE />} />
          <Route path="/category_thirteen" element={<CATEGORY_THIRTEEN />} />
          <Route path="/category_fourteen" element={<CATEGORY_FOURTEEN />} />
          <Route path="/category_fifteen" element={<CATEGORY_FIFTEEN />} />
          <Route path="/category_sixteen" element={<CATEGORY_SIXTEEN />} />
          <Route path="/category_seventeen" element={<CATEGORY_SEVENTEEN />} />
          <Route path="/category_eighteen" element={<CATEGORY_EIGHTEEN />} />
          <Route path="/category_nineteen" element={<CATEGORY_NINETEEN />} />
          <Route path="/category_twenty" element={<CATEGORY_TWENTY />} />

          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
