
// //question 1

//  var StudentsNames = [];




//  //question 2
//  var StudentsName=newArray =[];
// StudentName [0] ="Ahmed";
// StudentName [1] ="Bina";
// StudentName [2] ="Sara";
// console.log(StudentName)



//  // question 3
//  var str_arr = ['hey', 'hi']



//  // question 4
//  var number_arr = [29, 19]



//  //question 5
//  var myArr = [];
//  var value = 2;
//  for(var i = 0; i < value; i++) {
//        myArr.push(false);
//  }




//  // question 6
//  var arr = [123, 'hello', 456, 'hi']





//  // question 7
//  var education_arr = ['SSC', 'HSC' , 'BCS', 'BS', 'BCOM' , 'MS', 'M. Phill' , 'PhD']
//  document.write('<h1> Qualifications:  </h1> ')
//  document.write("<br> 1)" + education_arr[0])
//  document.write("<br> 2)" + education_arr[1])
//  document.write("<br> 3)" + education_arr[2])
//  document.write("<br> 4)" + education_arr[3])
//  document.write("<br> 5)" + education_arr[4])
//  document.write("<br> 6)" + education_arr[5])
//  document.write("<br> 7)" + education_arr[6])
//  document.write("<br> 8)" + education_arr[7])
//  document.write("<br> 9)" + education_arr[8])



//  // question 8
//  var student_names = ['Michael', 'John' , 'Tony']
//  var score = [320 , 230 , 480]
//  var total_score = 500;

//  document.write("score of " + student_names[0] + " is " + score[0] + ". Percentage " + ((score[0]) / total_score) * 100 + "% <br>" ) 
//  document.write("score of " + student_names[1] + " is " + score[1] + ". Percentage " + ((score[1]) / total_score) * 100 + "% <br>" ) 
//  document.write("score of " + student_names[2] + " is " + score[2] + ". Percentage " + ((score[2]) / total_score) * 100 + "% <br>" )



//  // question 9
//  document.write("<h1>Colors</h1>")
//  var color_names = ['red' , 'green' , 'blue' ]
//  document.write(color_names)
//  color_names.unshift(prompt("enter the color you want to add at the begining"))
//  document.write("<br>" + color_names)
//  color_names.push(prompt("enter the color you want to add at the end"))
//  document.write("<br>" + color_names)
//  color_names.unshift('purple' , 'skyblue')
//  document.write("<br>" + color_names)
//  color_names.shift();
//  document.write("<br>" + color_names)
//  color_names.pop();
//  document.write("<br>" + color_names)
//  color_names.splice(prompt('where you want to add color'), 0 , prompt('which color you want to add'))
//  document.write("<br>" + color_names)
//  color_names.splice(0 , prompt('which color you want to delete'))
//  document.write("<br>" + color_names)



//  //question 10
//  document.write("<h1>Score:</h1>")
//  var student_score = [320, 230, 480, 120 ]
//  document.write(student_score + "<br>")
//  document.write(student_score.sort())



//  // question 11
//  var city = ['Karachi', 'Lahore,', 'Islamabad', 'Quetta,', 'Peshawar']
//  document.write('<h2> Cities List </h2> <br>' + city)
//  var selected_city = city.slice(0 , 3)
//  document.write('<br> <h2> Selected Cities </h2>' + selected_city)



//  // question 12
//  var my_arr = ["This", "Is", "My", "Cat"]
//  var string = my_arr.join(" ");
//  document.write(string)
//  // chap 17-20
//  // // task 3
// for (var i = 0; i <= 10; i++ ){
//     document.write(i + "<br>")
// }


// question 13
// var newArray=["Keyboard" , "House" , "Printer" , "Monitor"];
// var element=newArray=[];
// element [0] ="keyboard";
// element [1] ="House";
// element [2] ="Printer";
// element [3] ="Monitor";
// document.write("<h1> devices: </h1>" + "<br>" + element)

// element.abc(1,3)
// document.write("<br> OUT : <br>" + element)

// var copyElement = element.slice(1,2)
// document.write("<br> OUT : <br>" + copyElement)

// var copyElement = element.slice(2,3)
// document.write("<br> OUT : <br>" + copyElement)

// element.splice(0,3)
// document.write("<br> OUT : <br>" + element)

// question 14

// var newArray=["Keyboard" , "House" , "Printer" , "Monitor"];
// var element=newArray=[];
// element [0] ="keyboard";
// element [1] ="House";
// element [2] ="Printer";
// element [3] ="Monitor";
// document.write("<h1> devices: </h1>" + "<br>" + element)

// element.splice(0,3)
// document.write("<br> OUT : <br>" + element)

// var copyElement = element.splice(1,2)
// document.write("<br> OUT : <br>" + element)

// var copyElement = element.splice(2,3)
// document.write("<br> OUT : <br>" + element)

// element.splice(1,3)
// document.write("<br> OUT : <br>" + element)



// question 15

// var phone = ["Apple", "Samsung", "Motorola", "Nokia" , "Sony" , "Haier"]
// document.write(`<select>
// <option> ${phone[0]} </option>
// <option> ${phone[1]} </option>
// <option> ${phone[2]} </option>
// <option> ${phone[3]} </option>
// <option> ${phone[4]} </option>
// <option> ${phone[5]} </option>
// </select>`)