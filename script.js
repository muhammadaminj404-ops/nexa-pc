document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PRODUCTS
    ========================================= */

    const products = [

        {
            id: 1,
            name: "NEXA GAMER X1",
            category: "pc",
            price: 12990000,
            oldPrice: 14500000,
            rating: 4.9,
            reviews: 48,
            badge: "TOP",
            image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=800&q=80",
            description: "Gaming va professional ishlar uchun kuchli tayyor kompyuter.",
            specs: {
                "CPU": "Intel Core i7",
                "GPU": "RTX 4060",
                "RAM": "32 GB DDR5",
                "SSD": "1 TB NVMe"
            }
        },

        {
            id: 2,
            name: "NEXA GAMER X2",
            category: "pc",
            price: 16990000,
            oldPrice: 18500000,
            rating: 4.8,
            reviews: 31,
            badge: "NEW",
            image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
            description: "Yuqori FPS va professional dasturlar uchun zamonaviy PC.",
            specs: {
                "CPU": "Ryzen 7",
                "GPU": "RTX 4070",
                "RAM": "32 GB",
                "SSD": "1 TB"
            }
        },

        {
            id: 3,
            name: "Intel Core i5-14600K",
            category: "cpu",
            price: 3890000,
            oldPrice: 4200000,
            rating: 4.9,
            reviews: 63,
            badge: "HOT",
            image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
            description: "Gaming va multitasking uchun kuchli Intel protsessori.",
            specs: {
                "Cores": "14",
                "Threads": "20",
                "Socket": "LGA1700",
                "Turbo": "5.3 GHz"
            }
        },

        {
            id: 4,
            name: "AMD Ryzen 7 7800X3D",
            category: "cpu",
            price: 5290000,
            oldPrice: 5600000,
            rating: 5,
            reviews: 74,
            badge: "GAMING",
            image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
            description: "Gaming uchun yuqori unumdor AMD protsessori.",
            specs: {
                "Cores": "8",
                "Threads": "16",
                "Socket": "AM5",
                "Cache": "96 MB"
            }
        },

        {
            id: 5,
            name: "NVIDIA RTX 4070 SUPER",
            category: "gpu",
            price: 8990000,
            oldPrice: 9500000,
            rating: 4.9,
            reviews: 42,
            badge: "PRO",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
            description: "1440p gaming va professional grafikalar uchun GPU.",
            specs: {
                "VRAM": "12 GB",
                "Memory": "GDDR6X",
                "Resolution": "1440p",
                "Ray Tracing": "Yes"
            }
        },

        {
            id: 6,
            name: "AMD Radeon RX 7800 XT",
            category: "gpu",
            price: 7590000,
            oldPrice: 8100000,
            rating: 4.8,
            reviews: 36,
            badge: "SALE",
            image: "https://images.unsplash.com/photo-1550829011-1a7f3d5b1d7f?auto=format&fit=crop&w=800&q=80",
            description: "Yuqori FPS uchun kuchli Radeon videokartasi.",
            specs: {
                "VRAM": "16 GB",
                "Memory": "GDDR6",
                "Bus": "256-bit",
                "Ray Tracing": "Yes"
            }
        },

        {
            id: 7,
            name: "Kingston Fury 32GB DDR5",
            category: "ram",
            price: 1190000,
            oldPrice: 1350000,
            rating: 4.9,
            reviews: 51,
            badge: "BEST",
            image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
            description: "Yuqori tezlikdagi DDR5 operativ xotira.",
            specs: {
                "Capacity": "32 GB",
                "Type": "DDR5",
                "Speed": "6000 MHz",
                "RGB": "Yes"
            }
        },

        {
            id: 8,
            name: "Corsair Vengeance 16GB",
            category: "ram",
            price: 690000,
            oldPrice: 780000,
            rating: 4.7,
            reviews: 28,
            badge: "SALE",
            image: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=75",
            description: "Gaming kompyuterlar uchun tezkor RAM.",
            specs: {
                "Capacity": "16 GB",
                "Type": "DDR4",
                "Speed": "3600 MHz",
                "RGB": "No"
            }
        },

        {
            id: 9,
            name: "Samsung 990 PRO 1TB",
            category: "ssd",
            price: 1590000,
            oldPrice: 1750000,
            rating: 4.9,
            reviews: 66,
            badge: "FAST",
            image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
            description: "Juda tezkor NVMe SSD.",
            specs: {
                "Capacity": "1 TB",
                "Interface": "PCIe 4.0",
                "Read": "7450 MB/s",
                "Type": "NVMe"
            }
        },

        {
            id: 10,
            name: "WD Black SN850X 2TB",
            category: "ssd",
            price: 2390000,
            oldPrice: 2650000,
            rating: 4.9,
            reviews: 39,
            badge: "PRO",
            image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80",
            description: "Katta hajm va yuqori tezlikka ega SSD.",
            specs: {
                "Capacity": "2 TB",
                "Interface": "PCIe 4.0",
                "Read": "7300 MB/s",
                "Type": "NVMe"
            }
        },

        {
            id: 11,
            name: "ASUS ROG STRIX B650E",
            category: "motherboard",
            price: 3790000,
            oldPrice: 4100000,
            rating: 4.8,
            reviews: 24,
            badge: "ROG",
            image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
            description: "AMD AM5 platformasi uchun premium motherboard.",
            specs: {
                "Socket": "AM5",
                "RAM": "DDR5",
                "WiFi": "Yes",
                "PCIe": "5.0"
            }
        },

        {
            id: 12,
            name: "MSI MAG Z790 TOMAHAWK",
            category: "motherboard",
            price: 3490000,
            oldPrice: 3800000,
            rating: 4.8,
            reviews: 19,
            badge: "MSI",
            image: "https://images.unsplash.com/photo-1592664474505-51c549ad15c5?auto=format&fit=crop&w=800&q=80",
            description: "Intel platformasi uchun kuchli motherboard.",
            specs: {
                "Socket": "LGA1700",
                "RAM": "DDR5",
                "WiFi": "Yes",
                "PCIe": "5.0"
            }
        },

        {
            id: 13,
            name: "Corsair RM850x 850W",
            category: "psu",
            price: 1690000,
            oldPrice: 1850000,
            rating: 4.9,
            reviews: 32,
            badge: "GOLD",
            image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
            description: "Kuchli gaming PC uchun 850W quvvat bloki.",
            specs: {
                "Power": "850W",
                "Efficiency": "80+ Gold",
                "Modular": "Full",
                "Fan": "135mm"
            }
        },

        {
            id: 14,
            name: "DeepCool LS720",
            category: "cooling",
            price: 1890000,
            oldPrice: 2100000,
            rating: 4.8,
            reviews: 21,
            badge: "COOL",
            image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
            description: "Yuqori samarali 360mm liquid cooling.",
            specs: {
                "Type": "Liquid",
                "Radiator": "360mm",
                "Fans": "3",
                "RGB": "Yes"
            }
        },

        {
            id: 15,
            name: "NZXT H7 Flow",
            category: "case",
            price: 1790000,
            oldPrice: 1990000,
            rating: 4.9,
            reviews: 44,
            badge: "DESIGN",
            image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=75",
            description: "Minimal va professional gaming korpus.",
            specs: {
                "Format": "ATX",
                "Fans": "3",
                "Glass": "Tempered",
                "Airflow": "High"
            }
        },

        {
            id: 16,
            name: "Lian Li O11 Dynamic",
            category: "case",
            price: 2090000,
            oldPrice: 2300000,
            rating: 4.9,
            reviews: 58,
            badge: "PREMIUM",
            image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=75",
            description: "Premium ko‘rinish va keng ichki makonga ega korpus.",
            specs: {
                "Format": "ATX",
                "Glass": "Dual",
                "Fans": "Optional",
                "RGB": "Yes"
            }
        }

    ];


    /* =========================================
       STATE
    ========================================= */

    let currentCategory = "all";
    let searchValue = "";

    let cart = JSON.parse(
        localStorage.getItem("nexaCart") || "[]"
    );

    let wishlist = JSON.parse(
        localStorage.getItem("nexaWishlist") || "[]"
    );


    /* =========================================
       ELEMENTS
    ========================================= */

    const productGrid = document.getElementById("productGrid");
    const searchInput = document.getElementById("searchInput");

    const cartBtn = document.getElementById("cartBtn");
    const cartDrawer = document.getElementById("cartDrawer");
    const closeCart = document.getElementById("closeCart");

    const overlay = document.getElementById("overlay");

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");

    const clearCartBtn = document.getElementById("clearCart");
    const checkoutBtn = document.getElementById("checkoutBtn");

    const wishlistBtn = document.getElementById("wishlistBtn");
    const wishlistModal = document.getElementById("wishlistModal");
    const closeWishlist = document.getElementById("closeWishlist");
    const wishlistItems = document.getElementById("wishlistItems");
    const wishlistCount = document.getElementById("wishlistCount");

    const quickViewModal = document.getElementById("quickViewModal");
    const quickViewContent = document.getElementById("quickViewContent");
    const closeQuickView = document.getElementById("closeQuickView");

    const toastContainer = document.getElementById("toastContainer");

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    const header = document.getElementById("header");


    /* =========================================
       MONEY
    ========================================= */

    function money(number) {

        return new Intl.NumberFormat("uz-UZ").format(number)
            + " so‘m";

    }


    /* =========================================
       SAVE
    ========================================= */

    function saveData() {

        localStorage.setItem(
            "nexaCart",
            JSON.stringify(cart)
        );

        localStorage.setItem(
            "nexaWishlist",
            JSON.stringify(wishlist)
        );

    }


    /* =========================================
       TOAST
    ========================================= */

    function showToast(message) {

        const toast = document.createElement("div");

        toast.className = "toast";

        toast.textContent = message;

        toastContainer.appendChild(toast);

        setTimeout(() => {

            toast.remove();

        }, 2500);

    }


    /* =========================================
       RENDER PRODUCTS
    ========================================= */

    function renderProducts() {

        const filtered = products.filter(product => {

            const categoryMatch =
                currentCategory === "all" ||
                product.category === currentCategory;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());

            return categoryMatch && searchMatch;

        });


        if (filtered.length === 0) {

            productGrid.innerHTML = `
                <div style="
                    grid-column:1/-1;
                    padding:70px;
                    text-align:center;
                    color:#666;
                ">
                    <h3>Mahsulot topilmadi</h3>
                    <p style="margin-top:8px">
                        Boshqa nom bilan qidirib ko‘ring.
                    </p>
                </div>
            `;

            return;

        }


        productGrid.innerHTML = filtered.map(product => {

            const liked = wishlist.includes(product.id);

            return `

                <article class="product-card">

                    <div class="product-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                        <span class="badge">
                            ${product.badge}
                        </span>

                        <button
                            class="wishlist-card-btn ${liked ? "active" : ""}"
                            data-action="wishlist"
                            data-id="${product.id}"
                            title="Sevimliga qo‘shish"
                        >
                            <i data-lucide="heart"></i>
                        </button>

                    </div>


                    <div class="product-body">

                        <div class="product-category">
                            ${categoryName(product.category)}
                        </div>

                        <h3 class="product-title">
                            ${product.name}
                        </h3>

                        <div class="rating">
                            ★ ${product.rating}
                            <span>(${product.reviews})</span>
                        </div>

                        <div class="price-row">

                            <strong class="price">
                                ${money(product.price)}
                            </strong>

                            <span class="old-price">
                                ${money(product.oldPrice)}
                            </span>

                        </div>


                        <div class="product-actions">

                            <button
                                class="add-btn"
                                data-action="add"
                                data-id="${product.id}"
                            >
                                Savatga qo‘shish
                            </button>

                            <button
                                class="view-btn"
                                data-action="view"
                                data-id="${product.id}"
                                title="Batafsil"
                            >
                                <i data-lucide="eye"></i>
                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");


        lucide.createIcons();

    }


    function categoryName(category) {

        const names = {

            pc: "Kompyuter",
            cpu: "Protsessor",
            gpu: "Videokarta",
            ram: "RAM",
            ssd: "SSD",
            motherboard: "Motherboard",
            psu: "Quvvat bloki",
            cooling: "Sovutish",
            case: "Korpus"

        };

        return names[category] || category;

    }


    /* =========================================
       ADD CART
    ========================================= */

    function addToCart(id) {

        const existing = cart.find(
            item => item.id === id
        );

        if (existing) {

            existing.qty++;

        } else {

            cart.push({
                id: id,
                qty: 1
            });

        }

        saveData();

        renderCart();

        updateCounters();

        showToast("Mahsulot savatchaga qo‘shildi ✓");

    }


    /* =========================================
       CART
    ========================================= */

    function renderCart() {

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i data-lucide="shopping-cart"></i>
                    <p>Savatcha hozircha bo‘sh</p>
                </div>
            `;

            cartTotal.textContent = "0 so‘m";

            lucide.createIcons();

            return;

        }


        let total = 0;


        cartItems.innerHTML = cart.map(item => {

            const product = products.find(
                p => p.id === item.id
            );

            if (!product) return "";

            total += product.price * item.qty;


            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="cart-item-info">

                        <h4>${product.name}</h4>

                        <p>${money(product.price)}</p>

                        <div class="qty">

                            <button
                                data-cart-action="minus"
                                data-id="${product.id}"
                            >
                                −
                            </button>

                            <span>${item.qty}</span>

                            <button
                                data-cart-action="plus"
                                data-id="${product.id}"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        class="remove-item"
                        data-cart-action="remove"
                        data-id="${product.id}"
                    >
                        <i data-lucide="trash-2"></i>
                    </button>

                </div>

            `;

        }).join("");


        cartTotal.textContent = money(total);

        lucide.createIcons();

    }


    function updateCounters() {

        const totalQty = cart.reduce(
            (sum, item) => sum + item.qty,
            0
        );

        cartCount.textContent = totalQty;

        wishlistCount.textContent = wishlist.length;

    }


    /* =========================================
       CART ACTIONS
    ========================================= */

    function changeQuantity(id, amount) {

        const item = cart.find(
            item => item.id === id
        );

        if (!item) return;

        item.qty += amount;

        if (item.qty <= 0) {

            cart = cart.filter(
                item => item.id !== id
            );

        }

        saveData();

        renderCart();

        updateCounters();

    }


    function removeFromCart(id) {

        cart = cart.filter(
            item => item.id !== id
        );

        saveData();

        renderCart();

        updateCounters();

        showToast("Mahsulot savatchadan o‘chirildi");

    }


    /* =========================================
       WISHLIST
    ========================================= */

    function toggleWishlist(id) {

        if (wishlist.includes(id)) {

            wishlist = wishlist.filter(
                item => item !== id
            );

            showToast("Sevimlilardan olib tashlandi");

        } else {

            wishlist.push(id);

            showToast("Sevimlilarga qo‘shildi ❤️");

        }

        saveData();

        updateCounters();

        renderProducts();

        renderWishlist();

    }


    function renderWishlist() {

        if (wishlist.length === 0) {

            wishlistItems.innerHTML = `
                <div class="wishlist-empty">
                    ❤️
                    <p>Sevimli mahsulotlar yo‘q.</p>
                </div>
            `;

            return;

        }


        wishlistItems.innerHTML = wishlist.map(id => {

            const product = products.find(
                p => p.id === id
            );

            if (!product) return "";

            return `

                <div class="wishlist-row">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>

                        <h4>${product.name}</h4>

                        <p>${money(product.price)}</p>

                    </div>

                    <button
                        class="close-btn"
                        data-wish-remove="${product.id}"
                    >
                        <i data-lucide="trash-2"></i>
                    </button>

                </div>

            `;

        }).join("");


        lucide.createIcons();

    }


    /* =========================================
       QUICK VIEW
    ========================================= */

    function openQuickView(id) {

        const product = products.find(
            p => p.id === id
        );

        if (!product) return;


        const specs = Object.entries(product.specs)
            .map(([key, value]) => {

                return `
                    <div class="spec">
                        <span>${key}</span>
                        <strong>${value}</strong>
                    </div>
                `;

            }).join("");


        quickViewContent.innerHTML = `

            <div class="quick-product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <span class="section-label">
                        ${categoryName(product.category)}
                    </span>

                    <h2>${product.name}</h2>

                    <div class="rating">
                        ★ ${product.rating}
                        <span>(${product.reviews} sharh)</span>
                    </div>

                    <p>
                        ${product.description}
                    </p>

                    <div class="specs">
                        ${specs}
                    </div>

                    <h3 style="margin-bottom:15px">
                        ${money(product.price)}
                    </h3>

                    <button
                        class="btn btn-primary full"
                        data-quick-add="${product.id}"
                    >
                        Savatga qo‘shish
                        <i data-lucide="shopping-cart"></i>
                    </button>

                </div>

            </div>

        `;


        quickViewModal.classList.add("active");

        document.body.classList.add("no-scroll");

        lucide.createIcons();

    }


    /* =========================================
       PRODUCT EVENTS
    ========================================= */

    productGrid.addEventListener("click", event => {

        const button = event.target.closest("button");

        if (!button) return;

        const id = Number(button.dataset.id);

        const action = button.dataset.action;


        if (action === "add") {

            addToCart(id);

        }


        if (action === "wishlist") {

            toggleWishlist(id);

        }


        if (action === "view") {

            openQuickView(id);

        }

    });


    /* =========================================
       FILTERS
    ========================================= */

    document
        .getElementById("filters")
        .addEventListener("click", event => {

            const button =
                event.target.closest(".filter");

            if (!button) return;

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderProducts();

        });


    /* =========================================
       SEARCH
    ========================================= */

    searchInput.addEventListener("input", event => {

        searchValue = event.target.value;

        renderProducts();

    });


    /* =========================================
       CART OPEN / CLOSE
    ========================================= */

    function openCart() {

        cartDrawer.classList.add("active");

        overlay.classList.add("active");

        document.body.classList.add("no-scroll");

    }


    function closeCartDrawer() {

        cartDrawer.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("no-scroll");

    }


    cartBtn.addEventListener("click", openCart);

    closeCart.addEventListener(
        "click",
        closeCartDrawer
    );

    overlay.addEventListener(
        "click",
        closeCartDrawer
    );


    /* =========================================
       CART BUTTONS
    ========================================= */

    cartItems.addEventListener("click", event => {

        const button =
            event.target.closest("button");

        if (!button) return;

        const id =
            Number(button.dataset.id);

        const action =
            button.dataset.cartAction;


        if (action === "plus") {

            changeQuantity(id, 1);

        }

        if (action === "minus") {

            changeQuantity(id, -1);

        }

        if (action === "remove") {

            removeFromCart(id);

        }

    });


    /* =========================================
       CLEAR CART
    ========================================= */

    clearCartBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            showToast("Savatcha allaqachon bo‘sh");

            return;

        }

        cart = [];

        saveData();

        renderCart();

        updateCounters();

        showToast("Savatcha tozalandi");

    });


    /* =========================================
       CHECKOUT
    ========================================= */

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            showToast("Avval mahsulot qo‘shing");

            return;

        }

        showToast(
            "Buyurtmangiz qabul qilindi! ✓"
        );

        cart = [];

        saveData();

        renderCart();

        updateCounters();

        closeCartDrawer();

    });


    /* =========================================
       WISHLIST MODAL
    ========================================= */

    wishlistBtn.addEventListener("click", () => {

        renderWishlist();

        wishlistModal.classList.add("active");

        document.body.classList.add("no-scroll");

    });


    closeWishlist.addEventListener("click", () => {

        wishlistModal.classList.remove("active");

        document.body.classList.remove("no-scroll");

    });


    wishlistModal.addEventListener("click", event => {

        if (event.target === wishlistModal) {

            wishlistModal.classList.remove("active");

            document.body.classList.remove("no-scroll");

        }

    });


    wishlistItems.addEventListener("click", event => {

        const button =
            event.target.closest("[data-wish-remove]");

        if (!button) return;

        const id =
            Number(button.dataset.wishRemove);

        toggleWishlist(id);

    });


    /* =========================================
       QUICK VIEW
    ========================================= */

    closeQuickView.addEventListener("click", () => {

        quickViewModal.classList.remove("active");

        document.body.classList.remove("no-scroll");

    });


    quickViewModal.addEventListener("click", event => {

        if (event.target === quickViewModal) {

            quickViewModal.classList.remove("active");

            document.body.classList.remove("no-scroll");

        }

    });


    quickViewContent.addEventListener("click", event => {

        const button =
            event.target.closest("[data-quick-add]");

        if (!button) return;

        const id =
            Number(button.dataset.quickAdd);

        addToCart(id);

        quickViewModal.classList.remove("active");

        document.body.classList.remove("no-scroll");

    });


    /* =========================================
       MOBILE MENU
    ========================================= */

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon =
            navLinks.classList.contains("active")
                ? "x"
                : "menu";

        menuBtn.innerHTML =
            `<i data-lucide="${icon}"></i>`;

        lucide.createIcons();

    });


    navLinks.addEventListener("click", event => {

        if (event.target.tagName === "A") {

            navLinks.classList.remove("active");

            menuBtn.innerHTML =
                `<i data-lucide="menu"></i>`;

            lucide.createIcons();

        }

    });


    /* =========================================
       CATEGORY QUICK LINKS
    ========================================= */

    document.querySelectorAll(
        "[data-jump-category]"
    ).forEach(link => {

        link.addEventListener("click", () => {

            const category =
                link.dataset.jumpCategory;

            currentCategory = category;

            document
                .querySelectorAll(".filter")
                .forEach(button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.category === category
                    );

                });

            renderProducts();

        });

    });


    /* =========================================
       CONTACT FORM
    ========================================= */

    document
        .getElementById("contactForm")
        .addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("nameInput").value.trim();

            if (!name) {

                showToast("Ismingizni kiriting");

                return;

            }

            showToast(
                `Rahmat, ${name}! Xabaringiz yuborildi ✓`
            );

            event.target.reset();

        });


    /* =========================================
       HEADER SCROLL
    ========================================= */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: .12
            }
        );


    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            observer.observe(element);

        });


    /* =========================================
       COUNTERS
    ========================================= */

    const stats =
        document.querySelectorAll(
            "[data-target]"
        );

    let counterStarted = false;


    const counterObserver =
        new IntersectionObserver(entries => {

            if (
                entries[0].isIntersecting &&
                !counterStarted
            ) {

                counterStarted = true;

                stats.forEach(stat => {

                    const target =
                        Number(stat.dataset.target);

                    let current = 0;

                    const step =
                        Math.max(1, Math.ceil(target / 50));

                    const timer =
                        setInterval(() => {

                            current += step;

                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }

                            stat.textContent =
                                current.toLocaleString("uz-UZ");

                        }, 30);

                });

            }

        });


    if (stats.length) {

        counterObserver.observe(
            stats[0].parentElement
        );

    }


    /* =========================================
       LEAFLET MAP
    ========================================= */

    if (typeof L !== "undefined") {

        const shopLocation =
            [41.2856, 69.2035];

        const map =
            L.map("map").setView(
                shopLocation,
                14
            );

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution:
                    "&copy; OpenStreetMap contributors"
            }
        ).addTo(map);


        L.marker(shopLocation)
            .addTo(map)
            .bindPopup(`
                <b>NEXA PC</b><br>
                Demo manzil — Toshkent, Chilonzor
            `)
            .openPopup();

    }


    /* =========================================
       INITIALIZE
    ========================================= */

    renderProducts();

    renderCart();

    renderWishlist();

    updateCounters();

    lucide.createIcons();

});