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
				text: ["I sure am hungry, but I don\’t want to part with this halfpenny I got from a gentleman.  Look! ", "On the back it\’s got a grown sailor, but this sailor on the front is a boy! ", "I wonder what the letters around the boy say... I can’t read them. "]
			}],
 			question: "Find the coin in Nelson, Navy, Nation Gallery on the 2nd floor. What do the words around the sailor boy say?",
			image: "stories_questions/question1.png",
			answers: ["Mariner Boy's School", "Association of Boy Sailors", "Boys of the Ocean", "A Maritime Society Boy"],
			correctAnswer: "A Maritime Society Boy",
			hint: "It is in a corner of the gallery, under the words \'Joining up.\'",
			correctMessage: ["Right!", "The words read, \'A Maritime Society Boy.\'"]
		}, {
			story: [{
				background: "stories_questions/story4.png",
				text: ["Maritime Society?  I wonder what that is?", "Some gentlemen are talkative while I shine their shoes.  If it won’t be bothering them, maybe I can ask... ", "Guess I should head down to my spot and get to work... What\’s that?  I haven’t seen that in the shop window before!"]
			}, {
				background: "stories_questions/story5.png",
				text: ["I wonder who the ladies are? What is she pointing to? That boy is a sailor too!", "Hmmm... the shop doesn’t look too busy... only a lady and her maid in the whole place.", "I\’ll ask the shopkeeper."]
			}, {
				background: "stories_questions/story6.png",
				text: ["\"Pardon!  What\’s that about?  Is he a sailor?\"", "\"I\'m tired of you beggars robbing me! Buy something or get out!\" the shopkeeper roared at me.", "\"How do you like that?  I\’m not a beggar!  I am the proprietor of a fine shoe-polishing establishment!\""]
			}, {
				background: "stories_questions/story7.png",
				text: ["The shopkeeper yelled again, \"Get out!\"", "\"But the sailor boy...\"", "And then he threw me out."]
				
			}],
 			question: "Find the bowl in the Atlantic: Navy, Trade, Empire Gallery on the 1st floor. Who are the women on the bowl?",
			image: "stories_questions/question2.png",
			answers: ["Britannia and Charity", "Athena and Aphrodite", "Calliope and Thalia", "Industry and Hope"],
			correctAnswer: "Britannia and Charity",
			hint: "One of the names has to do with giving to others.",
			correctMessage: ["Right!", "The women represent Charity and Britain."]		
		}, {
			story: [{
				background: "stories_questions/story8.png",
				text: ["I had just picked myself up when an almost grown girl came running up behind me.", "\"Hey there! Boy!\" the girl called after me.  \"My mistress sent me to tell you that the boy got his clothes from the Maritime Society.\"", "The Maritime Society!  I felt a shiver run down my spine."]
			}, {
				background: "stories_questions/story9.png",
				text: ["The girl contnued, \"It provides boys with no prospects with the things they need to become a sailor.\"","\"One of the beautiful ladies on the bowl is Britain. She needs good sailors!  Do you have friends or family?\"", "I explained, \"I don’t need any!  I’m the proprietor of a fine-\"" ]
			}, {
				background: "stories_questions/story10.png",
				text: ["The girl smiled... I think she might have been laughing at me. \"Well,\" she said, \"such excellent prospects indeed!\"","\"But Lady Aurelia believes you may be better suited to the sea.  She requests that you appear at her kitchen entrance first thing tomorrow.\"", "\"Mr. Smith, our household manager, may be able to get you a place with the Maritime Society... if you can bear to leave your business.\""]
			}, {
				background: "stories_questions/story11.png",
				text: ["I was grinning like a fool!", "But I quickly put on the grownup voice I use with my customers, thanked the girl, and commended my thanks to her lady.", "She actually laughed out loud at me, but I don’t care!  Me!  A sailor!"]			
			}, {
				background: "stories_questions/story12.png",
				text: ["When the first bells rang to start the day, I figured I could finally appear to the door.  Such a grand home!", "I knocked on the door.  Suddenly, I noticed that my breeches had a hole at the knee and my shirt was no longer white, but a gloomy shade of grey...", "You must be our Maritime Society boy!"]
			}, {
				background: "stories_questions/story13.png",
				text: ["An older woman in an apron sized me up. Then reached out and started to rake her fingers through my unruly hair before straightening my shirt. Then she stepped back and smiled.", "She patted me on the shoulder, led me down a long hallway, and bid me to wait there until Mr. Smith called me in.", "I had no time to think about the butterflies in my stomach because I immediately laid eyes on the most glorious thing I have ever seen!"]
			}],
 			question: "Find the painting entitled \'View of Mr Perry's Yard, Blackwall\' in the Traders: the East India Company and Asia gallery on the 1st floor. Can you find the mast house? What color is it?",
			image: "stories_questions/question3.png",
			answers: ["Purple", "Red", "Green", "Yellow"],
			correctAnswer: "Red",
			hint: "It is a long, thin painting near the 1800/1803 portion. Be sure to read the information below the painting.",
			correctMessage: ["Right!", "It is red."]	
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
 			question: "Find Tom's training ship, the Seahorse, in the Children's Gallery on the 2nd floor.  When was its bell cast?",
			image: "stories_questions/question4.png",
			answers: ["1865", "1755", "1901", "1794"],
			correctAnswer: "1794",
			hint: "Look around the side of the bell.",
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
				background: "stories_questions/story25.png",
				text: ["Tom!  Run down to the log book and tell me the wind direction was this time last Wednesday.", "I am surprised that he doesn’t want me to bring the book to him.  He actually wants me to read it and report back.", "I don\’t know if I’m that good at it yet..."]			
			}],
 			question: "Find the weather log from the 1700s in the Environment Gallery.  What was the second recorded wind direction on Wednesday, the 17th?",
			image: "stories_questions/question5.png",
			answers: ["West", "East", "North Northeast", "South"],
			correctAnswer: "East",
			hint: "It is a word written out, not an abbreivation.",
			correctMessage: ["Great work!", "You read the answer!"]
		}, {
			story: [{
				background: "stories_questions/story28.png",
				text: ["Good work, Tom!", "In time, my script grew so refined that he passed the task of recording the weather on to me.", "Almost four years have flown past.  I find my thoughts wandering to what I will do when I complete my training... "]
			}, {
				background: "stories_questions/story24.png",
				text: ["One day, Schoolmaster Banbridge took me aside and told me that his nephew had gotten a commission on a naval ship.", "Congratulations, sir!  I\’m sure it is down to the excellent example of his uncle!", "He will need a boy to go along with him and act as his assistant.  As your training will end soon, I had hoped to recommend you."]
			}, {
				background: "stories_questions/story22.png",
				text: ["Would that be amenable to you?", "It\’s a good thing I have grown much better at not grinning like a fool noticeably.","Soon, I was off to sea!"]
			}, {
				background: "stories_questions/story29.png",
 				text: ["Schoolmaster Banbridge\’s nephew, Lieutenant-Commander Carson, uses lots of fancy equipment.", "It is part of my responsibilities to keep them in top working order.", "I wonder what they all do?"]			
			}],
 			question: "Find the instrument from the picture in the Maritime London: 1700 to Now gallery on the ground floor.  What is it called?",
			image: "stories_questions/question2.png",
			answers: ["mariner's quadrant", "telescope", "theodolite", "pocket chronometer"],
			correctAnswer: "theodolite",
			hint: "It was made in 1773 of brass and glass.",
			correctMessage: ["Great work!", "You are on your way to learning all the navigation instruments!"]	
		}, {
			story: [{
				background: "stories_questions/story14.png",
				text: ["Lieutenant-Commander Carson does indeed follows his uncle\’s example and is keen to instruct me in the operation of navigation instruments. He tells me he often praises my quick mastery of navigation in his letters to his uncle.", "The French look poised to invade and we have received orders to sail to England’s defense."," But I happened to see our navigation calculations and now that I know how to use the instruments, I realize the calulations are slightly off.  The course will take us out of our way!"]
			}, {
				background: "stories_questions/story27.png",
				text: ["What should I do?  I cannot contradict a superior officer, but can we risk wasting time with so much at stake?", "With much fear, I gently suggest an alternative calculation to the Lieutenant-Commander.", "As I said, Lieutenant-Commander Carson is a good man and he thinks not of himself, but the safety of our nation.  It turns out I am right!"]
			}, {
				background: "stories_questions/story26.png",
				text: ["He quickly re-plots our course.", "That night, the Captain called me to his cabin.  Lieutenant-Commander Carson was also there.", "My knees were shaking. What if the Captain has found out and now I will be disciplined for attempting to correct my officer?"]
			}, {
				background: "bg2.png",
 				text: ["The Captain handed me a set of clothes.", "I did not understand, and I am sorry to report that I stood there agape.","They are hand-me-downs, but they will have to do.  There\’s a war on, you know."]			
			}],
 			question: "Find the inforamtion ortals on the gound floor, opposite the figureheads.  Do a search for \"ZBA4957.\" What are the clothes Tom has been given?",
			image: "stories_questions/question2.png",
			answers: ["a set of clothes nicer than the one's Tom has", "a gentleman\'s silk waistcoat", "an antique suit of cotton", "a lieutenant\'s uniform"],
			correctAnswer: "a lieutenant\'s uniform",
			hint: "Tom has really worked his way up in the world.",
			correctMessage: ["Great work!", "Congratulations, Lieutenant Binnacle!"]
		}, {
			story: [{
				background: "bg0.png",
				text: ["You’ll have to pass an examination to become a lieutenant... ", "But I’m sure we can carry that out aboard ship.", "We are short lieutenants and need all the good men we can get right now!"]
			}, {
				background: "bg1.png",
				text: ["And that is how I became an officer.","I hope I can be as good a leader to my men as Schoolmaster Banbridge and Lieutenant-Commander Carson were to me.", "We are on our way to a place off the coast of Spain called Trafalgar."]
			}, {
				background: "bg2.png",
				text: ["There looks to be a fierce battle ahead of us...", "But I am confident in our courage.", "And in the pocket of my fine uniform, will be that that small halfpenny that once filled a shoe shine boy in rags with wonder."]	
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
