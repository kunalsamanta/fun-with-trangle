//take vale from user
const angles =document.querySelectorAll('.angle')
console.log(angles);
const checkAngle=document.querySelector('.check-angle');
const outputBox= document.querySelector('.text-output');

//console.log(fistAngle,secondAngle,thirdAngle);              

//store angle value in array3
//  const getValue =(angles)=> {
//     let arr=[];
//     arr.push(angles[0].value);
//     arr.push(angles[1].value);
//     arr.push(angles[2].value);
//     return arr;

//  }


 //add the angle value
//   const sumAngle= (arr)=> {
//     arr= arr.reduce((total,angle)=>{
//        console.log(total,angle); 
//         return Number(total)+Number(angles)
//     });
//     return arr;
//   }

//function

function calculateSumofAngle(angle1,angle2,angle3){
   console.log(angle1,angle2,angle3);
    const sumAngle= angle1 + angle2 + angle3;
    return sumAngle;

}

function checkTrangle(){
    const sumAngle = calculateSumofAngle(Number(angles[0].value),Number(angles[1].value), Number(angles[2].value));
if(sumAngle===180){
    console.log(outputBox);
    outputBox.innerText="it is a trangle";
}
else{
    outputBox.innerText="it is not a trangle ";
}
    }

    


//eventhandeler

checkAngle.addEventListener('click',checkTrangle)

