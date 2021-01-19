import React from 'react'
import { Link } from "react-router-dom";
import './css/BlogArticle.css'

function BlogArticle() {
  return (
    <div className="blogArticle" >
      <Link>
        <div className="blogArticle__image">
          <img src="https://res.cloudinary.com/fragmods/image/upload/v1611014512/Logos/5Consejos_o7tcdl.png" alt="imagenGenericaDeBlog"/>
        </div>
        <h3>Categoria</h3>
        <h2>Titulo</h2>
      </Link>
      <div className="blogArticle__extract">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, labore. Nesciunt quas accusantium beatae officia alias, sequi magni est a asperiores, exercitationem quisquam eaque iusto veritatis. Sequi vero ab ex?</p>
      </div>
      <Link to = '/'>Leer mas</Link>
    </div>
  )
}

export default BlogArticle
