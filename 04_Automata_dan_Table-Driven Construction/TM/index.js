const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");
const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");
const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");
const buttonStepiaElement = document.getElementById("tombol-Stepia");


editorElement.addEventListener("input", function() {
    let text = editorElement.value;
    charCountElement.textContent = text.length;
    let hitungHurufKecil = 0;
    let hitungHurufBesar = 0;

    for (let i = 0; i < text.length; i++){
        let karakter = text [i];
        if (karakter >= 'a' && karakter <= 'z'){
            hitungHurufKecil++;
        }
        else if (karakter >= 'A' && karakter <= 'Z'){
            hitungHurufBesar++;
        }
    }
    lowerCountElement.textContent = hitungHurufKecil;
    upperCountElement.textContent = hitungHurufBesar;
});
btnBesar.addEventListener("click", function(){
    editorElement.value = editorElement.value.toUpperCase();
    editorElement.dispatchEvent(new Event('input'));
});
btnKecil.addEventListener("click", function(){
    editorElement.value = editorElement.value.toLowerCase();
    editorElement.dispatchEvent(new Event('input'));
});
buttonLightElement.addEventListener("click", (event)=>{
    document.documentElement.classList.remove("dark-mode", "Stepia-mode");
});
buttonDarkElement.addEventListener("click", (event)=>{
    document.documentElement.classList.remove("Stepia-mode"); 
    document.documentElement.classList.add("dark-mode");
});

buttonStepiaElement.addEventListener("click", (event)=>{
    document.documentElement.classList.remove("dark-mode"); 
    document.documentElement.classList.add("Stepia-mode");
});