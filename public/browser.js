console.log('Front End is working.');

let createField = document.getElementById("create-field");

function itemTemplate(item) {
    return `<li
                    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
                >
                    <span class="item-text">${item.plan}</span>
                    <div>
                        <button
                            data-id="${item._id}"
                            class="edit-me btn btn-secondary btn-sm mr-1"
                        >
                            O'zgartirish
                        </button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
                    </div>  
                </li>`;
}

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("E ning qiymati:", e);
    axios.post("/create-item", {
        plan: createField.value
    })
    .then(function (response) {
        console.log("Serverdan kelgan response:", response);
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch(function (error) {
        console.error("xatolik yuzaga keldi:", error);
    });

});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Siz rostdan ham ushbu reja o'chirishni xohlaysizmi?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then( async (response) => {
                    e.target.parentElement.parentElement.remove();
                })
                .catch(function (err) {
                    console.log("xatolik yuzaga keldi:", err);
                });
        }
    }

    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post("/edite-item", {id: e.target.getAttribute("data-id"), new_input: userInput,})
            .then( async (response) => {
                console.log("it s working")
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err) => {
                console.log("Try again!")
            })
        }
    }
});
                      
document.getElementById("clean-all").addEventListener("click", () => {
    axios.post("/delete-all", {deleteAll: true})
    .then((response) => {
        alert(response.data.state);
        document.location.reload();
    })
    .catch()
})