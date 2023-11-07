"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface FrontLayoutProps {
	children: ReactNode;
}

const FrontendLayout: React.FC<FrontLayoutProps> = ({ children }) => {
	const pathname = usePathname();
	return (
		<>
			<nav>
				<ul className="flex gap-2">
					<li>
						<Link
							className={`link ${pathname === "/" ? "active" : ""}`}
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`link ${pathname === "/auth/login" ? "active" : ""}`}
							href="/auth/login"
						>
							Login
						</Link>
					</li>
				</ul>
			</nav>
			{children}
		</>
	);
};

export default FrontendLayout;
