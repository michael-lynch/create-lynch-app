// react
import type { ReactNode } from 'react';

// next
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// styles
import './globals.css';

const geistSans = Geist({
	variable: '--f-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--f-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Create Lynch App',
	description: 'An opinionated Next.js boilerplate',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
