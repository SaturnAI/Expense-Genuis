function done() {
    const fileInput = document.getElementById('file');
    const filenameElement = document.getElementById('filename');

    downloadCSVButton.style.display = 'none';
    outputText.style.display = 'none';
    downloadExcel.style.display = 'none';

    if (fileInput.files.length > 0) {
        const filename = fileInput.files[0].name;
        filenameElement.textContent = 'Uploaded File: ' + filename;
        filenameElement.style.display = 'block';
        filenameElement.style.marginLeft = '55rem';
    } else {
        filenameElement.textContent = 'No file selected';
    }
}
function uploadPDF() {
    downloadCSVButton.style.display = 'none';
    outputText.style.display = 'none';
    downloadExcel.style.display = 'none';
    const fileInput = document.getElementById('file');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const formData = new FormData();
    const uploadButton = document.getElementById('uploadButton');

     // Check if the click event originated from an image


    // Disable the upload button
    uploadButton.disabled = true;
    formData.append('pdf_file', fileInput.files[0]);

    loadingSpinner.style.display = 'block';
    fileInput.disabled = true;


    fetch('https://salesorder.saturnai.in/upload_pdf', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            loadingSpinner.style.display = 'none';
            // Display text data
            const outputText = document.getElementById('outputText');
            outputText.textContent = data.text_data;
            outputText.style.display = 'none';

            // Set the download link for the Excel file with the filename
            const downloadExcel = document.getElementById('downloadExcel');
            downloadExcel.href = '#';  // Clear the link's href
            downloadExcel.style.display = 'none';  // Hide the link

            // Show the "Download CSV" button and set the filename as a download attribute
            const downloadCSVButton = document.getElementById('downloadCSVButton');
            downloadCSVButton.style.display = 'block';
            downloadCSVButton.dataset.csvFilename = data.csv_filename;  // Store the filename as a data attribute

            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'File is Successfully Converted';

        })
        .catch(error => {
            fileInput.disabled = false;
            uploadButton.disabled = false;
            loadingSpinner.style.display = 'none';
            console.error('Error:', error);
        })
        .finally(() => {
            // Re-enable the upload button after the request is complete (whether successful or not)
            fileInput.disabled = false;
            uploadButton.disabled = false;
        });
}
// document.getElementById('wrap').addEventListener('click', uploadPDF);

function downloadCSV() {
    const csvFilename = document.getElementById('downloadCSVButton').dataset.csvFilename;
    if (csvFilename) {
        window.location.href = `https://salesorder.saturnai.in/download_csv?filename=${csvFilename}`;
    }
}





//for adding mouse trail to a page that scrolls beyond the viewport, as would be the case with most websites - lol
let x1=0, y1=0;
window.client
const
vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
dist_to_draw = 50,
delay = 1000,
fsize = [
'2.4rem', '1.8rem', '.8rem', '2.1rem'
],
colors = [
'#E23636',
'#F9F3EE',
'#E1F8DC',
'#B8AFE6',
'#AEE1CD',
'#5EB0E5'
],
rand = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min,
selRand = (o) => o[rand(0, o.length -1)],
distanceTo =  (x1, y1, x2, y2) =>
Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2))),
shouldDraw = (x, y) =>
(distanceTo(x1, y1, x, y) >= dist_to_draw),
addStr = (x, y) => {
const str = document.createElement("div");
str.innerHTML = '&#10022;';
str.className = 'star';
str.style.top = `${y + rand(-20,20)}px`;
str.style.left = `${x}px`;
str.style.color = selRand(colors);
str.style.fontSize = selRand(fsize);
document.body.appendChild(str);
console.log(rand(0, 3));
const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
console.log(vh, y, fs);
console.log((y+fs)>vh?vh-y:fs);
str.animate({
translate: `0 ${(y+fs)>vh?vh-y:fs}px`,
opacity: 0,
transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
}, {
duration: delay,
fill: 'forwards',

});
//could add a animation terminate listener, but why add the additional load
setTimeout(() => {
str.remove();
}, delay);
}

addEventListener("mousemove", (e) => {
const {clientX, clientY} = e;
if(shouldDraw(clientX, clientY)){
addStr(clientX, clientY);
x1 = clientX;
y1 = clientY;
}

});



document.addEventListener('DOMContentLoaded', function () {
    // Find the dashboard link by its class
    const dashboardLink = document.querySelector('.dashboard-link');
    // Add a click event listener to the dashboard link
    dashboardLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (prevents navigation for now)
        event.preventDefault();

        // You can now add your logic to navigate to another page
        // For example, you can use window.location.href to change the page URL
        window.location.href = 'https://www.youtube.com/';
    });
});




document.getElementById('infoLink').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}
