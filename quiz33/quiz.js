// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The teacher's __________ enthusiasm for literature made her classes engaging and inspiring.",
        chinese_question: "老师对文学的 __________ 热情使她的课程既有趣又鼓舞人心。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "B", answer: "tepid", chinese_answer: "不热情的", chinese_romanization: "bù rèqíng de" },
            { option: "C", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" },
            { option: "D", answer: "lukewarm", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'passionate' means showing or caused by strong feelings or a strong belief." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'tepid' means showing little enthusiasm." +
            "<br><br>" +
            "(D) 'lukewarm' means only moderately warm; showing little enthusiasm.",
        chinese_explanation: "(C) '充满激情的' 意味着表现出或引起强烈的感情或信念的。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '不热情的' 意味着表现出很少的热情。" +
            "<br><br>" +
            "(D) '冷淡的' 意味着只是稍微温暖；表现出很少的热情。"
    },
    {
        id: 2,
        question: "The chef's __________ sauce added a burst of flavor to the dish, making it a favorite among diners.",
        chinese_question: "厨师的 __________ 酱汁为这道菜增添了一阵风味，使其成为食客的最爱。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "zesty", chinese_answer: "味浓的", chinese_romanization: "wèi nóng de" },
            { option: "D", answer: "insipid", chinese_answer: "无味的", chinese_romanization: "wúwèi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'zesty' means having a strong, pleasant, and somewhat spicy flavor." +
            "<br><br>" +
            "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(B) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(D) 'insipid' means lacking flavor.",
        chinese_explanation: "(C) '味浓的' 意味着具有强烈、令人愉快且略带辛辣的味道。" +
            "<br><br>" +
            "(A) '平淡的' 意味着缺乏强烈特征或特点，因此无趣。" +
            "<br><br>" +
            "(B) '温和的' 意味着温柔且不易激动的。" +
            "<br><br>" +
            "(D) '无味的' 意味着缺乏风味的。"
    },
    {
        id: 3,
    question: "Her contributions to the project were __________, significantly advancing their progress.",
    chinese_question: "她对项目的贡献是__________的，极大地推进了进展。",
    answers: [
        { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
        { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
        { option: "C", answer: "monumental", chinese_answer: "重大的", chinese_romanization: "zhòngdà de" },
        { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'monumental' means great in importance, extent, or size. Figuratively, it can mean very impactful or significant." +
        "<br><br>" +
        "(A) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(B) 'insignificant' means too small or unimportant to be worth consideration." +
        "<br><br>" +
        "(D) 'trivial' means of little value or importance.",
    chinese_explanation: "(C) '重大的'一词意味着在重要性、范围或规模上非常大的。比喻地，它可以表示非常有影响或重要的。" +
        "<br><br>" +
        "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
        "<br><br>" +
        "(B) '无关紧要的' 意味着太小或不重要，不值得考虑的。" +
        "<br><br>" +
        "(D) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 4,
    question: "The company's future plans remain __________, making it difficult for investors to make informed decisions.",
    chinese_question: "公司的未来计划仍然 __________，使得投资者难以做出明智的决定。",
    answers: [
        { option: "A", answer: "specific", chinese_answer: "具体的", chinese_romanization: "jùtǐ de" },
        { option: "B", answer: "nebulous", chinese_answer: "模糊的", chinese_romanization: "móhu de" },
        { option: "C", answer: "well-defined", chinese_answer: "明确的", chinese_romanization: "míngquè de" },
        { option: "D", answer: "distinct", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'nebulous' means unclear, vague, or ill-defined." +
        "<br><br>" +
        "(A) 'specific' means clearly defined or identified." +
        "<br><br>" +
        "(C) 'well-defined' means having clearly distinguishable boundaries or limits." +
        "<br><br>" +
        "(D) 'distinct' means recognizably different in nature from something else of a similar type.",
    chinese_explanation: "(B) '模糊的' 意味着不清楚的，模糊的，或定义不明确的。" +
        "<br><br>" +
        "(A) '具体的' 意味着明确或识别的。" +
        "<br><br>" +
        "(C) '明确的' 意味着具有明确可辨的边界或限制。" +
        "<br><br>" +
        "(D) '清晰的' 意味着在性质上明显不同于类似类型的其他事物。"
    },
    {
        id: 5,
    question: "The joy in her voice was __________ when she received the good news.",
    chinese_question: "当她收到好消息时，她声音中的喜悦是 __________ 的。",
    answers: [
        { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
        { option: "B", answer: "apparent", chinese_answer: "显然的", chinese_romanization: "xiǎnrán de" },
        { option: "C", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
        { option: "D", answer: "muted", chinese_answer: "静音的", chinese_romanization: "jìng yīn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'apparent' means clearly visible or understood; obvious." +
        "<br><br>" +
        "(A) 'hidden' means kept out of sight; concealed." +
        "<br><br>" +
        "(C) 'uncertain' means not able to be relied on; not known or definite." +
        "<br><br>" +
        "(D) 'muted' means quiet and soft.",
    chinese_explanation: "(B) “显然的” 意味着清晰可见或理解的；明显的。" +
        "<br><br>" +
        "(A) '隐藏的' 意味着被隐藏；隐蔽的。" +
        "<br><br>" +
        "(C) '不确定的' 意味着不能依赖的；未知或不确定的。" +
        "<br><br>" +
        "(D) '静音的' 意味着安静和柔和的。"
    },
    {
        id: 6,
        question: "Her __________ sense of style made her stand out in any crowd, as she always wore unique and unconventional outfits.",
        chinese_question: "她那 __________ 的时尚品味使她在人群中脱颖而出，因为她总是穿着独特而不寻常的服装。",
        answers: [
            { option: "A", answer: "quirky", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
            { option: "B", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "C", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "D", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quirky' means characterized by peculiar or unexpected traits or aspects." +
            "<br><br>" +
            "(B) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'predictable' means able to be predicted; expected.",
        chinese_explanation: "(A) '古怪的' 意味着具有奇特或意想不到的特征或方面的。" +
            "<br><br>" +
            "(B) '传统的' 意味着基于或按照通常所做或所信的。" +
            "<br><br>" +
            "(C) '普通的' 意味着没有特别或独特的特征的；正常的。" +
            "<br><br>" +
            "(D) '可预测的' 意味着可以预测的；预期的。"
    },
    {
        id: 7,
        question: "He is __________ to forgetting important details, so we always remind him before meetings.",
        chinese_question: "他 __________ 忘记重要细节，所以我们总是在会议前提醒他。",
        answers: [
            { option: "A", answer: "unlikely", chinese_answer: "不太可能的", chinese_romanization: "bù tài kěnéng de" },
            { option: "B", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" },
            { option: "C", answer: "prone", chinese_answer: "倾向于", chinese_romanization: "qīngxiàng yú" },
            { option: "D", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prone' means likely to or liable to suffer from, do, or experience something, typically something regrettable or unwelcome." +
            "<br><br>" +
            "(A) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(B) 'resistant' means offering resistance to something or someone." +
            "<br><br>" +
            "(D) 'immune' means resistant to a particular infection or toxin owing to the presence of specific antibodies or sensitized white blood cells.",
        chinese_explanation: "(C) '倾向于' 意味着可能或易于遭受、做或经历某事，通常是遗憾的或不受欢迎的事情。" +
            "<br><br>" +
            "(A) '不太可能的' 意味着不太可能发生、被做或是真的。" +
            "<br><br>" +
            "(B) '抵抗的' 意味着对某事物或某人提供抵抗的。" +
            "<br><br>" +
            "(D) '免疫的' 意味着由于存在特定抗体或敏感的白细胞而对特定感染或毒素有抵抗力的。"
    },
    {
        id: 8,
        question: "Despite the setbacks, the team remained __________, confident they would succeed in the end.",
        chinese_question: "尽管遇到挫折，团队依然 __________，相信最终会成功。",
        answers: [
            { option: "A", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "unsure", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'upbeat' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'doubtful' means feeling uncertain about something." +
            "<br><br>" +
            "(B) 'unsure' means not feeling, showing, or done with confidence and certainty." +
            "<br><br>" +
            "(D) 'hesitant' means tentative, unsure, or slow in acting or speaking.",
        chinese_explanation: "(C) '乐观的' 意味着愉快和乐观的。" +
            "<br><br>" +
            "(A) '怀疑的' 意味着对某事感到不确定的。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不自信或不确定的。" +
            "<br><br>" +
            "(D) '犹豫的' 意味着犹豫不决的、迟疑的。"
    },
    {
        id: 9,
        question: "The chef assured the guests that all the ingredients used in the dish were __________ and safe to eat.",
        chinese_question: "厨师向客人保证，菜肴中使用的所有食材都是 __________ 的，可以安全食用。",
        answers: [
            { option: "A", answer: "toxic", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "B", answer: "poisonous", chinese_answer: "有毒的", chinese_romanization: "yǒudú de" },
            { option: "C", answer: "inedible", chinese_answer: "不可食用的", chinese_romanization: "bùkě shíyòng de" },
            { option: "D", answer: "edible", chinese_answer: "可食用的", chinese_romanization: "kě shíyòng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'edible' means fit to be eaten." +
            "<br><br>" +
            "(A) 'toxic' means poisonous." +
            "<br><br>" +
            "(B) 'poisonous' means causing or capable of causing death or illness if taken into the body." +
            "<br><br>" +
            "(C) 'inedible' means not fit to be eaten.",
        chinese_explanation: "(D) '可食用的' 意味着适合食用的。" +
            "<br><br>" +
            "(A) '有毒的' 意味着有毒的。" +
            "<br><br>" +
            "(B) '有毒的' 意味着如果进入体内会导致死亡或疾病的。" +
            "<br><br>" +
            "(C) '不可食用的' 意味着不适合食用的。"
    },
    {
        id: 10,
        question: "After the loss of his partner, he led a __________ life, avoiding social interactions as much as possible.",
        chinese_question: "失去伴侣后，他过着 __________ 的生活，尽可能避免社交互动。",
        answers: [
            { option: "A", answer: "gregarious", chinese_answer: "群居的", chinese_romanization: "qúnjū de" },
            { option: "B", answer: "solitary", chinese_answer: "孤独的", chinese_romanization: "gūdú de" },
            { option: "C", answer: "outgoing", chinese_answer: "外向的", chinese_romanization: "wàixiàng de" },
            { option: "D", answer: "convivial", chinese_answer: "欢宴的", chinese_romanization: "huānyàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'solitary' means done or existing alone." +
            "<br><br>" +
            "(A) 'gregarious' means fond of company; sociable." +
            "<br><br>" +
            "(C) 'outgoing' means friendly and socially confident." +
            "<br><br>" +
            "(D) 'convivial' means friendly, lively, and enjoyable.",
        chinese_explanation: "(B) '孤独的' 意味着独自进行或存在的。" +
            "<br><br>" +
            "(A) '群居的' 意味着喜欢社交的；喜欢群居的。" +
            "<br><br>" +
            "(C) '外向的' 意味着友好且自信的。" +
            "<br><br>" +
            "(D) '欢宴的' 意味着友好、热闹和愉快的。"
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
