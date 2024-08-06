// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She managed to __________ the rumours about her with clear and convincing evidence.",
        chinese_question: "她设法用清楚且令人信服的证据 __________ 关于她的谣言。",
        answers: [
            { option: "A", answer: "spread", chinese_answer: "散布", chinese_romanization: "sànbù" },
            { option: "B", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "C", answer: "confirm", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'refute' means to prove a statement or theory to be wrong or false." +
            "<br><br>" +
            "(A) 'spread' means to extend over a large or increasing area." +
            "<br><br>" +
            "(C) 'confirm' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case." +
            "<br><br>" +
            "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '反驳'一词意味着证明一个陈述或理论是错误的或虚假的。" +
            "<br><br>" +
            "(A) '散布' 意味着扩大或增加面积。" +
            "<br><br>" +
            "(C) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 2,
    question: "He tried to __________ his guilt by donating money to charity.",
    chinese_question: "他试图通过捐款给慈善机构来 __________ 他的内疚。",
    answers: [
        { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "heighten", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "D", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(B) 'heighten' means to make or become more intense." +
        "<br><br>" +
        "(C) 'conceal' means to keep something secret." +
        "<br><br>" +
        "(D) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
        "<br><br>" +
        "(B) '加剧' 意味着使某事变得更强烈。" +
        "<br><br>" +
        "(C) '隐藏' 意味着保密某事。" +
        "<br><br>" +
        "(D) '忽略' 意味着未能适当照顾。"
    },
    {
        id: 3,
    question: "Vaccinations can __________ the spread of infectious diseases.",
    chinese_question: "疫苗可以 __________ 传染病的传播。",
    answers: [
        { option: "A", answer: "cause", chinese_answer: "导致", chinese_romanization: "dǎozhì" },
        { option: "B", answer: "spread", chinese_answer: "传播", chinese_romanization: "chuánbò" },
        { option: "C", answer: "prevent", chinese_answer: "防止", chinese_romanization: "fángzhǐ" },
        { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prevent' means to stop something from happening or arising." +
        "<br><br>" +
        "(A) 'cause' means to make something happen, especially something bad." +
        "<br><br>" +
        "(B) 'spread' means to open out something so as to extend its surface area, width, or length." +
        "<br><br>" +
        "(D) 'worsen' means to make or become worse.",
    chinese_explanation: "(C) '防止' 意味着阻止某事发生或出现。" +
        "<br><br>" +
        "(A) '导致' 意味着使某事发生，特别是指不好的事情。" +
        "<br><br>" +
        "(B) '传播' 意味着展开某物以扩大其表面积、宽度或长度。" +
        "<br><br>" +
        "(D) '恶化' 意味着使某事变得更糟或变得更糟。"
    },
    {
        id: 4,
    question: "The scientist used three different data points to __________ the exact location of the earthquake's epicenter.",
    chinese_question: "科学家使用三个不同的数据点来 __________ 地震震中的确切位置。",
    answers: [
        { option: "A", answer: "triangulate", chinese_answer: "三角定位", chinese_romanization: "sānjiǎo dìngwèi" },
        { option: "B", answer: "estimate", chinese_answer: "估计", chinese_romanization: "gūjì" },
        { option: "C", answer: "ignore", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "miscalculate", chinese_answer: "误算", chinese_romanization: "wùsuàn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'triangulate' means to determine a location by using the positions of three known points." +
        "<br><br>" +
        "(B) 'estimate' means to roughly calculate or judge the value, number, quantity, or extent of something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'miscalculate' means to calculate or judge incorrectly.",
    chinese_explanation: "(A) '三角定位' 意味着使用三个已知点的位置来确定一个位置。" +
        "<br><br>" +
        "(B) '估计' 意味着粗略计算或判断某物的价值、数量、数量或程度。" +
        "<br><br>" +
        "(C) '忽略' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '误算' 意味着计算或判断错误。"
    },
    {
        id: 5,
        question: "He would often __________ himself with his teachers by always being the first to volunteer in class.",
        chinese_question: "他经常通过在课堂上总是第一个自愿参加来 __________ 自己与老师的关系。",
        answers: [
                { option: "A", answer: "isolate", chinese_answer: "孤立", chinese_romanization: "gūlì" },
                { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
                { option: "C", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" },
                { option: "D", answer: "confront", chinese_answer: "面对", chinese_romanization: "miànduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ingratiate' used figuratively means to gain favor or approval by deliberate efforts." +
                "<br><br>" +
                "(A) 'isolate' means to cause a person or place to be or remain alone or apart from others." +
                "<br><br>" +
                "(C) 'insult' means to speak to or treat with disrespect or scornful abuse." +
                "<br><br>" +
                "(D) 'confront' means to face up to and deal with a problem or difficult situation.",
        chinese_explanation: "(B) '讨好' 在比喻意义上指通过刻意的努力获得某人的喜欢或认可。" +
                "<br><br>" +
                "(A) '孤立' 意味着使一个人或地方处于或保持独自或与他人隔离。" +
                "<br><br>" +
                "(C) '侮辱' 意味着以不尊重或轻蔑的方式说话或对待。" +
                "<br><br>" +
                "(D) '面对' 意味着面对并处理问题或困难情况。"
    },
    {
        id: 6,
        question: "The coach tried to __________ the team's doubts before the big match by encouraging them and highlighting their strengths.",
        chinese_question: "教练在大赛前通过鼓励他们和强调他们的优势来 __________ 队员们的疑虑。",
        answers: [
            { option: "A", answer: "procrastinate", chinese_answer: "拖延", chinese_romanization: "tuōyán" },
            { option: "B", answer: "exaggerate", chinese_answer: "夸大", chinese_romanization: "kuādà" },
            { option: "C", answer: "fabricate", chinese_answer: "编造", chinese_romanization: "biānzào" },
            { option: "D", answer: "dispel", chinese_answer: "消除", chinese_romanization: "xiāochú" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'dispel' means to make (a doubt, feeling, or belief) disappear." +
            "<br><br>" +
            "(A) 'procrastinate' means to delay or postpone action; put off doing something." +
            "<br><br>" +
            "(B) 'exaggerate' means to represent (something) as being larger, better, or worse than it really is." +
            "<br><br>" +
            "(C) 'fabricate' means to invent or concoct (something), typically with deceitful intent.",
        chinese_explanation: "(D) '消除' 意味着使（疑虑、感觉或信念）消失。" +
            "<br><br>" +
            "(A) '拖延' 意味着延迟或推迟行动；推迟做某事。" +
            "<br><br>" +
            "(B) '夸大' 意味着将（某事物）描述得比实际上更大、更好或更糟。" +
            "<br><br>" +
            "(C) '编造' 意味着发明或捏造（某物），通常带有欺骗意图。"
    },
    {
        id: 7,
        question: "The checklist was created to __________ all the tasks that needed to be completed before the event.",
        chinese_question: "创建了清单来 __________ 活动前需要完成的所有任务。",
        answers: [
            { option: "A", answer: "enumerate", chinese_answer: "列举", chinese_romanization: "lièjǔ" },
            { option: "B", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enumerate' means to mention (a number of things) one by one." +
            "<br><br>" +
            "(B) 'hide' means to keep something secret or hidden." +
            "<br><br>" +
            "(C) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'disregard' means to ignore or pay no attention to.",
        chinese_explanation: "(A) '列举' 意味着一一提到（若干事情）。" +
            "<br><br>" +
            "(B) '隐藏' 意味着将某事保密或隐藏。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事物更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '忽视' 意味着忽视或不注意。"
    },
    {
        id: 8,
        question: "The project will __________ a significant amount of time and resources to complete.",
        chinese_question: "该项目将 __________ 大量的时间和资源来完成。",
        answers: [
            { option: "A", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "entail", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "exclude", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'entail' means to involve something as a necessary or inevitable part or consequence." +
            "<br><br>" +
            "(A) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'exclude' means to deny someone access to or bar someone from a place, group, or privilege.",
        chinese_explanation: "(B) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '排除' 意味着拒绝某人进入某个地方、群体或特权。"
    },
    {
        id: 9,
        question: "She likes to __________ her stories to make them more interesting and engaging.",
        chinese_question: "她喜欢 __________ 她的故事，使它们更有趣和吸引人。",
        answers: [
            { option: "A", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "B", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "C", answer: "embellish", chinese_answer: "美化", chinese_romanization: "měihuà" },
            { option: "D", answer: "downplay", chinese_answer: "淡化", chinese_romanization: "dànhuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'embellish' means to make a story more interesting by adding extra details that are often untrue." +
            "<br><br>" +
            "(A) 'diminish' means to make or become less." +
            "<br><br>" +
            "(B) 'simplify' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'downplay' means to make something appear less important than it really is.",
        chinese_explanation: "(C) '美化'一词意味着通过添加通常不真实的额外细节使故事更有趣。" +
            "<br><br>" +
            "(A) '减少' 意味着使变少或变小。" +
            "<br><br>" +
            "(B) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '淡化' 意味着使某事显得不那么重要。"
    },
    {
        id: 10,
        question: "The sudden rain __________ everyone to take shelter under the nearest roof.",
        chinese_question: "突如其来的雨 __________ 所有人躲到最近的屋檐下避雨。",
        answers: [
            { option: "A", answer: "prompted", chinese_answer: "促使", chinese_romanization: "cùshǐ" },
            { option: "B", answer: "delayed", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "C", answer: "confused", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "suppressed", chinese_answer: "抑制", chinese_romanization: "yìzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'prompted' means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(B) 'delayed' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(C) 'confused' means to make someone unable to think clearly." +
            "<br><br>" +
            "(D) 'suppressed' means to forcibly put an end to.",
        chinese_explanation: "(A) '促使' 意味着导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(B) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '抑制' 意味着强行终止。"
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
