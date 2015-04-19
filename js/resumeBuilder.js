var formattedName = HTMLheaderName.replace('%data%', 'Said Khalid Scharaf');
var formattedRole = HTMLheaderRole.replace('%data%', 'front-end ninja');

$('#header').prepend(formattedName, formattedRole);



var bio = {	// adding properties when declaring the object
	"name" : "Said Khalid Scharaf",
	"role" : "front-end ninja",
	"welcome" : "Hello world!",
	"contactInfo" : [
		{
			"mobile": "+41 787 325 381",
			"E-mail" : "sks@posteo.de",
			"github" : "khalito",
			"location" : "Geneva"
		}
	],
	"skills" : [
			"Writing",
			"Talking",
			"Thinking",
			"Doing",
			"Being silly"
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "International Trade Centre",
			"title" : "Associate Programme Adviser",
			"location" : "Geneva",
			"dates" : "Sep 2010 - now",
			"description" : "This is my current job..."
		},
		{
			"employer" : "Hertie School of Governance",
			"title" : "Student research assistant",
			"location" : "Berlin",
			"dates" : "Aug 2007 - Sep 2010",
			"description" : "Research and economic analysis on sovereign debt defaults"
		}
	]
};


var projects = {
	"projects" : [
		{
			"title" : "Kuwait Food and Beverage Exports",
			"dates" : "Mar 2012 - Dec 2012",
			"description" : "Technical assistance project to increase the competitiveness of food and beverage exports from Kuwait.",
			"images" : [
				"url1",
				"url2"
			]
		},
		{
			"title" : "ITC project management and information system",
			"dates" : "Mar 2014",
			"description" : "Jun 2016",
			"images" : [
				"url1",
				"url2"
			]
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "Freie Universität Berlin",
			"city" : "Berlin",
			"degree" : "Magister Artium",
			"major" : [
				"Economics",
				"Middle East Studies"
			],
			"graduation year" : 2010,
			"url" : "www.fu-berlin.de"
		},
		{
			"name" : "Université Paris 1 Sorbonne-Panthéon",
			"city" : "Paris",
			"degree" : "Exchange semester",
			"major" : "International trade",
			"graduation year" : 2006,
			"url" : "www.univ-paris1.fr"
		}
	]
}