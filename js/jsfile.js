var answer=document.getElementsByClassName('answer');
var question=document.getElementsByClassName('question');
function reveal(x){
	if(answer[x].style.display==''){
		answer[x].style.display='block';
	}else{
		answer[x].style.display='';
	}
}
