// change icon based on the theme
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.getElementById('iconFevicon').href = './Assets/Icons/Scorp_Favicon_Light.png';
}else{
    document.getElementById('iconFevicon').href = './Assets/Icons/Scorp_Favicon_Dark.png';
}