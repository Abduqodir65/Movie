"use strict";

import {
    getAllCategories,
    getAllFoods,
    getAllFoodsByCategoryId,
    getAllReviews,
    getMe,
} from "./requests.js";
import { showCategories, showFoods, showReviews } from "./utils.js";

const allCategories = await getAllCategories();
const allFoods = await getAllFoods();
const allReviews = await getAllReviews();

await getMe();

showCategories(allCategories);
showFoods(allFoods);
showReviews(allReviews);

const categoryListitems = document.querySelectorAll(".filters_menu li");

categoryListitems.forEach((item, i, arr) => {
    item.addEventListener("click", async () => {
        const categoryId = item.getAttribute("data-id");
        // deactivate all categories
        arr.forEach((c) => c.classList.remove("active"));

        // activate clicked category
        item.classList.add("active");

        if (categoryId == "*") {
            const allFoods = await getAllFoods();
            showFoods(allFoods);
            return;
        }

        const allFoods = await getAllFoodsByCategoryId(categoryId);
        showFoods(allFoods);
    });
});

const userPageBtn = document.querySelector(".user_link");

userPageBtn.addEventListener("click", () => {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "./login.html";
    } else {
        window.location.href = "./profile.html";
    }
});

// LISTEN LOGOUT USER
const logoutBtn = document.querySelector(".logout-button");

logoutBtn.addEventListener("click", () => {
    alert("Logout successfully");
    localStorage.clear();
    window.location.href = "./login.html";
});