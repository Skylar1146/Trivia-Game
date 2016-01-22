/**
	Author: Skylar Stickley
	Created: Jan 21, 2016
	Updated: Jan 21, 2016

**/
function chkQuiz()
{
	for(var i = 1; i < 2; i++)
	{
		var choices = document.getElementsByName("q" + i);
		
		for(j=0; j < choices.length; j++)
		{
			var selection = choices[j];
			
			if(selection.value === "correct" && selection.checked)
			{
				window.alert("Good job!");
			}
		}
		
	}
	
};