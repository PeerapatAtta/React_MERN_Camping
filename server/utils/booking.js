const calNights = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) {
        console.error("Check-in or check-out date is missing");
        return 0;
    }
    const milliDay = checkOut.getTime() - checkIn.getTime();
    const diffDay = milliDay / (1000 * 60 * 60 * 24);
    return diffDay;
}

exports.calTotal = (checkIn, checkOut, price) => {
    if (!checkIn || !checkOut || !price) {
        console.error("Missing required parameters for total calculation");
        return 0;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const totalNights = calNights(checkInDate, checkOutDate);
    const total = totalNights * price;
    return { total, totalNights };
}