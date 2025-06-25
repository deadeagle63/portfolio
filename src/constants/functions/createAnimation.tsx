import { motion } from 'framer-motion'
import {StaticAnimations} from '@variables/animations/Animations'
import { useEffect, useRef, useState } from 'react'
type AnimationSubSequence = string | number | string[] | number[]
type AnimationState = {
  [key: string]: string | string[]
}
type AnimationInPlace = {
  [key: string]: AnimationSubSequence | AnimationInPlace
}
interface InteractiveAnimation {
  whileHover?: AnimationInPlace,
  whileTap?: AnimationInPlace,
  whileDrag?: AnimationInPlace,
  whileFocus?: AnimationInPlace,
  initail?: AnimationInPlace,
  drag?: boolean,
  dragConstraints?: {top:number, left:number, right:number, bottom:number},
}
interface BasicAnimation extends InteractiveAnimation {
  initial: AnimationInPlace | AnimationState,
  animate: AnimationInPlace | AnimationState, 
  exit: AnimationInPlace | AnimationState,
  transition?: AnimationInPlace
}
interface Animation extends InteractiveAnimation {
  variants?: {
    [key: string]: AnimationInPlace
  },
  animate?: AnimationState | AnimationInPlace,
  initial?: AnimationState | AnimationInPlace,
  exit?: AnimationState | AnimationInPlace
}
function textIntroAnimation(string: string, animation: Animation, parentClassName: string, characterClassName?: string) {
  
  return <motion.h1 {...StaticAnimations.line.spawnLine} className={parentClassName} initial='hidden' animate={'visible'}  >
    {string.split(" ").map((word:string) => {
      return <motion.div {...StaticAnimations.word.dropIn} key={`textDropIn word ${word}`}>{
        word.split("").map((char: string, index: number) => {
          return <motion.span key={`textIntroDropIn ${index}`} {...animation} {...StaticAnimations.character.dropIn} className={characterClassName} >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        })
      }</motion.div>
    })}
  </motion.h1>
}

function TypingAnimation({string,className} : {string: string, className: string})  { 
  const [animationState, setAnimationState] = useState('visible')
  useEffect(() => {
    const t = setTimeout(() => {
      setAnimationState('animate')
    },3000)

    return () => {
      clearTimeout(t)
    }
  },[])
  
  return <motion.p {...StaticAnimations.line.typing} className={className} initial='hidden' animate={animationState}>
    {string.split("").map((char, index) => { 
      return <motion.span key={`typing ${char} ${index}`} {...StaticAnimations.character.typing} >
        {char}
      </motion.span>
    })}
  </motion.p>
}
export {textIntroAnimation,TypingAnimation}