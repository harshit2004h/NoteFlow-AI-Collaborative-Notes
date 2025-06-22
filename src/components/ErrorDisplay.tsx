import React from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowLeft } from "lucide-react";

interface ErrorDisplayProps {
  error?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorDisplay({
  error = "Something went wrong",
  message = "Please try again later",
  onRetry,
}: ErrorDisplayProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-16 w-16 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>

        <p className="text-gray-600 mb-2 font-medium">{error}</p>

        <p className="text-gray-500 mb-6 text-sm">{message}</p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

          {onRetry && (
            <button
              onClick={onRetry}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
