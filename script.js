function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (!email.includes("@")) {
        document.getElementById("error-message").innerText = "Email tidak valid!";
        return;
    }

    let emailDomain = email.split("@")[1];
    if (password === emailDomain) {
        localStorage.setItem("email", email);
        window.location.href = "form.html";
    } else {
        document.getElementById("error-message").innerText = "Password salah!";
    }
}

function previewFoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("foto-preview").src = e.target.result;
            document.getElementById("foto-preview").style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

function simpanData() {
    let nama = document.getElementById("nama").value;
    let ttl = document.getElementById("ttl").value;
    let pendidikan = document.getElementById("pendidikan").value;
    let fotoSrc = document.getElementById("foto-preview").src;

    if (nama && ttl && pendidikan && fotoSrc) {
        localStorage.setItem("nama", nama);
        localStorage.setItem("ttl", ttl);
        localStorage.setItem("pendidikan", pendidikan);
        localStorage.setItem("foto", fotoSrc);
        window.location.href = "cv.html";
    } else {
        alert("Harap isi semua data dan unggah foto!");
    }
}

function tampilkanCV() {
    document.getElementById("cv-email").innerText = localStorage.getItem("email") || "Tidak tersedia";
    document.getElementById("cv-nama").innerText = localStorage.getItem("nama") || "Tidak tersedia";
    document.getElementById("cv-ttl").innerText = localStorage.getItem("ttl") || "Tidak tersedia";
    document.getElementById("cv-pendidikan").innerText = localStorage.getItem("pendidikan") || "Tidak tersedia";
    
    const fotoSrc = localStorage.getItem("foto");
    if (fotoSrc) {
        document.getElementById("cv-foto").src = fotoSrc;
        document.getElementById("cv-foto").style.display = "block";
    } else {
        document.getElementById("cv-foto").style.display = "none";
    }
}

if (window.location.pathname.includes("cv.html")) {
    window.onload = tampilkanCV;
}
