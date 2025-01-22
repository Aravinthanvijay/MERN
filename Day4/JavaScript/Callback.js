function submitForm(submit,db)
{
   console.log( db());
console.log(submit)
}

function database()
{
dbname="SECE"
return [dbname,"data stored successfully"]  
}
submitForm("form validated succesfully",database)