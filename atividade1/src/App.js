import logo from "./logo.svg";
import "./App.css";
import Developer from "./components/developer";

function App() {
  const developers = [
    { name: "John", age: 22, country: "Australia" },

    { name: "Guilhermino", age: 20, country: "Brazil" },

    { name: "Maria", age: 28, country: "Colombia" },
  ];

  return (
    <div className="App">
      {developers.map((user) => {
        return (
          <Developer name={user.name} age={user.age} country={user.country} />
        );
      })}
    </div>
  );
}

export default App;
