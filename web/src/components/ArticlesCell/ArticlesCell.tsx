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
    <div className="w-100 mx-auto flex justify-center align-top">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}
