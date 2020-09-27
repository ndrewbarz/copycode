import React, { Component } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Cube from "../Cube/Cube"
import "./Carousel.module.scss"

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    }
    return (
      <div>
        <h2>Some of topics</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <Cube title={"React"} color={"#61DBFB"} />
          </div>
          <div>
            <Cube title={"HTML"} color={"#e34f26"} />
          </div>
          <div>
            <Cube title={"VUE"} color={"#42b883"} />
          </div>
        </Slider>
      </div>
    )
  }
}
