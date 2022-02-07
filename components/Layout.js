import AppBarComponent from "./AppBar";
import Head from "next/head";
import DropDown from "./DropDown";
import Router from 'next/router';
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3751132417748293"crossOrigin="anonymous"></script>
                <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
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
