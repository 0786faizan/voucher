   function formabc(n,e,ad,am){
       this.name = n
       this.email = e
       this.address = ad
       this.amount = am
   }
 
    let myarr = [];
 


 function submitform(e){
     e.preventDefault();
     let form = document.querySelector("#form");
     let name = form.name.value;
     console.log(name)
     let email = form.email.value;
     let address = form.address.value;
     let amount = form.amount.value;
     console.log(name,email,address)
  //   console.log(name,email,address,amount)
     let result = new formabc(name,email,address,amount);
      myarr.push(result);
      localStorage.setItem("user",JSON.stringify(myarr));
      form.name.value ="";
      form.email.value = "";
      form.address.value = "";
      form.amount.value = "";
 }

