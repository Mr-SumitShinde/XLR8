import './App.css';
import AppNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <HomePage/>
    </div>
  );
}

export default App;
