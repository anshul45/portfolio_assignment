import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Page404 from './components/404/Page404';
import BlogDetails from './components/Blog/BlogDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Layout2 from './components/Layout/Layout2';

function App() {
  const [dynamicData,setDynamicData] = useState();
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
    const fetchedData = await data.json();
    setDynamicData(fetchedData.user)
  } 

  useEffect (() => {
    fetchData()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home fetchedData={dynamicData} />} />
          <Route path="home-v3" element={<Home3 fetchedData={dynamicData} />} />
          <Route path="home-v4" element={<Home4 fetchedData={dynamicData} />} />
          <Route path="*" element={<Page404 />} />
          <Route path="blog/blog-details" element={<BlogDetails />} />
        </Route>
        <Route path="/home-v2" element={<Layout2 userImg={dynamicData?.about?.avatar?.url} />}>
          <Route index element={<Home2 fetchedData={dynamicData} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
