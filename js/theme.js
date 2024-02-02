// change icon based on the theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("This is a dark theme");
    // document.getElementById('iconFevicon').href = './Assets/Icons/Scorp_Favicon_Light.png';
    // document.getElementById('themeStyle').href = './Assets/Style/scorp_dark.css';
} else {
    console.log("This is a light theme");
    // document.getElementById('iconFevicon').href = './Assets/Icons/Scorp_Favicon_Dark.png';
    // document.getElementById('themeStyle').href = './Assets/Style/scorp_light.css';
}