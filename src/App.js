import classes from './App.module.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Qualifications from './components/Qualifications/Qualifications';
import Skills from './components/Skills/Skills';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
        theme="dark"
        />
      <main className={classes.App}>
        <Home />
        <Skills />
        <Portfolio />
        <Qualifications />
        <Contact />
        <Footer />
      </main>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
