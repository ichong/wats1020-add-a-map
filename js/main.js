/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

$( document ).ready(function() {
  $('.dropdown-toggle').dropdown();
  
    var lnglat = [46.8523, -121.7603];  
    var mymap = L.map('mapid').setView(lnglat, 11);


		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5nZWx1aCIsImEiOiJjaW5wa25pcmcxMDAzdWFtMzhrdmpscnNiIn0.DK0YYY3D2VvBPMnNUhrkvA', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(mymap);


		L.marker(lnglat).addTo(mymap)
			.bindPopup("<b>Mount Rainier!</b><br />Elevation: 14,411 ft.").openPopup();

		L.circle(lnglat, 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("Hike Paradise");

		L.polygon([
			[46.7523, -121.7803],
			lnglat,
      [46.86, -121.6]
		]).addTo(mymap).bindPopup("Campgrounds near Tatoosh/Cowlitz.");


		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(mymap);
		}

		mymap.on('click', onMapClick);

  
});