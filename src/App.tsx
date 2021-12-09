import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryFinder from "./components/CountryFinder/CountryFinder";
import CountryDetail from "./components/CountryDetail/CountryDetail";

export const App: React.FC = () => (
  <>
    <Header title={"Crehana Frontend Test"} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryFinder />} />
        <Route
          path="/detail/:name/:code/:currency/:continentName/:capital"
          element={<CountryDetail />}
        />
      </Routes>
    </BrowserRouter>
  </>
);
