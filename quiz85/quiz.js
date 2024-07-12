// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "She found it difficult to share her opinions because she feared others would __________ her thoughts.",
    chinese_question: "她发现很难分享自己的意见，因为她担心别人会 __________ 她的想法。",
    answers: [
        { option: "A", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "deride", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "C", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zānyáng" },
        { option: "D", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'deride' means to express contempt for; ridicule." +
        "<br><br>" +
        "(A) 'accept' means to consent to receive or undertake something." +
        "<br><br>" +
        "(C) 'praise' means to express warm approval or admiration." +
        "<br><br>" +
        "(D) 'consider' means to think carefully about something.",
    chinese_explanation: "(B) '嘲笑' 意味着表达蔑视；嘲弄。" +
        "<br><br>" +
        "(A) '接受' 意味着同意接收或承担某事。" +
        "<br><br>" +
        "(C) '赞扬' 意味着表达热情的赞同或钦佩。" +
        "<br><br>" +
        "(D) '考虑' 意味着仔细考虑某事。"
    },
    {
        id: 2,
        question: "The clever con artist managed to __________ the tourists into buying fake tickets.",
        chinese_question: "那个聪明的骗子设法 __________ 游客购买假票。",
        answers: [
                { option: "A", answer: "help", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
                { option: "B", answer: "hoodwink", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
                { option: "C", answer: "warn", chinese_answer: "警告", chinese_romanization: "jǐnggào" },
                { option: "D", answer: "guide", chinese_answer: "引导", chinese_romanization: "yǐndǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'hoodwink' means to deceive or trick someone." +
                "<br><br>" +
                "(A) 'help' means to assist someone." +
                "<br><br>" +
                "(C) 'warn' means to inform someone in advance of an impending or possible danger, problem, or other unpleasant situation." +
                "<br><br>" +
                "(D) 'guide' means to show or indicate the way to someone.",
        chinese_explanation: "(B) '欺骗' 意味着欺骗或欺诈某人。" +
                "<br><br>" +
                "(A) '帮助' 意味着协助某人。" +
                "<br><br>" +
                "(C) '警告' 意味着事先告知某人即将发生的或可能的危险、问题或其他不愉快的情况。" +
                "<br><br>" +
                "(D) '引导' 意味着为某人指示或显示方向。"
    },
    {
        id: 3,
    question: "In her mind, she would often __________ between her love for the city and her desire to move to the countryside.",
    chinese_question: "她的内心经常在对城市的热爱和搬到乡村的渴望之间 __________。",
    answers: [
        { option: "A", answer: "settle", chinese_answer: "决定", chinese_romanization: "juédìng" },
        { option: "B", answer: "oscillate", chinese_answer: "摆动", chinese_romanization: "bǎidòng" },
        { option: "C", answer: "choose", chinese_answer: "选择", chinese_romanization: "xuǎnzé" },
        { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oscillate' figuratively means to swing back and forth between different opinions or desires." +
        "<br><br>" +
        "(A) 'settle' means to decide or arrange." +
        "<br><br>" +
        "(C) 'choose' means to select from options." +
        "<br><br>" +
        "(D) 'neglect' means to fail to care for.",
    chinese_explanation: "(B) '摆动' 一词在比喻上意味着在不同意见或愿望之间来回波动。" +
        "<br><br>" +
        "(A) '决定' 意味着决定或安排。" +
        "<br><br>" +
        "(C) '选择' 意味着从选项中选择。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能照顾。"
    },
    {
        id: 4,
        question: "The professor's explanation of quantum physics __________ the students, despite his efforts to simplify the concepts.",
        chinese_question: "尽管教授努力简化这些概念，但他对量子物理的解释还是让学生们 __________。",
        answers: [
                { option: "A", answer: "enlightened", chinese_answer: "启发", chinese_romanization: "qǐfā" },
                { option: "B", answer: "flummoxed", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
                { option: "C", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "D", answer: "inspired", chinese_answer: "启发", chinese_romanization: "qǐfā" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flummoxed' used figuratively means to confuse or bewilder someone." +
                "<br><br>" +
                "(A) 'enlightened' means to give someone greater knowledge and understanding about a subject or situation." +
                "<br><br>" +
                "(C) 'entertained' means to provide someone with amusement or enjoyment." +
                "<br><br>" +
                "(D) 'inspired' means to fill someone with the urge or ability to do or feel something.",
        chinese_explanation: "(B) '困惑' 在比喻意义上指使某人困惑或迷惑。" +
                "<br><br>" +
                "(A) '启发' 意味着给予某人关于某个主题或情况的更大知识和理解。" +
                "<br><br>" +
                "(C) '娱乐' 意味着为某人提供娱乐或享受。" +
                "<br><br>" +
                "(D) '启发' 意味着激发某人做某事的冲动或能力。"
    },
    {
        id: 5,
        question: "The relentless heat wave __________ the crops, leaving them dry and withered.",
        chinese_question: "无情的热浪 __________ 了农作物，使它们干枯萎蔫。",
        answers: [
                { option: "A", answer: "nourished", chinese_answer: "滋养", chinese_romanization: "zīyǎng" },
                { option: "B", answer: "invigorated", chinese_answer: "激励", chinese_romanization: "jīlì" },
                { option: "C", answer: "debilitated", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
                { option: "D", answer: "healed", chinese_answer: "治愈", chinese_romanization: "zhìyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'debilitated' means to make something weak and infirm." +
                "<br><br>" +
                "(A) 'nourished' means to provide with the food or other substances necessary for growth." +
                "<br><br>" +
                "(B) 'invigorated' means to give strength or energy to." +
                "<br><br>" +
                "(D) 'healed' means to make or become healthy again.",
        chinese_explanation: "(C) '削弱' 意味着使某物虚弱和衰弱。" +
                "<br><br>" +
                "(A) '滋养' 意味着提供生长所需的食物或其他物质。" +
                "<br><br>" +
                "(B) '激励' 意味着给予力量或能量。" +
                "<br><br>" +
                "(D) '治愈' 意味着使或变得健康。"
    },
    {
        id: 6,
    question: "In order to __________ the decline in membership, the club launched a new marketing campaign.",
    chinese_question: "为了 __________ 会员人数的下降，俱乐部发起了一项新的营销活动。",
    answers: [
        { option: "A", answer: "reverse", chinese_answer: "逆转", chinese_romanization: "nìzhuǎn" },
        { option: "B", answer: "accelerate", chinese_answer: "加速", chinese_romanization: "jiāsù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reverse' means to change to the opposite direction, position, or course of action." +
        "<br><br>" +
        "(B) 'accelerate' means to begin to move more quickly." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enforce' means to compel observance of or compliance with.",
    chinese_explanation: "(A) '逆转' 意味着改变到相反的方向、位置或行动方案。" +
        "<br><br>" +
        "(B) '加速' 意味着开始更快地移动。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '执行' 意味着强制遵守或遵守。"
    },
    {
        id: 7,
    question: "The sight of the luxurious yacht __________ the onlookers who dreamed of owning such a vessel.",
    chinese_question: "豪华游艇的景象 __________ 梦想拥有这样一艘船的旁观者。",
    answers: [
        { option: "A", answer: "satisfied", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "B", answer: "angered", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "tantalized", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
        { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'tantalized' means to torment or tease someone with the sight or promise of something that is unobtainable." +
        "<br><br>" +
        "(A) 'satisfied' means to meet the expectations, needs, or desires of someone." +
        "<br><br>" +
        "(B) 'angered' means to make someone feel strong displeasure." +
        "<br><br>" +
        "(D) 'ignored' means to refuse to take notice of.",
    chinese_explanation: "(C) '诱惑' 意味着用无法得到的东西的景象或承诺来折磨或戏弄某人。" +
        "<br><br>" +
        "(A) '满足' 意味着满足某人的期望、需求或愿望。" +
        "<br><br>" +
        "(B) '激怒' 意味着使某人感到强烈的不满。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 8,
        question: "The dark clouds __________ the mountain peaks, creating an ominous atmosphere.",
        chinese_question: "乌云 __________ 了山峰，营造了一种不祥的氛围。",
        answers: [
                { option: "A", answer: "exposed", chinese_answer: "暴露", chinese_romanization: "bàolù" },
                { option: "B", answer: "enshrouded", chinese_answer: "笼罩", chinese_romanization: "lǒngzhào" },
                { option: "C", answer: "illuminated", chinese_answer: "照亮", chinese_romanization: "zhàoliàng" },
                { option: "D", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enshrouded' means to cover or envelop completely and hide from view." +
                "<br><br>" +
                "(A) 'exposed' means to make something visible by uncovering it." +
                "<br><br>" +
                "(C) 'illuminated' means to light up." +
                "<br><br>" +
                "(D) 'revealed' means to make known to others.",
        chinese_explanation: "(B) '笼罩' 意味着完全覆盖或包围，使其隐藏不见。" +
                "<br><br>" +
                "(A) '暴露' 意味着通过揭开使某物可见。" +
                "<br><br>" +
                "(C) '照亮' 意味着点亮。" +
                "<br><br>" +
                "(D) '揭示' 意味着让别人知道。"
    },
    {
        id: 9,
    question: "He loved to __________ his wealth by driving expensive cars and wearing designer clothes.",
    chinese_question: "他喜欢通过开豪车和穿名牌服装来 __________ 他的财富。",
    answers: [
        { option: "A", answer: "brandish", chinese_answer: "炫耀", chinese_romanization: "xuànyào" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'brandish' means to display something ostentatiously, especially in order to gain attention." +
        "<br><br>" +
        "(B) 'hide' means to put or keep out of sight." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'belittle' means to make someone or something seem less impressive or important.",
    chinese_explanation: "(A) '炫耀' 意味着夸耀地展示某物，特别是为了吸引注意。" +
        "<br><br>" +
        "(B) '隐藏' 意味着使某物不被看到。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '贬低' 意味着让某人或某事显得不那么令人印象深刻或不重要。"
    },
    {
        id: 10,
        question: "Scientists often __________ popular misconceptions about vaccines to educate the public.",
        chinese_question: "科学家经常 __________ 关于疫苗的流行误解，以教育公众。",
        answers: [
                { option: "A", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbō" },
                { option: "B", answer: "debunk", chinese_answer: "揭穿", chinese_romanization: "jiēchuān" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "validate", chinese_answer: "验证", chinese_romanization: "yànzhèng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'debunk' means to expose the falseness or hollowness of a myth, idea, or belief." +
                "<br><br>" +
                "(A) 'spread' means to open out something so as to extend its surface area, width, or length." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'validate' means to check or prove the validity or accuracy of something.",
        chinese_explanation: "(B) '揭穿' 意味着揭露神话、想法或信仰的虚假性或空洞性。" +
                "<br><br>" +
                "(A) '传播' 意味着展开某物以扩大其表面积、宽度或长度。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '验证' 意味着检查或证明某事的有效性或准确性。"
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
