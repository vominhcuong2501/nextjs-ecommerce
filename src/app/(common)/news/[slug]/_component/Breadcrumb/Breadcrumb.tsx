'use client'

// import { useLangUrlSlashed } from '@/lib/hooks/useLangUrlSlashed'
import classNames from 'classnames'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface CrumbItem {
  label: ReactNode
  path: string
}
interface BreadcrumbsProps {
  items: CrumbItem[]
  fullWidth?: boolean
  sectionClassName?: string
}

const Breadcrumb = ({ items, fullWidth = false, sectionClassName }: BreadcrumbsProps) => {
  return (
    <ul
      className={classNames(`flex gap-3 items-start justify-start py-5   ${sectionClassName}`, {
        container: !fullWidth
      })}
    >
      {items?.map((item, index) => {
        const isLastItem = index === items.length - 1
        if (!isLastItem) {
          return (
            <li key={item?.path} className='flex justify-center items-start gap-3'>
              <Link
                href={`${item?.path}`}
                title={item?.label as string}
                className='text-gray-3 hover:text-red-1 transition-all leading-1-4 text-14 md:text-16 font-medium hover:text-blue-2'
              >
                {item?.label}
              </Link>
              <span className='w-4 h-4 flex justify-center items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10' fill='none'>
                  <path
                    d='M0.21959 9.76845C0.0789866 9.6278 -2.40835e-08 9.43707 -3.27765e-08 9.2382C-4.14696e-08 9.03932 0.0789866 8.84859 0.21959 8.70795L3.93209 4.99545L0.21959 1.28295C0.082971 1.1415 0.0073749 0.952044 0.0090837 0.755396C0.0107925 0.558748 0.0896694 0.370639 0.228725 0.231583C0.367782 0.0925264 0.555891 0.0136509 0.752538 0.0119419C0.949186 0.0102329 1.13864 0.0858287 1.28009 0.222447L5.52284 4.4652C5.66344 4.60584 5.74243 4.79657 5.74243 4.99545C5.74243 5.19432 5.66344 5.38505 5.52284 5.5257L1.28009 9.76845C1.13944 9.90905 0.948713 9.98804 0.74984 9.98804C0.550967 9.98804 0.360236 9.90905 0.21959 9.76845Z'
                    fill='#ACABAB'
                  />
                </svg>
              </span>
            </li>
          )
        } else {
          return (
            <li key={item?.path} className='flex justify-center items-center'>
              <span
                className='text-[#666] leading-1-4 text-14 md:text-16 font-medium'
                dangerouslySetInnerHTML={{ __html: item?.label || '' }}
              />
            </li>
          )
        }
      })}
    </ul>
  )
}

export default Breadcrumb
