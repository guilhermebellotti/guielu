import Contact from '../components/Contact'
import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import PostWorkAll from '../components/PostWorkAll'
import React from "react"

const WorkPage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Layout>
        <PostWorkAll />
        <Contact />
      </Layout>
      <Footer />
    </>
  )
}

export default WorkPage
