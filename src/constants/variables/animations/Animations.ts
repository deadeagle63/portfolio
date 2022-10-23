const character={
    dropIn: {
      variants: {
        hidden: {
          opacity: 0,
          y: -100,
          scale:5.00
        },
        visible: {
          opacity: 1,
          y: 0,
          scale:1.00
        }
      },
    },
    typing: {
      variants: {
        hidden: { opacity: 0,y:-100 },
        visible: {
          opacity: 1,
          y: 0,
        },
        animate: {
          opacity: [0, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'circInOut'
          }

        }
      }
    }
}
const word = {
  dropIn: {
    variants: {
      hidden: { opacity: 0, y: -100,scale:3 },
      visible: {
        opacity: 1,
        y: 0,
        scale:1,
        transition: {
          delay: 0.5,
          staggerChildren:0.05
        }
      }
    }
    }
  }
const line = {

    spawnLine: {
      variants: {
        hidden: {
          opacity: 1
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            staggerChildren: 0.069
          }
        },
        
      }
    },
    typing: {
      variants: {
        hidden: {
          opacity: 1,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 1,
            staggerChildren: 0.03,
          }
        },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.06,
            repeat: Infinity,
          }
        }
      }
    }

}
const StaticAnimations = {
  line,
  character,
  word
}

export { StaticAnimations }