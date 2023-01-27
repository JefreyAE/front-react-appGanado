import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "./components/layoutComponents/footerComponent/Footer";

import Authentication from "./components/authComponent/Authentication";

import Login from "./components/loginComponents/Login";
import Main from "./components/mainComponents/Main";
import Animals from "./components/animalComponents/animals";
import AnimalIndex from "./components/animalComponents/animalIndex/animalIndex";
import AnimalDetail from "./components/animalComponents/animalDetail/animalDetail";
import AnimalAll from "./components/animalComponents/animalAll/animalAll";
import AnimalDead from "./components/animalComponents/animalDead/animalDead";
import AnimalRegister from "./components/animalComponents/animalRegister/animalRegister";

import NotFound from "./components/layoutComponents/notFoundComponent/NotFound";

class Router extends Component {
  render() {
    {
      /* CONFIGURAR RUTAS Y PÁGINAS */
    }

    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="container-fluid mt-2">
            <div className="justify-content-center">
                  <Routes>
                    <Route index element={<Login />} />
                    <Route element={<Authentication />}>
                      <Route path="/animal/*" element={<Animals />}>
                        <Route path="index" element={<AnimalIndex />} />
                        <Route path="register" element={<AnimalRegister />} />
                        <Route path="all" element={<AnimalAll />} />
                        <Route path="detail/:id" element={<AnimalDetail />} />
                        <Route path="dead" element={<AnimalDead />} />
                      </Route>
                      <Route path="/main/*" element={<Main />}>
                        <Route path="pp" element={<AnimalIndex />} />
                      </Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
              <footer id="footer" className="col-md-12">
                <Footer />
              </footer>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }

  NotFound() {
    return <>Ha llegado a una página que no existe</>;
  }
}

export default Router;
