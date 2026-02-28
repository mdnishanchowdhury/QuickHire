import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false);
      const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; // show spinner or skeleton
    console.log("user",user)

    return (
        <nav className="w-full bg-[#F8F9FC] relative">
            <div className="w-full mx-auto flex items-center justify-between px-6 md:px-16 lg:px-30 py-4">


                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#4640DE] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold text-[#18191C]">
                        QuickHire
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-[#515B6F] font-medium">
                    <a href="#" className="hover:text-[#4640DE] transition">Find Jobs</a>
                    <a href="#" className="hover:text-[#4640DE] transition">Browse Companies</a>
                    <Link to="/login">
                        <button className="text-[#4640DE] font-semibold hover:text-[#3530b3] transition">Login</button>
                    </Link>
                    <Link to="/signUp">
                        <button className="bg-[#4640DE] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#3530b3] transition">
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 z-50">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-[#515B6F] hover:text-[#4640DE] py-2 transition">Find Jobs</a>
                        <a href="#" className="text-[#515B6F] hover:text-[#4640DE] py-2 transition">Browse Companies</a>

                        <Link to="/login">
                            <button className="text-[#4640DE] font-semibold text-left py-2 hover:text-[#3530b3] transition">Login</button>
                        </Link>
                        <Link to="/signUp">
                            <button className="bg-[#4640DE] text-white py-3 rounded-md font-semibold hover:bg-[#3530b3] transition">
                                Sign Up
                            </button>
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;