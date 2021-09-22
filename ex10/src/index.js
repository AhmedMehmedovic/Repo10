function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joei",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Izvodjac",
            title: "Naziv",
            release_year: 2000,
            formats: {
                1: "DD",
                2: "FF",
                3: "GG"
            },
            gold: false
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;