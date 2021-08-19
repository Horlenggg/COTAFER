var thisIsBase = 1;

let sidebar = document.getElementById('sidebar');
if(typeof sidebar !== 'undefined'){
    function sidebarToggle() {
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    };
}
