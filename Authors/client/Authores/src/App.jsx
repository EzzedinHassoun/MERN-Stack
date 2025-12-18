import './App.css';
import UpdateAuthor from './components/UpdateAuthor';
import CreateAuthor from './components/CreateAuthor';
import DisplayAuthor from './components/DisplayAuthors';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="container">
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path="/" element={<><DisplayAuthor /></>} />
                <Route path="/edit/:id" element={<UpdateAuthor />} />
                <Route path="/create/author" element={<CreateAuthor />} />
            </Routes>
        </div>
    );
};

export default App;
