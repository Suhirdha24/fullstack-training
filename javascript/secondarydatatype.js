//array = [[10,20,30,40],"a","KEC",true]
//console.log(array);


//obj = {//obj type 1

    //"firstname": "Jai",
    //"lastname" : "kumar",
    //"age"      :  20 }
//console.log(obj);


//obj type 2
//obj1 = {};
//console.log(obj1);

//obj type 3
//obj2 = new Object();
//console.log(obj2);

//obj3 = {}
//obj3["movie"] = "iron man"
//obj3["boxoffice"] = "100cr"
//obj3["release"] = "worldwide"
//console.log(obj3);
//console.log(obj3["boxoffice"]);
//console.log(obj3.movie);


//obj4 = new Object()
//obj4["phone"] = "samsung"
//obj4["store"] ="samsung store"
//obj4["game1"] ="candy crush "
//obj4["game2"] ="subway surfer"
//console.log(obj4);

array=[10,20,30,[40,5,50.6],"a","KEC",true]
//console.log(array);

//for..in looop
//for(var a in array){
    //console.log(a); 
    //console.log("Element present in index",a,"is",array[a]); //getting the index number and their value 
//}

//for...of loop
for(var b of array){
    console.log(b);
}