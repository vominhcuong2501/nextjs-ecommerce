import SectionArticleRelated from '@/app/[locale]/(common)/_components/SectionArticleRelated'
import type { Article, ArticleType, PaginationType } from '@/types/article.type'
import type { CustomTypeConfig } from '@/types/common'
import NewItemMain from '../../../_component/NewItemMain'
import Breadcrumb from '../Breadcrumb'
import ListCategoryItem from '../ListCategoryItem'
import PaginationNews from '../PaginationNews'

type NewsCategoryPageProps = {
  parentPage: ArticleType
  listArticleCategory: Article[]
  pagination: PaginationType
  listArticleRelated: Article[]
  newsKeyword: string
  t?: CustomTypeConfig<string>
  homeKeyword: string
}

export default function NewsCategoryPage({
  parentPage,
  listArticleCategory,
  pagination,
  listArticleRelated,
  newsKeyword,
  t,
  homeKeyword
}: NewsCategoryPageProps) {
  return (
    <div className='max-w-[1461px] mx-auto pt-[14px] pb-[62px] lg:pt-[34px] overflow-hidden px-0 lg:px-4'>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='col-span-2 text-center'>
          <h1
            className="text-24 lg:text-[52px] font-medium md:font-bold leading-1-4 text-[#000] inline relative 
          before:absolute before:content-[''] before:h-1 before:w-full before:bg-blue-2 before:-bottom-2 before:rounded before:left-0 before:right-0"
          >
            {parentPage?.type_name}
          </h1>
          <Breadcrumb
            sectionClassName='justify-center'
            items={[
              {
                label: t?.txt_menu_home,
                path: `/${homeKeyword}`
              },
              {
                label: parentPage?.parent?.type_name,
                path: `/${newsKeyword}`
              },
              {
                label: parentPage?.type_name,
                path: `/${newsKeyword}/${parentPage?.type_keyword}`
              }
            ]}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5'>
        <div className='col-span-2'>
          {listArticleCategory && <NewItemMain articleMain={listArticleCategory[0]} parentKeyword={newsKeyword} />}

          {listArticleCategory && <ListCategoryItem articleMain={listArticleCategory} parentKeyword={newsKeyword} />}

          {Math.ceil(pagination?.total / Number(pagination?.per_page)) > 1 && (
            <div className='mt-5 '>
              <PaginationNews pageCount={Math.ceil(pagination?.total / Number(pagination?.per_page))} />
            </div>
          )}
        </div>

        {listArticleRelated && (
          <div className='px-4'>
            <SectionArticleRelated dataArticleRelatedList={listArticleRelated} parentKeyword={newsKeyword} t={t} />
          </div>
        )}
      </div>
    </div>
  )
}
