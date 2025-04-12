import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface BirthChartFormProps {
  onSubmit: () => void;
}

interface FormData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

const BirthChartForm: React.FC<BirthChartFormProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onFormSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      console.log("Form data:", data);
      setIsSubmitting(false);
      onSubmit();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white/80 mb-1"
        >
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-4 py-3 rounded-lg bg-[#0f0e33] border border-purple-900/50 focus:border-purple-500 focus:ring focus:ring-purple-500/20 focus:outline-none text-white"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="birthDate"
          className="block text-sm font-medium text-white/80 mb-1"
        >
          Birth Date
        </label>
        <input
          id="birthDate"
          type="date"
          className="w-full px-4 py-3 rounded-lg bg-[#0f0e33] border border-purple-900/50 focus:border-purple-500 focus:ring focus:ring-purple-500/20 focus:outline-none text-white"
          {...register("birthDate", { required: "Birth date is required" })}
        />
        {errors.birthDate && (
          <p className="mt-1 text-sm text-red-400">
            {errors.birthDate.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="birthTime"
          className="block text-sm font-medium text-white/80 mb-1"
        >
          Birth Time (if known)
        </label>
        <input
          id="birthTime"
          type="time"
          className="w-full px-4 py-3 rounded-lg bg-[#0f0e33] border border-purple-900/50 focus:border-purple-500 focus:ring focus:ring-purple-500/20 focus:outline-none text-white"
          {...register("birthTime")}
        />
        <p className="mt-1 text-xs text-white/60">
          For more accurate readings, please provide your birth time
        </p>
      </div>

      <div>
        <label
          htmlFor="birthPlace"
          className="block text-sm font-medium text-white/80 mb-1"
        >
          Birth Place
        </label>
        <input
          id="birthPlace"
          type="text"
          className="w-full px-4 py-3 rounded-lg bg-[#0f0e33] border border-purple-900/50 focus:border-purple-500 focus:ring focus:ring-purple-500/20 focus:outline-none text-white"
          placeholder="City, Country"
          {...register("birthPlace", { required: "Birth place is required" })}
        />
        {errors.birthPlace && (
          <p className="mt-1 text-sm text-red-400">
            {errors.birthPlace.message}
          </p>
        )}
      </div>

      <div className="privacy-notice p-4 rounded-lg bg-purple-900/20 border border-purple-900/30">
        <p className="text-sm text-white/70">
          <span className="inline-block mr-2">🔒</span>
          Your birth data is sensitive personal information. We use zkSBT
          technology to protect your privacy while generating accurate readings.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Generating Chart...
          </>
        ) : (
          "Generate Your Chart"
        )}
      </button>
    </form>
  );
};

export default BirthChartForm;
