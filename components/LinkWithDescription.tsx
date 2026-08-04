import { GoArrowRight } from "react-icons/go"

import { type Link } from "@/lib/types"

export default function LinkWithDescription({
    url, title, description
} : Link) {
    return (
        <span>
            <a
                className="link font-medium"
                href={url}
                target="_blank" rel="noopener noreferrer"
            >
                {title}
            </a>
            {description && (
                <span className="text-sm"> <GoArrowRight className="inline-block -mt-0.5" /> {description}</span>
            )}
        </span>
    )
}
