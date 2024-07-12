// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The CEO's vague responses only served to __________ the true reasons behind the company's sudden layoffs.",
    chinese_question: "首席执行官的含糊回应只会 __________ 公司突然裁员的真正原因。",
    answers: [
        { option: "A", answer: "expose", chinese_answer: "揭露", chinese_romanization: "jiēlù" },
        { option: "B", answer: "obfuscate", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
        { option: "C", answer: "clarify", chinese_answer: "澄清", chinese_romanization: "chéngqīng" },
        { option: "D", answer: "explain", chinese_answer: "解释", chinese_romanization: "jiěshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'obfuscate' figuratively means to make something unclear or confusing." +
        "<br><br>" +
        "(A) 'expose' means to reveal." +
        "<br><br>" +
        "(C) 'clarify' means to make clear." +
        "<br><br>" +
        "(D) 'explain' means to make something clear.",
    chinese_explanation: "(B) '混淆' 一词在比喻上意味着使某事变得不清楚或混乱。" +
        "<br><br>" +
        "(A) '揭露' 意味着揭示。" +
        "<br><br>" +
        "(C) '澄清' 意味着使清楚。" +
        "<br><br>" +
        "(D) '解释' 意味着使某事变得清楚。"
    },
    {
        id: 2,
        question: "She tried to __________ interest in the conversation, but it was clear she was bored.",
        chinese_question: "她试图 __________ 对谈话感兴趣，但显然她很无聊。",
        answers: [
                { option: "A", answer: "lose", chinese_answer: "失去", chinese_romanization: "shīqù" },
                { option: "B", answer: "feign", chinese_answer: "假装", chinese_romanization: "jiǎzhuāng" },
                { option: "C", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
                { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feign' means to pretend to be affected by a feeling, state, or injury." +
                "<br><br>" +
                "(A) 'lose' means to be deprived of or cease to have or retain something." +
                "<br><br>" +
                "(C) 'increase' means to make or become greater in size, amount, or degree." +
                "<br><br>" +
                "(D) 'avoid' means to keep away from or stop oneself from doing something.",
        chinese_explanation: "(B) '假装' 意味着假装受到感觉、状态或受伤的影响。" +
                "<br><br>" +
                "(A) '失去' 意味着被剥夺或不再拥有或保留某物。" +
                "<br><br>" +
                "(C) '增加' 意味着使大小、数量或程度变得更大。" +
                "<br><br>" +
                "(D) '避免' 意味着远离或阻止自己做某事。"
    },
    {
        id: 3,
    question: "He felt his friend was trying to __________ him into lending money he couldn't afford to lose.",
    chinese_question: "他觉得朋友在试图 __________ 他借出他承受不起损失的钱。",
    answers: [
        { option: "A", answer: "coerce", chinese_answer: "强迫", chinese_romanization: "qiángpò" },
        { option: "B", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "thank", chinese_answer: "感谢", chinese_romanization: "gǎnxiè" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'coerce' means to persuade an unwilling person to do something by using force or threats, used figuratively here." +
        "<br><br>" +
        "(B) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'thank' means to express gratitude to someone.",
    chinese_explanation: "(A) '强迫' 意味着通过使用武力或威胁说服一个不愿意的人做某事，这里是比喻用法。" +
        "<br><br>" +
        "(B) '鼓励' 意味着给某人支持、信心或希望。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '感谢' 意味着向某人表示感谢。"
    },
    {
        id: 4,
    question: "The complex contract terms were designed to __________ the client.",
    chinese_question: "复杂的合同条款旨在 __________ 客户。",
    answers: [
        { option: "A", answer: "enlighten", chinese_answer: "启发", chinese_romanization: "qǐfā" },
        { option: "B", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "C", answer: "bamboozle", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "D", answer: "assist", chinese_answer: "协助", chinese_romanization: "xiézhù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'bamboozle' means to trick or deceive someone." +
        "<br><br>" +
        "(A) 'enlighten' means to give someone greater knowledge and understanding about a subject or situation." +
        "<br><br>" +
        "(B) 'aid' means to provide support or help." +
        "<br><br>" +
        "(D) 'assist' means to help someone.",
    chinese_explanation: "(C) '欺骗' 意味着欺骗或蒙骗某人。" +
        "<br><br>" +
        "(A) '启发' 意味着给某人更大的知识和理解关于一个主题或情况。" +
        "<br><br>" +
        "(B) '帮助' 意味着提供支持或帮助。" +
        "<br><br>" +
        "(D) '协助' 意味着帮助某人。"
    },
    {
        id: 5,
        question: "The unexpected question during the interview seemed to __________ the candidate, making him pause awkwardly.",
        chinese_question: "面试中意外的问题似乎让候选人 __________，使他尴尬地停顿了一下。",
        answers: [
                { option: "A", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
                { option: "B", answer: "disconcert", chinese_answer: "使不安", chinese_romanization: "shǐ bù'ān" },
                { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "D", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'disconcert' means to disturb the composure of; unsettle." +
                "<br><br>" +
                "(A) 'reassure' means to say or do something to remove the doubts and fears of someone." +
                "<br><br>" +
                "(C) 'calm' means to make someone tranquil and quiet." +
                "<br><br>" +
                "(D) 'encourage' means to give support, confidence, or hope to someone.",
        chinese_explanation: "(B) '使不安' 意味着打扰某人的镇定；使不安。" +
                "<br><br>" +
                "(A) '安慰' 意味着说或做某事以消除某人的疑虑和恐惧。" +
                "<br><br>" +
                "(C) '平静' 意味着使某人安静和安宁。" +
                "<br><br>" +
                "(D) '鼓励' 意味着给予某人支持、信心或希望。"
    },
    {
        id: 6,
    question: "Her convoluted explanation only managed to __________ the subject further, leaving everyone more confused than before.",
    chinese_question: "她复杂的解释只会进一步 __________ 这个主题，使每个人比以前更加困惑。",
    answers: [
        { option: "A", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "B", answer: "obfuscate", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
        { option: "C", answer: "illustrate", chinese_answer: "阐明", chinese_romanization: "chǎnmíng" },
        { option: "D", answer: "elucidate", chinese_answer: "阐明", chinese_romanization: "chǎnmíng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'obfuscate' figuratively means to make something unclear or confusing." +
        "<br><br>" +
        "(A) 'simplify' means to make less complex." +
        "<br><br>" +
        "(C) 'illustrate' means to explain or make clear using examples." +
        "<br><br>" +
        "(D) 'elucidate' means to make clear.",
    chinese_explanation: "(B) '混淆' 一词在比喻上意味着使某事变得不清楚或混乱。" +
        "<br><br>" +
        "(A) '简化' 意味着使之变得不复杂。" +
        "<br><br>" +
        "(C) '阐明' 意味着用例子解释或说明。" +
        "<br><br>" +
        "(D) '阐明' 意味着使清楚。"
    },
    {
        id: 7,
        question: "The prisoner was forced to __________ in front of the guards, pleading for mercy.",
        chinese_question: "囚犯被迫在守卫面前 __________，请求宽恕。",
        answers: [
                { option: "A", answer: "stand", chinese_answer: "站", chinese_romanization: "zhàn" },
                { option: "B", answer: "grovel", chinese_answer: "卑躬屈膝", chinese_romanization: "bēigōngqūxī" },
                { option: "C", answer: "jump", chinese_answer: "跳", chinese_romanization: "tiào" },
                { option: "D", answer: "run", chinese_answer: "跑", chinese_romanization: "pǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grovel' means to lie or crawl abjectly on the ground with one's face downward, often to beg for forgiveness or favor." +
                "<br><br>" +
                "(A) 'stand' means to be in an upright position on the feet." +
                "<br><br>" +
                "(C) 'jump' means to push oneself off a surface and into the air by using the muscles in one's legs and feet." +
                "<br><br>" +
                "(D) 'run' means to move at a speed faster than a walk.",
        chinese_explanation: "(B) '卑躬屈膝' 意味着俯卧或匍匐在地，脸朝下，通常是为了乞求原谅或恩惠。" +
                "<br><br>" +
                "(A) '站' 意味着站立。" +
                "<br><br>" +
                "(C) '跳' 意味着用腿和脚的肌肉把自己从地面推离并进入空中。" +
                "<br><br>" +
                "(D) '跑' 意味着以比走路更快的速度移动。"
    },
    {
        id: 8,
    question: "The two executives __________ to embezzle funds from the company.",
    chinese_question: "两位高管__________挪用公司的资金。",
    answers: [
        { option: "A", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
        { option: "B", answer: "admired", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "C", answer: "connived", chinese_answer: "密谋", chinese_romanization: "mìmóu" },
        { option: "D", answer: "revealed", chinese_answer: "揭示", chinese_romanization: "jiēshì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'connived' means secretly allowed (something considered immoral, illegal, wrong, or harmful) to occur." +
        "<br><br>" +
        "(A) 'opposed' means actively resisted or refused to comply with." +
        "<br><br>" +
        "(B) 'admired' means regarded (an object, quality, or person) with respect or warm approval." +
        "<br><br>" +
        "(D) 'revealed' means made (previously unknown or secret information) known to others.",
    chinese_explanation: "(C) '密谋'一词意味着秘密允许（被认为是不道德、非法、错误或有害的事情）发生。" +
        "<br><br>" +
        "(A) '反对' 意味着积极抵制或拒绝遵守。" +
        "<br><br>" +
        "(B) '钦佩' 意味着以尊敬或温暖的赞许看待（物品、品质或人）。" +
        "<br><br>" +
        "(D) '揭示' 意味着将（先前未知或秘密的信息）公之于众。"
    },
    {
        id: 9,
    question: "The director hopes to __________ interest in the classic play with a modern adaptation.",
    chinese_question: "导演希望通过现代改编来 __________ 对经典戏剧的兴趣。",
    answers: [
        { option: "A", answer: "revive", chinese_answer: "重振", chinese_romanization: "chóngzhèn" },
        { option: "B", answer: "suppress", chinese_answer: "压制", chinese_romanization: "yāzhì" },
        { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'revive' means to restore to life or consciousness." +
        "<br><br>" +
        "(B) 'suppress' means to put an end to forcibly." +
        "<br><br>" +
        "(C) 'diminish' means to make or become less." +
        "<br><br>" +
        "(D) 'conceal' means to keep from sight; hide.",
    chinese_explanation: "(A) '重振' 意味着恢复生机或意识。" +
        "<br><br>" +
        "(B) '压制' 意味着强制终止。" +
        "<br><br>" +
        "(C) '减少' 意味着使变少或变少。" +
        "<br><br>" +
        "(D) '隐藏' 意味着不让被看到；隐藏。"
    },
    {
        id: 10,
        question: "The sudden turn of events __________ everyone at the meeting.",
        chinese_question: "突如其来的事件转变让会议上的每个人都感到 __________ 。",
        answers: [
                { option: "A", answer: "flabbergasted", chinese_answer: "震惊", chinese_romanization: "zhènjīng" },
                { option: "B", answer: "comforted", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "bored", chinese_answer: "厌倦", chinese_romanization: "yànjuàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'flabbergasted' means to surprise or shock someone greatly, used figuratively here." +
                "<br><br>" +
                "(B) 'comforted' means to ease the grief or distress of." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'bored' means to make someone feel weary and uninterested.",
        chinese_explanation: "(A) '震惊' 意味着让某人大吃一惊或震惊，这里是比喻用法。" +
                "<br><br>" +
                "(B) '安慰' 意味着缓解悲伤或痛苦。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '厌倦' 意味着使某人感到厌烦和无趣。"
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
