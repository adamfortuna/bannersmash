var cars  = [
  { 
    type: 'convertible', 
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/convertible.html',
    follow_up : {
    additonal_text: "Find Your Favorite Dealer",
    link: 'http://www.google.com'
    }
  },
  { 
    type: 'sedan',
    link: 'http://www.bmwusa.com/standard/content/vehicles/2013/3/335isedan/default.aspx',
   follow_up : {
   	additonal_text: "Find Your Favorite Dealer",
            link: 'http://www.google.com'
           }


  },
  {
    type: 'suv',
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/suv.html',
    follow_up : {
    additonal_text: "Find Your Favorite Dealer",
    link: 'http://www.google.com'
    }


  }
];
var shoes  = [
  { 
    type: 'boots', 
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/convertible.html',
    follow_up : {
    additonal_text: "Find Your Favorite Shoe",
    link: 'http://www.google.com'
    }
  },
  { 
    type: 'highheels',
    link: 'http://www.bmwusa.com/standard/content/vehicles/2013/3/335isedan/default.aspx',
   follow_up : {
   	additonal_text: "Find Your Favorite Shoe",
            link: 'http://www.google.com'
           }


  },
  {
    type: 'flops',
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/suv.html',
    follow_up : {
    additonal_text: "Find Your Favorite Shoe",
    link: 'http://www.google.com'
    }


  }
];


/*
var cars = [
  { 
    type: 'convertible', 
    link: 'images/select/convertible_roadblock_txt.jpg'
  },
  { 
    type: 'sedan',
    link: 'images/select/sedan_roadblock_txt.jpg'
  },
  {
    type: 'suv',
    link: 'images/select/suv_roadblock_text_shading_20.jpg'
  }
];
*/
function setBanners(number) {
  car = cars[number];

  var headerAd = $("<a href='"+car.link+"'><img src='images/"+car.type+"_banner.jpg' /></a>");
  var sideAd = $("<a href='"+car.link+"'><img src='images/"+car.type+"_sidebar.jpg' /></a>");

  $("#headerPromoContainer").hide().html(headerAd).fadeIn('slow');
  $("#ad0_0_WA_0001A").hide().html(sideAd).fadeIn('slow');
}