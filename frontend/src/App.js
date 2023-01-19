import Header from "./components/Header";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div >
      <Header />
     <div className="container">
     <Home/>
     </div>
    </div>
  );
}

export default App;
