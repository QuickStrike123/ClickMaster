TheNameOfTheShop = localStorage.getItem("ShopName");

console.log(TheNameOfTheShop);

Money = 0;

Chasier = false;

Banker = false;

SecurityGuard = false;

SecurityDog = false;

Model = false;

DoubleClicker = false;

CodeGon = false;

CodeKilluaYoYo = false;

CodeKurapika = false;

CodeKnov = false;

CodeMeheron = false;

function AddMoney() {

    if (Chasier == true) {

        Money += 4;
        
    }

    if (Banker == true) {

        Money += 9;
        
    }

    if (SecurityGuard == true) {

        Money += 14;
        
    }

    if (SecurityDog == true) {

        Money += 14;
        
    }

    if (Model == true) {

        Money += 19;
        
    }

    if (DoubleClicker == true) {

        Money *= 2
        
    }

    Money += 1;

    document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

    RandomNumGen = Math.floor(Math.random()*5);

    if (RandomNumGen == 1) {

        document.getElementById("Clicker").src = "Diamond Clicker.png";
        
    }

    if (RandomNumGen == 2) {

        document.getElementById("Clicker").src = "Amethyst Clicker.jpeg";
        
    }

    if (RandomNumGen == 3) {

        document.getElementById("Clicker").src = "Ruby Clicker.jpeg";
        
    }

    if (RandomNumGen == 4) {

        document.getElementById("Clicker").src = "Topaz Clicker.jpeg";
        
    }

    if (RandomNumGen == 5) {

        document.getElementById("Clicker").src = "Sapphire Clicker.jpeg";
        
    }
    
}

function PurchaseCashier() {

    if (Money >= 50) {

        Money -= 50;

        Chasier = true;

        document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

        document.getElementById("PurchaseCashier").disabled = true;

        document.getElementById("Cashier").src = "Cashier.jpeg";

        window.alert("Congrats You Purchased a Cashier");
        
    }else{

        window.alert("Sorry You Do NOt Have Enough Money Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest A Few More Times")

    }
    
}

function PurchaseBanker() {

    if (Money >= 1000) {

        Money -= 1000;

        Banker = true;

        document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

        document.getElementById("PurchaseBanker").disabled = true;

        document.getElementById("Banker").src = "Banker.jpeg";

        window.alert("Congrats You Purchased a Banker");
        
    }else{

        window.alert("Sorry You Do NOt Have Enough Money Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest A Few More Times")

    }
    
}

function PurchaseSecurityDog() {

    if (Money >= 1500) {

        Money -= 1500;

        SecurityDog = true;

        document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

        document.getElementById("PurchaseSecurityDog").disabled = true;

        document.getElementById("SecurityDog").src = "Security Dog.png";

        window.alert("Congrats You Purchased a Security Dog");
        
    }else{

        window.alert("Sorry You Do NOt Have Enough Money Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest A Few More Times")

    }
    
}

function PurchaseSecurityGuard() {

    if (Money >= 1500) {

        Money -= 1500;

        SecurityGuard = true;

        document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

        document.getElementById("PurchaseSecurityGuard").disabled = true;

        document.getElementById("SecurityGuard").src = "Security Guard.jpeg";

        window.alert("Congrats You Purchased a Security Guard");
        
    }else{

        window.alert("Sorry You Do NOt Have Enough Money Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest A Few More Times")

    }
    
}

function PurchaseModel() {

    if (Money >= 2000) {

        Money -= 2000;

        Model = true;

        document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

        document.getElementById("PurchaseModel").disabled = true;

        document.getElementById("Model").src = "Model.png";

        window.alert("Congrats You Purchased a Model");
        
    }else{

        window.alert("Sorry You Do NOt Have Enough Money Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest A Few More Times")

    }
    
}

function Welcome() {

    window.alert("Hi There Welcome To Jewellery Clicker.If You Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest You Get Money.Get The Cashier,Banker,SecurityGuard,SecurityDog & The Model To Increase The Power Of Your Clicker!");

    document.getElementById("shopname").innerHTML = "Welcome To " + TheNameOfTheShop + " Shop";
    
}

function Logout() {

    localStorage.removeItem("ShopName");

    window.location = "Login.html";
    
}

function PurchaseDoubleClicker() {

    if (Money >= 10000) {

        Money -= 10000;

        DoubleClicker = true;

        document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;

        document.getElementById("DoubleClicker").disabled = true;

        document.getElementById("DoubleClickerImg").src = "ClickerDoubleUpgrade.png";

        window.alert("Congrats You Purchased a Double Clicker");
        
    }else{

        window.alert("Sorry You Do NOt Have Enough Money Click On The Diamond,Ruby,Sapphire,Topaz & The Amythest A Few More Times");

    }
    
}

function VerifyCode() {

    Code = document.getElementById("Codes").value;

    Code.toLowerCase();

    if (CodeKnov == false) {

        if (Code == "Knov") {

            CodeKnov = true;
    
            Money += 1000;
    
            window.alert("Congrats You Entered The Code Correct Here Is 1,000 Money");
    
            document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;
            
        }

        document.getElementById("Codes").innerHTML = "";
        
    }

    if (CodeMeheron == false) {

        if (Code == "Meheron") {

            CodeMeheron = true;
    
            Money += 10000;
    
            window.alert("Congrats You Entered The Code Correct Here Is 10,000 Money");
    
            document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;
            
        }

        document.getElementById("Codes").innerHTML = "";
        
    }

    if (CodeKurapika == false) {

        if (Code == "Kurapika") {

            CodeKurapika = true;
    
            Money += 650;
    
            window.alert("Congrats You Entered The Code Correct Here Is 650 Money");
    
            document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;
            
        }

        document.getElementById("Codes").innerHTML = "";
        
    }

    if ( CodeKilluaYoYo == false) {

        if (Code == "KilluaYoYo") {

            CodeKilluaYoYo = true;
    
            Money += 15000;
    
            window.alert("Congrats You Entered The Code Correct Here Is 15,000 Money");
    
            document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;
            
        }

        document.getElementById("Codes").innerHTML = "";
        
    }

    if (CodeGon == false) {

        if (Code == "Gon") {

            CodeGon = true;
    
            Money += 5000;
    
            window.alert("Congrats You Entered The Code Correct Here Is 5,000 Money");
    
            document.getElementById("TotalMoney").innerHTML = "Total Amount Of Money = " + Money;
            
        }

        document.getElementById("Codes").innerHTML = "";
        
    }

}