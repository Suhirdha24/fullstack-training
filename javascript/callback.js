submitForm("Form Submitted Successfully",databaseSharing)

function databaseSharing(){
    console.log("Data stored successfully");
}

function submitForm(formMsg,dbs){
    setTimeout(()=>{
    dbs()
    console.log(formMsg)
    },2000)
}
submitForm("Form Submitted successfully",databaseSharing)//transition is called call back 