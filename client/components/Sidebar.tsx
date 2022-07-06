import React from 'react';
import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  BookmarkIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon
} from '@heroicons/react/outline'; //https://heroicons.com/
import { SidebarRow } from '.';
import { signIn, signOut, useSession } from 'next-auth/react';

export function Sidebar(): JSX.Element {
  const { data: session } = useSession();



  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
      <img className='m-3 h-10 w-10' src="https://links.papareact.com/drq" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow 
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign Out" : "Sign In"} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}
