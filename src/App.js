import { Container } from "react-bootstrap";
import { Navbare } from "./Compenentes/Navbare";
import { Mouvieslistes } from "./Compenentes/Mouvieslistes";
import { Onemouvies } from "./Compenentes/Onemouvies";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mouvies, setmouvies] = useState([]);
  const [pagecompte, setpagecompte] = useState(0);
  const getAll = async () => {
    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=f5a79b9b39eb9d40697de5c3dd90e916"
    );
    setmouvies(result.data.results);
    setpagecompte(result.data.total_pages);
  };
  useEffect(() => {
    getAll();
  }, []);
  const searche = async (word) => {
    if (word) {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=f5a79b9b39eb9d40697de5c3dd90e916&query=${word}&language=ar`
      );
      setmouvies(result.data.results);
      setpagecompte(result.data.total_pages);
    } else {
      getAll();
    }
  };
  const Getpage = async (page) => {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=f5a79b9b39eb9d40697de5c3dd90e916&page=${page}`
    );
    setmouvies(result.data.results);
  };

  return (
    <div className="App">
      <Navbare searche={searche} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Mouvieslistes
                  pagecompte={pagecompte}
                  mouvies={mouvies}
                  Getpage={Getpage}
                />
              }
            />
            <Route path="/mouvie/:id" element={<Onemouvies />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
