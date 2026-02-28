import { IoLocationOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
const Hero = () => {
    return (
        <section className="bg-[#F8F9FC] relative overflow-hidden ">

            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute w-[520px] h-[400px] border border-[#B8B8FF] rotate-[18deg] right-[5%] top-[10%]"></div>
                <div className="absolute w-[520px] h-[400px] border border-[#B8B8FF] rotate-[18deg] right-[0%] top-[24%]"></div>

                <div className="absolute w-[620px] h-[400px] border border-[#B8B8FF] rotate-[18deg] right-[-10%] top-[24%]"></div>
            </div>

            <main className="relative  px-4 sm:px-8 md:px-16 lg:px-30 grid lg:grid-cols-2 items-center gap-10 lg:gap-0 z-10">

                {/* LEFT CONTENT */}
                <div className="z-10 flex flex-col  lg:items-start">

                    <h1 className="text-[46px] sm:text-[48px] md:text-[72px] font-extrabold text-[#18191C] leading-[1.1] tracking-tight">
                        Discover <br />
                        more than <br />
                        <span className="relative text-[#26A4FF] inline-block">
                            5000+ Jobs
                            <svg
                                className="absolute -bottom-4 sm:-bottom-5 left-0 w-full"
                                viewBox="0 0 300 25"
                                fill="none"
                            >
                                <path
                                    d="M5 20C100 5 200 5 295 20"
                                    stroke="#26A4FF"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="mt-6 md:mt-10 text-[#515B6F] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Great platform for the job seeker that searching for new career
                        heights and passionate about startups.
                    </p>

                    {/* SEARCH BOX */}
                    <div className="mt-8 md:mt-10 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-stretch border border-gray-100 mx-auto lg:mx-0 w-full lg:w-[852px] ">

                        <div className="flex items-center px-5 py-4 flex-1 border-b md:border-b-0 md:border-r border-gray-100 w-full">
                            <span className="text-gray-400 text-xl mr-3"><FiSearch /></span>
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="outline-none w-full text-gray-700 placeholder:text-[#98A2B3]"
                            />
                        </div>

                        <div className="flex items-center px-5 py-4 flex-1  w-full">
                            <span className="text-gray-400 text-xl mr-3"><IoLocationOutline /></span>
                            <select className="outline-none w-full bg-transparent text-gray-700 cursor-pointer appearance-none">
                                <option>Florence, Italy</option>
                            </select>
                        </div>

                        <button className="bg-[#4640DE] text-white px-8 py-4 font-semibold w-full md:w-auto hover:bg-indigo-700 transition rounded-sm whitespace-nowrap">
                            Search my job
                        </button>
                    </div>

                    <p className="mt-6 text-[#98A2B3] text-sm flex gap-2 flex-wrap justify-center lg:justify-start">
                        Popular :
                        <span className="text-[#18191C] font-semibold">
                            UI Designer, UX Researcher, Android, Admin
                        </span>
                    </p>
                </div>

                <div className="relative hidden lg:flex justify-center lg:justify-end items-end order-1 lg:order-2 mb-10 lg:mb-0 w-full">
                    {/* Image */}
                    <div className="relative mt-3">
                        <img
                            src="/image/image.png"
                            alt="Person smiling"
                            className="w-[501px] h-auto object-cover"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
                            }}
                        />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Hero;