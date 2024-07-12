// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Wisdom seemed to __________ from the old man as he shared stories from his youth.",
        chinese_question: "当这位老人分享他年轻时的故事时，智慧似乎从他身上 __________ 出来。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "emanate", chinese_answer: "散发", chinese_romanization: "sànfā" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emanate' means to issue or spread out from a source." +
            "<br><br>" +
            "(A) 'diminish' means to make or become less." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
        chinese_explanation: "(B) '散发' 意味着从源头发出或散发。" +
            "<br><br>" +
            "(A) '减少' 意味着减少或变少。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '拒绝' 意味着因不充分、不接受或有缺陷而驳回。"
    },
    {
        id: 2,
    question: "The harsh words from his friend __________ him deeply, leaving him feeling hurt and betrayed.",
    chinese_question: "他朋友的恶言恶语深深 __________ 了他，让他感到受伤和背叛。",
    answers: [
        { option: "A", answer: "aggrieved", chinese_answer: "使痛苦", chinese_romanization: "shǐ tòngkǔ" },
        { option: "B", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "delighted", chinese_answer: "使高兴", chinese_romanization: "shǐ gāoxìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'aggrieved' means feeling resentment at having been unfairly treated." +
        "<br><br>" +
        "(B) 'comforted' means to have soothed or consoled." +
        "<br><br>" +
        "(C) 'ignored' means to have refused to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'delighted' means to have pleased greatly.",
    chinese_explanation: "(A) '使痛苦' 意味着感到被不公平对待的怨恨。" +
        "<br><br>" +
        "(B) '安慰' 意味着抚慰或安慰。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '使高兴' 意味着使人非常愉快。"
    },
    {
        id: 3,
    question: "During the interview, he decided to __________ his plans for the future.",
    chinese_question: "在采访中，他决定 __________ 他的未来计划。",
    answers: [
        { option: "A", answer: "reveal", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
        { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "C", answer: "postpone", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
        { option: "D", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'reveal' means to make known to others." +
        "<br><br>" +
        "(B) 'hide' means to put or keep out of sight." +
        "<br><br>" +
        "(C) 'postpone' means to cause or arrange for something to take place at a time later than that first scheduled." +
        "<br><br>" +
        "(D) 'forget' means to fail to remember.",
    chinese_explanation: "(A) '揭示' 意味着让他人知道。" +
        "<br><br>" +
        "(B) '隐藏' 意味着放置或保持在视线之外。" +
        "<br><br>" +
        "(C) '推迟' 意味着安排或导致某事在最初计划时间之后发生。" +
        "<br><br>" +
        "(D) '忘记' 意味着未能记住。"
    },
    {
        id: 4,
    question: "The advisor helped him __________ his career in the right direction.",
    chinese_question: "顾问帮助他将职业生涯 __________ 到正确的方向。",
    answers: [
        { option: "A", answer: "derail", chinese_answer: "出轨", chinese_romanization: "chūguǐ" },
        { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "C", answer: "steer", chinese_answer: "引导", chinese_romanization: "yǐndǎo" },
        { option: "D", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'steer' means to guide or control the movement or course of something." +
        "<br><br>" +
        "(A) 'derail' means to cause to leave its tracks accidentally." +
        "<br><br>" +
        "(B) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'end' means to bring or come to a conclusion.",
    chinese_explanation: "(C) '引导' 意味着引导或控制某物的运动或进程。" +
        "<br><br>" +
        "(A) '出轨' 意味着使意外脱离轨道。" +
        "<br><br>" +
        "(B) '避免' 意味着远离某事或阻止自己做某事。" +
        "<br><br>" +
        "(D) '结束' 意味着使或达到结论。"
    },
    {
        id: 5,
        question: "The marketing tactics were so aggressive that many customers felt __________ into buying the product.",
        chinese_question: "这些营销策略如此激进，许多顾客感到被 __________ 购买产品。",
        answers: [
                { option: "A", answer: "coerced", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
                { option: "B", answer: "invited", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "entertained", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'coerced' means to be forced or compelled to do something by using force or threats, used figuratively here." +
                "<br><br>" +
                "(B) 'invited' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'entertained' means to provide someone with amusement or enjoyment.",
        chinese_explanation: "(A) '强迫' 意味着被迫或被强制做某事，这里是比喻用法。" +
                "<br><br>" +
                "(B) '邀请' 意味着礼貌、正式或友好地请求某人去某地或做某事。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '娱乐' 意味着为某人提供娱乐或享受。"
    },
    {
        id: 6,
    question: "She struggled to __________ in a competitive environment where everyone was trying to outdo each other.",
    chinese_question: "她在每个人都在争相超过彼此的竞争环境中努力 __________ 。",
    answers: [
        { option: "A", answer: "survive", chinese_answer: "生存", chinese_romanization: "shēngcún" },
        { option: "B", answer: "dominate", chinese_answer: "控制", chinese_romanization: "kòngzhì" },
        { option: "C", answer: "surrender", chinese_answer: "投降", chinese_romanization: "tóuxiáng" },
        { option: "D", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'survive' means to continue to live or exist, especially in spite of danger or hardship." +
        "<br><br>" +
        "(B) 'dominate' means to have a commanding influence on; exercise control over." +
        "<br><br>" +
        "(C) 'surrender' means to cease resistance to an enemy or opponent and submit to their authority." +
        "<br><br>" +
        "(D) 'retreat' means to move back or withdraw.",
    chinese_explanation: "(A) '生存' 意味着继续活着或存在，尤其是尽管有危险或困难。" +
        "<br><br>" +
        "(B) '控制' 意味着对某物具有指挥影响力；行使控制。" +
        "<br><br>" +
        "(C) '投降' 意味着停止抵抗敌人或对手并服从他们的权威。" +
        "<br><br>" +
        "(D) '撤退' 意味着后退或撤回。"
    },
    {
        id: 7,
    question: "The authorities decided to __________ the protestors for blocking the main road.",
    chinese_question: "当局决定 __________ 抗议者，因为他们阻塞了主干道。",
    answers: [
        { option: "A", answer: "assist", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "B", answer: "arrest", chinese_answer: "逮捕", chinese_romanization: "dàibǔ" },
        { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'arrest' means to seize someone by legal authority and take them into custody." +
        "<br><br>" +
        "(A) 'assist' means to help someone." +
        "<br><br>" +
        "(C) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(B) '逮捕' 意味着通过法律权力抓捕某人并将其拘留。" +
        "<br><br>" +
        "(A) '帮助' 意味着帮助某人。" +
        "<br><br>" +
        "(C) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的认可或钦佩。"
    },
    {
        id: 8,
    question: "The teacher's supportive words helped to __________ the student's anxiety before the exam.",
    chinese_question: "老师支持的话语帮助 __________ 学生在考试前的焦虑。",
    answers: [
        { option: "A", answer: "ameliorate", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "dismiss", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "ignore", chinese_answer: "无视", chinese_romanization: "wúshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ameliorate' means to make something better or improve." +
        "<br><br>" +
        "(B) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
        "<br><br>" +
        "(C) 'dismiss' means to decide that something or someone is not important and not worth considering." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(A) '缓解' 意味着使某事变得更好或改进。" +
        "<br><br>" +
        "(B) '加剧' 意味着使问题、伤害或冒犯变得更严重或更严重。" +
        "<br><br>" +
        "(C) '忽视' 意味着决定某事或某人不重要且不值得考虑。" +
        "<br><br>" +
        "(D) '无视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
    question: "The whistleblower was __________ by the company’s executives, who saw him as a traitor.",
    chinese_question: "揭发者遭到了公司高管的 __________，他们把他视为叛徒。",
    answers: [
        { option: "A", answer: "commended", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
        { option: "B", answer: "reviled", chinese_answer: "痛骂", chinese_romanization: "tòng mà" },
        { option: "C", answer: "protected", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "D", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reviled' figuratively means to be harshly criticized or condemned." +
        "<br><br>" +
        "(A) ‘commended’ means to praise formally or officially." +
        "<br><br>" +
        "(C) ‘protected’ means to keep safe from harm or injury." +
        "<br><br>" +
        "(D) ‘rewarded’ means to give something to someone in recognition of their services, efforts, or achievements.",
    chinese_explanation: "(B) ‘痛骂’ 一词在比喻上意味着受到严厉的批评或谴责。" +
        "<br><br>" +
        "(A) ‘表扬’ 意味着正式或官方地称赞。" +
        "<br><br>" +
        "(C) ‘保护’ 意味着保护免受伤害。" +
        "<br><br>" +
        "(D) ‘奖励’ 意味着为了表彰某人的服务、努力或成就而给予某物。"
    },
    {
        id: 10,
        question: "She began to __________ the reasons why she believed the project would succeed.",
        chinese_question: "她开始 __________ 她认为项目会成功的原因。",
        answers: [
            { option: "A", answer: "enumerate", chinese_answer: "列举", chinese_romanization: "lièjǔ" },
            { option: "B", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enumerate' means to mention (a number of things) one by one." +
            "<br><br>" +
            "(B) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '列举' 意味着一一提到（若干事情）。" +
            "<br><br>" +
            "(B) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(C) '遮掩' 意味着使看不见；隐藏。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
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
