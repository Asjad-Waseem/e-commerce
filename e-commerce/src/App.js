// Generic App CSS Import
import './App.css';

// Packages/Dependencies Installed
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages Import
import ProductsPage from './pages/productsPage/ProductsPage';

function App() {
  return (

    <Router>

        <div className="App">

            <Route exact path = "/" component = {ProductsPage} />    
             
        </div>

    </Router>
  );
}

export default App;
