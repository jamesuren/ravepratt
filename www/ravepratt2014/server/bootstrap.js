// Journies model
Journies = new Meteor.Collection("journies");

/*
 * SERVER SIDE
 */
Meteor.startup(function () {
	// Clear and add the journey data
	Journies.remove( { } );
	var data = [{
		name: "Tom Binnacle",
 	   	image: "tom.png",
		description: "A 12 year old orphan fascinated by the Navy.",
 		quests: [{
			story: [{
				background: "stories_questions/story1.png",
				text: ["Tom\'s the name!  Tom Binnacle.  Well... actually I ain\'t got a second name.", "But a proper business proprietor needs a proper name.", "I heard some sailors talking about a binnacle and I think it sounds like a fine name, don\'t you?"]
			}, {
				background: "stories_questions/story2.png",
				text: ["The parish ladies were generous last Christmas!", "Some boys bought oranges, but I set myself up with some rags and beeswax.", "That’s how I keep body and soul together – shining shoes. " ]
			}, {
				background: "stories_questions/story3.png",
				text: ["I sure am hungry, but I don\’t want to part with this halfpenny I got from a gentleman.  Look! ", "On the back it\’s got a grown sailor, but this sailor on the front is a boy! ", "I wonder what the letters say… I can’t read them. "]
			}],
 			question: "What is your name?",
			image: "stories_questions/question1.png",
			answers: ["Sam", "John", "Henry", "Bill"],
			correctAnswer: "Henry",
			hint: "It is on your birth certificate...",
			correctMessage: ["Right!", "Information about the plate"]
		}, {
			story: [{
				background: "bg0.png",
				text: ["Maritime Society again?  I wonder what that is?", "Some gentlemen are talkative while I shine their shoes.  If it won’t be bothering them, maybe I can ask... ", "Guess I should head down to my spot and get to work... What\’s that?  I haven’t seen that in the shop window before!"]
			}, {
				background: "bg1.png",
				text: ["That boy is a sailor too! I wish that could be me! I wonder why he’s changing his clothes?", "Hmmm... the shop doesn’t look too busy... only a lady and her maid in the whole place.", "I\’ll ask the shopkeeper."]
			}, {
				background: "bg2.png",
				text: ["Pardon!  What\’s that about?  Is he a sailor?", "I\'m tired of you beggars robbing me! Buy something or get out!", "How do you like that?  I\’m not a beggar!  I am the proprietor of a fine shoe-polishing establishment!"]
			}, {
				background: "bg2.png",
				text: ["Get out!", "But the sailor boy...", "And then be threw me out."]
				
			}],
 			question: "What is written on the bowl?",
			image: "stories_questions/question2.png",
			answers: ["Join the war!", "Maritime Association", "Boy Sailor Society", "Maritime Society"],
			correctAnswer: "Maritime Society",
			hint: "It begins with M",
			correctMessage: ["Right!", "The message on the bowl reads, \'Maritime Society.\'"]		
		}, {
			story: [{
				background: "bg0.png",
				text: ["I had just picked myself up when an almost grown girl came running up behind me.", "Hey there! Boy!  My mistress sent me to tell you that the boy got his clothes from the Maritime Society.", "The Maritime Society!  I felt a shiver run down my spine."]
			}, {
				background: "bg1.png",
				text: ["It provides boys with no prospects with the things they need to become a sailor.","The beautiful lady on the bowl is England. She needs good sailors!  Do you have friends or family?", "I don’t need any!  I’m the proprietor of a fine-" ]
			}, {
				background: "bg2.png",
				text: ["The girl smiled... I think she might have been laughing at me.", "Well, such excellent prospects indeed!  But for some reason Lady Aurelia believes you may be better suited to the sea. She requests that you appear at her kitchen entrance first thing tomorrow.", "Mr. Smith, our household manager, may be able to get you a place with the Maritime Society... if you can bear to leave your business."]
			}, {
				background: "bg2.png",
				text: ["I was grinning like a fool!", "But I quickly put on the grownup voice I use with my customers, thanked the girl, and commended my thanks to her lady.", "She actually laughed out loud at me, but I don’t care!  Me!  A sailor!"]			
			}, {
				background: "bg2.png",
				text: ["When the first bells rang to start the day, I figured I could finally appear to the door.  Such a grand home!", "I knocked on the door.  My heart started pounding.  Suddenly, I noticed that my breeches had a hole at the knee and my shirt was no longer white, but a gloomy shade of grey...", "You must be our Maritime Society boy!"]
			}, {
				background: "bg2.png",
				text: ["An older woman in an apron sized me up. Then reached out and started to rake her fingers through my unruly hair before straightening my shirt. Then she stepped back and smiled.", "She patted me on the shoulder, led me down a long hallway, and bid me to wait there until Mr. Smith called me in.", "I had no time to think about the butterflies in my stomach because I immediately laid eyes on the most glorious thing I have ever seen!"]
			}],
 			question: "What is this a painting of?",
			image: "stories_questions/question2.png",
			answers: ["Who knows?", "When we find the painting,", "We will add it.", "Use your imagination for now."],
			correctAnswer: "We will add it.",
			hint: "Figure it out, Sherlock.",
			correctMessage: ["Right!", "The correct answer will be here."]	
		}, { 
			story: [{
				background: "bg0.png",
				text: ["What you see before you is a bunch of stuff we will fill in later.", "I nearly jumped out of my skin when the voice behind me interrupted my daydreams.  I turned to face a man neatly-dressed in plain but good clothes.", "I\’m Mr. Smith and I manage this household. Look lively and follow me, Tom.”"]
			}, {
				background: "bg1.png",
				text: ["I followed him into a room.  He sat down next to a finely-dressed gentleman whom he introduced as Sir James Davenport, a governor of the Maritime Society.","Tom. How old are you?", "I didn’t know what to say. To be honest, I don’t really know.  What if I give the wrong answer? What should I say?" ]
			}, {
				background: "bg2.png",
				text: [" ...13 years old, sir.", "Oh dear.  That didn’t sound very convincing.  Sir James raised an eyebrow and eyed me sternly over his spectacles.", "Hmph. You look of adequate height."]
			}, {
				background: "bg2.png",
				text: ["Sir James went on to question me about my family connections.  As I have none, that topic was quickly exhausted.", "Then he asked about my character.  Mr. Smith must have asked around the neighbourhood because he seemed to know more about me than I did!", "But he was saying good things, so I dared not interrupt him."]			
			}, {
				background: "bg2.png",
				text: ["After what seemed like an age, Sir James began to write something on a paper.  He folded it up and handed it to me.", "Appear at the ship name that I do not know training ship on Wednesday morning.  Give the man at the dock this paper.", "You are now a Maritime Society boy, Tom."]
			}],
 			question: "Can you find the training ship?",
			image: "stories_questions/question2.png",
			answers: ["I don\'t know how we will answer this.", "Will we put other ships here?,", "Hm. I wonder", "Use your imagination for now."],
			correctAnswer: "I don\'t know how we will answer this.",
			hint: "You can do it.",
			correctMessage: ["Good work!", "You found it!"]
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
