function toggleMoreOption() {
    if (moreOptionIsVisible()) hideMoreOption();
    else showMoreOption();
}

function moreOptionIsVisible() {
    let moreOption = document.getElementById("more-option");
    return moreOption.style.display === "block";
}

function hideMoreOption() {
    let moreOption = document.getElementById("more-option");
    moreOption.style.display = "none";
}

function showMoreOption() {
    let moreOption = document.getElementById("more-option");
    moreOption.style.display = "block";
}

// function hideMessageBox() {
//     let elements = document.getElementsByClassName("message-box");
//     elements[0].style.display = "none";
//     // for (let i = 0; i < elements.length-1; i++) {
//     //     let element = elements[i];
//     //     element.style.display = "none";
//     // }
// }