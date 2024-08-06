// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Without proper motivation, it's easy to __________ to old habits and routines.",
        chinese_question: "没有适当的动力，很容易 __________ 到旧习惯和常规。",
        answers: [
                { option: "A", answer: "adopt", chinese_answer: "采纳", chinese_romanization: "cǎinà" },
                { option: "B", answer: "default", chinese_answer: "默认", chinese_romanization: "mòrèn" },
                { option: "C", answer: "create", chinese_answer: "创造", chinese_romanization: "chuàngzào" },
                { option: "D", answer: "alter", chinese_answer: "改变", chinese_romanization: "gǎibiàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'default' used figuratively means to revert to a usual or expected pattern of behavior." +
                "<br><br>" +
                "(A) 'adopt' means to take up or start to use or follow." +
                "<br><br>" +
                "(C) 'create' means to bring something into existence." +
                "<br><br>" +
                "(D) 'alter' means to change or make different.",
        chinese_explanation: "(B) '默认' 在比喻意义上指恢复到通常或预期的行为模式。" +
                "<br><br>" +
                "(A) '采纳' 意味着开始使用或遵循。" +
                "<br><br>" +
                "(C) '创造' 意味着使某物产生。" +
                "<br><br>" +
                "(D) '改变' 意味着改变或使不同。"
    },
    {
        id: 2,
    question: "In his detailed report, the scientist had to __________ the previous research claims by presenting new experimental data and thorough analysis.",
    chinese_question: "在他的详细报告中，这位科学家不得不通过呈现新的实验数据和彻底分析来 __________ 先前的研究主张。",
    answers: [
        { option: "A", answer: "expatiate", chinese_answer: "详细叙述", chinese_romanization: "xiángxì xùshù" },
        { option: "B", answer: "obfuscate", chinese_answer: "使混淆", chinese_romanization: "shǐ hùnxiáo" },
        { option: "C", answer: "extrapolate", chinese_answer: "推断", chinese_romanization: "tuīduàn" },
        { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'refute' means to prove a statement or theory to be wrong or false." +
        "<br><br>" +
        "(A) 'expatiate' means to speak or write in detail about a particular topic." +
        "<br><br>" +
        "(B) 'obfuscate' means to render obscure, unclear, or unintelligible." +
        "<br><br>" +
        "(C) 'extrapolate' means to extend the application of a method or conclusion to an unknown situation by assuming that existing trends will continue.",
    chinese_explanation: "(D) '反驳' 意味着证明某个陈述或理论是错误的或虚假的。" +
        "<br><br>" +
        "(A) '详细叙述' 意味着详细讨论某个特定主题。" +
        "<br><br>" +
        "(B) '使混淆' 意味着使模糊、不清楚或难以理解。" +
        "<br><br>" +
        "(C) '推断' 意味着通过假设现有趋势将继续来扩展一种方法或结论的应用到未知情况。"
    },
    {
        id: 3,
        question: "The eerie silence in the abandoned house seemed to __________ danger.",
        chinese_question: "废弃房屋内的诡异寂静似乎 __________ 危险。",
        answers: [
                { option: "A", answer: "forebode", chinese_answer: "预示", chinese_romanization: "yùshì" },
                { option: "B", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'forebode' means to act as a warning or indication of a future event." +
                "<br><br>" +
                "(B) 'enjoy' means to take delight or pleasure in something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'calm' means to make someone peaceful and free from disturbance.",
        chinese_explanation: "(A) '预示' 意味着作为未来事件的警告或指示。" +
                "<br><br>" +
                "(B) '享受' 意味着对某事感到高兴或愉快。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '平静' 意味着使某人平静和远离干扰。"
    },
    {
        id: 4,
        question: "In an attempt to gain favor, the employee would __________ on the manager by constantly praising her decisions and bringing her small gifts.",
        chinese_question: "为了赢得好感，这名员工会通过不断赞美她的决定并送她小礼物来 __________ 经理。",
        answers: [
            { option: "A", answer: "prevaricate", chinese_answer: "支吾其词", chinese_romanization: "zhīwúqící" },
            { option: "B", answer: "prognosticate", chinese_answer: "预言", chinese_romanization: "yùyán" },
            { option: "C", answer: "perambulate", chinese_answer: "巡行", chinese_romanization: "xúnxíng" },
            { option: "D", answer: "fawn", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'fawn' means to flatter or praise excessively in order to gain favor." +
            "<br><br>" +
            "(A) 'prevaricate' means to speak or act in an evasive way." +
            "<br><br>" +
            "(B) 'prognosticate' means to foretell or predict an event in the future." +
            "<br><br>" +
            "(C) 'perambulate' means to walk or travel through or around a place for pleasure and in a leisurely way.",
        chinese_explanation: "(D) '讨好' 意味着为了赢得好感而过分奉承或赞美。" +
            "<br><br>" +
            "(A) '支吾其词' 意味着说话或行动含糊其辞。" +
            "<br><br>" +
            "(B) '预言' 意味着预言或预测未来的事件。" +
            "<br><br>" +
            "(C) '巡行' 意味着为了娱乐和悠闲地走过或游览一个地方。"
    },
    {
        id: 5,
    question: "Her tendency to micromanage every detail __________ the entire team.",
    chinese_question: "她对每个细节的微管理倾向让整个团队感到 __________。",
    answers: [
        { option: "A", answer: "relaxes", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "B", answer: "irks", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "supports", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "encourages", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'irks' used figuratively means to irritate or annoy." +
        "<br><br>" +
        "(A) 'relaxes' means to make someone or something less tense or anxious." +
        "<br><br>" +
        "(C) 'supports' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'encourages' means to give support, confidence, or hope to someone.",
    chinese_explanation: "(B) '激怒' 在比喻意义上指刺激或惹恼。" +
        "<br><br>" +
        "(A) '放松' 意味着使某人或某物减少紧张或焦虑。" +
        "<br><br>" +
        "(C) '支持' 意味着支撑某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 6,
        question: "When faced with unexpected opposition, the politician began to __________ in his responses.",
        chinese_question: "当面对意外的反对时，这位政治家的回答开始 __________ 。",
        answers: [
                { option: "A", answer: "flounder", chinese_answer: "慌乱", chinese_romanization: "huāngluàn" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
                { option: "D", answer: "assert", chinese_answer: "断言", chinese_romanization: "duànyán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flounder' means to struggle mentally; show or feel great confusion." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'clarify' means to make a statement or situation less confused and more comprehensible." +
                "<br><br>" +
                "(D) 'assert' means to state a fact or belief confidently and forcefully.",
        chinese_explanation: "(A) '慌乱' 意味着心理上挣扎；表现或感到极大的困惑。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '澄清' 意味着使陈述或情况不那么混乱和更易理解。" +
                "<br><br>" +
                "(D) '断言' 意味着自信且有力地陈述一个事实或信念。"
    },
    {
        id: 7,
        question: "He tends to __________ his brother's achievements, which often causes arguments.",
        chinese_question: "他往往 __________ 兄弟的成就，这常常引起争论。",
        answers: [
            { option: "A", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "appreciate", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
            { option: "C", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" },
            { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparage' means to regard or represent as being of little worth." +
            "<br><br>" +
            "(B) 'appreciate' means to recognize the full worth of." +
            "<br><br>" +
            "(C) 'consider' means to think carefully about (something), typically before making a decision." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '贬低' 意味着认为或表现出某事物没有价值。" +
            "<br><br>" +
            "(B) '欣赏' 意味着认出某物的全部价值。" +
            "<br><br>" +
            "(C) '考虑' 意味着在做决定前仔细思考（某事）。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。"
    },
    {
        id: 8,
    question: "The coach did not __________ his feedback, giving the team direct and honest assessments.",
    chinese_question: "教练没有 __________ 他的反馈，直接而诚实地对团队进行评估。",
    answers: [
        { option: "A", answer: "mince", chinese_answer: "婉转", chinese_romanization: "wǎnzhuǎn" },
        { option: "B", answer: "exaggerate", chinese_answer: "夸大", chinese_romanization: "kuādà" },
        { option: "C", answer: "belittle", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
        { option: "D", answer: "generalize", chinese_answer: "概括", chinese_romanization: "gàikuò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mince' figuratively means to speak indirectly or with hesitation." +
        "<br><br>" +
        "(B) 'exaggerate' means to represent as larger or more significant than is true." +
        "<br><br>" +
        "(C) 'belittle' means to make something seem less important." +
        "<br><br>" +
        "(D) 'generalize' means to make broad or non-specific.",
    chinese_explanation: "(A) '婉转' 一词在比喻上意味着间接或犹豫地说话。" +
        "<br><br>" +
        "(B) '夸大' 意味着表现得比实际更大或更重要。" +
        "<br><br>" +
        "(C) '贬低' 意味着使某事显得不那么重要。" +
        "<br><br>" +
        "(D) '概括' 意味着使之变得笼统或非具体。"
    },
    {
        id: 9,
        question: "The manager did not hesitate to __________ the employee for missing important deadlines.",
        chinese_question: "经理毫不犹豫地 __________ 那名错过重要截止日期的员工。",
        answers: [
            { option: "A", answer: "reward", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "chastise", chinese_answer: "责罚", chinese_romanization: "zéfá" },
            { option: "D", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'chastise' means to rebuke or reprimand severely." +
            "<br><br>" +
            "(A) 'reward' means to give something to someone in recognition of their service, effort, or achievement." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(D) 'commend' means to praise formally or officially.",
        chinese_explanation: "(C) '责罚' 意味着严厉地斥责或谴责。" +
            "<br><br>" +
            "(A) '奖励' 意味着因服务、努力或成就给予某人某物。" +
            "<br><br>" +
            "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(D) '表扬' 意味着正式或官方地赞美。"
    },
    {
        id: 10,
    question: "The young entrepreneur was __________ as a visionary leader by her peers.",
    chinese_question: "这位年轻的企业家被她的同龄人 __________ 为有远见的领导者。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "hailed", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "C", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
        { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hailed' means to acclaim enthusiastically." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(C) 'dismissed' means to order or allow someone to leave." +
        "<br><br>" +
        "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
    chinese_explanation: "(B) '欢呼' 意味着热情地欢呼。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(C) '解雇' 意味着命令或允许某人离开。" +
        "<br><br>" +
        "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
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
