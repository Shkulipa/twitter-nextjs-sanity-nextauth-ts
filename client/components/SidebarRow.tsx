import React, { DetailedHTMLProps, HTMLAttributes, SVGProps } from 'react'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
  title: string;
  onClick?: () => {}
}

export function SidebarRow({ Icon, title, ...props }: Props): JSX.Element {
  return (
    <div className='group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full 
      hover:bg-gray-100 cursor-pointer transition-all
      duration-200' {...props}>

      <Icon className='h-6 w-6' />
      <p className='hidden group-hover:text-twitter md:inline-flex font-ligth lg:text-xl'>{title}</p>

    </div>
  )
}
