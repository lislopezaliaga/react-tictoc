import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate, Navigate, useParams, useLocation } from 'react-router-dom';

import { Provider } from 'react-redux';
import {store} from './store/index'

const Hello = () => {
  return (
    <div>
      <Link to="/videos">Ir a videos</Link>
      <a href='/videos'>Ir a videos tradicional</a>
    </div>
  )
}

const UsuariosAutlet = () => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate('/')
  }
  return (
    <>
      <h2>Hola autlet</h2>
      <button onClick={redirect}>Ir a home</button>
      <Outlet />
    </>
  )
}
const Videoshow = () => {
  let { id } = useParams();
  const location = useLocation();
  // history api
  const queryParams = new URLSearchParams(location.search)
  for (let p of queryParams) {
    console.log(p);
  }
  console.log(location.search);
  return (
    <p>{id}</p>
  )
}
const Error404 = () => {
  return (
    <>
      <Link to="/">Regresar al inicio</Link>
      <h1>Esta pagina aun no esta lista</h1>

    </>
  )
}
function App() {
  const isAuth = false;
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/videos" element={<Hello />} />
      </Routes> */}
      <Provider store={store}>
        <Routes>
          <Route path='/'></Route>

          <Route path='/usuarios' element={<UsuariosAutlet />}>
            <Route path="registro" element={<Hello />} />
            <Route path="login" element={<Hello />} />
            <Route path=":id" element={<Hello />} />
            <Route path=":id/videos" element={<Hello />} />
          </Route>


          <Route path='videos' element={isAuth ? <Navigate to='/' /> : <UsuariosAutlet />}>
            <Route path="/" element={<Hello />} />
            <Route path="nuevo" element={<Hello />} />
            <Route path=":id" element={<Videoshow />} />
          </Route>

          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
