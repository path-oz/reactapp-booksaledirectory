import AppBarComponent from "./AppBar";
import Head from "next/head";
import DropDown from "./DropDown";


const Layout = ({children}) => {
    return (
        <>
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3751132417748293"crossOrigin="anonymous"></script>
            </Head>
            <AppBarComponent/>
            <div>
                <main>
                    
                    {children}
                   
                </main>
            </div>
        </>
    )
}

export default Layout;