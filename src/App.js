import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [searchField, setSearchField] = useState("");
  // state variables

  // fetch data from api everytime the app is rerender
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setCards(data));
  });

  // filter algo to support searching feature
  const filterCards = cards.filter(card =>
    card.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const changeHandler = e => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar placeholder="Search Here!" handleChange={changeHandler} />
      <CardList monsters={filterCards} />
    </div>
  );
}

export default App;
