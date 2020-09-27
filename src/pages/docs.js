import React from "react"
import Layout from "../components/Layout/Layout"
import Sidebar from "../components/Sidebar/Sidebar"
import docsImage from "../images/docs.svg"
import classes from "../styles/index.module.scss"

const Docs = () => {
  return (
    <Layout>
      <Sidebar />
      <div className={classes.docsPreview}>
        <h1>Pick your component</h1>
        <div className={classes.docsBox}>
          <img className={classes.docsImage} src={docsImage} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default Docs
