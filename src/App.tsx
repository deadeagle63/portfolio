import { lazy, useMemo,useEffect,useRef ,useState} from 'react'
import { textIntroAnimation, TypingAnimation } from '@functions/createAnimation'
import {  motion as m, useScroll } from 'framer-motion'
import { ChevronRight, RefreshCw } from 'react-feather'
import {Toaster} from 'react-hot-toast'
import BurgerBar from '@components/BurgerBar/BurgerBar'
import About from '@pages/About'
import Resume from '@pages/Resume'
import Contact from '@pages/Contact'

function App() {
  const scrollRef = useRef(null)
  const { scrollXProgress } = useScroll({ container: scrollRef })
  const [scrollTo, setScrollTo] = useState('about')
  const [showChevron, setShowChevron] = useState(true)
  useEffect(() => {

    scrollXProgress.onChange((latest: any) => {
      // == matching prevents nuking state and degrading performance
      calculateScrollBehavior(latest)
    })
  }, [])
  function calculateScrollBehavior(latest: any) {
   
    switch (true) {
      case latest >= 0.32 && latest <= 0.66:
        setScrollTo('resume')
        break;
      case latest >= 0.65 && latest <= 0.9:
        setScrollTo('contact')
        break;
      case latest > 0.95:
      case latest == 0:
        setScrollTo('about')
        break
      default:
        break;
    }
    if (latest > 0.9 && showChevron) {
      setShowChevron(false)
    } else if (showChevron) {
      setShowChevron(true)
    }
  }
  const Icon = useMemo(() => {
    return showChevron ?ChevronRight:RefreshCw
  }, [showChevron])
  const [animatedHelloWorld, typingDescription] = useMemo(() => {
    return [textIntroAnimation('Hello World', {
      drag: true,
      dragConstraints: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }, "text-white text-9xl font-bold text-center flex items-center justify-center flex-wrap cursor-pointer",""),
      <TypingAnimation string='Its about to get real' className='text-white text-3xl font-semibold tracking-wide' />]
  }, [])
  const navigateTo = () => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
 
  return (
    <div id='landing' ref={scrollRef} className="snap-x snap-mandatory w-full min-w-screen  h-full  flex flex-row overflow-scroll no-scrollbar">
      <Toaster />
      <m.div id='home' className='flex bg-gradient-to-l to-purple-900 from-stone-900  items-center justify-center h-full min-h-screen  min-w-full w-full flex-col gap-2 snap-center relative shrink-0' >
        {animatedHelloWorld}
        {typingDescription}
        <m.div className={`animate-pulse fixed  bottom-8 right-${showChevron?0:4} sm:bottom-1/2 sm:right-4 cursor-pointer z-50`} whileHover={{scale:1.05}} whileTap={{scale:0.9}} onClick={navigateTo} >
          <Icon size={showChevron?64:48} color='white' />
        </m.div>
        <BurgerBar/>
      </m.div>
      
      <About />
      <Resume />
      <Contact/>
    </div>
  )
}

export default App
