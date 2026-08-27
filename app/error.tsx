"use client"

import { useEffect } from "react"
import { MdErrorOutline } from "react-icons/md"

export default function Error({
    error
}: {
    error: Error & { digest?: string }
}) {
    useEffect(() => {
        console.error(error)
    }, [ error ])

    return (
        <div role="alert" className="alert alert-error alert-soft m-6">
            <span className="text-2xl"><MdErrorOutline /></span>
            <span>Sorry!  An error occurred.  Please try again later.</span>
        </div>
    )
}
