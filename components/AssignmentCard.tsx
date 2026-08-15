/*
 * A card component for displaying a single assignment.
 */

import dayjs from "dayjs"

import { type Assignment } from "@/lib/types"
import { FaCalendarDay } from "react-icons/fa6"
import MarkdownRenderer from "./MarkdownRenderer"

export default function AssignmentCard({
    title,
    description,
    url,
    due,
    notes
} : Assignment) {
    return (
        <div className="card h-full bg-base-100 border border-base-300">
            <div className="card-body">
                <div>
                    <a href={url} className="link">
                        <h5 className="text-lg font-semibold">{title}</h5>
                    </a>
                </div>
                {description && <div className="uppercase text-gray-700">{description}</div>}
                {due && (
                    <div className="flex items-center gap-2 font-medium text-sm">
                        <FaCalendarDay />
                        <span>{dayjs(due).format("ddd, M/D/YYYY, h:mm a")}</span>
                    </div>
                )}
                {notes.length > 0 && (
                    <ul className="list-disc list-outside pl-6">
                        {notes.map(note => (
                            <li key={note} className="list-item">
                                <MarkdownRenderer small markdown={note} />
                            </li>
                        ))}
                    </ul>
                )}
                <div className="card-actions justify-end mt-auto pt-4">
                    <a href={url} className="btn btn-primary">Go to assignment</a>
                </div>
            </div>
        </div>
    )
}
