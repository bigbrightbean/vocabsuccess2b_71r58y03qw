// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The weather changed with __________ intensity, going from sunny to a violent storm in a matter of minutes.",
        chinese_question: "天气变化得非常 __________，从晴天到暴风雨仅在几分钟之内。",
        answers: [
            { option: "A", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "D", answer: "sudden", chinese_answer: "突然的", chinese_romanization: "tūrán de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sudden' means occurring or done quickly and unexpectedly or without warning." +
            "<br><br>" +
            "(A) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(C) 'gradual' means taking place or progressing slowly or by degrees.",
        chinese_explanation: "(D) '突然的' 意味着快速和出乎意料地或没有警告地发生或完成。" +
            "<br><br>" +
            "(A) '稳定的' 意味着牢固固定、支撑或平衡；不摇晃或移动的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着能够被预测的。" +
            "<br><br>" +
            "(C) '逐渐的' 意味着慢慢地或逐步发生的。"
    },
    {
        id: 2,
    question: "During the meeting, she raised several __________ questions that directly addressed the core issues of the project.",
    chinese_question: "在会议期间，她提出了几个 __________ 的问题，直接针对项目的核心问题。",
    answers: [
        { option: "A", answer: "pertinent", chinese_answer: "相关的", chinese_romanization: "xiāngguān de" },
        { option: "B", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "insignificant", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pertinent' means relevant or applicable to a particular matter; apposite." +
        "<br><br>" +
        "(B) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth consideration.",
    chinese_explanation: "(A) '相关的' 意味着与特定事物有关的；恰当的。" +
        "<br><br>" +
        "(B) '无关的' 意味着与某事物无关的。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 3,
            question: "The table was __________ in shape, making it ideal for accommodating large groups of people during meetings.",
            chinese_question: "这张桌子是 __________ 形的，非常适合在会议期间容纳大量人群。",
            answers: [
                { option: "A", answer: "oblong", chinese_answer: "长方形的", chinese_romanization: "chángfāngxíng de" },
                { option: "B", answer: "round", chinese_answer: "圆形的", chinese_romanization: "yuánxíng de" },
                { option: "C", answer: "square", chinese_answer: "正方形的", chinese_romanization: "zhèngfāngxíng de" },
                { option: "D", answer: "triangular", chinese_answer: "三角形的", chinese_romanization: "sānjiǎoxíng de" }
            ],
            correctAnswer: "A",
            explanation: "(A) 'oblong' means having an elongated shape, as a rectangle or oval." +
                "<br><br>" +
                "(B) 'round' means shaped like a circle or cylinder." +
                "<br><br>" +
                "(C) 'square' means having four equal sides and four right angles." +
                "<br><br>" +
                "(D) 'triangular' means shaped like a triangle.",
            chinese_explanation: "(A) '长方形的' 意味着具有拉长的形状，如长方形或椭圆形。" +
                "<br><br>" +
                "(B) '圆形的' 意味着形状像圆或圆柱。" +
                "<br><br>" +
                "(C) '正方形的' 意味着有四条相等的边和四个直角。" +
                "<br><br>" +
                "(D) '三角形的' 意味着形状像三角形。"
    },
    {
        id: 4,
    question: "He gave a __________ answer, lacking any detailed explanation or depth.",
    chinese_question: "他给了一个 __________ 的回答，缺乏任何详细的解释或深度。",
    answers: [
        { option: "A", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" },
        { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
        { option: "C", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
        { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'shallow' means not exhibiting, requiring, or capable of serious thought." +
        "<br><br>" +
        "(A) 'comprehensive' means complete; including all or nearly all elements or aspects." +
        "<br><br>" +
        "(B) 'detailed' means having many details or facts; showing attention to detail." +
        "<br><br>" +
        "(D) 'thorough' means complete with regard to every detail; not superficial or partial.",
    chinese_explanation: "(C) “浅薄的” 意味着没有表现出、要求或能够进行认真思考。" +
        "<br><br>" +
        "(A) '全面的' 意味着完整的；包括所有或几乎所有元素或方面。" +
        "<br><br>" +
        "(B) '详细的' 意味着有很多细节或事实；显示出对细节的关注。" +
        "<br><br>" +
        "(D) '彻底的' 意味着在每一个细节上都很完整；不是表面或部分的。"
    },
    {
        id: 5,
            question: "The trust between the two friends was __________ after the betrayal, making it impossible to restore their former relationship.",
            chinese_question: "背叛之后，这两个朋友之间的信任是 __________ 的，使得他们无法恢复以前的关系。",
            answers: [
                { option: "A", answer: "strengthened", chinese_answer: "增强的", chinese_romanization: "zēngqiáng de" },
                { option: "B", answer: "irreparable", chinese_answer: "无法修复的", chinese_romanization: "wúfǎ xiūfù de" },
                { option: "C", answer: "enhanced", chinese_answer: "提升的", chinese_romanization: "tíshēng de" },
                { option: "D", answer: "improved", chinese_answer: "改善的", chinese_romanization: "gǎishàn de" }
            ],
            correctAnswer: "B",
            explanation: "(B) 'irreparable' means (of an injury or loss) impossible to rectify or repair." +
                "<br><br>" +
                "(A) 'strengthened' means made stronger or more forceful." +
                "<br><br>" +
                "(C) 'enhanced' means intensified, increased, or further improved the quality, value, or extent of." +
                "<br><br>" +
                "(D) 'improved' means made or become better.",
            chinese_explanation: "(B) '无法修复的' 意味着（受伤或损失）无法修复或弥补的。" +
                "<br><br>" +
                "(A) '增强的' 意味着变得更强或更有力的。" +
                "<br><br>" +
                "(C) '提升的' 意味着加强、增加或进一步提高质量、价值或程度的。" +
                "<br><br>" +
                "(D) '改善的' 意味着变得更好的。"
    },
    {
        id: 6,
    question: "Despite their pleas, the landlord remained __________ in his decision to evict the tenants, citing multiple violations of the lease agreement.",
    chinese_question: "尽管他们恳求，房东仍然 __________ 地决定驱逐租户，理由是多次违反租赁协议。",
    answers: [
        { option: "A", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "B", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" },
        { option: "C", answer: "unrelenting", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
        { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unrelenting' means not yielding in strength, severity, or determination." +
        "<br><br>" +
        "(A) 'lenient' means more merciful or tolerant than expected." +
        "<br><br>" +
        "(B) 'forgiving' means ready and willing to forgive." +
        "<br><br>" +
        "(D) 'flexible' means capable of bending easily without breaking; willing to change or compromise.",
    chinese_explanation: "(C) '无情的' 意味着在强度、严重性或决心上不屈服的。" +
        "<br><br>" +
        "(A) '宽容的' 意味着比预期更仁慈或宽容。" +
        "<br><br>" +
        "(B) '宽恕的' 意味着准备和愿意原谅。" +
        "<br><br>" +
        "(D) '灵活的' 意味着能够轻松弯曲而不折断；愿意改变或妥协。"
    },
    {
        id: 7,
        question: "The abandoned house on the corner is __________ for being haunted, and no one dares to go near it after dark.",
        chinese_question: "拐角处的废弃房子 __________ 闹鬼，天黑后没有人敢靠近。",
        answers: [
            { option: "A", answer: "renowned", chinese_answer: "著名的", chinese_romanization: "zhùmíng de" },
            { option: "B", answer: "unknown", chinese_answer: "不知名的", chinese_romanization: "bù zhīmíng de" },
            { option: "C", answer: "notorious", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíng zhāozhù de" },
            { option: "D", answer: "celebrated", chinese_answer: "受人尊敬的", chinese_romanization: "shòu rén zūnjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'notorious' means famous or well-known, typically for some bad quality or deed." +
            "<br><br>" +
            "(A) 'renowned' means known or talked about by many people; famous." +
            "<br><br>" +
            "(B) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(D) 'celebrated' means greatly admired; renowned.",
        chinese_explanation: "(C) '臭名昭著的' 意味着以某种坏品质或行为闻名。" +
            "<br><br>" +
            "(A) '著名的' 意味着被许多人知道或谈论的；著名的。" +
            "<br><br>" +
            "(B) '不知名的' 意味着不知道或不熟悉的。" +
            "<br><br>" +
            "(D) '受人尊敬的' 意味着备受钦佩的；著名的。"
    },
    {
        id: 8,
        question: "The president gave his __________ address, outlining his vision and goals for the country over the next four years.",
        chinese_question: "总统发表了他的 __________ 演讲，概述了他对未来四年国家的愿景和目标。",
        answers: [
            { option: "A", answer: "inaugural", chinese_answer: "就职的", chinese_romanization: "jiùzhí de" },
            { option: "B", answer: "final", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
            { option: "C", answer: "farewell", chinese_answer: "告别的", chinese_romanization: "gàobié de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'inaugural' means marking the beginning of an institution, activity, or period of office." +
            "<br><br>" +
            "(B) 'final' means coming at the end of a series." +
            "<br><br>" +
            "(C) 'farewell' means an act of parting or of marking someone's departure." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
        chinese_explanation: "(A) '就职的' 意味着标志着一个机构、活动或任期的开始。" +
            "<br><br>" +
            "(B) '最终的' 意味着在一系列的末尾。" +
            "<br><br>" +
            "(C) '告别的' 意味着分离或标志某人离开的行为。" +
            "<br><br>" +
            "(D) '常规的' 意味着定期遵循的一系列动作；固定程序。"
    },
    {
        id: 9,
    question: "The detective faced a __________ case, with numerous suspects and seemingly no clear motive for the crime.",
    chinese_question: "侦探面对一个 __________ 的案件，有许多嫌疑人，似乎没有明显的犯罪动机。",
    answers: [
        { option: "A", answer: "perplexing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
        { option: "B", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
        { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "D", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'perplexing' means completely baffling; very puzzling." +
        "<br><br>" +
        "(B) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
        "<br><br>" +
        "(D) 'transparent' means easy to perceive or detect.",
    chinese_explanation: "(A) '令人困惑的' 意味着完全令人困惑的；非常令人费解的。" +
        "<br><br>" +
        "(B) '简单的' 意味着容易理解或完成的；没有困难的。" +
        "<br><br>" +
        "(C) '明显的' 意味着容易察觉或理解的；清晰的、不言自明的或显然的。" +
        "<br><br>" +
        "(D) '透明的' 意味着容易察觉或检测的。"
    },
    {
        id: 10,
    question: "The city is one of the most __________ in the world, with millions of residents packed into its bustling streets and high-rise buildings.",
    chinese_question: "这座城市是世界上人口最 __________ 的城市之一，数百万居民挤在熙熙攘攘的街道和高楼大厦中。",
    answers: [
        { option: "A", answer: "populous", chinese_answer: "人口稠密的", chinese_romanization: "rénkǒu chóumì de" },
        { option: "B", answer: "deserted", chinese_answer: "荒无人烟的", chinese_romanization: "huāngwú rényān de" },
        { option: "C", answer: "sparse", chinese_answer: "稀疏的", chinese_romanization: "xīshū de" },
        { option: "D", answer: "empty", chinese_answer: "空的", chinese_romanization: "kōng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'populous' means having a large population; densely populated." +
        "<br><br>" +
        "(B) 'deserted' means empty of people." +
        "<br><br>" +
        "(C) 'sparse' means thinly dispersed or scattered." +
        "<br><br>" +
        "(D) 'empty' means containing nothing; not filled or occupied.",
    chinese_explanation: "(A) '人口稠密的' 意味着人口众多的；人口密集的。" +
        "<br><br>" +
        "(B) '荒无人烟的' 意味着没有人的。" +
        "<br><br>" +
        "(C) '稀疏的' 意味着稀疏分布的或散开的。" +
        "<br><br>" +
        "(D) '空的' 意味着没有包含任何东西；未填充或未占用的。"
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
