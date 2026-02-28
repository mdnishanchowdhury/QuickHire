import React from "react";

const FeaturedJobs = () => {
  return (
    <div className="bg-white  font-sans">

      <section className="w-full mx-auto px-4 lg:px-30 py-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-[#25324B]">
            Featured <span className="text-[#26A4FF]">jobs</span>
          </h2>
          <a href="#" className="text-[#4640DE] font-bold flex items-center gap-2">
            Show all jobs 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobData.map((job, index) => (
            <div key={index} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="flex justify-between items-start mb-4">
                <img src={job.logo} alt={job.company} className="w-12 h-12 object-contain" />
                <span className="border border-[#4640DE] text-[#4640DE] text-xs font-semibold px-3 py-1">Full Time</span>
              </div>
              <h3 className="font-bold text-lg text-[#25324B] mb-1">{job.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{job.company} • {job.location}</p>
              <p className="text-gray-600 text-sm line-clamp-2 mb-6">{job.desc}</p>
              <div className="flex gap-2">
                {job.tags.map((tag, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${tag === 'Marketing' ? 'bg-orange-50 text-orange-500' : 'bg-green-50 text-green-500'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const jobData = [
  { title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", desc: "Revolut is looking for Email Marketing to help team ma...", logo: "https://logo.clearbit.com/revolut.com", tags: ["Marketing", "Design"] },
  { title: "Brand Designer", company: "Dropbox", location: "San Fransisco, US", desc: "Dropbox is looking for Brand Designer to help the team t...", logo: "https://logo.clearbit.com/dropbox.com", tags: ["Design", "Business"] },
  { title: "Email Marketing", company: "Pitch", location: "Berlin, Germany", desc: "Pitch is looking for Customer Manager to join marketing t...", logo: "https://logo.clearbit.com/pitch.com", tags: ["Marketing"] },
  { title: "Visual Designer", company: "Blinklist", location: "Granada, Spain", desc: "Blinklist is looking for Visual Designer to help team desi...", logo: "https://logo.clearbit.com/blinkist.com", tags: ["Design"] },
  { title: "Email Marketing", company: "Pitch", location: "Berlin, Germany", desc: "Pitch is looking for Customer Manager to join marketing t...", logo: "https://logo.clearbit.com/pitch.com", tags: ["Marketing"] },
  { title: "Visual Designer", company: "Blinklist", location: "Granada, Spain", desc: "Blinklist is looking for Visual Designer to help team desi...", logo: "https://logo.clearbit.com/blinkist.com", tags: ["Design"] },
  { title: "Visual Designer", company: "Blinklist", location: "Granada, Spain", desc: "Blinklist is looking for Visual Designer to help team desi...", logo: "https://logo.clearbit.com/blinkist.com", tags: ["Design"] },
  { title: "Visual Designer", company: "Blinklist", location: "Granada, Spain", desc: "Blinklist is looking for Visual Designer to help team desi...", logo: "https://logo.clearbit.com/blinkist.com", tags: ["Design"] },
];

export default FeaturedJobs;