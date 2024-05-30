const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/taeyeon", (req, res) => {
    res.json(
        {
            name: "Kim Taeyeon",
            nickname: "Taengoo",
            dob: "March 9, 1989",
            company: "SM Entertainment",
            group: "Girls' Generation",
            debut: "August 8, 2007",
            socials: "@taeyeon_ss"
        }
    )
});

app.get("/albums", (req, res) => {
    res.json(
        [
            {
                title: "I",
                type: "1st Mini Album",
                date: "October 7, 2015",
                genres: "Rock, Ballad, R&B",
            },
            {
                title: "Why",
                type: "2nd Mini Album",
                date: "June 28, 2016",
                genres: "EDM, House, Dance, R&B",
            },
            {
                title: "My Voice",
                type: "1st Album",
                date: "February 28, 2017",
                genres: "R&B, Rock, Ballad, Dance"
            },
            {
                title: "This Christmas - Winter is Coming",
                type: "Winter Special Album",
                date: "December 12, 2017",
                genres: "Christmas classics"
            },
            {
                title: "Something New",
                type: "3rd Mini Album",
                date: "June 18, 2018",
                genres: "Soul, Pop"
            },
            {
                title: "Stay",
                type: "1st Japanese Single",
                date: "June 30, 2018",
                genre: "J-POP"
            },
            {
                title: "VOICE",
                type: "1st Japanese Mini Album",
                date: "June 5, 2019",
                genres: "J-POP, Ballad, R&B, Dance, Rock"
            },
            {
                title: "Purpose",
                type: "2nd Album",
                date: "October 28, 2019",
                genres: "Ballad, R&B, Dance, Rock"
            },
            {
                title: "#GirlsSpkOut",
                type: "2nd Japanese Mini Album",
                date: "November 18, 2020",
                genres: "J-POP, Ballad, R&B, Dance, Rock"
            },
            {
                title: "What Do I Call You",
                type: "4th Mini Album",
                date: "December 15, 2020",
                genres: "Ballad, R&B"
            },
            {
                title: "INVU",
                type: "3rd Album",
                date: "February 14, 2022",
                genres: "Ballad, House, Pop, Dance"
            },
            {
                title: "To. X",
                type: "5th Mini Album",
                date: "November 27, 2023",
                genres: "Ballad, Pop, Dance, R&B"
            },
        ]
    )
})

app.get("/i_tracklist", (req, res) => {
    res.json(
        {
            songs: "I (feat. Verbal Jint), U R, Gemini, Stress, Farewell, I (Inst.)"
        }
    )
})

app.get("/why_tracklist", (req, res) => {
    res.json(
        {
            songs: "Why, Starlight (feat. DEAN), Fashion, Hands On Me, Up & Down (feat. Hyoyeon), Good Thing, Night"
        }
    )
})

app.get("/myvoice_tracklist", (req, res) => {
    res.json(
        {
            songs: "Fine, Cover Up, Feel So Fine, I Got Love, I'm OK, Time Lapse, Sweet Love, When I Was Young, Lonely Night, Love in Color, Fire, Eraser, Time Spent Walking Through Memories"
        }
    )
})

app.get("/christmas_tracklist", (req, res) => {
    res.json(
        {
            songs: "The Magic of Christmas Time, This Christmas, Let It Snow, Candy Cane, Christmas Without You, Shhhh, I'm All Ears, This Christmas (Inst.)"
        }
    )
})

app.get("/somethingnew_tracklist", (req, res) => {
    res.json(
        {
            songs: "Something New, All Night Long (feat. Lucas of NCT), Baram x3, One Day, Circus, Something New (Inst.)"
        }
    )
})

app.get("/voice_tracklist", (req, res) => {
    res.json(
        {
            songs: "VOICE, I Found You, HORIZON, Vanilla, TURNT AND BURNT, SIGNAL"
        }
    )
})

app.get("/purpose_tracklist", (req, res) => {
    res.json(
        {
            songs: "Here I Am, Spark, Find Me, Love You Like Crazy, LOL, Better Babe, Wine, Do You Love Me?, City Love, Gravity, Blue, Four Seasons"
        }
    )
})

app.get("/girlsspkout_tracklist", (req, res) => {
    res.json(
        {
            songs: "#GirlsSpkOut (feat. CHANMINA), Worry Free Love, Be Real, I Do"
        }
    )
})

app.get("/wdicy_tracklist", (req, res) => {
    res.json(
        {
            songs: "What Do I Call You, Playlist, To the moon, Wildfire, Galaxy, Happy"
        }
    )
})

app.get("/invu_tracklist", (req, res) => {
    res.json(
        {
            songs: "INVU, Some Nights, Can't Control Myself, Set Myself On Fire, Toddler, Siren, Cold As Hell, Timeless, Heart, No Love Again, You Better Not, Weekend, Ending Credits"
        }
    )
})

app.get("/tox_tracklist", (req, res) => {
    res.json(
        {
            songs: [
                "To", "X", "Melt Away", "Burn It Down", "Nightmare", "All For Nothing", "Fabulous"
            ]
        }
    )
})

/** 34 music show wins */
app.get("/awards", (req, res) => {
    res.json(
        [
            {
                type: "Circle Chart Music Awards",
                awards: [
                    "Song of the Year - October (2016)",
                    "Mobile Vote Popularity Award (2018)",
                    "Artist of the Year Digital Music - March (2020)",
                    "Artist of the Year Digital Music - December (2022)",
                    "Artist of the Year Digital Music - February (2023)",
                ]
            },
            {
                type: "Genie Music Awards",
                awards: "Best Female Solo Artist (2022)"
            },
            {
                type: "Golden Disc Awards",
                awards: [
                    "Popularity Award (2008)",
                    "Digital Bonsang (2016)",
                    "iQiyi Best Female Artist (2016)",
                    "Digital Bonsang (2017)",
                    "Disc Bonsang (2018)",
                    "Digital Bonsang (2020)",
                ]
            },
            {
                type: "MAMA Awards",
                awards: [
                    "Best Female Artist (2015)",
                    "Best Female Artist (2016)",
                    "Best Vocal Performance - Solo (2019)",
                    "Best Vocal Performance - Solo (2022)",
                ]
            },
            {
                type: "Melon Music Awards",
                awards: [
                    "Top 10 Artist (2016)",
                    "Best Ballad (2019)",
                    "Top 10 Artist (2019)",
                ]
            },
            {
                type: "Seoul Music Awards",
                awards: [
                    "Bonsang Award (2016)",
                    "Bonsang Award (2017)",
                    "Bonsang Award (2020)",
                    "Digital Daesang (2020)",
                    "Bonsang Award (2023)",
                ]
            },
        ]
    )
})

app.listen(5000, () => {console.log("Server started on port 5000")})