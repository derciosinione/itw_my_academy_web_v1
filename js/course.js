

function toggleModalAddCourse() {
    if (modalAddCourseIsVisible()) hideModalAddCourse();
    else showModalAddCourse();
}

function modalAddCourseIsVisible() {
    let modalAddCourse = document.getElementById("modalAddCourse");
    return modalAddCourse.style.display === "block";
}

function hideModalAddCourse() {
    let modalAddCourse = document.getElementById("modalAddCourse");
    modalAddCourse.style.display = "none";
}

function showModalAddCourse() {
    let modalAddCourse = document.getElementById("modalAddCourse");
    modalAddCourse.style.display = "block";
}
