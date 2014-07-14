// The common layout for all our routes
/*
Router.configure({});

Router.map(function () {
	this.route('overview', {
	    path: '/',
	    data: function () {
	      // Do something...
	    }
  	});
	this.route('', {
	    path: '/',
	    data: function () {
	      // Get the current user
	      var userId = this.params.userId
		  console.log("User " + userId + " is online");
	      return userId;
	    }
  	});
});
*/

Journies = new Meteor.Collection("journies");
// Users = new Meteor.Collection("users");

if (Meteor.isClient) {

	Template.journies.hasSelectedJourney = function ()	{
		return Session.get("journey");
	};

	Template.journey.inStory = function () {
		var story = Session.get("story");
		if (story == -1){
			return false
		}
		return true;	
	};
	
	Template.story.background = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var page = Session.get("story");
		console.log(page);
		var story = journey.quests[quest].story[page];
		console.log("Loading story: " + story);
		return story.background;
	};
	
	Template.story.text = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var page = Session.get("story");
		console.log(page);
		var story = journey.quests[quest].story[page];
		console.log("Loading story: " + story);
		return story.text;
	};

	Template.quest.question = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var question = journey.quests[quest].question;
		console.log("Loading question: " + question);
		return question;
	};

	Template.quest.answers = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var answers = journey.quests[quest].answers;
		console.log("Answers: " + answers);
    	return answers;
	};

	Template.answer.answer = function () {
		return this;
	}
	
	Template.answer.events( {
		'click': function () {
			console.log("Clicked answer " + this);
		}
	});
	
	Template.storyNextButton.events( {
		'click': function () {
			var journeyId = Session.get("journey");
			var journey = Journies.findOne({_id: journeyId});
			var quest = Session.get("quest");
			var storyLength = journey.quests[quest].story.length;
			var page = Session.get("story");
			page = page + 1;
			if (page < storyLength) {
				Session.set("story", page);
			}
			else {
				Session.set("story", -1);
			}

		}
	});
	
	/*
	 * Character selection
	 */	
	Template.characters.characters = function () {
		// Ignore the quests field for the character list
    	return Journies.find({}, {fields: {quests: 0}});
	};
    Template.character.events( {
      	'click': function () {
	        Session.set("journey", this._id);
			Session.set("quest", 0);
	        Session.set("story", 0);
			console.log("Selected character " + this.name);
      	}
    });

}

if (Meteor.isServer) {
  	Meteor.startup(function () {
		Journies.remove( { } );
    	var data = [{
			name: "Henry Davenport",
     	   	image: "henry.png",
			description: "A 12 year old orphan fascinated by technology.",
     		quests: [{
     			question: "What is your name?",
				image: "coin.png",
				answers: ["Sam", "John", "Henry", "Bill"],
				correctAnswer: "Henry",
				story: [{
					background: "bg0.png",
					text: ["Hello", "My name is Bill"]
				}, {
					background: "bg1.png",
					text: ["Nice to meet you!"]
				}, {
					background: "bg2.png",
					text: ["Do you want", "to join the", "Navy?"]
				}]
			}, {
     			question: "What is your favourite colour?",
				image: "coin.png",
				answers: ["Blue", "Red", "Yellow", "Purple"],
				correctAnswer: "Purple",
				story: [{
					background: "bg0.png",
					text: ["Hello", "My name is Bill"]
				}, {
					background: "bg1.png",
					text: ["Nice to meet you"]
				}, {
					background: "bg2.png",
					text: ["Do you want", "to join the", "Navy?"]
				}]					
			}]
     	}];
    	for (var i = 0; i < data.length; i++) {
    		Journies.insert(data[i]);
			console.log("Added character: " + data[i].name)
  		}
  	});
}
