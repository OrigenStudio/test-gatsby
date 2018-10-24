import React from "react"

export default function Html({ component: Component = 'div', html, ...props }) {
  return <Component {...props} dangerouslySetInnerHTML={{ __html: html }} />
}
