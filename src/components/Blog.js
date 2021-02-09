import React, { useState, useEffect } from 'react'
import BlogArticle from './BlogArticle'
import axios from './axios'
import './css/Blog.css'

function Blog() {
  const [ blogs, setBlogs ] = useState([])

  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios({
        method: 'GET',
        url: '/blog',
      })
      setBlogs(response.data.Blogs)
    }

    document.title = 'Blog | Las Mejores noticias Inmobiliarias'
    getBlogs()
  }, [setBlogs])

  return (
    <div className="blog">
      <div className="blog__portada">
        <div className="blog__portada--title">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="blog__contenido">
        { blogs.map((item) => (
          <div className="blog__contenido--articulo" key={ item._id }>
            <BlogArticle 
              title= { item.title }
              category= { item.category }
              cover= { item.cover }
              extract= { item.extract }
              body= { item.body }
              slug= { item.slug }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
