import Signup from "./components/Admin/signup";
/* import Home from "./components/home"; */
import Login from "./components/Admin/login";
import Dashboard from "./components/Admin/admin";
/* Service */
import Service from "./components/services/service";
import Roomadd from "./components/services/roomAdd";
import ADU from "./components/services/adu";
import Bathroom from "./components/services/bathroom";
import Kitchen from "./components/services/kitchenRemod";
import Design from "./components/services/designBuild";
import Outdoor from "./components/services/outdoor";
import Universal from "./components/services/universal";
import Commercial from "./components/services/commercial";
/*About*/
import About from "./components/about/about";
import Process from "./components/about/process";
import Testimonials from "./components/about/testimonials";
/*Gallery*/
import Gallery from "./components/gallery/gallery";
import GalleryProjects from "./components/gallery/galProjects";
import Project from "./components/gallery/project";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Ui/homepage";
import PageNotFound from "./components/Ui/pageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
/* contaCT US PAGE*/
import Contact from "./components/contactUs";
/* protected route for authentcaTION */
import ProtectedRoute from "./components/protectedRoute";
function App() {
  
  return (
    <div className="App">      
      <BrowserRouter>
      
          <Routes>
              <Route index element={<Homepage/>} />
              <Route path='/dashboard' element={<ProtectedRoute/>}>
                <Route path='/dashboard/*' element={<Dashboard/>}/>
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/service/roomadd" element={<Roomadd/>} />
              <Route path="/service/adu" element={<ADU/>} />
              <Route path="/service/bathroom" element={<Bathroom />} />
              <Route path="/service/kitchen" element={<Kitchen />} />
              <Route path="/service/design" element={<Design />} />
              <Route path="/service/outdoor" element={<Outdoor />} />
              <Route path="/service/universal" element={<Universal />} />
              <Route path="/service/commercial" element={<Commercial />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/process" element={<Process />} />
              <Route path="/about/testimonials" element={<Testimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:category" element={<GalleryProjects />} />
              <Route path="/gallery/:category/:_id" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<PageNotFound/>} />

              {/* <Route path="/test" element={<Home />} />
              <Route path="/project" element={<Projecttest />} /> */}
              {/* <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />}

                      <Route path="*" element={<NoPage />} />
                  </Route> */}
          </Routes>
      </BrowserRouter> 
       
    </div>
  );
}

export default App;
