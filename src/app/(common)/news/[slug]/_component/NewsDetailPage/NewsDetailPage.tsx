'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionArticleDetailPage from '@/app/[locale]/(common)/_components/SectionArticleDetailPage'
import SectionArticleRelated from '@/app/[locale]/(common)/_components/SectionArticleRelated'
import type { Article, ArticleType } from '@/types/article.type'
import type { CustomTypeConfig } from '@/types/common'
import Link from 'next/link'
import Breadcrumb from '../Breadcrumb'

type NewsDetailPageProps = {
  dataDetail?: Article
  parentKeyword: ArticleType
  listArticleRelated?: Article[]
  newsKeyword: string
  t?: CustomTypeConfig<string>
  homeKeyword: string
}
export default function NewsDetailPage({
  dataDetail,
  parentKeyword,
  listArticleRelated,
  newsKeyword,
  t,
  homeKeyword
}: NewsDetailPageProps) {
  return (
    <section className='max-w-[1472px] px-4 mx-auto pt-[34px] pb-[62px]'>
      <div className='hidden md:grid grid-cols-3'>
        <div className='col-span-2'>
          <Breadcrumb
            fullWidth
            items={[
              {
                label: t?.txt_menu_home,
                path: `/${homeKeyword}`
              },
              {
                label: parentKeyword?.parent?.type_name,
                path: `/${newsKeyword}`
              },
              {
                label: parentKeyword?.type_name,
                path: `/${newsKeyword}/${parentKeyword?.type_keyword}`
              },
              {
                label: `${dataDetail?.article_name.replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"')}`,
                path: ``
              }
            ]}
          />
          <p className='text-14 font-normal leading-1-4 text-blue-2'>{dataDetail?.article_insert_time_format}</p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-[60px] '>
        <div className='lg:col-span-2 '>
          <h1
            className='text-18 lg:text-28 text-gray-1 font-bold leading-1-4'
            dangerouslySetInnerHTML={{ __html: dataDetail?.article_name as string }}
          />
          <p className='text-14 font-normal leading-1-4 text-blue-2 block lg:hidden mt-1'>
            {dataDetail?.article_insert_time_format}
          </p>
          {dataDetail && <SectionArticleDetailPage articleDetail={dataDetail} />}
          <h2 className='text-28 font-bold text-[#3E507C] leading-1-4 pt-5'>{t?.txt_related_news}</h2>
          <ul className='grid grid-cols-1 gap-2 list-disc pl-4 mt-3'>
            {dataDetail?.related?.map((item: Article) => {
              return (
                <li key={item.article_id}>
                  <Link
                    href={`/${newsKeyword}/${item?.article_keyword}`}
                    target='_self'
                    title={item?.article_name.replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"')}
                    className={`text-16 font-normal leading-1-4 text-gray-1 hover:text-blue-2 `}
                  >
                    {item?.article_name.replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"')}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        {listArticleRelated && parentKeyword?.parent?.type_keyword && (
          <SectionArticleRelated dataArticleRelatedList={listArticleRelated} parentKeyword={newsKeyword} t={t} />
        )}
      </div>
    </section>
  )
}
