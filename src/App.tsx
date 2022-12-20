import "./App.css";
import Header from "./components/Header/Header";
import { useAppSelector } from "./hooks/storeHook";

function App() {
  const { darkTheme } = useAppSelector((state) => state);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <Header />
    </div>
  );
}

export default App;
