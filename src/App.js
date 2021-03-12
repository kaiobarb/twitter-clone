import './App.css';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
