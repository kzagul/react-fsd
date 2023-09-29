// import { Header, Footer } from "../../shared/ui"

export default function Layout({ children }) {
    return (
        <>
            {/*<Header />*/}
            <main className="h-screen wrapper">
                {children}
            </main>
            {/*<Footer />*/}
        </>
    );
}