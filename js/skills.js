



//initiate webslides, suppressing change on click
window.ws = new WebSlides({changeOnClick:false,loop:false,navigateOnScroll:false,showIndex:false,slideOffset:10000});


function shuffle(myArray) {
  let currentIndex = myArray.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [myArray[currentIndex], myArray[randomIndex]] = [
      myArray[randomIndex], myArray[currentIndex]];
  }

  return myArray;
}

var points={"searchEval":0,"refAttribute":0,"planScope":0,"orgStore":0}

// Used like so
var arr = [0,1,2,3,4,5,6,7,8,9,10,11];
var order = shuffle(arr);
var qno=0

var pAlloc = {"answerA":0, "answerB":0,"answerC":0}
//var slideLoc = {"answerA":0, "answerB":0,"answerC":0}

function setQuestion(qDict) {
	var ansOrder=[0,1,2]
	ansOrder=shuffle(ansOrder)
	var wholeq = (qno+1).toString() + ". "+qDict.question
	$("#question").html(wholeq)
	$('#qBackground').css('background-image', 'url(' + qDict.bg + ')');
	$("#answerA").html(qDict.answers[ansOrder[0]].text)
	$("#answerB").html(qDict.answers[ansOrder[1]].text)
	$("#answerC").html(qDict.answers[ansOrder[2]].text)

	pAlloc["answerA"] = qDict.answers[ansOrder[0]].pointValue
	pAlloc["answerB"] = qDict.answers[ansOrder[1]].pointValue
	pAlloc["answerC"] = qDict.answers[ansOrder[2]].pointValue
	//populate feedback slides

	if (pAlloc["answerA"]==0) {
		$("#zeroFeedback").html(qDict.answers[ansOrder[0]].feedback)
	} else if (pAlloc["answerA"]==1) {
		$("#oneFeedback").html(qDict.answers[ansOrder[0]].feedback)
	} else if (pAlloc["answerA"]==-1) {
		$("#zeroTwoFeedback").html(qDict.answers[ansOrder[0]].feedback)
	} else if (pAlloc["answerA"]==3){
		$("#maxFeedback").html(qDict.answers[ansOrder[0]].feedback)
	}

	if (pAlloc["answerB"]==0) {
		$("#zeroFeedback").html(qDict.answers[ansOrder[1]].feedback)
	} else if (pAlloc["answerB"]==-1) {
		$("#zeroTwoFeedback").html(qDict.answers[ansOrder[1]].feedback)
	} else if (pAlloc["answerB"]==1) {
		$("#oneFeedback").html(qDict.answers[ansOrder[1]].feedback)
	} else if (pAlloc["answerB"]==3) {
		$("#maxFeedback").html(qDict.answers[ansOrder[1]].feedback)
	}

	if (pAlloc["answerC"]==0) {
		$("#zeroFeedback").html(qDict.answers[ansOrder[2]].feedback)
	} else if (pAlloc["answerC"]==-1) {
		$("#zeroTwoFeedback").html(qDict.answers[ansOrder[2]].feedback)
	} else if (pAlloc["answerC"]==1) {
		$("#oneFeedback").html(qDict.answers[ansOrder[2]].feedback)
	} else if (pAlloc["answerC"]==3) {
		$("#maxFeedback").html(qDict.answers[ansOrder[2]].feedback)
	}
}

function setBg (el, score) {
	console.log(el," score is ", score)
	if (score<=30) {
		$(el).css('background-color',"#F4AC45")
		console.log("doing orange")
	} else if (score >30 && score < 60) {
		$(el).css('background-color',"#F07F9F")
		console.log("doing poink")
	} else if (score >=60 && score<100) {
		$(el).css('background-color',"#8AC6D0")
		console.log("doing dark blue")
	} else {
		$(el).css('background-color',"#B8F3FF")
		console.log("doing light blue")
	}
}
$(document).ready(function() {
	//hide navigation controls
	$("#navigation").hide()
	setQuestion(allQuestions[order[qno]])
	$("#start").click(function() {
		console.log("startclicked")
		ws.goToSlide(1)
	})

	$(".answer").click(function(event) {
		var clickedID=event.target.id
		console.log(clickedID)
		//add to score for the category
		var category=allQuestions[order[qno]].category
		if (pAlloc[clickedID]==0) {
			ws.goToSlide(3)
		} else if (pAlloc[clickedID]==-1) {
			ws.goToSlide(2)
		} else if (pAlloc[clickedID]==1) {
			points[category]+=1
			ws.goToSlide(4)
		} else if (pAlloc[clickedID]==3) {
			points[category]+=3
			ws.goToSlide(5)
		}
		//go to slide based on point value
	})

	$(".next").click(function() {
		console.log("nextflick")
		qno+=1
		console.log("qno is:",qno)
		if (qno>=12) {
			//set up results and go to the end
			var searchEval=Math.floor((points["searchEval"]/9)*100)
			var planScope=Math.floor((points["planScope"]/9)*100)
			var refAttribute=Math.floor((points["refAttribute"]/9)*100)
			var orgStore=Math.floor((points["orgStore"]/9)*100)
			$("#searchEvalScore").text(searchEval.toString()+"%")
			$("#planScopeScore").text(planScope.toString()+"%")
			$("#refAttributeScore").text(refAttribute.toString()+"%")
			$("#orgStoreScore").text(orgStore.toString()+"%")
			setBg(".planScopeColour",planScope)
			setBg(".refAttributeColour",refAttribute)
			setBg(".orgStoreColour",orgStore)
			setBg(".searchEvalColour",searchEval)

			ws.goToSlide(6)
		} else {
			setQuestion(allQuestions[order[qno]])
			$("#qnum").text((qno+1).toString())
			ws.goToSlide(1)
		}
	})
	//

	




});