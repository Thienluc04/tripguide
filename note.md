### Các chức năng chính

- Đăng nhập/Đăng ký (có OAuth 2.0 đăng nhập/đăng ký với google) --> Done
- Đổi mật khẩu --> Done
- Quên mật khẩu --> Done
- Tìm kiếm, lọc hotel, flight, car
- Đánh giá về hotel và car -> Rating, Comment
- Booking khách sạn, máy bay, thuê xe.
- Edit profile --> Done
- Danh sách booking, lọc bookings theo upcoming (sắp tới), cancelled (đã hủy)

## Các chức năng bổ sung

- Chuyển đổi ngôn ngữ Anh/Việt
- Thông báo
- Like, reply review
- Các trang dành cho Admin:
    - Quản lý hotel: Thêm, sửa, xóa
    - Quản lý flight: Thêm, sửa, xóa
    - Quản lý car rental: Thêm, sửa, xóa

### Mô tả chi tiết luồng nghiệp vụ

- Chung:
    - Ngày check-in và check-out sẽ được lưu ở bookings
    - Extra features (các chức năng bổ sung):
        - Có ở mọi loại booking
        - Khi chọn, tên và giá sẽ được lưu ở bookings
    - Giá theo 3 loại khách hàng:
        - Người lớn: full price
        - Trẻ con: 50% giá
        - Trẻ sơ sinh: free
    - Nếu như chọn quá số người cho phép trong 1 phòng thì sẽ thông báo
    - Khi đăng ký, chỉ để trường name (bỏ first name và last name)
        
- Khách sạn:
    - Một khách sạn có thể có nhiều phòng
    - Số % sale off sẽ được cố định
    - Extra features khi chọn sẽ được thêm vào utilities(các tiện ích)
    - Khi chọn extra features, giá sẽ được thêm vào và lưu bên bookings
    - Phải chọn phòng mới được bookings

- Chuyến bay:
    - Nếu như chọn quá số ghế còn trống trong chuyến bay thì sẽ thông báo
    - Passenger Details (thông tin hành khách) -> Sẽ được lưu ở bookings
    - Contact Details (chi tiết liên hệ) -> Sẽ được lưu ở bookings

- Thuê xe ô tô: 
    - driverDetails (thông tin của tài xế) sẽ được lưu trong bookings
    - type (loại xe) sẽ bao gồm: Small, Large, Premium, SUVs, People carries

- Người dùng:
    - Khi mới được tạo, createdAt và updatedAt có thời gian giống nhau
    - Password -> Mật khẩu sẽ được mã hóa 1 chiều (hashMap)
    - confirmPassword vẫn sẽ được chuyền lên api nhưng ko lưu ở database
