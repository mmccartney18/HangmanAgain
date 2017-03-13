function hollywoodList(){
	var list = [];
	list.push({incompWord: "_I_A_I_",
		compWord: "TITANIC"});
		
	list.push({incompWord: "A_E__E_",
		compWord: "AVENGER"});
	
	list.push({incompWord: "_U_A__I_ _O__D",
		compWord: "JURASSIC WORLD"});
	
	list.push({incompWord: "__E _U__E_ _A_ES",
		compWord: "THE HUNGER GAMES"});
		
	list.push({incompWord: "__E _A__ _NI___ _I_E_",
		compWord: "THE DARK KNIGHT RISES"});
		
	list.push({incompWord: "__O_E_",
		compWord: "FROZEN"});
	
	list.push({incompWord: "__E _U___E _OO_",
		compWord: "THE JUNGLE BOOK"});
	
	list.push({incompWord: "_I_IO__",
		compWord: "MINIONS"});
	
	list.push({incompWord: "A_I_E I_ _O__E__A__",
		compWord: "ALICE IN WONDERLAND"});
		
	list.push({incompWord: "__A__F___E__",
		compWord: "TRANSFORMERS"});
	
	list.push({incompWord: "_O_E __O_E",
		compWord: "HOME ALONE"});
	
	list.push({incompWord: "__E _A __NC_ _O_E",
		compWord: "THE DA VINCI CODE"});
		
	list.push({incompWord: "_A__ O_ __E __A_E_ O_ __E A__S",
		compWord: "DAWN OF THE PLANET OF THE APPS"});
		
	list.push({incompWord: "_I_ _E_O _",
		compWord: "BIG HERO 6"});
	
	list.push({incompWord: "__A_I__",
		compWord: "GRAVITY"});
	
	list.push({incompWord: "I__I_E _U_",
		compWord: "INSIDE OUT"});
	
	//17
	list.push({incompWord: "_I__I__ _E_O",
		compWord: "FINDING NEMO"});
		
	list.push({incompWord: "__E _O__A__E_",
		compWord: "THE GODFATHER"});
		
	list.push({incompWord: "__E _O__ O_ __E _I__S",
		compWord: "THE LORD OF THE RINGS"});
	
	list.push({incompWord: "__E _OO_ __E _A_ A__ __E U_L_",
		compWord: "THE GOOD THE BAD AND THE UGLY"});
	
	list.push({incompWord: "I__E__I__",
		compWord: "INCEPTION"});
		
	list.push({incompWord: "__E _A__I_",
		compWord: "THE MATRIX"});
	
	list.push({incompWord: "_E_E_ _A__R_I",
		compWord: "SEVEN SAMURAI"});
		
	list.push({incompWord: "_I_E I_ _E_U_I_U_",
		compWord: "LIFE IS BEAUTIFUL"});
		
	list.push({incompWord: "I__E___E__A_",
		compWord: "INTERSTELLAR"});
		
	list.push({incompWord: "_E__I_A_O_ _",
		compWord: "TERMINATOR 2"});
		
	list.push({incompWord: "_L_DI_T__",
		compWord: "GLADIATOR"});
		
	list.push({incompWord: "A_O_A___S_ _O_",
		compWord: "APOCALYPSE NOW"});
		
	list.push({incompWord: "__E __E__I_E",
		compWord: "THE PRESTIGE"});
		
	list.push({incompWord: "_H_ _I__ _I_G",
		compWord: "THE LION KING"});
		
	list.push({incompWord: "_H_ _R_A_ _I_T_T_R",
		compWord: "THE GREAT DICTATOR"});
		
	list.push({incompWord: "_O _I__ _ _O__I_G_I_D",
		compWord: "TO KILL A MOCKINGBIRD"});
		
	list.push({incompWord: "__I__E_ O_ _E__E_",
		compWord: "CHILDREN OF HEAVEN"});
		
	list.push({incompWord: "_H_ __E_T E___PE",
		compWord: "THE GREAT ESCAPE"});
		
	list.push({incompWord: "T_E _E__E_ __ T_E__ E_E_",
		compWord: "THE SECRET IN THEIR EYES"});
		
	list.push({incompWord: "_ _E_U_I__L _I__",
		compWord: "A BEAUTIFUL MIND"});
		
	list.push({incompWord: "_O _OU___Y _O_ O__ _E_",
		compWord: "NO COUNTRY FOR OLD MEN"});
		
	list.push({incompWord: "_O_ _O __AI_ _O__ __A_O_",
		compWord: "HOW TO TRAIN YOUR DRAGON"});
		
	list.push({incompWord: "_O_E _I__",
		compWord: "GONE GIRL"});
	
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