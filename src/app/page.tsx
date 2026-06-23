import type { Metadata } from "next";
import { PortfolioSite } from "@/components/portfolio-site";

export const metadata: Metadata = {
	title: "Harsh Pratap Singh | Full-Stack Developer",
};

export default function Home() {
	return <PortfolioSite />;
}
