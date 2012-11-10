var cars = [
  { 
    type: 'Convertable', 
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/convertible.html',
    header_ad: 'http://www.bmwblog.com/wp-content/uploads/BMW-M3_Convertible_UK_Version_2009_1600x1200_wallpaper_08.jpg',
    sidebar_ad: 'http://www.cgriver.com/43291-large/bmw-6-convertible-2012-3d-model.jpg',
    roadblock_ad: 'http://www.cgriver.com/43291-large/bmw-6-convertible-2012-3d-model.jpg'
  },
  { 
    type: 'Sedan',
    link: 'http://www.bmwusa.com/standard/content/vehicles/2013/3/335isedan/default.aspx',
    header_ad: 'http://www.bmwblog.com/wp-content/uploads/BMW-M3_Convertible_UK_Version_2009_1600x1200_wallpaper_08.jpg',
    sidebar_ad: 'http://www.cgriver.com/43291-large/bmw-6-convertible-2012-3d-model.jpg',
    roadblock_ad: 'http://www.cgriver.com/43291-large/bmw-6-convertible-2012-3d-model.jpg'
  },
  {
    type: 'Suv',
    link: 'http://www.bmw.com/com/en/newvehicles/bodytype/suv.html',
    header_ad: 'http://www.bmwblog.com/wp-content/uploads/BMW-M3_Convertible_UK_Version_2009_1600x1200_wallpaper_08.jpg',
    sidebar_ad: 'http://www.cgriver.com/43291-large/bmw-6-convertible-2012-3d-model.jpg',
    roadblock_ad: 'http://www.cgriver.com/43291-large/bmw-6-convertible-2012-3d-model.jpg'
  }
];


function setBanners(number) {
  car = cars[number];

  var headerAd = $("<a href='"+car.link+"'><img src='"+car.header_ad+"' /></a>");
  var sideAd = $("<a href='"+car.link+"'><img src='"+car.sidebar_ad+"' /></a>");

  $("#headerPromoContainer").hide().html(headerAd).fadeIn('slow');
  $("#ad0_0_WA_0001A").hide().html(sideAd).fadeIn('slow');
}