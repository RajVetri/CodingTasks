	let outputscreen = document.getElementById("output");
		
		function display(num){
			outputscreen.value +=num;
		}
		
		function calculator(){
			try{
				outputscreen.value=eval(outputscreen.value);
			}
			catch(err)
			{
				alert("Invalid value");
				outputscreen.value="";
			
			}
		}
		function reset(){
			outputscreen.value="";
		}
		function displays(){
			outputscreen.value="";
		
		}
		function del(){
			outputscreen.value=outputscreen.value.slice(0,-1);
		}