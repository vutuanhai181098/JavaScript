const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Viết function tính thứ hạng trung bình của cả lớp
const avgGrade = (arr) => arr.reduce((sum, e) => sum + e.grade , 0) / arr.length;

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
const avgGradeBySex = (arr, sex) => avgGrade(arr.filter((e) => e.sex == sex))

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const highestRankBySex = (arr, sex) => arr.filter((e) => e.sex == sex).sort((e1, e2) => e2.grade - e1.grade)[0]


// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const lowestRankBySex = (arr, sex) => arr.filter((e) => e.sex == sex).sort((e1, e2) => e1.grade - e2.grade)[0]


// 8. Viết function thứ hạng cao nhất của cả lớp
const highestRank = (arr) => arr.sort((e1, e2) => e2.grade - e1.grade)[0]

// 9. Viết function thứ hạng thấp nhất của cả lớp
const lowestRank = (arr) => arr.sort((e1, e2) => e1.grade - e2.grade)[0]

// 10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const findFemale = (arr) => arr.filter((e) => e.sex == 'F')

// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const sortByName = (arr) => arr.sort((e1, e2) => e1.name.toLowerCase().localeCompare(e2.name.toLowerCase()))

// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const sortByGrade = (arr) => arr.sort((e1, e2) => e2.grade - e1.grade)

// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const findByName = (arr, sex, char) => arr.filter((e) => e.sex == sex && e.name.charAt(0) == char)

// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const findTop5 = (arr) => sortByGrade(arr).splice(0, 5)
