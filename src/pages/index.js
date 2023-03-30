import React from "react"
import "./style.css"
import "hover.css"
import App from "../components/App"
import { Helmet } from "react-helmet"

export default function Index() {
  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "id",
        }}
      >
        <meta name="generator" content="Gatsby" />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://www.google.com " crossOrigin />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta itemprop="name" content="Nyoman Eka" />

        <meta property="article:author" content="Nyoman Eka Swardita" />
        <meta property="article:publisher" content="Nyoman Eka " />
        <meta property="article:section" content="post" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="index,follow" name="robots" />
        <meta content name="copyright" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="follow, all" name="Googlebot-Image" />
        <meta content="follow, all" name="Scooter" />
        <meta content="follow, all" name="msnbot" />
        <meta content="follow, all" name="alexabot" />
        <meta content="follow, all" name="Slurp" />
        <meta content="follow, all" name="ZyBorg" />
        <meta content="follow, all" name="Scooter" />
        <meta content="true" name="MSSmartTagsPreventParsing" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Helmet>
      <App />
    </div>
  )
}
