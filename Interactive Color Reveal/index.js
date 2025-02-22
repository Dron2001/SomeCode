const imageContainer = document.querySelector('.image-container')
const maskCircle = document.querySelector('.mask-circle')

const updatePosition = (posX, posY, scale) => {
  maskCircle.setAttribute("cx", posX)
  maskCircle.setAttribute("cy", posY)
  maskCircle.setAttribute("r", scale)
}

window.addEventListener('mousemove', e => {
  const maskPosX = e.pageX - imageContainer.offsetLeft
  const maskPosY = e.pageY - imageContainer.offsetTop

  imageContainer.addEventListener('mousemove', () => {
    updatePosition(maskPosX, maskPosY, 200)
  })
})

imageContainer.addEventListener('mouseout', e => {
  const maskPosX = e.pageX - imageContainer.offsetLeft
  const maskPosY = e.pageY - imageContainer.offsetTop

  updatePosition(maskPosX, maskPosY, 0)
})
