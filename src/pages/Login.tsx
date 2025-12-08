import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface LoginFormData{
    name: string,
    password: string,
}


const Login = () => {

    const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
} = useForm<LoginFormData>();

    const onSubmit: SubmitHandler<LoginFormData> = 
    async (data: LoginFormData) => {
        try {
            console.log(data);
            reset();
        }
        catch(error) {
            console.error("Failed to submit form", error);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 to-pink-100 px-4">
        <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center items-center p-6 bg-white">
            <img
                src="/hunterxhunter.jpg"
                alt="hunter x hunter"
                className="rounded-xl w-[280px] sm:w-[350px] shadow-lg"
            />
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white/90">
            <h1 className="text-center text-3xl font-extrabold italic text-fuchsia-600 mb-6">
                Okaerinasai!
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}
             className="flex flex-col gap-4">
                
                {/* Username */}
                <div className="flex flex-col gap-1">
                <label className="font-medium">Username</label>
                <input
                    type="text"
                    placeholder="Enter username"
                    {...register("name",
                        {required: "Username cannot be empty"}
                    )}
                    className="px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 placeholder:italic shadow focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                />
                </div>
                {errors.name && <span className="text-red-600 text-sm italic mt-2 block">{errors.name.message}</span>}

                {/* Password */}
                <div className="flex flex-col gap-1">
                <label className="font-medium">Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    {...register("password",
                        {required:"Password is required",
                            minLength:{
                                value: 8,
                                message: "Password is too short"
                            },
                            maxLength:{
                                value: 25,
                                message: "Password is too long"
                            }
                        }
                    )}
                    className="px-4 py-3 border border-gray-300 rounded-lg placeholder:text-gray-400 placeholder:italic shadow focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                />
                </div>
                {errors.password && <span className="text-red-600 text-sm mt-2 block italic">{errors.password.message}</span>}

                {/* Submit Button */}
                <button
                type="submit"
                className="mt-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold rounded-lg shadow transition-all duration-300
                hover:scale-110 w-[90px] px-6 py-3 block mx-auto"
                >
                Login
                </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-gray-700">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-fuchsia-600 font-semibold cursor-pointer hover:underline">
                Sign Up
                </Link>
            </p>
            </div>

        </div>
        </div>
    );
};

export default Login;
