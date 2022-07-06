import { SearchCircleIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export function Widgets(): JSX.Element {
  return (
    <div className='col-span-2 px-2 mt-2 hidden lg:inline max-h-screen'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
        <SearchCircleIcon className='h-5 w-5 text-gray-400' />
        <input 
          type="text"
          placeholder='Search Twitter'
          className='flex-1 outline-none bg-transparent'
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ukraine"
        autoHeight
      />
    </div>
  )
}
