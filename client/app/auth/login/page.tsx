import FrontendLayout from "@/app/frontendLayout";
import { Metadata } from "next";
import React from "react";

// metadata
export const metadata: Metadata = {
	title: "Login",
};
const Login: React.FC = () => {
	return <FrontendLayout>Login</FrontendLayout>;
};

export default Login;
