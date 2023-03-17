function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let p = document.createElement("p");
            p.textContent = json[`id`];
            inputForm.appendChild(p);
        })
        .catch(function (error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            inputForm.appendChild(h3);
            console.log(error.message);
        });
}

let inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    console.log(name, email);
    submitData(name, email);
});