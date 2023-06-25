import './App.css';
import './Media.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [trendingData, setTrendingData] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=c48d89287f66019415ad6c4881fc1b70")
      .then(res => res.json())
      .then(data => setTrendingData(data));
  }, []);

  const [popularData, setPopularData] = useState();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=c48d89287f66019415ad6c4881fc1b70")
      .then(res => res.json())
      .then(data => setPopularData(data));
  }, []);

  return (
    <div className="page_wrap _wrap">
      <Header />
      <main id="main" className='index font-face-inter' >
        <Banner />
        {
          trendingData ? <Trending data={trendingData!} /> : <></>
        }
        {
          popularData ? <Popular data={popularData} /> : <></>
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;


