
/*
a="SECE"
console.log(a)
b = true
console.log(b)
//checking the type of data types
console.log(typeof(b))
//secondary datatypes
Array = ['a',10,true,[20,30],"sri Eshwar college"]
console.log(Array)
console.log(typeof(Array))
*/
//object
//1st way f declaring object
obj={
    Firstname:"Sri",
    lastname:"eshwar"
}
console.log(obj)
console.log(typeof(obj))
console.log(obj.Firstname)
//2nd way of object declation
obj1={}
console.log(obj1)
obj1["dept"]="CSE"
obj1['sec']="A"
console.log(obj1)
//3rd way of object declaration
obj2=new Object()
console.log(obj2)
obj2.count=70
obj2.abs=1
totalPresentCount=obj2.count-obj2.abs
console.log("Present",totalPresentCount)
console.log(obj2)



//set
set = new Set(("hello",2,"SECE COLLEGE","4"))
set1 = new Set(["hello",2,"SECE COLLEGE","4"])

console.log(typeof(set))
console.log(set)
console.log(set1)
set.add("Querty Keyboard")
console.log(set)