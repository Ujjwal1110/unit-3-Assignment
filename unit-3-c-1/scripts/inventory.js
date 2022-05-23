

var x=JSON.parse(localStorage.getItem("products"));
console.log(x);
display(x);
function display(x){
    x.forEach(function(elem, index){
        var a=document.createElement("h2");
        a.innertext=elem.type;
        var b=document.createElement("h3");
        b.innertext=elem.desc;
        var c=document.createElement("h4");
        c.innertext=elem.price;
        var d=document.createElement("img");
        d.setAttribute("src", elem.image)

        let btn=document.createElement("button");
        btn.innerText="Remove Product";
        btn.addEventListener("click", function(){
            remove(index);
        });
        var y=document.createElement("div")
        y.append(d,a,b,c,btn)

        var z=document.querySelector("#all_products")
         z.append(y);
    });
}
// function remove(index){
//     let data=JSON.parse(localStorage.getItem("products")) || [];
//     let newData=data.filter(fuction(elem,i) {
//         if(i===index){
//          let trash=JSON.parse(localStorage.getItem("trash"))||[];
//          trash.push(elem);

//          localStorage.setItem("trash",JSON.stringify(trash));
//         }
//         else
//         {
//             return i!==index;
//         }
//     });
//     localStorage.setItem("products",JSON.stringify(data));
//     append();
// }