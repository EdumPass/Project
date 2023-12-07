import Header from './Header';
import Main_con from './Main_con';
import Sliderpage from './Sliderpage';
import Project_Details from './Project_Details';
import LoadingAnimation from './LoadingAnimation.jsx';
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
  const[pro_id,setpro_id]=useState()
  const[loading,setloading]=useState(true)
  const sliderimg = [img1, img2, img3];


  useEffect(() => {
    const fetchdata = async () =>
    {
      try{
        const res = await api.get('/projects' )
        setproject_data(res.data)
        console.log(project_data)
        
      }
      catch(err)
      {
        console.log(`Error: ${err.message}`)
  
      }
      finally
      {
        setloading(false)
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

  const project_des = (id) =>
  {
      setpro_id(id)
      
  }

  return (
    <>
    

    {loading ? (
      <LoadingAnimation /> // Show loading animation while data is being fetched
    ) : (
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
          <Route
            path="/projects"
            element={<Projects project_data={project_data} project_des={project_des} />}
          />
          <Route
            path="/projects/:projectId"
            element={<Project_Details project_data={project_data} pro_id={pro_id} />}
          />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </>
    )}
  </>
);
}
export default App;
