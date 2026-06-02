// 1. Fungsi khusus untuk mengambil data pesanan
async function fetchOrderData(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: {
            'Authorization': token
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

// 2. Fungsi khusus untuk merender/menulis HTML pesanan
function renderOrderDetails(order, containerElement) {
    containerElement.innerHTML = '';

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;
    containerElement.appendChild(header);

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;
    containerElement.appendChild(status);
}

// 3. Fungsi khusus untuk mengatur tombol konfirmasi
function setupConfirmAction(confirmBtn, order, token) {
    if (order.status === 'Delivered') {
        confirmBtn.style.display = 'none';
    } else {
        confirmBtn.style.display = 'block'; 
        // Menggunakan onclick agar tidak menumpuk event listener jika dipanggil berulang
        confirmBtn.onclick = () => confirmOrder(order.id, token);
    }
}

// 4. Fungsi koordinator utama (Main Function)
function fetchOrderDetails(orderId, token) {
    const modal = document.getElementById('orderModal');
    const detailsDiv = modal.querySelector('#orderDetails');
    const closeBtn = modal.querySelector('.close');
    const confirmBtn = modal.querySelector('#confirmOrderBtn');

    fetchOrderData(orderId, token)
        .then(order => {
            renderOrderDetails(order, detailsDiv);
            setupConfirmAction(confirmBtn, order, token);
            
            modal.style.display = 'block';

            closeBtn.onclick = () => {
                modal.style.display = 'none';
            };
        })
        .catch(error => {
            console.error('Error fetching order:', error);
        });
}