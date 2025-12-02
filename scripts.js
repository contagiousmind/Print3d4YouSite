
$(function () {
    
    // always start by loading home
    MenuItem_Click('Home');

});


function MenuItem_Click(tab) {

    // remove selecteds
    $(".menuitemouter.selected").removeClass('selected');

    // and add to one we're selecting
    $("#MenuItemOuter_" + tab).addClass("selected");

    // hide other tabs...
    $(".maincontent").hide(); 

    // and show tab...
    $("#MainContent_" + tab).show();

}




