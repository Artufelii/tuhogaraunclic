import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import parser from "html-react-parser"

import axios from '../helpers/axios'
import LoadingScreen from './LoadingScreen'
import './css/Article.css'

const Article = () => {

  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(false)
  const { slug } = useParams()

  useEffect(() => {
    setLoading(true)
    const getArticle = async () => {
      const response = await axios({
        method: 'GET',
        url: `/blog/${slug}`
      })
      setArticle(response.data.article)
      document.title = response.data.article.title
      setLoading(false)
    }

    getArticle()
  }, [slug, setArticle ])

  return(
    <div className="container">
      { loading ? 
          <LoadingScreen />  :
          <div className="article">
              <div className="article__cover" style={{backgroundImage: `url(${ article.cover })`}}>
                <h1>{ article.title }</h1>
              </div>
            <div className="article__info">
              <div className="article__info--body">
                { article && article.body && parser(article.body.toString()) }
              </div>
              <div className="article__info--category">
                { article.category }
              </div>
            </div>
          </div>
      }
    </div>
    )
}

export default Article
