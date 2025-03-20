fetch("./activate.json")
  .then((response) => response.json())
  .then((data) => {
    const selectedData = getSelectedData(data);
    displaySelectedData(selectedData);
    // 이후 동일한 처리 과정
  })
  .catch((error) =>
    console.error("데이터를 불러오는 중 오류가 발생했습니다:", error)
  );

function getTwoRandomNumbers(min, max) {
  const numbers = [];
  while (numbers.length < 1) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}

// 랜덤으로 선택된 번호에 해당하는 데이터 가져오기
function getSelectedData(data) {
  const selectedNumbers = getTwoRandomNumbers(1, 5); // 예: [2, 4]
  console.log("랜덤 선택된 번호:", selectedNumbers);

  // data가 배열인지 확인하고 필터링
  if (Array.isArray(data)) {
    return data.filter((item) => selectedNumbers.includes(item.NO));
  } else {
    console.error("data가 배열이 아닙니다.", data);
    return [];
  }
}

// 선택된 데이터를 div에 표시하기
function displaySelectedData(selectedData) {
  // 첫 번째 선택지를 첫 번째 div에 표시
  const firstDiv = document.getElementById("option1");
  if (firstDiv && selectedData[0]) {
    firstDiv.innerHTML = `
        <h3>${selectedData[0].선지}</h3>
        <p>성공 확률: ${selectedData[0].확률 * 100}%</p>
        <p>개발 : +${selectedData[0].개발} 코테 : +${
      selectedData[0].코테
    } CS : +${selectedData[0].CS} PT : +${selectedData[0].PT} 외국어 : +${
      selectedData[0].외국어
    } 건강 : +${selectedData[0].건강}</p>
      `;
    console.log(firstDiv);
  }
  const secondDiv = document.getElementById("option2");
  if (secondDiv && selectedData[1]) {
    secondDiv.innerHTML = `
        <h3>${selectedData[1].선지}</h3>
        <p>성공 확률: ${selectedData[1].확률 * 100}%</p>
        <p>개발 : +${selectedData[1].개발} 코테 : +${
      selectedData[1].코테
    } CS : +${selectedData[1].CS} PT : +${selectedData[1].PT} 외국어 : +${
      selectedData[1].외국어
    } 건강 : +${selectedData[1].건강}</p>
      `;
  }
}

// DOM이 로드된 후 실행
