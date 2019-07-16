import React, { useState, useEffect } from "react"

const NUM_STARS = 500
const MAX_STAR_R = 0.3 // Percent

let keyBullshit = 0

const starCoords = Array.from(new Array(NUM_STARS)).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  r: Math.random(),
  key: keyBullshit++,
}))

// TODO: Make it dynamic

const Stars = () => {
  const [screenHeight, setScreenHeight] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const resetWindowDimensions = () => {
      setScreenHeight(window.innerHeight)
      setScreenWidth(window.innerWidth)
    }
    resetWindowDimensions()
    window.addEventListener(
      "resize",
      () => {
        resetWindowDimensions()
      },
      true
    )
  }, [])

  return (
    <svg
      className="svgCanvasStars"
      viewBox={`0 0 ${screenWidth} ${screenHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {starCoords.map(star => (
        <circle
          key={star.key}
          cx={`${star.x}%`}
          cy={`${star.y}%`}
          r={`${star.r * MAX_STAR_R}%`}
          strokeWidth="0"
          fill="#FFF"
        ></circle>
      ))}
    </svg>
  )
}

export default Stars
