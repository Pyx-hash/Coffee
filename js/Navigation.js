document.getElementById("Dashboard-button").addEventListener("click", function() {
    document.getElementById("CustomerForm").style.display = "none";
    document.getElementById("DashboardForm").style.display = "block";
    document.getElementById("ProductsForm").style.display = "none";
    document.getElementById("OrdersForm").style.display = "none";
});

document.getElementById("CustomerForm-button").addEventListener("click", function() {
    document.getElementById("CustomerForm").style.display = "block";
    document.getElementById("DashboardForm").style.display = "none";
    document.getElementById("ProductsForm").style.display = "none";
    document.getElementById("OrdersForm").style.display = "none";
});
document.getElementById("ProductsForm-button").addEventListener("click", function() {
    document.getElementById("CustomerForm").style.display = "none";
    document.getElementById("DashboardForm").style.display = "none";
    document.getElementById("ProductsForm").style.display = "none";
    document.getElementById("OrdersForm").style.display = "block";
});
document.getElementById("SignOutForm-button").addEventListener("click", function() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        document.getElementById("CustomerForm").style.display = "none";
        document.getElementById("DashboardForm").style.display = "none";
        document.getElementById("ProductsForm").style.display = "none";
        document.getElementById("OrdersForm").style.display = "none";

        window.location.href = "index.html";
    } else {
        console.log("Logout Canceled.");
    }
});

document.getElementById("customer").addEventListener("click", function() {
    document.getElementById("DashboardForm").style.display = "none";
    document.getElementById("CustomerForm").style.display = "block";
});