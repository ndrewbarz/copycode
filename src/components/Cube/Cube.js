import React from "react"
import { hexToHSLA } from "../../utils/hexToHsla"
import classes from "./Cube.module.scss"

const Cube = ({ title, color }) => {
  const styleCube = {
    backgroundColor: hexToHSLA(color),
    boxShadow: `0 0 60px ${hexToHSLA(color)}`,
  }
  const styleCubeText = {
    textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${color},
                0 0 30px ${color}, 0 0 40px ${color}, 0 0 55px ${color}, 0 0 75px ${color}`,
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.cube}>
        <div style={styleCube}>
          <p style={styleCubeText}>{title}</p>
        </div>
        <div style={styleCube}>
          <p style={styleCubeText}>{title}</p>
        </div>
        <div style={styleCube}>
          <p style={styleCubeText}>{title}</p>
        </div>
        <div style={styleCube}>
          <p style={styleCubeText}>{title}</p>
        </div>
        <div style={styleCube}>
          <p style={styleCubeText}>{title}</p>
        </div>
        <div style={styleCube}>
          <p style={styleCubeText}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Cube
