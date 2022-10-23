import {motion as m} from 'framer-motion'
const nickNameAnimations = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 4
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.33,
      ease: 'backOut'
    }
  },
  exit: {
    position: 'absolute',
    bottom: 0,
    left: '100%',
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.33,
      ease: 'circInOut'
    }
  }
}
const NickName = ({ name }: { name: string }) => {
  // @ts-ignore: Props cant animate position, but this is used to smooth it out
  return <m.span className='text-white text-xl md:text-4xl font-bold' initial='hidden' animate='visible' exit='exit' variants={nickNameAnimations} >
    {name}
  </m.span>
}
export default NickName