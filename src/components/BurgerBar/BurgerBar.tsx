import {useRef, useCallback} from 'react'
import {motion as m, useCycle} from 'framer-motion'
import { useDimensions } from '@hooks/useDimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import useClickOutside from '@hooks/useClickOutside'

const menu = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}
function BurgerBar() {
  const [isOpen, toggleOpen] = useCycle(false,true)
  const burgerRef = useRef(null)
  const { height } = useDimensions(burgerRef)
  const handleToggle = () => toggleOpen()
  useClickOutside(burgerRef, () => toggleOpen(0))
  return (
    <m.nav  className='fixed bottom-8 sm:bottom-0 right-[85%] sm:right-4 sm:top-0 w-max z-10' initial={false} animate={isOpen?'open':'closed'} custom={height} ref={burgerRef}>
      <m.div className='w-16 h-16' variants={menu} />
      <Navigation toggle={ handleToggle}  />
      <MenuToggle toggle={handleToggle} />
    </m.nav>
  )
}

export default BurgerBar