// Journies model
Journies = new Meteor.Collection("journies");

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
			Session.set("answersSelected", []);
			Session.set("hint", false);			
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
		var answersSelected = Session.get("answersSelected");
		Session.set("popUp", true);
		if (this == correctAnswer) {
			// Correct answer
			console.log("Clicked correct answer");
			Session.set("quest", quest + 1);
			Session.set("story", 0);
			Session.set("stars", stars+reward);
			Session.set("popUpText", correctMessage);
			Session.set("popUpButtonText", "Continue");
			Session.set("answersSelected", []);
			Session.set("hint", false);
		}
		else {
			// Wrong answer
			Session.set("reward", reward-1);
			console.log(answersSelected);	
			console.log(answersSelected.length);			
			if (answersSelected.length < 2) {
				// Show try again pop-up
				console.log("Clicked wrong answer. Try again.");
				Session.set("popUpText", "Try again!");
				Session.set("popUpButtonText", "Try Again");
				answersSelected.push (this.toString());
				Session.set("answersSelected", answersSelected);
			}
			else {
				// No more try-agains. Show continue pop-up
				console.log("Clicked wrong answer. No more try-agains.");
				Session.set("popUpText", "Totally wrong");
				Session.set("popUpButtonText", "Continue");
				Session.set("quest", quest + 1);
				Session.set("story", 0);
				Session.set("stars", stars+reward);
				Session.set("answersSelected", []);
				Session.set("hint", false);
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
			var question = getQuest().question;
			if (question) {
			  	Session.set("story", -1);
			}
			else {
			    Session.set("journey", 0);
				Session.set("quest", 0);
			    Session.set("story", 0);
				Session.set("stars", 0);
				Session.set("reward", 5);
				Session.set("popUp", false);
				Session.set("answersSelected", []);
			}
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
			// A story page of -1 means go to the question
			Session.set("story", -1);
		}

	}
});
Template.hint.events( {
	// Clicked the hint button
	'click': function () {
		var hint = getQuest().hint;
		console.log ("Hint: " + hint);
		Session.set("popUp", true);
		Session.set("popUpText", hint);
		Session.set("popUpButtonText", "Back to question");
		var reward =Session.get("reward");
		Session.set("reward", reward-1);
		Session.set("hint", true);
	}
});

/*
 * Enable/disable hooks
 */
Template.storyPreviousButton.buttonPreviousEnabled = function (){
	var page = Session.get("story");
	if (page == 0) {
		return "disabled";
	}
	return "enabled";
};	
Template.storyNextButton.buttonNextEnabled = function () {
	return "enabled";
};
Template.answer.answerEnabled = function (){
	var answersSelected = Session.get("answersSelected");
	if (contains(answersSelected, this)){
		return "disabled";
	}
	return "enabled";
};
Template.hint.hintEnabled = function (){
	var hint = Session.get("hint");
	if (hint){
		return "disabled";
	}
	return "enabled";
};
Template.starsTotal.starsTotalEnabled = function (){
	var page = Session.get("story");
	if (page == -1){
		return "enabled";
	}
	return "disabled";
	
};	
/*
 * Page Number hooks
 */
Template.storyPageNumber.pageNum = function(){
	var page = Session.get("story");
	return page + 1;
}
Template.storyPageNumber.totalPages = function(){
	var storyLength = getQuest().story.length;
	return storyLength;
}
Template.storyQuestionNumber.questionNumber = function(){
	var number = Session.get("quest");
	return number + 1;
}
/*
 * Data hooks
 */
Template.question.image = function(){
	return getQuest().image;
}
Template.story.background = function () {
	return getStory().background;
};	
Template.story.text = function () {
	return getStory().text;
};
Template.story.element = function () {
	return this;
};	
Template.story.elementClass = function () {
	var story = getStory().text; 
	if (story[0] == this) {
		return "top";
	}
	if (story[1] == this) {
		return "middle";
	}
	if (story[2] == this) {
		return "bottom";
	}
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
 * Pop-Up Dialog Box
 */
Template.popUp.popUpEnabled = function (){
	var popUp = Session.get("popUp");
	if (popUp){
		return "enabled";
	}
	return "disabled";
};
Template.popUp.popUpText = function () {
	return Session.get("popUpText");
};	
Template.popUpButton.popUpButtonText = function () {
	return Session.get("popUpButtonText");
};	
Template.stars.stars = function () {
	// Hack to make stars reduce as you progress
	var reward = Session.get("reward");
	var array = [];
	for (var i = 0; i < reward; i++) {
		array.push(i);
	}
	return array;
};
Template.popUpButton.events( {
	// Clicked on button in popup for hint or wrong answer
	'click': function () {
		Session.set("popUp", false);
		console.log("popUp closed");
		var page = Session.get("story");
		if (page != -1){
			Session.set("reward", 5);
		}	
	}
});

/*
 * Helpers
 */
function getJourney(){
	var journeyId = Session.get("journey");
	return Journies.findOne({_id: journeyId});
}
function getQuest(){
	var quest = Session.get("quest");
	return getJourney().quests[quest];
}
function getStory(){
	var page = Session.get("story");
	return getQuest().story[page];
}
function contains(a, obj) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === obj.toString()) {
            return true;
        }
    }
    return false;
}
