import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailsPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/details/:name" exact element={<DetailPage />} />
      <Route path="/*" exact element={<HomePage />} />
    </Routes>
  </>
);

export default App;
