import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Provider from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <Navbar />
                    <main className="bg-gray-200 dark:bg-gray-900">{children}</main>
                </Provider>
            </body>
        </html>
    );
}
