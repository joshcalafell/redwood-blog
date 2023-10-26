import { Grid, Col, Card, Title, AreaChart } from '@tremor/react'

import { MetaTags } from '@redwoodjs/web'

const DashboardPage = () => {
  const chartdata = [
    {
      date: 'Jan 22',
      SemiAnalysis: 2890,
      Blogger: 2338,
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 2756,
      Blogger: 2103,
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 3322,
      Blogger: 2194,
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 3470,
      Blogger: 2108,
    },
    {
      date: 'May 22',
      SemiAnalysis: 3475,
      Blogger: 1812,
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 3129,
      Blogger: 1726,
    },
  ]

  const dataFormatter = (number: number) => {
    return '$ ' + Intl.NumberFormat('us').format(number).toString()
  }

  return (
    <div className="m-12">
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1 className="mb-12 text-2xl">Dashboard</h1>

      <Grid cols={1} colsSm={2} colsLg={3} className="my-8 gap-6">
        <Col numColSpan={1} numColSpanLg={3}>
          <Card>
            <Title>Newsletter revenue over time (USD)</Title>
            <AreaChart
              className="mt-4 h-72"
              data={chartdata}
              index="date"
              categories={['SemiAnalysis', 'Blogger']}
              colors={['indigo', 'green']}
              valueFormatter={dataFormatter}
            />
          </Card>
        </Col>
      </Grid>
    </div>
  )
}

export default DashboardPage
