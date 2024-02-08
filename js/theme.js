// change icon based on the theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("This is a dark theme");
    document.documentElement.style.colorScheme = 'dark'
    document.getElementById('iconFevicon').href = './assets/icons/favicon/FV_Logo_Light.ico';
    document.getElementById('themeStyle').href = './css/global/dark.css';
} else {
    console.log("This is a light theme");
    document.documentElement.style.colorScheme = 'light'
    document.getElementById('iconFevicon').href = './assets/icons/favicon/FV_Logo_Dark.ico';
    document.getElementById('themeStyle').href = './css/global/light.css';
}

// need to add toggle button for changing of theme