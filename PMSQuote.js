const quote = [
    '늦었다고 생각할때가 늦은거다',
    '가는말이 고우면 얕본다',
    '즐길수 없으면 피하라',
    '고생끝에 골병난다',
    '나까지 나설 필요없다',
    '참을인이 세번이면 호구',
    '포기하면 편하다',
    '안되면 말고',
    '잘생긴 놈은 얼굴값하고 못생긴 놈은 꼴값을 한다',
    '대문으로 가난이 찾아오면 사랑은 창문으로 도망간다',
    '부모 욕 하는 건 참아도 내 욕 하는 건 참을 수 없다',
    '일찍 일어나는 새가 피곤하다',
    '일찍 일어난 벌레는 잡아 먹힌다',
    '효도는 셀프',
    '어려운 길은 길이 아니다',
    '개천에서 용 난 놈 사귀면 개천으로 빨려들어감',
    '새벽에 먹는 맥주와 치킨은 0칼로리',
    '성형으로 예뻐진 게 아니라 하기 전이 예뻣던거다',
    '내일도 할수 있는 일을 굳이 오늘 할 필요 없다'
];
let idx = 0;

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').addEventListener('click',function(){
        idx<quote.length-1? idx++ :idx = 0;
        document.getElementById('quote').textContent = quote[idx];
    })
})