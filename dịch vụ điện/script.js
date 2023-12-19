const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length





let storedUserCredentials = localStorage.getItem('userCredentials');


let userCredentials = storedUserCredentials ? JSON.parse(storedUserCredentials) : {
    trueusername: "user123",
    truepassword: "password123"
};

function login(event) {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    event.preventDefault();

    if (username == userCredentials.trueusername && password == userCredentials.truepassword) {
        alert("Đăng nhập thành công !");
        window.location.href = "user.html";
    } else {
        alert("Đăng nhập thất bại !");
    }
}

function signup(event) {
    event.preventDefault();

    var username = document.getElementById("signupUsernameInput").value;
    var password = document.getElementById("signupPasswordInput").value;
    var confirmPassword = document.getElementById("confirmPasswordInput").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Cập nhật thông tin đăng ký
    userCredentials.trueusername = username;
    userCredentials.truepassword = password;

    // Lưu vào localStorage
    localStorage.setItem('userCredentials', JSON.stringify(userCredentials));

    alert("Đăng ký thành công!\nTên đăng nhập: " + username + "\nMật khẩu: " + password);

    // Redirect to login page after successful signup
    window.location.href = "login.html";
}



function getInfo() {
  // Collecting electric bill data for the last 3 months
  var billData = [];
  for (var i = 0; i < 3; i++) {
      var month = prompt("Nhập tiền điện " + (i + 1) + " tháng trước:");
      // Validate the input (you may want to add more validation)
      if (!isNaN(month) && month !== null && month !== "") {
          billData.push(parseFloat(month));
      } else {
          alert("Invalid input. Please enter a valid number.");
          // Decrement the loop counter to re-enter the current month
          break;
      }
  }

  // Create a wrapper for the chart
  var chartWrapper = document.createElement('div');
  chartWrapper.style.marginLeft = '300px'; // Set margin-left
  chartWrapper.style.padding = '20px'; // Set padding

  // Create a graph using Chart.js
  var canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 400;

  var ctx = canvas.getContext('2d');

  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['3 tháng trước ', '2 tháng trước', '1 tháng trước'],
          datasets: [{
              label: 'Electric Bill',
              data: billData,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          responsive: false,
          maintainAspectRatio: false
      }
  });

  // Append the canvas to the wrapper
  chartWrapper.appendChild(canvas);

  // Append the wrapper to a container or directly to the document body
  document.body.appendChild(chartWrapper);
}


function submitPlan(event) {
    event.preventDefault();

    // Lấy giới hạn tiêu dùng từ form
    const consumptionLimit = document.getElementById("consumptionLimit").value;

    // Hiển thị kế hoạch tiêu dùng
    displayPlan(consumptionLimit);
}

function displayPlan(limit) {
    const resultContainer = document.getElementById("result");
    if (limit < 100) {
        resultContainer.innerHTML = `<p>Giới Hạn Tiêu Dùng Đã Đặt: ${limit} kWh</p>`;
    } else {
        resultContainer.innerHTML = `<p>Giới Hạn Tiêu Dùng Đã Đặt: ${limit} kWh<br>Bạn nên tiết kiệm điện hơn !</p>`;
    }
}


function updateForm() {
    // Lấy giá trị từ các trường input
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    
    var gender = document.querySelector('input[name="gender"]:checked');
    
    if (gender) {
        gender = gender.value;
    }

    // Hiển thị thông tin bằng cách sử dụng alert hoặc cập nhật một phần tử HTML
    var output = document.getElementById('output');
    output.innerHTML = '<p><strong>Tên:</strong> ' + name + '</p>' +
                       '<p><strong>Tuổi:</strong> ' + age + '</p>' +
                       '<p><strong>Địa chỉ:</strong> ' + address + '</p>' +
                       '<p><strong>Giới tính:</strong> ' + gender + '</p>';
}

