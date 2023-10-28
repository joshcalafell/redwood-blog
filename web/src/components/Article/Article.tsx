import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <div>
      <div className="mx-4 max-w-sm rounded-lg border border-gray-200 bg-white p-6 px-4 shadow dark:border-gray-700 dark:bg-gray-800">
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
        <div className="mt-4 flex items-center justify-center">
          <Link to={routes.article({ id: article.id as never })}>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Read more
            </span>
          </Link>
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

function formatDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

export default Article
