//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
//const encrypt = require('mongoose-encryption');


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( 'public'));



mongoose.connect("mongodb://localhost:27017/bbcbaDB",{useNewUrlParser:true,useUnifiedTopology: true ,useCreateIndex:true,useFindAndModify:false});




const userschema=new mongoose.Schema({
  email:String,
  password:String
});

const User=new mongoose.model("User",userschema);

const memberSchema=new mongoose.Schema({
  name:String,

  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String
});

autoIncrement.initialize(mongoose.connection);
memberSchema.plugin(autoIncrement.plugin, 'Member');
const Member=new mongoose.model("Member",memberSchema);




app.get("/",function(req,res){

      res.render("home");


});

app.get("/Constitution",function(req,res){

      res.render("Constitution");


});

app.get("/Executive",function(req,res){

      res.render("Executive");


});

app.get("/General",function(req,res){

Member.find({}, function(err, members){

        res.render("General",{
          members:members
        });

  });



});

app.get("/Life",function(req,res){

      res.render("Life");


});

app.get("/Student",function(req,res){

      res.render("Student");


});

app.get("/Honorary",function(req,res){

      res.render("Honorary");


});

app.get("/Advisory",function(req,res){

      res.render("Advisory");


});

app.get("/Pending",function(req,res){

      res.render("Pending");


});

app.get("/Gallery",function(req,res){

      res.render("Gallery");


});


app.get("/Lectures",function(req,res){

      res.render("Lectures");


});

app.get("/Seminars",function(req,res){

      res.render("Seminars");


});

app.get("/Workshops",function(req,res){

      res.render("Workshops");


});

app.get("/Trainings",function(req,res){

      res.render("Trainings");


});

app.get("/Conferences",function(req,res){

      res.render("Conferences");


});

app.get("/Genomics",function(req,res){

      res.render("Genomics");


});
app.get("/Transcriptomics",function(req,res){

      res.render("Transcriptomics");


});

app.get("/Proteomics",function(req,res){

      res.render("Proteomics");


});

app.get("/Metabolomics",function(req,res){

      res.render("Metabolomics");


});

app.get("/Metagenomics",function(req,res){

      res.render("Metagenomics");


});

app.get("/Pharmacogenomics",function(req,res){

      res.render("Pharmacogenomics");


});

app.get("/Others",function(req,res){

      res.render("Others");


});


  const user=new User({
    email:"admin@gmail.com",
    password:"1234"
  });

  user.save();





app.get("/login",function(req,res){
    res.render("login");
});

app.post("/login",function(req,res){

  const mail=req.body.mail;
  const pass=req.body.pass;

  User.findOne({email:mail},function(err,user){
    if(err){
      console.log(err);
    }else{
      if(user){
        if(user.password === pass){
            res.render("Adminpanel");
        }
      }
    }
  });
});


///////////////admin panel js starts here//////////////////////////////
app.get("/Adminpanel",function(req,res){

      res.render("Adminpanel");


});
app.get("/Addgeneral",function(req,res){

      res.render("Addgeneral");
});
app.post("/Addgeneral",function(req,res){
  const member1=new Member({
    name:req.body.name,

    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail

  });

      member1.save(function(err){
        if(!err){
            //console.log("succesful");
          res.redirect("General");
      

        }else{
          console.log(err);
        }
      });



});

app.get("/lifemember",function(req,res){

      res.render("lifemember");
});

app.get("/studentmember",function(req,res){
  res.render("studentmember");
});
app.get("/honorarymember",function(req,res){
  res.render("honorarymember");
});

app.get("/advisorymember",function(req,res){
  res.render("advisorymember");
});

app.get("/pendingmember",function(req,res){
  res.render("pendingmember");
});

app.get("/photoupload",function(req,res){
  res.render("photoupload");
});
app.get("/lecturesadd",function(req,res){
  res.render("lecturesadd");
});
app.get("/seminarschedule",function(req,res){
  res.render("seminarschedule");
});

app.get("/trainingupdate",function(req,res){
  res.render("trainingupdate");
});

app.get("/Workshopdate",function(req,res){
  res.render("Workshopdate");
});



app.get("/conferenceschedule",function(req,res){
  res.render("conferenceschedule");
});

app.get("/genomicupdate",function(req,res){
  res.render("genomicupdate");
});

app.get("/Transcriptomicupdate",function(req,res){
  res.render("Transcriptomicupdate");
});

app.get("/proteomicupdate",function(req,res){
  res.render("proteomicupdate");
});

app.get("/metabolomicupdate",function(req,res){
  res.render("metabolomicupdate");
});

app.get("/metagenomicupdate",function(req,res){
  res.render("metagenomicupdate");
});

app.get("/pharmacogenomicupdate",function(req,res){
  res.render("pharmacogenomicupdate");
});

app.get("/otherupdate",function(req,res){
  res.render("otherupdate");
});

app.get("/journalupload",function(req,res){
  res.render("journalupload");
});

app.get("/bookupload",function(req,res){
  res.render("bookupload");
});

app.get("/sponserupdate",function(req,res){
  res.render("sponserupdate");
});

app.get("/noticeupdate",function(req,res){
  res.render("noticeupdate");
});

app.get("/updatenews",function(req,res){
  res.render("updatenews");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
