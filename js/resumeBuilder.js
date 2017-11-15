/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $(function(){
 	var bio = {
 		"name": "José Rojas",
 		"role": "Web Developer",
 		"contacts": {
 			"email": "davideng14@hotmail.com",
 			"github": "davideng14",
 			"location": "Bogotá, Colombia"
 		},
 		"welcomeMessage": "Hi!",
 		"skills": [
 			"Javascript", "PHP", "HTML", "CSS"
 		],
 		"bioPic": "images/fry.jpg"
 	};

 	var education = {
 		"schools": [
 		{
 			"name": "Universidad Distrital Francisco José de Caldas",
 			"city": "Bogotá D.C., Colombia",
 			"degree": "BA",
 			"majors": ["CS"],
 			"dates": 2015
 		}
 		],
 		"onlineCourses": [
 			{
 				"title": "Javascript Crash Course"
 				"school": "Udacity",
 				"dates": 2014,
 				"url": "http://www.Udacity.com/cpurse/ud804"
 			}
 		]
 	}

 	var work = {
 		"jobs": [
 			{
		 		position: "Web Developer",
		 		employer: "Grability",
		 		dates: "April 2014 - April 2015",
		 		description: "description"
		 	}
 		]
 	}
 	
 	var model = {
 		init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        }

 	};

 	var octopus = {
 		init: function(){
 			model.init();
 			view.init();
 		}
 	};

 	var view = {
 		init: function(){
 			var formattedName = HTMLheaderName.replace("%data%", bio.name);
 			var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 			var formattedContactGeneric = HTMLheaderRole.replace("%data%", bio.contacts.email);
 			
 			$('#header').prepend(formattedRole);
    		$('#header').prepend(formattedName);
    		$('#header').append(formattedContactGeneric);
    		
 		}
 	};

 	octopus.init();

 });