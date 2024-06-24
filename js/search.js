document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results');
    const cakeItems = document.querySelectorAll('.cake-item');

    // Hàm để hiển thị kết quả tìm kiếm
    function showSearchResults(keyword) {
        keyword = keyword.toLowerCase(); // Chuyển đổi keyword thành chữ thường

        cakeItems.forEach(item => {
            const cakeName = item.getAttribute('data-name').toLowerCase();
            const imgElement = item.querySelector('img');

            if (cakeName.includes(keyword)) {
                item.style.display = 'block'; // Hiển thị phần tử nếu tên bánh chứa keyword
            } else {
                item.style.display = 'none'; // Ẩn phần tử nếu tên bánh không chứa keyword
            }
        });
    }

    // Xử lý khi nhấn nút Tìm kiếm
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim(); // Lấy giá trị từ ô tìm kiếm và loại bỏ khoảng trắng đầu cuối

        if (searchTerm !== '') {
            showSearchResults(searchTerm);
        } else {
            // Nếu ô tìm kiếm trống, hiển thị tất cả các bánh
            cakeItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    });

    // Xử lý khi nhập liệu trong ô tìm kiếm
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim(); // Lấy giá trị từ ô tìm kiếm và loại bỏ khoảng trắng đầu cuối

        if (searchTerm !== '') {
            showSearchResults(searchTerm);
        } else {
            // Nếu ô tìm kiếm trống, hiển thị tất cả các bánh
            cakeItems.forEach(item => {
                item.style.display = 'block';
            });
        }
    });
});
