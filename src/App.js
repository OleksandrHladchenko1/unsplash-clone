import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import MainPage from './pages/MainPage/MainPage';
import ImageDetailsPage from './pages/ImageDetailsPage/ImageDetailsPage';

import './App.scss';
import { ImageProvider } from './context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ImageProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/image/:imageId' element={<ImageDetailsPage />} />
          </Routes>
        </ImageProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
