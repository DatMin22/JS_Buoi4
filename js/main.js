// BÀI 1
function sortNumbers() {
    // Lấy giá trị từ các ô input
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var html;
    var num = [num1, num2, num3];
    var DESCsort = num.sort();
    document.getElementById("result").innerHTML = DESCsort;

}

// <!-- BÀI 2 -->
function greet() {
    var user = document.getElementById("user").value;
    var greeting = "";

    switch (user) {
        case "B":
            greeting = "Xin chào Bố!";
            break;
        case "M":
            greeting = "Xin chào Mẹ!";
            break;
        case "A":
            greeting = "Xin chào Anh Trai!";
            break;
        case "E":
            greeting = "Xin chào Em Gái!";
            break;
        default:
            greeting = "Xin chào!";
            break;
    }

    document.getElementById("greeting").innerHTML = greeting;
}
// <!--/ BÀI 2 -->
// <!-- -------------------------------------------------- -->



// <!-- BÀI 3 -->
function countNumbers() {
    var num1 = parseInt(document.getElementById("s1").value);
    var num2 = parseInt(document.getElementById("s2").value);
    var num3 = parseInt(document.getElementById("s3").value);

    var oddCount = 0;
    var evenCount = 0;

    if (num1 % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (num2 % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (num3 % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    document.getElementById("resultBai3").innerHTML = "Số lẻ: " + oddCount + ", Số chẵn: " + evenCount;
}
// <!--/ BÀI 3 -->
// <!-- -------------------------------------------------- -->


// <!-- BÀI 4 -->
function checkTriangle() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);

    if (side1 === side2 && side2 === side3) {
        document.getElementById("resultBai4").innerHTML = "Tam giác đều";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.getElementById("resultBai4").innerHTML = "Tam giác cân";
    } else if (
        side1 * side1 === side2 * side2 + side3 * side3 ||
        side2 * side2 === side1 * side1 + side3 * side3 ||
        side3 * side3 === side1 * side1 + side2 * side2
    ) {
        document.getElementById("resultBai4").innerHTML = "Tam giác vuông (định lý Pytago)";
    } else {
        document.getElementById("resultBai4").innerHTML = "Tam giác thường";
    }
}
// <!--/ BÀI 4 -->
// <!-- -------------------------------------------------- -->

