import { useEffect, useRef, useState } from "react"

const useDelayedToggle = (open: boolean, delay: number) => {
    const timer = useRef<number | undefined>(undefined)
    const [actuallyOpen, setActuallyOpen] = useState(false)
    useEffect(() => {
        if (timer.current) window.clearTimeout(timer.current)
        if (open) {
            setActuallyOpen(true)
        } else {
            timer.current = window.setTimeout(() => setActuallyOpen(false), delay)
            return () => window.clearTimeout(timer.current)
        }
    }, [open, delay])
    return [actuallyOpen] as const
}

export default useDelayedToggle