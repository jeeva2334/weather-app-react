import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import Search from './pages/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Search />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
