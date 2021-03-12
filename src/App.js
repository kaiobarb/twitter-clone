import './App.css';
import Sidebar from './components/Sidebar';
import TweetBox from './components/TweetBox';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
