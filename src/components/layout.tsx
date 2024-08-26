import { FC } from "react";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

type Props = {
    children: React.ReactNode;
};

/**
 * @param {ReactNode} children レイアウトに埋め込むJSX
 * @returns {JSX}
 */
const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Main/>
            <Footer />
        </>
    );
};

export default Layout;