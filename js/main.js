let addElement=document.getElementById("btn");
let addElement1=document.getElementById("btn-2");
let userEmail=document.getElementById("email");
let userPassword=document.getElementById("pwd");
let showNone=document.getElementById("signin");
let show=document.getElementById("signup");
let showinfo=document.getElementById("headersection");


   /*let users=[{
		email:'jeeva@gmail.com',
		first_name:'Jeeva',
		last_name:'K',
		dob:'14/02/2001',
		phn:'9090909009',
		gender:'Male',
		pass:"123",
		conPass:"123"
	}];*/
    let users=[];
   let userdata={};
    addElement.addEventListener("click",function(){
    
    let usrMail=userEmail.value;
    let usrPass=userPassword.value;
    
    if(users.length>1){
		for(let i in users){
			if(usrMail===users[i].email&&usrPass===users[i].pass){
				showNone.style.display="none";
				showinfo.style.display="block";
				show.style.display="none";
			
			}
		}
    }
    else{
		alert("Please enter the valid E-mail id");
		let showIn =document.getElementById("net").style.display="none";
			/*show=document.getElementById("signup").style.display="block";
			showNone=document.getElementById("signin").style.display="none";*/
			
	           
	}
});
    addElement1.addEventListener("click",function(){
			headerIn=document.getElementById("header").style.display="none";
			show=document.getElementById("signup").style.display="block";
			showNone=document.getElementById("signin").style.display="none";
			
	});	

///signup
let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

    let setError = (element, message) => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');
	/*errorDisplay.innerText= message;*/
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

let setSuccess = element => {
    let inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

let isValidEmail = email => {
    /*const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());*/
}
let isValidPhone = phone =>{
	
}

let validateInputs = () => {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
	let phoneValue = phone.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
	
	if(phoneValue === '') {
        setError(phone, 'Phone is required');
    }else {
        setSuccess(phone);
    }
	

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 5) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
	let systemIn=document.getElementById("system");
systemIn.addEventListener("click",function(){
	//console.log("hi");
	let headersectionIn=document.getElementById("headersection").style.display="block";
    let netElm=document.getElementById("net").style.display="block";
	show=document.getElementById("signup").style.display="none";
	headerIn=document.getElementById("header").style.display="none";
	showNone=document.getElementById("signin").style.display="none";
});


};
/*let systemIn=document.getElementById("system");
systemIn.addEventListener("click",function(){
	console.log("hi");
	let headersectionIn=document.getElementById("headersection").style.display="block";
    let netElm=document.getElementById("net").style.display="block";
	show=document.getElementById("signup").style.display="none";
	headerIn=document.getElementById("header").style.display="none";
	showNone=document.getElementById("signin").style.display="none";
});*/

//lindkn page
let userDataElm=document.getElementById("userdata");

   headersectionIn=document.getElementById("headersection");
   /*headersection.style.display="none";*/
   
let Data=
[
	{
	id:"team-01",
	name:"Manav Chatterjee",
	domain:"HR Associate at EY |",
	pic:"images/team-1.jpg",
	members:"126,871 followers | 500+ connections",
	butt:"Follow"
  },
  {
	id:"team-02",
	name:"Manav Chatterjee",
	domain:"HR Associate at EY |", 
	pic:"images/team-1.jpg",
	members:"126,871 followers | 500+ connections",
	butt:"Follow"
  },
  {
	id:"team-03",
	name:"Manav Chatterjee",
	domain:"HR Associate at EY |",
	pic:"images/team-1.jpg",
	members:"126,871 followers | 500+ connections",
	butt:"Follow"
  },
  {
	id:"team-04",
	name:"Manav Chatterjee",
	domain:"HR Associate at EY |",
	pic:"images/team-1.jpg",
	members:"126,871 followers | 500+ connections",
	butt:"Follow"
  },
  {
	id:"team-05",
	name:"Manav Chatterjee",
	domain:"HR Associate at EY |",
	pic:"images/team-1.jpg",
	members:"126,871 followers | 500+ connections",
	butt:"Follow"
  },
   {
	id:"team-06",
	name:"Manav Chatterjee",
	domain:"HR Associate at EY |",
	pic:"images/team-1.jpg",
	members:"126,871 followers | 500+ connections",
	butt:"Follow"
  }
  
 ]
 Data.forEach((obj)=>{
 let boxTag=document.createElement("div");
 let blockItemTag=document.createElement("div");
 let blockItemTag1=document.createElement("div");
 let pctTag=document.createElement("img");
 let contentTag=document.createElement("div");
 let titleTag=document.createElement("h2");
 let domainTag=document.createElement("h3");
 let membersTag=document.createElement("h4"); 
 let btnTag=document.createElement("buttons");
 
  boxTag.setAttribute("class","box-item");
  blockItemTag.setAttribute("class","box-backimg");
  blockItemTag1.setAttribute("class","box-img");
  contentTag.setAttribute("class","box-cont");
  boxTag.setAttribute("id",obj.id);
  
  pctTag.src=obj.pic;
  membersTag.innerText=obj.members
  titleTag.innerText=obj.name;
  domainTag.innerText=obj.domain;
  btnTag.innerText=obj.butt;
  
  contentTag.append(titleTag,domainTag,membersTag,btnTag);
  blockItemTag1.append(pctTag);
  boxTag.append(blockItemTag,blockItemTag1,contentTag);
  userDataElm.appendChild(boxTag);
 });
 
 