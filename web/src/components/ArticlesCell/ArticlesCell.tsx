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
    <div className="sm:align-center gap-4 sm:flex sm:flex-col sm:justify-center lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}
