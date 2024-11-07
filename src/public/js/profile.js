"use strict";

import { getMe } from "./requests.js";
import { showUserProfile } from "./utils.js";

function checkToken() {
    const token = localStorage.getItem("token");

    if (!token) {
        localStorage.clear();
        window.location.href = "./login.html";
    }
}
//  CHECK TOKEN
checkToken();

try {
    // GET USER DATA AND SET IT TO LOCAL STORAGE
    await getMe();

    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;

    if (!user) {
        alert("User not found");
        localStorage.clear();
        window.location.href = "./login.html";
    }

    showUserProfile(user);
} catch (error) {
    if (error.status == 422) {
        alert("Invalid token or expired token");
        localStorage.clear();
        window.location.href = "./login.html";
    }
}