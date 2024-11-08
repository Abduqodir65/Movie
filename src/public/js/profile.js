async function getUserData(userId) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);

        if (response.ok) {
            const user = await response.json();
            const imageUrl = user.image 
                ? `http://localhost:3000/uploads/${user.image}`
                : "path-to-default-image.jpg";

            document.getElementById("user-image").src = imageUrl
            document.getElementById("user-name").textContent = user.username;
            document.getElementById("user-email").textContent = user.email;
            document.getElementById("user-status").textContent = user.is_premium ? "Status: Premium" : "Status: Regular";
        } else {
            console.error("Foydalanuvchini topib bo'lmadi.");
        }
    } catch (error) {
        console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error);
    }
}

const userId = 9; 
getUserData(userId);

function showLogoutModal() {
    document.getElementById("logoutModal").style.display = "block";
}

function logout() {
    alert("You have been logged out!");
    window.location.href = "/login";
}


function editProfile() {
    document.getElementById("editProfileModal").style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

async function saveProfile() {
    const username = document.getElementById("edit-username").value;
    const email = document.getElementById("edit-email").value;

    try {
        const response = await fetch(`http://your-backend-url/users/update/1`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email })
        });

        if (response.ok) {
            alert("Profil muvaffaqiyatli yangilandi!");
            closeModal("editProfileModal");
            getUserData(9);
        } else {
            alert("Profilni yangilashda xatolik yuz berdi.");
        }
    } catch (error) {
        console.error("Profilni yangilashda xatolik:", error);
    }
}

window.onclick = function (event) {
    const editModal = document.getElementById("editProfileModal");
    if (event.target == editModal) {
        closeModal("editProfileModal");
    }
}


// script.js

// Rasmni oldindan ko'rish funksiyasi
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('profile-image-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}



async function saveProfile() {
    const username = document.getElementById("edit-username").value;
    const email = document.getElementById("edit-email").value;
    const imageFile = document.getElementById("profile-image-upload").files[0];

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);

    if (imageFile) {
        formData.append("profileImage", imageFile);  // Rasm fayli
    }

    try {
        const response = await fetch(`http://your-backend-url/users/update/1`, {
            method: "PATCH",
            body: formData
        });

        if (response.ok) {
            alert("Profil muvaffaqiyatli yangilandi!");
            closeModal("editProfileModal");
            getUserData(1); // Yangi ma'lumotlarni qayta yuklash
        } else {
            alert("Profilni yangilashda xatolik yuz berdi.");
        }
    } catch (error) {
        console.error("Profilni yangilashda xatolik:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getUserData(9); // Sahifani yuklaganda ma'lumotlarni olish
});


// Premium Modal oynani ochish
function openPremiumModal() {
    document.getElementById("premiumModal").style.display = "flex";
}

// Premium Modal oynani yopish
function closePremiumModal() {
    document.getElementById("premiumModal").style.display = "none";
}

// Premium a'zo qilish funksiyasi
function activatePremium() {
    closePremiumModal();
    alert("Congratulations! You've activated premium membership.");
}
