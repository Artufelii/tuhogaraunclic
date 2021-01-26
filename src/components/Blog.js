import React from 'react'
import BlogArticle from './BlogArticle'
import './css/Blog.css'

function Blog() {
  return (
    <div className="blog">
      <div className="blog__portada">
        <div className="blog__portada--title">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="blog__contenido">
        <div className="blog__contenido--articulo">
          <BlogArticle />
        </div>
        <div className="blog__contenido--articulo">
          <BlogArticle />
        </div>
        <div className="blog__contenido--articulo">
          <BlogArticle />
        </div>
        <div className="blog__contenido--articulo">
          <BlogArticle />
        </div>
        <div className="blog__contenido--articulo">
          <BlogArticle />
        </div>
        <div className="blog__contenido--articulo">
          <BlogArticle />
        </div>
      </div>
    </div>
  )
}

export default Blog
