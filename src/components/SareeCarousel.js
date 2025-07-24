import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { GOOGLE_API_KEY, DRIVE_SUBFOLDERS, DRIVE_FOLDER_IDS } from "../config/googlecloud";

export default function SareeCarousel() {
  const [sarees, setSarees] = useState([]);

  useEffect(() => {
    async function fetchRandomImages(limit = 6) {
      let allImages = [];

      for (const folderId of Object.values(DRIVE_FOLDER_IDS)) {
        try {
          const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType contains 'image/'&key=${GOOGLE_API_KEY}&fields=files(id,name)&orderBy=name`;
          const res = await fetch(url);
          const data = await res.json();

          if (data?.files?.length > 0) {
            const images = data.files.map(file => ({
              id: file.id,
              name: file.name,
              image: `https://lh3.googleusercontent.com/d/${file.id}=w800`,
              price: "₹---"
            }));
            allImages = allImages.concat(images);
          }
        } catch (err) {
          console.error("Error fetching from folder:", err);
        }
      }

      const shuffled = allImages.sort(() => 0.5 - Math.random());
      setSarees(shuffled.slice(0, limit));
    }

    fetchRandomImages();
  }, []);

  return (
    <div className="bg-maroon-300 py-8">
      <h2 className="text-gold text-3xl font-semibold text-center mb-6">
        Featured Sarees
      </h2>

      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Left Arrow */}
        <button className="custom-prev text-gold text-4xl absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition duration-300">
          ❮
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {sarees.map((saree) => (
            <SwiperSlide key={saree.id} className="p-4">
              <div className="bg-silver shadow-lg rounded-lg overflow-hidden w-80 h-[350px] flex flex-col items-center">
                <img src={saree.image} alt={saree.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{saree.name}</h3>
                  <p className="text-gray-600">{saree.price}</p>
                  <button className="bg-maroon text-silver px-5 py-2 rounded-lg font-semibold transition duration-300 hover:bg-gold hover:text-black hover:shadow-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button className="custom-next text-gold text-4xl absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition duration-300">
          ❯
        </button>
      </div>

      {/* Pagination */}
      <div className="custom-pagination flex justify-center mt-4"></div>

      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            background-color: gold !important;
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #d4af37 !important;
          }
        `}
      </style>
    </div>
  );
}
