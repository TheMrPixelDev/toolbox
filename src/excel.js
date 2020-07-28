const python = require('python-shell');
const { dialog } = require('electron').remote;
const path = require('path');

document.getElementById('btn-finished').addEventListener('click', (event) => {

    window.close()

})

document.getElementById('start_btn').addEventListener('click', (event) => {

    console.log("Starting Excel-Konverter...");

    var output_file_path = document.getElementById('output_excel_file').files;
    var input_file_path = document.getElementById('input_excel_file').files;

    python.PythonShell.run('excel_converter.py', {

        scriptPath : path.join(__dirname, '/../scripts/'),
        args : [input_file_path[0].path, output_file_path[0].path],
        pythonPath : path.join(__dirname, '/../venv/Scripts/python.exe'),


    },function (err, results) {
        if (err){
            
            dialog.showErrorBox
            throw err
        
        }else{

            dialog.showMessageBox({
            buttons: ["OK"],
            message: "Aktion war erfolgreich!"

           });
    
        };
        console.log('results: %j', results);
      });

});


