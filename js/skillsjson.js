var allQuestions = [
	{
		"question": "You have a module where you can choose your own topic, and you want to know more about sociolinguistics and sound change. You search “sociolinguistic sound change” at the library, but not much comes up. What’s your next move?",
		"answers":[
			{
				"text":"There must not be much work on the topic; assume you’re the first to consider this and start writing your assignment accordingly.",
				"pointValue": 0,
				"feedback":"This is the wrong way to go. It's <b>very unlikely</b> you are working something there is no related resesarch on, even if you do choose the topic. You need to look harder before moving forward: try different search terms and different search engines, and think about work that might be relevant and related even if you can't find something exact."
			},
			{
				"text":"Switch up your search terms – e.g., try 'social factors' instead of 'sociolinguistic'; you might also try a different search engine.",
				"pointValue": 3,
				"feedback":"Nice one! You'll have to be agile here. Switch up your search terms and look in multiple places."
			},
			{
				"text":"You should ask the librarian; they’ll know what to do next.",
				"pointValue": 1,
				"feedback":"Not the worst idea - the librarian will probably be able to help you. But it's better to have your own strategies in place, like switching up search terms and trying other search engines."
			}
			],
		"category":"searchEval",
		"bg":"https://source.unsplash.com/afW1hht0NSs"
	},
	{
		"question": "You are writing an essay on American Sign Language (ASL), and you find an interesting paper from 1970. It looks perfect – it’s touching on everything you need. Should you:",
		"answers":[
			{
				"text":"Use this as your main source – it has everything you need and a close reading shows it's comprehensive.",
				"pointValue": 0,
				"feedback":"Not a good strategy. This work is over 50 years old, and particularly on a topic like ASL, we have come a long way. You need to complement this with other, more recent sources, and should always aim to use multiple sources to support your arguments regardless of how recent they are."
			},
			{
				"text":"Take some notes on the source, but keep looking, particularly with an eye to more recent sources that might combine with this to give a fuller, more up-to-date picture.",
				"pointValue": 3,
				"feedback":"Good call. It's fine to use this source, but it really can't be the only thing you use - work on a topic like ASL especially will have come a long way. In general, you should rely on multiple convergent sources anyway, so keep looking."
			},
			{
				"text":"Don't use this source. It's over 50 years old and it's likely to be wrong.",
				"pointValue": 1,
				"feedback":"Not quite. This isn't likely to fully represent our current state of knowledge, but you can still use this source.  Even after 50 years, it may still have some valuable insights or results. Just make sure it isn't the <em>only</em> thing you use - keep looking, particularly for more up-to-date sources."
			}
			],
		"category":"searchEval",
		"bg":"https://source.unsplash.com/s584IIruYtI"
	},
	{
		"question": "Your module leader mentioned a study during a lecture that would be useful to use as a starting source for one of your assignments. You search for it on Google, but it’s behind a paywall. What should you do?",
		"answers":[
			{
				"text":"You can’t use this source if you can’t read it in detail, so it’s not an option. You will need to find an alternative source that’s freely available on the web.",
				"pointValue": 0,
				"feedback":"You haven't really looked very hard if you've only used one search engine and not checked whether you have access via the University. Look harder before giving up - if your lecturer has access, you probably do, too."
			},
			{
				"text":"You know your lecturer has access to this because they mentioned it in the lecture. Email your lecturer and they will send you a copy.",
				"pointValue": 1,
				"feedback":"Your lecturer probably does have it and may well send it, but this isn't the best way forward. It's not your lecturer's job to find you usable copies of sources for your assignments - you should check if you have access through the library."
			},
			{
				"text":"Check whether you have access through the university using LibSearch. If this doesn’t work, you might also check whether the author(s) have made it available on their website, or get in touch with the University librarian.",
				"pointValue": 3,
				"feedback":"This is the right next step - having looked on one search engine isn't very comprehensive. Check for access through the library and other avenues before giving up completely."
			}
			],
		"category":"searchEval",
		"bg":"https://source.unsplash.com/8KVHUDtJRD8"
	},
	{
		"question": "You have an assignment that focuses specifically on gender and accent. In searching for literature, you find a paper on gender and politeness that looks really interesting. What do you do?",
		"answers":[
			{
				"text":"Since the assignment is about gender and so is this paper, it’s highly relevant. It should play a large part in your assignment.",
				"pointValue": 0,
				"feedback":"This isn't a great strategy - the remit of the assignment is <em>accent</em>, and politeness is something else entirely. You can do targeted reading of the paper for points about politeness that might be relevant to accent perception, but be careful not to get into the weeds. Stick to the scope of the assignment."
			},
			{
				"text":"You need to focus on gender and accent perception, so this is not relevant. You don’t need to read it and shouldn’t include it.",
				"pointValue": 1,
				"feedback":"The instinct to stay focused is good, but you might still be able to use this paper. You can scan the paper for insights from politeness that might be relevant to your topic of accent perception."
			},
			{
				"text":"You should scan the paper and see if it can help you with any relevant points or insights about gender and accent perception.",
				"pointValue": 3,
				"feedback":"This is the best way forward. Don't get stuck in a detailed reading of the paper - you risk writing an assignment about politeness instead of accent."
			}
			],
		"category":"planScope",
		"bg":"https://source.unsplash.com/WmnsGyaFnCQ"
	},{
		"question": "In the assignment guidance for an essay, one of your lecturers has already given a title and a detailed prompt that references the literature. How should you get started finding sources for the assignment?",
		"answers":[
			{
				"text":"They have provided references in the prompt and these are the ones you are expected to use. Once you have read these you can draw a line under your search and start writing.",
				"pointValue": 0,
				"feedback":"This won't get you a very good mark. Expect to go beyond what your lecturers and seminar leaders give you; make a specific plan for key search terms to find some of your own sources."
			},
			{
				"text":"Put the assignment title into a search engine and sort the results by relevance; you should only consider using results within the first few pages of this search. Searching beyond the title might bring up irrelevant literature.",
				"pointValue": 1,
				"feedback":"Searching the title isn't the worst idea, but it's not the most efficient, and you should always evaluate relevance for yourself. Regardless, it can't be the only thing you do. Use the prompt to come up with key search terms and make a specific search plan with multiple options."
			},
			{
				"text":"Sit down and come up with a plan using the guidance. This should include identifying key search terms and where to start looking for your own sources.",
				"pointValue": 3,
				"feedback":"Nice job. You need to use the guidance to come up with a search plan and find your own sources. You might use the references provided as a jumping off point, or use the title to come up with some search terms, but you should expect to push beyond this with your own plan."
			}
			],
		"category":"planScope",
		"bg":"https://source.unsplash.com/s9CC2SKySJM"
	},{
		"question": "You have an essay due at the end of the module. The module leader has already made detailed guidance and the topics available weeks ahead of time. You won’t be able to actually write the assignment until closer to the deadline. What’s the best way to use the guidance?",
		"answers":[
			{
				"text":"Until you can devote time to getting words on the page, don’t look at this guidance too closely. It’s best to do all your research and writing together at once.",
				"pointValue": 0,
				"feedback":"Ignoring this guidance until the last minute is a bad idea. Not being able to pour yourself into an assignment as soon as the guidance is published is fine. But you should read it as soon as it's available, settle on a topic if there are choices, and start to plan how you will tackle it."
			},
			{
				"text":"You should rethink your schedule: read the guidance and get started on research and writing at once. You are expected to spend all the time between the assignment release and the deadline writing up.",
				"pointValue": 1,
				"feedback":"Not quite. A big part of your studies is managing your own time - it's fine to take the decision that you'll invest more time in actually writing later, but you should at least read the guidance and make a plan for tackling the assignment."
			},
			{
				"text":"Read the guidance carefully and start to plan. If you have a choice of topics, choose one as soon as possible. You might not be able to start writing, but you can start as structured literature search and prepare an outline.",
				"pointValue": 3,
				"feedback":"This is the way to go. You should use the guidance to make a plan, and may start to find some relevant sources for the essay even if you can't start writing quite yet."
			}
			],
		"category":"planScope",
		"bg":"https://source.unsplash.com/5fNmWej4tAA"
	},{
		"question": "You want to know more about chimpanzee communication for an essay. You bring up Google and start your search, and <a href='https://phys.org/news/2019-02-chimp-gestures-human-linguistics.html' target='_blank'>find this press release</a> - you read it and it's super interesting. Do you:",
		"answers":[
			{
				"text":"The release seems based on an academic study. Take down the relevant information so you can cite the release in your essay.",
				"pointValue": 1,
				"feedback":"Not a bad instinct - even though you used Google instead of Google Scholar, you've got a decent report of a study here. If you stop here, you should certainly cite this - but it's better to go to the original study, read it yourself, and cite it directly."
			},
			{
				"text":"Go to the original academic study and read that to verify the report and get additional detail and context. Cite the original study directly.",
				"pointValue": 3,
				"feedback":"Good job - this is the way to go. You should try to use the primary literature whenever possible. As long as you take in this more detailed source yourself ans summarize or paraphrase it in your own words, you don't need to cite the report you found first."
			},
			{
				"text":"This seems like a legitimate source. You don’t need to read the original study, but you should cite the study instead of this report since they conducted the research.",
				"pointValue": 0,
				"feedback":"You should aim to read the original study before citing it.  If you can't follow up to the original source for some reason, then you can cite the report directly. In general, don't cite something unless you've read it yourself."
			}
			],
		"category":"refAttribute",
		"bg":"https://source.unsplash.com/YLbx6UNLPUY"
	},{
		"question": "You did a project on language acquisition in your first year, and now you’re taking a more advanced module that covers the same ground, right down to things that are specifically relevant in the assignment. What’s the best way to deal with this overlap?",
		"answers":[
			{
				"text":"It’s efficient to re-use your relevant work from your earlier assignment, and you did this work yourself. You must edit this work slightly to make sure it fits into the newer essay.",
				"pointValue": -1,
				"feedback":"This is self-plagiarism, and it will get you in trouble. Don't do it. You will see themes repeated in different modules across your degree, but you will need to do each assignment on its own terms. You can look back to your earlier work for inspiration in the early stages, but that's it."
			},
			{
				"text":"You can quote your earlier assignment directly, just make sure to follow the conventions in the style guide for direct quotations and attribute the work to your earlier module.",
				"pointValue": 0,
				"feedback":"This is a bad idea, and it won't get you a good mark. You will see themes repeated in different modules across your degree, but you will need to do each assignment on its own terms. You can look back to your earlier work for inspiration in the early stages of preparing a new assignment, but that's it."
			},
			{
				"text":"Return to your work from the earlier module and jot down new ideas about how you can revisit some of the sources from that assignment for this one.",
				"pointValue": 3,
				"feedback":"This is the right strategy. You can look back to your earlier work for inspiration in the early stages of preparing a new assignment, but take care to prepare each assignment on its own terms."
			}
			],
		"category":"refAttribute",
		"bg":"https://source.unsplash.com/-1_RZL8BGBM"
	},{
		"question": "What's the main purpose of a list of references?",
		"answers":[
			{
				"text":"A list of references demonstrates that you are aware of conventions in the field like where to put punctuation and when to use italics. This shows engagement with linguistics.",
				"pointValue": -1,
				"feedback":"Not quite. It's good to be familiar with the ins and outs of the <a href='https://lead-ncl.gitbook.io/language-and-linguistics-style-guide/' target='_blank'>style guide</a>, but this isn't really the point. Detailed references show where your evidence comes from, and allow the reader to follow up on those sources and verify/evaluate them independently."
			},
			{
				"text":"Your list of references contains detailed information about the sources you’ve used for evidence, so that your reader can verify/evaluate those sources and/or read in more detail for themselves.",
				"pointValue": 3,
				"feedback":"This is what references are for. Your references aren't about showing off idiosyncratic use of punctuation or meeting some arbitrary threshold, they're about showing where your evidence comes from and allowing your reader to find it."
			},
			{
				"text":"Academic staff who are marking your work are looking for a specific number of primary sources for each assignment. They count the references you list to make sure you have consulted the correct number.",
				"pointValue": 0,
				"feedback":"This isn't it. While we're often looking for a breadth of evidence and multiple sources to support your points, we are not counting your references. Detailed references show where your evidence comes from, and allow the reader to follow up on those sources and veryify/evaluate them for themself."
			}
			],
		"category":"refAttribute",
		"bg":"https://source.unsplash.com/-IIIr1Hu6aY"
	},{
		"question": "You finally got your mark on an assignment you really enjoyed, and the outcome is great. What should you do with any notes or literature you used to prepare the assignment?",
		"answers":[
			{
				"text":"Since you did well on the assignment, you’ve learned what you need from it and you can securely dispose of your notes and any literature you used so you have a fresh start on the next one.",
				"pointValue": 0,
				"feedback":"Bad idea. It might be tempting to celebrate by throwing out your notes and other materials, but these can be really useful to you later. You should archive your materials, preferably digitally in the cloud, in an organised way that allows you to use them later."
			},
			{
				"text":"Archive these materials in a way that works for you, like having a dedicated folder for each module. You should have some system you use for all our module materials that means you can find them in the future as concepts and themes recur throughout your degree.",
				"pointValue": 3,
				"feedback":"Good answer. You should have a consistent, organised digital system for storing your learning materials so you can use them later as needed."
			},
			{
				"text":"You should copy and paste all your notes and coursework from your degree into a single document. You can then revisit this document as needed.",
				"pointValue": 1,
				"feedback":"This is better than chucking things away, and at least it would be searchable, but there are much better solutions. <b>You should have an organised digital system that works for you for storing your module materials for future reference</b>."
			}
			],
		"category":"orgStore",
		"bg":"https://source.unsplash.com/XN4T2PVUUgk"
	},{
		"question": "What is a reference manager for?",
		"answers":[
			{
				"text":"Aggregating, evaluating, and comparing search results from Google Scholar, JStor, Scopus, and Web of Science all in one place.",
				"pointValue": 0,
				"feedback":"Not a bad guess, but this isn't what a reference manager does. A reference manager is for orgnaizing literature, and usually has features for storing and organising files, tagging them by topic and taking notes. It can support your writing by helping you to generate al ist of references in a particular style."
			},
			{
				"text":"Storing and organizing literature, including taking notes and tagging literature for different topics. It can also be used in writing, to help generate a list of references.",
				"pointValue": 3,
				"feedback":"This is the general point of a reference manager: store, organise, annotate, and generate references. It can help to streamline your research workflow and is worth learning to use."
			},
			{
				"text":"Keeping track of employment or other references you receive from your personal tutor, seminar leaders and lecturers.",
				"pointValue": 0,
				"feedback":"Nope, not that kind of reference. A reference manager is for orgnaizing literature, and usually has features for storing and organising files, tagging them by topic and taking notes, and can support your writing by helping you to generate al ist of references in a particular style."
			}
			],
		"category":"orgStore",
		"bg":"https://source.unsplash.com/kRNZiGKtz48"
	},{
		"question": "How should you store and organise PDFs of primary literature or other sources you use for your modules and assignments?",
		"answers":[
			{
				"text":"Your printing quota should be sufficient to print all of your reading. You can store printouts in a folder/folders for future reference.",
				"pointValue": 0,
				"feedback":"You can print things to read, but this isn't a good storage solution. Storing things in the cloud on your OneDrive, where you can organise them and search them easily, is a better solution."
			},
			{
				"text":"Store the relevant files in a local folder until you are finished with a module/assignment. If you don't have your own laptop, you can return to a particular PC in the library; use this same PC to complete all your coursework in a given semester.",
				"pointValue": -1,
				"feedback":"Not a good idea. Whether you have your own laptop or not, a local folder is something you could lose if anything happens to the machine it's stored on. You should store module and assignment materials in OneDrive, where you can not only organise them and search them easily, but they'll be there no matter what happens to your laptop (or your favourite PC station in the library)."
			},
			{
				"text":"You should use cloud storage you can access from anywhere, like OneDrive, and have a system of organising files and folders that makes them easy to search or navigate later on.",
				"pointValue": 3,
				"feedback":"Good plan. You should store files relevant to your degree in a structured, systematic way, preferably in the cloud so they are always accessible."
			}
			],
		"category":"orgStore",
		"bg":"https://source.unsplash.com/aJTiW00qqtI"
	}

]