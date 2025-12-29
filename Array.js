let numbers=[12,23,34,45,56,67,]
console.log(numbers);
numbers .ForEach(Value,index)=>{
     console.log(value+"is present at index"+index+"my array is:"+arr);
     
})


let students=[
    {
        myname:"Ankit",
        rollno:12
    },
     {
        myname:"Ajay",
        rollno:13
    },
    {
        myname:"piyush",
        rollno:14
    },
]


console.log(students);
{
    console.log(students.name+":"+students.rollno

    );
    
})

let squeareArray=numbers.map((value)=>value*value)
console.log(squeareArray);


let filterdArray=numbers.filter((value)=>value%2==0)
console.log(filterdArray);

let newstudentArray=students.filter((student)=>student.rollno>12)
console.log(newstudentArray);





    

