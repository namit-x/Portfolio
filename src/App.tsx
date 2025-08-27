import Background from './components/Background'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <div className="relative w-screen min-h-screen overflow-x-hidden custom-selection">
        <Background />
      </div>
    </SmoothScroll>
  )
}

export default App
