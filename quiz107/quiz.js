// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The politician was known for his ability to __________ complex issues in a way that everyone could understand.",
        chinese_question: "这位政治家以其能够以人人都能理解的方式 __________ 复杂问题而闻名。",
        answers: [
            { option: "A", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
            { option: "B", answer: "articulate", chinese_answer: "清楚地表达", chinese_romanization: "qīngchǔ de biǎodá" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'articulate' means to express an idea or feeling fluently and coherently." +
            "<br><br>" +
            "(A) 'confuse' means to make something more complex or less easy to understand." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'conceal' means to keep from being seen; hide.",
        chinese_explanation: "(B) '清楚地表达'一词意味着流利而连贯地表达一个想法或感觉。" +
            "<br><br>" +
            "(A) '混淆' 意味着使某事变得更复杂或不那么容易理解。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '隐藏' 意味着防止被看到；隐藏。"
    },
    {
        id: 2,
    question: "To __________ the community's fears, the mayor promised more police patrols in the area.",
    chinese_question: "为了 __________ 社区的恐惧，市长承诺在该地区增加警察巡逻。",
    answers: [
        { option: "A", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(B) 'aggravate' means to make a problem, injury, or offense worse or more serious." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'increase' means to make something greater in size, amount, or degree.",
    chinese_explanation: "(A) '缓解' 意味着使不愉快的感觉变得不那么强烈。" +
        "<br><br>" +
        "(B) '加剧' 意味着使问题、伤害或冒犯变得更严重或更严重。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '增加' 意味着使某物在大小、数量或程度上更大。"
    },
    {
        id: 3,
    question: "The librarian __________ the students to borrow up to three books at a time.",
    chinese_question: "图书管理员 __________ 学生一次借三本书。",
    answers: [
        { option: "A", answer: "prohibit", chinese_answer: "禁止", chinese_romanization: "jìnzhǐ" },
        { option: "B", answer: "permit", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" },
        { option: "C", answer: "restrict", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
        { option: "D", answer: "deny", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'permit' means to allow someone to do something." +
        "<br><br>" +
        "(A) 'prohibit' means to formally forbid something by law, rule, or other authority." +
        "<br><br>" +
        "(C) 'restrict' means to put a limit on; keep under control." +
        "<br><br>" +
        "(D) 'deny' means to refuse to give or grant something to someone.",
    chinese_explanation: "(B) '允许' 意味着允许某人做某事。" +
        "<br><br>" +
        "(A) '禁止' 意味着通过法律、规则或其他权威正式禁止某事。" +
        "<br><br>" +
        "(C) '限制' 意味着对某事设定限制；控制。" +
        "<br><br>" +
        "(D) '拒绝' 意味着拒绝给予或授予某人某事。"
    },
    {
        id: 4,
    question: "The hikers decided to __________ the mountain early in the morning to reach the summit by noon.",
    chinese_question: "登山者决定一大早 __________ 山，以便中午到达山顶。",
    answers: [
        { option: "A", answer: "descend", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "B", answer: "ascend", chinese_answer: "攀登", chinese_romanization: "pāndēng" },
        { option: "C", answer: "bypass", chinese_answer: "绕过", chinese_romanization: "rào guò" },
        { option: "D", answer: "delay", chinese_answer: "推迟", chinese_romanization: "tuīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ascend' means to go up or climb." +
        "<br><br>" +
        "(A) 'descend' means to move or fall downward." +
        "<br><br>" +
        "(C) 'bypass' means to go around or avoid." +
        "<br><br>" +
        "(D) 'delay' means to make someone or something late or slow.",
    chinese_explanation: "(B) '攀登' 意味着上升或攀登。" +
        "<br><br>" +
        "(A) '下降' 意味着向下移动或掉落。" +
        "<br><br>" +
        "(C) '绕过' 意味着绕行或避免。" +
        "<br><br>" +
        "(D) '推迟' 意味着使某人或某事迟到或缓慢。"
    },
    {
        id: 5,
    question: "After the unpopular decision was announced, the CEO was __________ by employees who felt betrayed.",
    chinese_question: "在宣布不受欢迎的决定后，员工们对首席执行官进行了 __________，他们感到被背叛了。",
    answers: [
        { option: "A", answer: "applauded", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
        { option: "B", answer: "reviled", chinese_answer: "痛骂", chinese_romanization: "tòng mà" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reviled' means to criticize in an abusive or angrily insulting manner." +
        "<br><br>" +
        "(A) ‘applauded’ means to show approval or praise." +
        "<br><br>" +
        "(C) ‘supported’ means to bear all or part of the weight of." +
        "<br><br>" +
        "(D) ‘encouraged’ means to give support, confidence, or hope to.",
    chinese_explanation: "(B) ‘痛骂’ 一词意味着以辱骂或愤怒的方式批评。" +
        "<br><br>" +
        "(A) ‘鼓掌’ 意味着表示认可或赞扬。" +
        "<br><br>" +
        "(C) ‘支持’ 意味着承受全部或部分重量。" +
        "<br><br>" +
        "(D) ‘鼓励’ 意味着给予支持、信心或希望。"
    },
    {
        id: 6,
    question: "Many people __________ the decline of traditional values in modern society.",
    chinese_question: "许多人 __________ 现代社会传统价值观的衰退。",
    answers: [
        { option: "A", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "B", answer: "bemoan", chinese_answer: "哀叹", chinese_romanization: "āitàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'bemoan' means to express discontent or sorrow over something." +
        "<br><br>" +
        "(A) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'praise' means to express warm approval or admiration.",
    chinese_explanation: "(B) '哀叹' 意味着对某事表示不满或悲伤。" +
        "<br><br>" +
        "(A) '庆祝' 意味着通过社交聚会或愉快的活动来纪念一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '赞美' 意味着表达热烈的赞同或钦佩。"
    },
    {
        id: 7,
        question: "Her kind words seemed to __________ a sense of calm over the entire room.",
        chinese_question: "她温柔的话语似乎 __________ 了整个房间的平静感。",
        answers: [
            { option: "A", answer: "emit", chinese_answer: "散发", chinese_romanization: "sànfā" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" },
            { option: "D", answer: "hide", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emit' figuratively means to produce and discharge (something, especially gas or radiation)." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'confuse' means to make (someone) unable to think clearly." +
            "<br><br>" +
            "(D) 'hide' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '散发' 在此语境下比喻产生并释放（某物，尤其是气体或辐射）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '迷惑' 意味着使某人无法清晰思考。" +
            "<br><br>" +
            "(D) '隐藏' 意味着使看不见；隐藏。"
    },
    {
        id: 8,
    question: "Scientists can __________ the effects of climate change based on current data and models.",
    chinese_question: "科学家可以根据当前数据和模型 __________ 气候变化的影响。",
    answers: [
        { option: "A", answer: "predict", chinese_answer: "预测", chinese_romanization: "yùcè" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "confuse", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" },
        { option: "D", answer: "prevent", chinese_answer: "预防", chinese_romanization: "yùfáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predict' means to say what will happen in the future." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'confuse' means to make someone unable to think clearly." +
        "<br><br>" +
        "(D) 'prevent' means to stop something from happening or arising.",
    chinese_explanation: "(A) '预测' 意味着说出将来会发生什么。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '混淆' 意味着使某人无法清晰思考。" +
        "<br><br>" +
        "(D) '预防' 意味着阻止某事发生或出现。"
    },
    {
        id: 9,
    question: "She __________ in a volunteer program to help rebuild homes after the hurricane.",
    chinese_question: "飓风过后，她 __________ 参加了一个志愿者项目，帮助重建家园。",
    answers: [
        { option: "A", answer: "enlisted", chinese_answer: "报名", chinese_romanization: "bàomíng" },
        { option: "B", answer: "avoided", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "C", answer: "neglected", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "opposed", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'enlisted' means enrolled or signed up for service." +
        "<br><br>" +
        "(B) 'avoided' means kept away from or stopped oneself from doing something." +
        "<br><br>" +
        "(C) 'neglected' means failed to care for properly." +
        "<br><br>" +
        "(D) 'opposed' means actively resisted or disagreed with.",
    chinese_explanation: "(A) '报名' 意味着报名或签约参加服务。" +
        "<br><br>" +
        "(B) '避免' 意味着远离或阻止自己做某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着未能妥善照顾。" +
        "<br><br>" +
        "(D) '反对' 意味着积极反对或不同意。"
    },
    {
        id: 10,
                question: "The CEO had to __________ his earlier statements after they caused a public outcry.",
                chinese_question: "在引起公众抗议后，CEO 不得不 __________ 早先的声明。",
                answers: [
                    { option: "A", answer: "reaffirm", chinese_answer: "重申", chinese_romanization: "chóngshēn" },
                    { option: "B", answer: "disavow", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
                    { option: "C", answer: "repeat", chinese_answer: "重复", chinese_romanization: "chóngfù" },
                    { option: "D", answer: "highlight", chinese_answer: "强调", chinese_romanization: "qiángdiào" }
                ],
                correctAnswer: "B",
                explanation: "(B) 'disavow' means to deny any responsibility or support for something." +
                    "<br><br>" +
                    "(A) 'reaffirm' means to state again as a fact; assert again strongly." +
                    "<br><br>" +
                    "(C) 'repeat' means to say again something one has already said." +
                    "<br><br>" +
                    "(D) 'highlight' means to emphasize or make prominent.",
                chinese_explanation: "(B) '否认'一词意味着否认对某事的任何责任或支持。" +
                    "<br><br>" +
                    "(A) '重申' 意味着再次声明为事实；再次强烈断言。" +
                    "<br><br>" +
                    "(C) '重复' 意味着再次说某人已经说过的话。" +
                    "<br><br>" +
                    "(D) '强调' 意味着强调或突出。"
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
