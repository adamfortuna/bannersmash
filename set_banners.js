var cars = [
  { 
    type: 'convertible', 
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/convertible.html'
  },
  { 
    type: 'sedan',
    link: 'http://www.bmwusa.com/standard/content/vehicles/2013/3/335isedan/default.aspx'
  },
  {
    type: 'suv',
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/suv.html'
  }
];


function setBanners(number) {
  car = cars[number];

  var headerAd = $("<a href='"+car.link+"'><img src='images/"+car.type+"_banner.jpg' /></a>");
  var sideAd = $("<a href='"+car.link+"'><img src='images/"+car.type+"_sidebar.jpg' /></a>");

  $("#headerPromoContainer").hide().html(headerAd).fadeIn('slow');
  $("#ad0_0_WA_0001A").hide().html(sideAd).fadeIn('slow');
}