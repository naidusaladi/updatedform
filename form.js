let roll=document.getElementById('roll')
let fname=document.getElementById('fname')
let lname=document.getElementById('lname')
let male=document.getElementById('male')
let female=document.getElementById('female')
let form=document.getElementById('form')


let rroll=document.getElementById('rroll')
let rfname=document.getElementById('rfname')
let rlname=document.getElementById('rlname')
let rsex=document.getElementById('rsex')
let res=document.getElementById('result')

function submited(){
      
      res.style.display='flex'
     
      rroll.innerText="Roll Number :"+" "+roll.value
      rfname.innerText="First Name :"+" "+fname.value
      rlname.innerText="Last Name :"+" "+lname.value
      if(male.checked==true){
      rsex.innerText="Sex :"+"Male"
      }else if(female.checked==true){
        rsex.innerText="Sex :"+" "+"Female"
      }
      form.reset()
}
