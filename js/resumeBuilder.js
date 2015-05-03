var bio =
	{
	"name" : "Said Khalid Scharaf",
	"role" : "front-end ninja",
	"welcomeMessage" : "Hello world!",
	"contactInfo" :
		{
		"mobile": "+41 787 325 381",
		"E-mail" : "sks@posteo.de",
		"github" : "khalito",
		"location" : "Geneva, Switzerland"
		},
	"skills" :
		[
		"Writing",
		"Talking",
		"Thinking",
		"Doing",
		"Being silly"
		],
	"hometown" : "Hannover, Germany",
	"summary" : "Hi there and thanks for your interest in me. I am an experienced project manager, economist and business analyst. I have worked mostly in academic research and international development but recently I picked up web development as a new area of interest. My most recent accomplishments include designing and implementing a new project management software for a medium-sized international organisation.",
	"display" : function()
		{
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

		$('#header').prepend(formattedName, formattedRole);

		var formattedInfo = HTMLmobile.replace("%data%", bio.contactInfo["mobile"]);
		$("#topContacts").append(formattedInfo);
		$("#footerContacts").append(formattedInfo);

		formattedInfo = HTMLemail.replace("%data%", bio.contactInfo["E-mail"]);
		$("#topContacts").append(formattedInfo);
		$("#footerContacts").append(formattedInfo);

		formattedInfo = HTMLgithub.replace("%data%", bio.contactInfo["github"]);
		$("#topContacts").append(formattedInfo);
		$("#footerContacts").append(formattedInfo);

		formattedInfo = HTMLlocation.replace("%data%", bio.contactInfo["location"]);
		$("#topContacts").append(formattedInfo);
		$("#footerContacts").append(formattedInfo);

		//ADD PICTURE AND SUMMARY
		var bioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
		$("#header").append(bioPic);
		$("#header").append(HTMLsummaryStart);
		$("#summary").append(bio.summary);
		}
	};
bio.display();

var work =
	{
	"jobs" :
		[
			{
			"employer" : "International Trade Centre",
			"title" : "Associate Programme Adviser",
			"location" : "Geneva, Switzerland",
			"dates" : "Sep 2010 - now",
			"description" :
				[
					{
					"responsibility" : "Managing the development of a custom-built project and programme management software",
					"tasks" :
						[
						"Business analysis and process optimization",
						"Requirements elicitation from users and requirements management throughout the project",
						"Activity planning for building, testing and roll out of the new software",
						"Communication with stakeholders",
						"Preparation of test plans and conducting user acceptance tests"
						]
					},
					{
					"responsibility" : "Organisation-wide focal point for collecting, analyzing and reporting data on outputs and outcomes for technical assistance projects",
					"tasks" :
						[
						"Drafted corporate performance assessment reports for senior management",
						"Redesigned ITC's results-based management (RBM) framework",
						"Trained and coached of staff on performance management",
						"Managed and improved ITC's project management software applications",
						"Managed the development of a new portal for online access to ITC's performance data",
						"Designed and maintained web pages for project management guidelines"
						]
					}
				]
			},
			{
			"employer" : "Hertie School of Governance",
			"title" : "Student research assistant",
			"location" : "Berlin, Germany",
			"dates" : "Aug 2007 - Sep 2010",
			"description" :
				[
					{
					"responsibility" : "Research and economic analysis on sovereign debt defaults",
					"tasks" :
						[
						"Research project on sovereign debt defaults and reschedulings from 1980-2010",
						"Created an entirely new database on sovereign default through autonomous review of academic literature, news articles and other research",
						"Designed and managed of the database in MS Excel",
						"Calculated net creditor losses for over 300 default events (mostly MS Excel)"
						]
					}
				]
			},
		],
	"display" : function()
		{
		// check whether work exists
		if(work.jobs)
			{
			// loop through all jobs mention in work
			for(var job in work.jobs)
				{
				//this adds a new div with the class "work-entry". This will be useful later as a reference when we append the job info after the last work-entry item
				$("#workExperience").append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);

				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
				$(".work-entry:last").append(formattedLocation);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);

				for (var role in work.jobs[job].description)
					{
					var formattedResponsibility = HTMLworkDescription.replace("%data%", work.jobs[job].description[role].responsibility);
					$(".work-entry:last").append(formattedResponsibility);

					$(".work-entry:last").append(HTMLworkTaskStart);
					for (var task in work.jobs[job].description[role].tasks)
						{
						var formattedTask = HTMLworkTask.replace("%data%", work.jobs[job].description[role].tasks[task]);
						$(".task-entry:last").append(formattedTask);
						}
					}

				}//close for loop

			}// close if statement

		}//close function
	};
work.display();

var projects =
	{
	"projects" :
		[
			{
				"title" : "Kuwait Food and Beverage Exports",
				"dates" : "Mar 2012 - Dec 2012",
				"description" : "The project aims at increasing Kuwait's non-oil exports by helping food and beverage exporters to increase and diversify their exports. I contributed to the design of the project and was responsible for managing and coordinating the project's execution. The project has a duration of two years and a total project value of USD 1 million.",
				"images" :
				[
					"http://placekitten.com/g/300/200",
					"http://placekitten.com/g/300/200"
				]
			},
			{
				"title" : "Redevelopment of ITC's project management and information system",
				"dates" : "Mar 2014",
				"description" : "The project's objective was to re-design ITC's project management software and related business processes",
				"images" :
				[
					"http://placekitten.com/g/300/200",
					"http://placekitten.com/g/300/200"
				]
			}
		],
	"display" : function()
		{
			for (var project in projects.projects)
			{
				$("#projects").append(HTMLprojectStart);

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				// PROJECT IMAGES - IN CASE YOU WANT TO SHOW THEM
				// for (var image in projects.projects[project].images) {
				//   var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				//   $(".project-entry:last").append(formattedImage);
				//   }
			}
		}
	};
projects.display();


var education =
{
	"schools" :
		[
			{
				"name" : "Freie Universität Berlin",
				"location" : "Berlin, Germany",
				"degree" : "Magister Artium",
				"majors" :
					[
						"Economics",
						" Middle East studies"
					],
				"graduationYear" : 2010,
				"url" : "http://www.fu-berlin.de",
				"subjects" :
					[
						"International trade",
						"Political economy",
						"Economies of the Middle East",
						"History of the Ottoman empire and Turkey",
						"Islamic revolution in Iran",
						"Economic and political elites in Saudi Arabia",
						"Oritentalism"
					]
			},
			{
				"name" : "Université Paris 1 Sorbonne-Panthéon",
				"location" : "Paris, France",
				"degree" : "Exchange semester",
				"majors" :
					[
						"International trade"
					],
				"graduationYear" : 2007,
				"url" : "http://www.univ-paris1.fr",
				"subjects" :
					[
						"Regional integration",
						"Economics of Europen integration",
						"International trade and multinational companies"
					]
			}
		],
	"onlineCourses" :
		[
			{
				"title" : "Intro to Computer Science",
				"school" : "Udacity",
				"url" : "https://www.udacity.com/course/intro-to-computer-science--cs101",
				"date" : 2014,
				"description" : "This course taught me the foundational concepts in computer science using Python 2.7. The course's objective was to rebuild google original search engine, touching on key search engine components including a crawler, an index and a page rank algorithm. This was my first encounter with MOOCs and computer science and Professor Dave Evans (University of Virgina) taught me the basic techniques that I am still using today, most importantly how to think like a computer scientist."
			},
			{
				"title" : "Front-End Web Developer Nanodegree",
				"school" : "Udacity",
				"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
				"date" : 2015,
				"description" : "In the Nanodegree program, you will build six portfolio-worthy projects. Depending on your knowledge and skill level, you can either learn the necessary skills through our supporting courses, or jump into the projects directly. A summary of each of these projects, as well as links to their supporting courses are included in the sections below. Subjects included: Responsive web design, JavaScrip and jQuery, Object-Oriented JavaScript, website performance optimization, AJAX."
			}
		],
	"display" : function()
		{
		for (var school in education.schools)
			{

			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			formattedSchoolName = formattedSchoolName + formattedDegree;
			$(".education-entry:last").append(formattedSchoolName);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);

			var formattedYear = HTMLschoolDates.replace("%data%", education.schools[school].graduationYear);
			$(".education-entry:last").append(formattedYear);

			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);

			$(".education-entry:last").append(HTMLsubjectsStart);

			for (var subject in education.schools[school].subjects)
				{
				var formattedSubjects = HTMLsubjects.replace("%data%", education.schools[school].subjects[subject]);
				$(".subject-entry:last").append(formattedSubjects);
				}
			}
		$("#education").append(HTMLonlineCourses);

		for (var course in education.onlineCourses)
			{
			$("#education").append(HTMLonlineStart);

			var formattedCourseName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedCourseName = formattedCourseName.replace("%url%", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			formattedCourseName = formattedCourseName + formattedSchool;
			$(".online-entry:last").append(formattedCourseName);

			var formattedCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".online-entry:last").append(formattedCourseDate);

			var formattedCourseDesc = HTMLonlineDesc.replace("%data%", education.onlineCourses[course].description);
			$(".online-entry:last").append(formattedCourseDesc);
			}
		}
};
education.display();

$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);