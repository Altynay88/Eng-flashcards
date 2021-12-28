import Cardlist from "./components/cardlist";
import Menu from "./components/navbar";
import TrainingCard from "./components/training";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
      </header>
      <main>
        <Cardlist></Cardlist>
        <TrainingCard />
      </main>
      <footer className="cardFooter">© 2021 Englsih flashcards</footer>
    </div>
  );
}

export default App;
