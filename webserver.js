var connect = require('connect');
var serveStatic = require('serve-static');
//<<<<<<< HEAD
var sFolder=".";
var app = connect();
app.use(serveStatic("."));
var nport=5100;
app.listen(nport,()=>{
    console.log("Listening on Port: "+nport);
console.log("Document root:"+__dirname+"/"+sFolder);
});
//=======

// var app = connect();
// var sFolder = ".";
// app.use(serveStatic(sFolder));
// var nPort = 5100;
// app.listen(nPort, ()=>{
//     console.log("Listening on port: " + nPort);
//     console.log("Document Root: " + __dirname + "/" + sFolder);
// });

//>>>>>>> 6366a1c237fe46e4e7c8ba1a7caa7557eeba587f
