document.addEventListener("DOMContentLoaded", ()=> {
    
    let ui = document.getElementById("username");
    let ei = document.getElementById("email");
    let pi = document.getElementById("password");
    let lb = document.getElementById("btn2");
    lb.addEventListener("click", () =>{
       
        let username = ui.value;
        let email = ei.value;
        let password = pi.value;
        
        console.log(`Username-> ${username}`);
        console.log(`email-> ${email}`);
        console.log(`password-> ${password}`);
        
    });
});
