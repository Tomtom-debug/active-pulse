import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  return (
    <div className="App">
      <div className='Content'>
        <h1>{title}</h1>
        <p>liked {likes} times</p>
      </div>
    </div>
  );
}

export default App; // Export component so that we can use it in other files
