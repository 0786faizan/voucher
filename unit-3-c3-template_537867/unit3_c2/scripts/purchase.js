let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
// console.log(url)
    fetch(url)
 
    .then(function(res){
      
     return res.json();
    }) 
    .then(function(res){
     
    console.log(res)
    append(res.vouchers)
    }).catch(function(err){
      console.log(err);
    })
      let container = document.getElementById("container")
   function append(data){
       data.forEach(function(el){
    
        let div = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = el.name;
        console.log(name)
        
        let image = document.createElement("image");
        image.src = el.image
         
        let price = document.createElement("h3");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Buy Now"
       
        button.addEventListener("click",function(){
          buynowItem(el);
          div.append(image,name,price,button);
          container.append(div);
       });    
    })
   }  
          
   function buynowItem(el){
    console.log(el)
    let item = document.getElementById("product").value;
    let itemprice = item*100;

    if(itemprice > amount || item == ""){
        alert("insufficient amount");
    }
    else{
        alert("successfull");
        remaining_amount = amount-itemprice;
        console.log(remaining_amount);
        localStorage.setItem("amount",JSON.stringify(remaining_amount));
        remaining_amount.innerText = remaining_bal
        window.location.reload();
    }
    document.getElementById("product").value = "";
  }
        