// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Realizing it was for the best, they chose to __________ to the new management's directives.",
    chinese_question: "意识到这是为了更好，他们选择 __________ 新管理层的指示。",
    answers: [
        { option: "A", answer: "dispute", chinese_answer: "争论", chinese_romanization: "zhēnglùn" },
        { option: "B", answer: "acquiesce", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
        { option: "C", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
        { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'acquiesce' means to accept something reluctantly but without protest." +
        "<br><br>" +
        "(A) 'dispute' means to argue about something." +
        "<br><br>" +
        "(C) 'challenge' means to dispute the truth or validity of." +
        "<br><br>" +
        "(D) 'refute' means to prove a statement or theory to be wrong or false.",
    chinese_explanation: "(B) '默许' 意味着不情愿地接受某事但不抗议。" +
        "<br><br>" +
        "(A) '争论' 意味着争论某事。" +
        "<br><br>" +
        "(C) '挑战' 意味着质疑某事的真实性或有效性。" +
        "<br><br>" +
        "(D) '反驳' 意味着证明某个陈述或理论是错误的或虚假的。"
    },
    {
        id: 2,
        question: "The constant tension and stress at work began to __________ his nerves.",
        chinese_question: "工作中的持续紧张和压力开始 __________ 他的神经。",
        answers: [
                { option: "A", answer: "fray", chinese_answer: "磨损", chinese_romanization: "mósǔn" },
                { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fray' means to cause someone to become strained or stressed." +
                "<br><br>" +
                "(B) 'calm' means to make someone peaceful and free from disturbance." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'strengthen' means to make or become stronger.",
        chinese_explanation: "(A) '磨损' 意味着使某人变得紧张或有压力。" +
                "<br><br>" +
                "(B) '平静' 意味着使某人平静和远离干扰。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '加强' 意味着使某物更强。"
    },
    {
        id: 3,
    question: "She __________ out a niche for herself in the competitive world of fashion design.",
    chinese_question: "她在竞争激烈的时装设计世界里 __________ 出了一片天地。",
    answers: [
        { option: "A", answer: "chiselled", chinese_answer: "开辟", chinese_romanization: "kāipì" },
        { option: "B", answer: "blurred", chinese_answer: "模糊", chinese_romanization: "móhu" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "complicated", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chiselled' means to shape or define something with effort, used figuratively here." +
        "<br><br>" +
        "(B) 'blurred' means to make or become unclear or less distinct." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'complicated' means to make something more difficult or confusing.",
    chinese_explanation: "(A) '开辟' 意味着用努力来塑造或定义某物，这里是比喻用法。" +
        "<br><br>" +
        "(B) '模糊' 意味着使变得不清楚或不那么明显。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '复杂化' 意味着使某事更困难或更混乱。"
    },
    {
        id: 4,
        question: "During negotiations, he would __________ surprise at their offers, though he had anticipated them all along.",
        chinese_question: "在谈判中，他会对他们的提议 __________ 感到惊讶，尽管他一直预料到这些提议。",
        answers: [
                { option: "A", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "B", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
                { option: "C", answer: "approve", chinese_answer: "批准", chinese_romanization: "pīzhǔn" },
                { option: "D", answer: "dismiss", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feign' used figuratively means to pretend to have a certain reaction or feeling." +
                "<br><br>" +
                "(A) 'reject' means to dismiss as inadequate, unacceptable, or faulty." +
                "<br><br>" +
                "(C) 'approve' means to agree to or accept as satisfactory." +
                "<br><br>" +
                "(D) 'dismiss' means to treat as unworthy of serious consideration.",
        chinese_explanation: "(B) '假装' 在比喻意义上指假装有某种反应或感觉。" +
                "<br><br>" +
                "(A) '拒绝' 意味着认为不合格、不接受或有缺陷。" +
                "<br><br>" +
                "(C) '批准' 意味着同意或接受某事物为令人满意的。" +
                "<br><br>" +
                "(D) '否定' 意味着认为不值得认真考虑。"
    },
    {
        id: 5,
    question: "She likes to __________ her plants, giving them just the right amount of water and sunlight every day.",
    chinese_question: "她喜欢 __________ 她的植物，每天给它们适量的水和阳光。",
    answers: [
        { option: "A", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "coddle", chinese_answer: "溺爱", chinese_romanization: "nì'ài" },
        { option: "C", answer: "ignore", chinese_answer: "不理", chinese_romanization: "bùlǐ" },
        { option: "D", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'coddle' means to treat with excessive indulgence and care." +
        "<br><br>" +
        "(A) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'abandon' means to give up completely.",
    chinese_explanation: "(B) '溺爱' 意味着过度宠爱和关怀。" +
        "<br><br>" +
        "(A) '忽视' 意味着未能适当照顾。" +
        "<br><br>" +
        "(C) '不理' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '放弃' 意味着完全放弃。"
    },
    {
        id: 6,
    question: "He tends to __________ whenever he doesn't get his way, making it hard for others to take him seriously.",
    chinese_question: "每当他不如意时，他总是 __________ ，让别人很难认真对待他。",
    answers: [
        { option: "A", answer: "rejoice", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "B", answer: "snivel", chinese_answer: "哭诉", chinese_romanization: "kūsù" },
        { option: "C", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "joke", chinese_answer: "开玩笑", chinese_romanization: "kāiwánxiào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'snivel' means to complain or whine tearfully." +
        "<br><br>" +
        "(A) 'rejoice' means to feel or show great joy." +
        "<br><br>" +
        "(C) 'celebrate' means to acknowledge a significant or happy event." +
        "<br><br>" +
        "(D) 'joke' means to say something amusing.",
    chinese_explanation: "(B) '哭诉' 意味着带着泪水抱怨或哀诉。" +
        "<br><br>" +
        "(A) '高兴' 意味着感到或表现出极大的喜悦。" +
        "<br><br>" +
        "(C) '庆祝' 意味着承认重要或愉快的事件。" +
        "<br><br>" +
        "(D) '开玩笑' 意味着说一些有趣的事情。"
    },
    {
        id: 7,
        question: "The wealthy philanthropist decided to __________ the hospital with funds to build a new wing.",
        chinese_question: "那位富有的慈善家决定为医院 __________ 资金以建造一个新楼。",
        answers: [
            { option: "A", answer: "endow", chinese_answer: "资助", chinese_romanization: "zīzhù" },
            { option: "B", answer: "drain", chinese_answer: "排空", chinese_romanization: "páikōng" },
            { option: "C", answer: "harm", chinese_answer: "伤害", chinese_romanization: "shānghài" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endow' means to give or bequeath an income or property to (a person or institution)." +
            "<br><br>" +
            "(B) 'drain' means to cause the liquid in something to run out, leaving it empty, dry, or drier." +
            "<br><br>" +
            "(C) 'harm' means to cause physical injury or damage to." +
            "<br><br>" +
            "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '资助' 意味着给与或捐赠收入或财产给（某人或机构）。" +
            "<br><br>" +
            "(B) '排空' 意味着使液体流出，使其空、干或更干。" +
            "<br><br>" +
            "(C) '伤害' 意味着造成身体伤害或损害。" +
            "<br><br>" +
            "(D) '阻碍' 意味着制造困难，导致延误或障碍。"
    },
    {
        id: 8,
        question: "The school board decided to __________ the curriculum to include more technology-based learning.",
        chinese_question: "校董事会决定 __________ 课程，增加更多的技术基础学习内容。",
        answers: [
            { option: "A", answer: "preserve", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "reform", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reform' means to make changes in something in order to improve it." +
            "<br><br>" +
            "(A) 'preserve' means to maintain something in its original or existing state." +
            "<br><br>" +
            "(C) 'abandon' means to give up completely." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '改革'一词意味着为了改善某事而进行变革。" +
            "<br><br>" +
            "(A) '保留' 意味着保持原有状态。" +
            "<br><br>" +
            "(C) '放弃' 意味着完全放弃。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 9,
        question: "The government agency decided to __________ the outdated regulations from the law books to simplify the legal code.",
        chinese_question: "政府机构决定从法律书籍中 __________ 过时的法规，以简化法律条文。",
        answers: [
            { option: "A", answer: "add", chinese_answer: "添加", chinese_romanization: "tiānjiā" },
            { option: "B", answer: "expunge", chinese_answer: "删除", chinese_romanization: "shānchú" },
            { option: "C", answer: "annotate", chinese_answer: "注释", chinese_romanization: "zhùshì" },
            { option: "D", answer: "compile", chinese_answer: "汇编", chinese_romanization: "huìbiān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'expunge' means to erase or remove completely." +
            "<br><br>" +
            "(A) 'add' means to include." +
            "<br><br>" +
            "(C) 'annotate' means to add notes or comments." +
            "<br><br>" +
            "(D) 'compile' means to collect or assemble.",
        chinese_explanation: "(B) '删除' 一词意味着完全抹去或移除。" +
            "<br><br>" +
            "(A) '添加' 意味着包括。" +
            "<br><br>" +
            "(C) '注释' 意味着添加注释或评论。" +
            "<br><br>" +
            "(D) '汇编' 意味着收集或组装。"
    },
    {
        id: 10,
    question: "She tried to __________ her fears before the big presentation.",
    chinese_question: "她试图在重要演讲前 __________ 她的恐惧。",
    answers: [
        { option: "A", answer: "banish", chinese_answer: "驱除", chinese_romanization: "qūchú" },
        { option: "B", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
        { option: "C", answer: "welcome", chinese_answer: "欢迎", chinese_romanization: "huānyíng" },
        { option: "D", answer: "heighten", chinese_answer: "加剧", chinese_romanization: "jiājù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'banish' means to get rid of something unwanted." +
        "<br><br>" +
        "(B) 'amplify' means to increase the volume or strength of something." +
        "<br><br>" +
        "(C) 'welcome' means to greet someone in a friendly way." +
        "<br><br>" +
        "(D) 'heighten' means to make or become more intense.",
    chinese_explanation: "(A) '驱除' 意味着摆脱不想要的东西。" +
        "<br><br>" +
        "(B) '放大' 意味着增加音量或强度。" +
        "<br><br>" +
        "(C) '欢迎' 意味着以友好的方式迎接某人。" +
        "<br><br>" +
        "(D) '加剧' 意味着使变得更强烈。"
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
