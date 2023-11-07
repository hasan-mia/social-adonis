import { Metadata } from "next";
import React from "react";
import FrontendLayout from "../frontendLayout";

// metadata
export const metadata: Metadata = {
	title: "About",
};
const Contact: React.FC = () => {
	return <FrontendLayout>About</FrontendLayout>;
};

export default Contact;
