let selectedSeats = [];

let bookedSeats = [];

let selectedMovie = "Avengers";

let selectedPrice = 200;

let selectedTime = "10:00 AM";


// ==========================================
// LOAD BOOKED SEATS
// ==========================================

function loadBookedSeats() {

    selectedSeats = [];

    document
        .querySelectorAll(".seat")
        .forEach(seat => {

            seat.classList.remove("selected");

            seat.classList.remove("occupied");

        });


    const theatre =
        document.getElementById("theatre").value;


    const url =
        "http://localhost:5000/api/bookings/booked-seats" +

        "?movie=" +
        encodeURIComponent(selectedMovie) +

        "&theatre=" +
        encodeURIComponent(theatre) +

        "&show_time=" +
        encodeURIComponent(selectedTime);


    fetch(url)

        .then(response => response.json())

        .then(data => {

            bookedSeats =
                data.bookedSeats || [];


            document
                .querySelectorAll(".seat")
                .forEach(seat => {

                    const seatNumber =
                        seat.innerText.trim();


                    if (
                        bookedSeats.includes(seatNumber)
                    ) {

                        seat.classList.add("occupied");

                    }

                });


            updateSummary();

            calculateTotal();

        })

        .catch(error => {

            console.log(
                "Error loading booked seats:",
                error
            );

        });

}


// ==========================================
// PAGE LOAD
// ==========================================

window.addEventListener(
    "load",
    function () {

        loadBookedSeats();

    }
);


// ==========================================
// MOVIE SELECTION
// ==========================================

function selectMovie(
    card,
    movie,
    price,
    time
) {

    document
        .querySelectorAll(".movie-card")
        .forEach(item => {

            item.classList.remove("active");

        });


    card.classList.add("active");


    selectedMovie = movie;

    selectedPrice = price;

    selectedTime = time;


    document.getElementById(
        "summaryMovie"
    ).innerText = movie;


    document.getElementById(
        "summaryTime"
    ).innerText = time;


    document.getElementById(
        "showTime"
    ).innerText = time;


    loadBookedSeats();

    calculateTotal();

}


// ==========================================
// THEATRE SELECTION
// ==========================================

document
    .getElementById("theatre")
    .addEventListener(
        "change",
        function () {

            document.getElementById(
                "summaryTheatre"
            ).innerText = this.value;


            loadBookedSeats();

        }
    );


// ==========================================
// SEAT SELECTION
// ==========================================

document
    .querySelectorAll(".seat")
    .forEach(seat => {

        seat.onclick = function () {


            if (
                seat.classList.contains("occupied")
            ) {

                alert(
                    "❌ Seat already booked!"
                );

                return;

            }


            const seatNumber =
                seat.innerText.trim();


            seat.classList.toggle("selected");


            if (
                selectedSeats.includes(seatNumber)
            ) {

                selectedSeats =
                    selectedSeats.filter(
                        s => s !== seatNumber
                    );

            } else {

                selectedSeats.push(seatNumber);

            }


            updateSummary();

            calculateTotal();

        };

    });


// ==========================================
// UPDATE SUMMARY
// ==========================================

function updateSummary() {

    document.getElementById(
        "ticketCount"
    ).innerText =
        selectedSeats.length;


    document.getElementById(
        "summarySeats"
    ).innerText =

        selectedSeats.length > 0

            ? selectedSeats.join(", ")

            : "None";

}


// ==========================================
// CALCULATE TOTAL
// ==========================================

function calculateTotal() {

    const total =
        selectedSeats.length *
        selectedPrice;


    document.getElementById(
        "total"
    ).innerText =
        total;

}


// ==========================================
// BOOK TICKET
// ==========================================

function bookTicket() {

    if (
        selectedSeats.length === 0
    ) {

        alert(
            "⚠️ Please select at least one seat."
        );

        return;

    }


    const theatre =
        document.getElementById(
            "theatre"
        ).value;


    const amount =
        selectedSeats.length *
        selectedPrice;


    const bookingData = {

        movie:
            selectedMovie,

        theatre:
            theatre,

        show_time:
            selectedTime,

        seats:
            selectedSeats.join(","),

        amount:
            amount

    };


    fetch(
        "http://localhost:5000/api/bookings/book",
        {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/json"

            },

            body:
                JSON.stringify(bookingData)

        }
    )

    .then(response => response.json())

    .then(data => {


        if (data.error) {

            alert(
                "❌ " + data.error
            );

            loadBookedSeats();

            return;

        }


        const booking =
            data.booking;


        document.getElementById(
            "ticketBookingId"
        ).innerText =
            booking.id;


        document.getElementById(
            "ticketMovie"
        ).innerText =
            selectedMovie;


        document.getElementById(
            "ticketTheatre"
        ).innerText =
            theatre;


        document.getElementById(
            "ticketTime"
        ).innerText =
            selectedTime;


        document.getElementById(
            "ticketSeats"
        ).innerText =
            selectedSeats.join(", ");


        document.getElementById(
            "ticketTickets"
        ).innerText =
            selectedSeats.length;


        document.getElementById(
            "ticketAmount"
        ).innerText =
            amount;


        document.getElementById(
            "ticketModal"
        ).classList.add("show");


        document.getElementById(
            "message"
        ).innerText =
            "🎟️ Booking successful!";

    })


    .catch(error => {

        console.log(
            "Booking Error:",
            error
        );

        alert(
            "❌ Booking failed. Make sure backend is running."
        );

    });

}


// ==========================================
// CLOSE TICKET
// ==========================================

function closeTicket() {

    document.getElementById(
        "ticketModal"
    ).classList.remove("show");


    location.reload();

}


// ==========================================
// CANCEL BOOKING
// ==========================================

function cancelBooking() {

    const bookingId =
        prompt(
            "Enter Booking ID to cancel:"
        );


    if (!bookingId) {

        return;

    }


    fetch(
        `http://localhost:5000/api/bookings/cancel/${bookingId}`,
        {
            method: "DELETE"
        }
    )

    .then(response => response.json())

    .then(data => {


        if (data.error) {

            alert(
                "❌ " + data.error
            );

            return;

        }


        alert(
            "✅ " + data.message
        );


        location.reload();

    })

    .catch(error => {

        console.log(
            "Cancellation Error:",
            error
        );

        alert(
            "❌ Cancellation failed."
        );

    });

}