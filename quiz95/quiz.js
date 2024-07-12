// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The board of directors voted to __________ the CEO due to his mismanagement of the company.",
        chinese_question: "董事会投票决定因公司管理不善而 __________ 首席执行官。",
        answers: [
                { option: "A", answer: "depose", chinese_answer: "罢免", chinese_romanization: "bàmiǎn" },
                { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'depose' means to remove from office suddenly and forcefully." +
                "<br><br>" +
                "(B) 'reward' means to give something to someone in recognition of their services, efforts, or achievements." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'promote' means to support or actively encourage.",
        chinese_explanation: "(A) '罢免' 意味着突然且强制地将其免职。" +
                "<br><br>" +
                "(B) '奖励' 意味着因其服务、努力或成就而给予某人某物。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '提升' 意味着支持或积极鼓励。"
    },
    {
        id: 2,
    question: "The management had to __________ the newly implemented policy after receiving negative feedback from employees.",
    chinese_question: "管理层在收到员工的负面反馈后，不得不 __________ 新实施的政策。",
    answers: [
        { option: "A", answer: "enforce", chinese_answer: "执行", chinese_romanization: "zhíxíng" },
        { option: "B", answer: "rescind", chinese_answer: "撤销", chinese_romanization: "chèxiāo" },
        { option: "C", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zānyáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'rescind' means to revoke, cancel, or repeal a law, order, or agreement." +
        "<br><br>" +
        "(A) 'enforce' means to compel observance of or compliance with a law, rule, or obligation." +
        "<br><br>" +
        "(C) 'continue' means to persist in an activity or process." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(B) '撤销' 意味着撤销、取消或废除一项法律、命令或协议。" +
        "<br><br>" +
        "(A) '执行' 意味着强制遵守或遵循法律、规则或义务。" +
        "<br><br>" +
        "(C) '继续' 意味着继续进行某项活动或过程。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热情的赞同或钦佩。"
    },
    {
        id: 3,
    question: "The explorers needed to __________ the desert to find the ancient ruins.",
    chinese_question: "探险家们需要 __________ 沙漠才能找到古代遗迹。",
    answers: [
        { option: "A", answer: "navigate", chinese_answer: "导航", chinese_romanization: "dǎoháng" },
        { option: "B", answer: "traverse", chinese_answer: "穿越", chinese_romanization: "chuānyuè" },
        { option: "C", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'traverse' means to travel across or through." +
        "<br><br>" +
        "(A) 'navigate' means to plan and direct the course of a journey." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'abandon' means to give up completely.",
    chinese_explanation: "(B) '穿越' 意味着穿过或通过。" +
        "<br><br>" +
        "(A) '导航' 意味着计划和指导旅程的路线。" +
        "<br><br>" +
        "(C) '避开' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 4,
        question: "She would often __________ her tales of travel, making them sound more adventurous than they actually were.",
        chinese_question: "她常常 __________ 她的旅行故事，使它们听起来比实际更有冒险感。",
        answers: [
            { option: "A", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "B", answer: "embellish", chinese_answer: "美化", chinese_romanization: "měihuà" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "ruin", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'embellish' means to make a story more interesting by adding extra details that are often untrue." +
            "<br><br>" +
            "(A) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'ruin' means to destroy or spoil.",
        chinese_explanation: "(B) '美化'一词意味着通过添加通常不真实的额外细节使故事更有趣。" +
            "<br><br>" +
            "(A) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '破坏' 意味着破坏或毁坏。"
    },
    {
        id: 5,
        question: "The company was accused of trying to __________ its customers with hidden fees.",
        chinese_question: "该公司被指控试图通过隐藏费用 __________ 客户。",
        answers: [
                { option: "A", answer: "fleece", chinese_answer: "欺诈", chinese_romanization: "qīzhà" },
                { option: "B", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fleece' means to deceive or swindle someone out of money." +
                "<br><br>" +
                "(B) 'reward' means to give something in recognition of one's service, effort, or achievement." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'entertain' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(A) '欺诈' 意味着骗取或诈骗某人钱财。" +
                "<br><br>" +
                "(B) '奖励' 意味着对某人的服务、努力或成就给予认可。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 6,
    question: "He began to __________ when he saw the amount of work that needed to be done in such a short time.",
    chinese_question: "当他看到需要在这么短的时间内完成的工作量时，他开始 __________ 。",
    answers: [
        { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "hyperventilate", chinese_answer: "过度换气", chinese_romanization: "guòdù huànqì" },
        { option: "C", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
        { option: "D", answer: "meditate", chinese_answer: "冥想", chinese_romanization: "míngxiǎng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hyperventilate' means to breathe at an abnormally rapid rate, often due to stress or anxiety." +
        "<br><br>" +
        "(A) 'celebrate' means to acknowledge a significant or happy event." +
        "<br><br>" +
        "(C) 'smile' means to form one's features into a pleased or kind expression." +
        "<br><br>" +
        "(D) 'meditate' means to engage in contemplation or reflection.",
    chinese_explanation: "(B) '过度换气' 意味着以异常快速的速度呼吸，通常是由于压力或焦虑。" +
        "<br><br>" +
        "(A) '庆祝' 意味着承认重要或愉快的事件。" +
        "<br><br>" +
        "(C) '微笑' 意味着将面部表情变成愉快或亲切的表情。" +
        "<br><br>" +
        "(D) '冥想' 意味着进行沉思或反思。"
    },
    {
        id: 7,
        question: "The writer __________ his craft by writing every day, continually improving his style.",
        chinese_question: "这位作家通过每天写作，不断改进自己的风格 __________ 了他的技艺。",
        answers: [
                { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "honed", chinese_answer: "磨炼", chinese_romanization: "móliàn" },
                { option: "C", answer: "destroyed", chinese_answer: "毁坏", chinese_romanization: "huǐhuài" },
                { option: "D", answer: "polished", chinese_answer: "打磨", chinese_romanization: "dǎmó" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'honed' means to refine or perfect something over a period of time." +
                "<br><br>" +
                "(A) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'destroyed' means to put an end to the existence of something by damaging or attacking it." +
                "<br><br>" +
                "(D) 'polished' means to make the surface of something smooth and shiny by rubbing it.",
        chinese_explanation: "(B) '磨炼' 意味着在一段时间内改进或完善某事。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '毁坏' 意味着通过损坏或攻击使某物不存在。" +
                "<br><br>" +
                "(D) '打磨' 意味着通过摩擦使某物表面光滑和有光泽。"
    },
    {
        id: 8,
    question: "Good communication is __________ for effective teamwork.",
    chinese_question: "良好的沟通对有效的团队合作是 __________ 的。",
    answers: [
        { option: "A", answer: "essential", chinese_answer: "必要", chinese_romanization: "bìyào" },
        { option: "B", answer: "redundant", chinese_answer: "多余", chinese_romanization: "duōyú" },
        { option: "C", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" },
        { option: "D", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'essential' means absolutely necessary; extremely important." +
        "<br><br>" +
        "(B) 'redundant' means not or no longer needed or useful." +
        "<br><br>" +
        "(C) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(A) '必要' 意味着绝对必要；极其重要。" +
        "<br><br>" +
        "(B) '多余' 意味着不需要或不再需要或有用。" +
        "<br><br>" +
        "(C) '无关' 意味着与某事无关或不相关。" +
        "<br><br>" +
        "(D) '琐碎' 意味着价值或重要性很小。"
    },
    {
        id: 9,
        question: "The community was outraged when they discovered someone had __________ the local cemetery.",
        chinese_question: "社区发现有人 __________ 当地的墓地时感到愤怒。",
        answers: [
                { option: "A", answer: "desecrated", chinese_answer: "亵渎", chinese_romanization: "xièdú" },
                { option: "B", answer: "decorated", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "maintained", chinese_answer: "维护", chinese_romanization: "wéihù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'desecrated' means to treat a sacred place or thing with violent disrespect; to violate." +
                "<br><br>" +
                "(B) 'decorated' means to make something look more attractive by adding extra items or images to it." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'maintained' means to keep something in good condition by checking or repairing it regularly.",
        chinese_explanation: "(A) '亵渎' 意味着用暴力的不敬对待一个神圣的地方或事物；亵渎。" +
                "<br><br>" +
                "(B) '装饰' 意味着通过添加额外的物品或图像使某物看起来更有吸引力。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '维护' 意味着通过定期检查或修理来保持某物的良好状态。"
    },
    {
        id: 10,
    question: "When he read the contract, his heart __________, warning him that something was amiss.",
    chinese_question: "当他读到合同时，他的心 __________ ，警告他有些事情不对劲。",
    answers: [
        { option: "A", answer: "leaped", chinese_answer: "跳跃", chinese_romanization: "tiàoyuè" },
        { option: "B", answer: "misgave", chinese_answer: "不安", chinese_romanization: "bù'ān" },
        { option: "C", answer: "rejoiced", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "D", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'misgave' means to feel doubt or apprehension." +
        "<br><br>" +
        "(A) 'leaped' means to jump or move suddenly." +
        "<br><br>" +
        "(C) 'rejoiced' means to feel or show great joy." +
        "<br><br>" +
        "(D) 'calmed' means to become tranquil and quiet.",
    chinese_explanation: "B) '不安' 意味着感到怀疑或担忧。" +
        "<br><br>" +
        "(A) '跳跃' 意味着突然跳动或移动。" +
        "<br><br>" +
        "(C) '高兴' 意味着感到或表现出极大的喜悦。" +
        "<br><br>" +
        "(D) '平静' 意味着变得安静和平和。"
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
