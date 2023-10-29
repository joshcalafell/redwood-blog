import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <div className="h-100 min-h-full md:max-h-screen">
      {' '}
      <div className="mx-4 max-w-md rounded-lg border border-gray-200 bg-white object-contain p-6 px-4 shadow dark:border-gray-700 dark:bg-gray-800">
        <a href="{#}">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Link to={routes.article({ id: article.id as never })}>
              {article.title}
            </Link>
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {article.body}
        </p>
        <hr />
        <p className="end-0 mt-4   text-xs  text-black">
          <img
            className="mr-2 inline-block h-8 w-8 rounded-full"
            src="https://2.gravatar.com/avatar/7f83154cb441eab12ad5370f863ae3b569a93902d43663cf5b3fb93e7221ea89?size=128"
            alt="User Gravitars"
          />
          Posted on {formatDate(article.createdAt)}
        </p>
      </div>
      <div className="mt-4 flex justify-end"></div>
    </div>
  )
}

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

export default Article
