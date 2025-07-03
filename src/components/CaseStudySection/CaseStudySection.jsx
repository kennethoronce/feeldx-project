import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const clientLogos = [
  'https://www.feeldx.com/uploads/clients/7wm65lZyMYlbvcXAbeMAjWES9JzKGPrHwnPiy4w5.jpg',
  'https://www.feeldx.com/uploads/clients/rbhWqGjCcQiLDsiShnUIsLm9pJiJpLKU852pW0xm.jpg',
  'https://www.feeldx.com/uploads/clients/gud3PjPfqpCJiRKLptHAMq8QtHBMZ9mPU1mcPMi9.webp',
  'https://www.feeldx.com/uploads/clients/LWack5DnOuJhlwYdICGwMJR7lH2ypoxu7NgV4sr6.jpg',
  'https://www.feeldx.com/uploads/clients/UEQvBtgnVE6ENaJePmTcVoR7Vd8fli02Nlb3vmUE.png',
  'https://www.feeldx.com/uploads/clients/c0uqAwlsHiMJbbPrgOm7jow1hUIN2BZCpjffoxaS.png',
  'https://www.feeldx.com/uploads/clients/YHK41BDW30sxiTsNtShwW3358JKIiyxiWhVq75F0.png',
  'https://www.feeldx.com/uploads/clients/sQYVUFMjZ2ZykPajQMqjlSy62VfuNuTTohVolv4r.jpg',
  'https://www.feeldx.com/uploads/clients/zIFnl1mnllU1xRUq5d4oQIZQYGgj6SDvBvfn7F2j.jpg',
  'https://www.feeldx.com/uploads/clients/1e1GYy3C8hudBdiPWhK0skVXeScziALnMlgcyCuQ.png',
  'https://www.feeldx.com/uploads/clients/YaZ0BHj0yCs3NjRvO93RsKQpwHhtlX5lAMeR1eyb.png',
  'https://www.feeldx.com/uploads/clients/2CNfOGlQnlzVxDsqyHCllhnaWL1RfDaOF7B8JzqQ.png',
  'https://www.feeldx.com/uploads/clients/IrmkHKuwmlYphjXA66yXnGgMyabV16xSKKoullY4.png',
  'https://www.feeldx.com/uploads/clients/haeMZUJLHSD0QzbnkfAda4jnvnrmEcH9MeCIG2eu.png',
  'https://www.feeldx.com/uploads/clients/lr68BGWZz28BWnn902WEFmOB5mr4qiw7ngWJxmTA.jpg',
  'https://www.feeldx.com/uploads/clients/PHzh20dUKadSuWWFrbbvZYFfL3baug9yqahXzlMZ.jpg',
  'https://www.feeldx.com/uploads/clients/BKFMd03erwjzGzIMc8T7kePddUPYLt7p8P8vGhFb.png',
  'https://www.feeldx.com/uploads/clients/erdNALzU4FHS0MjO9LBBSYwL7flP01ThNettRl9l.jpg',
  'https://www.feeldx.com/uploads/clients/eh29Vv7zAfzFFSYtLG0d4WK7ciPzKP9tQuufbpoi.png',
  'https://www.feeldx.com/uploads/clients/mGJvkjmwEmqYTYpqfgJqWbfrWLxfKwxAyfw7CWEK.png',
  'https://www.feeldx.com/uploads/clients/AVPRfRZiO8YQSKabwcjxpNXYsNl3USIDqbyZVhYO.png',
  'https://www.feeldx.com/uploads/clients/8xtdthjObc4VM9fk5U4XZmEiw58m3Co1rh7lg4q1.png',
  'https://www.feeldx.com/uploads/clients/iGK9xnGPmVTRyB5rxBa4fBAh1nqVquofJEBc9nDM.png',
  'https://www.feeldx.com/uploads/clients/OkX0FWiwVzTLVUgJGpkcedGWW38Ztjn8epujXeQr.png',
  'https://www.feeldx.com/uploads/clients/MVjK52RMqG8OSYvtuCW6dAB8TKWk60EyR5dgOB5Y.jpg',
  'https://www.feeldx.com/uploads/clients/0gpR1uuITzdkKRtHOGuEi9jTJQkXIl8NWY6Nvwj5.png',
  'https://www.feeldx.com/uploads/clients/8VY1oI3kVTEdIcy28QIHBXYEalEtwEVOSHVBxDs6.png',
  'https://www.feeldx.com/uploads/clients/lQ1Jiraiv3NCoIgynShklueXDEYjptMXjzEJV65B.png',
  'https://www.feeldx.com/uploads/clients/91zBUdjlBOOrCEwZkfnPKYY3A1254lwxfjbpDGLe.png',
  'https://www.feeldx.com/uploads/clients/0oShJuxxZIZDrBTgeJ1lAeVyLXWHrKaEhl0xcKH0.png',
  'https://www.feeldx.com/uploads/clients/w95l7k9lsTAKEL1HeIR96vbbZwTiHdjNNrSJM4Xa.jpg',
  'https://www.feeldx.com/uploads/clients/TJPXbkP4Ebx7LZtMHsnyV8XmovejxLC8CjRunCLe.jpg',
  'https://www.feeldx.com/uploads/clients/FVomZ1Sl6V4L5S3ir48yQZje2vYCnehxVxXl14aX.png',
  'https://www.feeldx.com/uploads/clients/2SBhgn5SdBnir3o7ocAoSF7OFkd5njkkvD4m4azQ.png',
  'https://www.feeldx.com/uploads/clients/tUE4mIKNmnjbguXH0Te1gY5S1DUDVmzrl2HUuuts.png',
  'https://www.feeldx.com/uploads/clients/TPOgBzoJI6O1PzM1CiSW6EPHkUdtIunS3n0f4Yfn.png',
  'https://www.feeldx.com/uploads/clients/1B2G1LwKwqw1PwAdbIcaTvVpHnPBipB5mp12mYE6.png'
];

const projects = [
  {
    title: 'Queen Victoria Market',
    sector: 'Commercial, Retail',
    location: 'VIC',
    value: '$200M+',
    deliverables: ['High resolution completion shots'],
    image: 'https://www.feeldx.com/uploads/projects/OTzFuQS03LlDJD3zZYCnr3ylpu8f6OyHAmHRGmBN.jpg',
  },
  {
    title: 'Our Lady of Sion College',
    sector: 'Education - College, High school, Primary School',
    value: '$20m-$30m',
    deliverables: ['Tender programme', '3D Construction methodology', 'Completion shots'],
    image: 'https://www.feeldx.com/uploads/projects/fJ7IDzJpMQsOTL5MYztGHgymcEWZxML3CXAtcYf5.jpg',
  },
  {
    title: 'Merrifield South Community Centre',
    sector: 'Government & Councils',
    location: 'VIC',
    value: '$10m-$15m',
    deliverables: ['Tender programme', '3D Construction methodology', 'Completion shots'],
    image: 'https://www.feeldx.com/uploads/projects/iPbu7Rghb6XikY6xlAagmN1m66IZY6VAK7m75cob.jpg',
  },
  {
    title: 'Bays Cancer Centre',
    sector: 'Health & Aged Care',
    location: 'VIC',
    value: '$20m-$30m',
    deliverables: ['Tender Programme', '3D Construction methodology', 'Completion shots'],
    image: 'https://www.feeldx.com/uploads/projects/90ONQtLQ3zimfjyieNRNb5QRTwqiYOAd3eibY5l4.jpg',
  },
  {
    title: 'Richmond Passive Haus',
    sector: 'Residential',
    location: 'VIC',
    value: '$15m-$20m',
    deliverables: ['3D & 4D Construction methodology', 'Completion shots', 'Flythrough'],
    image: 'https://www.feeldx.com/uploads/projects/AVfYtUYYC6813LERUZbXArTm1fgRWtVjgBAtpyOb.jpg',
  },
];

const CaseStudySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
    <section id="case-studies" className="py-16 px-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">
            Highlight Projects
            </h2>
            <div className='shadow-lg'> 
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                >
                {projects.map((project, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[450px]">
                        <img
                        src={project.image}
                        alt={project.title}
                        className="h-48 w-full object-cover cursor-pointer hover:opacity-90 transition"
                        onClick={() => setSelectedImage(project.image)}
                        />
                        <div className="p-4 flex flex-col justify-start flex-1">
                        <div className="flex-1 space-y-1">
                            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                            {project.sector && <p className="text-sm text-gray-600">Sector: {project.sector}</p>}
                            {project.location && <p className="text-sm text-gray-600">Location: {project.location}</p>}
                            <p className="text-sm text-gray-600">Value: {project.value}</p>
                            <div className="mt-2">
                            <h4 className="text-sm font-semibold text-gray-800 mb-1">Deliverables:</h4>
                            <ul className="list-disc list-inside pl-4 space-y-0.5 text-sm text-gray-600">
                                {project.deliverables.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            

            <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mt-20 mb-12">
            Our Clients
            </h2>

            <div className='bg-white p-4 rounded-lg shadow-lg'>
                <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                modules={[Autoplay]}
                >
                {clientLogos.map((logo, idx) => (
                    <SwiperSlide key={idx}>
                    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                        <img src={logo} alt={`Client ${idx}`} className="h-16 object-contain" />
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-3xl w-full p-4 relative">
                    <img
                        src={selectedImage}
                        alt="Project Full"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <button
                        className="absolute top-5 right-5 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
                        onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                        }}
                    >
                        ✕
                    </button>
                    </div>
                </div>
            )}
        </div>
    </section>
  );
};

export default CaseStudySection;
