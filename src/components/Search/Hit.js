import React from "react"
import PostItem from "../PostItem"

export default function Hit({ hit }) {
  return (
    <PostItem
      slug={hit.fields.slug}
      title={hit.title}
      date={hit.date}
      description={hit.description}
      category={hit.category}
      background={hit.background}
    />
  )
}
