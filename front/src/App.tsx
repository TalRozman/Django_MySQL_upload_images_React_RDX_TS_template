import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='App App-header'>
      <nav>
        <Link to="/Home">Home</Link> | <Link to="/Show">Show Gallery</Link> | <Link to="/Add">Add Images</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
