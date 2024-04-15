const buttonSub=document.getElementById("form");
const buttonResut=document.getElementById("confirm");
const buttonResutbtn=document.getElementById("ResultBtn");
const buttonConformbtn=document.getElementById("ConfirmBtn");
const formname=document.getElementById("name");
const formnumber=document.getElementById("number");
const formmonth =document.getElementById("month1");
const formyear=document.getElementById("year1");
const formcvv=document.getElementById("cvv");
const outname=document.getElementById("cardname");
const outnum=document.getElementById("cardnum");
const outcvv=document.getElementById("exp");
const outyear=document.getElementById("year");
const outmonth=document.getElementById("month");
const ymMsg=document.getElementById("ymmsg");
const cvvMsg=document.getElementById("cvvmsg");
const numMsg=document.getElementById("nummsg");
var i=5;

buttonResutbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
        
    
        if(formname.value==""){
            formname.style.borderColor="red";
            i--;

        }else{
            formname.style.borderColor="black";
            i++;
        }
        var iv;
        var numval=0;
        for( iv of formnumber.value){
            if(iv.charCodeAt()>=48 && iv.charCodeAt()<=57){
                numval++;
            }else{
                numval=0;
            }
        }
        if( numval>=0 && numval<=15){
            formnumber.style.borderColor="red";
            numMsg.hidden=false;
            i--;
        }else{
            formnumber.style.borderColor="black";
            numMsg.hidden=true;
            i++;


        }
        if(formmonth.value==""){
            formmonth.style.borderColor="red";
            ymMsg.hidden=false;
            i--;

        }else{
            formmonth.style.borderColor="black";
            ymMsg.hidden=true;
            i++;


        }
        if(formyear.value==""){
            formyear.style.borderColor="red";
            ymMsg.hidden=false;
            i--;

        }else{
            formyear.style.borderColor="black";
            ymMsg.hidden=true;
            i++;


        }
        if(formcvv.value==""){
            formcvv.style.borderColor="red";
            cvvMsg.hidden=false;
            i--;
        }else{
            formcvv.style.borderColor="black";
            cvvMsg.hidden=true;
            i++;


        }

   
// if(){
//     alert("done")
// }else{
//     alert("good")
// }
    



if(i==5){
     buttonSub.hidden=true;
    buttonResut.hidden=false;
    outname.textContent=formname.value;
    outnum.textContent=formnumber.value.replace(/(.{4})/g,"$1 ");
    outcvv.textContent=formcvv.value;
    outyear.textContent=formyear.value;
    outmonth.textContent=formmonth.value;
}
i=0;  
// alert(/^\d+$/.test(formnumber));
// console.log(isNaN(Number(formnumber)));

});
buttonConformbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    buttonResut.hidden=true;
    buttonSub.hidden=false;
    formname.value="";
    formnumber.value="";
    formcvv.value="";
    formyear.value="";
    formmonth.value="";
    outname.textContent="JANE APPLESEED";
    outnum.textContent="0000 0000 0000 0000";
    outcvv.textContent="000";
    outyear.textContent="YY";
    outmonth.textContent="MM";
});