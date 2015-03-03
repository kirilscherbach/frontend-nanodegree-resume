
var bio = {
	"name" : "Kiril Scherbach",
    "role" : "Consultant",
    "contacts" : {
          "mobile" :"+375 44 7-917-217",
 	      "email" : "kirilscherbach@gmail.com" ,
          "github" :"https://github.com/kirilscherbach",
          "blog" : "http://kirilscherbach.com",
          "location" :"Minsk, Belarus"},
    "welcomeMessage" : "Welcome!",
    "skills" : ["fear", "surprise", "ruthless efficiency", "an almost fanatical devotion to the Pope", "appreciation to nice red uniforms"],
    "biopic" : "images/KS.jpg"}
    
var education ={
    "schools": [
        {
            "name": "BSEU",
            "location": "Minsk, Belarus",
            "degree": "Bachelor",
            "majors": [
                "International Business Management"
            ],
            "dates": 2012,
            "url": "http://bseu.by"
        },
        {
            "name": "Blaise Pascal University",
            "location": "Vichy, France",
            "degree": "University Diploma",
            "majors": [
                "International Business with French"
            ],
            "dates": 2011,
            "url": "http://bpc.fr"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "http://udacity.com"
        }
    ]
}

var work ={
    "jobs": [
        {
            "employer": "Ernst&Young",
            "title": "Assurance Assistant",
            "location": "Minks, Belarus",
            "dates": "2011-2012",
            "description": "Supporting role in assurance and support hub"
        },
        {
            "employer": "Itransition",
            "title": "Consultant",
            "location": "Minks, Belarus",
            "dates": "2013-2015",
            "description": "BI Consultant proficient at any field within 4 weeks"
        }
        
    ]
}

var projects ={
    "projects": [
        {
            "title": "TimeOut BI",
            "dates": "2014-2015",
            "description": "DIY BI solution for tiny business"
            
        }
    ]
}
    

//var Name=HTMLheaderName.replace("%data%", bio.name);
//var Role=HTMLheaderRole.replace("%data%", bio.role);
//var Skills=HTMLskillsStart;
//var SkillsList=HTMLskills.replace("%data%", bio.skills[0]);
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#topContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
if (typeof(bio.skills)!="undefined") {
$("#header").append(HTMLskillsStart);
    for (i in bio.skills) {
         $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
     }; 
};

function displaywork() {  
for (var i = work.jobs.length - 1; i >= 0; i--){
         
         $("#workExperience").append(HTMLworkStart);
         var formattedemployer=HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
         var formattedtitle=HTMLworkTitle.replace("%data%", work.jobs[i].title)
         var formattedEmployerTitle=formattedemployer + formattedtitle;
         $(".work-entry:last").append(formattedEmployerTitle);
         $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
         //$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
          $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
 
     }; 
};

displaywork();

/*$(document).click(function(loc) {
    var x=loc.pageX;
    var y=loc.pageY;
    logClicks(x, y);
});

function inName() {
    var name_string_split=bio.name.split(" ");
    var surname=name_string_split.pop();
    surname=surname.toUpperCase();
    name_string_internationalised=name_string_split[0]+" "+surname;
    return name_string_internationalised;
};

$('#main').append(internationalizeButton)
*/
projects.display= function() {
for (var i = projects.projects.length - 1; i >= 0; i--){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
};

};

projects.display()