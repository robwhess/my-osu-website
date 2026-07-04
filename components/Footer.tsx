import { FaGithub } from "react-icons/fa6"
import { MdOutlineAlternateEmail, MdCode } from "react-icons/md"

export default function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content text-sm">
            <div className="max-w-7xl mx-auto p-6 flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between md:items-start">
                <div>
                    <p>© Rob Hess</p>
                    <p>
                    <a className="link" href="https://map.oregonstate.edu/?building=KEC&id=2243#!m/1027596?share" target="_blank" rel="noopener noreferrer">1109 Kelley Engineering Center</a>
                    </p>
                    <p>School of EECS</p>
                    <p>Oregon State University</p>
                    <p>Corvallis, OR 97331</p>

                </div>
                <div className="flex gap-4 text-xl">
                    <a href="https://github.com/robwhess" target="_blank" rel="noopener noreferrer" title="Link to Rob's GitHub profile"><FaGithub /></a>
                    <a className="link" href="https://github.com/robwhess/my-osu-website-v2" target="_blank" rel="noopener noreferrer" title="Source code for this site"><MdCode /></a>
                    <a className="link" href="mailto:hessro@oregonstate.edu" target="_blank" rel="noopener noreferrer" title="Email Rob"><MdOutlineAlternateEmail /></a>
                </div>
            </div>
        </footer>
    )
}
