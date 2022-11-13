// change icon based on the theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('iconFevicon').href = './Assets/Icons/Scorp_Favicon_Light.png';
    document.getElementById('themeStyle').href = './Assets/Style/scorp_dark.css';
} else {
    document.getElementById('iconFevicon').href = './Assets/Icons/Scorp_Favicon_Dark.png';
    document.getElementById('themeStyle').href = './Assets/Style/scorp_light.css';
}