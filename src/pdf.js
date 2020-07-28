const { dialog } = require('electron').remote
const python = require('python-shell')
const path = require('path')
const fs = require('fs');
const { remote } = require('electron');
/*
 (event) => {
    run_conversion();
});
*/

/*Is being triggered when the start btn is clicked */
document.getElementById('start_conv').addEventListener('click', (event) => {

    console.log("Starting PDF-Merger...");

    /*Gets the provided path/filename for the output pdf file*/
    var output_file_name = document.getElementById('output_file_name').value;

    var options = {

        scriptPath : path.join(__dirname, '/../scripts/'),
        args : [output_file_name],
        pythonPath : path.join(__dirname, '/../venv/Scripts/python.exe'),

    }
    /*Runs a python shell that executes a python script containing the actual functionality */
    python.PythonShell.run('pdf_merger.py', options, function (err, results) {
        if (err){
            
            throw err
        
        }else{
            
            /*Opens a success dialog*/
            dialog.showMessageBox({
            buttons: ["OK"],
            message: "Aktion war erfolgreich!"

           });
    
        };
        console.log('results: %j', results);
      });
    }
);

/*Finished btn that closes the  */
document.getElementById('btn-finished').addEventListener('click', (event) => {

    window.close();
    
})

document.getElementById('input_files').addEventListener('change', (event) => {

    var files_array = document.getElementById('input_files').files;

    var new_array = [];

    for(var i = 0; i< files_array.length; i++){

        new_array.push(files_array[i].path);

    }

    ram = new_array.join('\n');

    cacheToJSON(ram);

})

/*Array is being written to a csv file for passing it to python */
async function cacheToJSON(array) {

    fs.writeFile("cache.csv", array, "utf8", function (err) {

        if (err) {

            console.log("There was an error!");
            return console.log(err);
        }

    });

    console.log("Cache has been written!");
    
}