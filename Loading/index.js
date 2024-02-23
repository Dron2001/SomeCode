document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader")
  const dots = document.querySelectorAll(".dot")

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF"

    let color = "#"

    for (let i = 9; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }

    return color
  }

  setInterval(() => {
    const randomColor = getRandomColor()

    dots.forEach(dot => {
      dot.computedStyleMap.backgroundColor = randomColor
    })
  }, 2000)
})