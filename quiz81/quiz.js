// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "To __________ the traditions of our ancestors, we celebrate the festival every year.",
    chinese_question: "为了 __________ 我们祖先的传统，我们每年庆祝这个节日。",
    answers: [
        { option: "A", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" },
        { option: "B", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "C", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'respect' means to admire someone or something deeply, as a result of their abilities, qualities, or achievements." +
        "<br><br>" +
        "(A) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(C) 'forget' means to fail to remember." +
        "<br><br>" +
        "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
    chinese_explanation: "(B) '尊重' 意味着因某人的能力、品质或成就而深深钦佩他们。" +
        "<br><br>" +
        "(A) '无视' 意味着不注意；忽视。" +
        "<br><br>" +
        "(C) '忘记' 意味着未能记住。" +
        "<br><br>" +
        "(D) '拒绝' 意味着因不合格、不接受或有缺陷而不予理会。"
    },
    {
        id: 2,
        question: "Her words of wisdom were __________ in his heart, guiding him through difficult times.",
        chinese_question: "她的智慧之言 __________ 在他的心中，指引他度过困难时期。",
        answers: [
                { option: "A", answer: "inscribed", chinese_answer: "铭刻", chinese_romanization: "míngkè" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "erased", chinese_answer: "擦除", chinese_romanization: "cāchú" },
                { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inscribed' means to mark or engrave deeply, used figuratively here to mean words deeply embedded in someone's heart." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'erased' means to remove all traces of something." +
                "<br><br>" +
                "(D) 'supported' means to give assistance to.",
        chinese_explanation: "(A) '铭刻' 意味着深深刻在某物上，这里是比喻用法，表示智慧之言深深嵌入某人的心中。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '擦除' 意味着去除所有痕迹。" +
                "<br><br>" +
                "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 3,
        question: "Despite having a lot of work to do, she decided to __________ at the beach.",
        chinese_question: "尽管有很多工作要做，她还是决定在海滩上 __________ 。",
        answers: [
                { option: "A", answer: "gallivant", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" },
                { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "work", chinese_answer: "工作", chinese_romanization: "gōngzuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gallivant' means to go around from one place to another in the pursuit of pleasure or entertainment, used figuratively here." +
                "<br><br>" +
                "(B) 'focus' means to concentrate attention or effort." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'work' means to be engaged in physical or mental activity in order to achieve a purpose or result.",
        chinese_explanation: "(A) '闲逛' 意味着为了追求娱乐或享受而到处闲逛，这里是比喻用法。" +
                "<br><br>" +
                "(B) '专注' 意味着集中注意力或努力。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '工作' 意味着从事体力或脑力活动以达到目的或结果。"
    },
    {
        id: 4,
        question: "The coach would often __________ the players to give their best effort during practice.",
        chinese_question: "教练经常 __________ 球员在训练中尽最大努力。",
        answers: [
                { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "B", answer: "discourage", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
                { option: "C", answer: "exhort", chinese_answer: "力劝", chinese_romanization: "lìquàn" },
                { option: "D", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exhort' means to strongly encourage or urge someone to do something." +
                "<br><br>" +
                "(A) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(B) 'discourage' means to cause someone to lose confidence or enthusiasm." +
                "<br><br>" +
                "(D) 'criticize' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(C) '力劝' 意味着强烈鼓励或敦促某人做某事。" +
                "<br><br>" +
                "(A) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(B) '阻止' 意味着使某人失去信心或热情。" +
                "<br><br>" +
                "(D) '批评' 意味着以不赞成的方式指出某人或某物的错误。"
    },
    {
        id: 5,
        question: "The teacher's voice was __________ with disappointment when she addressed the student's behavior.",
        chinese_question: "当老师谈到学生的行为时，她的声音充满了 __________ 。",
        answers: [
                { option: "A", answer: "inflected", chinese_answer: "变化", chinese_romanization: "biànhuà" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inflected' means to change the pitch or tone of the voice." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'supported' means to give assistance to." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '变化' 意味着改变声音的音高或音调。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '支持' 意味着给予帮助。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 6,
        question: "The government decided to __________ the task force after it achieved its objectives.",
        chinese_question: "政府决定在工作组达成目标后 __________ 它。",
        answers: [
                { option: "A", answer: "disband", chinese_answer: "解散", chinese_romanization: "jiěsàn" },
                { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "expand", chinese_answer: "扩展", chinese_romanization: "kuòzhǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disband' means to break up or cause to break up and stop functioning." +
                "<br><br>" +
                "(B) 'support' means to bear all or part of the weight of something; to hold up." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'expand' means to become or make larger or more extensive.",
        chinese_explanation: "(A) '解散' 意味着分开或导致分开并停止运作。" +
                "<br><br>" +
                "(B) '支持' 意味着承担某物的全部或部分重量；支撑。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '扩展' 意味着变大或使更广泛。"
    },
    {
        id: 7,
        question: "The editor __________ the journalist for the numerous errors in the article, insisting on better accuracy.",
        chinese_question: "编辑因为文章中的众多错误 __________ 了记者，坚持要求更高的准确性。",
        answers: [
            { option: "A", answer: "congratulated", chinese_answer: "祝贺", chinese_romanization: "zhùhè" },
            { option: "B", answer: "upbraided", chinese_answer: "斥责", chinese_romanization: "chìzé" },
            { option: "C", answer: "rewarded", chinese_answer: "奖励", chinese_romanization: "jiǎnglì" },
            { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'upbraided' means to scold or criticize someone severely." +
            "<br><br>" +
            "(A) 'congratulated' means to give someone good wishes when something special or pleasant has happened to them." +
            "<br><br>" +
            "(C) 'rewarded' means to give something to someone in recognition of their services, efforts, or achievements." +
            "<br><br>" +
            "(D) 'ignored' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '斥责'一词意味着严厉地责骂或批评某人。" +
            "<br><br>" +
            "(A) '祝贺' 意味着在某件特殊或愉快的事情发生时向某人表示良好的祝愿。" +
            "<br><br>" +
            "(C) '奖励' 意味着为了表彰某人的服务、努力或成就而给予某物。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 8,
    question: "The company's strict policy prohibits employees from __________ with clients outside of work hours.",
    chinese_question: "公司的严格政策禁止员工在工作时间之外与客户 __________ 。",
    answers: [
        { option: "A", answer: "fraternizing", chinese_answer: "交往", chinese_romanization: "jiāowǎng" },
        { option: "B", answer: "confronting", chinese_answer: "面对", chinese_romanization: "miànduì" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "alienating", chinese_answer: "疏远", chinese_romanization: "shūyuǎn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fraternizing' means to associate or form a friendship with someone, especially when one is not supposed to." +
        "<br><br>" +
        "(B) 'confronting' means to face up to and deal with a problem or difficult situation." +
        "<br><br>" +
        "(C) 'ignoring' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'alienating' means to cause someone to feel isolated or estranged.",
    chinese_explanation: "(A) '交往' 意味着与某人交往或形成友谊，尤其是在不应该这样做的时候。" +
        "<br><br>" +
        "(B) '面对' 意味着面对并处理一个问题或困难的情况。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '疏远' 意味着使某人感到孤立或疏远。"
    },
    {
        id: 9,
    question: "The protester began to __________ a sign, demanding justice.",
    chinese_question: "抗议者开始 __________ 标语，要求正义。",
    answers: [
        { option: "A", answer: "brandish", chinese_answer: "挥舞", chinese_romanization: "huīwǔ" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "D", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'brandish' means to wave or flourish something, especially a weapon, as a threat or in anger or excitement." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'conceal' means to keep something secret." +
        "<br><br>" +
        "(D) 'destroy' means to put an end to the existence of something.",
    chinese_explanation: "(A) '挥舞' 意味着挥动或展示某物，尤其是武器，作为威胁或出于愤怒或兴奋。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '隐藏' 意味着保密某事。" +
        "<br><br>" +
        "(D) '破坏' 意味着结束某物的存在。"
    },
    {
        id: 10,
    question: "He had to __________ all his patience to deal with the challenging situation.",
    chinese_question: "他必须 __________ 所有的耐心来处理这个挑战性的情况。",
    answers: [
        { option: "A", answer: "exhaust", chinese_answer: "耗尽", chinese_romanization: "hàojìn" },
        { option: "B", answer: "muster", chinese_answer: "聚集", chinese_romanization: "jùjí" },
        { option: "C", answer: "deplete", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "drain", chinese_answer: "排空", chinese_romanization: "páikōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'muster' means to gather or summon, especially patience or resources." +
        "<br><br>" +
        "(A) 'exhaust' means to tire out completely." +
        "<br><br>" +
        "(C) 'deplete' means to reduce in number or quantity." +
        "<br><br>" +
        "(D) 'drain' means to remove gradually.",
    chinese_explanation: "(B) '聚集' 意味着聚集或召集，特别是耐心或资源。" +
        "<br><br>" +
        "(A) '耗尽' 意味着完全疲惫。" +
        "<br><br>" +
        "(C) '减少' 意味着减少数量或数量。" +
        "<br><br>" +
        "(D) '排空' 意味着逐渐移除。"
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
