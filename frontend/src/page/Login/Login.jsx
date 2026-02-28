import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/sign-in/email",
                {
                    email: data.email,
                    password: data.password,
                },
                { withCredentials: true }
            );

            if (res.data) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response?.data?.message || "Invalid email or password",
            });
        }
    };

    useEffect(() => {
        document.title = "QuickHire | Login";
    }, []);

    const inputClass =
        "w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#4640DE] focus:border-transparent placeholder-gray-400 transition-all text-[#1E293B]";
    const labelClass = "block font-bold text-[#1E293B] mb-2 text-lg";
    const errorClass = "text-red-500 mt-1 text-sm";
    const buttonClass =
        "w-full bg-[#4640DE] hover:bg-[#3b36bc] text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-95 text-xl";

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8F9FC] p-4">
            <div className="w-full max-w-[480px] bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.05)] p-10 sm:p-14">

                <h2 className="text-[54px] font-black text-center text-[#1E293B] mb-10 tracking-tight">
                    Login
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Email */}
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

                    {/* Password */}
                    <div>
                        <label className={labelClass}>Password</label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password"
                            placeholder="Enter password"
                            className={inputClass}
                        />
                        {errors.password && (
                            <p className={errorClass}>{errors.password.message}</p>
                        )}
                    </div>

                    {/* Login Button */}
                    <div className="pt-4">
                        <button type="submit" className={buttonClass}>
                            Login
                        </button>
                    </div>
                </form>

                {/* Footer text */}
                <p className="text-center mt-8 text-[#64748B] font-medium text-lg">
                    Don’t have an account?{" "}
                    <Link to="/signUp" className="text-[#4640DE] font-bold hover:underline transition-all">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;