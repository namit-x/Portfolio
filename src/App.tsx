import Background from './components/Background'
import SmoothScroll from './components/SmoothScroll'
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <SmoothScroll>
      <ThemeProvider>
        <div className="relative w-screen min-h-screen overflow-x-hidden custom-selection">
          <Background />
        </div>
      </ThemeProvider>
    </SmoothScroll>
  )
}

export default App
