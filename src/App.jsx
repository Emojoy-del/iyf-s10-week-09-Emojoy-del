import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
