import './App.css';
import { CompanySidebar, AnalyticsSidebar, TwitterSidebar } from "./components/"
function App() {
  return (
    <div className="App">
      <div className='App-header'>
            <div className='w-1/5 bg-slate-500'>
              <CompanySidebar/>
            </div>
            <div className='w-2/5'>
              <AnalyticsSidebar/>
            </div>
            <div className='w-2/5 bg-neutral-600'>
              <TwitterSidebar/>
            </div>
          </div>
    </div>
  );
}

export default App;
