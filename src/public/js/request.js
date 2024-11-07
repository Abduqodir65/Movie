import { axiosCustom } from "../config/axios.config.js";

export const getAllMovies = async () => {
    const allMovies = await axiosCustom.get("/movies");

    return allMovies.data;
};

export const getAllActors = async () => {
    const allActors = await axiosCustom.get("/actors");

    return allActors.data;
};


export const getAllGenres = async () => {
    const allGenres = await axiosCustom.get("/genres");

    return allGenres.data;
};

export const getMe = async () => {
    try {
        const data = await axiosCustom.get("/me");
        localStorage.setItem("user", JSON.stringify(data.data));
        return data.data;
    } catch (error) {
        if (error.status == 422) {
            window.alert("Token already expired");
            localStorage.clear();
            window.location.href = "./login.html";
        }
    }
};

export const refresh = async () => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosCustom.post("/auth/refresh", { refreshToken });
        localStorage.setItem("token", response?.data?.accessToken);
        localStorage.setItem("refreshToken", response?.data?.refreshToken);

        axiosCustom.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${response?.data?.accessToken}`;

        window.location.reload();
    } catch (error) {
        localStorage.clear();
        window.location.href = "./login.html";
    }
};