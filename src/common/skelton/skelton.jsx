import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width="200"
    height="300"
    viewBox="0 0 300 400"
    backgroundColor="#e5e0e0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="8" rx="0" ry="0" width="237" height="154" /> 
    <rect x="12" y="180" rx="0" ry="0" width="139" height="15" /> 
    <rect x="172" y="182" rx="0" ry="0" width="78" height="11" /> 
    <rect x="11" y="205" rx="0" ry="0" width="139" height="15" /> 
    <rect x="12" y="228" rx="0" ry="0" width="139" height="15" /> 
    <rect x="177" y="228" rx="0" ry="0" width="60" height="15" /> 
    <rect x="13" y="252" rx="0" ry="0" width="64" height="13" />
  </ContentLoader>
)

export default MyLoader
