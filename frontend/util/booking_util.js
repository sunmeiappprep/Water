export const fetchBookings = () => {
    return (
    $.ajax({
        method: 'GET',
        url: '/api/bookings'
    }))
}

export const fetchBooking = (bookingId) => {
    return (
    $.ajax({
      method: 'GET',
      url: `/api/bookings/${bookingId}`
    }))
}

export const createBooking = booking => {
    return (
    $.ajax({
        method: "POST",
        url: '/api/bookings',
        data: {booking}
    }))
}

export const removeBooking = bookingId => {
    return (
    $.ajax({
        method: "DELETE",
        url: `/api/bookings/${bookingId}`
    }))
}

export const updateBooking = booking => (
    $.ajax({
        method: "PATCH",
        url: `/api/bookings/${booking.id}`,
        data: {booking}
    })
)
