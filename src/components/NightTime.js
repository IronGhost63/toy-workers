export default NightTime = {
  get: async ( request ) => {
    const url = new URL( request.url );
    const params = new URLSearchParams( url );
    let lat = params.get('lat');
    let lng = params.get('lng');

    if ( !lat ) {
      lat = "13.736717";
    }

    if ( !lng ) {
      lng = "100.523186";
    }

    const apiTarget = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=Asia/Bangkok`;
    const now = new Date();
    const sunriseTime = new Date();
    const sunsetTime = new Date();

    const response = await fetch( apiTarget );
    const result = await response.json();


  }
}
