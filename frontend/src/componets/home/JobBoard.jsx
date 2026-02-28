import React from 'react';

const JobBoard = () => {
    const jobs = [
        { id: 1, title: "Social Media Assistant", company: "Nomad", location: "Paris, France", logo: "🟢", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 2, title: "Social Media Assistant", company: "Netlify", location: "Paris, France", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 3, title: "Brand Designer", company: "Dropbox", location: "San Fransisco, USA", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 4, title: "Brand Designer", company: "Maze", location: "San Fransisco, USA", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 5, title: "Interactive Developer", company: "Terraform", location: "Hamburg, Germany", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 6, title: "Interactive Developer", company: "Udacity", location: "Hamburg, Germany", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 7, title: "HR Manager", company: "Packer", location: "Lucern, Switzerland", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 8, title: "HR Manager", company: "Webflow", location: "Lucern, Switzerland", tags: ["Full-Time", "Marketing", "Design"] },
    ];

    return (
        <div className="bg-[#F8F9FC]  px- lg:px-0 font-sans">
            <div className="w-full mx-auto lg:px-30 py-10">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1E293B]">
                        Latest <span className="text-[#3B82F6]">jobs open</span>
                    </h2>
                    <button className="flex items-center text-[#4F46E5] font-bold text-lg hover:underline group w-fit">
                        Show all jobs
                        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow cursor-pointer"
                        >
                            {/* Logo Placeholder */}
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg text-2xl">
                                {job.logo}
                            </div>

                            <div className="w-full">
                                <h3 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-1">
                                    {job.title}
                                </h3>
                                <p className="text-[#64748B] text-sm md:text-base mb-6">
                                    {job.company} • {job.location}
                                </p>

                                {/* Badges Section */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#F0FDF4] text-[#22C55E] border border-[#DCFCE7]">
                                        Full-Time
                                    </span>
                                    <div className="hidden md:block w-[1px] h-4 bg-gray-200 mx-1"></div>
                                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#FFF7ED] text-[#F97316] border border-[#FFEDD5]">
                                        Marketing
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#EEF2FF] text-[#6366F1] border border-[#E0E7FF]">
                                        Design
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default JobBoard;