// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her __________ mind during the meeting led to several missed opportunities for input.",
    chinese_question: "她在会议上 __________ 的心态导致错过了几次发言的机会。",
    answers: [
        { option: "A", answer: "engaged", chinese_answer: "投入的", chinese_romanization: "tóurù de" },
        { option: "B", answer: "preoccupied", chinese_answer: "全神贯注的", chinese_romanization: "quánshén guànzhù de" },
        { option: "C", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
        { option: "D", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'preoccupied' means engrossed in thought; distracted." +
        "<br><br>" +
        "(A) 'engaged' means busy or occupied." +
        "<br><br>" +
        "(C) 'active' means engaging or ready to engage in physically energetic pursuits." +
        "<br><br>" +
        "(D) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances; vigilant.",
    chinese_explanation: "(B) '全神贯注的' 意味着沉浸在思绪中；分心的。" +
        "<br><br>" +
        "(A) '投入的' 意味着忙碌或占用的。" +
        "<br><br>" +
        "(C) '活跃的' 意味着从事或准备从事体力充沛的活动的。" +
        "<br><br>" +
        "(D) '警觉的' 意味着迅速注意到任何不寻常和可能危险或困难的情况的；警惕的。"
    },
    {
        id: 2,
    question: "Her __________ nature meant that she always found ways to enjoy life without spending a lot of money.",
    chinese_question: "她 __________ 的性格意味着她总能找到无需花费大量金钱就能享受生活的方法。",
    answers: [
        { option: "A", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
        { option: "B", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
        { option: "C", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
        { option: "D", answer: "prodigal", chinese_answer: "挥霍的", chinese_romanization: "huīhuò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'frugal' means sparing or economical with regard to money or food." +
        "<br><br>" +
        "(B) 'extravagant' means lacking restraint in spending money or using resources." +
        "<br><br>" +
        "(C) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
        "<br><br>" +
        "(D) 'prodigal' means spending money or resources freely and recklessly; wastefully extravagant.",
    chinese_explanation: "(A) '节俭的' 意味着对金钱或食物方面节约或经济的。" +
        "<br><br>" +
        "(B) '奢侈的' 意味着在花钱或使用资源方面缺乏约束的。" +
        "<br><br>" +
        "(C) '浪费的' 意味着对有价值的东西使用不慎、挥霍或毫无目的的。" +
        "<br><br>" +
        "(D) '挥霍的' 意味着自由和鲁莽地花钱或使用资源的；浪费的。"
    },
    {
        id: 3,
        question: "She was __________ to make a decision, unsure of which option would be the best choice.",
        chinese_question: "她 __________ 地做决定，不确定哪个选项是最好的选择。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "B", answer: "decisive", chinese_answer: "果断的", chinese_romanization: "guǒduàn de" },
            { option: "C", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" },
            { option: "D", answer: "certain", chinese_answer: "确定的", chinese_romanization: "quèdìng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(B) 'decisive' means settling an issue; producing a definite result." +
            "<br><br>" +
            "(C) 'confident' means feeling or showing certainty about something." +
            "<br><br>" +
            "(D) 'certain' means known for sure; established beyond doubt.",
        chinese_explanation: "(A) '犹豫的' 意味着试探性的、不确定的或行动或说话缓慢的。" +
            "<br><br>" +
            "(B) '果断的' 意味着解决问题；产生确定的结果。" +
            "<br><br>" +
            "(C) '自信的' 意味着对某事感到或表现出确定性的。" +
            "<br><br>" +
            "(D) '确定的' 意味着确定无疑的；已建立的超出怀疑。"
    },
    {
        id: 4,
    question: "The use of social media has seen an __________ increase, with millions of new users joining every day.",
    chinese_question: "社交媒体的使用量呈 __________ 增长，每天都有数百万新用户加入。",
    answers: [
        { option: "A", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
        { option: "B", answer: "moderate", chinese_answer: "适度的", chinese_romanization: "shìdù de" },
        { option: "C", answer: "exponential", chinese_answer: "指数的", chinese_romanization: "zhǐshù de" },
        { option: "D", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'exponential' means (of an increase) becoming more and more rapid." +
        "<br><br>" +
        "(A) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
        "<br><br>" +
        "(B) 'moderate' means average in amount, intensity, quality, or degree." +
        "<br><br>" +
        "(D) 'gradual' means taking place or progressing slowly or by degrees.",
    chinese_explanation: "(C) '指数的' 意味着（增长）变得越来越迅速的。" +
        "<br><br>" +
        "(A) '缓慢的' 意味着移动或操作，或设计成仅以低速进行的；不快的。" +
        "<br><br>" +
        "(B) '适度的' 意味着数量、强度、质量或程度上适中的。" +
        "<br><br>" +
        "(D) '逐渐的' 意味着缓慢或逐步发生或发展的。"
    },
    {
        id: 5,
        question: "Her __________ disposition always brought joy to those around her, making every day feel brighter.",
        chinese_question: "她 __________ 的性格总是给周围的人带来快乐，使每一天都感觉更明亮。",
        answers: [
            { option: "A", answer: "moody", chinese_answer: "喜怒无常的", chinese_romanization: "xǐnùwúcháng de" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "sunny", chinese_answer: "阳光的", chinese_romanization: "yángguāng de" },
            { option: "D", answer: "irritable", chinese_answer: "易怒的", chinese_romanization: "yìnù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sunny' means cheerful and happy." +
            "<br><br>" +
            "(A) 'moody' means given to unpredictable changes of mood." +
            "<br><br>" +
            "(B) 'gloomy' means feeling distressed or pessimistic." +
            "<br><br>" +
            "(D) 'irritable' means easily annoyed or angered.",
        chinese_explanation: "(C) '阳光的' 意味着愉快和幸福的。" +
            "<br><br>" +
            "(A) '喜怒无常的' 意味着情绪变化无常的。" +
            "<br><br>" +
            "(B) '忧郁的' 意味着感到痛苦或悲观的。" +
            "<br><br>" +
            "(D) '易怒的' 意味着容易生气或恼怒的。"
    },
    {
        id: 6,
    question: "Their approach to conflict resolution is __________, always ensuring that each party's concerns are addressed fairly.",
    chinese_question: "他们解决冲突的方法是 __________ 的，总是确保公平地解决每一方的关注。",
    answers: [
        { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
        { option: "B", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" },
        { option: "C", answer: "equitable", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
        { option: "D", answer: "unfair", chinese_answer: "不公平的", chinese_romanization: "bù gōngpíng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'equitable' means fair and impartial." +
        "<br><br>" +
        "(A) 'biased' means unfairly prejudiced for or against someone or something." +
        "<br><br>" +
        "(B) 'partial' means favoring one side in a dispute above the other; biased." +
        "<br><br>" +
        "(D) 'unfair' means not based on or behaving according to the principles of equality and justice.",
    chinese_explanation: "(C) '公平的' 意味着公正和不偏不倚的。" +
        "<br><br>" +
        "(A) '有偏见的' 意味着对某人或某事物不公平地有偏见的。" +
        "<br><br>" +
        "(B) '偏袒的' 意味着在争端中偏向一方的；有偏见的。" +
        "<br><br>" +
        "(D) '不公平的' 意味着不基于或不按平等和正义原则行事的。"
    },
    {
        id: 7,
        question: "The lawyer presented a __________ argument that persuaded the jury to consider a not-guilty verdict.",
        chinese_question: "律师提出了一个 __________ 的论点，说服了陪审团考虑无罪判决。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱的", chinese_romanization: "ruò de" },
            { option: "B", answer: "far-fetched", chinese_answer: "牵强的", chinese_romanization: "qiānqiǎng de" },
            { option: "C", answer: "plausible", chinese_answer: "可信的", chinese_romanization: "kěxìn de" },
            { option: "D", answer: "incoherent", chinese_answer: "不连贯的", chinese_romanization: "bù liánguàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'plausible' means seeming reasonable or probable." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'far-fetched' means unlikely and unconvincing; implausible." +
            "<br><br>" +
            "(D) 'incoherent' means expressed in an incomprehensible or confusing way; unclear.",
        chinese_explanation: "(C) '可信的' 意味着看起来合理或可能的。" +
            "<br><br>" +
            "(A) '弱的' 意味着缺乏执行体力任务的能力；缺乏体力和精力。" +
            "<br><br>" +
            "(B) '牵强的' 意味着不大可能和不令人信服的；不可信的。" +
            "<br><br>" +
            "(D) '不连贯的' 意味着以不可理解或混乱的方式表达的；不清楚的。"
    },
    {
        id: 8,
    question: "The __________ politician was able to sway public opinion with his eloquent and persuasive speeches.",
    chinese_question: "这位 __________ 的政治家能够通过他那雄辩且有说服力的演讲来影响公众舆论。",
    answers: [
        { option: "A", answer: "unknown", chinese_answer: "不知名", chinese_romanization: "bù zhīmíng" },
        { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "influential", chinese_answer: "有影响力", chinese_romanization: "yǒu yǐngxiǎng lì" },
        { option: "D", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'influential' means having the power to have an effect on people or events." +
        "<br><br>" +
        "(A) 'unknown' means not known or familiar." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy." +
        "<br><br>" +
        "(D) 'ordinary' means with no special or distinctive features.",
    chinese_explanation: "(C) “有影响力” 意味着有能力对人或事件产生影响。" +
        "<br><br>" +
        "(A) '不知名' 意味着不为人所知或不熟悉。" +
        "<br><br>" +
        "(B) '冷漠' 意味着没有特别的兴趣或同情。" +
        "<br><br>" +
        "(D) '普通' 意味着没有特别或独特的特征。"
    },
    {
        id: 9,
    question: "Her __________ intentions were evident in her efforts to help those in need without expecting anything in return.",
    chinese_question: "她的 __________ 意图在她不求回报地帮助那些有需要的人的努力中显而易见。",
    answers: [
        { option: "A", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
        { option: "B", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
        { option: "C", answer: "deceitful", chinese_answer: "欺骗的", chinese_romanization: "qīpiàn de" },
        { option: "D", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'noble' means having or showing fine personal qualities or high moral principles." +
        "<br><br>" +
        "(B) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
        "<br><br>" +
        "(C) 'deceitful' means guilty of or involving deceit; deceiving or misleading others." +
        "<br><br>" +
        "(D) 'cowardly' means lacking courage.",
    chinese_explanation: "(A) “高尚的” 意味着拥有或表现出优秀的个人品质或高尚的道德原则。" +
        "<br><br>" +
        "(B) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
        "<br><br>" +
        "(C) '欺骗的' 意味着欺骗或误导他人。" +
        "<br><br>" +
        "(D) '胆小的' 意味着缺乏勇气。"
    },
    {
        id: 10,
    question: "The chef's new dish was incredibly __________, with a perfect blend of herbs and spices that delighted everyone's taste buds.",
    chinese_question: "这位厨师的新菜非常 __________，完美地混合了草药和香料，让每个人的味蕾都感到愉悦。",
    answers: [
        { option: "A", answer: "bland", chinese_answer: "清淡的", chinese_romanization: "qīngdàn de" },
        { option: "B", answer: "savory", chinese_answer: "咸香的", chinese_romanization: "xiánxiāng de" },
        { option: "C", answer: "sweet", chinese_answer: "甜的", chinese_romanization: "tián de" },
        { option: "D", answer: "flavorless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'savory' means (of food) belonging to the category that is salty or spicy rather than sweet." +
        "<br><br>" +
        "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
        "<br><br>" +
        "(C) 'sweet' means having the pleasant taste characteristic of sugar or honey." +
        "<br><br>" +
        "(D) 'flavorless' means lacking flavor; tasteless.",
    chinese_explanation: "(B) '咸香的' 意味着（食物）属于咸味或辛辣而不是甜味的类别。" +
        "<br><br>" +
        "(A) '清淡的' 意味着缺乏强烈特征或特性，因此不有趣的。" +
        "<br><br>" +
        "(C) '甜的' 意味着具有糖或蜂蜜特有的令人愉快的味道。" +
        "<br><br>" +
        "(D) '无味的' 意味着缺乏味道的；无味的。"
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
