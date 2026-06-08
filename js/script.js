document.addEventListener("DOMContentLoaded", function () {
    const listButtons = document.querySelectorAll(".btn-action-view");
    const containerDetail = document.getElementById("displayAreaDetail");

    listButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const currentCard = this.closest(".course-card");
            const nameOfCourse = currentCard.getAttribute("data-title") || currentCard.querySelector("h4").innerText;
            const progressOfCourse = currentCard.getAttribute("data-progress");
            containerDetail.innerHTML = `
                <div class="info-item"><strong>Tên môn học học phần:</strong> ${nameOfCourse}</div>
                <div class="info-item"><strong>Tiến độ hoàn thành bài:</strong> ${progressOfCourse}</div>
            `;
        });
    });


    const listMenuItems = document.querySelectorAll(".menu-item");

    listMenuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {

            event.preventDefault();
            listMenuItems.forEach(function (element) {
                element.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    const studentCode = "22123456";

    const stringLastTwo = studentCode.slice(-2);
    const numberLastTwo = parseInt(stringLastTwo, 10);
    const layoutGridElement = document.getElementById("courseGridSystem");

    if (numberLastTwo % 2 === 0) {

        layoutGridElement.style.gridTemplateColumns = "repeat(3, 1fr)";
        console.log("Hệ thống nhận diện 2 số cuối MSSV là số chẵn (" + numberLastTwo + "): Đổi bố cục Grid 3 cột.");
    } else {

        layoutGridElement.style.gridTemplateColumns = "repeat(2, 1fr)";
        console.log("Hệ thống nhận diện 2 số cuối MSSV là số lẻ (" + numberLastTwo + "): Đổi bố cục Grid 2 cột.");
    }

});
    