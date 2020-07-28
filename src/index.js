const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow
const path = require('path')

function openPDFWindow () {

    /*Window for the PDF-Merger-Functionality */

    const modalPath = path.join('file://', __dirname, 'pdf.html')
    let pdf_window = new BrowserWindow({

        width : 400,
        height : 500,
        icon: path.join( __dirname, '/../assets/favicon.png'),
        webPreferences: {

            nodeIntegration: true
      
        }

    })

    pdf_window.loadURL(modalPath)
    pdf_window.removeMenu()
    //pdf_window.webContents.openDevTools()
    pdf_window.show()
    pdf_window.focus()    
}

function openExcelWindow () {

    /*Window for the timetable-conveter functionality*/

    const modalPath = path.join('file://', __dirname, 'excel.html')
    let excel_window = new BrowserWindow({

        width : 400,
        height : 500,
        icon : path.join( __dirname + '/../assets/favicon.png'),
        webPreferences : {

            nodeIntegration : true

        }

    })

    excel_window.loadURL(modalPath)
    excel_window.removeMenu()
    //excel_window.webContents.openDevTools()
    excel_window.show()
    excel_window.focus()

}

function openRequestsWindow () {

    /*Window for the http-requests functionality*/

    const modalPath = path.join('file://', __dirname, 'requests.html')
    let excel_window = new BrowserWindow({

        width : 400,
        height : 650,
        icon : path.join( __dirname + '/../assets/favicon.png'),
        webPreferences : {

            nodeIntegration : true

        }

    })

    excel_window.loadURL(modalPath)
    excel_window.removeMenu()
    //excel_window.webContents.openDevTools()
    excel_window.show()
    excel_window.focus()

}