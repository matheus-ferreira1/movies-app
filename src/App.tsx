import "./App.css";
import Header from "./components/Header/Header";
import { useAppSelector } from "./hooks/storeHook";

function App() {
  const { darkTheme } = useAppSelector((state) => state);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-gray-50 min-h-screen px-4 lg:px-12 pb-20">
        <Header />
      </div>
    </div>
  );
}

export default App;
