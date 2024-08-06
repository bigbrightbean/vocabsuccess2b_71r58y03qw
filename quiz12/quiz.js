// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The project failed due to the team's __________ management, which lacked structure and oversight.",
        chinese_question: "由于团队的 __________ 管理，项目失败了，缺乏结构和监督。",
        answers: [
            { option: "A", answer: "efficient", chinese_answer: "高效的", chinese_romanization: "gāoxiào de" },
            { option: "B", answer: "organized", chinese_answer: "有组织的", chinese_romanization: "yǒu zǔzhī de" },
            { option: "C", answer: "slovenly", chinese_answer: "懒散的", chinese_romanization: "lǎnsǎn de" },
            { option: "D", answer: "methodical", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slovenly' means careless, excessively casual." +
            "<br><br>" +
            "(A) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(B) 'organized' means arranged or structured in a systematic way." +
            "<br><br>" +
            "(D) 'methodical' means done according to a systematic or established form of procedure.",
        chinese_explanation: "(C) '懒散的' 意味着粗心的，过于随意的。" +
            "<br><br>" +
            "(A) '高效的' 意味着以最小的浪费努力或费用实现最大生产力的。" +
            "<br><br>" +
            "(B) '有组织的' 意味着系统地安排或结构的。" +
            "<br><br>" +
            "(D) '有条理的' 意味着按照系统的或既定的程序进行的。"
    },
    {
        id: 2,
        question: "Her achievements in the field of medicine were __________, earning her numerous awards and recognition from her peers.",
        chinese_question: "她在医学领域的成就非常 __________，为她赢得了众多奖项和同行的认可。",
        answers: [
            { option: "A", answer: "notable", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jìnyào de" },
            { option: "C", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "D", answer: "obscure", chinese_answer: "默默无闻的", chinese_romanization: "mòmòwúwén de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'notable' means worthy of attention or notice; remarkable." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'obscure' means not discovered or known about; uncertain.",
        chinese_explanation: "(A) '显著的' 意味着值得注意或关注的；显著的。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(C) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '默默无闻的' 意味着没有被发现或知道的；不确定的。"
    },
    {
        id: 3,
        question: "The athlete's __________ training regimen helped her achieve peak physical condition in time for the competition.",
        chinese_question: "这位运动员 __________ 的训练计划帮助她在比赛前达到了最佳身体状态。",
        answers: [
            { option: "A", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
            { option: "B", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "vigorous", chinese_answer: "有力的", chinese_romanization: "yǒulì de" },
            { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vigorous' means strong, healthy, and full of energy." +
            "<br><br>" +
            "(A) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'weak' means lacking physical strength and energy.",
        chinese_explanation: "(C) '有力的' 意味着强壮、健康、充满活力。" +
            "<br><br>" +
            "(A) '迟缓的' 意味着行动缓慢或不活跃。" +
            "<br><br>" +
            "(B) '温和的' 意味着性情温和、善良或温柔。" +
            "<br><br>" +
            "(D) '虚弱的' 意味着缺乏体力和精力。"
    },
    {
        id: 4,
        question: "Charging such high prices for basic necessities is __________ and should be illegal.",
        chinese_question: "对基本生活必需品收取如此高的价格是 __________ 的，应该是违法的。",
        answers: [
            { option: "A", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "B", answer: "reasonable", chinese_answer: "合理的", chinese_romanization: "hélǐ de" },
            { option: "C", answer: "unconscionable", chinese_answer: "不合理的", chinese_romanization: "bù hélǐ de" },
            { option: "D", answer: "justified", chinese_answer: "有正当理由的", chinese_romanization: "yǒu zhèngdāng lǐyóu de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unconscionable' means not right or reasonable." +
            "<br><br>" +
            "(A) 'fair' means in accordance with the rules or standards; legitimate." +
            "<br><br>" +
            "(B) 'reasonable' means having sound judgment; fair and sensible." +
            "<br><br>" +
            "(D) 'justified' means having, done for, or marked by a good or legitimate reason.",
        chinese_explanation: "(C) '不合理的' 意味着不正当或不合理的。" +
            "<br><br>" +
            "(A) '公平的' 意味着符合规则或标准的；合法的。" +
            "<br><br>" +
            "(B) '合理的' 意味着有合理判断的；公平和明智的。" +
            "<br><br>" +
            "(D) '有正当理由的' 意味着有、完成或标志着有良好或合法理由的。"
    },
    {
        id: 5,
        question: "The politician's __________ speech ignited a sense of hope and determination in the crowd.",
        chinese_question: "这位政治家的 __________ 演讲在群众中激起了一种希望和决心。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "B", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "C", answer: "fervent", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fervent' means having or displaying a passionate intensity." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '热情的' 意味着有或表现出强烈的激情。" +
            "<br><br>" +
            "(A) '沉闷的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(B) '单调的' 意味着乏味、单调和重复的；缺乏多样性和趣味的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。"
    },
    {
        id: 6,
        question: "The politician's __________ speech was filled with harsh criticisms and loud declarations that echoed through the auditorium.",
        chinese_question: "政治家的 __________ 演讲充满了严厉的批评和响亮的宣言，在礼堂内回荡。",
        answers: [
            { option: "A", answer: "strident", chinese_answer: "刺耳的", chinese_romanization: "cì'ěr de" },
            { option: "B", answer: "mellow", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "C", answer: "soothing", chinese_answer: "抚慰的", chinese_romanization: "fǔwèi de" },
            { option: "D", answer: "soft", chinese_answer: "柔软的", chinese_romanization: "róuruǎn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'strident' means loud and harsh; grating." +
            "<br><br>" +
            "(B) 'mellow' means pleasantly smooth or soft; free from harshness." +
            "<br><br>" +
            "(C) 'soothing' means having a gently calming effect." +
            "<br><br>" +
            "(D) 'soft' means easy to mold, cut, compress, or fold; not hard or firm to the touch.",
        chinese_explanation: "(A) '刺耳的' 意味着大声且刺耳的；刺耳的。" +
            "<br><br>" +
            "(B) '柔和的' 意味着愉快地平滑或柔软；没有刺耳的声音。" +
            "<br><br>" +
            "(C) '抚慰的' 意味着具有轻柔平静效果的。" +
            "<br><br>" +
            "(D) '柔软的' 意味着易于塑造、切割、压缩或折叠的；触感不硬或不牢固的。"
    },
    {
        id: 7,
    question: "The __________ construction of the bridge ensured it could withstand heavy traffic and harsh weather conditions.",
    chinese_question: "桥梁的 __________ 结构确保它能承受重型交通和恶劣的天气条件。",
    answers: [
        { option: "A", answer: "flimsy", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
        { option: "B", answer: "fragile", chinese_answer: "易碎的", chinese_romanization: "yìsuì de" },
        { option: "C", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
        { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sturdy' means strongly and solidly built." +
        "<br><br>" +
        "(A) 'flimsy' means comparatively light and insubstantial; easily damaged." +
        "<br><br>" +
        "(B) 'fragile' means easily broken or damaged." +
        "<br><br>" +
        "(D) 'weak' means lacking physical strength or vigor.",
    chinese_explanation: "(C) “结实的” 意味着坚固和牢固地建造。" +
        "<br><br>" +
        "(A) '脆弱的' 意味着比较轻且不牢固；容易损坏。" +
        "<br><br>" +
        "(B) '易碎的' 意味着容易破碎或损坏。" +
        "<br><br>" +
        "(D) '虚弱的' 意味着缺乏体力或活力。"
    },
    {
        id: 8,
    question: "The repairs to the road were __________ and would be replaced with a permanent solution in the summer.",
    chinese_question: "道路的修补是 __________ 的，夏季会用永久的解决方案来替换。",
    answers: [
        { option: "A", answer: "permanent", chinese_answer: "永久", chinese_romanization: "yǒngjiǔ" },
        { option: "B", answer: "temporary", chinese_answer: "暂时", chinese_romanization: "zànshí" },
        { option: "C", answer: "lasting", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
        { option: "D", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'temporary' means lasting for only a limited period of time." +
        "<br><br>" +
        "(A) 'permanent' means lasting or intended to last indefinitely." +
        "<br><br>" +
        "(C) 'lasting' means enduring or able to endure over a long period of time." +
        "<br><br>" +
        "(D) 'durable' means able to withstand wear, pressure, or damage.",
    chinese_explanation: "(B) “暂时” 意味着只持续一段有限的时间。" +
        "<br><br>" +
        "(A) '永久' 意味着持久或打算无限期持续。" +
        "<br><br>" +
        "(C) '持久' 意味着能够在长时间内持续或忍受。" +
        "<br><br>" +
        "(D) '耐用' 意味着能够承受磨损、压力或损害。"
    },
    {
        id: 9,
    question: "She wrote a __________ thank-you note, expressing her sincere appreciation for their hospitality.",
    chinese_question: "她写了一封 __________ 的感谢信，表达了对他们热情款待的真诚感谢。",
    answers: [
        { option: "A", answer: "grudging", chinese_answer: "勉强的", chinese_romanization: "miǎnqiáng de" },
        { option: "B", answer: "gracious", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" },
        { option: "C", answer: "reluctant", chinese_answer: "不情愿的", chinese_romanization: "bù qíngyuàn de" },
        { option: "D", answer: "dismissive", chinese_answer: "轻蔑的", chinese_romanization: "qīngmiè de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'gracious' means courteous, kind, and pleasant." +
        "<br><br>" +
        "(A) 'grudging' means given or done unwillingly." +
        "<br><br>" +
        "(C) 'reluctant' means unwilling and hesitant." +
        "<br><br>" +
        "(D) 'dismissive' means feeling or showing that something is unworthy of consideration.",
    chinese_explanation: "(B) '和蔼的' 意味着有礼貌的、善良的和愉快的。" +
        "<br><br>" +
        "(A) '勉强的' 意味着不情愿地给予或完成的。" +
        "<br><br>" +
        "(C) '不情愿的' 意味着不愿意和犹豫的。" +
        "<br><br>" +
        "(D) '轻蔑的' 意味着觉得某事不值得考虑的感觉或表现。"
    },
    {
        id: 10,
        question: "His idea of building a bridge made entirely out of candy was absolutely __________, garnering laughter from everyone.",
        chinese_question: "他想用糖果完全建造一座桥的想法简直是 __________，引起了所有人的笑声。",
        answers: [
            { option: "A", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
            { option: "B", answer: "practical", chinese_answer: "实用的", chinese_romanization: "shíyòng de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "ludicrous", chinese_answer: "荒唐的", chinese_romanization: "huāngtáng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ludicrous' means so foolish, unreasonable, or out of place as to be amusing; ridiculous." +
            "<br><br>" +
            "(A) 'innovative' means featuring new methods; advanced and original." +
            "<br><br>" +
            "(B) 'practical' means suitable for a particular purpose; useful." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(D) '荒唐的' 意味着如此愚蠢、不合理或不合时宜而显得可笑的；荒谬的。" +
            "<br><br>" +
            "(A) '创新的' 意味着具有新方法的；先进的和原创的。" +
            "<br><br>" +
            "(B) '实用的' 意味着适合特定用途的；有用的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征；正常的。"
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
