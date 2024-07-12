// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "When the power went out, she was __________ enough to find candles and flashlights, ensuring everyone stayed safe and calm.",
        chinese_question: "停电时，她非常 __________，找到了蜡烛和手电筒，确保大家都安全和冷静。",
        answers: [
            { option: "A", answer: "resourceful", chinese_answer: "足智多谋的", chinese_romanization: "zúzhì duōmóu de" },
            { option: "B", answer: "helpless", chinese_answer: "无助的", chinese_romanization: "wúzhù de" },
            { option: "C", answer: "panicked", chinese_answer: "惊慌的", chinese_romanization: "jīnghuāng de" },
            { option: "D", answer: "unprepared", chinese_answer: "没准备的", chinese_romanization: "méi zhǔnbèi de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resourceful' means having the ability to find quick and clever ways to overcome difficulties." +
            "<br><br>" +
            "(B) 'helpless' means unable to defend oneself or to act without help." +
            "<br><br>" +
            "(C) 'panicked' means feeling or characterized by uncontrollable fear or anxiety." +
            "<br><br>" +
            "(D) 'unprepared' means not ready or able to deal with something.",
        chinese_explanation: "(A) '足智多谋的' 意味着有能力找到快速和聪明的方法来克服困难。" +
            "<br><br>" +
            "(B) '无助的' 意味着无法自卫或在没有帮助的情况下行动的。" +
            "<br><br>" +
            "(C) '惊慌的' 意味着感到或表现出无法控制的恐惧或焦虑。" +
            "<br><br>" +
            "(D) '没准备的' 意味着没有准备好或不能应对某事的。"
    },
    {
        id: 2,
    question: "The study provided __________ data on the effectiveness of the new drug, including detailed statistics and numerical analysis.",
    chinese_question: "该研究提供了关于新药有效性的 __________ 数据，包括详细的统计和数字分析。",
    answers: [
        { option: "A", answer: "quantitative", chinese_answer: "定量的", chinese_romanization: "dìngliàng de" },
        { option: "B", answer: "qualitative", chinese_answer: "定性的", chinese_romanization: "dìngxìng de" },
        { option: "C", answer: "anecdotal", chinese_answer: "轶事的", chinese_romanization: "yìshì de" },
        { option: "D", answer: "speculative", chinese_answer: "推测的", chinese_romanization: "tuīcè de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'quantitative' means relating to, measuring, or measured by the quantity of something rather than its quality." +
        "<br><br>" +
        "(B) 'qualitative' means relating to, measuring, or measured by the quality of something rather than its quantity." +
        "<br><br>" +
        "(C) 'anecdotal' means based on personal accounts rather than facts or research." +
        "<br><br>" +
        "(D) 'speculative' means engaged in, expressing, or based on conjecture rather than knowledge.",
    chinese_explanation: "(A) '定量的' 意味着与数量相关的、测量的或通过数量测量的。" +
        "<br><br>" +
        "(B) '定性的' 意味着与质量相关的、测量的或通过质量测量的。" +
        "<br><br>" +
        "(C) '轶事的' 意味着基于个人陈述而不是事实或研究的。" +
        "<br><br>" +
        "(D) '推测的' 意味着从事、表达或基于猜测而不是知识的。"
    },
    {
        id: 3,
    question: "The climbers found themselves in a __________ position on the cliff, with loose rocks beneath their feet and no secure handholds.",
    chinese_question: "登山者发现自己处于悬崖上的 __________ 位置，脚下是松动的岩石，没有安全的抓手。",
    answers: [
        { option: "A", answer: "precarious", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
        { option: "B", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
        { option: "C", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
        { option: "D", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'precarious' means not securely held or in position; dangerously likely to fall or collapse." +
        "<br><br>" +
        "(B) 'stable' means not likely to change or fail; firmly established." +
        "<br><br>" +
        "(C) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
        "<br><br>" +
        "(D) 'safe' means protected from or not exposed to danger or risk.",
    chinese_explanation: "(A) '危险的' 意味着未牢固固定或未在位置上的；有可能坠落或倒塌的。" +
        "<br><br>" +
        "(B) '稳定的' 意味着不太可能改变或失败的；牢固建立的。" +
        "<br><br>" +
        "(C) '安全的' 意味着固定或牢固的，不会松动或丢失的。" +
        "<br><br>" +
        "(D) '安全的' 意味着受到保护的或未暴露于危险或风险的。"
    },
    {
        id: 4,
    question: "The coach was __________ with his players, never sugar-coating their mistakes but always encouraging them to improve.",
    chinese_question: "教练对他的球员们很 __________，从不粉饰他们的错误，但总是鼓励他们进步。",
    answers: [
        { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "B", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléng liǎng kě de" },
        { option: "C", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
        { option: "D", answer: "evasive", chinese_answer: "逃避的", chinese_romanization: "táobì de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'forthright' means direct and outspoken; straightforward and honest." +
        "<br><br>" +
        "(A) 'vague' means of uncertain, indefinite, or unclear character or meaning." +
        "<br><br>" +
        "(B) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
        "<br><br>" +
        "(D) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly.",
    chinese_explanation: "(C) '直率的' 意味着直接和坦率的；直截了当的。" +
        "<br><br>" +
        "(A) '模糊的' 意味着不确定、不明确的或不清楚的性质或意义。" +
        "<br><br>" +
        "(B) '模棱两可的' 意味着不止一种解释的；没有明显意义的。" +
        "<br><br>" +
        "(D) '逃避的' 意味着倾向于避免承诺或自我表露，特别是通过仅间接回应。"
    },
    {
        id: 5,
        question: "He gave a __________ explanation of the theory, which made it easy for everyone to understand.",
        chinese_question: "他对理论进行了 __________ 的解释，这使得每个人都能轻松理解。",
        answers: [
            { option: "A", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "C", answer: "succinct", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "D", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléngliǎngkě de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'succinct' means briefly and clearly expressed." +
            "<br><br>" +
            "(A) 'convoluted' means extremely complex and difficult to follow." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts." +
            "<br><br>" +
            "(D) 'ambiguous' means open to more than one interpretation.",
        chinese_explanation: "(C) '简洁的' 意味着简明和清晰表达的。" +
            "<br><br>" +
            "(A) '复杂的' 意味着极其复杂和难以理解的。" +
            "<br><br>" +
            "(B) '详细的' 意味着有很多细节或事实的。" +
            "<br><br>" +
            "(D) '模棱两可的' 意味着可以有多种解释的。"
    },
    {
        id: 6,
    question: "In today's global economy, being __________ not only enhances communication but also fosters cultural understanding and collaboration.",
    chinese_question: "在当今的全球经济中，__________ 不仅能增强沟通，还能促进文化理解和合作。",
    answers: [
        { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
        { option: "B", answer: "unilingual", chinese_answer: "单语言的", chinese_romanization: "dān yǔyán de" },
        { option: "C", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
        { option: "D", answer: "linguistically-challenged", chinese_answer: "语言能力受限的", chinese_romanization: "yǔyán nénglì shòuxiàn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'bilingual' means able to speak two languages fluently." +
        "<br><br>" +
        "(A) 'monolingual' means speaking only one language." +
        "<br><br>" +
        "(B) 'unilingual' means of, relating to, or involving only one language." +
        "<br><br>" +
        "(D) 'linguistically-challenged' means having difficulty with language skills.",
    chinese_explanation: "(C) '双语的' 意味着能够流利地说两种语言。" +
        "<br><br>" +
        "(A) '单语的' 意味着只说一种语言。" +
        "<br><br>" +
        "(B) '单语言的' 意味着与仅涉及一种语言有关的。" +
        "<br><br>" +
        "(D) '语言能力受限的' 意味着在语言技能上有困难的。"
    },
    {
        id: 7,
    question: "The professor's explanation was so __________ that few students understood the concept.",
    chinese_question: "教授的解释非常 __________，以至于很少有学生理解这个概念。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清晰", chinese_romanization: "qīngxī" },
        { option: "B", answer: "obvious", chinese_answer: "明显", chinese_romanization: "míngxiǎn" },
        { option: "C", answer: "obscure", chinese_answer: "晦涩", chinese_romanization: "huìsè" },
        { option: "D", answer: "evident", chinese_answer: "明白", chinese_romanization: "míngbái" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'obscure' means not discovered or known about; uncertain." +
        "<br><br>" +
        "(A) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(B) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
        "<br><br>" +
        "(D) 'evident' means plain or obvious; clearly seen or understood.",
    chinese_explanation: "(C) '晦涩' 意味着未被发现或不为人知的；不确定的。" +
        "<br><br>" +
        "(A) '清晰' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(B) '明显' 意味着容易感知或理解的；清楚的、自明的或明显的。" +
        "<br><br>" +
        "(D) '明白' 意味着明白或明显的；清楚地看到或理解的。"
    },
    {
        id: 8,
        question: "The __________ responsibilities of the CEO include making major decisions and managing overall operations.",
        chinese_question: "首席执行官的 __________ 职责包括做出重大决策和管理整体运营。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "corporate", chinese_answer: "公司的", chinese_romanization: "gōngsī de" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'corporate' means relating to a large company or group." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(B) '公司的' 意味着与大公司或集团有关的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 9,
    question: "Her __________ personality made her the center of attention at every party.",
    chinese_question: "她__________的性格使她成为每个聚会的焦点。",
    answers: [
        { option: "A", answer: "dull", chinese_answer: "暗淡的", chinese_romanization: "àndàn de" },
        { option: "B", answer: "dim", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
        { option: "C", answer: "radiant", chinese_answer: "光辉的", chinese_romanization: "guānghuī de" },
        { option: "D", answer: "gloomy", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'radiant' means sending out light; shining or glowing brightly. Figuratively, it can mean being full of happiness and energy." +
        "<br><br>" +
        "(A) 'dull' means lacking brightness, vividness, or sheen." +
        "<br><br>" +
        "(B) 'dim' means not shining brightly or clearly." +
        "<br><br>" +
        "(D) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening.",
    chinese_explanation: "(C) '光辉的'一词意味着发出光；闪耀或光芒四射的。比喻地，它可以表示充满快乐和活力的。" +
        "<br><br>" +
        "(A) '暗淡的' 意味着缺乏亮度、鲜艳或光泽的。" +
        "<br><br>" +
        "(B) '昏暗的' 意味着不明亮或清晰的。" +
        "<br><br>" +
        "(D) '阴沉的' 意味着黑暗或光线不足的，尤其是看起来令人沮丧或害怕的。"
    },
    {
        id: 10,
        question: "Her mistake during the presentation caused her to feel __________ in front of her colleagues.",
        chinese_question: "她在演讲中的错误让她在同事面前感到 __________ 。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈", chinese_romanization: "xìnggāo-cǎiliè" },
            { option: "B", answer: "amused", chinese_answer: "有趣", chinese_romanization: "yǒuqù" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
            { option: "D", answer: "mortified", chinese_answer: "尴尬", chinese_romanization: "gāngà" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mortified' means to feel extremely embarrassed or ashamed." +
            "<br><br>" +
            "(A) 'elated' means very happy or proud." +
            "<br><br>" +
            "(B) 'amused' means finding something funny or entertaining." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy.",
        chinese_explanation: "(D) '尴尬' 意味着感到极度尴尬或羞愧。" +
            "<br><br>" +
            "(A) '兴高采烈' 意味着非常高兴或自豪。" +
            "<br><br>" +
            "(B) '有趣' 意味着觉得某事有趣或娱乐性。" +
            "<br><br>" +
            "(C) '无动于衷' 意味着没有特别的兴趣或同情。"
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
