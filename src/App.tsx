import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import get from "./api/get";
import "./App.css";
import Details from "./components/Details";
import Search from "./components/Search";

function App() {
  const [chosenItem, setChosenItem] = useState<any>({});
  const [filmsResults, setFilmsResults] = useState<any>([]);

  useEffect(() => {
    setFilmsResults([])
    chosenItem?.films &&
      chosenItem.films.forEach(async (film: string) => {
        const res = await get(film, true);
        setFilmsResults((prev: any) => [...prev, res]);
      });
  }, [chosenItem.name]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search setChosenItem={setChosenItem} />} />
          <Route
            path="details"
            element={
              <Details filmsResults={filmsResults} chosenItem={chosenItem} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
