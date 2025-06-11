import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "50mb",
    },
  },
  async headers() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/mattress-sofa",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/air-conditioner",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/entry-cleaning",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/apply-service",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/education-inquiry",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/((?!api$|api/).*)",
        headers: [
          {
            key: "Surrogate-Control",
            value:
              "max-age=600, stale-while-revalidate=14400, stale-if-error=14400",
          },
        ],
      },
      {
        source: "/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2|avif|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
