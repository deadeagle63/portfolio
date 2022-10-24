import {motion as m} from 'framer-motion'
const nickNameAnimations = {
  hidden: {
    position: 'absolute',
    opacity: 0,
    x: -100,
    scale: 4,
    rotateZ:15
  },
  visible: {
    position: 'initial',
    opacity: 1,
    x: 0,
    rotateZ:0,
    scale: [1.2,1],
    transition: {
      duration: 0.33,
      ease: 'circIn',
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  },
  exit: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    rotateZ: [15,45],
    y: 100,
    opacity: [0.66,0],
    scale: [1.1,0],
    transition: {
      duration: 1.33,
      ease: 'backInOut'
    }
  }
}
const NickName = ({ name }: { name: string }) => {
  // @ts-ignore: Props cant animate position, but this is used to smooth it out
  return <m.span className='text-white text-6xl md:text-4xl font-extrabold w-max' initial='hidden' animate='visible' exit='exit' variants={nickNameAnimations} >
    {name}
  </m.span>
}
export default NickName