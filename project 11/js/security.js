let check = JSON.parse(localStorage.getItem('u_data'));
    if (!check) {
        window.location.href = "login.html";
    }