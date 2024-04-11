# Hotel

- name(string): Tên khách sạn
- rating(number): Số sao đánh giá trung bình (trên thang điểm 5)
- totalRating(number): Tổng số lượt đánh giá
- address(string): Địa điểm khách sạn
- listImage(string): Danh sách ảnh khách sạn
- utilities(array): Các tiện ích khi thuê phòng
- description(string): Mô tả về khách sạn
- features(array): Đặc điểm của khách sạn
  - icon(string)
  - name(string)
- amenities(array): Tiện nghi của khách sạn
  - icon(string)
  - name(string)
- price(number): Giá phòng khách sạn 1 đêm
- quantity(number): Số người trong 1 phòng
- discount(object): Số phần trăm, tiền giảm giá (nếu có)
  - percent(number)
  - price(number)
- listReview(array): Danh sách đánh giá về khách sạn
  - author(object): Người đánh giá
    - name(string)
    - avatar(string)
    - location(string)
    - followers(number)
    - reviews(number)
  - rating(number)
  - date(date)
  - comment(string)

```typescript
interface Hotel {
  name: string;
  rating: number;
  totalRating: number;
  address: string;
  listImage: string[];
  utilities: string[];
  description: string;
  features: Feature[];
  price: number;
  quantity: number;
  discount?: Discount;
  listReview: Review[];
}

interface Feature {
  icon: string;
  name: string;
}

interface Amenity {
  icon: string;
  name: string;
}

interface Discount {
  percent: number;
  price: number;
}

interface Passengers {
  adults: number;
  children: number;
  infants: number;
}

interface Review {
  author: Author;
  rating: number;
  date: Date;
  comment: string;
}

interface Author {
  name: string;
  avatar: string;
  location: string;
  followers: number;
  reviews: number;
}
```

# Flight

- name(string): Tên chuyến bay
- type(string): Loại chuyến bay (VD: non stop...)
- durations(number): Thời lượng chuyến bay (VD: 1000000ms)
- departureDate(date): Ngày khởi hành
- airline(object): Hãng hàng không
  - name(string)
  - logo(string)
- departureTime(number): Giờ khởi hành
- landingTime(number): Giờ hạ cánh
- landingDate(date): Ngày hạ cánh
- departureLocation(string): Điểm khởi hành
- landingLocation(string): Điểm hạ cánh
- baggageWeight(number): Trọng lượng hành lý cho phép
- meals(string): Bữa ăn (VD: Lunch, Dinner, Meals not available)
- price(number): Giá của chuyến bay
- quantity(number): Số lượng chỗ ngồi còn lại
- passengerDetails(object): Thông tin chi tiết về hành khách
  - adults(array): Hành khách là người lớn
    - name(string)
    - gender(string)
    - birthday(date)
  - children(array): Hành khách là trẻ con
    - name(string)
    - gender(string)
    - birthday(date)
  - infants(array): Hành khách là trẻ sơ sinh
    - gender(string)
    - birthday(date)
- contactDetails(object): Thông tin liên hệ chi tiết
  - email(string)
  - address(string)
  - phoneNumber(number)
  - cityName(string)
  - country(string)
- discount(object): Số phần trăm, tiền giảm giá (nếu có)
  - percent(number)
  - price(number)

```typescript
interface Flight {
  name: string;
  type: string;
  durations: number;
  departureDate: Date;
  airline: Airline;
  departureTime: number;
  landingTime: number;
  landingDate: Date;
  departureLocation: string;
  landingLocation: string;
  baggageWeight: number;
  meals: string;
  price: number;
  quantity: number;
  checkInBaggage: CheckInBaggage;
  passengerDetails: PassengerDetails;
  contactDetails: ContactDetails;
  discount?: Discount;
}

interface Airline {
  name: string;
  logo: string;
}

interface Passengers {
  adults: number;
  children: number;
  infants: number;
}

interface CheckInBaggage {
  departure: Baggage;
  return: Baggage;
}

interface Baggage {
  bags: number;
  totalWeight: number;
}

interface PassengerDetails {
  adults: Adult[];
  children: Child[];
  infants: Infant[];
}

interface Adult {
  name: string;
  gender: string;
  birthday: Date;
}

interface Child {
  name: string;
  gender: string;
  birthday: Date;
}

interface Infant {
  gender: string;
  birthday: Date;
}

interface ContactDetails {
  email: string;
  address: string;
  phoneNumber: number;
  cityName: string;
  country: string;
}

interface Discount {
  percent: number;
  price: number;
}
```

# Car rental

- name(string): Tên loại xe
- rating(number): Số sao đánh giá trung bình (trên thang điểm 5)
- totalRating(number): Tổng số lượt đánh giá
- listImage(array): Danh sách ảnh về xe
- status(number): Tình trạng xe (VD: có sẵn)
- type(number): Loại xe
- featuredList(array): Danh sách những điều đặc sắc của xe :|
  - icon(string)
  - name(string)
- infoList(array): Các thông tin về xe
- description(string): Mô tả về xe
- location(string): Địa điểm nhận xe
- price(number): Giá xe một ngày
- seats(number): Tổng số chỗ ngồi
- childSeat(object): Ghế trẻ em
  - seats(number)
  - price(number)
- discount(object): Số phần trăm, tiền giảm giá (nếu có)
  - percent(number)
  - price(number)
- listReview(array): Danh sách đánh giá về xe
  - author(object): Người đánh giá
    - name(string)
    - avatar(string)
    - location(string)
    - followers(number)
    - reviews(number)
  - rating(number)
  - date(date)
  - comment(string)

```typescript
interface CarRental {
  name: string;
  rating: number;
  totalRating: number;
  listImage: string[];
  status: number;
  type: number;
  featuredList: Featured[];
  infoList: string[];
  description: string;
  location: string;
  price: number;
  seats: number;
  childSeat: ChildSeat;
  discount?: Discount;
  listReview: Review[];
}

interface Featured {
  icon: string;
  name: string;
}

interface DriverDetails {
  name: string;
  phoneNumber: number;
  email: string;
  gender: string;
}

interface ChildSeat {
  seats: number;
  price: number;
}

interface Discount {
  percent: number;
  price: number;
}

interface Review {
  author: Author;
  rating: number;
  date: Date;
  comment: string;
}

interface Author {
  name: string;
  avatar: string;
  location: string;
  followers: number;
  reviews: number;
}
```

# Bookings

- name(string): Tên của hotel/flight/car khi booking
- category(number): Các loại booking (hotel, flight, car-rental)
- checkInDate(Date): Ngày check-in
- checkOutDate(Date): Ngày check-out
- passengers(object): Số lượng hành khách theo các loại (người lớn, trẻ con, trẻ sơ sinh)
  - adults(number)
  - children(number)
  - infants(number)
- baggageType(string): Loại hành lý -> Dành cho flight
- listServiceExtra(array): Các dịch vụ bổ sung (nếu có) -> Dành cho cả hotel, flight, car
  - name(string)
  - price(number)
- driverDetails(object): Thông tin của tài xế -> Dành cho car-rental
  - name(string)
  - phoneNumber(number)
  - email(string)
  - gender(string)
- totalPrice(number): Tổng giá của booking
- discount(object): Số phần trăm, tiền giảm giá (nếu có)
  - percent(number)
  - price(number)

```typescript
interface Booking {
  name: string;
  category: number; // 0: hotel, 1: flight, 2: car-rental
  checkInDate: Date;
  checkOutDate: Date;
  passengers: Passengers;
  baggageType?: number; // Chỉ dành cho flight
  listServiceExtra: ServiceExtra[];
  driverDetails?: DriverDetails; // Chỉ dành cho car-rental
  totalPrice: number;
  discount?: Discount;
}

interface Passengers {
  adults: number;
  children: number;
  infants: number;
}

interface ServiceExtra {
  name: string;
  price: number;
}

interface DriverDetails {
  name: string;
  phoneNumber: number;
  email: string;
  gender: string;
}

interface Discount {
  percent: number;
  price: number;
}
```

# Users

- fullName(string): Họ và tên
- username(string): Tên người dùng
- email(string): Email người dùng
- phoneNumber(string): Số điện thoại người dùng
- avatarImage(string): Ảnh đại diện
- status(number): Trạng thái người dùng -> Unverified, Verified, Banned
- address(string): Địa chỉ
- liveIn(string): Chỗ ở hiện tại
- dateOfBirth(Date): Ngày sinh
- gender(number): Giới tính -> Male, Female
- language(number): Loại ngôn ngữ người dùng mong muốn
- website(string): Địa chỉ website của người dùng
- createdAt(Date): Thời gian người dùng được tạo ra
- updatedAt(Date): Thời gian người dùng được cập nhật
- refreshToken(string): Refresh token của tài khoản
- emailVerifyToken(string): Token khi xác thực email
- forgotPasswordToken(string): Token khi quên mật khẩu

```typescript
interface User {
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  avatarImage: string;
  status: UserStatus;
  address: string;
  liveIn: string;
  dateOfBirth: Date;
  gender: Gender;
  language: Language;
  website: string;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string;
  emailVerifyToken: string;
  forgotPasswordToken: string;
}

enum UserStatus {
  Unverified,
  Verified,
  Banned,
}

enum Gender {
  Male,
  Female,
}

enum Language {
  Vietnamese,
  English,
}
```
