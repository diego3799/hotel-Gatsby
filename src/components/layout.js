import React from "react"
import Healmet from "react-helmet"
import Header from "./header"

import { Global, css } from "@emotion/core"
import Footer from "./footer"
import useSeo from "../hooks/useSeo"

const Layout = ({ children }) => {
  const {
    fallbackSeo: { description, title },
  } = useSeo()
  return (
    <>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            font-size: 62.5%;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", serif;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Healmet>
        <title>{title}</title>
        <meta name="descrpition" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Healmet>
      <Header />
      <main>{children}</main>
      <Footer title={title} />
    </>
  )
}

export default Layout
