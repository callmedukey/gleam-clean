import React from "react";

export function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden border-gray-100 flex flex-col w-full max-w-[23.125rem] h-full animate-pulse">
      {/* Image skeleton */}
      <div className="relative w-full h-[17rem] bg-gray-200 flex-shrink-0" />

      {/* Content skeleton */}
      <div className="p-4 flex flex-col flex-1 gap-4 h-[12.4375rem]">
        {/* Category badge skeleton */}
        <div className="flex items-start flex-shrink-0">
          <div className="h-6 w-12 bg-gray-200 rounded-full" />
        </div>

        {/* Text content skeleton */}
        <div className="flex flex-col justify-between flex-1 gap-4 min-h-0">
          <div className="space-y-2 flex-1">
            {/* Title skeleton */}
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-full" />
              <div className="h-6 bg-gray-200 rounded w-3/4" />
            </div>
            {/* Description skeleton */}
            <div className="space-y-2 mt-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>

          {/* Button skeleton */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="h-4 bg-gray-200 rounded w-20" />
            <div className="h-6 w-6 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
