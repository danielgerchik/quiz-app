document.addEventListener('DOMContentLoaded', e => {
    quizData = [

        {
            question: 'В каком году был создан язык программирования JavaScript ?',
            a: '1985',
            b: '1997',
            c: '1995',
            d: '2000',
            correct: 'c'
        
        },
        {
            question: 'Что такое HTML ?',
            a: 'Язык программирования',
            b: 'Язык гипертекстовой разметки',
            c: 'Технология для описания внешнего вида документа',
            d: 'Библиотека для языка JavaScript',
            correct: 'b'
        
        },
        {
            question: 'Что делает css свойство box-sizing ?',
            a: 'Определяет алгоритм расчёта ширины и высоты элемента',
            b: 'Определяет алгоритм расположения дочерних элементов',
            c: 'Определяет может ли элемент терять ширину при сужении экрана',
            d: 'Определяет алгоритм расчёта высоты элемента',
            correct: 'a'
        
        },
        {
            question: 'В каком году появился браузер Google Chrome ?',
            a: '2012',
            b: '2008',
            c: '2003',
            d: '2005',
            correct: 'b'
        
        },
        
        ]


        let questionCounter = 0
        let correctAnswersScore = 0

        const question = document.querySelector('.quiz__question')

        const answer_a = document.querySelector('.quiz__answer_1 .quiz__text')
        const answer_b = document.querySelector('.quiz__answer_2 .quiz__text')
        const answer_c = document.querySelector('.quiz__answer_3 .quiz__text')
        const answer_d = document.querySelector('.quiz__answer_4 .quiz__text')

        const radioButtons = document.querySelectorAll('.quiz__input')

        const submitButton = document.querySelector('.quiz__button')

        const questionInit = e => {

            question.innerHTML = quizData[questionCounter].question

            answer_a.innerHTML = quizData[questionCounter].a
            answer_b.innerHTML = quizData[questionCounter].b
            answer_c.innerHTML = quizData[questionCounter].c
            answer_d.innerHTML = quizData[questionCounter].d

            radioButtons.forEach(element=> {
                element.addEventListener('click', e => {
                    submitButton.classList.add('active')
                })
            })
        }

        questionInit()

        submitButton.addEventListener('click', e => {

            radioButtons.forEach(element => {
                if(element.checked) {
                    if(element.id === quizData[questionCounter].correct) {
                        correctAnswersScore++
                    }
                    questionCounter++

                    if(questionCounter < quizData.length) {
                        radioButtons.forEach(element => {
                            element.checked = false
                        })
                        submitButton.classList.remove('active')
                        questionInit()
                    } else {
                        document.querySelector('.quiz__content').innerHTML = `<h1 class='quiz__congratulation title'>Спасибо за прохождение теста!</h1><h2 class='quiz__score'>Вы ответили на <span>${correctAnswersScore}</span> вопроса из <span>${quizData.length}</span>.</h2> <button class="quiz__button quiz__button_refresh" onclick='location.reload()'>Начать тест заново</button>`
                    }
                } 
            });

        })
        

})


