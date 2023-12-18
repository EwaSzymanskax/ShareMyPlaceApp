class PlaceFinder {
    constructor() {
        const adressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        adressForm.addEventListener('submit', this.findAdressHandler);
    }

    locateUserHandler() {
       if (! navigator.geolocation){
        alert("Location feature is not available in your browser")
         return;
       }
       navigator.geolocation.getCurrentPosition(successResult => {
    
        const coordinates = {
            lat: successResult.coords.latitude,
            lng: successResult.coords.longitude,
        };
        console.log(coordinates)
       }, error => {
        alert('could not locate you unfortunately, please enter an adress manually')
       })
    }

    findAdressHandler() {}
}

new PlaceFinder()