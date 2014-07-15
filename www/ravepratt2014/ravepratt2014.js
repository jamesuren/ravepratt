// Journies model
Journies = new Meteor.Collection("journies");

/*
 * CLIENT SIDE
 */
if (Meteor.isClient) {
	
	/*
	 * Character selection
	 */	
	Template.characters.characters = function () {
    	return Journies.find();
	};
    Template.character.events( {
      	'click': function () {
			// Only start journey for character with quests
			if (this.quests)
			{
				// Start journey
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
	
	/*
	 * State machine
	 */
	Template.journies.hasSelectedJourney = function ()	{
		return Session.get("journey");
	};
	Template.journey.inStory = function () {
		var page = Session.get("story");
		if (page == -1) {
			return false
		}
		return true;	
	};
	
	/*
	 * Events
	 */
	Template.answer.events( {
		// Clicked an answer
		'click': function () {
			console.log("Clicked answer " + this);
			var quest = Session.get("quest");
			var reward = Session.get("reward");
			var stars = Session.get("stars");
			var correctMessage = getQuest().correctMessage;
			var correctAnswer = getQuest().correctAnswer;
			Session.set("popUp", true);
			if (this == correctAnswer) {
				// Correct answer
				console.log("Clicked correct answer");
				Session.set("quest", quest + 1);
				Session.set("story", 0);
				Session.set("stars", stars+reward);
				Session.set("reward", 5);
				Session.set("popUpText", correctMessage);
				Session.set("popUpButtonText", "Continue");
			}
			else {
				// Wrong answer
				Session.set("reward", reward-1);				
				if (reward > 1) {
					// Show try again pop-up
					Session.set("popUpText", "Try again!");
					Session.set("popUpButtonText", "Try Again");
				}
				else {
					// No more try-agains. Show continue pop-up
					Session.set("popUpText", "Totally wrong");
					Session.set("popUpButtonText", "Continue");
				}
			}
		}
	});
	Template.storyNextButton.events( {
		// Clicked the next button
		'click': function () {
			var storyLength = getQuest().story.length;
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
		// Clicked the previous button
		'click': function () {
			var storyLength = getQuest().story.length;
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
		// Clicked the hint button
		'click': function () {
			var hint = getQuest().hint;
			console.log ("Hint: " + hint);
			return hint;	
		}
	});
	
	/*
	 * Button states
	 */
	Template.storyPreviousButton.buttonPreviousEnabled = function (){
		var page = Session.get("story")
		if (page == 0) {
			return "disabled";
		}
		return "enabled";
	};	
	Template.storyNextButton.buttonNextEnabled = function () {
		var page = Session.get("story");
		var storyLength = getQuest().story.length;
		if (page == (storyLength - 1)) {
			return "disabled";
		}
		return "enabled";
	};
	
	/*
	 * Data hooks
	 */
	Template.story.background = function () {
		return getStory().background;
	};	
	Template.story.text = function () {
		return getStory().text;
	};
	Template.story.element = function () {
		return this;
	};
	Template.question.questionText = function () {
		return getQuest().question;
	};
	Template.question.answers = function () {
    	return getQuest().answers;
	};
	Template.answer.answer = function () {
		return this;
	};
	Template.starsTotal.stars = function () {
		return Session.get("stars");
	};	
	
	/*
	 * Pop Up Dialog Box
	 */
	Template.popUp.popUpEnabled = function (){
		var dialog = Session.get("dialog");
		if (dialog){
			return "enabled";
		}
		return "disabled";
	};
	Template.popUp.popUpText = function () {
		return Session.get("popUpText");
	};	
	Template.popUp.popUpButtonText = function () {
		return Session.get("popUpButtonText");
	};	
	Template.stars.stars = function () {
		return [0,1,2]; //TODO hack for now
	};
	
	/*
	 * Helpers
	 */
	function getJourney()
	{
		var journeyId = Session.get("journey");
		return Journies.findOne({_id: journeyId});
	}
	function getQuest()
	{
		var quest = Session.get("quest");
		return getJourney().quests[quest];
	}
	function getStory()
	{
		var page = Session.get("story");
		return getQuest().story[page];
	}
}

/*
 * SERVER SIDE
 */
if (Meteor.isServer) {
  	Meteor.startup(function () {
		// Clear and add the journey data
		Journies.remove( { } );
    	var data = [{
			name: "Tom Binnacle",
     	   	image: "tom.png",
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
			name: "Textile Designer",
     	   	image: "textile.png"
     	}];
    	for (var i = 0; i < data.length; i++) {
    		Journies.insert(data[i]);
			console.log("Added character: " + data[i].name);
		}
	});
}
