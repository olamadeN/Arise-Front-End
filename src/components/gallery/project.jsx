import './gallery.css';
import banner from '../../img/gallery/Gbanner.png';
import Nav from '../Ui/nav/nav';
import Footer from '../Ui/footer/footer';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Project = () => {
  const [project, setProject] = useState([]);
  const [data, setData] = useState([]);
  const { _id, category } = useParams();

  const [showLightbox, setShowLightbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => () => {
    setShowLightbox(true);
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  const changeImage = (direction) => {
    if (direction === 'prev') {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? project.length - 1 : prevIndex - 1));
    } else if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex === project.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    /* fetch(`http://127.0.0.1:5001/arise-backend/us-central1/app/admin/all_projects/${category}/${_id}`) */
    fetch(`https://ariseapi.onrender.com/admin/all_projects/${category}/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setProject(data.pictures);
      })
      .catch((err) => console.log(err, 'it has an error'));
  }, []);

  return (
    <>
      <Nav />
      <div className="sectStart">
        <section className="banner">
          <img src={banner} alt="gallery banner" />
          <div className="overlay">
            <div className="sbtxt">
              <h1>Our Gallery</h1>
            </div>
          </div>
        </section>
        <section className="sects galProject">
          <Link to={`/gallery/${data.category}`} className="back">
            <p className="goBack">GO BACK</p>
          </Link>
          <h2 className="projectName">{data.name}</h2>
          <div className="galGrids">
            {project.map((proj, index) => (
              <div className="galGrid" onClick={openLightbox(index)} key={proj.url}>
                <img
                  src={proj.url}
                  alt={`Image ${index + 1}`}
                  
                  className="galPics"
                />
              </div>
            ))}
          </div>
          <Modal
            show={showLightbox}
            onHide={closeLightbox}
            size="xl"
            centered
            dialogClassName="lightbox-modal"
          >
            <Modal.Body className="lightbox-modal-body">
              <img src={project[activeIndex]?.url} alt={`Image ${activeIndex + 1}`} className="img-fluid" />
              <div className="navigation-arrows">
                <Button variant="light" onClick={() => changeImage('prev')}>
                  <BsArrowLeft size={40} />
                </Button>
                <Button variant="light" onClick={() => changeImage('next')}>
                  <BsArrowRight size={40} />
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Project;
