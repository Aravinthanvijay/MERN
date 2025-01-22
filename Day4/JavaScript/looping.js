/*1.Normal looping
->for
->while
->do-while
2.Bit Advanced Looping
->for in
->foreach
*/

//for in loop
//var a=[10,20,30]
var b ={"count":70,"abs":1}
/*for(let i in a)
{
    console.log(i)
}
for(let i in b)
{
    console.log(i,b.i)
    
}
for(let i in b)
{
    console.log(i,b[i])
}
set = new Set(["hello",2,"SECE COLLEGE","4",5])
console.log(set);
for (let i in set)
{
    console.log("loop running")
    console.log(i)
}
*/

/*for(let i of a)
{
    console.log(i)
}*/
//Running the values of b
for(let i of Object.values(b))
{
    console.log(i)
}