import "./App.css";
import { Header, Chat } from "./components";


function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Chat />
    </div>
  );
}

export default App;