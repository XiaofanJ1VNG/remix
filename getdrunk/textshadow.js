console.clear()

const getPosition = (e) => {

  const offsetX = e.clientX/window.innerWidth*100
  const offsetY = e.clientY/window.innerHeight*100

  document.querySelectorAll('.hasShadow').forEach(el => {
    const origin = 50
    const shadow = `${50 +offsetX}px ${-50+offsetY}px 10px white`
    el.style.setProperty('text-shadow', shadow)})
}

window.addEventListener('mousemove', getPosition)

