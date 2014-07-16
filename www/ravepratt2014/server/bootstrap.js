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
				text: ["I sure am hungry, but I don\’t want to part with this halfpenny I got from a gentleman.  Look! ", "On the back it\’s got a grown sailor, but this sailor on the front is a boy! ", "I wonder what the letters around the boy say… I can’t read them. "]
			}],
 			question: "What do the words around the sailor boy say?",
			image: "stories_questions/question1.png",
			answers: ["Maniner Boy's School", "Association of Boy Sailors", "Boys of the Ocean", "Maritime Society Boy"],
			correctAnswer: "Maritime Society Boy",
			hint: "The words form a circle around the boy on the coin.",
			correctMessage: ["Right!", "The words read, \'Maritime Society Boy.\'"]
		}, {
			story: [{
				background: "stories_questions/story4.png",
				text: ["Maritime Society again?  I wonder what that is?", "Some gentlemen are talkative while I shine their shoes.  If it won’t be bothering them, maybe I can ask... ", "Guess I should head down to my spot and get to work... What\’s that?  I haven’t seen that in the shop window before!"]
			}, {
				background: "stories_questions/story5.png",
				text: ["That boy is a sailor too! I wish that could be me! I wonder why he’s changing his clothes?", "Hmmm... the shop doesn’t look too busy... only a lady and her maid in the whole place.", "I\’ll ask the shopkeeper."]
			}, {
				background: "stories_questions/story6.png",
				text: ["Pardon!  What\’s that about?  Is he a sailor?", "I\'m tired of you beggars robbing me! Buy something or get out!", "How do you like that?  I\’m not a beggar!  I am the proprietor of a fine shoe-polishing establishment!"]
			}, {
				background: "stories_questions/story7.png",
				text: ["Get out!", "But the sailor boy...", "And then be threw me out."]
				
			}],
 			question: "What is written on the bowl?",
			image: "stories_questions/question2.png",
			answers: ["Join the war!", "Maritime Association", "Boy Sailor Society", "Maritime Society"],
			correctAnswer: "Maritime Society",
			hint: "It begins with M.",
			correctMessage: ["Right!", "The message on the bowl reads, \'Maritime Society.\'"]		
		}, {
			story: [{
				background: "stories_questions/story8.png",
				text: ["I had just picked myself up when an almost grown girl came running up behind me.", "Hey there! Boy!  My mistress sent me to tell you that the boy got his clothes from the Maritime Society.", "The Maritime Society!  I felt a shiver run down my spine."]
			}, {
				background: "stories_questions/story9.png",
				text: ["It provides boys with no prospects with the things they need to become a sailor.","The beautiful lady on the bowl is England. She needs good sailors!  Do you have friends or family?", "I don’t need any!  I’m the proprietor of a fine-" ]
			}, {
				background: "stories_questions/story10.png",
				text: ["The girl smiled... I think she might have been laughing at me.", "Well, such excellent prospects indeed!  But for some reason Lady Aurelia believes you may be better suited to the sea. She requests that you appear at her kitchen entrance first thing tomorrow.", "Mr. Smith, our household manager, may be able to get you a place with the Maritime Society... if you can bear to leave your business."]
			}, {
				background: "stories_questions/story11.png",
				text: ["I was grinning like a fool!", "But I quickly put on the grownup voice I use with my customers, thanked the girl, and commended my thanks to her lady.", "She actually laughed out loud at me, but I don’t care!  Me!  A sailor!"]			
			}, {
				background: "stories_questions/story12.png",
				text: ["When the first bells rang to start the day, I figured I could finally appear to the door.  Such a grand home!", "I knocked on the door.  My heart started pounding.  Suddenly, I noticed that my breeches had a hole at the knee and my shirt was no longer white, but a gloomy shade of grey...", "You must be our Maritime Society boy!"]
			}, {
				background: "stories_questions/story13.png",
				text: ["An older woman in an apron sized me up. Then reached out and started to rake her fingers through my unruly hair before straightening my shirt. Then she stepped back and smiled.", "She patted me on the shoulder, led me down a long hallway, and bid me to wait there until Mr. Smith called me in.", "I had no time to think about the butterflies in my stomach because I immediately laid eyes on the most glorious thing I have ever seen!"]
			}],
 			question: "What is this a painting of?",
			image: "stories_questions/question3.png",
			answers: ["Who knows?", "When we find the painting,", "We will add it.", "Use your imagination for now."],
			correctAnswer: "We will add it.",
			hint: "Figure it out, Sherlock.",
			correctMessage: ["Right!", "The correct answer will be here."]	
		}, { 
			story: [{
				background: "stories_questions/story14.png",
				text: ["What you see before you is a bunch of stuff we will fill in later.", "I nearly jumped out of my skin when the voice behind me interrupted my daydreams.  I turned to face a man neatly-dressed in plain but good clothes.", "I\’m Mr. Smith and I manage this household. Look lively and follow me, Tom."]
			}, {
				background: "stories_questions/story15.png",
				text: ["I followed him into a room.  He sat down next to a finely-dressed gentleman whom he introduced as Sir James Davenport, a governor of the Maritime Society.","Tom. How old are you?", "I didn’t know what to say. To be honest, I don’t really know.  What if I give the wrong answer? What should I say?" ]
			}, {
				background: "stories_questions/story16.png",
				text: [" ...13 years old, sir.", "Oh dear.  That didn’t sound very convincing.  Sir James raised an eyebrow and eyed me sternly over his spectacles.", "Hmph. You look of adequate height."]
			}, {
				background: "stories_questions/story17.png",
				text: ["Sir James went on to question me about my family connections.  As I have none, it was a short discussion.", "Then he asked about my character.  Mr. Smith must have asked around the neighbourhood because he seemed to know more about me than I did!", "But he was saying good things, so I dared not interrupt him."]			
			}, {
				background: "stories_questions/story18.png",
				text: ["After what seemed like an age, Sir James began to write something on a paper.  He folded it up and handed it to me.", "Appear at the ship name that I do not know training ship on Wednesday morning.  Give the man at the dock this paper.", "You are now a Maritime Society boy, Tom."]
			}],
 			question: "Can you find the training ship?",
			image: "stories_questions/question4.png",
			answers: ["I don\'t know how we will answer this.", "Will we put other ships here?,", "Hm. I wonder", "Use your imagination for now."],
			correctAnswer: "I don\'t know how we will answer this.",
			hint: "You can do it.",
			correctMessage: ["Good work!", "You found it!"]
		}, {
			story: [{
				background: "stories_questions/story19.png",
				text: ["I feel like a prince!  I have never had any new clothes in life, let alone two new shirts at the same time!  And the food!  My stomach is full every night.", "Schoolmaster Banbridge expects us to be respectful and work hard, but he is good to us."]
			}, {
				background: "stories_questions/story20.png",
				text: ["He keeps a log, which means he writes in a book each day what the weather is like.", "I watch him dip his pen in ink and make looping, slanted lines on the paper.", "Tom.  Would you like to learn how to make the letters?"]
			}, {
				background: "stories_questions/story21.png",
				text: ["Yes, sir!  If you think it is possible, sir!", "Of course it is possible!  Indeed, if you mean to go anywhere in this Navy, you will need to learn.", "Schoolmaster Banbridge thinks I am making fine progress, but I despair of ever having so elegant a hand as an officer should have. But I am doing well with stringing the letters together in my head to make words!"]
			}, {
				background: "bg2.png",
				text: ["I wonder if the weather will be fine enough to work topside this week.  Tom!  Run down to the log book and tell me what the weather was like this time last year.", "I am surprised that he doesn’t want me to bring the book to him.  He actually wants me to read it and report back.", "I don\’t know if I’m that good at it yet..."]			
			}],
 			question: "What was the weather like on a date which we will determine after we visit the museum?",
			image: "stories_questions/question5.png",
			answers: ["Sunny", "Stormy", "Windy", "Rainy"],
			correctAnswer: "Sunny",
			hint: "It looks they will be able to work topside.",
			correctMessage: ["Great work!", "You read the answer!"]
		}, {
			story: [{
				background: "bg0.png",
				text: ["Well done, Tom! It looks like we can or can't work outside next week.", "In time, my script grew so refined that he passed the task of recording the weather on to me.", "Almost four years have flown past.  I find my thoughts wandering to what I will do when I complete my training... "]
			}, {
				background: "bg1.png",
				text: ["One day, Schoolmaster Banbridge took me aside and told me that his nephew had gotten a commission on a naval ship.", "Congratulations, sir!  I\’m sure it is down to the excellent example of his uncle!", "He will need a boy to go along with him and act as his assistant.  As your training will end soon, I had hoped to recommend you."]
			}, {
				background: "bg2.png",
				text: ["Would that be amenable to you?", "It\’s a good thing I have grown much better at not grinning like a fool noticeably.","Soon, I was off to sea!"]
			}, {
				background: "bg2.png",
 				text: ["Schoolmaster Banbridge\’s nephew, Lieutenant-Commander Carson, uses lots of fancy equipment.", "It is part of my responsibilities to keep them in top working order.", "I wonder what they all do?"]			
			}],
 			question: "What is this mariner's quantrant used for?",
			image: "stories_questions/question2.png",
			answers: ["to measure disatnce", "to measure weather conditions", "to measure altitutde", "to measure water depth"],
			correctAnswer: "to measure altitude",
			hint: "It helps sailors determine how high in the sky stars or other objects are.",
			correctMessage: ["Great work!", "You've learned what it does!"]	
		}, {
			story: [{
				background: "bg0.png",
				text: ["Lieutenant-Commander Carson does indeed follows his uncle\’s example and is keen to instruct me in the operation of navigation instruments. He tells me he often praises my quick mastery of navigation in his letters to his uncle.", "The French look poised to invade and we have received orders to sail to England’s defense."," But I happened to see our navigation calculations and now that I know how to use the instruments, I realize the calulations are slightly off.  The course will take us out of our way!"]
			}, {
				background: "bg1.png",
				text: ["What should I do?  I cannot contradict a superior officer, but can we risk wasting time with so much at stake?", "With much fear, I gently suggest an alternative calculation to the Lieutenant-Commander.", "As I said, Lieutenant-Commander Carson is a good man and he thinks not of himself, but the safety of our nation.  It turns out I am right!"]
			}, {
				background: "bg2.png",
				text: ["He quickly re-plots our course.", "That night, the Captain called me to his cabin.  Lieutenant-Commander Carson was also there.", "My knees were shaking. What if the Captain has found out and now I will be disciplined for attempting to correct my officer?"]
			}, {
				background: "bg2.png",
 				text: ["The Captain handed me a set of clothes.", "I did not understand, and I am sorry to report that I stood there agape.","They are hand-me-downs, but they will have to do.  There\’s a war on, you know."]			
			}],
 			question: "What kind of clothes did the Captain give Tom?",
			image: "stories_questions/question2.png",
			answers: ["a set of clothes nicer than the one's Tom has", "a gentleman\'s silk waistcoat", "an antique suit of cotton", "a lieutenant\'s uniform"],
			correctAnswer: "a lieutenant\'s uniform",
			hint: "Tom has really worked his way up in the world.",
			correctMessage: ["Great work!", "Congratulations, Lieutenant Binnacle!"]
		}, {
			story: [{
				background: "bg0.png",
				text: [""]
			}, {
				background: "bg1.png",
				text: [""]
			}, {
				background: "bg2.png",
				text: [""]
			}, {
				background: "bg2.png",
 				text: [""]		
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
