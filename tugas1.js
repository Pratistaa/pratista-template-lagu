var lagu = [
    ["MANGU", "FourTwnty", 3500, 50000, "mangu.jpeg", "https://open.spotify.com/track/0wULafSHeHYZFu54R9ZFRJ?si=1aa7f8c841ad4cf5"],
    ["Tahta Hatiku", "Fajar Noor", 4000, 60000, "fajar.png", "https://open.spotify.com/track/4m1rVxDrvVEsQlN7qw8WV2?si=40075895a6034412"],
    ["Scott Street", "Phoebe Bridgers", 1500, 40000, "scottstreet.jpeg", "https://open.spotify.com/track/21uFPefbgeR3QLVJWATlrr?si=15cc90f1e6284096"],
    ["Hitam Putih", "Fourtwnty", 2000, 36000, "hitamputih.jpg", "https://open.spotify.com/track/0O6g2QFUhuLqRzGqhyzrIu?si=a70e2f0d8c4b4370"],
    ["About You", "The 1975", 4000, 80000, "aboutyou.jpeg", "https://open.spotify.com/track/1fDFHXcykq4iw8Gg7s5hG9?si=60f60f5f255c4678"],
    ["Serana", "For Revenge", 5000, 100000, "serana.jpeg", "https://open.spotify.com/track/09eWF5r8kasfOEp8RFRQLv?si=88e9eb89f5ec4298"]
];

var konten = document.getElementById("container1");

for (let i = 0; i < lagu.length; i++) {
    var judul = lagu[i][0];
    var penyanyi = lagu[i][1];
    var like = lagu[i][2];
    var view = lagu[i][3];
    var gambar = lagu[i][4];
    var link = lagu[i][5];


var element = `
    <div class="lagu">
            <h2>${judul}</h2>
            <p><i>Oleh ${penyanyi}</i></p>
            <a href="${link}">
                <img src="${gambar}" alt="">
            </a>
            <div class="bawah">
                <div class="kanan">🤍:  ${like}</div>
                <div class="kiri">⏵: ${view}</div>
            </div>
        </div>
`;


konten.innerHTML += element;
}