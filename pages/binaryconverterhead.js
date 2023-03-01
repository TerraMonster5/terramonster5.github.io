// Program to convert Binary to Denary and Denary to Binary

// Functions to hide & show converters
function hideBinary() {
    document.getElementById("binarydenary").style.display = "none";
    document.getElementById("denarybinary").style.display = "block";
}

function hideDenary() {
    document.getElementById("binarydenary").style.display = "block";
    document.getElementById("denarybinary").style.display = "none";
}

// Functions to convert binary to denary

// Read binary number from HTML element
function readBin() {
    return document.getElementById("bidein").value;
}
// Convert binary number to denary
function bin2Den(bin){
    return parseInt(bin, 2).toString(10);
}
// Write denary number to HTML element
function writeDen() {
    document.getElementById("bideout").innerHTML = bin2Den(parseInt(readBin()));
}

// Functions to convert denary to binary

// Read denary number from HTML element
function readDen() {
    return document.getElementById("debiin").value;
}
// Convert denary number to binary
function den2Bin(den){
    return parseInt(den, 10).toString(2);
}
// Write binary number to HTML element
function writeBin() {
    document.getElementById("debiout").innerHTML = den2Bin(parseInt(readDen()));
}