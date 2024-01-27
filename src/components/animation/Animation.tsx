//  header
export const HeaderAnimatin = {
    initial: {top: -100},
    animate: {top: 0},
    transition: {duration: 0.5}
}

// Animation Title
export const TitleAnimatin = {
    initial: {opacity: 0, x: -100},
    whileInView: {opacity: 1, x:0},
    exit: {opacity:0, x:-100},
    transition: {duration: 0.5},
}
export const SubTitleAnimatin = {
    initial: {opacity: 0, x: -100},
    whileInView: {opacity: 1, x:0},
    exit: {opacity:0, x:-100},
    transition: {duration: 0.5, delay: 0.2},
}

// Animation About
export const TextAnimatin = {
    initial: {opacity: 0, x: -100},
    whileInView: {opacity: 1, x: 0},
    exit: {opacity:0, x: -100},
    transition: {duration: 0.5}
}
export const ImgAnimatin = {
    initial: {opacity: 0, y: 200, scale: 0.5},
    whileInView: {opacity: 1, y:0, scale: 1},
    exit: {opacity:0, y:200, scale: 0.5},
    transition: {duration: 0.5},
}

// Animation Skills
export const techBadgeAnimation = {
    initial: { opacity: 0, scale:0},
    whileInView: { opacity: 1, scale:1},
    exit: { opacity: 0, scale:0},

    // initial: {opacity: 0, x: -100},
    // animate: {opacity: 1, x: 0},
    // exit: {opacity:0, x: -100},
}

// Animation Experience

// Animation projects
export const projectsAnimation = {
    // initial: {opacity: 0, x: -100},
    // animate: {opacity: 1, x: 0},
    // exit: {opacity:0, x: -100},

    initial: { opacity: 0, scale:0},
    whileInView: { opacity: 1, scale:1},
    exit: { opacity: 0, scale:0},
}
// Animation Education


export const fadeUpAnimation = {
    initial: {opacity: 0, y: 50},
    whileInView: { opacity: 1, y:0},
    exit: { opacity: 0, y: 50},
}







