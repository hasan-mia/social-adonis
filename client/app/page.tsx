import { Metadata } from "next";
import React from "react";
import FrontendLayout from "./frontendLayout";

// metadata
export const metadata: Metadata = {
	title: "Home",
};
const Home: React.FC = () => {
	return <FrontendLayout>Home</FrontendLayout>;
};

export default Home;
