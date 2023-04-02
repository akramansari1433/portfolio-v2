import Navbar from "../Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
