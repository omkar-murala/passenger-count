// step - 1
//lets create a  variable with a value zero
let onevariable = 0

//step - 2
//we have given a function to a button so hear we call that function and do manipulate it
function increment() 
{

    //step - 3
    //let that first variqble  equals =  first variable + 1 (every time we click the increment button which ( has id )  increment())
    onevariable += 1


    //step - 5
    //to manipulate the the text with the button "THE SECOND VARIABLE WHICH WE CREATED"
    //RANDOMVARIABLE
    //hey randomvariable change yout text with the keyword innertext functionalities
    //change to onevariable
    randomvariable.innerText = onevariable

        /////////////////////////////////////////////////////////////////////////////////////////////////////


    // this is not necessary but it will show the result in console 
    console.log(onevariable)
        
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
}


//step - 4
//now as we click the button the text should also change so we did this
//let a rondomvariable equals  =  " hey HTML document get me an elements id whose id name is (count-el)" after getting this element we can do manipulation in required function
let randomvariable = document.getElementById("count-el")   //pass in argument    //note getelementbyid is a function


//store the value of onevariable
// this will only repeat the value in the console which is the indecation of storing
function save() {  //function for save button

 //working      //console.log(onevariable)  // this will effect only in console
 // working     //num.innerText = onevariable  //below we are showing id to variable num  to display the value to id total 

    let thirdvariable = onevariable + " - "
    num.innerText += thirdvariable
    console.log(onevariable)

}

let num = document.getElementById("total")   //third and new variable which has been created to display the number of randomvariable on click of save button

console.log(num)