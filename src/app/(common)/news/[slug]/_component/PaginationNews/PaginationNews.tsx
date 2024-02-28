'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './pagination.module.css'

interface Props {
  pageCount: number
  onChange?: (page: number) => void
}

export default function PaginationNews({ pageCount, onChange }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState<number>(
    searchParams.get('page') ? Number(searchParams.get('page')) : 1
  )

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)

      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handlePageChange = (event: { selected: number }) => {
    const selectedPage = (event.selected + 1).toString()
    onChange && onChange(+selectedPage)
    if (Number(selectedPage) === 1) return router.push(pathname)
    return router.push(pathname + '?' + createQueryString('page', selectedPage))
  }

  useEffect(() => {
    const currentPageInSearchParams = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    setCurrentPage(currentPageInSearchParams)
    if (currentPageInSearchParams === 1) return router.push(pathname)
    if (currentPageInSearchParams > pageCount)
      return router.push(pathname + '?' + createQueryString('page', pageCount.toString()))
  }, [searchParams, pageCount, createQueryString, pathname, router])

  return (
    <>
      <ReactPaginate
        containerClassName={styles['wrapper']}
        pageClassName={styles['item']}
        activeClassName={styles['active']}
        disabledClassName={styles['disabled']}
        previousClassName={styles['previous']}
        nextClassName={styles['next']}
        breakClassName={styles['break']}
        onPageChange={handlePageChange}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        breakLabel='...'
        previousLabel={
          <span className='flex justify-center items-center w-full h-full rotate-180'>
            <svg xmlns='http://www.w3.org/2000/svg' width={5} height={8} fill='none'>
              <path
                fill='#363636'
                d='M1.218 6.882a.465.465 0 0 0 .618 0l2.901-2.657a.3.3 0 0 0 0-.45L1.836 1.118a.465.465 0 0 0-.618 0 .376.376 0 0 0 0 .565l2.528 2.319L1.215 6.32a.375.375 0 0 0 .003.562Z'
              />
              <path
                fill='#363636'
                fillRule='evenodd'
                d='M1.15 1.044a.565.565 0 0 1 .753 0L4.805 3.7a.4.4 0 0 1 0 .598L1.903 6.956a.565.565 0 0 1-.752 0 .475.475 0 0 1-.004-.71l2.45-2.244L1.15 1.757a.476.476 0 0 1 0-.713Zm.068 5.838.068-.073c.132.121.35.121.482 0L4.67 4.152a.2.2 0 0 0 0-.304L1.768 1.191a.365.365 0 0 0-.482 0 .276.276 0 0 0 0 .419l2.608 2.392-2.612 2.391a.275.275 0 0 0 .003.415l-.067.074Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        }
        nextLabel={
          <span className='flex justify-center items-center w-full h-full'>
            <svg xmlns='http://www.w3.org/2000/svg' width={5} height={8} fill='none'>
              <path
                fill='#363636'
                d='M1.218 6.882a.465.465 0 0 0 .618 0l2.901-2.657a.3.3 0 0 0 0-.45L1.836 1.118a.465.465 0 0 0-.618 0 .376.376 0 0 0 0 .565l2.528 2.319L1.215 6.32a.375.375 0 0 0 .003.562Z'
              />
              <path
                fill='#363636'
                fillRule='evenodd'
                d='M1.15 1.044a.565.565 0 0 1 .753 0L4.805 3.7a.4.4 0 0 1 0 .598L1.903 6.956a.565.565 0 0 1-.752 0 .475.475 0 0 1-.004-.71l2.45-2.244L1.15 1.757a.476.476 0 0 1 0-.713Zm.068 5.838.068-.073c.132.121.35.121.482 0L4.67 4.152a.2.2 0 0 0 0-.304L1.768 1.191a.365.365 0 0 0-.482 0 .276.276 0 0 0 0 .419l2.608 2.392-2.612 2.391a.275.275 0 0 0 .003.415l-.067.074Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        }
      />
    </>
  )
}
