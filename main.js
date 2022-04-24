/**
 * Bài 1
 * 
 * Đầu vào:
 *  - Nhập ngày
 *  - Nhập tháng
 *  - Nhập năm
 *  - var nd;
 *  - var nm;
 *  - var ny;
 * Xử lý:
 * 
 * Ngày hôm qua
 *  nếu ngày <= 31 và tháng <= 12 và năm > 0
        nếu tháng = 2, 4, 6, 9, 11
            nếu ngày > 1
                nd = ngày - 1;
                nm = tháng;
                ny = năm;
            } ngược lại {
                nd = 31;
                nm = tháng - 1;
                ny = năm;
            }
        } ngược lại nếu tháng = 5, 7, 8, 10 , 12
            nếu ngày > 1
                nd = ngày - 1;
                nm = tháng;
                ny = năm;
            } else {
                nd = 30;
                nm = tháng -1;
                ny = năm;
            }
        } else if(m == 3){
            nếu ngày > 1
                nd = ngày - 1;
                nm = tháng;
                ny = năm;
            } else{
                nd = 28;
                nm = tháng -1;
                ny = năm;
            }
        } else if(m == 1){
            nếu ngày > 1
                nd = ngày - 1;
                nm = tháng;
                ny = năm;
            } else{
                nd = 31;
                nm = 12;
                ny = năm - 1;
            }
        };
    };
 * 
 *
 * Ngày mai
 * nếu ngày <= 31 và tháng <= 12 và năm > 0
        nếu tháng = 4, 6, 9, 11
            nếu ngày < 30
                nd = ngày + 1
                nm = tháng
                ny = năm
            } ngược lại {
                nd = 1;
                nm = tháng + 1;
                ny = năm;
            }
        } ngược lại nếu tháng = 1, 3, 5, 7, 8, 10 
            nếu ngày < 31
                nd = ngày + 1
                nm = tháng
                ny = năm
            } else {
                nd = 1;
                nm = tháng + 1;
                ny = năm;
            }
        } ngược lại nếu tháng = 12
            nếu ngày < 31
                nd = ngày + 1
                nm = tháng
                ny = năm
            } ngược lại{
                nd = 1;
                nm = 1;
                ny = năm + 1;
            }
        }  ngược lại nếu tháng = 2
            nếu ngày < 28
                nd = ngày + 1
                nm = tháng
                ny = năm
            } ngược lại{
                nd = 1;
                nm = tháng + 1;
                ny = năm;
            }
        };
    };
 * Đầu ra:
 * log ra ngày hôm qua và ngày mai
 * 
 */

document.getElementById("ngayHomQua").onclick = function () {
    var d = document.getElementById("ngay").value * 1;
    var m = document.getElementById("thang").value * 1;
    var y = document.getElementById("nam").value * 1;
    var nd;
    var ny;
    var nm;

    if (d <= 31 && m <= 12 && y > 0) {
        if (m == 2 || m == 4 || m == 6 || m == 9 || m == 11) {
            if (d > 1) {
                nd = d - 1;
                nm = m;
                ny = y;
            } else {
                nd = 31;
                nm = m - 1;
                ny = y;
            }
        } else if (m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            if (d > 1) {
                nd = d - 1;
                nm = m;
                ny = y;
            } else {
                nd = 30;
                nm = m - 1;
                ny = y;
            }
        } else if (m == 3) {
            if (d > 1) {
                nd = d - 1;
                nm = m;
                ny = y
            } else {
                nd = 28;
                nm = m - 1;
                ny = y;
            }
        } else if (m == 1) {
            if (d > 1) {
                nd = d - 1;
                nm = m;
                ny = y;
            } else {
                nd = 31;
                nm = 12;
                ny = y - 1;
            }
        };
    };

    document.getElementById("show_1").innerHTML = "Hôm qua là " + "Ngày " + nd + " Tháng " + nm + " Năm " + ny;
}

document.getElementById("ngayMai").onclick = function () {
    var d = document.getElementById("ngay").value * 1;
    var m = document.getElementById("thang").value * 1;
    var y = document.getElementById("nam").value * 1;
    var nd;
    var ny;
    var nm;

    if (d <= 31 && m <= 12 && y > 0) {
        if (m == 4 || m == 6 || m == 9 || m == 11) {
            if (d < 30) {
                nd = d + 1;
                nm = m;
                ny = y;
            } else {
                nd = 1;
                nm = m + 1;
                ny = y;
            }
        } else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10) {
            if (d < 31) {
                nd = d + 1;
                nm = m;
                ny = y;
            } else {
                nd = 1;
                nm = m + 1;
                ny = y;
            }
        } else if (m == 12) {
            if (d < 31) {
                nd = d + 1;
                nm = m;
                ny = y;
            } else {
                nd = 1;
                nm = 1;
                ny = y + 1;
            }
        } else if (m == 2) {
            if (d < 28) {
                nd = d + 1;
                nm = m;
                ny = y
            } else {
                nd = 1;
                nm = m + 1;
                ny = y;
            }
        };
    };

    document.getElementById("show_1").innerHTML = "Hôm mai là " + "Ngày " + nd + " Tháng " + nm + " Năm " + ny;
}


/**
 * Bài 2
 * 
 * Đầu vào:
 *  - Nhập tháng
 *  - Nhập năm
 *  - var dd
 * Xử lý:
 * Nếu tháng < 13 và năm > 0
        nếu tháng = 11, 3, 5, 7 ,8 ,10, 12
                dd = 31
            ngược lại nếu tháng = 4, 6, 9, 11
                dd = 30
            ngược lại nếu tháng = 2
                nếu năm chia hết cho 4 và không chia hết cho 100 hoặc năm chia hết cho 400
                    dd = 29
                ngược lại
                    dd = 28
 * Đầu ra:
 * log ra có bao nhiêu ngày trong tháng của năm
 * 
 */

document.getElementById("tinhNgay").onclick = function () {
    var tm = document.getElementById("month").value * 1;
    var ty = document.getElementById("year").value * 1;
    var dd;

    if (tm < 13 && ty > 0) {
        if (tm == 1 || tm == 3 || tm == 5 || tm == 7 || tm == 8 || tm == 10 || tm == 12) {
            dd = "31";
        } else if (tm == 4 || tm == 6 || tm == 9 || tm == 11) {
            dd = "30";
        } else if (tm == 2) {
            if (ty % 4 == 0 && ty % 100 != 0 || ty % 400 == 0) {
                dd = "29";
            } else {
                dd = "28";
            };
        };
    };

    document.getElementById("show_2").innerHTML = "Tháng " + tm + " Năm " + ty + " có " + dd + " Ngày";
};


/**
 * Bài 3
 * 
 * Đầu vào:
 *  - Nhập 3 số nguyên
 *  - var donVi
 *  - var chuc
 *  - var tram
 * Xử lý:
 *  var a = số nguyên % 10
    var b = Math.floor((số nguyên / 10) % 10)
    var c = Math.floor(số nguyên / 100)

    switch (c) {
        case 1:
            tram = "Một trăm ";
            break;
        case 2:
            tram = "Hai trăm";
            break;
        case 3:
            tram = "Ba trăm";
            break;
        case 4:
            tram = "Bốn trăm";
            break;
        case 5:
            tram = "Năm trăm";
            break;
        case 6:
            tram = "Sáu trăm";
            break;
        case 7:
            tram = "Bảy trăm";
            break;
        case 8:
            tram = "Tám trăm";
            break;
        case 9:
            tram = "Chín trăm";
            break;
    };

    switch (b) {
        case 1:
            chuc = "Mười";
            break;
        case 2:
            chuc = "Hai mươi";
            break;
        case 3:
            chuc = "Ba mươi";
            break;
        case 4:
            chuc = "Bốn mươi";
            break;
        case 5:
            chuc = "Năm mươi";
            break;
        case 6:
            chuc = "Sáu mươi";
            break;
        case 7:
            chuc = "Bảy mươi";
            break;
        case 8:
            chuc = "Tám mươi";
            break;
        case 9:
            chuc = "Chín mươi";
            break;
    };

    switch (a) {
        case 1:
            donVi = "Một";
            break;
        case 2:
            donVi = "Hai";
            break;
        case 3:
            donVi = "Ba";
            break;
        case 4:
            donVi = "Bốn";
            break;
        case 5:
            donVi = "Năm";
            break;
        case 6:
            donVi = "Sáu";
            break;
        case 7:
            donVi = "Bảy";
            break;
        case 8:
            donVi = "Tám";
            break;
        case 9:
            donVi = "chín";
            break;
    }

 * Đầu ra:
 * nếu a <= 0 log ra hàng đơn vị không phải là số nguyên
 * ngược lại nếu b <= 0 log ra hàng chục không phải là số nguyên
 * ngược lại nếu c <= 0 log ra hàng trăm không phải là số nguyên
 * ngược lại log ra cách đọc số
 */


document.getElementById("btnDoc").onclick = function () {
    var number = document.getElementById("soNguyen").value * 1;
    var donVi;
    var chuc;
    var tram;

    var a = number % 10;
    var b = Math.floor((number / 10) % 10);
    var c = Math.floor(number / 100);


    switch (c) {
        case 1:
            tram = "Một trăm ";
            break;
        case 2:
            tram = "Hai trăm";
            break;
        case 3:
            tram = "Ba trăm";
            break;
        case 4:
            tram = "Bốn trăm";
            break;
        case 5:
            tram = "Năm trăm";
            break;
        case 6:
            tram = "Sáu trăm";
            break;
        case 7:
            tram = "Bảy trăm";
            break;
        case 8:
            tram = "Tám trăm";
            break;
        case 9:
            tram = "Chín trăm";
            break;
    };

    switch (b) {
        case 1:
            chuc = "mười";
            break;
        case 2:
            chuc = "hai mươi";
            break;
        case 3:
            chuc = "ba mươi";
            break;
        case 4:
            chuc = "bốn mươi";
            break;
        case 5:
            chuc = "năm mươi";
            break;
        case 6:
            chuc = "sáu mươi";
            break;
        case 7:
            chuc = "bảy mươi";
            break;
        case 8:
            chuc = "tám mươi";
            break;
        case 9:
            chuc = "chín mươi";
            break;
    };

    switch (a) {
        case 1:
            donVi = "một";
            break;
        case 2:
            donVi = "hai";
            break;
        case 3:
            donVi = "ba";
            break;
        case 4:
            donVi = "bốn";
            break;
        case 5:
            donVi = "năm";
            break;
        case 6:
            donVi = "sáu";
            break;
        case 7:
            donVi = "bảy";
            break;
        case 8:
            donVi = "tám";
            break;
        case 9:
            donVi = "chín";
            break;
    };

    if (a <= 0) {
        document.getElementById("show_3").innerHTML = "Hàng đơn vị không phải là số nguyên";
    } else if (b <= 0) {
        document.getElementById("show_3").innerHTML = "Hàng chục không phải là số nguyên";
    } else if (c <= 0) {
        document.getElementById("show_3").innerHTML = "Hàng trăm không phải là số nguyên";
    } else {
        document.getElementById("show_3").innerHTML = tram + " " + chuc + " " + donVi;
    };

};


/**
 * Bài 4
 *  - Nhập tên sinh viên
 *  - tọa độ x và y của 3 sinh viên
 * Đầu vào:
 * Xử lý:
 *  - var d1 = Math.sqrt((x1 - x4)*(x1 - x4) + (y1 - y4)*(y1 - y4));
    - var d2 = Math.sqrt((x2 - x4)*(x2 - x4) + (y2 - y4)*(y2 - y4));
    - var d3 = Math.sqrt((x3 - x4)*(x3 - x4) + (y3 - y4)*(y3 - y4));
 * Đầu ra:
    nếu d1 > d2 và d1 > d3
        log ra sinh viên xa trường nhất là sinh viên 1
    ngược lại nếu d2 > d1 và d2 > d3
        log ra sinh viên xa trường nhất là sinh viên 2
    ngược lại nếu d3 > d1 và d3 > d2
        log ra sinh viên xa trường nhất là sinh viên 3
    ngược lai
        log ra sinh viên xa trường nhất: 
 */

document.getElementById("btnTim").onclick = function(){
    var name1 = document.getElementById("ten_1").value;
    var x1 = document.getElementById("tdx_1").value*1;
    var y1 = document.getElementById("tdy_1").value*1;

    var name2 = document.getElementById("ten_2").value;
    var x2 = document.getElementById("tdx_2").value*1;
    var y2 = document.getElementById("tdy_2").value*1;

    var name3 = document.getElementById("ten_3").value;
    var x3 = document.getElementById("tdx_3").value*1;
    var y3 = document.getElementById("tdy_3").value*1;

    var x4 = document.getElementById("tdx_4").value*1;
    var y4 = document.getElementById("tdy_4").value*1;

    var d1 = Math.sqrt((x1 - x4)*(x1 - x4) + (y1 - y4)*(y1 - y4));
    var d2 = Math.sqrt((x2 - x4)*(x2 - x4) + (y2 - y4)*(y2 - y4));
    var d3 = Math.sqrt((x3 - x4)*(x3 - x4) + (y3 - y4)*(y3 - y4));

    if(d1 > d2 && d1 > d3){
        document.getElementById("show_4").innerHTML = "Sinh viên xa trường nhất: " + name1;
    } else if (d2 > d1 && d2 > d3){
        document.getElementById("show_4").innerHTML = "Sinh viên xa trường nhất: " + name2;
    } else if(d3 > d1 && d3 > d2){
        document.getElementById("show_4").innerHTML = "Sinh viên xa trường nhất: " + name3;
    } else{
        document.getElementById("show_4").innerHTML = "Sinh viên xa trường nhất: ";
    };  
};