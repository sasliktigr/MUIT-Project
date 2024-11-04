// Функции всякие

function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
    document.getElementById("dropdownMenu").style.display = "none";
}

function openRegister() {
    document.getElementById("registerModal").style.display = "flex";
    document.getElementById("dropdownMenu").style.display = "none";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function closeRegister() {
    document.getElementById("registerModal").style.display = "none";
}

// клик вне зоны = закрытие
window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
};
// пароль регистрация
function validatePasswords() {
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Пароли не совпадают.";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}

 function connectToWiFi() {
    alert("Функция в разработке")
 }



// Как заставить ислама работать нормально, а то ля меня не устраивает то что он "Поиск информации". Ничего не делает, если и делает то это помощь Диме, он сам говорил то что ислам это его моральная поддержка. Ля бесит, даже Егор с Макаром будут умнее Ислама с Димой.