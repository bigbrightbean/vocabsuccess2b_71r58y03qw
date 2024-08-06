// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He chose to __________ an alibi to cover his tracks and avoid suspicion, so that no one would question his whereabouts.",
        chinese_question: "他选择 __________ 一个不在场证明来掩盖自己的行踪，并避免引起怀疑，这样就没有人会质疑他的行踪。",
        answers: [
            { option: "A", answer: "uncover", chinese_answer: "揭示", chinese_romanization: "jiēshì" },
            { option: "B", answer: "confess", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
            { option: "C", answer: "fabricate", chinese_answer: "编造", chinese_romanization: "biānzào" },
            { option: "D", answer: "reveal", chinese_answer: "揭露", chinese_romanization: "jiēlù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fabricate' means to invent or concoct something, typically with deceitful intent." +
            "<br><br>" +
            "(A) 'uncover' means to discover something previously secret or unknown." +
            "<br><br>" +
            "(B) 'confess' means to admit to something, typically with reluctance." +
            "<br><br>" +
            "(D) 'reveal' means to make known to others what was previously unknown or secret.",
        chinese_explanation: "(C) '编造' 意味着发明或编造某物，通常是出于欺骗目的。" +
            "<br><br>" +
            "(A) '揭示' 意味着发现以前秘密或未知的东西。" +
            "<br><br>" +
            "(B) '承认' 意味着承认某事，通常是勉强的。" +
            "<br><br>" +
            "(D) '揭露' 意味着让他人知道以前不知道的秘密或秘密。"
    },
    {
        id: 2,
    question: "Each department was asked to __________ resources for the upcoming event by contributing funds and materials to ensure everything runs smoothly.",
    chinese_question: "每个部门被要求通过贡献资金和材料来为即将到来的活动 __________ 资源，以确保一切顺利进行。",
    answers: [
        { option: "A", answer: "allocate", chinese_answer: "分配", chinese_romanization: "fēnpèi" },
        { option: "B", answer: "waste", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
        { option: "C", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "hoard", chinese_answer: "囤积", chinese_romanization: "túnjī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'allocate' means to distribute resources or duties for a particular purpose." +
        "<br><br>" +
        "(B) 'waste' means to use or expend carelessly, extravagantly, or to no purpose." +
        "<br><br>" +
        "(C) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(D) 'hoard' means to accumulate money or valued objects and hide or store away.",
    chinese_explanation: "(A) '分配' 意味着为特定目的分配资源或职责。" +
        "<br><br>" +
        "(B) '浪费' 意味着不小心、奢侈或无目的地使用或消耗。" +
        "<br><br>" +
        "(C) '忽视' 意味着不注意；忽略。" +
        "<br><br>" +
        "(D) '囤积' 意味着积累金钱或有价值的物品并隐藏或储藏起来。"
    },
    {
        id: 3,
        question: "The newspaper editorial __________ the government's handling of the crisis with scathing remarks and accusations of incompetence.",
        chinese_question: "报纸社论以尖刻的言辞和无能的指责 __________ 政府对危机的处理。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "lambasted", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
            { option: "D", answer: "commended", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'lambasted' means to criticize someone harshly." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'supported' means to give assistance to." +
            "<br><br>" +
            "(D) 'commended' means to praise formally or officially.",
        chinese_explanation: "(C) '严厉批评' 意味着严厉地批评某人。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '支持' 意味着给予帮助。" +
            "<br><br>" +
            "(D) '表扬' 意味着正式或正式地表扬。"
    },
    {
        id: 4,
        question: "Her face would __________ in pain whenever she tried to move her injured leg.",
        chinese_question: "每当她试图移动受伤的腿时，她的脸就会因疼痛而 __________。",
        answers: [
                { option: "A", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
                { option: "B", answer: "contort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
                { option: "C", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
                { option: "D", answer: "soften", chinese_answer: "软化", chinese_romanization: "ruǎnhuà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contort' means to twist or bend out of its normal shape." +
                "<br><br>" +
                "(A) 'relax' means to make or become less tense or anxious." +
                "<br><br>" +
                "(C) 'smile' means to form one's features into a pleased or kind expression." +
                "<br><br>" +
                "(D) 'soften' means to make or become less hard or severe.",
        chinese_explanation: "(B) '扭曲' 意味着将某物扭曲或弯曲至其正常形状之外。" +
                "<br><br>" +
                "(A) '放松' 意味着使紧张或焦虑减轻。" +
                "<br><br>" +
                "(C) '微笑' 意味着使面部形成愉快或友善的表情。" +
                "<br><br>" +
                "(D) '软化' 意味着使某物变得不那么坚硬或不那么严厉。"
    },
    {
        id: 5,
        question: "His constant lies and deceit __________ his once honourable character, and left him with a reputation of dishonesty.",
        chinese_question: "他不断的谎言和欺骗 __________ 了他曾经光荣的性格，使他留下不诚实的名声。",
        answers: [
            { option: "A", answer: "improved", chinese_answer: "改善", chinese_romanization: "gǎishàn" },
            { option: "B", answer: "highlighted", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "D", answer: "sullied", chinese_answer: "玷污", chinese_romanization: "diànwū" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'sullied' means to damage the purity or integrity of; defile." +
            "<br><br>" +
            "(A) 'improved' means to make or become better." +
            "<br><br>" +
            "(B) 'highlighted' means to emphasize or make something prominent." +
            "<br><br>" +
            "(C) 'celebrated' means to acknowledge (a significant or happy day or event) with a social gathering or enjoyable activity.",
        chinese_explanation: "(D) '玷污' 意味着损害纯洁性或完整性；玷污。" +
            "<br><br>" +
            "(A) '改善' 意味着使更好或变得更好。" +
            "<br><br>" +
            "(B) '强调' 意味着强调或突出某事物。" +
            "<br><br>" +
            "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认（重要或快乐的日子或事件）。"
    },
    {
        id: 6,
    question: "The workshop offers a course on how to __________ chairs and sofas, teaching students the basics of fabric selection and padding.",
    chinese_question: "这间工作坊提供如何 __________ 椅子和沙发的课程，教学生选择面料和衬垫的基础知识。",
    answers: [
        { option: "A", answer: "repair", chinese_answer: "修理", chinese_romanization: "xiūlǐ" },
        { option: "B", answer: "upholster", chinese_answer: "装饰", chinese_romanization: "zhuāngshì" },
        { option: "C", answer: "paint", chinese_answer: "涂漆", chinese_romanization: "túqī" },
        { option: "D", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'upholster' means to provide furniture with a soft, padded covering." +
        "<br><br>" +
        "(A) 'repair' means to fix." +
        "<br><br>" +
        "(C) 'paint' means to apply color." +
        "<br><br>" +
        "(D) 'dismantle' means to take apart.",
    chinese_explanation: "(B) '装饰' 一词意味着为家具提供柔软的衬垫覆盖物。" +
        "<br><br>" +
        "(A) '修理' 意味着修复。" +
        "<br><br>" +
        "(C) '涂漆' 意味着涂色。" +
        "<br><br>" +
        "(D) '拆卸' 意味着拆开。"
    },
    {
        id: 7,
    question: "To __________ at the college, students must meet all the admission requirements and submit the necessary documentation.",
    chinese_question: "为了在大学 __________ ，学生必须满足所有入学要求并提交必要的文件。",
    answers: [
        { option: "A", answer: "graduate", chinese_answer: "毕业", chinese_romanization: "bìyè" },
        { option: "B", answer: "drop", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "C", answer: "matriculate", chinese_answer: "注册", chinese_romanization: "zhùcè" },
        { option: "D", answer: "skip", chinese_answer: "跳过", chinese_romanization: "tiàoguò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'matriculate' means to be enrolled at a college or university." +
        "<br><br>" +
        "(A) 'graduate' means to complete a course of study." +
        "<br><br>" +
        "(B) 'drop' means to abandon or discontinue." +
        "<br><br>" +
        "(D) 'skip' means to omit or not attend.",
    chinese_explanation: "(C) '注册' 意味着被大学或学院录取。" +
        "<br><br>" +
        "(A) '毕业' 意味着完成学业。" +
        "<br><br>" +
        "(B) '放弃' 意味着放弃或中断。" +
        "<br><br>" +
        "(D) '跳过' 意味着省略或不参加。"
    },
    {
        id: 8,
    question: "The public was __________ with the young pop star, buying all her albums and attending every concert.",
    chinese_question: "公众对这位年轻的流行歌星 __________，购买了她的所有专辑，并参加了每场音乐会。",
    answers: [
        { option: "A", answer: "indifferent", chinese_answer: "无动于衷", chinese_romanization: "wúdòngyúzhōng" },
        { option: "B", answer: "infatuated", chinese_answer: "迷恋", chinese_romanization: "míliàn" },
        { option: "C", answer: "repelled", chinese_answer: "排斥", chinese_romanization: "páichì" },
        { option: "D", answer: "bored", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'infatuated' figuratively means to be inspired with an intense but short-lived passion or admiration." +
        "<br><br>" +
        "(A) 'indifferent' means having no particular interest or sympathy." +
        "<br><br>" +
        "(C) 'repelled' means to drive or force back." +
        "<br><br>" +
        "(D) 'bored' means to feel weary and uninterested.",
    chinese_explanation: "(B) '迷恋' 一词在比喻上意味着受到强烈但短暂的激情或钦佩的激励。" +
        "<br><br>" +
        "(A) '无动于衷' 意味着没有特别的兴趣或同情。" +
        "<br><br>" +
        "(C) '排斥' 意味着驱逐或迫使回去。" +
        "<br><br>" +
        "(D) '无聊' 意味着感到厌倦和没有兴趣。"
    },
    {
        id: 9,
        question: "They __________ their teamwork through trust-building exercises and open communication.",
        chinese_question: "他们通过建立信任的练习和开放的沟通 __________ 了团队合作。",
        answers: [
                { option: "A", answer: "damaged", chinese_answer: "损害", chinese_romanization: "sǔnhài" },
                { option: "B", answer: "honed", chinese_answer: "磨炼", chinese_romanization: "móliàn" },
                { option: "C", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'honed' used figuratively means to refine or perfect teamwork through practice and effort." +
                "<br><br>" +
                "(A) 'damaged' means to inflict physical harm on something." +
                "<br><br>" +
                "(C) 'neglected' means to fail to care for properly." +
                "<br><br>" +
                "(D) 'criticized' means to indicate the faults of someone or something in a disapproving way.",
        chinese_explanation: "(B) '磨炼' 在比喻意义上指通过实践和努力改进或完善团队合作。" +
                "<br><br>" +
                "(A) '损害' 意味着对某物造成物理伤害。" +
                "<br><br>" +
                "(C) '忽视' 意味着未能妥善照顾。" +
                "<br><br>" +
                "(D) '批评' 意味着以不赞成的方式指出某人或某事的缺点。"
    },
    {
        id: 10,
    question: "She did not __________ her criticism, directly addressing the flaws she observed.",
    chinese_question: "她没有 __________ 她的批评，直接指出了她所观察到的缺陷。",
    answers: [
        { option: "A", answer: "mince", chinese_answer: "婉转", chinese_romanization: "wǎnzhuǎn" },
        { option: "B", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" },
        { option: "C", answer: "mitigate", chinese_answer: "缓和", chinese_romanization: "huǎnhé" },
        { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'mince' figuratively means to speak indirectly or with hesitation." +
        "<br><br>" +
        "(B) 'amplify' means to increase in size or effect." +
        "<br><br>" +
        "(C) 'mitigate' means to make less severe." +
        "<br><br>" +
        "(D) 'praise' means to express approval.",
    chinese_explanation: "(A) '婉转' 一词在比喻上意味着间接或犹豫地说话。" +
        "<br><br>" +
        "(B) '放大' 意味着增加大小或效果。" +
        "<br><br>" +
        "(C) '缓和' 意味着使之不那么严重。" +
        "<br><br>" +
        "(D) '赞美' 意味着表达赞同。"
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
