//asyncawait.js

// async function fun() {
//     //the return in settimeout cannot catched in the await in nam because it returns a standard value not a proomise
//     setTimeout(() => {
//        return "hello"
//     }, 5000);
//     return "hell0"
    
// }
// async function nam() {
//     //await it only waits to get a promise from a async function
//     var d=await fun();
//     console.log(d);
// }
// //to resolve promise we can use then the function
// nam().then((a)=>{
//     console.log(a);  
// })
function istime(t){
    time=1000;
    return t<time;
}
function isloc(loc){
    lo="Erode";
    return loc===lo;
}

//insta program 
async function share(li){
    return new Promise((isshare,isnotshare)=>{
        if(li=="Liked"){
            isshare("Shared")
        }
        else{
            isnotshare("Not Shared")
        }
        
    })
}
async function like(comment){
    return new Promise((islike,isnotlike)=>{
        if(cmte=="Commeted"){
            islike("Liked")
        }
        else{
            isnotlike("Not Liked")
        }
        
    })
}
async function comment(pose){
    return new Promise((iscomment,isnotcomment)=>{
        if(pose=="Posted"){
            iscomment("Commented")
        }
        else{
            isnotcomment("Not Commented")
        }
        
    })
}
async function creat(pic){
    var pos= new Promise((ispost,isnotpost)=>{
        if(pic=="yes"){
            ispost("Posted")
        }
        else{
            isnotpost("Not Posted")
        }
    })
    //Promise.all()==>it should be array
    // var [post,commet,like]=await Promise.all([pos,cmt(),lid()])
    // return [post,commet,like]
    var post=await pos;
    var comnt=await comment(post);
    var like=await like(cm);
    var share=await share(li);
    return [post,comnt,like,share] 
}
creat("yes").then((a)=>{
    a.forEach(element => {
        console.log(element);
    });
}).catch((err)=>{
    console.log(err);  
})
///obje
obj={"a":1,"b":2}
for(key in obj){
    console.log(key,obj[key]);
}

async function share(li){
    return new Promise((isshare,isnotshare)=>{
        if(li=="Liked"){
            isshare("Shared")
        }
        else{
            isnotshare("Not Shared")
        }
        
    })
}
async function like(cmte){
    return new Promise((islike,isnotlike)=>{
        if(cmte=="Commeted"){
            islike("Liked")
        }
        else{
            isnotlike("Not Liked")
        }
        
    })
}
async function cmnt(pose){
    return new Promise((iscomment,isnotcomment)=>{
        if(pose=="Posted"){
            iscmt("Commented")
        }
        else{
            isnotcmt("Not Commented")
        }
        
    })
}
async function creat(pic){
    var pos= new Promise((ispost,isnotpost)=>{
        if(pic=="yes"){
            ispost("Posted")
        }
        else{
            isnotpost("Not Posted")
        }
    })
    // Promise.all()==>it should be array
    // var [post,commet,like]=await Promise.all([pos,cmt(),lid()])
    // return [post,commet,like]
    var post=await pos;
    var cmnt=await cmnt(post);
    var like=await like(cm);
    var share=await share(li);
    return [post,cmnt,like,share] 
}
creat("yes").then((a)=>{
    a.forEach(element => {
        console.log(element);
    });
}).catch((err)=>{
    console.log(err);  
})