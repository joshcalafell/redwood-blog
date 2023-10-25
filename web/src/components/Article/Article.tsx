import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import './Article.css'
interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <div className="card">
      <h2 className="card-title">
        <Link to={routes.article({ id: article.id as never })}>
          {article.title}
        </Link>
      </h2>
      <p className="card-body">{article.body}</p>
      <p className="card-created-at">
        Created at: {formatDate(article.createdAt)}
      </p>
    </div>
  )
}

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

export default Article
