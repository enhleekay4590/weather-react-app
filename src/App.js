import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <Weather />
      </header>
      <footer>
        This project was coded by
        <a
          href="https://github.com/enhleekay4590"
          target="_blank"
          rel="noreferrer"
        >
          Minenhle Kubheka
        </a>
        , is
        <a
          href="https://github.com/enhleekay4590/weer-app-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
        and hosted on
        <a
          href="https://weer-app-project.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
