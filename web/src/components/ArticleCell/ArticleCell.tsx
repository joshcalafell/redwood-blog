import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  article,
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  return (
    <div>
      <div className=" mx-auto max-w-sm justify-center rounded-lg border border-gray-200 bg-white p-6 px-4 shadow dark:border-gray-700 dark:bg-gray-800">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {article.title}
        </h5>

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
    </div>
  )

  function formatDate(timestamp) {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }
}
