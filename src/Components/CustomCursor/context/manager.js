import React, { useState } from "react"
import CustomCursorContext from "../context/CustomCursorContext"

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState("default")

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  )
}

export default CustomCursorManager