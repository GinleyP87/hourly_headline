import './App.css';
import Admin from './components/Admin';
import NewsToday from "./components/NewsToday"
import NavBar from "./components/NavBar"
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <NavBar/>
      <NewsToday />
      <Footer />
    </div>
  );
}

export default App;
