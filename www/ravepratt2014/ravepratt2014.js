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
		if (story == -1) {
			return false
		}
		return true;	
	};
	
	
	Template.storyPreviousButton.buttonPreviousEnabled = function (){
		var story = Session.get("story")
		if (story == 0) {
			return "disabled";
		}
		return "enabled";
	};
	
	Template.storyNextButton.buttonNextEnabled = function (){
		var story = Session.get("story");
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var storyLength = journey.quests[quest].story.length;
		if (story == (storyLength - 1)) {
			return "disabled";
		}
		return "enabled";
	};
		
	Template.story.background = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var page = Session.get("story");
		var story = journey.quests[quest].story[page];
		return story.background;
	};
	
	Template.story.text = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var page = Session.get("story");
		var story = journey.quests[quest].story[page];
		return story.text;
	};
	
	Template.story.element = function () {
		return this;
	};
	
	Template.question.questionText = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var question = journey.quests[quest].question;
		return question;
	};

	Template.question.answers = function () {
		var journeyId = Session.get("journey");
		var journey = Journies.findOne({_id: journeyId});
		var quest = Session.get("quest");
		var answers = journey.quests[quest].answers;
    	return answers;
	};

	Template.answer.answer = function () {
		return this;
	};

	Template.starsTotal.stars = function () {
		return Session.get("stars");
	};
	
	Template.popUp.popUpEnabled = function (){
		var dialog = Session.get("dialog");
		if (dialog){
			return "enabled";
		}
		return "disabled";

	}
	
	Template.popUp.popUpText = function () {
		return Session.get("popUpText");
	}
	
	Template.popUp.popUpButtonText = function () {
		return Session.get("popUpButtonText");
	}
	
	Template.stars.stars = function () {
		return [0,1,2]; //TODO hack
	}
	
	Template.answer.events( {
		'click': function () {
			console.log("Clicked answer " + this);
			var journeyId = Session.get("journey");
			var journey = Journies.findOne({_id: journeyId});
			var quest = Session.get("quest");
			var reward = Session.get("reward");
			var stars = Session.get("stars");
			var correctMessage = journey.quests[quest].correctMessage;
			var correctAnswer = journey.quests[quest].correctAnswer;
			Session.set("popUp", true);
			if (this == correctAnswer) {
				console.log("Clicked correct answer");
				Session.set("quest", quest + 1);
				Session.set("story", 0);
				Session.set("stars", stars+reward);
				Session.set("reward", 5);
				Session.set("popUpText", correctMessage);
				Session.set("popUpButtonText", "Continue");
			}
			else {
				Session.set("reward", reward-1);				
				if (reward > 1) {
					Session.set("popUpText", "Try again!");
					Session.set("popUpButtonText", "Try Again");
				}
				else {
					Session.set("popUpText", "Totally wrong");
					Session.set("popUpButtonText", "Continue");
				}
			}
	
			
			// if this=the answer is correct then + 1 to quest, set story to zero and add reward to the stars
			// if the answer is incorrect then - 1 from reward 
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
	
	Template.storyPreviousButton.events( {
		'click': function () {
			var journeyId = Session.get("journey");
			var journey = Journies.findOne({_id: journeyId});
			var quest = Session.get("quest");
			var storyLength = journey.quests[quest].story.length;
			var page = Session.get("story");
			page = page - 1;
			if (page < storyLength) {
				Session.set("story", page);
			}
			else {
				Session.set("story", -1);
			}

		}
	});
	
	Template.hint.events( {
		'click': function () {
			var journeyId = Session.get("journey");
			var journey = Journies.findOne({_id: journeyId});
			var quest = Session.get("quest");
			var hint = journey.quests[quest].hint;
			console.log ("Hint: " + hint);
			return quest.hint;	

		}
	});
	
	/*
	 * Character selection
	 */	
	Template.characters.characters = function () {
    	return Journies.find();
	};
	
    Template.character.events( {
      	'click': function () {
			if (this.quests)
			{
				// Only start journey for character with quests
		        Session.set("journey", this._id);
				Session.set("quest", 0);
		        Session.set("story", 0);
				Session.set("stars", 0);
				Session.set("reward", 5);
				Session.set("popUp", false);			
			}
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
				hint: "It is on your birth certificate...",
				correctMessage: ["Right!", "Information about the plate"],
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
				hint: "It begins with P",
				correctMessage: ["Right!", "Information about the bowl"],
				story: [{
					background: "bg0.png",
					text: ["Hello", "My name is Bob"]
				}, {
					background: "bg1.png",
					text: ["I enjoy sports!"]
				}, {
					background: "bg2.png",
					text: ["Do you want", "to join the", "soccer team?"]
				}]					
			}]
     	}, {
			name: "Strange Cartographer",
     	   	image: "cartographer.png"
     	}, {
			name: "Luxury Cruise Child",
     	   	image: "leisure.png"
		}, {
			name: "Percy the Cat",
			image: "percy.png"
		}, {
			name: "Ghost of Sunbeam",
			image: "ghost.png"
		}, {
			name: "Chip the Ship Chef",
	 	   	image: "chef.png"
		}, {
			name: "Tom Binnacle",
	 	   	image: "tom.png"
     	}, {
			name: "Textile Designer",
     	   	image: "textile.png"
     	}];
    	for (var i = 0; i < data.length; i++) {
    		Journies.insert(data[i]);
			console.log("Added character: " + data[i].name);
		}
	});
}
