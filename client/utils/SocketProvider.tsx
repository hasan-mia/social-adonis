"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface SocketContextProps {
	socket: Socket | null;
}

interface SocketProviderProps {
	children: ReactNode;
}

const SocketContext = React.createContext<SocketContextProps | undefined>(
	undefined,
);

export const useSocket = (): SocketContextProps => {
	const context = React.useContext(SocketContext);
	if (!context) {
		throw new Error("useSocket must be used within a SocketProvider");
	}
	return context;
};

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	const [socket, setSocket] = useState<Socket | null>(null);

	useEffect(() => {
		if (!socket) {
			const newSocket = io("http://localhost:3333");
			setSocket(newSocket);
		}
		return () => {
			if (socket) {
				socket.disconnect();
			}
		};
	}, [socket]);

	return (
		<SocketContext.Provider value={{ socket }}>
			{children}
		</SocketContext.Provider>
	);
};

export default SocketProvider;
