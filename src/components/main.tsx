import { default as portfolio4 } from "@/image/Group 94.png";
import { default as portfolio3 } from "@/image/image13.png";
import { default as portfolio1 } from "@/image/img12.png";
import { default as portfolio } from "@/image/portforio.png";
import { default as localImage } from "@/image/t.png";
import Image from "next/image";

/**
 * @returns {JSX}
 */
const Main = () => {
    return (
        <main>
            <div>
                <Image id="i" src={localImage} alt="猫は最高に可愛い" />
                <><strong id="strong1">MATSUBA &emsp; HIKARU </strong></>
                <strong id="strong2">
                    My portfolio creation so far
                </strong>
            </div>
            <h1 id="work"></h1>
            <div id="flex">
                <div id="block">
                    <Image id="port" src={portfolio} alt="portforio"></Image>
                    <p>一年生最終課題</p>
                </div>
                <div id="block">
                    <Image id="port" src={portfolio1} alt="portforio1"></Image>
                    <p>1,2年共同開発</p>
                </div>
            </div>
            <div id="flex">
                <div id="block">
                    <Image id="port" src={portfolio3} alt="portforio3"></Image>
                    <p>PHP課題</p>
                </div>
                <div id="block">
                    <Image id="port" src={portfolio4} alt="portforio4"></Image>
                    <p>1年中間課題</p>
                </div>
            </div>
        
        </main>

    )
};

export default Main;