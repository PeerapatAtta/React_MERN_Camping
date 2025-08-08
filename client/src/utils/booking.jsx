const calNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) {
        console.error("Check-in or check-out date is missing");
        return 0;
    }
    const milliDay = checkOut.getTime() - checkIn.getTime();
    const diffDay = milliDay / (1000 * 60 * 60 * 24);
    return diffDay;
}

export const calTotal = (checkIn, checkOut, price) => {
    if (!checkIn || !checkOut || !price) {
        console.error("Missing required parameters for total calculation");
        return 0;
    }
    console.log("Calculating total for:", checkIn, checkOut, price);
    const totalNight = calNights(checkIn, checkOut);
    const total = totalNight * price;
    return { total, totalNight };
}