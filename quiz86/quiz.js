// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The captain needed to __________ all available hands to repair the ship.",
    chinese_question: "船长需要 __________ 所有可用的人员来修理船只。",
    answers: [
        { option: "A", answer: "dismiss", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "muster", chinese_answer: "集合", chinese_romanization: "jíhé" },
        { option: "D", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'muster' means to gather or assemble, especially people or resources." +
        "<br><br>" +
        "(A) 'dismiss' means to send away." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'scatter' means to throw in various random directions.",
    chinese_explanation: "(C) '集合' 意味着聚集或召集，特别是人员或资源。" +
        "<br><br>" +
        "(A) '解散' 意味着遣散。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '分散' 意味着向各个随机方向投掷。"
    },
    {
        id: 2,
    question: "In order to advance his career, he needed to __________ the numerous setbacks he encountered.",
    chinese_question: "为了推动他的职业生涯，他需要 __________ 遇到的众多挫折。",
    answers: [
        { option: "A", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "B", answer: "surmount", chinese_answer: "克服", chinese_romanization: "kèfú" },
        { option: "C", answer: "accept", chinese_answer: "承担", chinese_romanization: "chéngdān" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'surmount' means to overcome a difficulty or obstacle." +
        "<br><br>" +
        "(A) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(C) 'accept' means to consent to receive or undertake something." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '克服' 意味着克服困难或障碍。" +
        "<br><br>" +
        "(A) '接受' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(C) '承担' 意味着同意接收或承担某事。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 3,
    question: "As the seasons change, temperatures in this region tend to __________ between extreme highs and lows.",
    chinese_question: "随着季节的变化，该地区的气温往往在极高和极低之间 __________。",
    answers: [
        { option: "A", answer: "stagnate", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
        { option: "B", answer: "oscillate", chinese_answer: "波动", chinese_romanization: "bōdòng" },
        { option: "C", answer: "solidify", chinese_answer: "固化", chinese_romanization: "gùhuà" },
        { option: "D", answer: "decrease", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'oscillate' means to move or swing back and forth in a regular rhythm." +
        "<br><br>" +
        "(A) 'stagnate' means to stop developing." +
        "<br><br>" +
        "(C) 'solidify' means to make or become hard or solid." +
        "<br><br>" +
        "(D) 'decrease' means to become smaller or fewer.",
    chinese_explanation: "(B) '波动' 一词意味着以规则的节奏来回移动。" +
        "<br><br>" +
        "(A) '停滞' 意味着停止发展。" +
        "<br><br>" +
        "(C) '固化' 意味着使变硬或变固。" +
        "<br><br>" +
        "(D) '减少' 意味着变得更小或更少。"
    },
    {
        id: 4,
        question: "After being caught, the suspect was __________ and awaited his trial.",
        chinese_question: "被抓获后，嫌疑人被 __________ 并等待审判。",
        answers: [
                { option: "A", answer: "freed", chinese_answer: "释放", chinese_romanization: "shìfàng" },
                { option: "B", answer: "incarcerated", chinese_answer: "监禁", chinese_romanization: "jiānjìn" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'incarcerated' means to imprison or confine someone." +
                "<br><br>" +
                "(A) 'freed' means to release someone from imprisonment or confinement." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'rewarded' means to give something to someone in recognition of their service, efforts, or achievements.",
        chinese_explanation: "(B) '监禁' 意味着监禁或限制某人。" +
                "<br><br>" +
                "(A) '释放' 意味着让某人自由。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 5,
        question: "The new employee tried to __________ himself with his boss by staying late every day.",
        chinese_question: "新员工试图通过每天晚留来 __________ 自己与老板的关系。",
        answers: [
                { option: "A", answer: "alienate", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" },
                { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
                { option: "C", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ingratiate' used figuratively means to gain favor or approval by deliberate efforts." +
                "<br><br>" +
                "(A) 'alienate' means to cause someone to feel isolated or estranged." +
                "<br><br>" +
                "(C) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '讨好' 在比喻意义上指通过刻意的努力获得某人的喜欢或认可。" +
                "<br><br>" +
                "(A) '疏远' 意味着使某人感到孤立或疏远。" +
                "<br><br>" +
                "(C) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
    question: "The sudden change in his behavior __________ his friends, who could not understand the reason behind it.",
    chinese_question: "他行为的突然变化 __________ 了他的朋友们，他们无法理解背后的原因。",
    answers: [
        { option: "A", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
        { option: "B", answer: "mystified", chinese_answer: "使迷惑", chinese_romanization: "shǐ míhuò" },
        { option: "C", answer: "explained", chinese_answer: "解释", chinese_romanization: "jiěshì" },
        { option: "D", answer: "clarified", chinese_answer: "澄清", chinese_romanization: "chéngqīng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'mystified' figuratively means to perplex or bewilder." +
        "<br><br>" +
        "(A) 'revealed' means to make known." +
        "<br><br>" +
        "(C) 'explained' means to make something clear." +
        "<br><br>" +
        "(D) 'clarified' means to make clear.",
    chinese_explanation: "(B) '使迷惑' 一词在比喻上意味着使困惑或迷惑。" +
        "<br><br>" +
        "(A) '揭示' 意味着使之变得已知。" +
        "<br><br>" +
        "(C) '解释' 意味着使某事变得清楚。" +
        "<br><br>" +
        "(D) '澄清' 意味着使清楚。"
    },
    {
        id: 7,
    question: "The city's population continues to __________ as more people move to urban areas for job opportunities.",
    chinese_question: "随着更多人搬到城市地区寻找工作机会，这座城市的人口继续 __________ 。",
    answers: [
        { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
        { option: "B", answer: "dwindle", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "C", answer: "vanish", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
        { option: "D", answer: "shrink", chinese_answer: "缩小", chinese_romanization: "suōxiǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'increase' means a rise in the amount, number, or value of something." +
        "<br><br>" +
        "(B) 'dwindle' means to diminish gradually in size, amount, or strength." +
        "<br><br>" +
        "(C) 'vanish' means to disappear suddenly and completely." +
        "<br><br>" +
        "(D) 'shrink' means to become or make smaller in size or amount.",
    chinese_explanation: "(A) '增加' 意味着某物的数量、数目或价值的上升。" +
        "<br><br>" +
        "(B) '减少' 意味着大小、数量或力量的逐渐减少。" +
        "<br><br>" +
        "(C) '消失' 意味着突然和完全地消失。" +
        "<br><br>" +
        "(D) '缩小' 意味着在大小或数量上变小或使变小。"
    },
    {
        id: 8,
    question: "She was __________ about her knowledge of the subject, hoping to impress her peers.",
    chinese_question: "她对自己的知识__________，希望能给同伴留下深刻印象。",
    answers: [
        { option: "A", answer: "bluffing", chinese_answer: "吹牛", chinese_romanization: "chuīniú" },
        { option: "B", answer: "knowledgeable", chinese_answer: "博学", chinese_romanization: "bóxué" },
        { option: "C", answer: "modest", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
        { option: "D", answer: "honest", chinese_answer: "诚实", chinese_romanization: "chéngshí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'bluffing' means trying to deceive someone as to one's abilities or intentions." +
        "<br><br>" +
        "(B) 'knowledgeable' means intelligent and well informed." +
        "<br><br>" +
        "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
        "<br><br>" +
        "(D) 'honest' means free of deceit and untruthfulness; sincere.",
    chinese_explanation: "(A) '吹牛'一词意味着试图欺骗某人关于自己的能力或意图。" +
        "<br><br>" +
        "(B) '博学' 意味着聪明且知识渊博。" +
        "<br><br>" +
        "(C) '谦虚' 意味着对自己的能力或成就表现出谦逊。" +
        "<br><br>" +
        "(D) '诚实' 意味着没有欺骗和不真实；真诚。"
    },
    {
        id: 9,
        question: "The lawyer worked hard to __________ the company for violating environmental laws.",
        chinese_question: "律师努力 __________ 该公司违反环境法律的行为。",
        answers: [
            { option: "A", answer: "defend", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "B", answer: "prosecute", chinese_answer: "起诉", chinese_romanization: "qǐsù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prosecute' means to institute legal proceedings against someone or something." +
            "<br><br>" +
            "(A) 'defend' means to resist an attack made on someone or something; protect from harm or danger." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'release' means to set someone or something free from confinement, restraint, or bondage.",
        chinese_explanation: "(B) '起诉'一词意味着对某人或某事提起法律诉讼。" +
            "<br><br>" +
            "(A) '辩护' 意味着抵御对某人或某物的攻击；保护免受伤害或危险。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '释放' 意味着将某人或某物从监禁、束缚或奴役中释放出来。"
    },
    {
        id: 10,
    question: "She tends to __________ over decisions, often making her miss out on good opportunities.",
    chinese_question: "她在做决定时常常 __________，因此错过了很多好机会。",
    answers: [
        { option: "A", answer: "rush", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" },
        { option: "B", answer: "tarry", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "C", answer: "finalize", chinese_answer: "最终确定", chinese_romanization: "zuìzhōng quèdìng" },
        { option: "D", answer: "act", chinese_answer: "行动", chinese_romanization: "xíngdòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tarry' figuratively means to delay or linger in making decisions." +
        "<br><br>" +
        "(A) 'rush' means to move quickly." +
        "<br><br>" +
        "(C) 'finalize' means to complete or settle." +
        "<br><br>" +
        "(D) 'act' means to take action.",
    chinese_explanation: "(B) '犹豫' 一词在比喻上意味着延迟或停留在做决定上。" +
        "<br><br>" +
        "(A) '匆忙' 意味着快速移动。" +
        "<br><br>" +
        "(C) '最终确定' 意味着完成或确定。" +
        "<br><br>" +
        "(D) '行动' 意味着采取行动。"
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
