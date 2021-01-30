import React from 'react'
import { Link } from "react-router-dom";
import './css/BlogArticle.css'

function BlogArticle({ title, category, cover, extract }) {
  return (
    <div className="blogArticle">
      <Link to = '/blog'>
        <div className="blogArticle__image">
          <img src={ cover } alt={ title }/>
        </div>
        <h3>{ category }</h3>
        <h2>{ title }</h2>
      </Link>
      <div className="blogArticle__extract">
        <p>{ extract }</p>
      </div>
      <Link to = '/blog'>Leer mas</Link>
    </div>
  )
}

export default BlogArticle
