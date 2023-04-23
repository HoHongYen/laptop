//----------------   Shopping-cart   ----------------

var itemList = {
    "sp001": {
        "name": "Laptop gaming ASUS TUF F15 FX507ZE HN093W",
        "price": 28490000,
        "photo": "https://product.hstatic.net/1000026716/product/hn093w_f885c53fcc5d4b82b3c55b52dd4ce038_large.png"
    },

    "sp002": {
        "name": "Laptop gaming Acer Nitro 5 Eagle AN515 57 54MV",
        "price": 21990000,
        "photo": "https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_54mv_3e5cc4ba80be4c8595540963d469ccc3_large.jpg"
    },

    "sp003": {
        "name": "Laptop gaming Acer Nitro 5 Tiger AN515 58 773Y",
        "price": 28990000,
        "photo": "https://product.hstatic.net/1000026716/product/773y_5364964b798144f88c6137ff9a8afc60_large.png"
    },

    "sp004": {
        "name": "Laptop gaming MSI Katana GF66 11UC 224VN",
        "price": 225490000,
        "photo": "https://product.hstatic.net/1000026716/product/224vn-w10_6f9cd0624e764b5f8e27f60072e51f9f_large.png"
    },
    "sp005": {
        "name": "Laptop gaming ASUS TUF Dash F15 FX517ZE HN888W",
        "price": 27490000,
        "photo": "https://product.hstatic.net/1000026716/product/hn888w_6ddee19fdc6d46e39ba774e22a57e423_large.png"
    },
    "sp006": {
        "name": "Laptop gaming Asus TUF Dash F15 FX517ZC HN077W",
        "price": 25990000,
        "photo": "https://product.hstatic.net/1000026716/product/3050_c761b4963d574e89829e45671fe80f32_large.png"
    },
    "sp007": {
        "name": "Laptop gaming Gigabyte G5 GE 51VN213SH",
        "price": 22990000,
        "photo": "https://product.hstatic.net/1000026716/product/g5-ge_ce9ea67891c64bb481aad2a4ee7e44c0_large.png"
    },

    "sp008": {
        "name": "Laptop gaming MSI GF63 Thin 11UD 473VN",
        "price": 18490000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-gf63-thin-11ud-473vn-1_37e7f1c2bc0f48d0a2efee221faa490c_large.png"
    },

    "sp009": {
        "name": "Laptop gaming Acer Aspire 7 A715 43G R8GA",
        "price": 19990000,
        "photo": "https://product.hstatic.net/1000026716/product/r5-3050_1ca8d2e294ca4a3c8c875ac518beb714_large.png"
    },

    "sp010": {
        "name": "Laptop gaming Acer Predator Helios 300 PH315 55 751D",
        "price": 48990000,
        "photo": "https://product.hstatic.net/1000026716/product/751d_326f3f25652a42faa8c5abdd8d606236_large.png"
    },

    "sp011": {
        "name": "Laptop gaming GIGABYTE G5 KD 52VN123SO",
        "price": 23990000,
        "photo": "https://product.hstatic.net/1000026716/product/i5-3060_94f31cf3740d4169b925ea1b318f2e38_large.png"
    },

    "sp012": {
        "name": "Laptop gaming ASUS TUF A15 FA506IHRB HN080W",
        "price": 16990000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-laptop-gaming-asus-tuf-a15-fa506ihrb-hn080w-1_0986bab890c24900a834168da1c86abf_large.png"
    },

    "sp013": {
        "name": "Laptop Asus ZenBook 13 UX325EA KG656W",
        "price": 17990000,
        "photo": "https://product.hstatic.net/1000026716/product/laptop-asus-zenbook-ux325ea-kg656w_33160483676c416081a2d4c83e86306f.png"
    },

    "sp014": {
        "name": "Laptop ASUS Vivobook 15X OLED A1503ZA L1421W",
        "price": 18990000,
        "photo": "https://product.hstatic.net/1000026716/product/l1421w_2b115562199d462b82b92e89e95b2473.png"
    },

    "sp015": {
        "name": "Laptop Dell Vostro 5410 V4I5214W1",
        "price": 19990000,
        "photo": "https://product.hstatic.net/1000026716/product/1_79b6ab66ac2047068430616035180e67.png"
    },

    "sp016": {
        "name": "Laptop Dell Inspiron 15 3511 P112F001EBL",
        "price": 12290000,
        "photo": "https://product.hstatic.net/1000026716/product/dell_66e818ea50d14910b4c11a7ab93998a5.png"
    },

    "sp017": {
        "name": "Laptop Acer Aspire 3 A315 59 381E",
        "price": 12990000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-laptop-acer-aspire-3-a315-59-381e-1_9ebd0c73bbb34245919b68f22f3ba5de.png"
    },

    "sp018": {
        "name": "Laptop HP Pavilion 15 EG2063TU 6K791PA",
        "price": 13990000,
        "photo": "https://product.hstatic.net/1000026716/product/i3_b900cf4c7d8d4defa923a1bf3230325d.png"
    },

    "sp019": {
        "name": "Laptop HP Pavilion 14 dv2036TU 6K772PA",
        "price": 16990000,
        "photo": "https://product.hstatic.net/1000026716/product/1_01e89bfad61b452babc53a1e15311af3.png"
    },

    "sp020": {
        "name": "Laptop Asus ZenBook 13 UX325EA KG656W",
        "price": 17990000,
        "photo": "https://product.hstatic.net/1000026716/product/laptop-asus-zenbook-ux325ea-kg656w_33160483676c416081a2d4c83e86306f.png"
    },

    "sp021": {
        "name": "Laptop ASUS Vivobook 15X OLED A1503ZA L1421W",
        "price": 18990000,
        "photo": "https://product.hstatic.net/1000026716/product/l1421w_2b115562199d462b82b92e89e95b2473.png"
    },

    "sp022": {
        "name": "Laptop Dell Vostro 5410 V4I5214W1",
        "price": 19990000,
        "photo": "https://product.hstatic.net/1000026716/product/1_79b6ab66ac2047068430616035180e67.png"
    },

    "sp023": {
        "name": "Laptop Lenovo IdeaPad 5 Pro 16ACH6 82L500WKVN",
        "price": 22690000,
        "photo": "https://product.hstatic.net/1000026716/product/82l500wkvn_0907c11960a7455dab1097e574e67e81.png"
    },

    "sp024": {
        "name": "Laptop Lenovo Yoga Slim 7 Pro 14IHU5 OLED 82NH00AFVN",
        "price": 21990000,
        "photo": "https://product.hstatic.net/1000026716/product/afvn_03fb7a4e56854b53b40b2b97f6512c4a.png"
    },

    "sp025": {
        "name": "AKKO Keycap set – Black Pink",
        "price": 1090000,
        "photo": "https://product.hstatic.net/1000026716/product/akko-keycap-set-black-pink-pbt-double-shot-asa-profile-158-nut-06_3d4fe9ac521a4aa4af0f16c0ffe3d438_large.png"
    },

    "sp026": {
        "name": "AKKO Keycap set – Carbon Retro",
        "price": 1090000,
        "photo": "https://product.hstatic.net/1000026716/product/keycap-akko-carbon-retro-pbt-double-shot-asa-profile-158-nut-02_f4a36c5f276443e69aaccd7c101b1a33_large.jpg"
    },

    "sp027": {
        "name": "AKKO Keycap set – Midnight",
        "price": 1090000,
        "photo": "https://product.hstatic.net/1000026716/product/akko-keycap-set-midnight-pbt-double-shot-asa-profile-158-nut-01_41839700195f4a359154c058666248ba_large.jpg"
    },

    "sp028": {
        "name": "Balo Razer Rogue 15“ Backpack V3 Chromatic",
        "price": 3090000,
        "photo": "https://product.hstatic.net/1000026716/product/ezgif-4-0368d350a578_64bfa3ce1d1246f19afb0be4bb07c05f_large.png"
    },

    "sp029": {
        "name": "Balo RAZER ROGUE BACKPACK ( 13.3 Inch )",
        "price": 1290000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn_rouge_13_large.jpg"
    },

    "sp030": {
        "name": "Balo RAZER ROGUE BACKPACK V2 ( 15.6 Inch )",
        "price": 2990000,
        "photo": "https://product.hstatic.net/1000026716/product/thumblotchuot_676_f65b3110e6b5490d89a36512028ea547_large.png"
    },

    "sp031": {
        "name": "Bộ keycaps FPS & Moba HyperX (Titanium)",
        "price": 450000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn.com-products-bo-keycaps-fps-moba-hyperx-titanium-1_f7760602b885449d8dbaf9c617fc9eac_large.jpg"
    },

    "sp032": {
        "name": "Bộ tai nghe rời Jabra Elite Active 75t",
        "price": 3990000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-bo-tai-nghe-roi-jabra-elite-active-75t-666_23521f68bf564f12b103c4cca074bc8a_large.jpg"
    },

    "sp033": {
        "name": "Bộ tai nghe thể thao rời Jabra Elite 75t",
        "price": 3790000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-bo-tai-nghe-roi-jabra-elite-75t-666_21b42518412e47e39a6a61f33d0d878a_large.jpg"
    },

    "sp034": {
        "name": "Cổng chuyển HUB USB-C IPAD PRO 2018/2020 HYPERDRIVE 6-IN-1 HDMI 4K/60HZ HD319B",
        "price": 2390000,
        "photo": "https://product.hstatic.net/1000026716/product/hub-usb-c-ipad-pro-2018-2020-hyperdrive-6-in-1-hdmi-4k-60hz-hd319b-666_8f1db57ce45c49b28771f7fb4b6c6120_large.jpg"
    },

    "sp035": {
        "name": "Cổng chuyển HyperDrive 4K HDMI 3-in-1 USB-C Hub - HD259A",
        "price": 1190000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-cong-chuyen-hyperdrive-4k-hdmi-3-in-1-usb-c-hub-hd259a-666_c569eb242d47409e868186879866394f_large.png"
    },

    "sp036": {
        "name": "Cổng chuyển HyperDrive 4K HDMI 9-in-1 USB-C Hub - HD30F",
        "price": 2790000,
        "photo": "https://product.hstatic.net/1000026716/product/hd30f-silver_1_1f3b168e8fab47ce9264da1c99d1573e_large.jpg"
    },


    "sp037": {
        "name": "Laptop gaming Asus TUF Dash F15 FX517ZC HN077W",
        "price": 28990000,
        "photo": "https://product.hstatic.net/1000026716/product/hn093w_f885c53fcc5d4b82b3c55b52dd4ce038_large.png"
    },

    "sp038": {
        "name": "Laptop gaming Acer Nitro 5 Eagle AN515 57 54MV",
        "price": 21990000,
        "photo": "https://product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_54mv_3e5cc4ba80be4c8595540963d469ccc3_large.jpg"
    },

    "sp039": {
        "name": "Laptop gaming Acer Nitro 5 Tiger AN515 58 773Y",
        "price": 28990000,
        "photo": "https://product.hstatic.net/1000026716/product/773y_5364964b798144f88c6137ff9a8afc60_large.png"
    },

    "sp040": {
        "name": "Laptop Văn phòng Asus s510UQ-BQ475T",
        "price": 30900000,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKTL8PLIbvIo-cvCzu1t2Q0LoePWPGFBW1fdDAXuj-f5KT9EUZslHkx8EhNRAiQb3aeA&usqp=CAU"
    },

    "sp041": {
        "name": "Laptop Văn Phòng Lenovo Legion 5 15IAH7H 82RC008LVN",
        "price": 40990000,
        "photo": "https://anphat.com.vn/media/product/42956_laptop_lenovo_legion_5_15iah7h_82rc008lvn__1_.jpg"
    },

    "sp042": {
        "name": "Laptop Văn Phòng Lenovo V14 G2 ITL 82KA00RTVN",
        "price": 35990000,
        "photo": "https://anphat.com.vn/media/product/42830_laptop_lenovo_v14_g2_itl_82ka00rtvn__1_.jpg"
    },

    "sp043": {
        "name": "Balo RAZER ROGUE BACKPACK ( 13.3 Inch )",
        "price": 1290000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn_rouge_13.jpg"
    },

    "sp044": {
        "name": "Cổng chuyển HyperDrive 5-in-1 USB-C Hub - HD21B",
        "price": 1190000,
        "photo": "https://product.hstatic.net/1000026716/product/gearvn-cong-chuyen-hyperdrive-5-in-1-usb-c-hub-gn21b-666_168f1e5e76f44bb293a122f6b8a639f0.jpg"
    },

    "sp045": {
        "name": "Giá đỡ tản nhiệt HYPERSTAND FOLDING ALUMINIUM",
        "price": 790000,
        "photo": "https://product.hstatic.net/1000026716/product/arvn.com-products-gia-do-tan-nhiet-hyperstand-folding-aluminium-htu6-2_5d24a62d6c2240fbb6a2023449a9b08a.jpeg"
    },

    "sp046": {
        "name": "Inspiron T7420 N4I5021W Silver",
        "price": 14000000,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJBFNLjAvTc55h-3izQMDqq5GDggOrQGKpQ&usqp=CAU"
    },

    "sp047": {
        "name": "Aspire 3 A315 59 381E",
        "price": 10999000,
        "photo": "https://cdn.tgdd.vn/Products/Images/44/281483/asus-vivobook-15-x1502za-i5-ej120w-600x600.jpg"
    },

    "sp048": {
        "name": "IdeaPad 5 Pro 14ITL6 82L300M9VN",
        "price": 20499000,
        "photo": "https://banlaptopcudanang.com.vn/wp-content/uploads/2022/06/surface-laptop-go-8.webp",
    },

    "sp049": {
        "name": "MSI Modern 15 A5M 237VN",
        "price": 15700000,
        "photo": "https://laptopaz.vn/media/product/2667_",
    },

    "sp050": {
        "name": "MSI GF63 Thin 11UD 473VN",
        "price": 22999000,
        "photo": "https://laptopaz.vn/media/product/2049_laptopaz_asus_rog_strix_g15_g513qc_hn015t_1.jpg",
    },
    "sp051": {
        "name": "Gigabyte G5 GE 51VN213SH",
        "price": 23700000,
        "photo": "https://laptop88.vn/media/news/894_asus_laptop_gaming_rog_min.png",
    },
    "sp052": {
        "name": "MSI Katana GF66 11UC 224VN",
        "price": 22999000,
        "photo": "https://laptopaz.vn/media/product/2350_laptopaz_acer_nitro_5_an515_57_1.jpg",
    },
    "sp053": {
        "name": "ASUS TUF F15 FX507ZE HN093W",
        "price": 27700000,
        "photo": "https://cdn.mediamart.vn/images/news/vi-sao-laptop-gaming-ngay-cang-re-Pph1DF.jpg",
    }
}



function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    if (number > 100) {
        alert('Đã vượt qua số lượng có thể đặt hàng!');
        return;
    }
    if (typeof localStorage[code] == "undefined") {
        window.localStorage.setItem(code, number);
        location.reload();
    } else {
        current = parseInt(window.localStorage.getItem(code));
        if (number + current > 100) {
            alert('Đã vượt qua số lượng có thể đặt hàng!');
            return;
        }
        window.localStorage.setItem(code, number + current);
    }
}


// -------------------shopping-cart--------------
window.onstorage = () => {
    showCart();
};

var table = '<table style="margin:10px; width: 97.5%;" id="cart">' +
    '<thead>' +
    '<tr>' +
    '<th>Hình sản phẩm</th>' +
    '<th>Tên sản phẩm</th>' +
    '<th>Số lượng </th>' +
    '<th>Giá</th>' +
    '<th>Thành tiền</th>' +
    '<th>Xóa</th></tr>' +
    '</thead>' +
    '<tbody >' +
    '<tr>' +
    '</tr>' +
    '</tbody>' +
    '<tfoot>' +
    '<tr>' +
    '<td colspan="6" style="text-align:right;font-weight: 800;background-color:#17a2b8;">Tổng thành tiền = <span id="AA"></span></td>' +
    '</tr>' +
    '</tfoot>' +
    '</table><br>';
document.getElementById('database').innerHTML = table;

function Confirm() {
    alert('Đã xác nhận đơn hàng thành công !!!!!')
}

function Checkout() {
    alert('Đặt hàng CheckOut thành công !!!!!')
}


function showCart() {
    var A = 0;
    if (localStorage.length != 0) {
        for (var key in localStorage) {
            var item = itemList[key];
            var photo = item.photo;
            var name = item.name;
            var price = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price);
            var number = localStorage.getItem(key);
            var temp = item.price * number;
            var thanhtien = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * number);

            A = A + temp;
            document.getElementById('AA').innerHTML = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(A);

            localStorage.length = localStorage.length + 1;
            document.getElementById('count').innerHTML = localStorage.length;
            var tbody =

                '<td style="width: 250px; height:100px;">' + '<img  style="width: 200px; margin-top:20px;" src=' + photo + '></td>' +
                '<td style="width:350px">' + name + '</td>' +
                '<td style="text-align:center; width:100px">' + number + '</td>' +
                '<td style="text-align:right; width:150px"">' + price + '</td>' +
                '<td style="text-align:right; width:150px"">' + thanhtien + '</td>' +
                '<td style="text-align:center" ></i><a data-code="' + key + '" href="#"><button onclick="removeCart(\'' + key + '\')" style=" background-color:white; padding:8px;"><i class="fa fa-trash icon-pink" style="font-size:25px; color:chocolate" ></button></a></td>';

            document.getElementById('cart').insertRow(1).innerHTML = tbody;

        };

    } else {
        document.getElementById('count').innerHTML = localStorage.length;
    }

}

function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        location.reload();
    }
}