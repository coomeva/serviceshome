const http = require('http');
const express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request');

app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.post('/apis', function(req, response){
 
 var id_number = req.result.parameters.number;

 callConsultAssociate(id_number).then((resultado) => {
        console.log('welcome ' + resultado);
        return response.json({
        speech: resultado,
        displayText: resultado,
         source: 'serviceshome'
      });
    });


});

function callConsultAssociate(id_number){
    return new Promise((resolve, reject) => {
        
        var sum = id_number + 3;
        
         resolve(sum);
        
        /*
        var host = 'ec2-184-73-133-117.compute-1.amazonaws.com';
        var port = '8080';
        var path = '/consultacedula/services/rest/' + id_number;
        
        console.log('API Request;' + host + port + path);
        
        var options ={
            host: host, 
            port: port, 
            path: path
        };


        http.get(options, (res) =>{
            var body = '';
            res.on('data', (d) => { 
                body += d;
            });
            res.on('end', () => {
                var respone = JSON.parse(body);
                var name = respone.nameClient;
                
                let output = 'welcome bot DialogFlow.' + name;
                console.log('++++' + output);
                resolve(output);
            });
            res.on('error', (error) => {
                reject(error);
            });
        });*/
    });
}


app.listen((process.env.PORT || 1000), function(){
    console.log('servidor iniciado en https://localhost:' + this.address().port);
});
