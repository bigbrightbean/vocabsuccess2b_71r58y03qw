// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Winning the Nobel Prize marked the __________ of her scientific endeavours, a testament to her lifelong dedication and hard work.",
    chinese_question: "获得诺贝尔奖标志着她科学努力的 __________，这是对她毕生奉献和辛勤工作的证明。",
    answers: [
        { option: "A", answer: "pinnacle", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
        { option: "B", answer: "start", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
        { option: "C", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
        { option: "D", answer: "effort", chinese_answer: "努力", chinese_romanization: "nǔlì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pinnacle' figuratively means the most successful point; the culmination." +
        "<br><br>" +
        "(B) 'start' means the beginning of something." +
        "<br><br>" +
        "(C) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
        "<br><br>" +
        "(D) 'effort' means a vigorous or determined attempt.",
    chinese_explanation: "(A) '顶峰' 在此语境下意指最成功的点；顶点。" +
        "<br><br>" +
        "(B) '开始' 意味着某事的开始。" +
        "<br><br>" +
        "(C) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
        "<br><br>" +
        "(D) '努力' 意味着一种积极或坚定的尝试。"
    },
    {
        id: 2,
    question: "The __________ shown by the community towards the environmental issues, as evidenced by the lack of participation in clean-up efforts and community meetings, was alarming.",
    chinese_question: "社区对环境问题表现出的__________令人担忧，这表现在缺乏参与清理工作和社区会议。",
    answers: [
        { option: "A", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" },
        { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "dedication", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" },
        { option: "D", answer: "concern", chinese_answer: "关心", chinese_romanization: "guānxīn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(A) 'interest' means the state of wanting to know or learn about something or someone." +
        "<br><br>" +
        "(C) 'dedication' means the quality of being dedicated or committed to a task or purpose." +
        "<br><br>" +
        "(D) 'concern' means a matter of interest or importance to someone.",
    chinese_explanation: "(B) '冷漠' 一词意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(A) '兴趣' 意味着想要了解某事或某人的状态。" +
        "<br><br>" +
        "(C) '奉献' 意味着致力于任务或目标的品质。" +
        "<br><br>" +
        "(D) '关心' 意味着某人感兴趣或重要的事情。"
    },
    {
        id: 3,
    question: "The __________ in the restaurant drew the attention of other diners, who watched as the manager tried to calm the situation.",
    chinese_question: "餐厅里的 __________ 引起了其他食客的注意，他们看着经理试图平息局势。",
    answers: [
        { option: "A", answer: "altercation", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" },
        { option: "B", answer: "performance", chinese_answer: "表演", chinese_romanization: "biǎoyǎn" },
        { option: "C", answer: "conversation", chinese_answer: "谈话", chinese_romanization: "tánhuà" },
        { option: "D", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'altercation' means a noisy argument or disagreement, especially in public." +
        "<br><br>" +
        "(B) 'performance' means an act of staging or presenting a play, concert, or other form of entertainment." +
        "<br><br>" +
        "(C) 'conversation' means a talk, especially an informal one, between two or more people, in which news and ideas are exchanged." +
        "<br><br>" +
        "(D) 'harmony' means the combination of simultaneously sounded musical notes to produce a pleasing effect.",
    chinese_explanation: "(A) '争吵' 意味着特别是在公共场合的喧闹争论或争执。" +
        "<br><br>" +
        "(B) '表演' 意味着上演或呈现戏剧、音乐会或其他形式的娱乐活动的行为。" +
        "<br><br>" +
        "(C) '谈话' 意味着两人或多人之间的谈话，特别是非正式的谈话，交换新闻和想法。" +
        "<br><br>" +
        "(D) '和谐' 意味着同时发出的乐音的结合，以产生悦耳的效果。"
    },
    {
        id: 4,
        question: "His __________ that education could change lives inspired him to volunteer as a tutor in his community.",
        chinese_question: "他坚定地相信教育可以改变生活，这激励他在社区里做志愿辅导工作。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conviction' means a firmly held belief or opinion." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'uncertainty' means the state of being unsure of something.",
        chinese_explanation: "(B) '信念' 一词意味着坚定的信仰或意见。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '不确定' 意味着对某事不确定的状态。"
    },
    {
        id: 5,
    question: "In the performance review, his genuine and open __________ about his mistakes and areas for improvement, such as missing deadlines and needing better time management, impressed his supervisor.",
    chinese_question: "在绩效评估中，他对自己的错误和需要改进的地方，如错过最后期限和需要更好的时间管理的真诚和公开的 __________ 给他的主管留下了深刻的印象。",
    answers: [
        { option: "A", answer: "deception", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "evasiveness", chinese_answer: "逃避", chinese_romanization: "táobì" },
        { option: "C", answer: "ambiguity", chinese_answer: "模棱两可", chinese_romanization: "móléngliǎngkě" },
        { option: "D", answer: "candor", chinese_answer: "坦率", chinese_romanization: "tǎnshuài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'candor' means being honest and straightforward." +
        "<br><br>" +
        "(A) 'deception' means the act of deceiving or tricking someone." +
        "<br><br>" +
        "(B) 'evasiveness' means the act of avoiding giving a clear or direct answer." +
        "<br><br>" +
        "(C) 'ambiguity' means being open to more than one interpretation; not having one obvious meaning.",
    chinese_explanation: "(D) '坦率' 意味着诚实和直率。" +
        "<br><br>" +
        "(A) '欺骗' 意味着欺骗或欺骗某人的行为。" +
        "<br><br>" +
        "(B) '逃避' 意味着避免给出明确或直接答案的行为。" +
        "<br><br>" +
        "(C) '模棱两可' 意味着可以有多种解释；没有一个明显的意思。"
    },
    {
        id: 6,
    question: "With the rapid advancements in technology and the introduction of new AI applications, the __________ of artificial intelligence in various industries is reshaping job markets and economies.",
    chinese_question: "随着科技的快速发展和新人工智能应用的引入，人工智能在各个行业的__________正在重塑就业市场和经济。",
    answers: [
        { option: "A", answer: "advent", chinese_answer: "到来", chinese_romanization: "dàolái" },
        { option: "B", answer: "disappearance", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
        { option: "C", answer: "departure", chinese_answer: "离开", chinese_romanization: "líkāi" },
        { option: "D", answer: "cessation", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'advent' figuratively means the arrival of a notable person, thing, or event." +
        "<br><br>" +
        "(B) 'disappearance' means the action or process of disappearing." +
        "<br><br>" +
        "(C) 'departure' means the action of leaving, especially to start a journey." +
        "<br><br>" +
        "(D) 'cessation' means the fact or process of ending or being brought to an end.",
    chinese_explanation: "(A) '到来' 在此语境下意指一个显著的人、事或事件的到来。" +
        "<br><br>" +
        "(B) '消失' 意味着消失的动作或过程。" +
        "<br><br>" +
        "(C) '离开' 意味着离开，尤其是开始旅程的行为。" +
        "<br><br>" +
        "(D) '停止' 意味着结束或被终止的事实或过程。"
    },
    {
        id: 7,
    question: "The doctor warned him about the potential __________ of side effects when starting the new medication.",
    chinese_question: "医生警告他在开始服用新药时可能会出现副作用的 __________。",
    answers: [
        { option: "A", answer: "onset", chinese_answer: "开始", chinese_romanization: "kāishǐ" },
        { option: "B", answer: "cessation", chinese_answer: "停止", chinese_romanization: "tíngzhǐ" },
        { option: "C", answer: "reduction", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "extension", chinese_answer: "延长", chinese_romanization: "yáncháng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'onset' means the beginning or start of something, especially something unpleasant." +
        "<br><br>" +
        "(B) 'cessation' means the fact or process of ending or being brought to an end." +
        "<br><br>" +
        "(C) 'reduction' means the action or fact of making something smaller or less in amount, degree, or size." +
        "<br><br>" +
        "(D) 'extension' means a part that is added to something to enlarge or prolong it.",
    chinese_explanation: "(A) '开始' 意味着某事的开始，尤其是某些不愉快的事情的开始。" +
        "<br><br>" +
        "(B) '停止' 意味着结束或被终止的事实或过程。" +
        "<br><br>" +
        "(C) '减少' 意味着使某物的数量、程度或大小变小的行为或事实。" +
        "<br><br>" +
        "(D) '延长' 意味着添加到某物上的部分，以扩大或延长它。"
    },
    {
        id: 8,
    question: "New regulations aim to limit the __________ of greenhouse gases by industrial facilities.",
    chinese_question: "新规定旨在限制工业设施的温室气体 __________。",
    answers: [
        { option: "A", answer: "prohibition", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
        { option: "B", answer: "emission", chinese_answer: "排放", chinese_romanization: "páifàng" },
        { option: "C", answer: "demolition", chinese_answer: "拆除", chinese_romanization: "chāichú" },
        { option: "D", answer: "intervention", chinese_answer: "干预", chinese_romanization: "gānyù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'emission' means the production and discharge of something, especially gas or radiation." +
        "<br><br>" +
        "(A) 'prohibition' means the action of forbidding something, especially by law." +
        "<br><br>" +
        "(C) 'demolition' means the action or process of demolishing or being demolished." +
        "<br><br>" +
        "(D) 'intervention' means the action or process of intervening.",
    chinese_explanation: "(B) '排放' 一词意味着生产和排放某物，尤其是气体或辐射。" +
        "<br><br>" +
        "(A) '禁止' 意味着禁止某事的行为，尤其是通过法律。" +
        "<br><br>" +
        "(C) '拆除' 意味着拆除或被拆除的行为或过程。" +
        "<br><br>" +
        "(D) '干预' 意味着干预的行为或过程。"
    },
    {
        id: 9,
    question: "Her __________ on improving her skills paid off when she won the competition.",
    chinese_question: "她对提高技能的 __________ 在她赢得比赛时得到了回报。",
    answers: [
        { option: "A", answer: "distraction", chinese_answer: "分心", chinese_romanization: "fēnxīn" },
        { option: "B", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
        { option: "C", answer: "neglect", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
        { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'focus' means to pay particular attention to something." +
        "<br><br>" +
        "(A) 'distraction' means a thing that prevents someone from giving full attention to something else." +
        "<br><br>" +
        "(C) 'neglect' means to fail to care for properly." +
        "<br><br>" +
        "(D) 'ignorance' means lack of knowledge or information.",
    chinese_explanation: "(B) '专注' 意味着特别注意某事。" +
        "<br><br>" +
        "(A) '分心' 意味着阻止某人全神贯注于某事。" +
        "<br><br>" +
        "(C) '忽略' 意味着未能适当照顾。" +
        "<br><br>" +
        "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 10,
        question: "The grand __________ was designed to serve as a museum, showcasing the city's rich cultural heritage.",
        chinese_question: "这座宏伟的 __________ 被设计为博物馆，展示城市丰富的文化遗产。",
        answers: [
                { option: "A", answer: "shed", chinese_answer: "棚子", chinese_romanization: "péngzi" },
                { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
                { option: "C", answer: "cabin", chinese_answer: "小屋", chinese_romanization: "xiǎowū" },
                { option: "D", answer: "tent", chinese_answer: "帐篷", chinese_romanization: "zhàngpéng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a large, imposing building." +
                "<br><br>" +
                "(A) 'shed' means a simple roofed structure, typically made of wood or metal, used as a storage space." +
                "<br><br>" +
                "(C) 'cabin' means a small wooden shelter or house in a wild or remote area." +
                "<br><br>" +
                "(D) 'tent' means a portable shelter made of cloth, supported by one or more poles and stretched tight by cords or loops attached to pegs driven into the ground.",
        chinese_explanation: "(B) '大厦'一词意味着一座大型、宏伟的建筑物。" +
                "<br><br>" +
                "(A) '棚子' 意味着一个简单的有屋顶的结构，通常由木材或金属制成，用作储藏空间。" +
                "<br><br>" +
                "(C) '小屋' 意味着一个小的木制庇护所或房子，通常位于野外或偏远地区。" +
                "<br><br>" +
                "(D) '帐篷' 意味着由布料制成的可移动的庇护所，由一个或多个杆子支撑，并通过固定在地上的绳索或环拉紧。"
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
