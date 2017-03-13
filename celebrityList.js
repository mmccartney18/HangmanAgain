function celebrityList(){
	var list = [];
	list.push({id: 1,
		incompWord: "A_I_A__",
		compWord: "AMITABH"});
		
	list.push({id: 2,
		incompWord: "A__I__E_",
		compWord: "ABHISHEK"});
	
	list.push({id: 3,
		incompWord: "__A__U__",
		compWord: "SHAHRUKH"});
	
	incompleteWord = [];
	completeWord = [];
	for (var inc = 0;inc<list.length;inc++){
		incompleteWord.push(list[inc].incompWord);
	}
	for (var com = 0;com<list.length;com++){
		completeWord.push(list[com].compWord);
	}
	main(incompleteWord,completeWord)
}