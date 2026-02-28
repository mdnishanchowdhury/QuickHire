
const LogoSection = () => {
    return (
        <section className="w-full bg-white py-12 px-6 md:px-20 lg:px-32">
            <div className="w-full mx-auto text-left">

                <h2 className="text-[#A3A3A3] text-[15px] font-normal mb-10">
                    Companies we helped grow
                </h2>

                <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-8 grayscale opacity-60">

                    {/* Vodafone */}
                    <img
                        src="https://i.ibb.co.com/JjNxT9JP/Screenshot-2026-02-28-052836.png"
                        alt="Intel"
                        className="object-contain"
                    />
                    {/* Intel */}
                    <img
                        src="https://i.ibb.co.com/pBcBkWLw/Screenshot-2026-02-28-052854.png"
                        alt="Intel"
                        className="object-contain"
                    />

                    {/* Tesla */}
                    <img
                        src="https://i.ibb.co.com/xtX0dGzc/Screenshot-2026-02-28-052911.png"
                        alt="Tesla"
                        className="object-contain"
                    />

                    {/* AMD */}
                    <img
                        src="https://i.ibb.co.com/VY3D9cJs/Screenshot-2026-02-28-052926.png"
                        alt="AMD"
                        className="object-contain"
                    />


                    <img
                        src="https://i.ibb.co.com/QFCKyX45/Screenshot-2026-02-28-052943.png"
                        alt="AMD"
                        className="object-contain"
                    />

                </div>
            </div>
        </section>
    );
};

export default LogoSection;