import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const BlogWrites = ({ content }) => {
    return (
        <section className="auther-wrapper bg-light_brown-400 bg-rose">
            <div className="container-fluid px-[30px]">
                <div className="py-[55px] mdscreen2:py-80 flex">
                <Swiper 
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides={true}
                  breakpoints={{
                      560: {
                          slidesPerView: 1.4,
                          spaceBetween:90,
                          centeredSlides:true
                      },
                      720: {
                          slidesPerView: 2.1,
                          spaceBetween:90,
                          centeredSlides:false
                      },
                      768: {
                          slidesPerView: 2.1,
                          spaceBetween:30,
                          centeredSlides:false
                      },
                      1024:{
                          slidesPerView: 3,
                          spaceBetween:30,
                          centeredSlides:false
                      }
                  }}
                  className='h-full'>
                    {
                        content.writeContent.map((res,index) => (
                            <SwiperSlide key={index}>
                            <div key={index} className="flex flex-col gap-[20px] justify-center items-center m-0 p-0 mdscreen:max-w-[500px] mdscreen:m-auto">
                                <div className="content text-center">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus eros, fringilla in pulvinar vel."
                                    </p>
                                </div>
                                <div className="title title-relative title-black">
                                    <h5>
                                        - Author
                                    </h5>
                                </div>
                            </div>
</SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default BlogWrites