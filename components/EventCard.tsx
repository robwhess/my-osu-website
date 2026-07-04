/*
 * A card component for displaying information about an event.  Input
 * props are strings, and a few of them are flexible, e.g. `day` could be a
 * day of the week like "Wednesday", or it could be a specific date like
 * "June 10, 2026".
 */

import dayjs from "dayjs"
import CustomParseFormat from "dayjs/plugin/customParseFormat"
import { MdAccessTime, MdOutlineInfo, MdOutlineLocationOn, MdVideocam } from "react-icons/md"

dayjs.extend(CustomParseFormat)

export default function EventCard({
  day,
  start,
  end,
  location,
  videoConferenceLink,
  extraInfo,
  locationLink,
  description,
  small,
  border
} : {
    day: string,
    start: string,
    end?: string | null,
    location?: string | null,
    videoConferenceLink?: string | null,
    extraInfo?: string | null,
    locationLink?: string | null,
    description?: string | null,
    small?: boolean,
    border?: boolean
}) {
    const startTime = dayjs(start, "HH:mm:ss").format("h:mm a")
    const endTime = end && dayjs(end, "HH:mm:ss").format("h:mm a")

    return (
        <div className={`
            card bg-base-100
            ${small ? "card-sm" : ""}
            ${border ? " border border-base-300" : "shadow-sm"}
        `}>
            <div className={`card-body gap-1`}>
                <h3 className={`card-title`}>
                    {day}
                </h3>
                {description && (
                    <p className="uppercase font-semibold text-gray-500">
                        {description}
                    </p>
                )}
                <div className="flex items-center gap-2">
                    <p className="grow-0"><MdAccessTime /></p>
                    <p>{startTime}{endTime && <> &ndash; {endTime}</>}</p>
                </div>
                <div className="flex items-center gap-4">
                    {location && (
                        <div className="flex items-center gap-2">
                            <p className="grow-0"><MdOutlineLocationOn /></p>
                            <p>{locationLink ? (
                                <a
                                    className="link"
                                    href={locationLink}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {location}
                                </a>
                            ) : location}</p>
                        </div>
                    )}
                    {videoConferenceLink && (
                        <a
                            href={videoConferenceLink}
                            className={`btn btn-outline ${small ? "btn-xs" : "btn-sm"}`}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <span className="text-base"><MdVideocam /></span> Join
                        </a>
                    )}
                </div>
                {extraInfo && (
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <p className="grow-0 ml-0.5"><MdOutlineInfo /></p>
                        <p>{extraInfo}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export function EventCardSkeleton({
    small,
    border
}: {
    small?: boolean,
    border?: boolean
}) {
    return (
        <div className={`
            card min-w-48 bg-base-100
            ${small ? "card-sm" : ""}
            ${border ? " border border-base-300" : "shadow-sm"}
        `}>
            <div className="card-body gap-2">
                <div className="skeleton h-6 w-3/4"></div>
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-4 w-2/3"></div>
            </div>
        </div>
    )
}
