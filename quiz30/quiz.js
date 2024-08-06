// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The documentary's __________ portrayal of the refugees' hardships brought many viewers to tears.",
        chinese_question: "纪录片对难民困境的 __________ 描写使许多观众流下了眼泪。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "amusing", chinese_answer: "有趣的", chinese_romanization: "yǒuqù de" },
            { option: "C", answer: "poignant", chinese_answer: "令人心痛的", chinese_romanization: "lìng rén xīntòng de" },
            { option: "D", answer: "dull", chinese_answer: "枯燥的", chinese_romanization: "kūzào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'poignant' means evoking a keen sense of sadness or regret." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'amusing' means causing laughter and providing entertainment." +
            "<br><br>" +
            "(D) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(C) '令人心痛的' 意味着引起强烈的悲伤或遗憾感。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；漠不关心的。" +
            "<br><br>" +
            "(B) '有趣的' 意味着引起笑声和提供娱乐的。" +
            "<br><br>" +
            "(D) '枯燥的' 意味着缺乏兴趣或兴奋的。"
    },
    {
        id: 2,
        question: "Achieving world peace is the __________ goal of the organization, which strives for global harmony and cooperation.",
        chinese_question: "实现世界和平是该组织的 __________ 目标，该组织致力于全球和谐与合作。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "B", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "C", answer: "initial", chinese_answer: "最初的", chinese_romanization: "zuìchū de" },
            { option: "D", answer: "intermediate", chinese_answer: "中间的", chinese_romanization: "zhōngjiān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ultimate' means being or happening at the end of a process; final." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'initial' means existing or occurring at the beginning." +
            "<br><br>" +
            "(D) 'intermediate' means coming between two things in time, place, order, character, etc.",
        chinese_explanation: "(B) '最终的'一词意味着在一个过程结束时或发生的；最终的。" +
            "<br><br>" +
            "(A) '暂时的' 意味着只持续一段有限时间的；非永久的。" +
            "<br><br>" +
            "(C) '最初的' 意味着在开始时存在或发生的。" +
            "<br><br>" +
            "(D) '中间的' 意味着在时间、地点、顺序、性格等之间的两个事物之间的。"
    },
    {
        id: 3,
        question: "The team's __________ performance in the final match was disappointing, as they barely put up any fight against their opponents.",
        chinese_question: "球队在决赛中的 __________ 表现令人失望，他们几乎没有与对手抗争。",
        answers: [
            { option: "A", answer: "powerful", chinese_answer: "强有力的", chinese_romanization: "qiáng yǒulì de" },
            { option: "B", answer: "impressive", chinese_answer: "令人印象深刻的", chinese_romanization: "lìng rén yìnxiàng shēnkè de" },
            { option: "C", answer: "feeble", chinese_answer: "无力的", chinese_romanization: "wúlì de" },
            { option: "D", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feeble' means lacking strength of character or physical strength." +
            "<br><br>" +
            "(A) 'powerful' means having great power or strength." +
            "<br><br>" +
            "(B) 'impressive' means evoking admiration through size, quality, or skill." +
            "<br><br>" +
            "(D) 'strong' means having the power to move heavy weights or perform other physically demanding tasks.",
        chinese_explanation: "(C) '无力的' 意味着缺乏性格力量或体力。" +
            "<br><br>" +
            "(A) '强有力的' 意味着有巨大力量或力量的。" +
            "<br><br>" +
            "(B) '令人印象深刻的' 意味着通过尺寸、质量或技巧引起钦佩的。" +
            "<br><br>" +
            "(D) '强壮的' 意味着有力量移动重物或执行其他体力要求高的任务。"
    },
    {
        id: 4,
    question: "The __________ article provided an in-depth analysis of ancient Greek philosophy.",
    chinese_question: "这篇 __________ 的文章深入分析了古希腊哲学。",
    answers: [
        { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "B", answer: "scholarly", chinese_answer: "学术的", chinese_romanization: "xuéshù de" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "simplistic", chinese_answer: "简单化的", chinese_romanization: "jiǎndānhuà de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'scholarly' means involving or relating to serious academic study." +
        "<br><br>" +
        "(A) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are.",
    chinese_explanation: "(B) '学术的' 意味着涉及或与严肃的学术研究相关的。" +
        "<br><br>" +
        "(A) '表面的' 意味着存在或发生在表面上的。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '简单化的' 意味着将复杂的问题和问题视为比实际简单得多的。"
    },
    {
        id: 5,
    question: "The __________ scientist was invited to speak at the international conference due to her significant contributions to the field.",
    chinese_question: "由于她对该领域的重大贡献，这位 __________ 的科学家被邀请在国际会议上发言。",
    answers: [
        { option: "A", answer: "unknown", chinese_answer: "不知名的", chinese_romanization: "bù zhīmíng de" },
        { option: "B", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" },
        { option: "C", answer: "prominent", chinese_answer: "杰出的", chinese_romanization: "jiéchū de" },
        { option: "D", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'prominent' means important; famous." +
        "<br><br>" +
        "(A) 'unknown' means not known or familiar." +
        "<br><br>" +
        "(B) 'obscure' means not discovered or known about; uncertain." +
        "<br><br>" +
        "(D) 'hidden' means kept out of sight; concealed.",
    chinese_explanation: "(C) '杰出的' 意味着重要的；著名的。" +
        "<br><br>" +
        "(A) '不知名的' 意味着不为人知或不熟悉的。" +
        "<br><br>" +
        "(B) '默默无闻的' 意味着没有被发现或不知道的；不确定的。" +
        "<br><br>" +
        "(D) '隐藏的' 意味着隐蔽的；隐瞒的。"
    },
    {
        id: 6,
    question: "The politician is __________ for his corrupt practices, and many people distrust him.",
    chinese_question: "这位政客因其腐败行为而 __________，许多人不信任他。",
    answers: [
        { option: "A", answer: "unknown", chinese_answer: "不知名的", chinese_romanization: "bù zhīmíng de" },
        { option: "B", answer: "notorious", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíng zhāozhù de" },
        { option: "C", answer: "reputable", chinese_answer: "享有盛誉的", chinese_romanization: "xiǎngyǒu shèngyù de" },
        { option: "D", answer: "admired", chinese_answer: "受人钦佩的", chinese_romanization: "shòu rén qīnpèi de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'notorious' means famous or well-known, typically for some bad quality or deed." +
        "<br><br>" +
        "(A) 'unknown' means not known or familiar." +
        "<br><br>" +
        "(C) 'reputable' means having a good reputation." +
        "<br><br>" +
        "(D) 'admired' means regarded with respect or warm approval.",
    chinese_explanation: "(B) '臭名昭著的' 意味着以某种坏品质或行为闻名。" +
        "<br><br>" +
        "(A) '不知名的' 意味着不知道或不熟悉的。" +
        "<br><br>" +
        "(C) '享有盛誉的' 意味着有好名声的。" +
        "<br><br>" +
        "(D) '受人钦佩的' 意味着受到尊重或热烈赞同的。"
    },
    {
        id: 7,
        question: "Achieving financial independence is her __________ dream, one she has been working towards for years.",
        chinese_question: "实现财务独立是她的 __________ 梦想，这是她多年来一直在努力追求的目标。",
        answers: [
            { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "C", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "D", answer: "momentary", chinese_answer: "瞬间的", chinese_romanization: "shùnjiān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ultimate' means being or happening at the end of a process; final." +
            "<br><br>" +
            "(A) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'momentary' means lasting for a very short time; brief.",
        chinese_explanation: "(B) '最终的' 意味着发生在过程结束时的；最终的。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短的。" +
            "<br><br>" +
            "(C) '临时的' 意味着仅持续有限的时间；不是永久的。" +
            "<br><br>" +
            "(D) '瞬间的' 意味着持续时间非常短的；短暂的。"
    },
    {
        id: 8,
    question: "The __________ trends in fashion mean that what is popular today may be out of style tomorrow.",
    chinese_question: "时尚中 __________ 的趋势意味着今天流行的东西明天可能会过时。",
    answers: [
        { option: "A", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
        { option: "B", answer: "constant", chinese_answer: "持续的", chinese_romanization: "chíxù de" },
        { option: "C", answer: "fickle", chinese_answer: "变化无常的", chinese_romanization: "biànhuà wúcháng de" },
        { option: "D", answer: "unwavering", chinese_answer: "坚定不移的", chinese_romanization: "jiāndìng bù yí de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
        "<br><br>" +
        "(A) 'enduring' means lasting over a period of time; durable." +
        "<br><br>" +
        "(B) 'constant' means occurring continuously over a period of time." +
        "<br><br>" +
        "(D) 'unwavering' means steady or resolute; not wavering.",
    chinese_explanation: "(C) '变化无常的' 意味着经常变化，尤其是指忠诚或感情的变化。" +
        "<br><br>" +
        "(A) '持久的' 意味着持续一段时间的；耐久的。" +
        "<br><br>" +
        "(B) '持续的' 意味着在一段时间内连续发生的。" +
        "<br><br>" +
        "(D) '坚定不移的' 意味着稳定或坚定的；不动摇的。"
    },
    {
        id: 9,
        question: "Her __________ taste in music, favoring obscure and experimental genres, intrigued her friends.",
        chinese_question: "她对音乐的 __________ 品味，偏爱冷门和实验性风格，让她的朋友们感到好奇。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "B", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "C", answer: "peculiar", chinese_answer: "奇特的", chinese_romanization: "qítè de" },
            { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'peculiar' means strange or odd; unusual." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
        chinese_explanation: "(C) '奇特的' 意味着奇怪的或古怪的；不寻常的。" +
            "<br><br>" +
            "(A) '传统的' 意味着基于或符合普遍做法或信念的。" +
            "<br><br>" +
            "(B) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(D) '典型的' 意味着具有某种类型的人的或事物的独特品质的。"
    },
    {
        id: 10,
    question: "For __________ results, it is important to follow the instructions precisely so that the final outcome meets the highest standards of quality.",
    chinese_question: "为了达到 __________ 的结果，准确遵循指示是很重要的，这样最终结果才能符合最高的质量标准。",
    answers: [
        { option: "A", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
        { option: "B", answer: "average", chinese_answer: "一般的", chinese_romanization: "yībān de" },
        { option: "C", answer: "optimal", chinese_answer: "最佳的", chinese_romanization: "zuì jiā de" },
        { option: "D", answer: "inferior", chinese_answer: "劣质的", chinese_romanization: "lièzhì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'optimal' means best or most favorable; optimum." +
        "<br><br>" +
        "(A) 'mediocre' means of only moderate quality; not very good." +
        "<br><br>" +
        "(B) 'average' means constituting the result obtained by adding together several quantities and then dividing this total by the number of quantities." +
        "<br><br>" +
        "(D) 'inferior' means lower in rank, status, or quality.",
    chinese_explanation: "(C) '最佳的' 意味着最好的或最有利的；最优的。" +
        "<br><br>" +
        "(A) '平庸的' 意味着质量一般；不太好的。" +
        "<br><br>" +
        "(B) '一般的' 意味着通过将几种数量相加然后将此总数除以数量的总数来构成的结果。" +
        "<br><br>" +
        "(D) '劣质的' 意味着等级、地位或质量较低的。"
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
