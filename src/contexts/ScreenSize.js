import React, { useLayoutEffect, useState } from "react"
const ScreenSizeContext = React.createContext()

const ScreenSizeProvider = ({ children }) => {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const resetWindowDimensions = () => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }
    resetWindowDimensions()
    window.addEventListener(
      "resize",
      () => {
        resetWindowDimensions()
      },
      true
    )
  })
  return (
    <ScreenSizeContext.Provider
      value={{ height, width, aspectRatio: width / height }}
    >
      {children}
    </ScreenSizeContext.Provider>
  )
}

export { ScreenSizeProvider, ScreenSizeContext }
