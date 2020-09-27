import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Footer from "../components/Footer/Footer"
import Carousel from "../components/Carousel/Carousel"
import { useMediaQuery } from "react-responsive"

import classes from "../styles/index.module.scss"

const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" })

  return (
    <>
      <Layout>
        <div className={classes.getStarted}>
          <div className={classes.getStartedDesc}>
            <h1 className={classes.getStartedTitle}>Copycode</h1>
            <p className={classes.getStartedText}>
              Small web development theory library with code examples
            </p>
            <div className={classes.getStartedLinks}>
              <Link to="/docs" className={classes.getStartedBtn}>
                Get Started
              </Link>
              <Link to="/about" className={classes.getStartedLink}>
                Learn about
              </Link>
            </div>
          </div>

          {!isTabletOrMobile && (
            <div className={classes.homeCarousel}>
              <Carousel />
            </div>
          )}
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default Home
