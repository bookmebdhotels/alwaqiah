"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import postPackageInfo from "@/lib/postPacageInfo";

const ContactForm = ({ title }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        const emailData = {
            name: `${data.firstName}`,
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.additionalInfo,
        };

        const apiData = {
            name: `${data.firstName}`,
            number: data.phoneNumber,
            additional_info: data.additionalInfo,
            property_name: "Al-Waqiah Hajj Kafela",
            category: "819", 
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_JS_SERVICEID,
                process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATEID,
                emailData,
                process.env.NEXT_PUBLIC_EMAIL_JS_USERID
            );

            const apiResponse = await postPackageInfo(apiData);
            if (apiResponse.error) {
                toast.error("তথ্য জমা দেওয়া ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
            } else {
                toast.success("আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!");
                reset(); 
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("অনুরোধ প্রক্রিয়াকরণে একটি সমস্যা ঘটেছে।");
        }
    };

    return (
        <div style={{
            boxShadow: 'inset 0 4px 8px rgba(67, 56, 202, 0.4)'
        }} className="md:max-w-lg w-full mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
            {title === "show" &&
                <div className="text-center mb-8">
                    <h1 className="text-xl text-blue-800 font-bold mb-2">
                        আমাদের সাথে যোগাযোগ করুন
                    </h1>
                    <p className="text-gray-600 text-sm">পবিত্র হজ ও ওমরাহ সংক্রান্ত যেকোনো তথ্যের জন্য ফরমটি পূরণ করুন</p>
                </div>
            }

     

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        আপনার নাম <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName", { required: true })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">আপনার নাম দেয়া আবশ্যক</p>
                    )}
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        মোবাইল নম্বর <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        placeholder="01xxxxxxxxx"
                        {...register("phoneNumber", {
                            required: "মোবাইল নম্বর দেয়া আবশ্যক",
                            pattern: {
                                value: /^[0-9]{11,}$/,
                                message: "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন",
                            },
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
                    )}
                </div>

                {/* Email Address */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        ইমেইল এড্রেস (ঐচ্ছিক)
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                {/* Additional Info */}
                <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                        অতিরিক্ত তথ্য / প্রশ্ন
                    </label>
                    <textarea
                        id="additionalInfo"
                        {...register("additionalInfo")}
                        rows={4}
                        placeholder="আপনি হজ বা ওমরাহ প্যাকেজ সম্পর্কে কী জানতে চান বিস্তারিত লিখুন..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    style={{
                        background: "linear-gradient(90deg, #313881, #0678B4)",
                        opacity: isSubmitting ? 0.7 : 1,
                    }}
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            পাঠানো হচ্ছে...
                        </span>
                    ) : "মেসেজ পাঠান"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;