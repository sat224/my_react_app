import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import TodoApp from "./components/TodoApp";
import Container from "./components/Container";

function App() {
  return (
    <center className="">
      <Navbar />
      <Container>
        <TodoApp />
      </Container>
    </center>
  );
}

export default App;
