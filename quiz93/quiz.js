// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Before the parade, the soldiers had to __________ in the courtyard and prepare for inspection by their commanding officer.",
    chinese_question: "在游行之前，士兵们必须在庭院里 __________ 并准备接受指挥官的检阅。",
    answers: [
        { option: "A", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "B", answer: "muster", chinese_answer: "集合", chinese_romanization: "jíhé" },
        { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
        { option: "D", answer: "march", chinese_answer: "行军", chinese_romanization: "xíngjūn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'muster' means to gather or assemble, especially troops." +
        "<br><br>" +
        "(A) 'disperse' means to distribute or spread over a wide area." +
        "<br><br>" +
        "(C) 'retreat' means to withdraw." +
        "<br><br>" +
        "(D) 'march' means to walk in a military manner.",
    chinese_explanation: "(B) '集合' 意味着聚集或召集，特别是部队。" +
        "<br><br>" +
        "(A) '分散' 意味着分布或扩散到广泛的区域。" +
        "<br><br>" +
        "(C) '撤退' 意味着撤离。" +
        "<br><br>" +
        "(D) '行军' 意味着以军人的方式行走。"
    },
    {
        id: 2,
    question: "If we __________ too long, we might miss the chance to buy tickets for the concert.",
    chinese_question: "如果我们 __________ 太久，可能会错过购买演唱会门票的机会。",
    answers: [
        { option: "A", answer: "hurry", chinese_answer: "赶快", chinese_romanization: "gǎnkuài" },
        { option: "B", answer: "tarry", chinese_answer: "逗留", chinese_romanization: "dòuliú" },
        { option: "C", answer: "expedite", chinese_answer: "加速", chinese_romanization: "jiāsù" },
        { option: "D", answer: "hasten", chinese_answer: "匆忙", chinese_romanization: "cōngmáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tarry' means to delay or linger." +
        "<br><br>" +
        "(A) 'hurry' means to move quickly." +
        "<br><br>" +
        "(C) 'expedite' means to speed up a process." +
        "<br><br>" +
        "(D) 'hasten' means to move quickly.",
    chinese_explanation: "(B) '逗留' 一词意味着延迟或停留。" +
        "<br><br>" +
        "(A) '赶快' 意味着快速移动。" +
        "<br><br>" +
        "(C) '加速' 意味着加快过程。" +
        "<br><br>" +
        "(D) '匆忙' 意味着快速移动。"
    },
    {
        id: 3,
    question: "It is against the rules for prison guards to __________ with inmates to prevent any potential conflicts of interest.",
    chinese_question: "为了防止任何潜在的利益冲突，狱警不得与囚犯 __________ 。",
    answers: [
        { option: "A", answer: "fraternize", chinese_answer: "结交", chinese_romanization: "jiéjiāo" },
        { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "C", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" },
        { option: "D", answer: "alienate", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fraternize' means to associate or form a friendship with someone, especially when one is not supposed to." +
        "<br><br>" +
        "(B) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(C) 'reprimand' means to rebuke someone, especially officially." +
        "<br><br>" +
        "(D) 'alienate' means to cause someone to feel isolated or estranged.",
    chinese_explanation: "(A) '结交' 意味着与某人交往或形成友谊，尤其是在不应该这样做的时候。" +
        "<br><br>" +
        "(B) '避免' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(C) '训斥' 意味着特别是官方地训斥某人。" +
        "<br><br>" +
        "(D) '疏远' 意味着使某人感到孤立或疏远。"
    },
    {
        id: 4,
        question: "The scientists could __________ a future where diseases are eradicated through advanced technology.",
        chinese_question: "科学家们可以 __________ 一个通过先进技术消灭疾病的未来。",
        answers: [
            { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "envisage", chinese_answer: "设想", chinese_romanization: "shèxiǎng" },
            { option: "C", answer: "challenge", chinese_answer: "质疑", chinese_romanization: "zhìyí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'envisage' figuratively means to imagine or visualize." +
            "<br><br>" +
            "(A) 'doubt' means to feel uncertain about." +
            "<br><br>" +
            "(C) 'challenge' means to dispute the truth or validity of." +
            "<br><br>" +
            "(D) 'ignore' means to pay no attention to.",
        chinese_explanation: "(B) '设想' 一词在比喻上意味着想象或可视化。" +
            "<br><br>" +
            "(A) '怀疑' 意味着对某事感到不确定。" +
            "<br><br>" +
            "(C) '质疑' 意味着质疑真相或有效性。" +
            "<br><br>" +
            "(D) '忽视' 意味着不注意。"
    },
    {
        id: 5,
    question: "The company's decision to __________ financial information to the public improved its transparency and trustworthiness.",
    chinese_question: "公司决定向公众 __________ 财务信息，提升了其透明度和可信度。",
    answers: [
        { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "divulge", chinese_answer: "公开", chinese_romanization: "gōngkāi" },
        { option: "C", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
        { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'divulge' figuratively means to make known (private or sensitive information)." +
        "<br><br>" +
        "(A) 'conceal' means to hide." +
        "<br><br>" +
        "(C) 'obscure' means to make unclear." +
        "<br><br>" +
        "(D) 'distort' means to twist out of shape or misrepresent.",
    chinese_explanation: "(B) '公开' 一词在比喻上意味着使（私人或敏感信息）变得公开。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐藏。" +
        "<br><br>" +
        "(C) '模糊' 意味着使不清楚。" +
        "<br><br>" +
        "(D) '扭曲' 意味着扭曲或歪曲。"
    },
    {
        id: 6,
        question: "The detective worked hard to __________ the complex web of lies surrounding the case.",
        chinese_question: "侦探努力 __________ 围绕案件的复杂谎言。",
        answers: [
                { option: "A", answer: "disentangle", chinese_answer: "解开", chinese_romanization: "jiěkāi" },
                { option: "B", answer: "weave", chinese_answer: "编织", chinese_romanization: "biānzhī" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disentangle' means to free something or someone from an entanglement." +
                "<br><br>" +
                "(B) 'weave' means to form fabric by interlacing long threads." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'complicate' means to make something more difficult or complex.",
        chinese_explanation: "(A) '解开' 意味着将某物或某人从纠缠中解脱出来。" +
                "<br><br>" +
                "(B) '编织' 意味着通过编织长线形成织物。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '复杂化' 意味着使某事变得更困难或复杂。"
    },
    {
        id: 7,
        question: "Despite his years of service, the employee was __________ to a minor role after the new management took over.",
        chinese_question: "尽管他服务多年，在新管理层接手后，这名员工被 __________ 到一个次要角色。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "relegated", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
            { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "promoted", chinese_answer: "提升", chinese_romanization: "tíshēng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'relegated' means to assign an inferior rank or position to someone or something." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(D) 'promoted' means to raise someone to a higher rank or position.",
        chinese_explanation: "(B) '降级'一词意味着将某人或某物分配到较低的级别或职位。" +
            "<br><br>" +
            "(A) '赞美' 意味着表示热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(D) '提升' 意味着将某人提升到更高的职位或级别。"
    },
    {
        id: 8,
    question: "Realizing the immense challenges ahead, the leader chose to __________ the initial strategy and devise a new plan.",
    chinese_question: "意识到前方的巨大挑战，领导者选择 __________ 最初的策略并制定新计划。",
    answers: [
        { option: "A", answer: "uphold", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "scuttle", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" },
        { option: "C", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
        { option: "D", answer: "maintain", chinese_answer: "维护", chinese_romanization: "wéihù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'scuttle' means to deliberately cause something to fail or end." +
        "<br><br>" +
        "(A) 'uphold' means to support or maintain." +
        "<br><br>" +
        "(C) 'embrace' means to accept or support willingly and enthusiastically." +
        "<br><br>" +
        "(D) 'maintain' means to keep in existence or continuance.",
    chinese_explanation: "(B) '终止' 意味着故意使某事失败或结束。" +
        "<br><br>" +
        "(A) '支持' 意味着支持或维护。" +
        "<br><br>" +
        "(C) '接受' 意味着愿意并热情地接受或支持。" +
        "<br><br>" +
        "(D) '维护' 意味着保持存在或延续。"
    },
    {
        id: 9,
        question: "The journalist decided to __________ the politician's integrity, citing numerous instances of corruption and dishonesty.",
        chinese_question: "记者决定 __________ 这位政客的诚信，列举了多次腐败和不诚实的事例。",
        answers: [
            { option: "A", answer: "vindicate", chinese_answer: "证明无辜", chinese_romanization: "zhèngmíng wúgū" },
            { option: "B", answer: "corroborate", chinese_answer: "证实", chinese_romanization: "zhèngshí" },
            { option: "C", answer: "exonerate", chinese_answer: "免罪", chinese_romanization: "miǎnzuì" },
            { option: "D", answer: "impugn", chinese_answer: "质疑", chinese_romanization: "zhìyí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impugn' means to dispute the truth, validity, or honesty of a statement or motive; call into question." +
            "<br><br>" +
            "(A) 'vindicate' means to clear someone of blame or suspicion." +
            "<br><br>" +
            "(B) 'corroborate' means to confirm or give support to a statement, theory, or finding." +
            "<br><br>" +
            "(C) 'exonerate' means to absolve someone from blame for a fault or wrongdoing.",
        chinese_explanation: "(D) '质疑' 意味着对声明或动机的真实性、有效性或诚实性提出异议；质疑。" +
            "<br><br>" +
            "(A) '证明无辜' 意味着证明某人无罪或嫌疑。" +
            "<br><br>" +
            "(B) '证实' 意味着确认或支持声明、理论或发现。" +
            "<br><br>" +
            "(C) '免罪' 意味着使某人免于因过失或错误行为受到指责。"
    },
    {
        id: 10,
        question: "Taking into account recent economic developments, the renowned economist was asked to __________ the future trends of the global market and make educated guesses.",
        chinese_question: "考虑到最近的经济发展，著名经济学家被要求 __________ 全球市场的未来趋势并做出有根据的猜测。",
        answers: [
            { option: "A", answer: "obfuscate", chinese_answer: "使模糊", chinese_romanization: "shǐ móhú" },
            { option: "B", answer: "fabricate", chinese_answer: "捏造", chinese_romanization: "niēzào" },
            { option: "C", answer: "prevaricate", chinese_answer: "支吾", chinese_romanization: "zhīwú" },
            { option: "D", answer: "prognosticate", chinese_answer: "预言", chinese_romanization: "yùyán" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'prognosticate' means to foretell or predict an event in the future." +
            "<br><br>" +
            "(A) 'obfuscate' means to render obscure, unclear, or unintelligible." +
            "<br><br>" +
            "(B) 'fabricate' means to invent or concoct something, typically with deceitful intent." +
            "<br><br>" +
            "(C) 'prevaricate' means to speak or act in an evasive way.",
        chinese_explanation: "(D) '预言' 意味着预言或预测未来的事件。" +
            "<br><br>" +
            "(A) '使模糊' 意味着使模糊、不清楚或难以理解。" +
            "<br><br>" +
            "(B) '捏造' 意味着发明或编造某物，通常带有欺骗意图。" +
            "<br><br>" +
            "(C) '支吾' 意味着以回避的方式说话或行事。"
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
