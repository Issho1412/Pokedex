const images = {
    // ./images
    SplashScreen: require('../assets/logos/logo-splash.jpg'),
    Home: require('../assets/images/bg_home.png'),
    Pkd: require('../assets/images/pokedex.jpg'),
    Kanto: require('../assets/images/nkanto.jpg'),
    Johto: require('../assets/images/njohto.jpg'),
    Hoenn: require('../assets/images/nHoenn.jpg'),
    Sinnoh: require('../assets/images/nsinnoh.jpg'),
    Unova: require('../assets/images/nunova.jpg'),
    Kalos: require('../assets/images/nkalos.jpg'),
    Alola: require('../assets/images/nalola.jpg'),
    Galar: require('../assets/images/ngalar.jpg'),

  };
  
  export default param => images[param];