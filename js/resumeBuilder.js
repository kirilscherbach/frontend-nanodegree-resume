
var bio = {};
	bio.name = "Kiril Scherbach";
    bio.role = "Consultant";
    bio.contacts= {};
          bio.contacts.mobile="+375 44 7-917-217";
 	      bio.contacts.email= "kirilscherbach@gmail.com" ;
          bio.contacts.github="https://github.com/kirilscherbach";
          bio.contacts.location="Minsk, Belarus";
    bio.welcomeMessage = "Welcome!";
    bio.skills = ["skill 1", "skill 2"];
    bio.biopic = "images/fry.jpg";
    
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
            "employer": "Itransition",
            "title": "Consultant",
            "location": "Minks, Belarus",
            "dates": "2013-2015",
            "description": "SAP BI Consultant"
        },
        {
            "employer": "Ernst&Young",
            "title": "Assurance Assistant",
            "location": "Minks, Belarus",
            "dates": "2011-2012",
            "description": "Supporting role in assurance and support hub"
        }
    ]
}

var projects ={
    "projects": [
        {
            "title": "TimeOut BI",
            "dates": "2014-2015",
            "description": "DIY BI solution for tiny business",
            "images": "images/fry.jpg"
        }
    ]
}
    

var Name=HTMLheaderName.replace("%data%", bio.name);
var Role=HTMLheaderRole.replace("%data%", bio.role);
var Skills=HTMLskills.replace("%data%", bio.skills);
$("#header").append(Name);
$("#header").append(Role);
$("#header").append(Skills);



