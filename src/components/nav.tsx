import localImage from "@/image/f.png";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
/**
 * @returns {JSX}
 */
const Nav: FC = () => {
    return (
        <header >
            <Image src={localImage} alt="猫は最高に可愛い" />
            <ul>
                <li ><Link href={"/#top"} id="color">HOME</Link></li>
                <li><Link href={"/about"} id="color">ABOUT</Link></li>
            </ul>
        </header>
    );
};

export default Nav;