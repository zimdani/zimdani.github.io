﻿window.globalProvideData('slide', '{"title":"Notes file 2","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":19,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide19","width":1365,"height":770,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6CFGQqPd1Nt","actionGroups":{"ReviewInt_5upImed7bd4":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Hs7FXb4J41"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6CFGQqPd1Nt","typea":"var","valueb":"5Wutz8u471M","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5Wutz8u471M.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5upImed7bd4"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5Wutz8u471M.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5upImed7bd4"}]}]}]},"ReviewIntCorrectIncorrect_5upImed7bd4":{"kind":"actiongroup","actions":[]},"AnsweredInt_5upImed7bd4":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5upImed7bd4"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5upImed7bd4":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Hs7FXb4J41"},"enabled":{"type":"boolean","value":false}}]},"5upImed7bd4_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6rWkQvDdMIe.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5upImed7bd4"}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6CFGQqPd1Nt":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6j9i7VPt4yB"}}]},"NavigationRestrictionPreviousSlide_6CFGQqPd1Nt":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6Hs7FXb4J41.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6rWkQvDdMIe"}],"elseActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_605VUZOk7Az","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_605VUZOk7Az","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5upImed7bd4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5upImed7bd4"}],"elseActions":[{"kind":"exe_actiongroup","id":"5upImed7bd4_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5upImed7bd4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6CFGQqPd1Nt","typea":"var","valueb":"5Wutz8u471M","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5Wutz8u471M"},"completed_slide_ref":{"type":"string","value":"_player.6KTxAQWG8n0.691vSkX1fVY"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5upImed7bd4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6CFGQqPd1Nt","typea":"var","valueb":"5Wutz8u471M","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5Wutz8u471M"},"completed_slide_ref":{"type":"string","value":"_player.6KTxAQWG8n0.691vSkX1fVY"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6CFGQqPd1Nt"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6CFGQqPd1Nt"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":250,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5WyW5TrDBcV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"69htgjPdoBM"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NJJtAZOP6J"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Hs7FXb4J41"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-2,"yPos":-1,"tabIndex":1,"tabEnabled":true,"referenceName":"6NJJtAZOP6J","xOffset":0,"yOffset":0,"rotateXPos":691,"rotateYPos":408.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1383,"bottom":817,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":1383,"height":817,"strokewidth":0}},"width":1382,"height":817,"resume":true,"useHandCursor":true,"id":"6NJJtAZOP6J"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-2,"yPos":-1,"tabIndex":0,"tabEnabled":true,"referenceName":"69htgjPdoBM","xOffset":0,"yOffset":0,"rotateXPos":687,"rotateYPos":388.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1375,"bottom":777,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":253}},"html5data":{"xPos":0,"yPos":0,"width":1375,"height":777,"strokewidth":0}},"width":1374,"height":777,"resume":true,"useHandCursor":true,"id":"69htgjPdoBM"},{"kind":"textinput","bindto":"_player.TextEntry_f2","align":"left","verticalAlign":"center","rtl":false,"numeric":false,"multiline":false,"maxchars":256,"placeholder":"type your text here","fontsize":24,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":68,"yPos":105,"tabIndex":3,"tabEnabled":true,"referenceName":"6Hs7FXb4J41","xOffset":0,"yOffset":0,"rotateXPos":613.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6Hs7FXb4J41","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":1208,"height":30,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":-6,"right":203,"bottom":26,"pngfb":false,"pr":{"l":"Lib","i":255}}},"html5data":{"xPos":0,"yPos":0,"width":1229,"height":30,"strokewidth":1}},"width":1228,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":1230,"bottom":31,"altText":"type your text here","pngfb":false,"pr":{"l":"Lib","i":254}}},"id":"6Hs7FXb4J41","events":[{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.TextEntry_f2","operator":"set","value":{"type":"var","value":"_player.#notesFile2"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6rWkQvDdMIe"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5WyW5TrDBcV_1515787561","id":"01","linkId":"txt__default_5WyW5TrDBcV","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":1208,"height":48,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Notes file 2","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","fontSize":26.38,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs","foregroundColor":"#00DEF1","linkColor":"#00DEF1","ascent":37.595,"descent":10.305,"leading":0,"underlinePosition":-1.717,"underlineThickness":0.859,"xHeight":18.823}}],"style":{"leadingMargin":0,"firstLineMargin":0,"justification":"left","lineSpacingRule":"multiple","lineSpacing":20,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":26.38,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"displayCase":"asIs"},"tagType":"P"},"runs":[{"idx":0,"len":12,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":68.444,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":51.333,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":26.38,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#00DEF1","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":195,"bottom":53,"pngfb":false,"pr":{"l":"Lib","i":262}}}],"shapemaskId":"","xPos":68,"yPos":31,"tabIndex":2,"tabEnabled":true,"referenceName":"5WyW5TrDBcV","xOffset":0,"yOffset":0,"rotateXPos":614,"rotateYPos":29,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1228,"bottom":58,"altText":"Notes file 2","pngfb":false,"pr":{"l":"Lib","i":256}},"html5data":{"xPos":0,"yPos":0,"width":1228,"height":58,"strokewidth":0}},"width":1228,"height":58,"resume":true,"useHandCursor":true,"id":"5WyW5TrDBcV"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5upImed7bd4_CorrectReview","id":"01","linkId":"5upImed7bd4_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":724,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":259}}}],"shapemaskId":"","xPos":0,"yPos":730,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":682.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1365,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":258}},"html5data":{"xPos":1,"yPos":1,"width":1362,"height":37,"strokewidth":2}},"width":1365,"height":40,"resume":false,"useHandCursor":true,"id":"5upImed7bd4_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5upImed7bd4_IncorrectReview","id":"01","linkId":"5upImed7bd4_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":732,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":261}}}],"shapemaskId":"","xPos":0,"yPos":730,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":682.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1365,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":260}},"html5data":{"xPos":1,"yPos":1,"width":1362,"height":37,"strokewidth":2}},"width":1365,"height":40,"resume":false,"useHandCursor":true,"id":"5upImed7bd4_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');