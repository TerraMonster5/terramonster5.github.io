function redirect() {
    var loc = window.location.pathname;
    window.open("../pages/login.html?loc=.." + loc, "_self");
}

function back() {
    window.open(new URLSearchParams(window.location.search).get("loc"), "_self");
}

function login() {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var username = document.getElementById("usernamein").value;
    var password = document.getElementById("passwordin").value;

    if (!(username === "" || password === "")) {
        console.log(username, password);
        if (username === "one" && password === "password") {
            var string = "";
            var cypher = "";
            for (i = 0; i < 15; i++) {
                var num = Math.floor(Math.random() * 52);
                string += characters[num];
                cypher += characters.split("").reverse().join("")[num];
            }
            console.log(string);
            sessionStorage.setItem(string, true);
            console.log(cypher);
            sessionStorage.setItem("cypher", cypher.split("").reverse().join(""));
            console.log(sessionStorage.getItem("cypher"));

            download();
        }
    }
    else {
        console.log("field empty");
    }
}

function logout() {
    sessionStorage.clear();
}

function download(link) {
     var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if ("cypher" in sessionStorage) {
        var cypher = sessionStorage.getItem("cypher");
        var temp = "";
        for (i = 0; i < 15; i++) {
            temp += characters[characters.split("").reverse().join("").indexOf(cypher.split("").reverse().join("")[i])]
        }
        cypher = temp;
        console.log();
        console.log(cypher);
    }
    else {
        console.log("not logged in");
    }
}