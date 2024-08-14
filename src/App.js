import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar';
import News from './Components/news';
import Fetchnews from './Components/fetchnewsapi';

function App() {
  let pageNo=1;
  const apiKey = "7349b951d9f64dac9942febf7b9ecfe3";
  const pageSize=5;
  return (
    <>
      

      <Navbar/>
      <Fetchnews apiKey={apiKey} pageNo={pageNo} pageSize={pageSize}/>
      
    </>
    
    
  );
}

export default App;
