import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=10&category=32&type=multiple';

function App() {
  return (
    <>
      <div className='container'>
        <div className='bg-white text-blue-800 p-10 rounded-lg shadow-md '>
          <h2 className='text-2xl '>This is a Question</h2>
          </div>

        <div>
          <div>Answer 1</div>
          <div>Answer 2</div>
          <div>Answer 3</div>
          <div>Answer 4</div>
        </div>
      </div>
    </>
  );
}

export default App;
