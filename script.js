var enteredKey = "";
var m=1;
var wrongChoice = 0;
var num = 0;
var streak = 0;
var maxStreak = streak;
var wrongOption = [];
var opt=0;
var alreadySelected=0;
var ranCheck = [];
var ranCheckCounter=0;
var ran;
var flag=0;
var blankSpace = 1;
var charIncompleteArray = [];
var indices = [];
var wordLength;

var my_media;
		 
var playAudio = function(audioID) {
	var audioElement = document.getElementById(audioID);
	var url = audioElement.getAttribute('src');
	
	my_media = new Audio(url,
			// success callback
			 function () { my_media.release(); },
			// error callback
			 function (err) { my_media.release(); }
	);
		   // Play audio
	my_media.play();
}

var main=function(incompleteWord,completeWord) {
	// var enteredKey;
	// playAudio("playAgainAudio");
	// playAudio("switchFlick");
	ran=returnRandom();
	// document.getElementById('query').innerHTML = incompleteWord[ran];
	wordLength = incompleteWord[ran].length;
	wordNum = 1;
	space = 0;
	spaceIndex = [];
	for (var qs=0;qs<wordLength;qs++){
		if (completeWord[ran][qs] == " "){
			spaceIndex[space] = qs;
			space++;
			wordNum++;
		}
	}
	spaceIndex[space] = wordLength;
	if(space >= 0){
		for (var s=0;s<wordNum;s++){
			// while (wordNum < space+1){
				var wordSpan = document.createElement("span");
				wordSpan.setAttribute("class","queryWord");
				wordSpan.setAttribute("id","queryWord"+s);
				// wordSpan.setAttribute("display","inline-block");
				var queryAreaElem = document.getElementById("queryArea");
				queryAreaElem.appendChild(wordSpan);
				
				var wordSpanDup = document.createElement("span");
				wordSpanDup.setAttribute("class","queryWordDup");
				wordSpanDup.setAttribute("id","queryWordDup"+s);
				// wordSpanDup.setAttribute("display","inline-block");
				var queryAreaElem = document.getElementById("queryAreaDup");
				queryAreaElem.appendChild(wordSpanDup);
				
				if(s == 0){
					p = 0;
				}
				else{
					p = spaceIndex[s-1];
				}
				for (var sI=p;sI<spaceIndex[s];sI++){
					var querySpan = document.createElement("span");
					querySpan.setAttribute("class","query");
					querySpan.setAttribute("id","query"+sI);
					querySpan.innerHTML = incompleteWord[ran][sI];
					if(incompleteWord[ran][sI] == " "){
						querySpan.innerHTML = "&nbsp;"
					}
					
					var wordSpanElem = document.getElementById("queryWord"+s);
					wordSpanElem.appendChild(querySpan);
					
					var querySpanDup = document.createElement("span");
					querySpanDup.setAttribute("class","queryDup");
					querySpanDup.setAttribute("id","queryDup"+sI);
					querySpanDup.setAttribute("style","visibility:hidden");
					querySpanDup.innerHTML = completeWord[ran][sI];
					if(completeWord[ran][sI] == " "){
						querySpanDup.innerHTML = "&nbsp;"
					}
					
					var wordSpanElem = document.getElementById("queryWordDup"+s);
					wordSpanElem.appendChild(querySpanDup);
				}
			}
		}
	
	for (var i=0;i<incompleteWord[ran].length;i++){
		charIncompleteArray[i]=incompleteWord[ran][i];
	}
	
	document.getElementById('current').innerHTML = streak;
	 $(document).keypress(function(event){
		enteredKey = String.fromCharCode(event.keyCode);
		enteredKey = enteredKey.toUpperCase();
		if (wrongChoice < 5 && flag==0) {
			compare(completeWord[ran],enteredKey,ran);
		}
		// else {
			// document.getElementById('wrong_ans').innerHTML = wrongChoice;
			// document.getElementById("GameOverMessage").innerHTML = "Could not complete in given steps of " + wrongChoice;
		// }
	});
};

var returnRandom= function() {
	bestStr = localStorage.getItem("bestS")== null?0:localStorage.getItem("bestS");
	ran = Math.floor(Math.random() * incompleteWord.length);
	if (ranCheck.length === 0){
		ranCheck[0] = ran;
		return ran;
	}
	else {
		ranCheckCounter=ranCheck.length-5;
		if (ranCheckCounter<0) {
				ranCheckCounter=0;
		}
		while (ranCheckCounter<ranCheck.length) {
			while (ranCheck[ranCheckCounter]===ran) {
				ran = Math.floor(Math.random() * incompleteWord.length);
			}	
			ranCheckCounter=ranCheckCounter+1;
		}
		ranCheck[ranCheck.length]=ran;
		return ran;
	}
 }

var resetFunc = function(){
	ran=returnRandom();
	blankSpace = 1;
	incompleteArrayWord = "";
	// document.getElementById('query').innerHTML = incompleteWord[ran];
	var querySpanArea = document.getElementById("queryArea");
	while(querySpanArea.firstChild){
		querySpanArea.removeChild(querySpanArea.firstChild);
	}
	var querySpanAreaDup = document.getElementById("queryAreaDup");
	while(querySpanAreaDup.firstChild){
		querySpanAreaDup.removeChild(querySpanAreaDup.firstChild);
	}
	wordLength = completeWord[ran].length;
	wordNum = 1;
	space = 0;
	spaceIndex = [];
	for (var qs=0;qs<wordLength;qs++){
		if (completeWord[ran][qs] == " "){
			spaceIndex[space] = qs;
			space++;
			wordNum++;
		}
	}
	spaceIndex[space] = wordLength;
	if(space >= 0){
		for (var s=0;s<wordNum;s++){
			// while (wordNum < space+1){
				var wordSpan = document.createElement("span");
				wordSpan.setAttribute("class","queryWord");
				wordSpan.setAttribute("id","queryWord"+s);
				// wordSpan.setAttribute("display","inline-block");
				var queryAreaElem = document.getElementById("queryArea");
				queryAreaElem.appendChild(wordSpan);
				
				var wordSpanDup = document.createElement("span");
				wordSpanDup.setAttribute("class","queryWordDup");
				wordSpanDup.setAttribute("id","queryWordDup"+s);
				// wordSpanDup.setAttribute("display","inline-block");
				var queryAreaElem = document.getElementById("queryAreaDup");
				queryAreaElem.appendChild(wordSpanDup);
				
				if(s == 0){
					p = 0;
				}
				else{
					p = spaceIndex[s-1];
				}
				for (var sI=p;sI<spaceIndex[s];sI++){
					var querySpan = document.createElement("span");
					querySpan.setAttribute("class","query");
					querySpan.setAttribute("id","query"+sI);
					querySpan.innerHTML = incompleteWord[ran][sI];
					if(incompleteWord[ran][sI] == " "){
						querySpan.innerHTML = "&nbsp;"
					}
					
					var wordSpanElem = document.getElementById("queryWord"+s);
					wordSpanElem.appendChild(querySpan);
					
					var querySpanDup = document.createElement("span");
					querySpanDup.setAttribute("class","queryDup");
					querySpanDup.setAttribute("id","queryDup"+sI);
					querySpanDup.setAttribute("style","visibility:hidden");
					querySpanDup.innerHTML = completeWord[ran][sI];
					if(completeWord[ran][sI] == " "){
						querySpanDup.innerHTML = "&nbsp;"
					}
					
					var wordSpanElem = document.getElementById("queryWordDup"+s);
					wordSpanElem.appendChild(querySpanDup);
				}
			// }
		}
	}
	for (var ch=0;ch<incompleteWord[ran].length;ch++){
		charIncompleteArray[ch] = incompleteWord[ran][ch];
		charIncompleteArray.splice(incompleteWord[ran].length,charIncompleteArray.length);
	}
	document.getElementById('play_again').innerHTML = "Skip";
}

var compare=function(word,enteredKey,ran) {
		var changed = 0;
		var index = 0;
		var ind = 0;
		var indice = 0;
		var indices = [];
		var inWord;
		var a = [];
		incompleteArrayWord = "";
		
		var as = 0;
		var inde = 0;
		var correctIndex = [];
		
		while (index<word.length){
			if (enteredKey === word[index]){
				if (document.getElementById("query"+index).innerHTML != "_"){
					indices[indice++] = index;
				}
				else{
					correctIndex[inde++] = index;
					playAudio("correctLetter");
				}
				charIncompleteArray[index] = enteredKey;
				for (var i=0;i<incompleteWord[ran].length;i++){
					incompleteArrayWord += charIncompleteArray[i];
				}
				changed = 1;
			}
			index++;
		}
		a.length = 0;
		if (indices.length > 0){
			unMatch = 0;
			// a = "";
			a.length = completeWord[ran].length;
			for (var al=0;al<a.length;al++){
				a[al] = null;
			}
			for (var indic=0;indic<indices.length;indic++){
				if(unMatch<word.length){
					for(var unMatched=unMatch;unMatched<indices[indic];unMatched++){
						a[unMatched] = document.getElementById("query"+unMatched).innerHTML;
					}
					// a[unMatched] = "<span class='shake'>" + document.getElementById("query"+unMatched).innerHTML + "</span>";
					a[unMatched] = document.getElementById("query"+unMatched).innerHTML;
					// var addCss = document.getElementById("query"+unMatched);
					// addCss.setAttribute("class","shake");
					unMatch = indices[indic]+1;
				}
			}
			if(unMatch<word.length){
				for(var um=unMatch;um<word.length;um++){
					a[um] = document.getElementById("query"+um).innerHTML;
				}
			}
			
		}
		inWord = "";
		for (var cia=0;cia<charIncompleteArray.length;cia++){
			inWord += charIncompleteArray[cia];
		}
		
		blankSpace = 0;
		for (var j=0;j<incompleteWord[ran].length;j++){
			if (charIncompleteArray[j]==='_'){
				blankSpace = blankSpace+1;
			}
		}
		//if some letters are still remaining
		if (blankSpace > 0){
			if(a.length!=0){
				playAudio("selectedLetter");
				var querySpanArea = document.getElementById("queryArea");
				while(querySpanArea.firstChild){
					querySpanArea.removeChild(querySpanArea.firstChild);
				}
			
				matchedSpan = [];
				ms = 0;
				wordLength = completeWord[ran].length;
				
				// if(space >= 0){
					for (var s=0;s<wordNum;s++){
						// while (wordNum < space+1){
							var wordSpan = document.createElement("span");
							wordSpan.setAttribute("class","queryWord");
							wordSpan.setAttribute("id","queryWord"+s);
							wordSpan.setAttribute("display","inline-block");
							var queryAreaElem = document.getElementById("queryArea");
							queryAreaElem.appendChild(wordSpan);
							
							
							if(s == 0){
								p = 0;
							}
							else{
								p = spaceIndex[s-1];
							}
							for (var sI=p;sI<spaceIndex[s];sI++){
								var querySpan = document.createElement("span");
								querySpan.setAttribute("class","query");
								querySpan.setAttribute("id","query"+sI);
								querySpan.innerHTML = a[sI];
								if(a[sI] == " "){
									querySpan.innerHTML = "&nbsp;"
								}
								
								var wordSpanElem = document.getElementById("queryWord"+s);
								wordSpanElem.appendChild(querySpan);
								
							}
							// }
						}
					// }
					
					for (var qsA=0;qsA<wordLength;qsA++){
						if (a[qsA] == enteredKey){
							matchedSpan[ms++] = qsA;
							
						}
					}
				
				if (matchedSpan.length > 0){
				
					for (var msl=0;msl<matchedSpan.length;msl++){
						var mSpan = document.getElementById("query"+matchedSpan[msl]);
						mSpan.classList.add("shake1");
					}
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake1");
							mSpan.classList.add("shake2");
						}
					},50);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake2");
							mSpan.classList.add("shake3");
						}
					},100);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake3");
							mSpan.classList.add("shake4");
						}
					},150);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake4");
							mSpan.classList.add("shake0");
						}
					},200);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake0");
							mSpan.classList.add("shake1");
						}
					},250);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake1");
							mSpan.classList.add("shake2");
						}
					},300);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake2");
							mSpan.classList.add("shake3");
						}
					},350);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake3");
							mSpan.classList.add("shake4");
						}
					},400);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake4");
							mSpan.classList.add("shake2");
						}
					},450);
					setTimeout(function(){
						for (var msl=0;msl<matchedSpan.length;msl++){
							var mSpan = document.getElementById("query"+matchedSpan[msl]);
							mSpan.classList.remove("shake2");
							mSpan.classList.add("shake0");
						}
					},500);
				}

				// document.getElementById('query').innerHTML = a;
				var keyElem = document.getElementsByClassName("keys");
				for(var keyEle=0;keyEle<keyElem.length;keyEle++){
					keyElem[keyEle].disabled = true;
				}
				setTimeout(function(){
					var querySpanArea = document.getElementById("queryArea");
					while(querySpanArea.firstChild){
						querySpanArea.removeChild(querySpanArea.firstChild);
					}
					wordLength = completeWord[ran].length;
					for (var s=0;s<wordNum;s++){
						// while (wordNum < space+1){
							var wordSpan = document.createElement("span");
							wordSpan.setAttribute("class","queryWord");
							wordSpan.setAttribute("id","queryWord"+s);
							wordSpan.setAttribute("display","inline-block");
							var queryAreaElem = document.getElementById("queryArea");
							queryAreaElem.appendChild(wordSpan);
							
							
							if(s == 0){
								p = 0;
							}
							else{
								p = spaceIndex[s-1];
							}
							for (var sI=p;sI<spaceIndex[s];sI++){
								var querySpan = document.createElement("span");
								querySpan.setAttribute("class","query");
								querySpan.setAttribute("id","query"+sI);
								querySpan.innerHTML = inWord[sI];
								if(inWord[sI] == " "){
									querySpan.innerHTML = "&nbsp;"
								}
								
								var wordSpanElem = document.getElementById("queryWord"+s);
								wordSpanElem.appendChild(querySpan);
								
							}
							// }
						}
					var keyElem = document.getElementsByClassName("keys");
					for(var keyEle=0;keyEle<keyElem.length;keyEle++){
						keyElem[keyEle].disabled = false;
					}
				},500);
			}
			else{
				for(var ci = 0;ci<correctIndex.length;ci++){
					var animSpan = document.getElementById("queryDup"+correctIndex[ci]);
					animSpan.setAttribute("style","visibility:visible");
				}
				
				t = 0;
				h = 5;
				time = 100;
				// while (time < 1100){
					function animateKeyPlaceState(){
						setTimeout(function(){
							var keyElem = document.getElementsByClassName("keys");
							for(var keyEle=0;keyEle<keyElem.length;keyEle++){
								keyElem[keyEle].disabled = true;
							}
							t -= 1;
							// for(var cid = 0;cid<correctIndex.length;cid++){
								document.getElementById("queryAreaDup").setAttribute("style","margin-top:"+ t + "px;");
							// }
							time += 11;
							if (time < 1000){
								animateKeyPlaceState();
							}
							else{
								placeLetter();
							}
						},10);
					}
					
				animateKeyPlaceState();
				
				function placeLetter(){
					document.getElementById("queryAreaDup").setAttribute("style","margin-top:"+ 0 + "px;");
					var keyElem = document.getElementsByClassName("keys");
					for(var keyEle=0;keyEle<keyElem.length;keyEle++){
						keyElem[keyEle].disabled = false;
					}
					for(var ci = 0;ci<correctIndex.length;ci++){
						var animSpan = document.getElementById("queryDup"+correctIndex[ci]);
						animSpan.setAttribute("style","visibility:hidden");
					}
					var querySpanArea = document.getElementById("queryArea");
					while(querySpanArea.firstChild){
						querySpanArea.removeChild(querySpanArea.firstChild);
					}
					wordLength = completeWord[ran].length;
					// for (var qs=0;qs<wordLength;qs++){
						if(space >= 0){
							for (var s=0;s<wordNum;s++){
								// while (wordNum < space+1){
									var wordSpan = document.createElement("span");
									wordSpan.setAttribute("class","queryWord");
									wordSpan.setAttribute("id","queryWord"+s);
									wordSpan.setAttribute("display","inline-block");
									var queryAreaElem = document.getElementById("queryArea");
									queryAreaElem.appendChild(wordSpan);
									
									
									if(s == 0){
										p = 0;
									}
									else{
										p = spaceIndex[s-1];
									}
									for (var sI=p;sI<spaceIndex[s];sI++){
										var querySpan = document.createElement("span");
										querySpan.setAttribute("class","query");
										querySpan.setAttribute("id","query"+sI);
										querySpan.innerHTML = charIncompleteArray[sI];
										if(charIncompleteArray[sI] == " "){
											querySpan.innerHTML = "&nbsp;"
										}
										
										var wordSpanElem = document.getElementById("queryWord"+s);
										wordSpanElem.appendChild(querySpan);
										
									}
									// }
								}
							}
						
						
						// var querySpan = document.createElement("span");
						// querySpan.setAttribute("class","query");
						// querySpan.setAttribute("id","query"+qs);
						// if(wrongChoice == 5){
							// querySpan.innerHTML = completeWord[ran][qs];
						// }
						// else{
							// querySpan.innerHTML = charIncompleteArray[qs];
						// }
						
						
						// var queryAreaElem = document.getElementById("queryArea");
						// queryAreaElem.appendChild(querySpan);
					// }
				}
				
				// document.getElementById('query').innerHTML = charIncompleteArray.join("");
			}
		}
		//if all letters are matched
		else {
			playAudio("correctAnswerComplete");
			var keyElem = document.getElementsByClassName("keys");
			for(var keyEle=0;keyEle<keyElem.length;keyEle++){
				keyElem[keyEle].disabled = true;
			}
			// document.getElementById('query').innerHTML = word;
			var querySpanArea = document.getElementById("queryArea");
			while(querySpanArea.firstChild){
				querySpanArea.removeChild(querySpanArea.firstChild);
			}
			wordLength = completeWord[ran].length;
			for (var qs=0;qs<wordLength;qs++){
				if(space >= 0){
					for (var s=0;s<wordNum;s++){
						// while (wordNum < space+1){
							var wordSpan = document.createElement("span");
							wordSpan.setAttribute("class","queryWord");
							wordSpan.setAttribute("id","queryWord"+s);
							wordSpan.setAttribute("display","inline-block");
							var queryAreaElem = document.getElementById("queryArea");
							queryAreaElem.appendChild(wordSpan);
							
							
							if(s == 0){
								p = 0;
							}
							else{
								p = spaceIndex[s-1];
							}
							for (var sI=p;sI<spaceIndex[s];sI++){
								var querySpan = document.createElement("span");
								querySpan.setAttribute("class","query");
								querySpan.setAttribute("id","query"+sI);
								querySpan.innerHTML = word[qs];
								if(word[qs] == " "){
									querySpan.innerHTML = "&nbsp;"
								}
								
								var wordSpanElem = document.getElementById("queryWord"+s);
								wordSpanElem.appendChild(querySpan);
								
							}
							// }
						}
					}
				
				
				// var querySpan = document.createElement("span");
				// querySpan.setAttribute("class","query");
				// querySpan.setAttribute("id","query"+qs);
				// querySpan.innerHTML = word[qs];
				
				// var queryAreaElem = document.getElementById("queryArea");
				// queryAreaElem.appendChild(querySpan);
			}
			// document.getElementById('chances').innerHTML = "You are correct!!";
			streak++;
			document.getElementById('current').innerHTML = streak;
			localStorage.setItem("bestS",Math.max(streak,bestStr));
			document.getElementById('best').innerHTML = localStorage.getItem("bestS");
			// if (streak<maxStreak)
				// maxStreak=maxStreak;
			// else 
				// maxStreak=streak;
			// localStorage.setItem("best",Math.max(maxStreak,bestStr));
			// document.getElementById('best').innerHTML = maxStreak;
			document.getElementById('play_again').innerHTML = "Next";
			// document.getElementById('play_again').classList.add("shake-slow");
			var pAgain = document.getElementById('play_again');
			pAgain.setAttribute("class","shake-slow1");
			setTimeout(function(){
				pAgain.classList.remove("shake-slow1");
				pAgain.classList.add("shake-slow2");
			},50);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow2");
				pAgain.classList.add("shake-slow3");
			},100);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow3");
				pAgain.classList.add("shake-slow4");
			},150);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow4");
				pAgain.classList.add("shake-slow1");
			},200);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow1");
				pAgain.classList.add("shake-slow2");
			},250);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow2");
				pAgain.classList.add("shake-slow3");
			},300);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow3");
				pAgain.classList.add("shake-slow4");
			},350);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow4");
				pAgain.classList.add("shake-slow1");
			},400);
			setTimeout(function(){
				pAgain.classList.remove("shake-slow1");
				pAgain.classList.add("shake-slow0");
			},450);
			
			var keyElem = document.getElementsByClassName("keys");
			for(var keyEle=0;keyEle<keyElem.length;keyEle++){
				keyElem[keyEle].disabled = true;
			}
			
			$("<div/>", {
					id: "correctState",
					text: "Hurray!!!You are correct",
					// class: 'verticalM',
					
					// style: "height: '400px',margin-top= 0px",
					// width: '70px',
			}).appendTo(document.getElementById("game_area"));
			
			t = 0;
			h = 5;
			time = 100;
			// while (time < 1100){
				function animateState(){
					setTimeout(function(){
						t -= 1;
						h += 0.2;
						document.getElementById("correctState").setAttribute("style","color:#ffffff;margin-top:"+ t + "px;"+"font-family: myFirstFont;font-size:"+h+"px");
						time += 11;
						if (time < 1750){
							animateState();
						}
					},10);
				}
				
			animateState();
				
			// }
			// var correctStatement = document.createElement("span");
			// correctStatement.setAttribute("id","correctState");
			// correctStatement.setAttribute("style","position:relative");
			// correctStatement.setAttribute("style","animation-duration:13s;animation-name:verticalMove");
			// correctStatement.innerHTML = "You Are Correct";
			
			// var playArea = document.getElementById("play_area");
			// playArea.appendChild(correctStatement);
			
			// $('#play_area').on('correctState',function(){
				// $(this).addClass('verticalM');
			// });
			
			// document.getElementById("play_again").appendChild(btn);
			flag=1;
		} 	

		opt = 0;
		alreadySelected = 0;
		
		//executes when enteredKey is not present anywhere in the word
		if (changed === 0 ){
			//while loop to ensure no wrong choice repeats
			while(opt<wrongChoice){
				if (enteredKey === wrongOption[opt]){
					alreadySelected = 1;
					playAudio("selectedLetter");
					// document.getElementById("wrong_choices"+(opt+1)).classList.add("shake");
					var wCh = document.getElementById("wrong_choices"+(opt+1));
					// wCh.setAttribute("class","shake");
					setTimeout(function(){
						wCh.classList.remove("shake1");
						wCh.classList.add("shake2");
					},50);
					setTimeout(function(){
						wCh.classList.remove("shake2");
						wCh.classList.add("shake3");
					},100);
					setTimeout(function(){
						wCh.classList.remove("shake3");
						wCh.classList.add("shake4");
					},150);
					setTimeout(function(){
						wCh.classList.remove("shake4");
						wCh.classList.add("shake0");
					},200);
					setTimeout(function(){
						wCh.classList.remove("shake0");
						wCh.classList.add("shake1");
					},250);
					setTimeout(function(){
						wCh.classList.remove("shake1");
						wCh.classList.add("shake2");
					},300);
					setTimeout(function(){
						wCh.classList.remove("shake2");
						wCh.classList.add("shake3");
					},350);
					setTimeout(function(){
						wCh.classList.remove("shake3");
						wCh.classList.add("shake4");
					},400);
					setTimeout(function(){
						wCh.classList.remove("shake4");
						wCh.classList.add("shake2");
					},450);
					setTimeout(function(){
						wCh.classList.remove("shake2");
						wCh.classList.add("shake0");
					},500);
					
					// wCh.classList.add("shake1");
					// setTimeout(function(){
						// wCh.classList.remove("shake1");
						// wCh.classList.add("shake2");
					// },150);
					// setTimeout(function(){
						// wCh.classList.remove("shake2");
						// wCh.classList.add("shake1");
					// },300);
					// setTimeout(function(){
						// wCh.classList.remove("shake1");
					// },450);

					var keyElem = document.getElementsByClassName("keys");
					for(var keyEle=0;keyEle<keyElem.length;keyEle++){
						keyElem[keyEle].disabled = true;
					}
					setTimeout(function(){
						document.getElementById("wrong_choices"+(opt+1)).classList.remove("shake");
						var keyElem = document.getElementsByClassName("keys");
						for(var keyEle=0;keyEle<keyElem.length;keyEle++){
							keyElem[keyEle].disabled = false;
						}
					}, 500);
					break;
				}
				else{
					opt++;
					alreadySelected = 0;
				}
			}
			//executes when unique wrong choice is selected
			if (alreadySelected === 0){
				playAudio("wrongLetter");
				wrongOption[wrongChoice] = enteredKey;
				wrongChoice = wrongChoice+1;
				document.getElementById('wrong_choices'+(opt+1)).innerHTML = enteredKey;
				// $('<span>').text(enteredKey+" ").appendTo("#wrong_choices");
				// document.getElementById('chances').innerHTML = "Chances Left - "+(5-wrongChoice);
				//Switch block to draw the graphic
				switch(wrongChoice) {
					case 1:
						// document.getElementById("wrong_choices1").innerHTML = enteredKey;
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_2.png");
						x.setAttribute("style", "height:15%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 2:
						// document.getElementById("wrong_choices2").innerHTML = enteredKey;
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_3.png");
						x.setAttribute("style", "height:15%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 3:
						// document.getElementById("wrong_choices3").innerHTML = enteredKey;
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_4.png");
						x.setAttribute("style", "height:15%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 4:
						// document.getElementById("wrong_choices4").innerHTML = enteredKey;
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/cartoon_5.png");
						x.setAttribute("style", "height:15%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						break;
					case 5:
						playAudio("wrongAnswerComplete");
						// document.getElementById("wrong_choices5").innerHTML = enteredKey;
						while (document.getElementById("cartoon").firstChild){
							document.getElementById("cartoon").removeChild(document.getElementById("cartoon").firstChild);
						}
						var x = document.createElement("IMG");
						x.setAttribute("src", "images/animation.gif");
						x.setAttribute("style", "height:15%");
						// x.setAttribute("width", "123");
						document.getElementById("cartoon").appendChild(x);
						// document.getElementById('chances').innerHTML = "Game Over";
						var querySpanArea = document.getElementById("queryArea");
						while(querySpanArea.firstChild){
							querySpanArea.removeChild(querySpanArea.firstChild);
						}
						wordLength = completeWord[ran].length;
						for (var qs=0;qs<wordLength;qs++){
							var querySpan = document.createElement("span");
							querySpan.setAttribute("class","query");
							querySpan.setAttribute("id","query"+qs);
							querySpan.innerHTML = word[qs];
							if(word[qs] == " "){
								querySpan.innerHTML = "&nbsp;"
							}
							
							var queryAreaElem = document.getElementById("queryArea");
							queryAreaElem.appendChild(querySpan);
						}
						streak=0;
						document.getElementById('current').innerHTML = streak;
						document.getElementById('play_again').innerHTML = "Play Again";
						// document.getElementById("play_again").appendChild(btn);
						flag=1;	
						var keyElem = document.getElementsByClassName("keys");
						for(var keyEle=0;keyEle<keyElem.length;keyEle++){
							keyElem[keyEle].disabled = true;
						}
						$("<div/>", {
								id: "correctState",
								text: "You missed it",
								// class: 'verticalM',
								
								// style: "height: '400px',margin-top= 0px",
								// width: '70px',
						}).appendTo(document.getElementById("game_area"));
						
						t = 0;
						h = 5;
						time = 100;
						// while (time < 1100){
							function animateFailedState(){
								setTimeout(function(){
									t -= 1;
									h += 0.3;
									document.getElementById("correctState").setAttribute("style","color:#ffffff;margin-top:"+ t + "px;"+"font-family: myFirstFont;font-size:"+h+"px");
									time += 11;
									if (time < 1750){
										animateFailedState();
									}
								},10);
							}
							
						animateFailedState();
						break;
					default:		
				}
			}
			
		}
}

//on clicking play again
function playAgain(){
	playAudio("playAgainAudio");
	var elem = document.getElementById("correctState");
	if(elem != null){
		elem.parentNode.removeChild(elem);
	}
	
	if(blankSpace == 1){
		document.getElementById('current').innerHTML = 0;
		streak = 0;
	}
	var keyElem = document.getElementsByClassName("keys");
	for(var keyEle=0;keyEle<keyElem.length;keyEle++){
		keyElem[keyEle].disabled = false;
	}
	num = num + 1;
	flag=0;
	wrongChoice = 0;
	// document.getElementsByClassName('wrong_choices').innerHTML = "&nbsp;";
	for (var wc=1;wc<6;wc++){
		document.getElementById('wrong_choices'+wc).innerHTML = "";
	}
	document.getElementById('wrong_choices1').innerHTML = "&nbsp;";
	document.getElementById('cartoon').innerHTML = "";
	// document.getElementById('chances').innerHTML = "Chances Left - "+(5-wrongChoice);
	document.getElementById('play_again').innerHTML = "Play Again";
	var x = document.createElement("IMG");
	x.setAttribute("src", "images/cartoon_1.png");
	x.setAttribute("style", "height:15%");
	// x.setAttribute("width", "123");
	document.getElementById("cartoon").appendChild(x);
	resetFunc();
}

function registerEnteredKey(keyEntered){
	keyEntered.setAttribute("style","transition-timing-function:ease-in;transition:0.1s;transform:translateX(0%) translateY(-25%);");
	// playAudio("keyPressAudio");
	setTimeout(function(){
		keyEntered.setAttribute("style","font-size: 1.4em;");
		enteredKey = keyEntered.innerHTML;
		enteredKey = enteredKey.toUpperCase();
		compare(completeWord[ran],enteredKey,ran);
	},300);
	
}

