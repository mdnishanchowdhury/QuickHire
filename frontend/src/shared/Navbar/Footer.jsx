import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1E222B] text-gray-400 py-16 px-6 font-sans">
            <div className="w-full mx-auto lg:px-30">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#4F46E5] rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <span className="text-white text-2xl font-bold tracking-tight">QuickHire</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">About</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Companies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Advice</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Help Docs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Get job notifications</h4>
                        <p className="text-sm mb-6">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-sm">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white px-4 py-3 text-gray-900 outline-none w-full sm:w-auto flex-grow"
                            />
                            <button className="bg-[#4F46E5] text-white px-6 py-3 font-bold hover:bg-[#4338CA] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">2021 @ QuickHire. All rights reserved.</p>

                    <div className="flex gap-4">
                        {[
                            { icon: "f", link: "#" },
                            { icon: "📸", link: "#" },
                            { icon: "🌐", link: "#" },
                            { icon: "in", link: "#" },
                            { icon: "🐦", link: "#" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors text-xs text-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;