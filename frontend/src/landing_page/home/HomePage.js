import Awards from "./Awards.js";
import Hero from "./Hero.js";
import Pricing from "./Pricing.js"
import Stats from "./Stats.js"
import Education from "./Education.js";
import OpenAccount from "../OpenAccount.js";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}