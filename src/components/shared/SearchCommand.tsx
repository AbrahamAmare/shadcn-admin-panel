"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export function SearchCommand() {
    const [open, setOpen] = useState(false)
    return (
        <div className="lg:block hidden">
            <Input className="py-2 px-4 min-w-fit w-60 h-8 focus-visible:ring-1 outline outline-1" placeholder="Search..." />
        </div>
    )
}
