var url = "https://api.funtranslations.com/translate/shakespeare.json"
var translate_btn = document.querySelector("#translate-btn")
var input_box = document.querySelector("#input")
var output_box = document.querySelector("#output")

function errorHandler(error) {
    console.log("Error is: " + error)
    if (error === 429) {
        alert("Too many requests have been sent. Please wait for an hour")
    } else {
        alert("Server is down. Error Code: " + error);
    }
}

function sendTranslateRequest() {
    console.log("Sent Request");
    msg = input_box.value;
    console.log(msg)
    var newUrl = url + "?text=" + msg;
    fetch(newUrl)
        .then(response => {
            if (!response.ok) {throw response.status}
            else { return response.json() }
        })
        .then(json => {
            var translated_msg = json.contents.translated
            output_box.innerText = translated_msg
        })
    .catch(errorHandler)
}

translate_btn.addEventListener("click", sendTranslateRequest);