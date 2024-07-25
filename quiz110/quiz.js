// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The driver took a different route to __________ the traffic jam on the highway.",
        chinese_question: "司机走了不同的路线来 __________ 高速公路上的交通堵塞。",
        answers: [
            { option: "A", answer: "circumvent", chinese_answer: "绕过", chinese_romanization: "ràoguò" },
            { option: "B", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "C", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'circumvent' means to find a way around (an obstacle)." +
            "<br><br>" +
            "(B) 'confront' means to face up to and deal with (a problem or difficult situation)." +
            "<br><br>" +
            "(C) 'follow' means to go or come after (a person or thing proceeding ahead); move or travel behind." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '绕过' 意味着找到绕过（障碍物）的办法。" +
            "<br><br>" +
            "(B) '面对' 意味着面对并处理（问题或困难情况）。" +
            "<br><br>" +
            "(C) '跟随' 意味着在（前面行进的人或事物）之后走或来；移动或旅行在后面。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "The university aims to __________ funding from alumni to support scholarships for underprivileged students.",
    chinese_question: "这所大学旨在向校友 __________ 资金，以支持贫困学生的奖学金。",
    answers: [
        { option: "A", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "solicit", chinese_answer: "请求", chinese_romanization: "qǐngqiú" },
        { option: "C", answer: "deter", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
        { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'solicit' means to ask for or try to obtain something from someone." +
        "<br><br>" +
        "(A) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(C) 'deter' means to discourage someone from doing something." +
        "<br><br>" +
        "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(B) '请求' 意味着向某人请求或试图从某人那里获得某物。" +
        "<br><br>" +
        "(A) '忽视' 意味着不注意；忽略。" +
        "<br><br>" +
        "(C) '阻止' 意味着阻止某人做某事。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 3,
    question: "The salesman would often __________ potential customers in the mall, trying to sell his products.",
    chinese_question: "这名推销员经常在商场里 __________ 潜在顾客，试图推销他的产品。",
    answers: [
        { option: "A", answer: "accost", chinese_answer: "搭讪", chinese_romanization: "dāshàn" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
        { option: "D", answer: "thank", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'accost' means to approach and address someone boldly or aggressively." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'thank' means to express gratitude to someone.",
    chinese_explanation: "(A) '搭讪' 意味着大胆或攻击性地接近并与某人交谈。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '避开' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(D) '感谢' 意味着对某人表示感激。"
    },
    {
        id: 4,
    question: "To get the project done on time, she __________ the assistance of her most reliable team members.",
    chinese_question: "为了按时完成项目，她 __________ 了最可靠的团队成员的帮助。",
    answers: [
        { option: "A", answer: "enlisted", chinese_answer: "寻求", chinese_romanization: "xúnqiú" },
        { option: "B", answer: "rejected", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
        { option: "C", answer: "doubted", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
        { option: "D", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enlisted' means secured the support or help of someone." +
        "<br><br>" +
        "(B) 'rejected' means dismissed or refused." +
        "<br><br>" +
        "(C) 'doubted' means felt uncertain about." +
        "<br><br>" +
        "(D) 'delayed' means made something happen later than planned.",
    chinese_explanation: "(A) '寻求' 意味着获得某人的支持或帮助。" +
        "<br><br>" +
        "(B) '拒绝' 意味着驳回或拒绝。" +
        "<br><br>" +
        "(C) '怀疑' 意味着感到不确定。" +
        "<br><br>" +
        "(D) '延迟' 意味着使某事发生的时间晚于计划。"
    },
    {
        id: 5,
    question: "In order to excel, athletes must __________ on their training regimes.",
    chinese_question: "为了出类拔萃，运动员必须 __________ 在他们的训练计划上。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "B", answer: "distract", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'focus' means to pay particular attention to something." +
        "<br><br>" +
        "(A) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(B) 'distract' means to prevent someone from giving full attention to something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(D) '专注' 意味着特别注意某事。" +
        "<br><br>" +
        "(A) '忽略' 意味着未能适当照顾。" +
        "<br><br>" +
        "(B) '分心' 意味着阻止某人全神贯注于某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
        question: "The two executives were found to __________ to embezzle funds from the company.",
        chinese_question: "发现这两位高管 __________ 侵吞公司的资金。",
        answers: [
                { option: "A", answer: "connive", chinese_answer: "密谋", chinese_romanization: "mìmóu" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'connive' means to secretly allow something immoral, illegal, or harmful to occur; to conspire." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight of something; to hold up." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'praise' means to express warm approval or admiration.",
        chinese_explanation: "(A) '密谋' 意味着秘密允许某事发生，尤其是非法的或有害的；合谋。" +
                "<br><br>" +
                "(B) '支持' 意味着承担某物的全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '赞扬' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 7,
            question: "He attempted to __________ his procrastination by arguing that he worked better under pressure.",
            chinese_question: "他试图通过争辩自己在压力下工作得更好来 __________ 他的拖延行为。",
            answers: [
                { option: "A", answer: "rationalize", chinese_answer: "合理化", chinese_romanization: "hélǐhuà" },
                { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'rationalize' means to attempt to explain or justify behavior or an attitude with logical reasons, even if these are not appropriate." +
                "<br><br>" +
                "(B) 'simplify' means to make something simpler or easier to do or understand." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of." +
                "<br><br>" +
                "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
            chinese_explanation: "(A) '合理化' 意味着试图用合理的理由解释或证明行为或态度，即使这些理由并不合适。" +
                "<br><br>" +
                "(B) '简化' 意味着使某事更简单或更容易做或理解。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意。" +
                "<br><br>" +
                "(D) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。"
    },
    {
        id: 8,
        question: "The rising cost of living __________ many people to look for additional sources of income.",
        chinese_question: "生活成本的上涨 __________ 许多人寻找额外的收入来源。",
        answers: [
            { option: "A", answer: "prompted", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "B", answer: "deterred", chinese_answer: "威慑", chinese_romanization: "wēishè" },
            { option: "C", answer: "confused", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prompted' figuratively means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(B) 'deterred' means to discourage someone from doing something by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(C) 'confused' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'calmed' means to make (someone) tranquil and quiet; soothe.",
        chinese_explanation: "(A) '促使' 在此语境下比喻导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(B) '威慑' 意味着通过灌输怀疑或对后果的恐惧来阻止某人做某事。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '平静' 意味着使（某人）平静和安静；安抚。"
    },
    {
        id: 9,
        question: "His actions __________ the school's code of conduct, resulting in disciplinary action.",
        chinese_question: "他的行为 __________ 了学校的行为准则，导致了纪律处分。",
        answers: [
            { option: "A", answer: "complied with", chinese_answer: "遵守", chinese_romanization: "zūnshǒu" },
            { option: "B", answer: "contravened", chinese_answer: "违反", chinese_romanization: "wéifǎn" },
            { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contravened' means to violate or conflict with a law, rule, or agreement." +
            "<br><br>" +
            "(A) 'complied with' means to act in accordance with a wish or command." +
            "<br><br>" +
            "(C) 'supported' means to give assistance to." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '违反'一词意味着违反或与法律、规则或协议相冲突。" +
            "<br><br>" +
            "(A) '遵守' 意味着按照愿望或命令行事。" +
            "<br><br>" +
            "(C) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
        question: "The CEO tried to __________ the tension in the meeting by cracking a joke.",
        chinese_question: "首席执行官试图通过讲笑话来 __________ 会议上的紧张气氛。",
        answers: [
            { option: "A", answer: "diffuse", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "B", answer: "heighten", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diffuse' means to spread or cause to spread over a wide area or among a large number of people." +
            "<br><br>" +
            "(B) 'heighten' means to make or become more intense." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'worsen' means to make or become worse.",
        chinese_explanation: "(A) '缓解' 意味着在广泛的区域或大量的人群中传播或导致传播。" +
            "<br><br>" +
            "(B) '加剧' 意味着使变得更激烈。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '恶化' 意味着使变得更糟。"
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
