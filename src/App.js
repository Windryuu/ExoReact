import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
