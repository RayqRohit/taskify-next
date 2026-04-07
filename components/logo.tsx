import Image from "next/image"
import Link from "next/link"

import { cn } from "../lib/utils"
import { headingFont } from "@/lib/fonts"

const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-2 hover:opacity-75 transition">
                <Image
                    src="/logo.svg"
                    alt="Taskify Logo"
                    width={36}
                    height={36}
                />
                <p
                    className={cn(
                        "text-xl md:text-2xl font-semibold text-neutral-700",
                        headingFont.className
                    )}
                >   
                    Taskify
                </p>
            </div>
        </Link>
    )
}

export default Logo