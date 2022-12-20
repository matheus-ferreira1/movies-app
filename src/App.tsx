import { useEffect } from "react";
import Header from "./components/Header/Header";

import { getMovies } from "./features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";

import "./App.css";

function App() {
  const { darkTheme } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-gray-50 min-h-screen px-4 lg:px-12 pb-20">
        <Header />
      </div>
    </div>
  );
}

export default App;
