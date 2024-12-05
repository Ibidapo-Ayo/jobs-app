import { PopularServicesItemsProps } from "@/types"
import Carpentering from "../assets/images/artisans/carpenter.jpg"
import Plumbering from "../assets/images/artisans/plumber.jpg"
import Gardener from "../assets/images/artisans/gardner.jpg"


export const popularServicesItems: PopularServicesItemsProps[] = [
    {
        title: "Carpentering",
        image: Carpentering,
        style: {
            bg: "bg-[#fde68a]",
            text: "text-[#451a03]"
        },
        category: "carpentering"
    },
    {
        title: "Plumbering",
        image: Plumbering,
        style: {
            bg: "bg-[#60a5fa]",
            text: "text-white"
        },
        category: "plumbering"
    },
    {
        title: "Garderner",
        image: Gardener,
        style: {
            bg: "bg-[#86efac]",
            text: "text-green-900"
        },
        category: "gardner"
    },
    {
        title: "Painter",
        image: Plumbering,
        style: {
            bg: "bg-[#60a5fa]",
            text: "text-white"
        },
        category: "plumbering"
    },

]