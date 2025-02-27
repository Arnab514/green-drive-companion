
import './App.css'

function App() {
  return (
    <div className="App">
      <iframe 
        src="./index.html" 
        style={{ 
          width: '100%', 
          height: '100vh', 
          border: 'none' 
        }}
        title="Pure HTML Content"
      />
    </div>
  )
}

export default App
