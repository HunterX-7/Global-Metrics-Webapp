import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailsPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:name" element={<DetailPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  </>
);

export default App;
