import {redirectTo} from "./helpers/redirect";

const TabBarHome = document.querySelector('#tabBarHome');
const TabBarDiscover = document.querySelector('#tabBarDiscover');

    TabBarHome.addEventListener('click', function () {
        console.log('yay')
    });

TabBarDiscover.addEventListener('click', redirectTo('discover'));