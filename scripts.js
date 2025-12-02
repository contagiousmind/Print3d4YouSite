
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


    if (tab == 'Products') {
        BuildProducts();
    }
}







// setup the products...
var productList = new Array();
productList.push(new Product(
    'Vileda mop holder - Black'
    , 'https://i.ebayimg.com/images/g/sYEAAeSwc7ZpKw9O/s-l1600.webp'
    , 'Vileda mop holder, will fit other mops and brushes - 3d printed'
    , 'https://www.ebay.co.uk/itm/357962660367'
    , 'Household'
    , false
));

productList.push(new Product(
    'Vileda mop holder - Red'
    , 'https://i.ebayimg.com/images/g/JQwAAeSwUGVpKvPX/s-l1600.webp'
    , 'Vileda mop holder, will fit other mops and brushes - 3d printed'
    , 'https://www.ebay.co.uk/itm/357962424743'
    , 'Household'
    , false
));

productList.push(new Product(
    'Bricklayers tingle string line holder x 4'
    , 'https://i.ebayimg.com/images/g/zhEAAeSwMX5pLMvh/s-l1600.webp'
    , 'Bricklayers tingle string line holder x 4'
    , 'https://www.ebay.co.uk/itm/357967456585'
    , 'Tools'
    , false
));

productList.push(new Product(
    'Beko Belling Flavel Fridge Freezer Decor Door Slide x2'
    , 'https://i.ebayimg.com/images/g/YyMAAeSwCYNpKx~2/s-l1600.webp'
    , 'Beko Belling Flavel Fridge Freezer Decor Door Slide x2'
    , 'https://www.ebay.co.uk/itm/357962796306'
    , 'Household'
    , false
));

productList.push(new Product(
    '150mm shower valve pipe centring tool'
    , 'https://i.ebayimg.com/images/g/39oAAeSw9RhpKx1B/s-l1600.webp'
    , '150mm pipe centres template to be used when installing shower valves'
    , 'https://www.ebay.co.uk/itm/357962768246'
    , 'Tools'
    , false
));




function BuildProducts(category) {
    if (category == undefined) {
        category = "";
    }

    var template = $("#ProductItem_Template").html();

    var html = "";

    for(i = 0; i < productList.length; i++) {
        html += template.replace(/\$NAME\$/g, productList[i].Name)
                        .replace(/\$IMAGE\$/g, productList[i].Image)
                        .replace(/\$DESC\$/g, productList[i].Desc)
                        .replace(/\$LINK\$/g, productList[i].Link)
                    ;

    }

    $("#ProductsListOuter").html(html);

}



/*-- objects --*/
function Product(name, image, desc, link, category, isNew) {
    this.Name = name;
    this.Image = image;
    this.Desc = desc;
    this.Link = link;
    this.Category = category;
    this.IsNew = isNew;
}