const express = require("express");

const router = express.Router();

const pool = require("../config/db");


// ==========================================
// POST BOOKING
// ==========================================

router.post("/book", async (req, res) => {

    try {

        const {
            movie,
            theatre,
            show_time,
            seats,
            amount
        } = req.body;


        // Validation

        if (
            !movie ||
            !theatre ||
            !show_time ||
            !seats ||
            !amount
        ) {

            return res.status(400).json({

                error:
                    "Please provide movie, theatre, show time, seats and amount"

            });

        }


        // Find existing bookings
        // for same movie + theatre + show

        const existingBookings =
            await pool.query(

                `SELECT seats
                 FROM bookings
                 WHERE movie = $1
                 AND theatre = $2
                 AND show_time = $3`,

                [
                    movie,
                    theatre,
                    show_time
                ]

            );


        // Get booked seats

        let alreadyBooked = [];


        existingBookings.rows.forEach(row => {

            if (row.seats) {

                alreadyBooked.push(
                    ...row.seats.split(",")
                );

            }

        });


        // Requested seats

        const requestedSeats =
            seats.split(",");


        // Check conflicts

        const conflictSeats =
            requestedSeats.filter(
                seat =>
                    alreadyBooked.includes(seat)
            );


        // Prevent double booking

        if (
            conflictSeats.length > 0
        ) {

            return res.status(409).json({

                error:
                    `These seats are already booked: ${conflictSeats.join(", ")}`

            });

        }


        // Insert booking

        const result =
            await pool.query(

                `INSERT INTO bookings
                (
                    movie,
                    theatre,
                    show_time,
                    seats,
                    amount
                )
                VALUES
                (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5
                )
                RETURNING *`,

                [
                    movie,
                    theatre,
                    show_time,
                    seats,
                    amount
                ]

            );


        res.status(201).json({

            message:
                "Booking saved successfully",

            booking:
                result.rows[0]

        });

    }

    catch (error) {

        console.log(
            "Booking Error:",
            error
        );

        res.status(500).json({

            error:
                error.message

        });

    }

});


// ==========================================
// GET BOOKED SEATS
// ==========================================

router.get(
    "/booked-seats",
    async (req, res) => {

        try {

            const {
                movie,
                theatre,
                show_time
            } = req.query;


            if (
                !movie ||
                !theatre ||
                !show_time
            ) {

                return res.status(400).json({

                    error:
                        "Movie, theatre and show time are required"

                });

            }


            const result =
                await pool.query(

                    `SELECT seats
                     FROM bookings
                     WHERE movie = $1
                     AND theatre = $2
                     AND show_time = $3`,

                    [
                        movie,
                        theatre,
                        show_time
                    ]

                );


            let bookedSeats = [];


            result.rows.forEach(row => {

                if (row.seats) {

                    bookedSeats.push(
                        ...row.seats.split(",")
                    );

                }

            });


            res.json({

                bookedSeats

            });

        }

        catch (error) {

            console.log(
                "Booked Seats Error:",
                error
            );

            res.status(500).json({

                error:
                    error.message

            });

        }

    }
);


// ==========================================
// CANCEL BOOKING
// ==========================================

router.delete(
    "/cancel/:id",
    async (req, res) => {

        try {

            const id =
                req.params.id;


            const result =
                await pool.query(

                    `DELETE FROM bookings
                     WHERE id = $1
                     RETURNING *`,

                    [id]

                );


            if (
                result.rows.length === 0
            ) {

                return res.status(404).json({

                    error:
                        "Booking not found"

                });

            }


            res.json({

                message:
                    "Booking cancelled successfully",

                booking:
                    result.rows[0]

            });

        }

        catch (error) {

            console.log(
                "Cancellation Error:",
                error
            );

            res.status(500).json({

                error:
                    error.message

            });

        }

    }
);


module.exports = router;