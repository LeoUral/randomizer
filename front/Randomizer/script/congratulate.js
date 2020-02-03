"use strict"


let findings = {
    id: 0,
    who: "",
    congratulate: "",
    number: 0,
    congrRnd: ""
};

const renderFirst = `
<p class="main-block-data-menu">Ваша случайность из категории:<span class="cat-sel">Поздравления</span><span class="cat-settings" onclick="rendGo();" style="cursor: pointer;">Настроить фильтр</span><span class="next-random" onclick="firstRnd();" style="cursor: pointer;">Следующая случайность</span></p>
        <div class="main-block-data-primary"></div>
        <div class="congratulate_text"></div>
        <div class="other-cat">Кроме поздравлений наш генератор выдаёт варианты из <a href="#" class="link-in-text">других категорий</a>, например, &laquo;<a href="#" class="link-in-text">Исторический факт</a>&raquo;</div>        
        `;

const renderGo = `
<p class="main-block-data-menu">Ваша случайность из категории:<span class="cat-sel">Поздравления</span><span class="cat-settings" onclick="rendGo();" style="cursor: pointer;">Настроить фильтр</span><span class="next-random" onclick="firstRnd();" style="cursor: pointer;">Следующая случайность</span></p>
        <div class="main-block-data-primary">
            <div class="congratulate_them">
                <div class="congratulate_him who" data-one="him">поздравить его</div>
                <div class="congratulate_her who" data-one="her">поздравить её</div>
                <div class="congratulate_group who" data-one="group">поздравить их</div>
            </div>
            <div class="congratulete_select">
                <div class="congr_select_him off_block_off">
                    <div class="birthday_him congr" data-two="birthday">с днем рождения</div>
                    <div class="jubilee_him congr" data-two="jubilee">с юбилеем</div>
                    <div class="new_year_him congr" data-two="new_year">с новым годом</div>
                    <div class="february_23 congr" data-two="february_23">с 23 февраля</div>
                    <div class="february_14_him congr" data-two="february_14">с 14 февраля</div>
                    <div class="wedding_day_him congr" data-two="wedding_day">с днем свадьбы</div>
                    <div class="another_him congr" data-two="another">прочее</div>
                </div>
                <div class="congr_select_her off_block_off">
                    <div class="birthday_her congr" data-two="birthday">с днем рождения</div>
                    <div class="jubilee_her congr" data-two="jubilee">с юбилеем</div>
                    <div class="new_year_her congr" data-two="new_year">с новым годом</div>
                    <div class="march_8 congr" data-two="march_8">с 8-м марта</div>
                    <div class="february_14_her congr" data-two="february_14">с 14 февраля</div>
                    <div class="wedding_day_her congr" data-two="wedding_day">с днем свадьбы</div>
                    <div class="another_her congr" data-two="another">прочее</div>
                </div>
                <div class="congr_select_group off_block_off">
                    <div class="birthday_group congr" data-two="birthday">с днем рождения</div>
                    <div class="jubilee_group congr" data-two="jubilee">с юбилеем</div>
                    <div class="new_year_group congr" data-two="new_year">с новым годом</div>
                    <div class="february_23_group congr" data-two="february_23">с 23 февраля</div>
                    <div class="march_8_group congr" data-two="march_8">с 8-м марта</div>
                    <div class="wedding_daygroupr congr" data-two="wedding_day">с днем свадьбы</div>
                    <div class="another_group congr" data-two="another">прочее</div>
                </div>
            </div>
            <div class="congratulate_text"></div>

            <style>
                .main-block-data-primary {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                }
                
                .congratulate_them {
                    width: 10%;
                    min-height: 400px;
                }
                
                .congr_select_him,
                .congr_select_her,
                .congr_select_group {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    width: 25%;
                }
                
                .comgratulate_text {
                    width: 45%;                    
                }
                
                .who,
                .congr {
                    width: 150px;
                    height: 30px;
                    margin: 10px;
                    text-align: left;
                    /* border: 1px solid #000; */
                    padding: 5px;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                
                .who:hover,
                .congr:hover {
                    text-shadow: 2px 2px 3px #333;
                }
                
                .who:active,
                .congr:active {
                    text-shadow: none;
                }
                
                .off_block_off {
                    display: none;
                }
                
                .off_color {
                    color: #ccc;
                }
            </style>
        </div>
        <div class="other-cat">Кроме поздравлений наш генератор выдаёт варианты из <a href="#" class="link-in-text">других категорий</a>, например, &laquo;<a href="#" class="link-in-text">Исторический факт</a>&raquo;</div>
`;

//грузим модуль в дивы
let congratulateLink = document.querySelector('.data-title-link');
let congratulateLinkMain = document.querySelector('.congratulate_main_lnk');
let btnGo = document.querySelector('.btn_go'); // кнопка пуска, загрузки, старта в пробном варианте
if (congratulateLink) {
    runProgr(congratulateLink);
} else if (congratulateLinkMain) {
    runProgr(congratulateLinkMain);
} else if (btnGo) {
    runProgr(btnGo);
}
//грузим модуль Первая загрузка со случайным поздравлением
function runProgr(event) {
    let mainBlock = document.querySelector('.main-block-data');//место вставки
    event.addEventListener('click', function () {
        mainBlock.innerHTML = renderFirst;
        congratulate.init();
        setTimeout(firstRnd, 500);//время задержки, что бы успел выполниться callback у запроса
    });
};

//грузим модуль с фильтром выбора поздравлений
function rendGo() {
    let mainBlock = document.querySelector('.main-block-data');
    mainBlock.innerHTML = renderGo;
    congratulate.init();
};

//первое случайное поздравление и также вывод "следующая случайность"
function firstRnd() {
    let firstNumber = Math.floor(Math.random() * congratulate.data.length);
    findings.id = firstNumber;
    let firstText = congratulate.data[firstNumber].congratulate;
    console.log(findings);
    congratulate.renderText(firstText);
}

class Congratulate {
    constructor() {
        this.data = [];
        this.alreadyViewedIds = [];
    }

    //слушаем нажатие - выбор пола, затемняем не активные кнопки
    congratulateSomeone() {
        let who = document.querySelectorAll('.who');

        who.forEach(function (whoBtn) {
            whoBtn.addEventListener('click', function (event) {

                let whoWas = event.srcElement.dataset.one;
                findings.who = whoWas;
                console.log(whoWas);

                let himBtn = document.querySelector('.congratulate_him');
                let herBtn = document.querySelector('.congratulate_her');
                let groupBtn = document.querySelector('.congratulate_group');
                let himBlock = document.querySelector('.congr_select_him');
                let herBlock = document.querySelector('.congr_select_her');
                let groupBlock = document.querySelector('.congr_select_group');

                //отключаем в html не активные кнопки, включаем выбранный блок
                if (findings.who === 'him') {
                    himBtn.classList.remove('off_color');
                    herBtn.classList.add('off_color');
                    groupBtn.classList.add('off_color');
                    himBlock.classList.remove('off_block_off');
                    herBlock.classList.add('off_block_off');
                    groupBlock.classList.add('off_block_off');
                } else if (findings.who === 'her') {
                    herBtn.classList.remove('off_color');
                    himBtn.classList.add('off_color');
                    groupBtn.classList.add('off_color');
                    herBlock.classList.remove('off_block_off');
                    himBlock.classList.add('off_block_off');
                    groupBlock.classList.add('off_block_off');
                } else if (findings.who === 'group') {
                    groupBtn.classList.remove('off_color');
                    himBtn.classList.add('off_color');
                    herBtn.classList.add('off_color');
                    groupBlock.classList.remove('off_block_off');
                    himBlock.classList.add('off_block_off');
                    herBlock.classList.add('off_block_off');
                }
            });
        });
    }

    //слушаем нажатие выбора темы поздравления
    subjectCongratulations() {
        let congr = document.querySelectorAll('.congr');

        congr.forEach(function (congrBtn) {
            congrBtn.addEventListener('click', function (ev) {

                findings.congratulate = ev.srcElement.dataset.two; //определяем значение класса data-two

                // блок рандома и определения повторов
                do {
                    findings.number = Math.floor(Math.random() * 4);// добавить в базу рандомное значение  

                } while (congratulate.alreadyViewedIds.includes(findings.number)); //проверяем случайность на повтор

                congratulate.alreadyViewedIds = [...congratulate.alreadyViewedIds, findings.number]; // добавляем случайности в массив

                console.log(congratulate.alreadyViewedIds);

                if (congratulate.alreadyViewedIds.length >= 4) {
                    congratulate.alreadyViewedIds = []; //сбрасываем массив случайностей
                } // блок определения повторов закончен

                console.log(findings.congratulate + " " + findings.number);
                console.log(findings);

                //в объект findings помещаем случайное поздравление согалсно фильтра отбора
                for (let i = 0; i < congratulate.data.length; i++) {
                    if (congratulate.data[i].who === findings.who && congratulate.data[i].theme === findings.congratulate && congratulate.data[i].randomId === findings.number) {
                        findings.congrRnd = congratulate.data[i].congratulate;

                        console.log(this.data);
                        console.log(findings.congrRnd);

                        // //рендер поздравления
                        // let position = document.querySelector('.congratulate_text');
                        // position.innerHTML = findings.congrRnd;

                        congratulate.renderText(findings.congrRnd);
                    }
                };
            });
        });
    }

    //рендер поздравления
    renderText(event) {
        let position = document.querySelector('.congratulate_text');
        position.innerHTML = event;
    }

    //Функция AJAX получения рандомного 
    getRndCongratulate() {
        $.post({
            url: '/index.php',
            data: {
                apiMethod: 'getRndCongratulate',
                postData: {
                    // id: findings.id, //он нежун только для первых случайных поздравлений.
                    who: findings.who,
                    theme: findings.congratulate,
                    randomId: findings.number,
                    congratulate: findings.congrRnd // нужно ли его отправлять? мне его получить надо
                }
            },
            success: function (data) {

                data = JSON.parse(data);
                if (data.result === "OK") {
                    congratulate.data = data.rnd;
                } else {
                    console.log("ERROR_GET_CONGRATULATE");
                }
            }
        });
    }

    async _requestCongratulate() {

        const url = "./server/congratulate.json";

        let response = await fetch(url);
        let jsonData = await response.json();

        this.data = jsonData;

        console.log(findings);
        console.log(this.data);
    }




    init() {
        this.congratulateSomeone();
        this.subjectCongratulations();
        this._requestCongratulate();

    }
}

let congratulate = new Congratulate();

