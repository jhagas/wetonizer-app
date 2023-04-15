import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Wetonizer App",
  description:
    "A website to convert Anno Domini (AD) Calendar system to Javanese Calendar System. Build with Next.js and TypeScript",
  openGraph: {
    title: "Wetonizer App",
    description:
      "A website to convert Anno Domini (AD) Calendar system to Javanese Calendar System. Build with Next.js and TypeScript",
    type: "website",
    locale: "id_ID",
    url: "https://wetonizer.vercel.app/",
    siteName: "Wetonizer App",
    images: [
      {
        url: "https://wetonizer.vercel.app/Banner_Square.png",
        width: 512,
        height: 512,
        alt: "Wetonizer Logo with description, square picture",
      },
      {
        url: "https://wetonizer.vercel.app/Banner.png",
        width: 1200,
        height: 630,
        alt: "Wetonizer Logo with description",
      },
    ],
  },
  themeColor: "#000",
};

export default config;
