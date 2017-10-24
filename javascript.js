const EmployeeArray = [["223456","224333","330000"],["1Password1","2Password2","3Password3"]];
const EmployeeNumber = "";
const password = "";
// eNumber / date time / InOut
const TimeRecordArrayE1 = [["223456"],[],[]];
const TimeRecordArrayE2 = [["224333"],[],[]];
const TimeRecordArrayE3 = [["330000"],[],[]];

const punchInBut = document.getElementById("punchIn");
const punchOutBut = doucment.getElementById("punchOut");
const InOutRecord= document.getElementById("InOutRecord");

//initial button set
punchIn = false;
punchOut = false;


const submit = document.getElementById("submit");

// click listner for submit
submit.addEventListener("click", () => {

  const EmployeeArray = [["223456","224333","330000"],["1Password1","2Password2","3Password3"]];

  let EmployeeNumber = document.getElementById("eNumber").value;

  let password = document.getElementById("password").value;


   passwordVerify(EmployeeNumber, password, EmployeeArray);

   usedArray(EmployeeNumber, TimeRecordArrayE1, TimeRecordArrayE2, TimeRecordArrayE3);

})



var useArray = [];


 //punch in DateTime button set
punchIn.addEventListener("click", () => {

  const DateTime = getFullYear() + getMonth() + getDay() + getHours() + ":" + getMinutes();
   document.getElementById("punchIn").disable = true;
   document.getElementById("punchOut").disable = false;

  useArray[1][useArray.lenght+1] = DateTime;
  useArray[2][useArray.lenght+1] = "punchIn";
})

//punch out DateTime button set
punchOut.addEventListener("click", () => {

  DateTime = getFullYear() + getMonth() + getDay() + getHours() + ":" + getMinutes();
   document.getElementById("punchOut").disable = true;
   document.getElementById("punchIn").disable = false;

    useArray[1][useArray.lenght+1] = DateTime;
    useArray[2][useArray.lenght+1] = "punchIn";
})

//in progress display time staps
InOutRecord.addEventListener("click", (useArray) => {

  const table = document.getElementById("timeShow")
  const entry = document.createElement('li')

  for(x=useArray.length; x<= 0; x--){
  entry = appendChild(document.createTextNode(useArray[x]))
}

})
//check E# and password
function passwordVerify(EmployeeNumber, password, EmployeeArray){

const TimeRecordArrayE1 = [["223456"],[],[]];
const TimeRecordArrayE2 = [["224333"],[],[]];
const TimeRecordArrayE3 = [["330000"],[],[]];

  var x = 0;

  do{
  for(x; x < 3;x++){
//conform EmployeeNumber and password
     if (EmployeeArray[0][x] === EmployeeNumber){
      //delete when done
       alert("Correct E Number")
       if(password === EmployeeArray[1][x]){
         //place button activation here && rest of stuff
         alert("Welcome " + EmployeeNumber);




       }else{
         alert("The Employee number or password you entered was incorrect Please try again.")
       }
     }else{
       alert("The Employee number or password you entered was incorrect Please try again.")
        }
  }
  } while(x < 3 || x <= EmployeeArray.lenght);


//set starting buttons
if (useArray[2][useArray.lenght] == "punchIn"){
  //enable punchOut
  document.getElementById("punchOut").disable=false;
}else{
  //enable punchIn
  document.getElementById("punchIn").disable=false;
}
}

//used to get proper time array
 function usedArray(EmployeeNumber,TimeRecordArrayE1, TimeRecordArrayE2, TimeRecordArrayE3){
  if (EmployeeNumber == TimeRecordArrayE1[0]){
    var useArray = TimeRecordArrayE1;
  }
  else if (EmployeeNumber == TimeRecordArrayE2[0]) {
    useArray = TimeRecordArrayE2;
  }
  else {
    useArray = TimeRecordArrayE3;
  }

  return useArray;
}
