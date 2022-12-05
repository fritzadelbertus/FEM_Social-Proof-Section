import SocialProof from "./components/SocialProof"
import topPatternDesktop from './assets/bg-pattern-top-desktop.svg'
import topPatternMobile from './assets/bg-pattern-top-mobile.svg'
import bottomPatternDesktop from './assets/bg-pattern-bottom-desktop.svg'
import bottomPatternMobile from './assets/bg-pattern-bottom-desktop.svg'

function App() {

  return (
    <div className='App'>
      <picture>
        <source media="(min-width:765px)" srcSet="./backgroundSVGs/bg-pattern-top-desktop.svg" />
        <source media="(max-width:764px)" srcSet="./backgroundSVGs/bg-pattern-top-mobile.svg" />
        <img src="./backgroundSVGs/bg-pattern-top-mobile.svg" alt="Background Pattern" />
      </picture>
      <picture>
        <source media="(min-width:765px)" srcSet="./backgroundSVGs/bg-pattern-bottom-desktop.svg" />
        <source media="(max-width:764px)" srcSet="./backgroundSVGs/bg-pattern-bottom-mobile.svg" />
        <img src="./backgroundSVGs/bg-pattern-bottom-mobile.svg" alt="Background Pattern" />
      </picture>
      <SocialProof />
    </div>
  )
}

export default App
