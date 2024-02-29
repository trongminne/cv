// Hiển thị thông báo giọng nói
swal.fire({
    title: "Điểu khiển website bằng giọng nói",
    html: "Nói 'hello' để bắt đầu nhận diện -> <br> Nói 'Thông tin cá nhân' <br> Nói 'Kinh nghiệm' <br> Nói 'Giáo dục' <br> Nói 'Kỹ năng' <br> Nói 'Sở thích' <br> Nói 'Giải thưởng' <br> nói 'kết thúc' để tắt",
    icon: "info",
    showConfirmButton: true, // Tắt nút OK
}).then(() => {
    // Hiển thị thông báo phím tắt sau khi thông báo giọng nói đã đóng
    return swal.fire({
        title: "Thông báo phím tắt",
        html: "Phím số 1: Thông tin cá nhân <br> Phím số 2: Kinh nghiệm <br> Phím số 3: Giáo dục <br> Phím số 4: Kỹ năng <br> Phím số 5: Sở thích <br> Phím số 6: Giải thưởng",
        icon: "info",
        showConfirmButton: true // Bật nút OK
    });
});
