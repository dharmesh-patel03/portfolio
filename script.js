//  basic 
 
 function myFunction() {
        const myMenu = document.getElementById("navbar");
        const myList = document.getElementById("list");
        if (myMenu.style.height === "5rem") {
            myMenu.style.height = "auto";
            myList.style.display = "flex"
        } else {
            myMenu.style.height = "5rem";
            myList.style.display = "none"
        }
    }