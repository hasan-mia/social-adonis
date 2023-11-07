import SocketProvider from "@/utils/SocketProvider";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<SocketProvider>
			<html lang="en">
				<body className={`${inter.className}`}>
					<StyledComponentsRegistry>
						<main className="min-h-screen">{children}</main>
					</StyledComponentsRegistry>
				</body>
			</html>
		</SocketProvider>
	);
};

export default RootLayout;
