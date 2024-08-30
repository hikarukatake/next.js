import localImage from "@/image/f.png";
import Image from "next/image";
import { FC } from "react";
/**
 * @returns {JSX}
 */
const Nav: FC = () => {
    return (
        <header >
            <Image src={localImage} alt="猫は最高に可愛い" />
            <ul>
                <li ><a href={"/#Word"} id="color">Work</a></li>
            </ul>
        </header>
    );
};

export default Nav;