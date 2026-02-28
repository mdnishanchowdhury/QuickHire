import React, { useState } from 'react';
import { 
  FiArrowRight, 
  FiPenTool, 
  FiBarChart2, 
  FiSpeaker, 
  FiCreditCard, 
  FiMonitor, 
  FiCode, 
  FiBriefcase, 
  FiUsers 
} from 'react-icons/fi';

const CategoryGrid = () => {
  const [activeId, setActiveId] = useState(3); 

  const categories = [
    { id: 1, title: 'Design', jobs: '235 jobs available', icon: <FiPenTool /> },
    { id: 2, title: 'Sales', jobs: '756 jobs available', icon: <FiBarChart2 /> },
    { id: 3, title: 'Marketing', jobs: '140 jobs available', icon: <FiSpeaker /> },
    { id: 4, title: 'Finance', jobs: '325 jobs available', icon: <FiCreditCard /> },
    { id: 5, title: 'Technology', jobs: '436 jobs available', icon: <FiMonitor /> },
    { id: 6, title: 'Engineering', jobs: '542 jobs available', icon: <FiCode /> },
    { id: 7, title: 'Business', jobs: '211 jobs available', icon: <FiBriefcase /> },
    { id: 8, title: 'Human Resource', jobs: '346 jobs available', icon: <FiUsers /> },
  ];

  return (
    <section className="bg-white py-10 px-6 md:py-20 md:px-24 font-sans">
      <div className="w-full mx-auto lg:px-10">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#202430]">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h2>
          <button className="hidden md:flex text-[#4640DE] font-bold items-center gap-2 hover:underline transition-all">
            Show all jobs <FiArrowRight strokeWidth={3} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((item) => {
            const isActive = activeId === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`
                  p-5 md:p-8 border transition-all duration-300 cursor-pointer group flex items-center md:items-start md:flex-col
                  ${isActive 
                    ? 'bg-[#4640DE] border-[#4640DE] text-white shadow-xl md:scale-105 z-10' 
                    : 'bg-white border-gray-100 md:border-gray-200 hover:border-[#4640DE]'
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  text-3xl md:text-5xl mr-5 md:mr-0 md:mb-8 transition-colors
                  ${isActive ? 'text-white' : 'text-[#4640DE]'}
                `}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 md:w-full">
                  <h3 className={`text-xl md:text-2xl font-bold mb-1 md:mb-4 ${isActive ? 'text-white' : 'text-[#202430]'}`}>
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <p className={`text-sm md:text-lg ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
                      {item.jobs}
                    </p>
                    {/* Arrow Icon */}
                    <FiArrowRight 
                      className={`text-xl md:text-2xl transition-transform group-hover:translate-x-1 ${
                        isActive ? 'text-white' : 'text-gray-800'
                      }`} 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 md:hidden">
          <button className="text-[#4640DE] font-bold flex items-center gap-2 text-lg">
            Show all jobs <FiArrowRight strokeWidth={2} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;