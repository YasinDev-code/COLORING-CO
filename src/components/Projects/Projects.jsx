import { useState, useEffect } from 'react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: '/img/comp-project/residential-painting.jpg',
            category: 'RESIDENTIAL',
            title: 'Residential Painting',
            description: 'Transform your home with our premium residential painting services. We deliver flawless finishes and lasting results for every room in your house.'
        },
        {
            id: 2,
            image: '/img/comp-project/commercial-painting.jpeg',
            category: 'COMMERCIAL',
            title: 'Commercial Painting',
            description: 'Professional painting solutions for offices, retail spaces, and industrial facilities. We work efficiently to minimize business disruption.'
        },
        {
            id: 3,
            image: '/img/comp-project/house-renovation.jpeg',
            category: 'RENOVATION',
            title: 'House Renovation',
            description: 'Complete house renovation services including painting, repairs, and updates to transform your living space into something extraordinary.'
        },
        {
            id: 4,
            image: '/img/comp-project/spray-painting.jpg',
            category: 'SPECIALTY',
            title: 'Spray Painting & Decoration',
            description: 'Expert spray painting and decorative finishes for a smooth, professional look. Perfect for both interior and exterior applications.'
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="w-full bg-[#2E2A20] py-12 sm:py-14 md:py-16 lg:py-20 overflow-x-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="max-w-3xl mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <img 
                            src="/FIVEICON.png" 
                            alt="Coloring Co Logo" 
                            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                        <span className="text-amber-500 uppercase tracking-wider text-xs sm:text-sm font-medium">
                            Our Signature Services
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
                        Crafting Beautiful Spaces
                    </h2>

                    <p className="text-gray-400/90 text-sm sm:text-base">
                        Discover our portfolio of exceptional painting and renovation services. Each project showcases our unwavering commitment to excellence, artistic precision, and masterful craftsmanship that elevates ordinary spaces into extraordinary environments.
                    </p>
                </div>

                {/* Slider Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                    {/* Left Side - Project Info */}
                    <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative group shadow-lg hover:shadow-xl transition-all duration-500">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-amber-500/10 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-amber-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:bg-amber-500/10 transition-all duration-500"></div>
                        
                        {/* Slide Counter */}
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <div className="relative">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                                    {currentSlide + 1}
                                </div>
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transform origin-left scale-x-100 transition-transform duration-500"></div>
                            </div>
                            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300">/{slides.length}</span>
                        </div>

                        {/* Content */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="inline-block">
                                <div className="bg-amber-500/10 text-amber-500 font-medium text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">
                                    {slides[currentSlide].category}
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                                {slides[currentSlide].title}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {slides[currentSlide].description}
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/img/service-bg-3-1.png')] bg-cover bg-center opacity-30"></div>
                        
                        {/* Images */}
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out transform
                                    ${index === currentSlide 
                                        ? 'opacity-100 scale-100 translate-x-0' 
                                        : index < currentSlide 
                                            ? 'opacity-0 scale-105 -translate-x-full' 
                                            : 'opacity-0 scale-105 translate-x-full'}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                                />
                            </div>
                        ))}

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                            <div 
                                className="h-full bg-amber-500 transition-all duration-[4000ms] ease-linear"
                                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
