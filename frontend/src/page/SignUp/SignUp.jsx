import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/sign-up/email",
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                }
            );

            if (res.data) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Signed Up",
                    showConfirmButton: false,
                    timer: 1500,
                });

                reset();
                navigate("/login");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Signup Failed",
                text: error.response?.data?.message || "Something went wrong",
            });
        }
    };

    useEffect(() => {
        document.title = "QuickHire | SignUp";
    }, []);

    const inputClass =
        "w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent placeholder-gray-400 transition-all text-[#1E293B]";
    const labelClass = "block font-bold text-[#1E293B] mb-2 text-lg";
    const errorClass = "text-red-500 mt-1 text-sm";
    const buttonClass =
        "w-full bg-[#4640DE] hover:bg-[#3b36bc] text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-95 text-xl cursor-pointer";

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC] p-4">
            <div className="w-full max-w-[500px] bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.05)] p-10 sm:p-14">

                <h2 className="text-[54px] font-black text-center text-[#1E293B] mb-10 tracking-tight leading-tight">
                    Sign Up
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label className={labelClass}>Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Enter your name"
                            className={inputClass}
                        />
                        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className={labelClass}>Email</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Enter your email"
                            className={inputClass}
                        />
                        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className={labelClass}>Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })}
                            type="password"
                            placeholder="Enter password"
                            className={inputClass}
                        />
                        {errors.password && (
                            <p className={errorClass}>{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button type="submit" className={buttonClass}>
                            Sign Up
                        </button>
                    </div>
                </form>

                {/* Redirect text */}
                <p className="text-center mt-8 text-[#64748B] font-medium text-lg">
                    Already registered?{" "}
                    <Link to="/login" className="text-[#4640DE] font-bold hover:underline transition-all">
                        Go to Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;