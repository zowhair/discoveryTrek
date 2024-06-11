'use client'
import BookNowForm from "@/app/component/bookingform/BookingForm";
import { usePathname } from "next/navigation";

export default function ProductBooking() {
    const pathname = usePathname()

    return (
        <BookNowForm productPath={pathname} />
    )
}