// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her speech left a __________ impact on the audience, changing their perspectives profoundly.",
    chinese_question: "她的演讲对观众产生了 __________ 的影响，深刻地改变了他们的观点。",
    answers: [
        { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "C", answer: "profound", chinese_answer: "深远的", chinese_romanization: "shēnyuǎn de" },
        { option: "D", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'profound' means very great or intense; having deep insight or understanding." +
        "<br><br>" +
        "(A) 'fleeting' means lasting for a very short time." +
        "<br><br>" +
        "(B) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(D) 'negligible' means so small or unimportant as to be not worth considering.",
    chinese_explanation: "(C) '深远的' 意味着非常大或强烈的；具有深刻的见解或理解的。" +
        "<br><br>" +
        "(A) '短暂的' 意味着持续时间非常短的。" +
        "<br><br>" +
        "(B) '次要的' 意味着在重要性、严重性或意义上较小的。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着如此小或不重要，不值得考虑的。"
    },
    {
        id: 2,
    question: "The software uses a __________ algorithm that is owned by the company and not available for public use.",
    chinese_question: "该软件使用 __________ 算法，这是公司拥有的，不能供公众使用。",
    answers: [
        { option: "A", answer: "proprietary", chinese_answer: "专有的", chinese_romanization: "zhuānyǒu de" },
        { option: "B", answer: "open-source", chinese_answer: "开源的", chinese_romanization: "kāiyuán de" },
        { option: "C", answer: "generic", chinese_answer: "通用的", chinese_romanization: "tōngyòng de" },
        { option: "D", answer: "public", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'proprietary' means relating to an owner or ownership; protected by a trademark or patent." +
        "<br><br>" +
        "(B) 'open-source' means denoting software for which the original source code is made freely available and may be redistributed and modified." +
        "<br><br>" +
        "(C) 'generic' means not specific; general." +
        "<br><br>" +
        "(D) 'public' means open to or shared by all the people of an area or country.",
    chinese_explanation: "(A) '专有的' 意味着与所有者或所有权有关的；受商标或专利保护的。" +
        "<br><br>" +
        "(B) '开源的' 意味着指软件的原始源代码可以自由获得，并可以重新分发和修改的。" +
        "<br><br>" +
        "(C) '通用的' 意味着不具体的；一般的。" +
        "<br><br>" +
        "(D) '公开的' 意味着对某一地区或国家的所有人开放或共享的。"
    },
    {
        id: 3,
    question: "Her __________ approach to the debate allowed her to address the complexities of the issue more effectively.",
    chinese_question: "她对辩论的 __________ 方法使她能够更有效地处理问题的复杂性。",
    answers: [
        { option: "A", answer: "simplistic", chinese_answer: "简单化的", chinese_romanization: "jiǎndānhuà de" },
        { option: "B", answer: "one-dimensional", chinese_answer: "单一的", chinese_romanization: "dānyī de" },
        { option: "C", answer: "nuanced", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" },
        { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nuanced' means characterized by subtle shades of meaning or expression." +
        "<br><br>" +
        "(A) 'simplistic' means treating complex issues and problems as if they were much simpler than they really are." +
        "<br><br>" +
        "(B) 'one-dimensional' means lacking depth or complexity." +
        "<br><br>" +
        "(D) 'superficial' means existing or occurring at or on the surface.",
    chinese_explanation: "(C) '微妙的' 意味着以细微的意义或表达为特征的。" +
        "<br><br>" +
        "(A) '简单化的' 意味着将复杂问题和问题视为比实际简单得多。" +
        "<br><br>" +
        "(B) '单一的' 意味着缺乏深度或复杂性。" +
        "<br><br>" +
        "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 4,
        question: "The sculpture was installed as a __________ fixture in the park, becoming a beloved landmark for residents.",
        chinese_question: "雕塑被安装为公园里的 __________ 装置，成为居民喜爱的地标。",
        answers: [
            { option: "A", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "B", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "C", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "fleeting", chinese_answer: "转瞬即逝的", chinese_romanization: "zhuǎnshùn jí shì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(A) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'transient' means lasting only for a short time; impermanent." +
            "<br><br>" +
            "(D) 'fleeting' means lasting for a very short time.",
        chinese_explanation: "(B) '永久的' 意味着持续或意图无限期保持不变的。" +
            "<br><br>" +
            "(A) '暂时的' 意味着仅持续有限时间的；不是永久的。" +
            "<br><br>" +
            "(C) '短暂的' 意味着仅持续很短时间的；暂时的。" +
            "<br><br>" +
            "(D) '转瞬即逝的' 意味着持续时间非常短的。"
    },
    {
        id: 5,
    question: "The cabin was located in a __________ area, far from the nearest town and surrounded by dense forest.",
    chinese_question: "小木屋位于一个 __________ 的地区，远离最近的城镇，被茂密的森林包围。",
    answers: [
        { option: "A", answer: "remote", chinese_answer: "偏远的", chinese_romanization: "piānyuǎn de" },
        { option: "B", answer: "central", chinese_answer: "中央的", chinese_romanization: "zhōngyāng de" },
        { option: "C", answer: "accessible", chinese_answer: "可接近的", chinese_romanization: "kě jiējìn de" },
        { option: "D", answer: "urban", chinese_answer: "城市的", chinese_romanization: "chéngshì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'remote' means situated far from the main centers of population; distant." +
        "<br><br>" +
        "(B) 'central' means of, at, or forming the center." +
        "<br><br>" +
        "(C) 'accessible' means able to be reached or entered." +
        "<br><br>" +
        "(D) 'urban' means in, relating to, or characteristic of a city or town.",
    chinese_explanation: "(A) '偏远的' 意味着远离人口主要集中地；遥远的。" +
        "<br><br>" +
        "(B) '中央的' 意味着在中心的或形成中心的。" +
        "<br><br>" +
        "(C) '可接近的' 意味着可以到达或进入的。" +
        "<br><br>" +
        "(D) '城市的' 意味着与城市或城镇有关的或具有城市特征的。"
    },
    {
        id: 6,
    question: "The cheese had a __________ aroma that filled the entire room, making it impossible to ignore.",
    chinese_question: "这块奶酪有一种 __________ 的香气，充满了整个房间，让人无法忽视。",
    answers: [
        { option: "A", answer: "pungent", chinese_answer: "刺激的", chinese_romanization: "cìjī de" },
        { option: "B", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
        { option: "C", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "D", answer: "faint", chinese_answer: "微弱的", chinese_romanization: "wēiruò de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'pungent' means having a sharply strong taste or smell." +
        "<br><br>" +
        "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
        "<br><br>" +
        "(C) 'mild' means not severe, serious, or harsh." +
        "<br><br>" +
        "(D) 'faint' means barely perceptible.",
    chinese_explanation: "(A) '刺激的' 意味着味道或气味非常强烈。" +
        "<br><br>" +
        "(B) '平淡的' 意味着缺乏强烈特征或特点的，因此没有趣味的。" +
        "<br><br>" +
        "(C) '温和的' 意味着不严厉、不严重或不苛刻的。" +
        "<br><br>" +
        "(D) '微弱的' 意味着几乎察觉不到的。"
    },
    {
        id: 7,
        question: "The new medication is highly __________, capable of relieving pain within minutes.",
        chinese_question: "这种新药非常 __________，能够在几分钟内缓解疼痛。",
        answers: [
            { option: "A", answer: "potent", chinese_answer: "强效的", chinese_romanization: "qiángxiào de" },
            { option: "B", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "C", answer: "ineffective", chinese_answer: "无效的", chinese_romanization: "wúxiào de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'potent' means having great power, influence, or effect." +
            "<br><br>" +
            "(B) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(C) 'ineffective' means not producing any significant or desired effect." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(A) '强效的' 意味着具有强大力量、影响力或效果的。" +
            "<br><br>" +
            "(B) '虚弱的' 意味着缺乏执行体力任务的能力；缺乏体力和精力的。" +
            "<br><br>" +
            "(C) '无效的' 意味着不产生任何显著或预期效果的。" +
            "<br><br>" +
            "(D) '温和的' 意味着不严重、严重或苛刻的。"
    },
    {
        id: 8,
        question: "His __________ lifestyle, marked by daily prayers and charitable acts, earned him the respect and admiration of his community.",
        chinese_question: "他的 __________ 生活方式，以每日祈祷和慈善行为为特征，为他赢得了社区的尊重和钦佩。",
        answers: [
            { option: "A", answer: "pious", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
            { option: "B", answer: "irreverent", chinese_answer: "不敬的", chinese_romanization: "bùjìng de" },
            { option: "C", answer: "secular", chinese_answer: "世俗的", chinese_romanization: "shìsú de" },
            { option: "D", answer: "profane", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pious' means devoutly religious." +
            "<br><br>" +
            "(B) 'irreverent' means showing a lack of respect for people or things that are generally taken seriously." +
            "<br><br>" +
            "(C) 'secular' means denoting attitudes, activities, or other things that have no religious or spiritual basis." +
            "<br><br>" +
            "(D) 'profane' means relating or devoted to that which is not sacred or biblical; secular rather than religious.",
        chinese_explanation: "(A) '虔诚的' 意味着虔诚地宗教的。" +
            "<br><br>" +
            "(B) '不敬的' 意味着对一般被严肃对待的人或事物表现出缺乏尊重的。" +
            "<br><br>" +
            "(C) '世俗的' 意味着指没有宗教或精神基础的态度、活动或其他事物。" +
            "<br><br>" +
            "(D) '亵渎的' 意味着与不神圣或圣经无关的；而是世俗的。"
    },
    {
        id: 9,
        question: "His explanations were __________, leaving the students more confused than enlightened.",
        chinese_question: "他的解释 __________，使学生们更加困惑而不是明白。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
            { option: "B", answer: "transparent", chinese_answer: "透明", chinese_romanization: "tòumíng" },
            { option: "C", answer: "opaque", chinese_answer: "晦涩", chinese_romanization: "huìsè" },
            { option: "D", answer: "understandable", chinese_answer: "可理解", chinese_romanization: "kě lǐjiě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opaque' means not able to be seen through; not transparent, and also can mean hard to understand." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(D) 'understandable' means able to be understood.",
        chinese_explanation: "(C) '晦涩' 意味着无法透过看到的；不透明的，也可以意味难以理解的。" +
            "<br><br>" +
            "(A) '清晰' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '透明' 意味着容易察觉或检测的。" +
            "<br><br>" +
            "(D) '可理解' 意味着能够被理解的。"
    },
    {
        id: 10,
    question: "Her __________ hobbies, such as collecting antique typewriters and growing rare orchids, fascinated her friends.",
    chinese_question: "她的 __________ 爱好，比如收集古董打字机和种植稀有兰花，让她的朋友们感到着迷。",
    answers: [
        { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
        { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "C", answer: "eccentric", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
        { option: "D", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'eccentric' means (of a person or their behavior) unconventional and slightly strange." +
        "<br><br>" +
        "(A) 'ordinary' means with no special or distinctive features; normal." +
        "<br><br>" +
        "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(D) 'usual' means habitually or typically occurring or done; customary.",
    chinese_explanation: "(C) '古怪的' 意味着（一个人或他们的行为）不寻常和略微奇怪的。" +
        "<br><br>" +
        "(A) '普通的' 意味着没有特别或独特特征的；正常的。" +
        "<br><br>" +
        "(B) '传统的' 意味着根据或符合通常的做法或信仰的。" +
        "<br><br>" +
        "(D) '通常的' 意味着习惯性或典型地发生或做的；习惯性的。"
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
