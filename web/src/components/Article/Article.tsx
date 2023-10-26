import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import './Article.css'
interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h5">
          <Link to={routes.article({ id: article.id as never })}>
            {article.title}
          </Link>
        </div>
      </div>

      <p className="card-body">{article.body}</p>
      <p className="end-0 mt-4   text-xs  text-black">
        Posted on {formatDate(article.createdAt)}
      </p>
    </div>
  )
}

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

export default Article
