'use client'
import { useDisplay } from '@/lib/hooks/useDisplay'
import type { Article } from '@/types/article.type'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import NewItemSmall from '../../../_component/NewItemSmall'
type ListCategoryItemProps = {
  articleMain: Article[]
  parentKeyword: string
}
export default function ListCategoryItem({ articleMain, parentKeyword }: ListCategoryItemProps) {
  const isMobile = useDisplay(576)
  return (
    <div className='news-list-swiper max-w-full mx-auto xl:mx-0  lg:pl-0 lg:pt-[20px] lg:pb-[30px]'>
      <div className='mt-6'>
        {isMobile ? (
          <Swiper
            slidesPerView={1.25}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            centeredSlides={true}
            pagination={{
              clickable: true
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
          >
            {articleMain?.map((item, index) => {
              if (index > 0) {
                return (
                  <SwiperSlide key={index}>
                    <NewItemSmall article={item} parentKeyword={parentKeyword} />
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>
        ) : (
          <div className='grid grid-cols-2 gap-y-[60px] gap-x-[48px]'>
            {articleMain?.map((item, index) => {
              if (index > 0) {
                return <NewItemSmall article={item} parentKeyword={parentKeyword} key={index} />
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}
