let addElement=document.getElementById("btn");
let addElement1=document.getElementById("btn-2");
let userEmail=document.getElementById("email");
let userPassword=document.getElementById("pwd");
let showNone=document.getElementById("signin");
let show=document.getElementById("signup");
let showinfo=document.getElementById("headersection");


    let users=[{
		email:'jeeva@gmail.com',
		first_name:'Jeeva',
		last_name:'K',
		dob:'14/02/2001',
		phn:'9090909009',
		gender:'Male',
		pass:"123",
		conPass:"123"
	}];
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
		/* 	show=document.getElementById("signup").style.display="block";
			showNone=document.getElementById("signin").style.display="none"; */
	           
	}
});
    addElement1.addEventListener("click",function(){
			headerIn=document.getElementById("header").style.display="none";
			showNone.style.display="none";
			show.style.display="block";
	});	
    function validate(){
        var userEmail=document.getElementById("email");
        var userPassword=document.getElementById("pwd");
            if(userEmail.value.trim()=="" ||userPassword.value.trim()=="")
			{
                alert("No blank value is allowed");
				return false;
            }else{
			    true;	
			}
	}

// Sign Up Page 

let mainTag=document.getElementById("signupbtn");
let infoTag=document.getElementById("fname");
let aboutTag=document.getElementById("lname");
let teamTag=document.getElementById("email2");
let sectTag=document.getElementById("phone");
let contTag=document.getElementById("gender");
let seletTag=document.getElementById("birthday");
let logTag=document.getElementById("pwd2");
let footTag=document.getElementById("conpwd2");

mainTag.addEventListener("click",function(){
    
    let fieldName=infoTag.value;
    let sectName=aboutTag.value;
	let srcName=teamTag.value;
	let shiftName=sectTag.value;
	let errorName=contTag.value;
	let layoutName=seletTag.value;
	let prtName= logTag.value;
	let altName=footTag.value;
    
    if(prtName===altName){
		userdata["usrFirstname"]=fieldName;
		userdata["usrLastname"]=sectName;
		userdata["email"]=srcName;
		userdata["phnNum"]=shiftName;
		userdata["gender"]=errorName;
		userdata["dob"]=layoutName;
		userdata["pass"]=prtName;
		userdata["conPassword"]=altName;
		users.push(userdata);
		console.log(users);
		show.style.display="none";
		showNone.style.display="block";
    }
    else{
		alert("confirm password is worng?");
		footTag.value="";
	}
	let headersectionIn=document.getElementById("headersection").style.display="block";
	let netElm=document.getElementById("net").style.display="block";
	headerIn=document.getElementById("header").style.display="none";
	showNone=document.getElementById("signin").style.display="none";
	
});



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
 Data.forEach(function(obj){
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

