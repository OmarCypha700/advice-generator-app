window.onload = ()=> {
const API = 'https://api.adviceslip.com/advice'

const getAdvice = document.querySelector('#getAdvice');
const Advice = document.querySelector('#adviceMsg');
const AdviceNum = document.querySelector('#adviceId')


getAdvice.addEventListener('click', ()=>{
	fetch(API)
	.then(res => res.json())
	.then(data => {
	AdviceNum.innerHTML = 'ADVICE # ' + JSON.stringify(data.slip.id);
	Advice.innerHTML = JSON.stringify(data.slip.advice);
	})
});

}

