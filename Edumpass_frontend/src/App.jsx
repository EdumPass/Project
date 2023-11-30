import Header from './Header';
import Main_con from './Main_con';
import Sliderpage from './Sliderpage';
import Project_Details from './Project_Details';
import Footer from './Footer';
import Projects from './Projects';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect ,useState} from 'react';
import api from "./api/project.js"
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';




function App() {

  const [project_data,setproject_data]=useState([])
  const sliderimg = [img1, img2, img3];


  useEffect(() => {
    const fetchdata = async () =>
    {
      try{
        const res = await api.get('/projects')
        setproject_data(res.data)
        console.log(project_data)
      }
      catch(err)
      {
        console.log(`Error: ${err.message}`)
  
      }
    }
    fetchdata();
   
  },[])
  
  
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
     <Header />

      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sliderpage sliderimg={sliderimg} />
              <Main_con />
            </>
          }
        />
        <Route path="/projects" element={<Projects
           project_data ={project_data}
         />} />
        <Route path="/projects/:projectId" element={<Project_Details />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
     
  );
}

export default App;
