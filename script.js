const images = [
  'canada-0.jpg',
  'canada-1.jpg',
  'canada-2.jpg',
  'canada-3.jpg',
]
const base = 'assets/'

// Caches images, avoiding white flash between background replacements
images.forEach(image => new Image().src = base + image)

const style = document.documentElement.style
let index = 1

// Changes background every 4 seconds
setInterval(() => {
  style.background = `url('${base}${images[index]}') no-repeat center center fixed`
  style.backgroundSize = 'cover'

  index >= images.length - 1 ? index = 0 : index++
}, 4000)