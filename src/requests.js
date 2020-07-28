const url_input = document.getElementById('request_url');
const content_type_input = document.getElementById('content_type');
const content_input = document.getElementById('content');


document.getElementById('send_btn').addEventListener('click', (event) => {

    const url = url_input.value;
    const content_type = content_type_input.value;
    const content = content_input.value;

    sendPostRequest(url, content, content_type);

});

document.getElementById('delete_btn').addEventListener('click', (event) => {

    url_input.value = '';
    content_input.value = '';
    
});

async function sendPostRequest(url, r_content, content_type) {

    var xhttp = new XMLHttpRequest();

    console.log("Sending POST-Requst...");

    xhttp.open("POSt", url, true);
    xhttp.setRequestHeader("Content-Type", content_type);
    xhttp.send(JSON.stringify(r_content))

    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            document.getElementById('request_output').value = xhttp.responseText;
        }
    }
}
