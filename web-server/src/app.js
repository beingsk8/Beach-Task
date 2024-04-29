const path=require('path');
const express= require('express');
const hbs=require('hbs');
const geocode = require("./utils/geocode");
const forecast  = require('./utils/forecast');
const app = express()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//set handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather app',
        name:'Sourav kumar',
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About weather app',
        name:'Sourav kumar',
    });
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Sourav kumar',
        helpText:'If you need any help please contact me @ 8076898297'
    });
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.send({
           'address':'please provide valid address',
        })
    }
    else{
        geocode(req.query.address,(error,data={}) => {
            if(error) {
                return res.send(error);
            }

            forecast(data.latitude,data.longitude,(error,data) => {
                if (error) {
                    return res.send(error);
                }
                else {
                    res.send({
                        'forecast':data,
                        'address':req.query.address,
                        'location':data.location,
                    })
                }

            })
        })

    }
})

/*Error Handling Pages*/

app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage:'page Does not exist',
    });
})

app.get('/about/*',(req,res)=>{
    res.render('404',{
        errorMessage:'Page Does not exist',
    });
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404 Error',
        errorMessage:'Page does not exist',
        name:'Sourav kumar',
    });
})




app.listen(3000,()=>{
    console.log('listening on port 3000')
})