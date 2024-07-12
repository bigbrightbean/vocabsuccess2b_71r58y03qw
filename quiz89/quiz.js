// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The urgent nature of the situation required them to __________ help immediately.",
        chinese_question: "情况的紧迫性要求他们立即 __________ 帮助。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "complicate", chinese_answer: "使复杂化", chinese_romanization: "shǐ fùzá huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' figuratively means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'conceal' means to keep from being seen; hide." +
            "<br><br>" +
            "(C) 'disregard' means to ignore or pay no attention to." +
            "<br><br>" +
            "(D) 'complicate' means to make (something) more difficult or complex.",
        chinese_explanation: "(A) '派遣' 在此语境下比喻发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '隐藏' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '使复杂化' 意味着使某事物更加困难或复杂。"
    },
    {
        id: 2,
        question: "Lack of sleep can __________ your ability to concentrate.",
        chinese_question: "睡眠不足会 __________ 你的注意力集中能力。",
        answers: [
            { option: "A", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "undermine", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "C", answer: "boost", chinese_answer: "提高", chinese_romanization: "tígāo" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undermine' means to weaken or damage something or someone, especially gradually." +
            "<br><br>" +
            "(A) 'help' means to make it easier for someone to do something by offering one's services or resources." +
            "<br><br>" +
            "(C) 'boost' means to increase or improve." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '削弱'一词意味着削弱或损害某事或某人，尤其是逐渐地。" +
            "<br><br>" +
            "(A) '帮助' 意味着通过提供服务或资源使某人更容易做某事。" +
            "<br><br>" +
            "(C) '提高' 意味着增加或改善。" +
            "<br><br>" +
            "(D) '支持' 意味着承受全部或部分重量；支撑。"
    },
    {
        id: 3,
        question: "When faced with a tough decision, he would __________ his teeth and make the call.",
        chinese_question: "在面对艰难的决定时，他会 __________ 牙齿做出决定。",
        answers: [
                { option: "A", answer: "gnash", chinese_answer: "咬牙", chinese_romanization: "yǎoyá" },
                { option: "B", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "laugh", chinese_answer: "大笑", chinese_romanization: "dàxiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gnash' means to grind one's teeth together, used figuratively here to show resolve." +
                "<br><br>" +
                "(B) 'postpone' means to arrange for something to take place at a later time." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'laugh' means to make sounds and movements of the face and body that express amusement or happiness.",
        chinese_explanation: "(A) '咬牙' 意味着磨牙，这里是比喻用法，表示决心。" +
                "<br><br>" +
                "(B) '推迟' 意味着安排某事在稍后的时间进行。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '大笑' 意味着发出表示愉快或幸福的声音和面部和身体的动作。"
    },
    {
        id: 4,
    question: "While sitting by the lake, he began to __________ on the meaning of life.",
    chinese_question: "坐在湖边时，他开始 __________ 生命的意义。",
    answers: [
        { option: "A", answer: "swim", chinese_answer: "游泳", chinese_romanization: "yóuyǒng" },
        { option: "B", answer: "ruminate", chinese_answer: "沉思", chinese_romanization: "chénsī" },
        { option: "C", answer: "shout", chinese_answer: "喊", chinese_romanization: "hǎn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ruminate' means to think deeply about something." +
        "<br><br>" +
        "(A) 'swim' means to move through water by moving the body." +
        "<br><br>" +
        "(C) 'shout' means to say something very loudly." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '沉思' 意味着深入思考某事。" +
        "<br><br>" +
        "(A) '游泳' 意味着通过移动身体在水中移动。" +
        "<br><br>" +
        "(C) '喊' 意味着非常大声地说某事。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 5,
    question: "The team's victory was __________ with the final goal scored in the last minute.",
    chinese_question: "球队的胜利在最后一分钟的进球中被 __________。",
    answers: [
        { option: "A", answer: "lost", chinese_answer: "丢失", chinese_romanization: "diūshī" },
        { option: "B", answer: "sealed", chinese_answer: "确定", chinese_romanization: "quèdìng" },
        { option: "C", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhíyí" },
        { option: "D", answer: "opened", chinese_answer: "打开", chinese_romanization: "dǎkāi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sealed' means confirmed or made certain." +
        "<br><br>" +
        "(A) 'lost' means unable to be found or no longer possessed." +
        "<br><br>" +
        "(C) 'questioned' means to ask questions or express doubt about something." +
        "<br><br>" +
        "(D) 'opened' means not closed or fastened.",
    chinese_explanation: "(B) '确定' 意味着确认或确定。" +
        "<br><br>" +
        "(A) '丢失' 意味着无法找到或不再拥有。" +
        "<br><br>" +
        "(C) '质疑' 意味着提出问题或对某事表示怀疑。" +
        "<br><br>" +
        "(D) '打开' 意味着未关闭或未固定。"
    },
    {
        id: 6,
        question: "Her habit of interrupting others during meetings began to __________ her colleagues.",
        chinese_question: "她在会议中打断他人的习惯开始 __________ 同事。",
        answers: [
                { option: "A", answer: "delight", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
                { option: "B", answer: "irk", chinese_answer: "激怒", chinese_romanization: "jīnù" },
                { option: "C", answer: "comfort", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
                { option: "D", answer: "appreciate", chinese_answer: "感激", chinese_romanization: "gǎnjī" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'irk' means to irritate or annoy." +
                "<br><br>" +
                "(A) 'delight' means to please greatly." +
                "<br><br>" +
                "(C) 'comfort' means to ease the grief or distress of someone." +
                "<br><br>" +
                "(D) 'appreciate' means to recognize the full worth of.",
        chinese_explanation: "(B) '激怒' 意味着刺激或惹恼。" +
                "<br><br>" +
                "(A) '取悦' 意味着让某人感到高兴和满意。" +
                "<br><br>" +
                "(C) '安慰' 意味着减轻某人的悲伤或痛苦。" +
                "<br><br>" +
                "(D) '感激' 意味着认识到某物的全部价值。"
    },
    {
        id: 7,
        question: "The university __________ the professor with a grant to continue his research.",
        chinese_question: "大学 __________ 教授一笔资助以继续他的研究。",
        answers: [
            { option: "A", answer: "endowed", chinese_answer: "资助", chinese_romanization: "zīzhù" },
            { option: "B", answer: "deprived", chinese_answer: "剥夺", chinese_romanization: "bōduó" },
            { option: "C", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" },
            { option: "D", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endowed' figuratively means to provide with a quality, ability, or asset." +
            "<br><br>" +
            "(B) 'deprived' means to deny (a person or place) the possession or use of something." +
            "<br><br>" +
            "(C) 'hindered' means to create difficulties for someone or something, resulting in delay or obstruction." +
            "<br><br>" +
            "(D) 'concealed' means to keep something secret or hidden.",
        chinese_explanation: "(A) '资助' 在此语境下比喻提供一种品质、能力或资产。" +
            "<br><br>" +
            "(B) '剥夺' 意味着拒绝（某人或某地）拥有或使用某物。" +
            "<br><br>" +
            "(C) '阻碍' 意味着制造困难，导致延误或障碍。" +
            "<br><br>" +
            "(D) '隐藏' 意味着将某事保密或隐藏。"
    },
    {
        id: 8,
    question: "The film director __________ scenes of war with scenes of peace to make a powerful statement.",
    chinese_question: "电影导演将战争场景与和平场景 __________ 以传达强烈的信息。",
    answers: [
        { option: "A", answer: "juxtaposed", chinese_answer: "并列", chinese_romanization: "bìngliè" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "erased", chinese_answer: "擦除", chinese_romanization: "cāchú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'juxtaposed' means to place side by side for contrast, used figuratively here." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'supported' means to give assistance to." +
        "<br><br>" +
        "(D) 'erased' means to remove all traces of something.",
    chinese_explanation: "(A) '并列' 意味着并排放置以作对比，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(D) '擦除' 意味着去除所有痕迹。"
    },
    {
        id: 9,
    question: "He __________ the lost years of his youth, feeling he could have achieved more.",
    chinese_question: "他 __________ 失去的青春岁月，觉得自己本可以取得更多成就。",
    answers: [
        { option: "A", answer: "lamented", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "erased", chinese_answer: "擦除", chinese_romanization: "cāchú" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lamented' means to express sorrow, mourning, or regret, used figuratively here." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'supported' means to give assistance to." +
        "<br><br>" +
        "(D) 'erased' means to remove all traces of something.",
    chinese_explanation: "(A) '哀叹' 意味着表达悲伤、哀悼或遗憾，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着给予帮助。" +
        "<br><br>" +
        "(D) '擦除' 意味着去除所有痕迹。"
    },
    {
        id: 10,
        question: "The leader __________ the crowd to remain peaceful and calm during the protest.",
        chinese_question: "领导人 __________ 人群在抗议期间保持和平和冷静。",
        answers: [
                { option: "A", answer: "advised", chinese_answer: "建议", chinese_romanization: "jiànyì" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "exhorted", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
                { option: "D", answer: "provoked", chinese_answer: "激怒", chinese_romanization: "jīnù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exhorted' means to strongly encourage or urge someone to do something." +
                "<br><br>" +
                "(A) 'advised' means to offer suggestions about the best course of action to someone." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'provoked' means to stimulate or give rise to a reaction or emotion, typically a strong or unwelcome one.",
        chinese_explanation: "(C) '力劝' 意味着强烈鼓励或敦促某人做某事。" +
                "<br><br>" +
                "(A) '建议' 意味着向某人提供关于最佳行动方案的建议。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '激怒' 意味着引起或激发某种反应或情感，通常是强烈的或不受欢迎的。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
