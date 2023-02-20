
import './App.css';
import Leftnav from './components/Leftnav';
import Rightnav from './components/Rightnav';
import Navbar from './components/NavBar';
import PostDisplay from './components/PostDisplay';
import Footer from './components/Footer';
import Login from ''


function App() {
  return (
    <div className="App">
      <Navbar />
      <Leftnav/>
      <PostDisplay/>
      <Login />
      <Rightnav/>
      <Footer />
    </div>
  );
}

export default App;
