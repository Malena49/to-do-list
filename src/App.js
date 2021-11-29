import tasks from './data/tasks';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';
function App() {
  const [addlist, setaddlist] = useState("")
  const [newlists, setnewlists] = useState(tasks)

 
  return (
    < div className="app">
  <Header addlist={addlist} setaddlist={setaddlist} tasks={tasks} newlists={newlists} setnewlists={setnewlists} />
   <Body newlists={newlists} setnewlists={setnewlists}/>
   <Footer/>
    </div>
  );
}
export default App;
