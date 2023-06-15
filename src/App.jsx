import "./App.css";
import Job from "./Components/JobDiv/Job";
import Nav from "./Components/NavBar/Nav";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Job />
      <Value />
    </>
  );
}

export default App;
