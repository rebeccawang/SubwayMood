var selectedLines = new Array();

$(document).on('pageinit', '#main', function(){
    

    $('a[id=button]').click(function(event) {
    	var line = event.target;
    	alert("select something: " + line.name);

    	if(line.name != undefined && line.name != null){
	    	if(line.name == "AllBlue"){
	    		if(selectedLines.indexOf("AllBlue") == -1){
	    			selectedLines.push("AllBlue");
	    			if(selectedLines.indexOf("A") == -1){
	    				selectedLines.push("A");
		    		}
		    		if(selectedLines.indexOf("C") == -1){
	    				selectedLines.push("C");
		    		}
		    		if(selectedLines.indexOf("E") == -1){
	    				selectedLines.push("E");
		    		}
		    	}
		    	else{
		    		var i = selectedLines.indexOf("AllBlue");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("A");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("C");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("E");
		    		selectedLines.splice(i,1);
		    	}
	    	}
	    	else if(line.name == "AllRed"){
	    		if(selectedLines.indexOf("AllRed") == -1){
	    			selectedLines.push("AllRed");
	    			if(selectedLines.indexOf("One") == -1){
	    				selectedLines.push("One");
		    		}
		    		if(selectedLines.indexOf("Two") == -1){
	    				selectedLines.push("Two");
		    		}
		    		if(selectedLines.indexOf("Three") == -1){
	    				selectedLines.push("Three");
		    		}
		    	}
		    	else{
		    		var i = selectedLines.indexOf("AllRed");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("One");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Two");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Three");
		    		selectedLines.splice(i,1);
		    	}
	    	}
	    	else if(line.name == "AllGreen"){
	    		if(selectedLines.indexOf("AllGreen") == -1){
	    			selectedLines.push("AllGreen");
	    			if(selectedLines.indexOf("Four") == -1){
	    				selectedLines.push("Four");
		    		}
		    		if(selectedLines.indexOf("Five") == -1){
	    				selectedLines.push("Five");
		    		}
		    		if(selectedLines.indexOf("Six") == -1){
	    				selectedLines.push("Six");
		    		}
		    	}
		    	else{
		    		var i = selectedLines.indexOf("AllGreen");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Four");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Five");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Six");
		    		selectedLines.splice(i,1);
		    	}
	    	}
	    	else if(line.name == "AllOrange"){
	    		if(selectedLines.indexOf("AllOrange") == -1){
	    			selectedLines.push("AllOrange");
	    			if(selectedLines.indexOf("B") == -1){
	    				selectedLines.push("B");
		    		}
		    		if(selectedLines.indexOf("D") == -1){
	    				selectedLines.push("D");
		    		}
		    		if(selectedLines.indexOf("F") == -1){
	    				selectedLines.push("F");
		    		}
		    		if(selectedLines.indexOf("M") == -1){
	    				selectedLines.push("M");
		    		}
		    	}
		    	else{
		    		var i = selectedLines.indexOf("AllOrange");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("B");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("D");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("F");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("M");
		    		selectedLines.splice(i,1);
		    	}
	    	}
	    	else if(line.name == "AllYellow"){
	    		if(selectedLines.indexOf("AllYellow") == -1){
	    			selectedLines.push("AllYellow");
	    			if(selectedLines.indexOf("N") == -1){
	    				selectedLines.push("N");
		    		}
		    		if(selectedLines.indexOf("Q") == -1){
	    				selectedLines.push("Q");
		    		}
		    		if(selectedLines.indexOf("R") == -1){
	    				selectedLines.push("R");
		    		}
		    	}
		    	else{
		    		var i = selectedLines.indexOf("AllYellow");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("N");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Q");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("R");
		    		selectedLines.splice(i,1);
		    	}
	    	}
	    	else if(line.name == "AllBrown"){
	    		if(selectedLines.indexOf("AllBrown") == -1){
	    			selectedLines.push("AllBrown");
	    			if(selectedLines.indexOf("J") == -1){
	    				selectedLines.push("J");
		    		}
		    		if(selectedLines.indexOf("Z") == -1){
	    				selectedLines.push("Z");
		    		}
		    	}
		    	else{
		    		var i = selectedLines.indexOf("AllBrown");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("J");
		    		selectedLines.splice(i,1);
		    		i = selectedLines.indexOf("Z");
		    		selectedLines.splice(i,1);
		    	}
	    	}
	    	else if(selectedLines.indexOf(line.name) == -1){
	    		selectedLines.push(line.name);
	    	}
	    	else{
	    		var i = selectedLines.indexOf(line.name);
	    		selectedLines.splice(i,1);
	    	}
	    }
    	alert("selected lines: " + selectedLines);
	});
    
});
$(document).on('pageinit', '#results', function(){
   
    //$('.ui-title').text(header);
    $('.ui-content').text(selectedLines);
    alert("it should work");
    
});