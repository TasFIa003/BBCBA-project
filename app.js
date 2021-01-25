//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const multer=require('multer');
const path=require('path');
const date=require(__dirname+'/date.js')
//const encrypt = require('mongoose-encryption');


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



mongoose.connect("mongodb://localhost:27017/bbcbaDB",{useNewUrlParser:true,useUnifiedTopology: true ,useCreateIndex:true,useFindAndModify:false});

///////////////////////connection and model //////////////////////////////////////////////

const storage=multer.diskStorage({
  destination:"public/uploads/",
  filename:function(req,file,cb){
    cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname));
  }
});

const upload=multer({
  storage:storage
}).single('file');

const userschema=new mongoose.Schema({
  email:String,
  password:String
});

const User=new mongoose.model("User",userschema);

///update news schema///////////////////
const updateSchema = new mongoose.Schema({
  updates:String
});

const Update=new mongoose.model("Update",updateSchema);

/////////////////for executive comiittee year///////////////////////////

const yearschema=new mongoose.Schema({
  year:String,
});

const Year=new mongoose.model("Year",yearschema);

//////committeee/////

const committeeSchema=new mongoose.Schema({
      year:String,
      position:String,
      name:String,
      insti:String,
});

const Committee=new mongoose.model("Committee",committeeSchema)

//////////for genereal Membership///////////

const memberSchema=new mongoose.Schema({
  name:String,
  autoid:{type:Number,default:1},
  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String,
  image:String,
});


autoIncrement.initialize(mongoose.connection);
memberSchema.plugin(autoIncrement.plugin, 'Member');
const Member=new mongoose.model("Member",memberSchema);


//////////for life Membership///////////

const lifeSchema=new mongoose.Schema({
  name:String,
  homepage:String,
  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String,
  image:String,
});


autoIncrement.initialize(mongoose.connection);
lifeSchema.plugin(autoIncrement.plugin, 'Life');
const Life=new mongoose.model("Life",lifeSchema);




//////////for student Member///////////



const studentSchema=new mongoose.Schema({
  name:String,
  autoid:{type:Number,default:1},
  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String,
  image:String,
});


autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, 'Student');
const Student=new mongoose.model("Student",studentSchema);

//////////for honorary Member///////////

const honorarySchema=new mongoose.Schema({
  name:String,
  autoid:{type:Number,default:1},
  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String,
  image:String,
});


autoIncrement.initialize(mongoose.connection);
honorarySchema.plugin(autoIncrement.plugin, 'Honorary');
const Honorary=new mongoose.model("Honorary",honorarySchema);



//////////for advisory Member///////////

const advisorySchema=new mongoose.Schema({
  name:String,
  autoid:{type:Number,default:1},
  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String,
  image:String,
});


autoIncrement.initialize(mongoose.connection);
advisorySchema.plugin(autoIncrement.plugin, 'Advisory');
const Advisory=new mongoose.model("Advisory",advisorySchema);




//////////for pending Member///////////

const pendingSchema=new mongoose.Schema({
  name:String,
  autoid:{type:Number,default:1},
  position:String,
  masters:String,
  phd:String,
  areaOfSpecialization:String,
  current:String,
  contact:String,
  mail:String,
  image:String,
});


autoIncrement.initialize(mongoose.connection);
pendingSchema.plugin(autoIncrement.plugin, 'Pending');
const Pending=new mongoose.model("Pending",pendingSchema);
///////////////////gallery scehema///////////////////////
const gallerySchema=new mongoose.Schema({
  img:String,
  detail:String
});

const Photo=new mongoose.model("Photo",gallerySchema);

///////////////////lectures schema////////////////////////


const lectureSchema=new mongoose.Schema({

      title:String,
      shortDiscription:String,
      file:String,


});


autoIncrement.initialize(mongoose.connection);
lectureSchema.plugin(autoIncrement.plugin, 'Lecture');
const Lecture=new mongoose.model("Lecture",lectureSchema);

////////////////////seminars schema////////////////////////////////

const seminarSchema=new mongoose.Schema({

      title:String,
      day:String,
      shortDiscription:String,
      file:String,


});


autoIncrement.initialize(mongoose.connection);
seminarSchema.plugin(autoIncrement.plugin, 'Seminar');
const Seminar=new mongoose.model("Seminar",seminarSchema);

///////////////////////workshops schema////////////////////////////

const workSchema=new mongoose.Schema({

      title:String,
      day:String,
      shortDiscription:String,
      file:String,


});


autoIncrement.initialize(mongoose.connection);
workSchema.plugin(autoIncrement.plugin, 'Work');
const Work=new mongoose.model("Work",workSchema);

///////////////////////Training schema////////////////////////////

const trainSchema=new mongoose.Schema({
      title:String,
      date:String,
      shortDiscription:String,
      file:String,
    });


autoIncrement.initialize(mongoose.connection);
trainSchema.plugin(autoIncrement.plugin, 'Trainning');
const Trainning=new mongoose.model("Trainning",trainSchema);

///////////////////////conference  schema////////////////////////////

const conferenceSchema=new mongoose.Schema({
    title:String,
    link:String,
      day:String,
      shortDiscription:String,
      file:String,
    });


autoIncrement.initialize(mongoose.connection);
conferenceSchema.plugin(autoIncrement.plugin, 'Conference');
const Conference=new mongoose.model("Conference",conferenceSchema);

//////////////////geonomic scehema//////////////////////////////

const geoSchema = new mongoose.Schema({
        groupmembers:String
});

const Geonomic = new mongoose.model("Geonomic",geoSchema );

//////////////////Transcriptomics scehema//////////////////////////////

const tranSchema = new mongoose.Schema({
        groupmembers:String
});

const Transcriptomic = new mongoose.model("Transcriptomic ",tranSchema );
//////////////////Proteomics scehema//////////////////////////////

const proSchema = new mongoose.Schema({
        groupmembers:String
});

const Proteomic = new mongoose.model("Proteomic",proSchema );

//////////////////metabolomics scehema//////////////////////////////

const metaSchema = new mongoose.Schema({
        groupmembers:String
});

const Metabolomic = new mongoose.model("Metabolomic",metaSchema );

//////////////////metagenomics scehema//////////////////////////////

const metagSchema = new mongoose.Schema({
        groupmembers:String
});

const Metagenomic = new mongoose.model("Metagenomic",metagSchema );

//////////////////Pharmacogenomics scehema//////////////////////////////

const pharmaSchema = new mongoose.Schema({
        groupmembers:String
});

const Pharmacogenomic = new mongoose.model("Pharmacogenomic",pharmaSchema );
//////////////////Others scehema//////////////////////////////

const othSchema = new mongoose.Schema({
        groupmembers:String
});

const Othergroup = new mongoose.model("Othergroup",othSchema );

//////////////////sponser scehema//////////////////////////////

const sponserSchema = new mongoose.Schema({
        shortDiscription:String,
        money:String
});

const Sponser = new mongoose.model("Sponser",sponserSchema);

///////////////////journal schema/////////////////////////////


const journalSchema = new mongoose.Schema({
        journals:String
});

const Journal = new mongoose.model("Journal",journalSchema );

///////////////////book schema/////////////////////////////


const bookSchema = new mongoose.Schema({
        books:String
});

const Book = new mongoose.model("Book",bookSchema );

////////////////////notice schema////////////////////////////////

const noticeSchema=new mongoose.Schema({

      date:String,
      shortDiscription:String,



});

const Notice=new mongoose.model("Notice",noticeSchema);
///////////////////society schema/////////////////////////////


const societySchema = new mongoose.Schema({
        socities:String
});

const Society = new mongoose.model("Society",societySchema);
///////////////////software schema/////////////////////////////


const softSchema = new mongoose.Schema({
      title:String,
      file:String
});

const Soft = new mongoose.model("Soft",softSchema);

///////////////////database schema/////////////////////////////


const dataSchema = new mongoose.Schema({
        title:String
});

const Data = new mongoose.model("Data",dataSchema);
//////////////member schema///////////////////

const memSchema=new mongoose.Schema({
    name:String,
    mobile:String,
    mail:String,
    address:String,
    position:String,
    insti:String,
    phd:String,
    specialization:String,
    research:String,
    file:String,
    option:{ type: String, select: true },
    payment:String

});

const Membership=new mongoose.model("Membership",memSchema);

/////////////////////////////bbcba main page js////////////////////////////


app.get("/",function(req,res){

      //res.render("home");
      Update.find({},function(err,ups){
        res.render("home",{
          ups:ups
        });
      });


});

app.get("/Constitution",function(req,res){

      res.render("Constitution");

});

app.get("/Executive",function(req,res){

  Year.find({},function(err,years){
    res.render("Executive",{
      years:years
    });
  });





});

app.get("/comitte",function(req,res){

  Committee.find({},function(err,comitties){
    res.render("comitte",{
      comitties:comitties,
    });
  });
  });








app.get("/General",function(req,res){

Member.find({}, function(err, members){

        res.render("General",{
          members:members,

        });

  });



});

app.get("/Life",function(req,res){


      Life.find({}, function(err, lifes){

              res.render("Life",{
                lifes:lifes
              });

        });


});

app.get("/Student",function(req,res){

  Student.find({}, function(err, students){

          res.render("Student",{
            students:students
          });

    });



});

app.get("/Honorary",function(req,res){

  Honorary.find({}, function(err, honorarys){

          res.render("Honorary",{
            honorarys:honorarys
          });

    });



});

app.get("/Advisory",function(req,res){

  Advisory.find({}, function(err, advisorys){

          res.render("Advisory",{
            advisorys:advisorys
          });

    });


});

app.get("/Pending",function(req,res){

  Pending.find({}, function(err, pendings){

          res.render("Pending",{
            pendings:pendings
          });

    });


});

app.get("/Gallery",function(req,res){

  Photo.find({}, function(err, photos){

          res.render("Gallery",{
             photos: photos
          });

    });


});


app.get("/Lectures",function(req,res){

  Lecture.find({}, function(err,lectures){

          res.render("Lectures",{
            lectures:lectures
          });

    });

});

app.get("/Seminars",function(req,res){


    Seminar.find({}, function(err,seminars){

            res.render("Seminars",{
              seminars:seminars,
              day:date.getDate(),


            });

      });



});

app.get("/Workshops",function(req,res){


  Work.find({},function(err,works){

      res.render("Workshops",{
        works:works
      });

  });



});

app.get("/Trainings",function(req,res){

  Trainning.find({},function(err,trains){

      res.render("Trainings",{
        trains:trains
      });

  });


});

app.get("/Conferences",function(req,res){

  Conference.find({},function(err,cons){

      res.render("Conferences",{
        cons:cons
      });

  });


});

app.get("/Genomics",function(req,res){

  Geonomic.find({},function(err,geonomics){

      res.render("Genomics",{
        geonomics:geonomics
      });

  });


});
app.get("/Transcriptomics",function(req,res){

  Transcriptomic.find({},function(err,trans){

      res.render("Transcriptomics",{
        trans:trans
      });

  });

});

app.get("/Proteomics",function(req,res){

  Proteomic.find({},function(err,proteomics){

      res.render("Proteomics",{
        proteomics:proteomics
      });

  });



});

app.get("/Metabolomics",function(req,res){

  Metabolomic.find({},function(err,metas){

      res.render("Metabolomics",{
        metas:metas
      });

  });

});

app.get("/Metagenomics",function(req,res){

  Metagenomic.find({},function(err,metags){

      res.render("Metagenomics",{
        metags:metags
      });

  });


});

app.get("/Pharmacogenomics",function(req,res){

  Pharmacogenomic.find({},function(err,pharms){

      res.render("Pharmacogenomics",{
        pharms:pharms
      });

  });



});

app.get("/Others",function(req,res){

  Othergroup.find({},function(err,grps){

      res.render("Others",{
        grps:grps
      });

  });


});


app.get("/Journals",function(req,res){

  Journal.find({},function(err,journals){

      res.render("Journals",{
        journals:journals
      });

  });


});

app.get("/Books",function(req,res){

  Book.find({},function(err,books){

      res.render("Books",{
        books:books
      });

  });


});

app.get("/membership",function(req,res){

      res.render("membership");
});
app.post("/membership",upload,function(req,res){

    const members=new Membership({
      name:req.body.name,
      mobile:req.body.mobile,
      mail:req.body.mail,
      address:req.body.address,
      position:req.body.position,
      insti:req.body.insti,
      phd:req.body.phd,
      specialization:req.body.specialization,
      research:req.body.research,
      file:req.file.filename,
      option:req.body.option,
      payment:req.body.payment,

  });

      members.save(function(err){
        if(!err){
          console.log("succesful");
          res.send("Thank you for registration.For any query please send mail to the head of BBCBA!");
          //res.redirect("checkmember");
        }else{
          console.log(err);
        }
      });
});

app.get("/office",function(req,res){

      res.render("office");


});
app.get("/secratory",function(req,res){

      res.render("secratory");


});

app.get("/sponsers",function(req,res){


  Sponser.find({},function(err,spons){

      res.render("sponsers",{
        spons:spons
      });

  });



});

app.get("/notice",function(req,res){


  Notice.find({},function(err,notices){

      res.render("notice",{
        notices:notices
      });

  });



});
app.get("/society",function(req,res){


  Society.find({},function(err,sos){

      res.render("society",{
        sos:sos
      });

  });



});

app.get("/soft",function(req,res){


  Soft.find({},function(err,softs){

      res.render("soft",{
        softs:softs
      });

  });



});

app.get("/database",function(req,res){


  Data.find({},function(err,datas){

      res.render("database",{
        datas:datas
      });

  });



});

app.get("",function(req,res){


  Data.find({},function(err,datas){

      res.render("database",{
        datas:datas
      });

  });



});



  /*const user=new User({
    email:"admin@gmail.com",
    password:"mollah1234"
  });

  user.save();*/
  const email="admin@gmail.com";
  const password="1234";





app.get("/login",function(req,res){
    res.render("login");
});

app.post("/login",function(req,res){

  const mail=req.body.mail;
  const pass=req.body.pass;

  /*User.findOne({email:mail},function(err,user){
    if(err){
      console.log(err);
    }else{
      if(user){
        if(user.password === pass){
            res.render("Adminpanel");
        }
      }
    }
  });*/
  if(email==mail){
    console.log("ok");
    if(password==pass){
      res.render("Adminpanel");
    }else{
      res.send("Wrong password.Please retype");
    }
  }else{
    res.send("mailm id is not correct.Please check");
  }
});


///////////////admin panel js starts here//////////////////////////////
app.get("/Adminpanel",function(req,res){

  Membership.find({},function(err,mems){

      res.render("Adminpanel",{
        mems:mems
      });

  });


});

app.get("/checkmember",function(req,res){

  Membership.find({},function(err,mems){

      res.render("checkmember",{
        mems:mems
      });

  });


});

app.get("/executiveupdate",function(req,res){

      res.render("executiveupdate");


});

app.post("/executiveupdate",function(req,res){

      const year1=new Year({
        year:req.body.year,
      });

      year1.save(function(err){
        if(!err){
          res.redirect("makecomitte");
        }else{
          console.log(err);
        }
      });

});

app.get("/makecomitte",function(req,res){

  Committee.find({},function(err,coms){
    res.render("makecomitte",{
        coms:coms
      });
    });


});

app.post("/makecomitte",function(req,res){

      const committee1=new Committee({
        year:req.body.year,
        position:req.body.position,
        name:req.body.name,
        insti:req.body.insti
      });

      committee1.save(function(err){
        if(!err){
          //res.redirect("comitte");
          res.send("succesful");
        }else{
          console.log(err);
        }
      });

});





app.get("/Addgeneral",function(req,res){

  Member.find({},function(err,mems){

  res.render("Addgeneral",{
      mems:mems
    });
  });
});
app.post("/Addgeneral",upload,function(req,res){

    const member1=new Member({
    name:req.body.name,

    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail,
    image:req.file.filename,

  });

      member1.save(function(err){
        if(!err){
            //console.log("succesful");
        //  res.redirect("General");
          res.send("succesful");


        }else{
          console.log(err);
        }
      });



});


app.get("/lifemember",function(req,res){


  Life.find({},function(err,lifes){

  res.render("lifemember",{
      lifes:lifes
    });
  });

});

app.post("/lifemember",upload,function(req,res){

  const member2=new Life({
  name:req.body.name,
  homepage:req.body.homepage,
  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,
  image:req.file.filename,

});

    member2.save(function(err){
      if(!err){
        res.send("succesful");
        //res.redirect("Life");


      }else{
        console.log(err);
      }
    });

});


app.get("/studentmember",function(req,res){
  Student.find({},function(err,stus){

  res.render("studentmember",{
      stus:stus
    });
  });
});

app.post("/studentmember",upload,function(req,res){

  const member3=new Student({
  name:req.body.name,

  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,
  image:req.file.filename,

});

    member3.save(function(err){
      if(!err){
          //console.log("succesful");
        //res.redirect("Student");
          res.send("succesful");

      }else{
        console.log(err);
      }
    });

});


app.get("/honorarymember",function(req,res){
  Honorary.find({},function(err,hons){

  res.render("honorarymember",{
      hons:hons
    });
  });
});



app.post("/honorarymember",upload,function(req,res){

  const member4=new Honorary({
  name:req.body.name,

  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,
  image:req.file.filename,

});

    member4.save(function(err){
      if(!err){
          //console.log("succesful");
        //res.redirect("Honorary");
        res.send("succesful");


      }else{
        console.log(err);
      }
    });

});



app.get("/advisorymember",function(req,res){
  Advisory.find({},function(err,advs){

  res.render("advisorymember",{
      advs:advs
    });
  });
});


app.post("/advisorymember",upload,function(req,res){

  const member5=new Advisory({
  name:req.body.name,

  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,
  image:req.file.filename,

});

    member5.save(function(err){
      if(!err){
          //console.log("succesful");
        //res.redirect("Advisory");
        res.send("succesful");


      }else{
        console.log(err);
      }
    });

});

app.get("/pendingmember",function(req,res){
  res.render("pendingmember");
});

app.post("/pendingmember",upload,function(req,res){

  const member6=new Pending({
  name:req.body.name,

  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,
  image:req.file.filename,

});

    member6.save(function(err){
      if(!err){
          //console.log("succesful");
        //res.redirect("Pending");
        res.send("succesful");


      }else{
        console.log(err);
      }
    });

});

app.get("/photoupload",function(req,res){
  //res.render("photoupload");
  Photo.find({},function(err,phts){

  res.render("photoupload",{
      phts:phts
    });
  });
});

app.post("/photoupload",upload,function(req,res){

  const photo=new Photo({
      img:req.file.filename,
      detail:req.body.detail,
  });
      photo.save(function(err){
        if(!err){

            //res.redirect("Gallery");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });

});
app.get("/lecturesadd",function(req,res){
  Lecture.find({},function(err,lecs){

  res.render("lecturesadd",{
      lecs:lecs
    });
  });
});


app.post("/lecturesadd",upload,function(req,res){

  const lecture1=new Lecture({
      title:req.body.title,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename,
  });
      lecture1.save(function(err){
        if(!err){

            //res.redirect("Lectures");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });







});


app.get("/seminarschedule",function(req,res){
Seminar.find({},function(err,sems){

  res.render("seminarschedule",{
      sems:sems
    });
  });
});

app.post("/seminarschedule",upload,function(req,res){

  const seminar1=new Seminar({
      title:req.body.title,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename,
  });
      seminar1.save(function(err){
        if(!err){

            //res.redirect("Seminars");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});


app.get("/trainingupdate",function(req,res){
  Trainning.find({},function(err,trens){

    res.render("trainingupdate",{
        trens:trens
      });
    });
});
app.post("/trainingupdate",upload,function(req,res){

  const train1=new Trainning({
      title:req.body.title,
      date:req.body.date,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename
  });
      train1.save(function(err){
        if(!err){
            //res.redirect("Trainings");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/Workshopdate",function(req,res){
  Work.find({},function(err,works){
    res.render("Workshopdate",{
        works:works
      });
    });
});

app.post("/Workshopdate",upload,function(req,res){

  const work1=new Work({
      title:req.body.title,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename,
  });
      work1.save(function(err){
        if(!err){
          res.send("succesful");
            //res.redirect("Workshops");
        }else{
          console.log(err);
        }
      });
});


app.get("/conferenceschedule",function(req,res){
  //res.render("conferenceschedule");
  Conference.find({},function(err,cons){
    res.render("conferenceschedule",{
        cons:cons
      });
    });
});
app.post("/conferenceschedule",upload,function(req,res){

  const con1=new Conference({
      title:req.body.title,
      link:req.body.link,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename
  });
      con1.save(function(err){
        if(!err){
            //res.redirect("Conferences");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/genomicupdate",function(req,res){
  Geonomic.find({},function(err,gens){
    res.render("genomicupdate",{
        gens:gens
      });
    });
});
app.post("/genomicupdate",function(req,res){

  const gen1=new Geonomic({
      groupmembers:req.body.groupmembers
  });
      gen1.save(function(err){
        if(!err){
            //res.redirect("Genomics");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/Transcriptomicupdate",function(req,res){
  Transcriptomic.find({},function(err,tras){
    res.render("Transcriptomicupdate",{
        tras:tras
      });
    });
});
app.post("/Transcriptomicupdate",function(req,res){

  const tran1=new Transcriptomic({
      groupmembers:req.body.groupmembers
  });
      tran1.save(function(err){
        if(!err){
            //res.redirect("Transcriptomics");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});


app.get("/proteomicupdate",function(req,res){
  Proteomic.find({},function(err,prs){
    res.render("proteomicupdate",{
        prs:prs
      });
    });
});
app.post("/proteomicupdate",function(req,res){

  const p1=new Proteomic({
      groupmembers:req.body.groupmembers
  });
      p1.save(function(err){
        if(!err){
            //res.redirect("Proteomics");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/metabolomicupdate",function(req,res){
  Metabolomic.find({},function(err,metas){
    res.render("metabolomicupdate",{
        metas:metas
      });
    });
});
app.post("/metabolomicupdate",function(req,res){

  const m1=new Metabolomic({
      groupmembers:req.body.groupmembers
  });
      m1.save(function(err){
        if(!err){
            //res.redirect("Metabolomics");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/metagenomicupdate",function(req,res){
  Metagenomic.find({},function(err,metags){
    res.render("metagenomicupdate",{
        metags:metags
      });
    });
});
app.post("/metagenomicupdate",function(req,res){

  const mt1=new Metagenomic({
      groupmembers:req.body.groupmembers
  });
      mt1.save(function(err){
        if(!err){
            //res.redirect("Metagenomics");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/pharmacogenomicupdate",function(req,res){
  Pharmacogenomic.find({},function(err,phrs){
    res.render("pharmacogenomicupdate",{
        phrs:phrs
      });
    });
});
app.post("/pharmacogenomicupdate",function(req,res){

  const pt1=new Pharmacogenomic({
      groupmembers:req.body.groupmembers
  });
      pt1.save(function(err){
        if(!err){
            //res.redirect("Pharmacogenomics");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/otherupdate",function(req,res){
  Othergroup.find({},function(err,oths){
    res.render("otherupdate",{
        oths:oths
      });
    });
});
app.post("/otherupdate",function(req,res){

  const ot1=new Othergroup({
      groupmembers:req.body.groupmembers
  });
      ot1.save(function(err){
        if(!err){
            //res.redirect("Others");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});
app.get("/journalupload",function(req,res){
  Journal.find({},function(err,jours){
    res.render("journalupload",{
        jours:jours
      });
    });
});
app.post("/journalupload",function(req,res){

  const jt1=new Journal({
      journals:req.body.journals
  });
      jt1.save(function(err){
        if(!err){
            //res.redirect("Journals");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/bookupload",function(req,res){
  Book.find({},function(err,books){
    res.render("bookupload",{
        books:books
      });
    });
});
app.post("/bookupload",function(req,res){

  const bt1=new Book({
      books:req.body.books
  });
      bt1.save(function(err){
        if(!err){
            //res.redirect("Books");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});

app.get("/sponserupdate",function(req,res){
  Sponser.find({},function(err,spons){
    res.render("sponserupdate",{
        spons:spons
      });
    });
});

app.post("/sponserupdate",function(req,res){
  const s12= new Sponser({
    shortDiscription:req.body.shortDiscription,
    money:req.body.money,
  });

  s12.save(function(err){
    if(!err){
      //res.redirect("sponsers");
      res.send("succesful");
    }else{
      console.log(err);
    }
  });

});


app.get("/noticeupdate",function(req,res){
  Notice.find({},function(err,nots){
    res.render("noticeupdate",{
        nots:nots
      });
    });
});
app.post("/noticeupdate",function(req,res){

  const n1=new Notice({
      date:req.body.date,
      shortDiscription:req.body.shortDiscription,

  });
      n1.save(function(err){
        if(!err){

            //res.redirect("notice");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
    });

app.get("/updatenews",function(req,res){
  Update.find({},function(err,news){
    res.render("updatenews",{
        news:news
      });
    });
});

app.post("/updatenews",function(req,res){

  const update=new Update({

      updates:req.body.updates,

  });
      update.save(function(err){
        if(!err){
            res.send("Updated");
          //  res.redirect("update");
        }else{
          console.log(err);
        }
      });




});
app.get("/societyupdate",function(req,res){
  Society.find({},function(err,sos){
    res.render("societyupdate",{
        sos:sos
      });
    });
});
app.post("/societyupdate",function(req,res){

  const st1=new Society({
      socities:req.body.socities
  });
      st1.save(function(err){
        if(!err){
            //res.redirect("society");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });
});
app.get("/softupdate",function(req,res){
  Soft.find({},function(err,softs){
    res.render("softupdate",{
        softs:softs
      });
    });
});


app.post("/softupdate",upload,function(req,res){

  const s1=new Soft({
      title:req.body.title,
      file:req.file.filename,
  });
      s1.save(function(err){
        if(!err){

            //res.redirect("soft");
            res.send("succesful");
        }else{
          console.log(err);
        }
      });

});
app.get("/dataupdate",function(req,res){
  Data.find({},function(err,dats){
    res.render("dataupdate",{
        dats:dats
      });
    });
});


app.post("/dataupdate",function(req,res){

  const d1=new Data({
      title:req.body.title,

  });
      d1.save(function(err){
        if(!err){
          res.send("succesful");
            //res.redirect("database");
        }else{
          console.log(err);
        }
      });

});
//////update files//////////////////


app.get("/genedit/:id",function(req,res){
  //res.render("lifeedit");
  Member.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("genedit",{mem:docs});
  });
});

app.post("/genedit/:id",upload,function(req,res){
  if(req.file){
  var data={
    name:req.body.name,
    //id:req.body.id,
    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail,
    image:req.file.filename,
  }
}else{
  var data={name:req.body.name,
  //id:req.body.id,
  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,}
}
  //res.render("lifeedit");
  Member.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/lifeedit/:id",function(req,res){

  //res.render("lifeedit");
  Life.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("lifeedit",{life:docs});
  });
});
app.post("/lifeedit/:id",upload,function(req,res){
  //res.render("lifeedit");
  if(req.file){
  var data={
    name:req.body.name,
    homepage:req.body.homepage,
    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail,
    image:req.file.filename,
  }
}else{
  var data={name:req.body.name,
  homepage:req.body.homepage,
  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,}
}
  Life.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/stuedit/:id",function(req,res){
  //res.render("lifeedit");
  Student.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("stuedit",{stu:docs});
  });
});
app.post("/stuedit/:id",upload,function(req,res){
  if(req.file){
  var data={
    name:req.body.name,
    //id:req.body.id,
    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail,
    image:req.file.filename,
  }
}else{
  var data={name:req.body.name,
  //id:req.body.id,
  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,}
}
  //res.render("lifeedit");
  Student.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});


app.get("/honedit/:id",function(req,res){
  //res.render("lifeedit");
  Honorary.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("honedit",{hon:docs});
  });
});
app.post("/honedit/:id",upload,function(req,res){
  //res.render("lifeedit");
  if(req.file){
  var data={
    name:req.body.name,
    //id:req.body.id,
    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail,
    image:req.file.filename,
  }
}else{
  var data={name:req.body.name,
  //id:req.body.id,
  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,}
}
  Honorary.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/adedit/:id",function(req,res){
  //res.render("lifeedit");
  Advisory.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("adedit",{adv:docs});
  });
});
app.post("/adedit/:id",upload,function(req,res){
  //res.render("lifeedit");
  if(req.file){
  var data={
    name:req.body.name,
    //id:req.body.id,
    position:req.body.position,
    masters:req.body.masters,
    phd:req.body.phd,
    areaOfSpecialization:req.body.areaOfSpecialization,
    current:req.body.current,
    contact:req.body.contact,
    mail:req.body.mail,
    image:req.file.filename,
  }
}else{
  var data={name:req.body.name,
  //id:req.body.id,
  position:req.body.position,
  masters:req.body.masters,
  phd:req.body.phd,
  areaOfSpecialization:req.body.areaOfSpecialization,
  current:req.body.current,
  contact:req.body.contact,
  mail:req.body.mail,}
}
Advisory.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});


app.get("/lecedit/:id",function(req,res){
  //res.render("lifeedit");
  Lecture.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("lecedit",{lec:docs});
  });
});
app.post("/lecedit/:id",upload,function(req,res){

  if(req.file){
    var data={
      title:req.body.title,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename,
    }
  }else{
    var data={title:req.body.title,
    shortDiscription:req.body.shortDiscription,
  }
  }
  //res.render("lifeedit");
Lecture.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/semedit/:id",function(req,res){
  //res.render("lifeedit");
  Seminar.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("semedit",{sem:docs});
  });
});
app.post("/semedit/:id",upload,function(req,res){
  //res.render("lifeedit");
if(req.file){
  var data={
    title:req.body.title,
    day:req.body.day,
    shortDiscription:req.body.shortDiscription,
    file:req.file.filename,
  }
}else{
  var data={
    title:req.body.title,
    day:req.body.day,
    shortDiscription:req.body.shortDiscription,

  }
}
Seminar.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/trenedit/:id",function(req,res){
  //res.render("lifeedit");
  Trainning.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("trenedit",{tren:docs});
  });
});
app.post("/trenedit/:id",upload,function(req,res){
  //res.render("lifeedit");
  if(req.file){

    var data={
      title:req.body.title,
      date:req.body.date,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename
    }
  }else{
    var data={
      title:req.body.title,
      date:req.body.date,
      shortDiscription:req.body.shortDiscription,

    }
  }
Trainning.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/conedit/:id",function(req,res){
  //res.render("lifeedit");
  Conference.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("conedit",{con:docs});
  });
});
app.post("/conedit/:id",upload,function(req,res){
  //res.render("lifeedit");
  if(req.file){
    var data={
      title:req.body.title,
      link:req.body.link,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename
    }
  }else{
    var data={
      title:req.body.title,
      link:req.body.link,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,

    }
  }
Conference.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});
app.get("/workedit/:id",function(req,res){
  //res.render("lifeedit");
  Work.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("workedit",{work:docs});
  });
});
app.post("/workedit/:id",upload,function(req,res){
  //res.render("lifeedit");
  if(req.file){
    var data={
      title:req.body.title,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,
      file:req.file.filename,
    }
  }else{
    var data={
      title:req.body.title,
      day:req.body.day,
      shortDiscription:req.body.shortDiscription,

    }
  }
Work.findOneAndUpdate({_id:req.params.id},data,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/geoedit/:id",function(req,res){
  //res.render("lifeedit");
  Geonomic.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("geoedit",{gen:docs});
  });
});
app.post("/geoedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Geonomic.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});
app.get("/traedit/:id",function(req,res){
  //res.render("lifeedit");
  Transcriptomic.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("traedit",{tra:docs});
  });
});
app.post("/traedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Transcriptomic.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});
app.get("/predit/:id",function(req,res){
  //res.render("lifeedit");
  Proteomic.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("predit",{pr:docs});
  });
});
app.post("/predit/:id",upload,function(req,res){
  //res.render("lifeedit");
Proteomic.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/metaedit/:id",function(req,res){
  //res.render("lifeedit");
  Metabolomic.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("metaedit",{meta:docs});
  });
});
app.post("/metaedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Metabolomic.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});
app.get("/metagedit/:id",function(req,res){
  //res.render("lifeedit");
  Metagenomic.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("metagedit",{metag:docs});
  });
});
app.post("/metagedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Metagenomic.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/phredit/:id",function(req,res){
  //res.render("lifeedit");
  Pharmacogenomic.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("phredit",{phr:docs});
  });
});
app.post("/phredit/:id",upload,function(req,res){
  //res.render("lifeedit");
Pharmacogenomic.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});
app.get("/othedit/:id",function(req,res){
  //res.render("lifeedit");
  Othergroup.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("othedit",{oth:docs});
  });
});
app.post("/othedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Othergroup.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});
app.get("/notedit/:id",function(req,res){
  //res.render("lifeedit");
  Notice.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("notedit",{not:docs});
  });
});
app.post("/notedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Notice.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/sponedit/:id",function(req,res){
  //res.render("lifeedit");
  Sponser.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("sponedit",{spon:docs});
  });
});
app.post("/sponedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Sponser.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});

app.get("/comedit/:id",function(req,res){
  //res.render("lifeedit");
  Committee.findOneAndUpdate({_id:req.params.id},req.body,{new:true},function(err,docs){
      //console.log(docs);
      //console.log(docs.name);
      res.render("comedit",{com:docs});
  });
});
app.post("/comedit/:id",upload,function(req,res){
  //res.render("lifeedit");
Committee.findOneAndUpdate({_id:req.params.id},req.body,function(err){
    if (err) {
         //res.send(err);

     } else {
         res.send("succesful");
     }
  });
});







/////delete file/////
app.get("/:id",function(req,res){

    Member.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/lifedelete/:id",function(req,res){

    Life.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/studelete/:id",function(req,res){

    Student.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/delete/:id",function(req,res){

    Honorary.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/addelete/:id",function(req,res){

    Advisory.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/galdelete/:id",function(req,res){

    Photo.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/lecdelete/:id",function(req,res){

    Lecture.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/semdelete/:id",function(req,res){

    Seminar.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/trendelete/:id",function(req,res){

    Trainning.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/condelete/:id",function(req,res){

    Conference.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/workdelete/:id",function(req,res){

    Work.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/geodelete/:id",function(req,res){

    Geonomic.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/tradelete/:id",function(req,res){

    Transcriptomic.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/prdelete/:id",function(req,res){

    Proteomic.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/metadelete/:id",function(req,res){

    Metabolomic.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/metagdelete/:id",function(req,res){

    Metagenomic.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/phrdelete/:id",function(req,res){

    Pharmacogenomic.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/othdelete/:id",function(req,res){

    Othergroup.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/jourdelete/:id",function(req,res){

    Journal.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/bookdelete/:id",function(req,res){

    Book.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/notdelete/:id",function(req,res){

    Notice.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/spondelete/:id",function(req,res){

    Sponser.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/comdelete/:id",function(req,res){

    Committee.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/updelete/:id",function(req,res){

    Update.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/cmdelete/:id",function(req,res){

      Membership.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});

app.get("/datdelete/:id",function(req,res){

      Data.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/sfdelete/:id",function(req,res){

      Soft.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});
app.get("/sodelete/:id",function(req,res){

      Society.findByIdAndDelete({_id:req.params.id},function(err){
      if(err){
            //console.log(err);
        }else{
            res.send("Deleted succesfully");
        }
    });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
