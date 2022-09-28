import "./App.css";
import { useState, useEffect } from "react";
import {SearchBar} from './components/search-bar/search-bar.component'
import {CardList} from './components/card-list/card-list.component'
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
    card.username.toLowerCase().includes(searchField.toLowerCase())
  );

  // eventhandler to update searchField with search input from users
  const changeHandler = e => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Card Search</h1>
      <SearchBar placeholder="Search Here!" handleChange={changeHandler} />
      <CardList cards={filterCards} />
    </div>
  );
}

export default App;
