import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

import './ArticlesCell.css'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
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

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <div className="w-100 sm:flex sm:flex-col sm:justify-center sm:align-center lg:grid lg:gap-4 lg:grid-cols-3 lg:grid-rows-3">
    {articles.map((article) => (
      <Article key={article.id} article={article} />
    ))}
</div>

  )
}
