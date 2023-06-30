import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchGithup from './components/form/SearchGithup';
import Profile from './components/profile/Profile';
const App = () => {
  
  return (
    <div className="gethup">
      <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchGithup />} />
          <Route path='user/*'  element={<Profile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
      </div>

    </div>
  )
}
export default App;