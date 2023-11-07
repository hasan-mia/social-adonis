import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
	children: ReactNode;
}

const DashboardLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<section>
			<nav>Navbar</nav>

			{children}
		</section>
	);
};

export default DashboardLayout;
