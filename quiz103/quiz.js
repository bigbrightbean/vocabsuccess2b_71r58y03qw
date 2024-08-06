// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The blood began to __________ around the wound, helping to stop the bleeding.",
    chinese_question: "血液开始在伤口周围 __________，帮助止血。",
    answers: [
        { option: "A", answer: "flow", chinese_answer: "流动", chinese_romanization: "liúdòng" },
        { option: "B", answer: "coagulate", chinese_answer: "凝结", chinese_romanization: "níngjié" },
        { option: "C", answer: "evaporate", chinese_answer: "蒸发", chinese_romanization: "zhēngfā" },
        { option: "D", answer: "dilute", chinese_answer: "稀释", chinese_romanization: "xīshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'coagulate' means to change to a solid or semi-solid state." +
        "<br><br>" +
        "(A) 'flow' means to move along in a steady, continuous stream." +
        "<br><br>" +
        "(C) 'evaporate' means to turn from liquid into vapor." +
        "<br><br>" +
        "(D) 'dilute' means to make a liquid thinner or weaker by adding water or another solvent to it.",
    chinese_explanation: "(B) '凝结' 意味着变成固态或半固态。" +
        "<br><br>" +
        "(A) '流动' 意味着沿着稳定、连续的流动。" +
        "<br><br>" +
        "(C) '蒸发' 意味着从液态变成气态。" +
        "<br><br>" +
        "(D) '稀释' 意味着通过加入水或其他溶剂使液体变薄或变弱。"
    },
    {
        id: 2,
        question: "In the debate, he skillfully __________ his opponent's arguments with well-researched evidence.",
        chinese_question: "在辩论中，他巧妙地用精心研究的证据 __________ 对手的论点。",
        answers: [
            { option: "A", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "confirmed", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "C", answer: "endorsed", chinese_answer: "认可", chinese_romanization: "rènkě" },
            { option: "D", answer: "refuted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'refuted' means to prove a statement or theory to be wrong or false." +
            "<br><br>" +
            "(A) 'supported' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(B) 'confirmed' means to establish the truth or correctness of something previously believed, suspected, or feared to be the case." +
            "<br><br>" +
            "(C) 'endorsed' means to declare one's public approval or support of.",
        chinese_explanation: "(D) '反驳'一词意味着证明一个陈述或理论是错误的或虚假的。" +
            "<br><br>" +
            "(A) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(B) '确认' 意味着确定之前被认为、怀疑或担心的事情的真实性或正确性。" +
            "<br><br>" +
            "(C) '认可' 意味着公开宣布某人对某事的支持。"
    },
    {
        id: 3,
    question: "The community __________ the passing of the old ways, longing for simpler times.",
    chinese_question: "社区 __________ 旧习惯的消逝，渴望回到简单的时代。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "bemoaned", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
        { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "welcomed", chinese_answer: "欢迎", chinese_romanization: "huānyíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'bemoaned' means to express sorrow or regret over something." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'welcomed' means to greet someone in a friendly and polite way.",
    chinese_explanation: "(B) '哀叹' 意味着对某事表示悲伤或遗憾。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '欢迎' 意味着以友好和礼貌的方式迎接某人。"
    },
    {
        id: 4,
        question: "The hikers needed to __________ a narrow path along the cliff to reach their destination.",
        chinese_question: "徒步旅行者需要 __________ 沿悬崖的小径才能到达目的地。",
        answers: [
            { option: "A", answer: "traverse", chinese_answer: "穿越", chinese_romanization: "chuānyuè" },
            { option: "B", answer: "avoid", chinese_answer: "避开", chinese_romanization: "bìkāi" },
            { option: "C", answer: "ascend", chinese_answer: "攀登", chinese_romanization: "pāndēng" },
            { option: "D", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'traverse' means to travel across or through." +
            "<br><br>" +
            "(B) 'avoid' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'ascend' means to go up or climb." +
            "<br><br>" +
            "(D) 'descend' means to move or fall downward.",
        chinese_explanation: "(A) '穿越' 意味着穿过或通过。" +
            "<br><br>" +
            "(B) '避开' 意味着远离某事或阻止自己做某事。" +
            "<br><br>" +
            "(C) '攀登' 意味着上升或爬升。" +
            "<br><br>" +
            "(D) '下降' 意味着向下移动或下降。"
    },
    {
        id: 5,
        question: "The conference dates __________ with my vacation, so I won't be able to attend.",
        chinese_question: "会议日期与我的假期 __________，所以我无法参加。",
        answers: [
            { option: "A", answer: "diverge", chinese_answer: "分叉", chinese_romanization: "fēnchà" },
            { option: "B", answer: "coincide", chinese_answer: "同时发生", chinese_romanization: "tóngshí fāshēng" },
            { option: "C", answer: "disrupt", chinese_answer: "打乱", chinese_romanization: "dǎluàn" },
            { option: "D", answer: "contrast", chinese_answer: "对比", chinese_romanization: "duìbǐ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coincide' means to occur at the same time." +
            "<br><br>" +
            "(A) 'diverge' means to go in different directions." +
            "<br><br>" +
            "(C) 'disrupt' means to interrupt an event, activity, or process by causing a disturbance or problem." +
            "<br><br>" +
            "(D) 'contrast' means to differ strikingly.",
        chinese_explanation: "(B) '同时发生'一词意味着在同一时间发生。" +
            "<br><br>" +
            "(A) '分叉' 意味着走向不同方向。" +
            "<br><br>" +
            "(C) '打乱' 意味着通过引起干扰或问题来中断事件、活动或过程。" +
            "<br><br>" +
            "(D) '对比' 意味着显著不同。"
    },
    {
        id: 6,
        question: "The young athlete __________ the gold medal, dreaming of the day he could win it.",
        chinese_question: "这位年轻运动员 __________ 金牌，梦想着有一天他能赢得它。",
        answers: [
            { option: "A", answer: "forgot", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "B", answer: "dismissed", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "coveted", chinese_answer: "垂涎", chinese_romanization: "chuíxián" },
            { option: "D", answer: "abandoned", chinese_answer: "放弃", chinese_romanization: "fàngqì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'coveted' means to yearn to possess or have (something)." +
            "<br><br>" +
            "(A) 'forgot' means to fail to remember." +
            "<br><br>" +
            "(B) 'dismissed' means to order or allow to leave; send away." +
            "<br><br>" +
            "(D) 'abandoned' means to give up completely (a course of action, a practice, or a way of thinking).",
        chinese_explanation: "(C) '垂涎' 意味着渴望拥有或占有（某物）。" +
            "<br><br>" +
            "(A) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(B) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(D) '放弃' 意味着完全放弃（某种行动、做法或思维方式）。"
    },
    {
        id: 7,
    question: "Her overprotective behavior might __________ her son, making him dependent and unprepared for the real world.",
    chinese_question: "她的过度保护行为可能会 __________ 她的儿子，让他依赖且无法应对现实世界。",
    answers: [
        { option: "A", answer: "strengthen", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
        { option: "B", answer: "spoil", chinese_answer: "宠坏", chinese_romanization: "chǒnghuài" },
        { option: "C", answer: "prepare", chinese_answer: "准备", chinese_romanization: "zhǔnbèi" },
        { option: "D", answer: "educate", chinese_answer: "教育", chinese_romanization: "jiàoyù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'spoil' means to harm the character of a child by being too lenient or indulgent." +
        "<br><br>" +
        "(A) 'strengthen' means to make or become stronger." +
        "<br><br>" +
        "(C) 'prepare' means to make someone ready or able to do or deal with something." +
        "<br><br>" +
        "(D) 'educate' means to give intellectual, moral, and social instruction to someone.",
    chinese_explanation: "(B) '宠坏' 意味着通过过于宽容或纵容来损害孩子的性格。" +
        "<br><br>" +
        "(A) '加强' 意味着使或变得更强壮。" +
        "<br><br>" +
        "(C) '准备' 意味着使某人准备好或能够做某事或处理某事。" +
        "<br><br>" +
        "(D) '教育' 意味着给某人提供智力、道德和社会指导。"
    },
    {
        id: 8,
    question: "The tourists began to __________ in their native language, making it hard for others to understand what they were saying.",
    chinese_question: "游客们开始用他们的母语 __________，使得其他人很难理解他们在说什么。",
    answers: [
        { option: "A", answer: "jabber", chinese_answer: "喋喋不休", chinese_romanization: "diédiébùxiū" },
        { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
        { option: "C", answer: "reflect", chinese_answer: "反思", chinese_romanization: "fǎnsī" },
        { option: "D", answer: "consider", chinese_answer: "考虑", chinese_romanization: "kǎolǜ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'jabber' means to talk rapidly and excitedly but with little sense." +
        "<br><br>" +
        "(B) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(C) 'reflect' means to think deeply or carefully about." +
        "<br><br>" +
        "(D) 'consider' means to think carefully about something.",
    chinese_explanation: "(A) '喋喋不休' 意味着快速且兴奋地说话，但意义不大。" +
        "<br><br>" +
        "(B) '沉默' 意味着完全没有声音。" +
        "<br><br>" +
        "(C) '反思' 意味着深思或仔细思考。" +
        "<br><br>" +
        "(D) '考虑' 意味着仔细思考某事。"
    },
    {
        id: 9,
        question: "The shocking news __________ a wave of protests across the city.",
        chinese_question: "这条震惊的消息 __________ 全市掀起了抗议浪潮。",
        answers: [
            { option: "A", answer: "calmed", chinese_answer: "平息", chinese_romanization: "píngxí" },
            { option: "B", answer: "misled", chinese_answer: "误导", chinese_romanization: "wùdǎo" },
            { option: "C", answer: "prompted", chinese_answer: "引发", chinese_romanization: "yǐnfā" },
            { option: "D", answer: "discouraged", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prompted' figuratively means to cause or bring about (an action or feeling)." +
            "<br><br>" +
            "(A) 'calmed' means to make (someone) tranquil and quiet; soothe." +
            "<br><br>" +
            "(B) 'misled' means to cause someone to have a wrong idea or impression about someone or something." +
            "<br><br>" +
            "(D) 'discouraged' means to cause (someone) to lose confidence or enthusiasm.",
        chinese_explanation: "(C) '引发' 在此语境下比喻导致或引起（一个行动或感觉）。" +
            "<br><br>" +
            "(A) '平息' 意味着使（某人）平静和安静；安抚。" +
            "<br><br>" +
            "(B) '误导' 意味着使某人对某人或某事有错误的想法或印象。" +
            "<br><br>" +
            "(D) '劝阻' 意味着使（某人）失去信心或热情。"
    },
    {
        id: 10,
        question: "He felt __________ by the sarcastic remarks made about his project in front of the entire team, which made him feel deeply humiliated and undervalued.",
        chinese_question: "在整个团队面前关于他项目的讽刺评论让他感到被 __________ ，这让他感到深深的羞辱和被低估。",
        answers: [
            { option: "A", answer: "demeaned", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "uplifted", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "appreciated", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'demeaned' means to cause a severe loss in the dignity of and respect for (someone or something)." +
            "<br><br>" +
            "(B) 'uplifted' means to raise the level of; improve." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'appreciated' means to recognize the full worth of.",
        chinese_explanation: "(A) '贬低' 意味着导致（某人或某物）尊严和尊重的严重丧失。" +
            "<br><br>" +
            "(B) '提升' 意味着提高水平；改善。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '欣赏' 意味着认出某物的全部价值。"
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
