import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';



const Live = () => {


    const [liveTword, setLiveTword] = useState('');
    const [resultIndexTword, setResultIndexTword] = useState('');
    const [resultEven, setResultEven] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.thaistock2d.com/live');
                const data = response.data;

                // console.log(data.result)

                // Extracting the required fields
                setLiveTword(data.live?.twod || 'N/A');
                setResultIndexTword(data.result?.[1]?.twod || 'N/A');
                setResultEven(data.result?.[3]?.twod || 'N/A');
            } catch (err) {
                setError('Failed to load data from API');
                console.error(err);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 1000); // Fetch data every second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // console.log(liveTword);
    
    
  return (
    <div className=' '>
      <div className=' shadow-2xl rounded-xl h-25 w-[80%] md:w-[400px] items-center mx-auto bg-gradient-to-b from-yellow-900 to-black text-white  mb-2'>
        <div className=' mb-5 mt-5 mx-10 px-3 flex justify-between items-center text-white'>
            <div className=' font-bold text-md'>12:01</div>
            <div className={`text-2xl font-bold ${resultIndexTword == '--' ? 'animate-pulse' : 'text-blue-400'}`} >{resultIndexTword !== '--' ? resultIndexTword : liveTword}</div>
        </div>
        <hr className=' mx-10' />
        <div className=' mt-5 mb-5 mx-10 px-3 flex justify-between items-center text-white'>
            <div className=' font-bold text-md'>16:30</div>
            <div className={`text-2xl font-bold ${resultEven == '--' ? 'animate-pulse' : 'text-blue-400'}`} >{resultEven !== '--' ? resultEven: liveTword}</div>

        </div>

      </div>


    
     
    </div>
  )
}

export default Live








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay'; // Import autoplay CSS
// import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

// const Live = () => {
//     const [liveTword, setLiveTword] = useState('');
//     const [resultIndexTword, setResultIndexTword] = useState('');
//     const [resultEven, setResultEven] = useState('');
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.thaistock2d.com/live');
//                 const data = response.data;

//                 setLiveTword(data.live?.twod || 'N/A');
//                 setResultIndexTword(data.result?.[1]?.twod || 'N/A');
//                 setResultEven(data.result?.[3]?.twod || 'N/A');
//             } catch (err) {
//                 setError('Failed to load data from API');
//                 console.error(err);
//             }
//         };

//         fetchData();
//         const interval = setInterval(fetchData, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
        // <Swiper
        //     modules={[Pagination, Autoplay]}
        //     pagination={{ clickable: true }}
        //     autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide settings
        //     spaceBetween={10}
        //     slidesPerView={1}
        //     style={{ width: '80%', margin: 'auto' }}
        // >
//             <SwiperSlide>
//                 <div className='h-25 w-full md:w-[400px] mx-auto bg-gradient-to-b from-yellow-900 to-black text-white mb-2'>
//                     <div className='mb-5 mt-5 mx-10 px-3 flex justify-between items-center text-white'>
//                         <div className='font-bold text-md'>12:01</div>
//                         <div
//                             className={`text-2xl font-bold ${
//                                 resultIndexTword === '--' ? 'animate-pulse' : ''
//                             }`}
//                         >
//                             {resultIndexTword !== '--' ? resultIndexTword : liveTword}
//                         </div>
//                     </div>
//                     <hr className='mx-10' />
//                     <div className='mt-5 mb-5 mx-10 px-3 flex justify-between items-center text-white'>
//                         <div className='font-bold text-md'>16:30</div>
//                         <div
//                             className={`text-2xl font-bold ${
//                                 resultEven === '--' ? 'animate-pulse' : ''
//                             }`}
//                         >
//                             {resultEven !== '--' ? resultEven : liveTword}
//                         </div>
//                     </div>
//                 </div>
//             </SwiperSlide>

//             <SwiperSlide>
//                 <div className='h-25 w-full md:w-[400px] mx-auto bg-gradient-to-b from-yellow-900 to-black text-white mb-2'>
//                     <div className='mb-5 mt-5 mx-10 px-3 flex justify-between items-center text-white'>
//                         <div className='font-bold text-md'>12:01</div>
//                         <div
//                             className={`text-2xl font-bold ${
//                                 resultIndexTword === '--' ? 'animate-pulse' : ''
//                             }`}
//                         >
//                             {resultIndexTword !== '--' ? resultIndexTword : liveTword}
//                         </div>
//                     </div>
//                     <hr className='mx-10' />
//                     <div className='mt-5 mb-5 mx-10 px-3 flex justify-between items-center text-white'>
//                         <div className='font-bold text-md'>16:30</div>
//                         <div
//                             className={`text-2xl font-bold ${
//                                 resultEven === '--' ? 'animate-pulse' : ''
//                             }`}
//                         >
//                             {resultEven !== '--' ? resultEven : liveTword}
//                         </div>
//                     </div>
//                 </div>
//             </SwiperSlide>
//         </Swiper>
//     );
// };

// export default Live;
