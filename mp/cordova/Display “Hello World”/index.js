var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        console.log('cordova running');
        alert('Hello World Ishita Shah KCTYBSCIT48');
    }
};
app.initialize();
