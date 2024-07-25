// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The rise in fuel prices __________ many people to consider using public transportation.",
        chinese_question: "燃油价格的上涨 __________ 许多人考虑使用公共交通工具。",
        answers: [
            { option: "A", answer: "prompted", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "B", answer: "deterred", chinese_answer: "威慑", chinese_romanization: "wēishè" },
            { option: "C", answer: "confused", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "suppressed", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prompted' figuratively means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(B) 'deterred' means to discourage someone from doing something by instilling doubt or fear of the consequences." +
            "<br><br>" +
            "(C) 'confused' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'suppressed' means to forcibly put an end to.",
        chinese_explanation: "(A) '促使' 在此语境下比喻导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(B) '威慑' 意味着通过灌输怀疑或对后果的恐惧来阻止某人做某事。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '抑制' 意味着强行终止。"
    },
    {
        id: 2,
    question: "In his memoir, he promised to __________ the truth about the controversial events of his career.",
    chinese_question: "在他的回忆录中，他承诺要 __________ 关于他职业生涯中有争议事件的真相。",
    answers: [
        { option: "A", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" },
        { option: "B", answer: "divulge", chinese_answer: "揭露", chinese_romanization: "jiēlù" },
        { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "distort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'divulge' figuratively means to make known (private or sensitive information)." +
        "<br><br>" +
        "(A) 'obscure' means to make unclear." +
        "<br><br>" +
        "(C) 'simplify' means to make less complex." +
        "<br><br>" +
        "(D) 'distort' means to twist out of shape or misrepresent.",
    chinese_explanation: "(B) '揭露' 一词在比喻上意味着使（私人或敏感信息）变得公开。" +
        "<br><br>" +
        "(A) '模糊' 意味着使不清楚。" +
        "<br><br>" +
        "(C) '简化' 意味着使变得不复杂。" +
        "<br><br>" +
        "(D) '扭曲' 意味着扭曲或歪曲。"
    },
    {
        id: 3,
    question: "When she couldn't find her keys, she began to __________ her entire apartment in frustration.",
    chinese_question: "找不到钥匙时，她沮丧地开始 __________ 整个公寓。",
    answers: [
        { option: "A", answer: "organize", chinese_answer: "组织", chinese_romanization: "zǔzhī" },
        { option: "B", answer: "ransack", chinese_answer: "翻箱倒柜", chinese_romanization: "fān xiāng dǎo guì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "appreciate", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ransack' means to search through a place and cause damage or disorder, often out of frustration or urgency." +
        "<br><br>" +
        "(A) 'organize' means to arrange in a structured order." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'appreciate' means to recognize the full worth of something.",
    chinese_explanation: "(B) '翻箱倒柜' 意味着翻箱倒柜并造成损害或混乱，通常是由于沮丧或紧急。" +
        "<br><br>" +
        "(A) '组织' 意味着按结构顺序安排。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '欣赏' 意味着认识到某物的全部价值。"
    },
    {
        id: 4,
        question: "The scenic beauty of the place __________ every visitor who set foot there.",
        chinese_question: "这个地方的美景 __________ 了每一个到访者。",
        answers: [
                { option: "A", answer: "enthralled", chinese_answer: "迷住了", chinese_romanization: "mízhùle" },
                { option: "B", answer: "repelled", chinese_answer: "排斥", chinese_romanization: "páichì" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "disappointed", chinese_answer: "使失望", chinese_romanization: "shǐ shīwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthralled' means to capture the fascinated attention of someone." +
                "<br><br>" +
                "(B) 'repelled' means to drive or force back or away." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'disappointed' means to fail to fulfill someone's hopes or expectations.",
        chinese_explanation: "(A) '迷住了' 意味着吸引某人的注意力。" +
                "<br><br>" +
                "(B) '排斥' 意味着驱逐或逼退。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '使失望' 意味着未能实现某人的期望。"
    },
    {
        id: 5,
    question: "He likes to __________ the importance of punctuality in every meeting.",
    chinese_question: "他喜欢在每次会议上 __________ 守时的重要性。",
    answers: [
        { option: "A", answer: "belabor", chinese_answer: "反复强调", chinese_romanization: "fǎnfù qiángdiào" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'belabour' means to argue or elaborate on a subject excessively." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'simplify' means to make something simpler or easier to do or understand." +
        "<br><br>" +
        "(D) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(A) '反复强调' 意味着过度地争论或阐述某个主题。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '简化' 意味着使某事更简单或更容易做或理解。" +
        "<br><br>" +
        "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 6,
        question: "To focus better on his studies, he chose to __________ social media for a month.",
        chinese_question: "为了更好地专注于学习，他选择一个月 __________ 社交媒体。",
        answers: [
                { option: "A", answer: "eschew", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "B", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "promote", chinese_answer: "推广", chinese_romanization: "tuīguǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eschew' means to deliberately avoid or abstain from." +
                "<br><br>" +
                "(B) 'indulge' means to allow oneself to enjoy the pleasure of." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'promote' means to support or actively encourage.",
        chinese_explanation: "(A) '避免' 意味着故意避免或戒绝。" +
                "<br><br>" +
                "(B) '放纵' 意味着允许自己享受。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '推广' 意味着支持或积极鼓励。"
    },
    {
        id: 7,
    question: "In an attempt to __________ the upset customer, the manager offered a full refund and a discount on future purchases.",
    chinese_question: "为了 __________ 不满的顾客，经理提供了全额退款和未来购物的折扣。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "placate", chinese_answer: "安抚", chinese_romanization: "ānfǔ" },
        { option: "C", answer: "provoke", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "D", answer: "agitate", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'placate' means to make someone less angry or hostile." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(C) 'provoke' means to stimulate or give rise to a reaction or emotion." +
        "<br><br>" +
        "(D) 'agitate' means to make someone troubled or nervous.",
    chinese_explanation: "(B) '安抚' 意味着使某人不再生气或敌对。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(C) '激怒' 意味着引起反应或情绪。" +
        "<br><br>" +
        "(D) '使不安' 意味着使某人感到烦恼或紧张。"
    },
    {
        id: 8,
        question: "The judge __________ the lawyer for their unprofessional behavior in court, emphasizing the need for proper conduct.",
        chinese_question: "法官因为律师在法庭上的不专业行为 __________ 他，强调了正确行为的必要性。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "upbraided", chinese_answer: "斥责", chinese_romanization: "chìzé" },
            { option: "C", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "D", answer: "congratulated", chinese_answer: "祝贺", chinese_romanization: "zhùhè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'upbraided' means to scold or criticize someone severely." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(C) 'rewarded' means to give something to someone in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(D) 'congratulated' means to give someone good wishes when something special or pleasant has happened to them.",
        chinese_explanation: "(B) '斥责'一词意味着严厉地责骂或批评某人。" +
            "<br><br>" +
            "(A) '赞美' 意味着表示热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。" +
            "<br><br>" +
            "(D) '祝贺' 意味着在某件特殊或愉快的事情发生时向某人表示良好的祝愿。"
    },
    {
        id: 9,
    question: "She skillfully __________ the difficult questions during the interview.",
    chinese_question: "在面试中，她巧妙地__________了那些棘手的问题。",
    answers: [
        { option: "A", answer: "dodged", chinese_answer: "闪避", chinese_romanization: "shǎnbì" },
        { option: "B", answer: "faced", chinese_answer: "面对", chinese_romanization: "miànduì" },
        { option: "C", answer: "confronted", chinese_answer: "对抗", chinese_romanization: "duìkàng" },
        { option: "D", answer: "tackled", chinese_answer: "处理", chinese_romanization: "chǔlǐ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'dodged' means to move quickly to avoid someone or something. Figuratively, it can mean avoiding a difficult issue or question." +
        "<br><br>" +
        "(B) 'faced' means to confront and deal with or accept." +
        "<br><br>" +
        "(C) 'confronted' means to face up to and deal with (a problem or difficult situation)." +
        "<br><br>" +
        "(D) 'tackled' means to make determined efforts to deal with (a problem or difficult task).",
    chinese_explanation: "(A) '闪避'一词意味着迅速移动以避开某人或某物。比喻地，它可以表示回避困难的问题或话题。" +
        "<br><br>" +
        "(B) '面对' 意味着面对和处理或接受。" +
        "<br><br>" +
        "(C) '对抗' 意味着面对和处理（问题或困难情况）。" +
        "<br><br>" +
        "(D) '处理' 意味着努力应对（问题或困难任务）。"
    },
    {
        id: 10,
    question: "He took steps to __________ any further mistakes in the project.",
    chinese_question: "他采取了措施以 __________ 项目中进一步的错误。",
    answers: [
        { option: "A", answer: "invite", chinese_answer: "邀请", chinese_romanization: "yāoqǐng" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
        { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prevent' means to stop something from happening or arising." +
        "<br><br>" +
        "(A) 'invite' means to make a polite, formal, or friendly request to someone to go somewhere or to do something." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" +
        "(D) 'encourage' means to give support, confidence, or hope to someone.",
    chinese_explanation: "(C) '防止' 意味着阻止某事发生或出现。" +
        "<br><br>" +
        "(A) '邀请' 意味着礼貌、正式或友好地邀请某人去某个地方或做某事。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" +
        "(D) '鼓励' 意味着给予某人支持、信心或希望。"
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
