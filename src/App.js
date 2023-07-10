import Home from "./components/Home";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tecnologies from "./components/Tecnologies";
import DataStructure from "./components/DataStructures.js/DataStructure";
import Singlelist from "./components/DataStructures.js/Singlelist";
import Doublelist from "./components/DataStructures.js/Doublelist";
import Circularist from "./components/DataStructures.js/Circularlist";
import Binarytree from "./components/DataStructures.js/Binarytress";
import Main from "./components/Main";
import BinarySearchTree from "./components/DataStructures.js/BinarySearchTree";
import Insertion from "./components/DataStructures.js/Insertionsort";
import Selection from "./components/DataStructures.js/Selection";
import Bubble from "./components/DataStructures.js/Bubblesort";
import React from "./components/React/React";
import Intro from "./components/React/Intro";
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "./AuthContext";
import ReactComponent from "./components/React/ReactComponent";
import Merge from "./components/DataStructures.js/Merge";
import ReactProps from "./components/React/ReactProps";
import Routing from "./components/React/Routing";
import ReactFroms from "./components/React/ReactFroms";
import ReactHooks from "./components/React/ReactHooks";
import Lifecycle from "./components/React/Lifecycle";
import ContactPage from "./components/Contactpage";
import ServicePage from "./components/Servicepage";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/services" element={<ServicePage />} />

              <Route path="/reactcourse" element={<React />} />
              <Route path="/reactintro" element={<Intro />} />
              <Route path="/reactcomponents" element={<ReactComponent />} />
              <Route path="/merge" element={<Merge />} />
              <Route path="/home" element={<Home />} />
              <Route path="/reactprops" element={<ReactProps />} />
              <Route path="/routing" element={<Routing />} />
              <Route path="/reactforms" element={<ReactFroms />} />
              <Route path="/hooks" element={<ReactHooks />} />
              <Route path="/lifecycle" element={<Lifecycle />} />
              <Route path="/contactus" element={<ContactPage />} />

              <Route path="/dsconcepts" element={<DataStructure />} />
              <Route path="/singlelist" element={<Singlelist />} />
              <Route path="/doublelist" element={<Doublelist />} />
              <Route path="/circularlist" element={<Circularist />} />
              <Route path="/tree" element={<Binarytree />} />
              <Route path="/btree" element={<BinarySearchTree />} />
              <Route path="/insertionsort" element={<Insertion />} />
              <Route path="/selectionsort" element={<Selection />} />
              <Route path="/bubblesort" element={<Bubble />} />

              <Route path="/tech" element={<Tecnologies />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
