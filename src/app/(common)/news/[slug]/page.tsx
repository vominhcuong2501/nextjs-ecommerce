import { NEXT_PUBLIC_BASE_URL } from '@/constants/configGlobal'
import {
  useGetArticleByArticleKeyword,
  useGetArticleTypeByTypeKeyword,
  useGetListArticleByType
} from '@/lib/api/server/articleService'
import {
  decodeHtmlEntities,
  getConfig,
  getDetailLocationByLangCodeAndLocationCode,
  splitLocale
} from '@/lib/utils/utilFuncs'
import type { Article, ArticleDetailQueryParams, ArticleQueryParams, ArticleType } from '@/types/article.type'
import type { CustomSearchParam } from '@/types/common'
import { redirect } from 'next/navigation'
import './../news.css'
import NewsCategoryPage from './_component/NewsCategoryPage'
import NewsDetailPage from './_component/NewsDetailPage'

interface Props {
  searchParams: CustomSearchParam
  params: {
    slug: string
    locale: string
  }
}

const PER_PAGE = 9

export async function generateMetadata({ searchParams: { lang, location, locale, current_url }, params }: Props) {
  const currentArticleTypeResponse = await getArticleTypeByTypeKeyword(params.slug, lang, location)
  const isBlogType = currentArticleTypeResponse?.success

  /**
   * Case Route is Blog Type
   */
  if (isBlogType) {
    const currentArticleType: ArticleType = currentArticleTypeResponse?.data
    return {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: {
        default: decodeHtmlEntities(currentArticleType.type_title)
      },
      authors: [{ name: 'BIN Corporation Group' }],
      description: decodeHtmlEntities(currentArticleType.type_meta_description),
      keywords: decodeHtmlEntities(currentArticleType.type_meta_keyword),
      openGraph: {
        title: {
          default: decodeHtmlEntities(currentArticleType.type_title)
        },
        description: decodeHtmlEntities(currentArticleType.type_meta_description),
        images: [
          {
            url: currentArticleType.type_meta_image,
            width: 1920,
            height: 1080
          }
        ],
        locale: locale,
        type: 'website'
      },
      robots: {
        index: true,
        follow: true
      },
      alternates: {
        canonical: current_url
      },
      charset: 'utf-8'
    }
  }

  /**
   * Case Route is Blog Detail
   */
  const articleDetailResponse = await getArticleByArticleKeyword(params.slug, lang, location)

  const articleDetail = articleDetailResponse?.data

  return {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    title: {
      default: decodeHtmlEntities(articleDetail?.article_title)
    },
    authors: [{ name: 'BIN Corporation Group' }],
    description: decodeHtmlEntities(articleDetail?.article_meta_description),
    keywords: decodeHtmlEntities(articleDetail?.article_meta_keyword),
    openGraph: {
      title: {
        default: decodeHtmlEntities(articleDetail?.article_title)
      },
      description: decodeHtmlEntities(articleDetail?.article_meta_description),
      images: [
        {
          url: articleDetail?.article_meta_image,
          width: 1920,
          height: 1080
        }
      ],
      locale: locale,
      type: 'website'
    },
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: current_url
    },
    charset: 'utf-8'
  }
}

export default async function NewsPageDetail({ searchParams, params }: Props) {
  const { lang, location } = splitLocale(params.locale)

  const listReadMoreQueryParams: ArticleQueryParams = {
    page: 1,
    per_page: 8
  }

  const articleDetailQueryParams: ArticleQueryParams = {
    get_related: true,
    limit_related: 3,
    token: searchParams?.token || ''
  }

  const articlesByCurrentTypeQueryParams: ArticleQueryParams = {
    page: Number(searchParams.page),
    per_page: PER_PAGE
  }

  const schemaConfig = ['txt_brand_name', 'schema_logo_png']
  const configPage = ['btn_read_more', 'txt_menu_home', 'txt_related_news']
  const { t } = await getConfig([...configPage, ...schemaConfig], lang, location)
  const configDictSchema: { [key: string]: string } = {}
  const configDict: { [key: string]: string } = {}
  configPage?.forEach((itemConfig) => (configDict[itemConfig] = t(itemConfig)))
  schemaConfig?.forEach((itemConfig) => (configDictSchema[itemConfig] = t(itemConfig)))

  const getCurrentArticleType = getArticleTypeByTypeKeyword(params.slug, lang, location)

  const [currentArticleTypeResponse] = await Promise.all([getCurrentArticleType])

  const homeKeyword = `${params.locale !== 'en-gx' ? params.locale : ''}`

  if (currentArticleTypeResponse?.success) {
    const newsKeyword = `${params.locale !== 'en-gx' ? params.locale + '/' : ''}${currentArticleTypeResponse?.data
      ?.parent.type_keyword}`

    const getFeaturedArticles = getListArticleByType(params.slug, lang, location, articlesByCurrentTypeQueryParams)

    const [responseListArticle] = await Promise.all([getFeaturedArticles])

    const listRelatedFilter = responseListArticle?.data?.slice(5)

    const listFeatured = responseListArticle?.data?.slice(0, 5)

    const dataSchema = responseListArticle?.data?.map((item: Article, index: number) => {
      return {
        '@type': 'ListItem',
        position: index,
        item: {
          '@id': `${NEXT_PUBLIC_BASE_URL}/${newsKeyword}/${item.article_keyword}`,
          name: item.article_name.replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"')
        }
      }
    })

    const jsonListItem = {
      '@context': 'http://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement: dataSchema
    }

    return (
      <>
        {responseListArticle?.data && (
          <NewsCategoryPage
            newsKeyword={newsKeyword}
            parentPage={currentArticleTypeResponse?.data}
            listArticleCategory={listFeatured}
            pagination={responseListArticle?.pagination}
            listArticleRelated={listRelatedFilter}
            t={configDict}
            homeKeyword={homeKeyword}
          />
        )}
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonListItem) }}></script>
      </>
    )
  }

  /**
   * Case Route is News Detail
   */
  const getArticleDetail = getArticleByArticleKeyword(params.slug, lang, location, articleDetailQueryParams)

  const [articleDetailResponse] = await Promise.all([getArticleDetail])

  const getListReadMore = getListArticleByType(
    articleDetailResponse?.data?.type[0].type_keyword,
    lang,
    location,
    listReadMoreQueryParams
  )

  const [responseListReadMore] = await Promise.all([getListReadMore])

  const newsKeyword = `${params.locale !== 'en-gx' ? params.locale + '/' : ''}${articleDetailResponse?.data?.type[0]
    .parent.type_keyword}`

  if (!articleDetailResponse?.success) redirect('/notfound.html')

  const listReadMoreFilterNotDetail = responseListReadMore?.data?.filter((item: Article) => {
    return item?.article_keyword !== articleDetailResponse?.data?.article_keyword
  })

  const listReadMoreNotRelated = listReadMoreFilterNotDetail?.filter(
    (item1: Article) =>
      !articleDetailResponse?.data?.related.some((item2: Article) => item2.article_keyword === item1.article_keyword)
  )

  const dataReadMoreFilter = listReadMoreNotRelated?.slice(0, 4)

  const [detailLocation] = await Promise.all([getDetailLocationByLangCodeAndLocationCode(lang, location)])

  const domainPage = `${NEXT_PUBLIC_BASE_URL}`

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getAllValues(obj: any): any[] {
    const values = []
    if (typeof obj === 'object') {
      for (const key in obj) {
        values.push(...getAllValues(obj[key]))
      }
    } else {
      values.push(obj)
    }
    return values
  }

  function convertEpochToYMD(epochTime: number) {
    const dateObject = new Date(epochTime * 1000)
    const year = dateObject.getFullYear()
    const month = ('0' + (dateObject.getMonth() + 1)).slice(-2)
    const day = ('0' + dateObject.getDate()).slice(-2)
    return year + '-' + month + '-' + day
  }

  const jsonWebsite = {
    '@type': 'WebSite',
    '@id': `${domainPage}/${newsKeyword}/#website`,
    url: domainPage,
    name: detailLocation?.location_legal_entity_name,
    inLanguage: detailLocation?.location_lang_code,
    description: articleDetailResponse?.data?.article_meta_description,
    publisher: {
      '@id': `${domainPage}/${newsKeyword}/#organization`
    }
  }

  const jsonImgObject = {
    '@type': 'ImageObject',
    '@id': `${domainPage}/${newsKeyword}/${articleDetailResponse?.data.article_keyword}/#primaryimage`,
    inLanguage: detailLocation?.location_lang_code,
    url: articleDetailResponse?.data?.article_meta_image,
    width: 1920,
    height: 960,
    caption: articleDetailResponse?.data?.article_name
  }

  const jsonWebPage = {
    '@type': 'WebPage',
    '@id': `${domainPage}/${newsKeyword}/${articleDetailResponse?.data.article_keyword}/#webpage`,
    url: `${domainPage}/${newsKeyword}/${articleDetailResponse?.data.article_keyword}`,
    name: articleDetailResponse?.data?.article_name,
    isPartOf: {
      '@id': `${domainPage}/${newsKeyword}/#website`
    },
    inLanguage: detailLocation?.location_lang_code,
    primaryImageOfPage: {
      '@id': `${domainPage}/${newsKeyword}/${articleDetailResponse?.data.article_keyword}/#primaryimage`
    },
    description: articleDetailResponse?.data?.article_meta_description
  }

  const jsonArticle = {
    '@type': 'Article',
    '@id': `${domainPage}/${newsKeyword}/${articleDetailResponse?.data.article_keyword}`,
    headline: articleDetailResponse?.data?.article_name.replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"'),
    alternativeHeadline: articleDetailResponse?.data?.article_title.replaceAll(/&#39;/g, "'").replaceAll(/&#34;/g, '"'),
    image: articleDetailResponse?.data?.article_meta_image,
    author: configDictSchema.txt_brand_name,
    award: '',
    editor: configDictSchema.txt_brand_name,
    genre: 'search engine optimization',
    keywords: articleDetailResponse?.data?.article_meta_keyword,
    inLanguage: detailLocation?.location_lang_code,
    wordcount: getAllValues(articleDetailResponse?.data?.article_content_replace)
      .join(' ')
      .replace(/(<([^>]+)>)/gi, '').length,
    publisher: {
      '@type': 'Organization',
      name: configDictSchema.txt_brand_name,
      logo: {
        '@type': 'ImageObject',
        url: configDictSchema.schema_logo_png
      }
    },
    datePublished: convertEpochToYMD(articleDetailResponse?.data?.article_insert_time),
    dateCreated: convertEpochToYMD(articleDetailResponse?.data?.article_insert_time),
    dateModified: convertEpochToYMD(articleDetailResponse?.data?.article_update_time),
    description: articleDetailResponse?.data?.article_meta_description
      .replaceAll(/&#39;/g, "'")
      .replaceAll(/&#34;/g, '"'),
    articleBody: getAllValues(articleDetailResponse?.data?.article_content_replace)
      .join(' ')
      .replace(/(<([^>]+)>)/gi, ''),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${domainPage}/${newsKeyword}/${articleDetailResponse?.data.article_keyword}`
    }
  }

  return (
    <>
      {articleDetailResponse?.data && (
        <NewsDetailPage
          newsKeyword={newsKeyword}
          parentKeyword={articleDetailResponse?.data?.type[0]}
          dataDetail={articleDetailResponse?.data}
          listArticleRelated={dataReadMoreFilter}
          t={configDict}
          homeKeyword={homeKeyword}
        />
      )}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonWebsite) }}></script>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonImgObject) }}></script>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonWebPage) }}></script>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonArticle) }}></script>
    </>
  )
}

async function getArticleTypeByTypeKeyword(typeKeyword: string, lang: string, location: string) {
  return await useGetArticleTypeByTypeKeyword(typeKeyword, lang, location)
}

async function getListArticleByType(
  typeKeyword: string,
  lang: string,
  location: string,
  queryParams: ArticleQueryParams
) {
  return await useGetListArticleByType(typeKeyword, lang, location, queryParams)
}

async function getArticleByArticleKeyword(
  articleKeyword: string,
  lang: string,
  location: string,
  queryParams?: ArticleDetailQueryParams
) {
  return await useGetArticleByArticleKeyword(articleKeyword, lang, location, queryParams)
}
