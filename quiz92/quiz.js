// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The government must __________ with rising unemployment rates.",
        chinese_question: "政府必须 __________ 不断上升的失业率。",
        answers: [
                { option: "A", answer: "grapple", chinese_answer: "努力应对", chinese_romanization: "nǔlì yìngduì" },
                { option: "B", answer: "enjoy", chinese_answer: "享受", chinese_romanization: "xiǎngshòu" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grapple' means to struggle or work hard to deal with or overcome something." +
                "<br><br>" +
                "(B) 'enjoy' means to take delight or pleasure in something." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'worsen' means to become or make something worse.",
        chinese_explanation: "(A) '努力应对' 意味着努力处理或克服某事。" +
                "<br><br>" +
                "(B) '享受' 意味着对某事感到高兴或愉快。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '恶化' 意味着变得更糟或使某事变得更糟。"
    },
    {
        id: 2,
    question: "The teacher's calm demeanor helped to __________ the students' nerves before the big exam.",
    chinese_question: "老师平静的态度有助于 __________ 学生在大考前的紧张情绪。",
    answers: [
        { option: "A", answer: "agitate", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "B", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(A) 'agitate' means to make someone troubled or nervous." +
        "<br><br>" +
        "(C) 'exacerbate' means to make a problem, bad situation, or negative feeling worse." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '缓解' 意味着减轻不愉快的感觉。" +
        "<br><br>" +
        "(A) '激怒' 意味着使某人烦恼或紧张。" +
        "<br><br>" +
        "(C) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 3,
    question: "The boutique is renowned for __________ high-quality handmade jewelry.",
    chinese_question: "这家精品店以 __________ 高质量的手工珠宝而闻名。",
    answers: [
        { option: "A", answer: "concealing", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "purveying", chinese_answer: "供应", chinese_romanization: "gōngyìng" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "destroying", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'purveying' means to supply goods, especially food or provisions." +
        "<br><br>" +
        "(A) 'concealing' means to keep something hidden." +
        "<br><br>" +
        "(C) 'ignoring' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'destroying' means to put an end to the existence of something.",
    chinese_explanation: "(B) '供应' 意味着供应货物，尤其是食品或食物。" +
        "<br><br>" +
        "(A) '隐藏' 意味着保持某物隐藏。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '破坏' 意味着结束某物的存在。"
    },
    {
        id: 4,
    question: "She read every book she could find on the subject to __________ her curiosity.",
    chinese_question: "她读了能找到的所有关于该主题的书，以 __________ 她的好奇心。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "satiate", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'satiate' means to satisfy fully." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(C) 'diminish' means to make or become less." +
        "<br><br>" +
        "(D) 'avoid' means to keep away from.",
    chinese_explanation: "(B) '满足' 意味着完全满足。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(C) '减少' 意味着使某物变少。" +
        "<br><br>" +
        "(D) '避免' 意味着避开。"
    },
    {
        id: 5,
    question: "The journalist __________ the politician's speech, pointing out numerous inaccuracies and contradictions.",
    chinese_question: "记者 __________ 了这位政治家的演讲，指出了许多不准确和矛盾之处。",
    answers: [
        { option: "A", answer: "applauded", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
        { option: "B", answer: "lambasted", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praised", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'lambasted' used figuratively means to criticize someone harshly." +
        "<br><br>" +
        "(A) 'applauded' means to show approval or praise by clapping." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praised' means to express warm approval or admiration.",
    chinese_explanation: "(B) '严厉批评' 在比喻意义上指严厉地批评某人。" +
        "<br><br>" +
        "(A) '鼓掌' 意味着通过拍手表示认可或赞美。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的认可或钦佩。"
    },
    {
        id: 6,
        question: "He worked hard to __________ the support of his colleagues for the new project.",
        chinese_question: "他努力工作以 __________ 同事们对新项目的支持。",
        answers: [
                { option: "A", answer: "garner", chinese_answer: "获得", chinese_romanization: "huòdé" },
                { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
                { option: "D", answer: "disturb", chinese_answer: "打扰", chinese_romanization: "dǎrǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'garner' means to gather or collect something, especially information or approval." +
                "<br><br>" +
                "(B) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'reject' means to dismiss or refuse something." +
                "<br><br>" +
                "(D) 'disturb' means to interrupt the peaceful or quiet condition.",
        chinese_explanation: "(A) '获得' 意味着收集或获取某物，尤其是信息或支持。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '拒绝' 意味着驳回或拒绝某事物。" +
                "<br><br>" +
                "(D) '打扰' 意味着打断平静或安静的状态。"
    },
    {
        id: 7,
        question: "The championship trophy was __________ with the names of all the past winners.",
        chinese_question: "冠军奖杯上 __________ 了所有历届获胜者的名字。",
        answers: [
                { option: "A", answer: "emblazoned", chinese_answer: "醒目地刻有", chinese_romanization: "xǐngmù dì kèyǒu" },
                { option: "B", answer: "scratched", chinese_answer: "划伤", chinese_romanization: "huáshāng" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emblazoned' means to display a design prominently or vividly." +
                "<br><br>" +
                "(B) 'scratched' means to make small cuts or marks on a surface." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hidden' means to keep something out of sight.",
        chinese_explanation: "(A) '醒目地刻有' 意味着突出或生动地展示设计。" +
                "<br><br>" +
                "(B) '划伤' 意味着在表面上做出小的切割或标记。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '隐藏' 意味着保密或隐藏某物。"
    },
    {
        id: 8,
    question: "The salesman tried to __________ the customer into buying a more expensive model.",
    chinese_question: "销售员试图 __________ 顾客购买更贵的型号。",
    answers: [
        { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "cajole", chinese_answer: "劝诱", chinese_romanization: "quànyòu" },
        { option: "D", answer: "insult", chinese_answer: "侮辱", chinese_romanization: "wǔrǔ" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'cajole' means to persuade someone to do something by sustained coaxing or flattery." +
        "<br><br>" +
        "(A) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'insult' means to speak to or treat with disrespect or scornful abuse.",
    chinese_explanation: "(C) '劝诱' 意味着通过持续的劝说或奉承来让某人做某事。" +
        "<br><br>" +
        "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '侮辱' 意味着用不尊重或轻蔑的态度说话或对待。"
    },
    {
        id: 9,
    question: "Her journey from poverty to success __________ many people to never give up on their goals.",
    chinese_question: "她从贫困到成功的经历 __________ 了许多人永不放弃自己的目标。",
    answers: [
        { option: "A", answer: "demotivated", chinese_answer: "使失去动力", chinese_romanization: "shǐ shīqù dònglì" },
        { option: "B", answer: "inspired", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "C", answer: "confused", chinese_answer: "使困惑", chinese_romanization: "shǐ kùnhuò" },
        { option: "D", answer: "bored", chinese_answer: "使无聊", chinese_romanization: "shǐ wúliáo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'inspired' means to fill someone with the urge or ability to do or feel something, especially to do something creative." +
        "<br><br>" +
        "(A) 'demotivated' means to make someone less eager or willing to do something." +
        "<br><br>" +
        "(C) 'confused' means to make someone unable to think clearly or understand." +
        "<br><br>" +
        "(D) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity.",
    chinese_explanation: "(B) '激励' 意味着让某人有做某事的冲动或能力，特别是做一些创造性的事情。" +
        "<br><br>" +
        "(A) '使失去动力' 意味着使某人不再热心或愿意做某事。" +
        "<br><br>" +
        "(C) '使困惑' 意味着使某人无法清晰地思考或理解。" +
        "<br><br>" +
        "(D) '使无聊' 意味着因为无所事事或对当前活动缺乏兴趣而感到厌倦和不耐烦。"
    },
    {
        id: 10,
    question: "Her ability to __________ public speaking has made her a sought-after keynote speaker.",
    chinese_question: "她 __________ 演讲的能力使她成为备受追捧的主题演讲人。",
    answers: [
        { option: "A", answer: "master", chinese_answer: "精通", chinese_romanization: "jīngtōng" },
        { option: "B", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "C", answer: "misunderstand", chinese_answer: "误解", chinese_romanization: "wùjiě" },
        { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'master' means to become highly skilled or proficient in a particular area." +
        "<br><br>" +
        "(B) 'avoid' means to keep away from or stop oneself from doing something." +
        "<br><br>" +
        "(C) 'misunderstand' means to fail to interpret or understand something correctly." +
        "<br><br>" +
        "(D) 'neglect' means to fail to care for properly.",
    chinese_explanation: "(A) '精通' 意味着在某一特定领域变得非常熟练或精通。" +
        "<br><br>" +
        "(B) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(C) '误解' 意味着未能正确解释或理解某事。" +
        "<br><br>" +
        "(D) '忽视' 意味着未能适当照顾。"
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
