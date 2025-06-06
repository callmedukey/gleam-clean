import React from "react";

const OfficeCardSkeleton: React.FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-8 lg:px-10 lg:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-18 animate-pulse">
      {/* Office Information */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-26 flex-1">
        {/* Office Name */}
        <div className="lg:w-[154px] flex-shrink-0">
          <div className="h-8 bg-gray-200 rounded w-24 mx-auto lg:mx-0"></div>
        </div>

        {/* Office Details */}
        <div className="flex-1 space-y-2">
          {/* Address */}
          <div className="h-6 bg-gray-200 rounded w-full max-w-md"></div>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="h-6 bg-gray-200 rounded w-32"></div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Button */}
      <div className="flex-shrink-0">
        <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
      </div>
    </div>
  );
};

export const OfficesContentSkeleton: React.FC = () => {
  return (
    <div className="py-24 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1170px] mx-auto">
        {/* Header Section Skeleton */}
        <div className="max-w-[770px] space-y-4 animate-pulse mb-24">
          <div className="h-12 bg-gray-200 rounded w-full max-w-lg"></div>
          <div className="h-6 bg-gray-200 rounded w-full max-w-md"></div>
        </div>

        {/* Offices List Skeleton */}
        <div className="space-y-11">
          {Array.from({ length: 4 }).map((_, index) => (
            <OfficeCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
