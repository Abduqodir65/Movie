import { FILE_BASE_URL } from "../constants/file-url.constants.js";

export const showCategories = (data) => {
    const categoryList = document.querySelector(".filters_menu");

    categoryList.innerHTML = "";

    categoryList.insertAdjacentHTML(
        "beforeend",
        `<li data-id="*" class="active">All</li>`
    );

    data.forEach((ct) => {
        categoryList.insertAdjacentHTML(
            "beforeend",
            `<li data-id="${ct.id}">${ct.name}</li>`
        );
    });
};

export const showFoods = (data) => {
    const productList = document.querySelector(".products-list");
    productList.innerHTML = "";

    data.forEach((pr) => {
        productList.insertAdjacentHTML(
            "beforeend",
            `
            <div class="col-sm-6 col-lg-4 all pizza">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src="${FILE_BASE_URL}${pr.image}" alt="${pr.description}">
                </div>
                <div class="detail-box">
                  <h5>
                    ${pr.name}
                  </h5>
                  <p>
                    ${pr.description}
                  </p>
                  <div class="options">
                    <h6>
                      $${pr.price}
                    </h6>
                    <a href="">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                        <g>
                          <g>
                            <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                          </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
        );
    });
};

export const showReviews = (data) => {
    const reviewList = document.querySelector(".reviews-list");
    reviewList.innerHTML = "";

    data.forEach((rv) => {
        reviewList.insertAdjacentHTML(
            "beforeend",
            `
<div class="item col-sm-6 col-lg-6">
              <div class="box">
                <div class="detail-box">
                  <p>
                    ${rv.content}
                  </p>
                  <h6>${rv.user.name}</h6>
                  <p>${rv.user.email}</p>
                </div>
                <div class="img-box">
                  <img src="${FILE_BASE_URL}${rv.user.image}" width='120' alt="" class="box-img" />
                </div>
              </div>
            </div>
            `
        );
    });
};

export const showUserReviews = (reviews) => {
    const userReviewsWrapper = document.querySelector(".user-reviews");

    let userReviewsData = `<table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Content</th>
                          <th scope="col">Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {{DATA}}
                      </tbody>`;

    if (!reviews?.length) {
        userReviewsWrapper.innerHTML = "<p>No reviews yet. ❌</p>";
        return;
    }
    let reviewData = ``;
    reviews.forEach((r, i) => {
        reviewData = reviewData.concat(`<tr>
                          <th scope="row">${i + 1}</th>
                          <td>${r.content}</td>
                          <td>${r.createdAt}</td>
                        </tr>`);
    });
    userReviewsData = userReviewsData.replace("{{DATA}}", reviewData.toString());
    userReviewsWrapper.innerHTML = userReviewsData;
};

export const showUserOrders = (orders) => {
    const userOrdersWrapper = document.querySelector(".user-orders");

    let userOrdersData = `<table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Price</th>
                        <th scope="col">Products</th>
                        <th scope="col">Status</th>
                        <th scope="col">CreatedAt</th>
                      </tr>
                    </thead>
                    <tbody>
                     {{DATA}}
                    </tbody>
                  </table>`;

    if (!orders?.length) {
        userOrdersWrapper.innerHTML = "<p>No orders yet. ❌</p>";
        return;
    }
    let orderData = ``;
    orders.forEach((o, i) => {
        orderData = orderData.concat(`<tr>
                            <th scope="row">${i + 1}</th>
                            <td>${o.total_price}</td>
                            <td>products</td>
                            <td>${o.status}</td>
                            <td>${o.createdAt}</td>
                      </tr>`);
    });
    userOrdersData = userOrdersData.replace("{{DATA}}", orderData.toString());
    userOrdersWrapper.innerHTML = userOrdersData;
};

export const showUserProfile = (user) => {
    const userName = document.querySelector(".user-name");
    const userPhone = document.querySelector(".user-phone");
    const userEmail = document.querySelector(".user-email");
    const userImage = document.querySelector(".user-image");

    userName.value = user.name;
    userPhone.value = user.phone;
    userEmail.value = user.email;

    if (user.image?.length) {
        userImage.setAttribute("src", `${FILE_BASE_URL}${user.image}`);
    }

    // SHOW USER REVIEWS
    showUserReviews(user?.reviews);

    // SHOW USER ORDERS
    showUserOrders(user?.orders)
};