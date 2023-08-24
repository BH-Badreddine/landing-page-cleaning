
let vm = new Vue({
    el: '#app',
    data: {
        plans: [
            { type: 'Basic', price: 299, features: [true, true, false, false, false] },
            { type: 'Standard', price: 499, features: [true, true, true, true, false] },
            { type: 'Premium', price: 899, features: [true, true, true, true, true] }
        ],
        COLOR: 'rgb(250, 168, 17)', //#0d6efd
        dark: false,
        sideBarDispaly: 'none',
        settingsDispaly: 'block',
        SHADOW: 'gray'//#0b4191
    },
    methods: {
        afficherSideBar() {
            setTimeout(() => {
                this.sideBarDispaly = 'block';
                this.settingsDispaly = 'none';
            }, 400);
        },
        afficherSettings() {
            setTimeout(() => {
                this.sideBarDispaly = 'none';
                this.settingsDispaly = 'block';
            }, 400);
        }
    },
    watch: {
        COLOR(newValue) {
            hex = newValue;//the COLOR has a string value in hexadecimal
            //converting hexadecimal into rgb(decimal values)
            var red = parseInt(hex[1] + hex[2], 16);
            var green = parseInt(hex[3] + hex[4], 16);
            var blue = parseInt(hex[5] + hex[6], 16);
            //choosing background color for the body using COLOR
            let redB = red + 150;
            let greenB = green + 150;
            let blueB = blue + 150;
            let redS = red + 80;
            let greenS = green +80;
            let blueS = blue + 80;
            let redShadow = red - 80;
            let greenShadow = green - 80;
            let blueShadow = blue - 80;
            let bodyColor = 'rgb(' + redB + ',' + greenB + ',' + blueB + ')';
            let sidebarColor = 'rgb(' + redS + ',' + greenS + ',' + blueS + ')';
            this.SHADOW = 'rgb(' + redShadow + ',' + greenShadow + ',' + blueShadow + ')';
            document.body.style.backgroundColor = bodyColor;
            document.querySelector('div.sidebar').style.backgroundColor = sidebarColor;
        },
    
    }
});
