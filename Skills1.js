//create array
let skillsArray =['webflow','CSS','JAVASCRIPT','PYTHON','Java', 'BOOTSTRAP','C'];
let resultArray = [];
var container = document.getElementById("selectSkills");
var containerResult = document.getElementById("addSkills");

for ( var i=1; i < skillsArray.length; i++) {
    var sliced = skillsArray.slice(i);
    console.log (sliced);
    
}

// total skills added
document.getElementById("totalSkills").innerText= skillsArray.length;
 
function Firstbox (mClass, html , val) {
       
    var idname = mClass + val;
    return '<div class="' + mClass + '" id="' + val + '" value="' + val + '" onclick="skillselect(this)">' + html + '</div>';
}
 // append the result of function to the innerHTML
for (var i = 0; i < skillsArray.length; i++) {  
    container.innerHTML += Firstbox('skills', skillsArray[i],i);   
  }
    
var count = 0;
function skillselect(e){
    var input = e.id;
    resultArray[e.id] = skillsArray[input]; 
    console.log(resultArray);
    console.log(skillsArray[input]);
  
}   

var btnContainer = document.getElementById("selectSkills");
var btns = btnContainer.getElementsByClassName("skills");

 
function addElement(e){
    if(count >=0){
        count++;
       console.log(count);
    }
    
    function resultBox (mClass, html , val) {
            var idnm = "skill"+val;
            return '<div class="' + mClass + '" id="' +idnm + val + '" value="' + val + '" onclick="skillselect(this)">' + html + '</div>';
    }
        containerResult.innerHTML = ""; 
    for (var i = 0; i < resultArray.length; i++) {
        containerResult.innerHTML += resultBox('skills', resultArray[i],i);
    }    

}
