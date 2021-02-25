import './App.css';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
    {/* Sidebar */}
    <Sidebar />
    <Feed />
    <Widgets />
    </div>
  );
}

export default App;
