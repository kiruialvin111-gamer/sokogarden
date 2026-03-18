import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'
import GetProducts from './components/Getproducts';
import AddProducts from './components/Addproducts';
import Mpesapayments from './components/Mpesapayments';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (

    <Router>


    <div className="App">
      <header className="App-header">
        <h1>Sokogarden -Buy & Sell Goods Online</h1>
      </header>
      <nav>

      
      <Link to='/signup' className='btn btn-success text-white m-4 btn-outline-info'>SignUp</Link>
      <Link to='/signin' className='btn btn-success text-white m-4 btn-outline-info'>Signin</Link>
      <Link to='/' className='btn btn-success text-white m-4 btn-outline-info'>Get Products</Link>
      <Link to='/addproducts' className='btn btn-success text-white m-4 btn-outline-info'>Add Products</Link>
      



      </nav>

    <Routes>
      <Route path='/' element={<GetProducts/>}/>
      <Route path='/addproducts' element={<AddProducts/>}/>
      <Route path='/mpesa' element={<Mpesapayments/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
      

    </div>
    
    </Router>
  );
}

export default App;
