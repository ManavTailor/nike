let filterArray = [];
const products = [
    {
        img: "images/essen1.jpg",
        name: "Men",
        category: "Nike Air Max"
    },
    {
        img: "images/wessen.jpg",
        name: "Women",
        category: "Nike Zoom"
    },
    {
        img: "images/kessen.jpg",
        name: "Kid",
        category: "Nike Free Run"
    },
];

const postContainer = document.getElementById('product-container');

const postMethods = (data) => {
    postContainer.innerHTML = ''; // Clear previous content

    data.forEach((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('relative');
        postElement.innerHTML = `
            <img src="${postData.img}" class="w-full">
            <div class="over absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
                <button class="text-black bg-white border rounded-full px-4 py-2">${postData.name}</button>
            </div>
        `;
        postContainer.appendChild(postElement);
    });
};

postMethods(products);


document.getElementById("find").addEventListener("keyup", function search() {
    const text = this.value.toLowerCase();

    const filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(text);
    });

    const filteredProductsContainer = document.querySelector('.filtered-products');
    filteredProductsContainer.innerHTML = ''; // Clear previous content

    if (filteredProducts.length === 0) {
        filteredProductsContainer.innerHTML = '<p>No matching products found.</p>';
    } else {
        filteredProducts.forEach(function (product) {
            const productElement = document.createElement('div');
            productElement.classList.add('relative');
            productElement.innerHTML = `
                <img src="${product.img}" class="w-full">
                <div class="over absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg">
                    <button class="text-black bg-white border rounded-full px-4 py-2">${product.name}</button>
                </div>`;
            filteredProductsContainer.appendChild(productElement);
        });
    }
});



