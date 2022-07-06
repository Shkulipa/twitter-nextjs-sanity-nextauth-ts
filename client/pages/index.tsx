import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { Sidebar, Feed, Widgets } from '../components'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props): JSX.Element => {
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>twitter 2.0</title>
      </Head>
      <Toaster />

      <main className='grid grid-cols-9 h-screen'>
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>

     
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets
    }
  }
}