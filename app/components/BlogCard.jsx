import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from '@remix-run/react';

const BlogCard = ({ content }) => {
    return (
        <section className="blog-wrapper py-[55px]">
            <div className="container-fluid px-[30px]">
                <div className="title title-black text-center mb-[40px] last:mb-0 capitalize">
                    <h2 className='text-[32px] font-[500]'>
                        {content.heading}
                    </h2>
                </div>
                <div className=" blog-swiper pb-55">
                    <div className="aria-live=" style={{ transitionDuration: '0ms', transitionDelay: "0ms", transform: 'translate3d(0px, 0px, 0px)' }}>
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
                                content.cardRefrenceCollection.items.map((res, index) => (
                                    <SwiperSlide key={index}>
                                        <div style={{ width: '347px', marginRight: '40px' }}>
                                            <div className="flex flex-col gap-[20px] card items-center justify-center">
                                                <Link to={'/'} className="img portrait">
                                                    <img src={res.cardImage.url} height="550" width="424" alt="blog-1" className="h-auto w-full" />
                                                </Link>
                                                <div className="card-detail">
                                                    <div className="title title-black title-relative">
                                                        <h5>
                                                            {res.title}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </section >
    )
}

export default BlogCard