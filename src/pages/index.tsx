"use client";

import PageLayout from "@/components/UI/PageLayout";
import Hero from "@/components/Heros/Hero";

import img_desktop_xl from "@/assets/images/hero-desktop-xl.jpeg";
import img_desktop from "@/assets/images/hero-desktop.jpeg";
import img_tablet from "@/assets/images/hero-tablet.jpeg";
import img_mobile from "@/assets/images/hero-mobile.jpeg";

const images = [
    {
        desktop_xl: img_desktop_xl.src,
        desktop: img_desktop.src,
        tablet: img_tablet.src,
        mobile: img_mobile.src,
    },
    {
        desktop_xl: img_desktop_xl.src,
        desktop: img_desktop.src,
        tablet: img_tablet.src,
        mobile: img_mobile.src,
    },
    {
        desktop_xl: img_desktop_xl.src,
        desktop: img_desktop.src,
        tablet: img_tablet.src,
        mobile: img_mobile.src,
    },
];

export default function Home() {
    return (
        <PageLayout title="MAIARC Concierge">
            <Hero images={images} />
        </PageLayout>
    );
}
