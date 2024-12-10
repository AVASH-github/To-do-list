import Header from "./Header.jsx"
import Footer from "./footer.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx"
import ToDoList from "./ToDoList.jsx";
import Counter from "./counter.jsx"
import Practice from "./Practice.jsx";
import Game from "./tic-tac-toe.jsx";
import GroceryForm from "./GroceryForm.jsx";

function App() {
 return (
  <>
  <Header />
 <Card /> 
 <Button />
 <Footer />
 <hr/>
 <hr/>

 <ToDoList />
<Counter/>
<Practice/>
<hr />

    
<Game />

 <hr />
 <GroceryForm/>
 
  </>
 );
}

export default App
