function ClickerMaster() {

    Name = document.getElementById("UserName").value;

    localStorage.setItem("ShopName",Name);

    window.location = "Clicker.html"
    
}