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
        url: "/Banner Square.png",
        width: 512,
        height: 512,
        alt: "Website Banner Twitter",
      },
      {
        url: "/Banner.png",
        width: 1000,
        height: 500,
        alt: "Website Banner",
      },
    ],
  },
  themeColor: "#000",
};

export default config;
