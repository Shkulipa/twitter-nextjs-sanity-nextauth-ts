import { RefreshIcon } from '@heroicons/react/outline' //https://heroicons.com/
import React, {  useState} from 'react'
import toast from 'react-hot-toast'
import { Tweet, TweetBox } from '.'
import { Tweet as ITweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

// https://tailwindcss.com/docs/height

interface TweetsProps {
  tweets: ITweet[]
}

export function Feed({ tweets }: TweetsProps): JSX.Element {
  const [newTweets, setTweets] = useState<ITweet[]>(tweets);

  const mapTweets = newTweets.map(tweet => {
    return <Tweet key={tweet._id} tweet={tweet}/>
  })

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...');

    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success('Feed Uploaded!', {
      id: refreshToast
    });
  }

  return (
    <div className='col-span-7  lg:col-span-5 max-h-screen overflow-scroll border-x scrollbar-hide'>
      <div className='p-5 flex items-center justify-between'>
        <h1 className='pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon className='h-8  w-8 cursor-pointer text-twitter transition-all 
          duration-500 ease-out hover:rotate-180 active:scale-125'
          onClick={handleRefresh}
        />
      </div>

      <div>
        <TweetBox setTweets={setTweets}/>
      </div>

      <div>{mapTweets}</div>
    </div>
  )
}
