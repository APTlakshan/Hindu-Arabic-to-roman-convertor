const input = document.querySelector(".custom-input");
const button = document.querySelector(".button");
const result = document.querySelector(".result");
button.addEventListener("click", function () {
    result.classList.remove("danger");
    fetch(`https://romans.justyy.workers.dev/api/romans/?cached&n=${input.value}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            input.value = "";
            result.innerHTML = data.result;


        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Error:', error);
        });
});