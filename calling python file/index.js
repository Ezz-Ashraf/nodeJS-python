const { spawn } = require('child_process')

const py =spawn('python' , ['pyScript.py','3ez eldin'])

py.stdout.on('data',(data) => {
    console.log(data.toString())
})


// py.on('close',(code) => {
//     console.log(`file exited with code ${code}`)
// })