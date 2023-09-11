import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
