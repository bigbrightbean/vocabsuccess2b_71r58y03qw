// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ presentation impressed the board members with its professionalism and clarity.",
        chinese_question: "这场__________的演讲以其专业性和清晰度给董事会成员留下了深刻印象。",
        answers: [
            { option: "A", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "amateurish", chinese_answer: "业余的", chinese_romanization: "yèyú de" },
            { option: "C", answer: "polished", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "D", answer: "unrefined", chinese_answer: "未提炼的", chinese_romanization: "wèi tíliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'polished' means accomplished and skillful." +
            "<br><br>" +
            "(A) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(B) 'amateurish' means unskillful or inept." +
            "<br><br>" +
            "(D) 'unrefined' means not elegant or cultured.",
        chinese_explanation: "(C) '完美的'一词意味着完成得很好和熟练的。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着表面不平或不规则的；不光滑或不平的。" +
            "<br><br>" +
            "(B) '业余的' 意味着不熟练或笨拙的。" +
            "<br><br>" +
            "(D) '未提炼的' 意味着不优雅或不文化的。"
    },
    {
        id: 2,
        question: "Despite her age, the grandmother was __________, dancing and laughing with the children at the family gathering.",
        chinese_question: "尽管年事已高，这位祖母依然 __________，在家庭聚会上与孩子们一起跳舞和欢笑。",
        answers: [
            { option: "A", answer: "sprightly", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "sluggish", chinese_answer: "行动缓慢的", chinese_romanization: "xíngdòng huǎnmàn de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yùshuì de" },
            { option: "D", answer: "tired", chinese_answer: "疲倦的", chinese_romanization: "píjuàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sprightly' means lively; full of energy." +
            "<br><br>" +
            "(B) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(D) 'tired' means in need of sleep or rest; weary.",
        chinese_explanation: "(A) '精力充沛的' 意味着充满活力的。" +
            "<br><br>" +
            "(B) '行动缓慢的' 意味着行动缓慢或不活跃的。" +
            "<br><br>" +
            "(C) '昏昏欲睡的' 意味着受嗜睡影响的；迟缓和冷漠的。" +
            "<br><br>" +
            "(D) '疲倦的' 意味着需要睡眠或休息的；疲惫的。"
    },
    {
        id: 3,
        question: "The driver's __________ behaviour on the highway put everyone at risk.",
        chinese_question: "司机在高速公路上的 __________ 行为使所有人都处于危险之中。",
        answers: [
            { option: "A", answer: "careful", chinese_answer: "小心的", chinese_romanization: "xiǎoxīn de" },
            { option: "B", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "D", answer: "prudent", chinese_answer: "慎重的", chinese_romanization: "shènzhòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(A) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(B) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(C) '鲁莽的' 意味着不考虑或不在乎行为的后果。" +
            "<br><br>" +
            "(A) '小心的' 意味着确保避免潜在的危险、意外或伤害；谨慎的。" +
            "<br><br>" +
            "(B) '谨慎的' 意味着小心避免潜在的问题或危险的。" +
            "<br><br>" +
            "(D) '慎重的' 意味着行动时表现出关心和考虑未来的。"
    },
    {
        id: 4,
        question: "Dealing with such a __________ politician requires caution, as his promises are often unreliable.",
        chinese_question: "与这样一个 __________ 的政客打交道需要谨慎，因为他的承诺往往不可靠。",
        answers: [
            { option: "A", answer: "trustworthy", chinese_answer: "可信赖的", chinese_romanization: "kě xìnlài de" },
            { option: "B", answer: "dependable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "slippery", chinese_answer: "狡猾的", chinese_romanization: "jiǎohuá de" },
            { option: "D", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slippery' means evasive or difficult to pin down; not trustworthy." +
            "<br><br>" +
            "(A) 'trustworthy' means able to be relied on as honest or truthful." +
            "<br><br>" +
            "(B) 'dependable' means trustworthy and reliable." +
            "<br><br>" +
            "(D) 'honest' means free of deceit; truthful and sincere.",
        chinese_explanation: "(C) '狡猾的' 意味着逃避的或难以捉摸的；不可信赖的。" +
            "<br><br>" +
            "(A) '可信赖的' 意味着可以依赖为诚实或真实的。" +
            "<br><br>" +
            "(B) '可靠的' 意味着值得信赖和可靠的。" +
            "<br><br>" +
            "(D) '诚实的' 意味着没有欺骗的；真实和真诚的。"
    },
    {
        id: 5,
        question: "The __________ array of choices at the buffet overwhelmed the diners.",
        chinese_question: "自助餐上 __________ 的选择让食客们感到不知所措。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限", chinese_romanization: "yǒuxiàn" },
            { option: "B", answer: "bewildering", chinese_answer: "令人困惑", chinese_romanization: "lìng rén kùnhuò" },
            { option: "C", answer: "predictable", chinese_answer: "可预测", chinese_romanization: "kě yùcè" },
            { option: "D", answer: "monotonous", chinese_answer: "单调", chinese_romanization: "dāndiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'bewildering' means extremely confusing." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(C) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'monotonous' means dull, tedious, and repetitious.",
        chinese_explanation: "(B) “令人困惑” 意味着极其令人困惑。" +
            "<br><br>" +
            "(A) '有限' 意味着在大小、数量或范围上有限。" +
            "<br><br>" +
            "(C) '可预测' 意味着能够预测的。" +
            "<br><br>" +
            "(D) '单调' 意味着乏味、冗长和重复。"
    },
    {
        id: 6,
    question: "The teacher's __________ tests were known to challenge even the brightest students, pushing them to their limits.",
    chinese_question: "老师的 __________ 测试以挑战即使是最聪明的学生而闻名，将他们推到极限。",
    answers: [
        { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "B", answer: "fiendish", chinese_answer: "棘手的", chinese_romanization: "jíshǒu de" },
        { option: "C", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
        { option: "D", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjié liǎodāng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fiendish' means extremely difficult or complex." +
        "<br><br>" +
        "(A) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(C) 'easy' means achieved without great effort; presenting few difficulties." +
        "<br><br>" +
        "(D) 'straightforward' means uncomplicated and easy to do or understand.",
    chinese_explanation: "(B) '棘手的' 意味着极其困难或复杂的。" +
        "<br><br>" +
        "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(C) '容易的' 意味着不需要很大的努力就能实现；呈现出很少的困难。" +
        "<br><br>" +
        "(D) '直截了当的' 意味着不复杂且容易做或理解的。"
    },
    {
        id: 7,
    question: "The __________ tone of her voice conveyed the deep sorrow she felt.",
    chinese_question: "她的声音带有__________的语气，传达了她内心的深切悲痛。",
    answers: [
        { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
        { option: "B", answer: "celebratory", chinese_answer: "庆祝的", chinese_romanization: "qìngzhù de" },
        { option: "C", answer: "mournful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
        { option: "D", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'mournful' means feeling, expressing, or inducing sadness, regret, or grief. Figuratively, it can mean conveying deep sadness or sorrow." +
        "<br><br>" +
        "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
        "<br><br>" +
        "(B) 'celebratory' means used or intended to publicly acknowledge a significant or happy event." +
        "<br><br>" +
        "(D) 'cheerful' means noticeably happy and optimistic.",
    chinese_explanation: "(C) '悲伤的'一词意味着感到、表达或引起悲伤、遗憾或悲痛的。比喻地，它可以表示传达深切的悲伤或痛苦。" +
        "<br><br>" +
        "(A) '快乐的' 意味着感到、表达或引起极大的愉快和幸福的。" +
        "<br><br>" +
        "(B) '庆祝的' 意味着用来或意图公开承认重要或愉快事件的。" +
        "<br><br>" +
        "(D) '愉快的' 意味着明显快乐和乐观的。"
    },
    {
        id: 8,
    question: "The __________ protesters clashed with the police, demanding immediate action on climate change with an aggressive stance.",
    chinese_question: "__________ 的抗议者与警方发生冲突，以激进的态度要求立即采取气候变化行动。",
    answers: [
        { option: "A", answer: "militant", chinese_answer: "激进的", chinese_romanization: "jījìn de" },
        { option: "B", answer: "peaceful", chinese_answer: "和平的", chinese_romanization: "hépíng de" },
        { option: "C", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" },
        { option: "D", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'militant' means combative and aggressive in support of a political or social cause." +
        "<br><br>" +
        "(B) 'peaceful' means free from disturbance; tranquil." +
        "<br><br>" +
        "(C) 'passive' means accepting or allowing what happens or what others do, without active response or resistance." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(A) '激进的' 意味着以战斗性和攻击性的态度支持政治或社会事业。" +
        "<br><br>" +
        "(B) '和平的' 意味着没有干扰的；宁静的。" +
        "<br><br>" +
        "(C) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。" +
        "<br><br>" +
        "(D) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。"
    },
    {
        id: 9,
        question: "The unexpected cancellation of the highly anticipated event left him __________, unable to process the sudden change, because he had been looking forward to it for months.",
        chinese_question: "备受期待的活动意外取消让他 __________，无法接受这突然的变化，因为他已经期待了几个月。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāo cǎiliè de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěnmò de" },
            { option: "C", answer: "angry", chinese_answer: "愤怒的", chinese_romanization: "fènnù de" },
            { option: "D", answer: "nonplussed", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'nonplussed' means surprised and confused so much that one is unsure how to react." +
            "<br><br>" +
            "(A) 'elated' means very happy and excited." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(C) 'angry' means feeling or showing strong annoyance, displeasure, or hostility.",
        chinese_explanation: "(D) '困惑的' 意味着如此惊讶和困惑以至于不知道如何反应。" +
            "<br><br>" +
            "(A) '兴高采烈的' 意味着非常高兴和兴奋。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(C) '愤怒的' 意味着感到或表现出强烈的恼怒、不满或敌意。"
    },
    {
        id: 10,
    question: "Her handshake was weak and __________, giving an impression of a lack of confidence.",
    chinese_question: "她的握手无力且 __________，给人一种缺乏自信的印象。",
    answers: [
        { option: "A", answer: "firm", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
        { option: "B", answer: "limp", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
        { option: "C", answer: "energetic", chinese_answer: "充满活力的", chinese_romanization: "chōngmǎn huólì de" },
        { option: "D", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'limp' means lacking strength or energy; weak." +
        "<br><br>" +
        "(A) 'firm' means having a solid, almost unyielding surface or structure." +
        "<br><br>" +
        "(C) 'energetic' means showing or involving great activity or vitality." +
        "<br><br>" +
        "(D) 'strong' means having the power to move heavy weights or perform other physically demanding tasks.",
    chinese_explanation: "(B) “无力的” 意味着缺乏力量或能量；虚弱的。" +
        "<br><br>" +
        "(A) '坚定的' 意味着具有坚固、几乎不屈服的表面或结构。" +
        "<br><br>" +
        "(C) '充满活力的' 意味着显示或涉及很大的活动或活力。" +
        "<br><br>" +
        "(D) '强壮的' 意味着有能力移动重物或执行其他体力要求高的任务。"
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
