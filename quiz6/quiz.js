// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ attitude she displayed during the meeting showed her confidence and unwillingness to be easily intimidated.",
        chinese_question: "她在会议上表现出的 __________ 态度显示了她的自信和不易被吓倒的决心。",
        answers: [
            { option: "A", answer: "meek", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
            { option: "B", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "C", answer: "sassy", chinese_answer: "活泼大胆的", chinese_romanization: "huópō dàdǎn de" },
            { option: "D", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sassy' means lively, bold, and full of spirit; cheeky." +
            "<br><br>" +
            "(A) 'meek' means quiet, gentle, and easily imposed on; submissive." +
            "<br><br>" +
            "(B) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
        chinese_explanation: "(C) '活泼大胆的' 意味着活泼、大胆和充满精神的；无礼的。" +
            "<br><br>" +
            "(A) '温顺的' 意味着安静、温和、容易被强加的；顺从的。" +
            "<br><br>" +
            "(B) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。" +
            "<br><br>" +
            "(D) '顺从的' 意味着准备服从他人的权威或意志的；温顺地服从或被动的。"
    },
    {
        id: 2,
        question: "The chef's new dish was both visually appealing and __________, receiving rave reviews from diners.",
        chinese_question: "厨师的新菜不仅视觉上吸引人，而且 __________，受到食客的好评。",
        answers: [
            { option: "A", answer: "tasteless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" },
            { option: "B", answer: "unappetizing", chinese_answer: "不开胃的", chinese_romanization: "bù kāiwèi de" },
            { option: "C", answer: "palatable", chinese_answer: "美味的", chinese_romanization: "měiwèi de" },
            { option: "D", answer: "disgusting", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'palatable' means pleasant to taste." +
            "<br><br>" +
            "(A) 'tasteless' means lacking flavor." +
            "<br><br>" +
            "(B) 'unappetizing' means not inviting or attractive; unappealing." +
            "<br><br>" +
            "(D) 'disgusting' means arousing revulsion or strong indignation.",
        chinese_explanation: "(C) '美味的' 意味着令人愉快的味道。" +
            "<br><br>" +
            "(A) '无味的' 意味着缺乏味道的。" +
            "<br><br>" +
            "(B) '不开胃的' 意味着不诱人或不吸引人的；不吸引人的。" +
            "<br><br>" +
            "(D) '令人厌恶的' 意味着引起反感或强烈愤慨的。"
    },
    {
        id: 3,
        question: "The company offered him a __________ salary for the position, which was far below what he expected and needed to support his family.",
        chinese_question: "公司为这个职位提供的薪水 __________，远低于他预期的，也不足以养家糊口。",
        answers: [
            { option: "A", answer: "paltry", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "C", answer: "substantial", chinese_answer: "可观的", chinese_romanization: "kěguān de" },
            { option: "D", answer: "ample", chinese_answer: "充足的", chinese_romanization: "chōngzú de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'paltry' means very small or meager; insignificant." +
            "<br><br>" +
            "(B) 'generous' means showing a readiness to give more of something than is strictly necessary or expected." +
            "<br><br>" +
            "(C) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(D) 'ample' means enough or more than enough; plentiful.",
        chinese_explanation: "(A) '微不足道的' 意味着非常小或微不足道的；不重要的。" +
            "<br><br>" +
            "(B) '慷慨的' 意味着表现出愿意给予比严格必要或预期更多的东西。" +
            "<br><br>" +
            "(C) '可观的' 意味着相当重要、规模或价值的。" +
            "<br><br>" +
            "(D) '充足的' 意味着足够的或超过足够的；丰富的。"
    },
    {
        id: 4,
        question: "The __________ impact of the new policy was felt across the entire industry.",
        chinese_question: "新政策的 __________ 影响在整个行业中都能感受到。",
        answers: [
            { option: "A", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
            { option: "C", answer: "tremendous", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tremendous' means very great in amount, scale, or intensity." +
            "<br><br>" +
            "(A) 'negligible' means so small or unimportant as to be not worth considering." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '巨大的' 意味着数量、规模或强度非常大的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着如此小或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 5,
    question: "The hikers found themselves on a __________ path, with loose rocks and steep cliffs making it dangerous.",
    chinese_question: "徒步旅行者发现自己在一条 __________ 的小路上，松动的岩石和陡峭的悬崖使其危险重重。",
    answers: [
        { option: "A", answer: "stable", chinese_answer: "稳定", chinese_romanization: "wěndìng" },
        { option: "B", answer: "secure", chinese_answer: "安全", chinese_romanization: "ānquán" },
        { option: "C", answer: "treacherous", chinese_answer: "危险", chinese_romanization: "wēixiǎn" },
        { option: "D", answer: "safe", chinese_answer: "可靠", chinese_romanization: "kěkào" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'treacherous' means hazardous because of presenting hidden or unpredictable dangers." +
        "<br><br>" +
        "(A) 'stable' means not likely to give way or overturn; firmly fixed." +
        "<br><br>" +
        "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
        "<br><br>" +
        "(D) 'safe' means protected from or not exposed to danger or risk.",
    chinese_explanation: "(C) '危险' 意味着由于隐藏或不可预测的危险而危险。" +
        "<br><br>" +
        "(A) '稳定' 意味着不太可能倒塌或翻倒；牢固固定。" +
        "<br><br>" +
        "(B) '安全' 意味着固定或固定好，不会松动或丢失。" +
        "<br><br>" +
        "(D) '可靠' 意味着受保护，不暴露在危险或风险中。"
    },
    {
        id: 6,
    question: "His __________ habit of chewing loudly during meals irritated everyone at the dinner table.",
    chinese_question: "他在吃饭时大声咀嚼的 __________ 习惯让餐桌上的每个人都感到恼火。",
    answers: [
        { option: "A", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
        { option: "B", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
        { option: "C", answer: "obnoxious", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
        { option: "D", answer: "delightful", chinese_answer: "令人高兴的", chinese_romanization: "lìng rén gāoxìng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'obnoxious' means extremely unpleasant or offensive." +
        "<br><br>" +
        "(A) 'considerate' means careful not to cause inconvenience or hurt to others." +
        "<br><br>" +
        "(B) 'polite' means having or showing behavior that is respectful and considerate of other people." +
        "<br><br>" +
        "(D) 'delightful' means causing delight; charming.",
    chinese_explanation: "(C) '令人厌恶的' 意味着极其令人不快或冒犯的。" +
        "<br><br>" +
        "(A) '体贴的' 意味着小心不引起别人不便或伤害的。" +
        "<br><br>" +
        "(B) '有礼貌的' 意味着表现出对他人的尊重和体贴的行为。" +
        "<br><br>" +
        "(D) '令人高兴的' 意味着带来喜悦的；迷人的。"
    },
    {
        id: 7,
    question: "The artist's __________ attention to detail was evident in every stroke of the brush, resulting in a stunningly realistic portrait.",
    chinese_question: "这位艺术家 __________ 地注重细节，每一笔画都显得尤为真实，最终呈现出一幅惊人的写实肖像。",
    answers: [
        { option: "A", answer: "painstaking", chinese_answer: "煞费苦心的", chinese_romanization: "shàfèi kǔxīn de" },
        { option: "B", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
        { option: "C", answer: "hasty", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
        { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'painstaking' means done with or employing great care and thoroughness." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'hasty' means done or acting with excessive speed or urgency." +
        "<br><br>" +
        "(D) 'superficial' means existing or occurring at or on the surface.",
    chinese_explanation: "(A) '煞费苦心的' 意味着以极大的关心和彻底性完成或使用的。" +
        "<br><br>" +
        "(B) '粗心的' 意味着没有给予足够的注意或思考以避免伤害或错误的。" +
        "<br><br>" +
        "(C) '匆忙的' 意味着以过快或紧迫的速度或行动完成的。" +
        "<br><br>" +
        "(D) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 8,
    question: "The __________ test of a leader's strength is how they handle crises and adversity.",
    chinese_question: "领导者实力的 __________ 考验是他们如何处理危机和逆境。",
    answers: [
        { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "C", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" },
        { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'ultimate' means being or happening at the end of a process; final." +
        "<br><br>" +
        "(A) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(B) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth consideration.",
    chinese_explanation: "(C) '最终的' 意味着发生在过程结束时的；最终的。" +
        "<br><br>" +
        "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
        "<br><br>" +
        "(B) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(D) '无关紧要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 9,
    question: "The hiker stood at the edge of the __________ cliff, looking down at the vast drop below with a mix of awe and fear.",
    chinese_question: "登山者站在 __________ 的悬崖边缘，怀着敬畏和恐惧的心情向下看着巨大的落差。",
    answers: [
        { option: "A", answer: "precipitous", chinese_answer: "陡峭的", chinese_romanization: "dǒuqiào de" },
        { option: "B", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
        { option: "C", answer: "flat", chinese_answer: "平坦的", chinese_romanization: "píngtǎn de" },
        { option: "D", answer: "level", chinese_answer: "平的", chinese_romanization: "píng de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'precipitous' means dangerously high or steep." +
        "<br><br>" +
        "(B) 'gradual' means taking place or progressing slowly or by degrees." +
        "<br><br>" +
        "(C) 'flat' means having a level surface without raised areas or indentations." +
        "<br><br>" +
        "(D) 'level' means having a flat, even surface.",
    chinese_explanation: "(A) '陡峭的' 意味着危险地高或陡峭的。" +
        "<br><br>" +
        "(B) '逐渐的' 意味着缓慢或逐步发生或发展的。" +
        "<br><br>" +
        "(C) '平坦的' 意味着具有平整表面的，没有凸起区域或凹陷的。" +
        "<br><br>" +
        "(D) '平的' 意味着具有平整、均匀的表面的。"
    },
    {
        id: 10,
    question: "The solution to the problem was __________ once we considered all the factors.",
    chinese_question: "一旦我们考虑了所有因素，问题的解决方案就__________了。",
    answers: [
        { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
        { option: "B", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
        { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "D", answer: "concealed", chinese_answer: "隐蔽的", chinese_romanization: "yǐnbì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'obvious' means easily perceived or understood; clear, self-evident, or apparent. Figuratively, it can mean clearly seen or understood after some consideration." +
        "<br><br>" +
        "(A) 'hidden' means kept out of sight; concealed." +
        "<br><br>" +
        "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
        "<br><br>" +
        "(D) 'concealed' means kept secret; hidden.",
    chinese_explanation: "(C) '明显的' 意味着容易察觉或理解的；清楚的，自明的，或显而易见的。比喻地，它可以表示在经过一些考虑后清楚地看到或理解的。" +
        "<br><br>" +
        "(A) '隐藏的' 意味着藏在视线之外的；隐蔽的。" +
        "<br><br>" +
        "(B) '微妙的' 意味着如此精细或精确，以至于难以分析或描述的。" +
        "<br><br>" +
        "(D) '隐蔽的' 意味着保密的；隐藏的。"
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
