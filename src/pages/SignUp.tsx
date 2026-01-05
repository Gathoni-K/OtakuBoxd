import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface SignUpFormData{
    name: string,
    password: string,
    email: string,
    confirmPassword: string,
}

const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        getValues,
    } = useForm<SignUpFormData>();

    const onSubmit: SubmitHandler<SignUpFormData> = 
    async (data: SignUpFormData) => {
        try{
            console.log(data);
            reset();
        }
        catch(error){
            console.error("Failed to submit form", error);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 to-pink-100 px-4">
            
            <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md shadow-2xl
            rounded-2xl overflow-hidden flex flex-col md:flex-row">

                {/* image */}
                <div className="md:w-1/2 w-full flex justify-center items-center p-6
                bg-white">
                    <img 
                    src="/naruto2.jpg"
                    alt="naruto, absolute-cinema-pi!"
                    className="rounded-xl w-[280px] sm:w-[350px] shadow-lg"
                    />

                </div>

                {/* form section */}
                <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-white/90">

                <h1 className="text-center text-3xl font-extrabold italic text-fuchsia-600 mb-6">
                    Irasshaimase!
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}
                 className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-medium">
                            Username
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter username"
                        {...register("name",
                            {required: "Username cannot be empty"}
                        )}
                        className="px-4 py-3 border border-gray-300 rounded-lg
                        placeholder:text-gray-400 placeholder:italic shadow
                        focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                        />
                        {errors.name && <span className="text-red-600 italic mt-2 text-sm block">{errors.name.message}</span>}

                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">
                            Email
                        </label>
                        <input 
                        type="email"
                        placeholder="hokage@gmail.com"
                        {...register("email",
                            {required: "Email cannot be empty",
                                pattern: {
                                    value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Enter a valid email",
                                }
                            }
                        )}
                        className="px-4 py-3 border border-gray-300 rounded-lg
                        placeholder:text-gray-400 placeholder:italic shadow
                        focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                        />
                        {errors.email && <span className="text-red-600 italic text-sm block mx-2">{errors.email.message}</span>}

                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">
                            Password
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter password"
                        {...register("password",
                            {required: "Password is required",
                                minLength:{
                                    value: 8,
                                    message: "Password is too short",
                                },
                                maxLength:{
                                    value: 25,
                                    message: "Password is too long",
                                }
                            }
                        )}
                        className="px-4 py-3 border border-gray-300 rounded-lg
                        placeholder:text-gray-400 placeholder:italic shadow
                        focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                        />
                        {errors.password && <span className="text-red-600 italic text-sm block">{errors.password.message}</span>}

                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">
                            Confirm Password
                        </label>
                        <input 
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword",
                            {required: "Please confirm your password",
                                validate: (value) => {
                                    const password = getValues("password");
                                    return value === password || 
                                    "Passwords do not match"
                                }
                            }
                        )}
                        className="px-4 py-3 border border-gray-300 rounded-lg
                        placeholder:text-gray-400 placeholder:italic shadow
                        focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
                        />
                        {errors.confirmPassword && <span className="text-red-600 italic text-sm block">{errors.confirmPassword.message}</span>}

                    </div>

                    <Link to="/anime"
                    type="submit"
                    className="mt-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold
                    rounded-lg shadow transition-all duration-300 hover:scale-110 w-[130px] px-6 py-3 block mx-auto"
                    >
                        Let's Go!
                    </Link>
                </form>

                </div>

            </div>
        </div>
    )
}

export default SignUp