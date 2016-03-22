var latitude="";
var longitude="";
function getLocation(){
    navigator.geolocation.getCurrentPosition(locationSuccess,locationFail);
}
function locationSuccess(position){
    latitude=position.coords.latitude;
    longitude=position.coords.longitude;
    document.getElementById("position").innerHTML ="Latitude =" + latitude + " Longitude =" + longitude;
    var location_string ="http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=true";
    console.log(location_string);
   
    $.getJSON(location_string, function (data) {
    for(var i=0;i<data.results.length;i++) {
        var address = data.results[i].formatted_address;
        console.log(address);
        document.getElementById("location").innerHTML=address;  
    }
      
});
    
    
}
function locationFail(){
    alert("Oops,not able to find your location!!!!");
}
