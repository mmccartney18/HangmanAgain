function authorList(){
	var list = [];
	list.push({incompWord: "_A__I_ C_A__RA C_A___RJ__",
		compWord: "BANKIM CHANDRA CHATTERJEE"});
		
	list.push({incompWord: "_RE__H__D",
		compWord: "PREMCHAND"});
	
	list.push({incompWord: "__BI_D____TH T_GO_E",
		compWord: "RABINDRANATH TAGORE"});
	
	list.push({incompWord: "A___A _E_A_",
		compWord: "ANITA DESAI"});
		
	list.push({incompWord: "A_UN__A_I _O_",
		compWord: "ARUNDHATI ROY"});
		
	list.push({incompWord: "J_U_P_ L___R_",
		compWord: "JHUMPA LAHIRI"});
	
	list.push({incompWord: "_UL_ _A_ A_A__",
		compWord: "MULK RAJ ANAND"});
	
	list.push({incompWord: "_K _A_A_A_",
		compWord: "RK NARAYAN"});
	
	list.push({incompWord: "_A__A_ R__H__E",
		compWord: "SALMAN RUSHDIE"});
		
	list.push({incompWord: "_I_R_M S__H",
		compWord: "VIKRAM SETH"});
	
	list.push({incompWord: "_S N_I_A_L",
		compWord: "VS NAIPAUL"});
	
	list.push({incompWord: "_IR__ D_S_I",
		compWord: "KIRAN DESAI"});
		
	list.push({incompWord: "MA_A_E__ _A_MA",
		compWord: "MAHADEVI VARMA"});
		
	list.push({incompWord: "_H__HI D__H__ND_",
		compWord: "SHASHI DESHPANDE"});
	
	list.push({incompWord: "S_O__A _E",
		compWord: "SHOBHA DE"});
	
	list.push({incompWord: "_H__HW__T _I__H",
		compWord: "KHUSHWANT SINGH"});

	list.push({incompWord: "S__HA__A __MA__ _HA_HA_",
		compWord: "SUBHADRA KUMARI CHAUHAN"});
		
	list.push({incompWord: "_UB__M__Y_ BH___TH_",
		compWord: "SUBRAMANYA BHARATHI"});
		
	list.push({incompWord: "_A_A__E_A _E_I",
		compWord: "MAHASWETA DEVI"});
	
	list.push({incompWord: "_A_A_ C_A_D_A C_A__E__I",
		compWord: "SARAT CHANDRA CHATTERJI"});
	
	list.push({incompWord: "_A___AN__ _A_ BA____AN",
		compWord: "HARIVANSH RAI BACHCHAN"});
		
	list.push({incompWord: "_A__HA__AR _RA_A_",
		compWord: "JAISHANKAR PRASAD"});
	
	list.push({incompWord: "A_A__ _A_S_I",
		compWord: "ANAND BAKSHI"});
		
	list.push({incompWord: "K_Z_ N_Z__L __L_M",
		compWord: "KAZI NAZRUL ISLAM"});
		
	list.push({incompWord: "_H_R_TE__U H_R_SH_H___R_",
		compWord: "BHARATENDU HARISHCHANDRA"});
		
	list.push({incompWord: "M__TH___ SH_R__ _U_T",
		compWord: "MAITHILI SHARAN GUPT"});
		
	list.push({incompWord: "_H_T__ _H___T",
		compWord: "CHETAN BHAGAT"});
		
	list.push({incompWord: "_P_ _B__L __L_M",
		compWord: "APJ ABDUL KALAM"});
		
	list.push({incompWord: "__R_T_ _R_T__",
		compWord: "AMRITA PRITAM"});
		
	list.push({incompWord: "_US_I_ _O_D",
		compWord: "RUSKIN BOND"});
		
	list.push({incompWord: "S_R__I_I __I_U",
		compWord: "SAROJINI NAIDU"});
		
	list.push({incompWord: "A_U_ _A_A_",
		compWord: "ABUL FAZAL"});
		
	list.push({incompWord: "K__ID__",
		compWord: "KALIDAS"});
		
	list.push({incompWord: "_AR_ _WA__",
		compWord: "MARK TWAIN"});
		
	list.push({incompWord: "_HA_L__ _I_K_N",
		compWord: "CHARLES DICKEN"});
		
	list.push({incompWord: "_I__IA_ __A_E__EA_E",
		compWord: "WILLIAM SHAKESPEARE"});
		
	list.push({incompWord: "__O _O_S_OY",
		compWord: "LEO TOLSTOY"});
		
	list.push({incompWord: "_G__H_ CH__S__E",
		compWord: "AGATHA CHRISTIE"});
		
	list.push({incompWord: "_S_A_ WI__E",
		compWord: "OSCAR WILDE"});
	
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