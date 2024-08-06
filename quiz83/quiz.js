// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "His constant complaints began to __________ on everyone's patience.",
        chinese_question: "他不断的抱怨开始 __________ 每个人的耐心。",
        answers: [
                { option: "A", answer: "grate", chinese_answer: "刺激", chinese_romanization: "cìjī" },
                { option: "B", answer: "entertain", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'grate' means to irritate or annoy someone." +
                "<br><br>" +
                "(B) 'entertain' means to provide someone with amusement or enjoyment." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'soothe' means to gently calm someone.",
        chinese_explanation: "(A) '刺激' 意味着使某人烦躁或恼火。" +
                "<br><br>" +
                "(B) '娱乐' 意味着为某人提供娱乐或享受。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '安抚' 意味着温柔地安抚某人。"
    },
    {
        id: 2,
    question: "The comedian's jokes __________ the otherwise serious event.",
    chinese_question: "喜剧演员的笑话 __________ 了本来严肃的活动。",
    answers: [
        { option: "A", answer: "leavened", chinese_answer: "调剂", chinese_romanization: "tiáojì" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "diminished", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'leavened' means to permeate and modify or transform something for the better, used figuratively here." +
        "<br><br>" +
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
        "<br><br>" +
        "(D) 'diminished' means to make or become less.",
    chinese_explanation: "(A) '调剂' 意味着渗透和改变或改善某事物，这里是比喻用法。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
        "<br><br>" +
        "(D) '减少' 意味着使变少或变少。"
    },
    {
        id: 3,
        question: "The audience __________ the speaker when his microphone malfunctioned, showing no sympathy.",
        chinese_question: "当扬声器故障时，观众 __________ 演讲者，没有表现出同情。",
        answers: [
            { option: "A", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "C", answer: "applauded", chinese_answer: "鼓掌", chinese_romanization: "gǔzhǎng" },
            { option: "D", answer: "jeered", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'jeered' means to make rude and mocking remarks, typically in a loud voice, used figuratively here." +
            "<br><br>" +
            "(A) 'praised' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'assisted' means to help someone." +
            "<br><br>" +
            "(C) 'applauded' means to show approval or praise by clapping.",
        chinese_explanation: "(D) '嘲笑' 意味着大声发表粗鲁和嘲弄的言论，这里是比喻用法。" +
            "<br><br>" +
            "(A) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '帮助' 意味着帮助某人。" +
            "<br><br>" +
            "(C) '鼓掌' 意味着通过拍手表示赞同或称赞。"
    },
    {
        id: 4,
        question: "Her calm demeanour showed that she was not easily __________ by criticism, and that she could handle negative feedback gracefully.",
        chinese_question: "她冷静的态度表明她不容易被批评 __________，并且她能够优雅地处理负面反馈。",
        answers: [
                { option: "A", answer: "fazed", chinese_answer: "影响", chinese_romanization: "yǐngxiǎng" },
                { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "C", answer: "praised", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
                { option: "D", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fazed' means to disturb or disconcert someone." +
                "<br><br>" +
                "(B) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(C) 'praised' means to express warm approval or admiration." +
                "<br><br>" +
                "(D) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '影响' 意味着使某人不安或困扰。" +
                "<br><br>" +
                "(B) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(C) '表扬' 意味着表达热烈的赞同或钦佩。" +
                "<br><br>" +
                "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
        question: "The ancient ruins have __________ the test of time, standing for thousands of years.",
        chinese_question: "这些古老的遗迹 __________ 了时间的考验，已经屹立了几千年。",
        answers: [
            { option: "A", answer: "endured", chinese_answer: "经受住", chinese_romanization: "jīngshòuzhù" },
            { option: "B", answer: "collapsed", chinese_answer: "倒塌", chinese_romanization: "dǎotā" },
            { option: "C", answer: "vanished", chinese_answer: "消失", chinese_romanization: "xiāoshī" },
            { option: "D", answer: "deteriorated", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'endured' means to remain in existence; last." +
            "<br><br>" +
            "(B) 'collapsed' means to fall down or give way suddenly." +
            "<br><br>" +
            "(C) 'vanished' means to disappear suddenly and completely." +
            "<br><br>" +
            "(D) 'deteriorated' means to become progressively worse.",
        chinese_explanation: "(A) '经受住' 意味着继续存在；持续。" +
            "<br><br>" +
            "(B) '倒塌' 意味着突然倒下或坍塌。" +
            "<br><br>" +
            "(C) '消失' 意味着突然完全消失。" +
            "<br><br>" +
            "(D) '恶化' 意味着逐渐变得更糟。"
    },
    {
        id: 6,
        question: "The company plans to __________ its new product line at the upcoming tech conference.",
        chinese_question: "公司计划在即将举行的科技会议上 __________ 新产品线。",
        answers: [
            { option: "A", answer: "unveil", chinese_answer: "揭幕", chinese_romanization: "jiēmù" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" },
            { option: "D", answer: "disregard", chinese_answer: "无视", chinese_romanization: "wúshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'unveil' means to reveal or disclose something, especially something that has been kept secret." +
            "<br><br>" +
            "(B) 'conceal' means to keep something secret; prevent from being known or noticed." +
            "<br><br>" +
            "(C) 'obscure' means to keep from being seen; conceal." +
            "<br><br>" +
            "(D) 'disregard' means to pay no attention to; ignore.",
        chinese_explanation: "(A) '揭幕' 意味着揭示或公开某事，尤其是一直保密的事情。" +
            "<br><br>" +
            "(B) '隐藏' 意味着保密；防止被知道或注意到。" +
            "<br><br>" +
            "(C) '遮掩' 意味着遮挡视线；隐藏。" +
            "<br><br>" +
            "(D) '无视' 意味着不注意；忽视。"
    },
    {
        id: 7,
        question: "The government took steps to __________ public fears by providing clear and frequent updates about the situation.",
        chinese_question: "政府采取措施，通过提供明确和频繁的更新来 __________ 公众的恐惧。",
        answers: [
            { option: "A", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
            { option: "D", answer: "exacerbate", chinese_answer: "恶化", chinese_romanization: "èhuà" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'assuage' means to make an unpleasant feeling less intense." +
            "<br><br>" +
            "(A) 'escalate' means to increase rapidly." +
            "<br><br>" +
            "(B) 'conceal' means to keep from being seen; hide." +
            "<br><br>" +
            "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
        chinese_explanation: "(C) '缓解' 意味着减轻不愉快的感觉。" +
            "<br><br>" +
            "(A) '升级' 意味着迅速增加。" +
            "<br><br>" +
            "(B) '隐藏' 意味着防止被看到；隐藏。" +
            "<br><br>" +
            "(D) '恶化' 意味着使问题、糟糕的情况或消极情绪变得更糟。"
    },
    {
        id: 8,
    question: "The ranchers managed to __________ the cattle into the pen before the storm hit, ensuring their safety.",
    chinese_question: "牧场主们在暴风雨来临前设法把牛群 __________ 到围栏里，确保它们的安全。",
    answers: [
        { option: "A", answer: "corral", chinese_answer: "赶进", chinese_romanization: "gǎnjìn" },
        { option: "B", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" },
        { option: "C", answer: "scatter", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'corral' means gather together and confine (a group of people or things)." +
        "<br><br>" +
        "(B) 'release' means allow or enable to escape from confinement; set free." +
        "<br><br>" +
        "(C) 'scatter' means throw in various random directions." +
        "<br><br>" +
        "(D) 'ignore' means refuse to take notice of or acknowledge; disregard intentionally.",
    chinese_explanation: "(A) '赶进' 意味着把一群人或物聚集在一起并加以限制。" +
        "<br><br>" +
        "(B) '释放' 意味着允许或使其摆脱束缚；解放。" +
        "<br><br>" +
        "(C) '分散' 意味着朝各个随机方向投掷。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意或承认；故意无视。"
    },
    {
        id: 9,
    question: "When she realized she had lost her wallet, she began to __________ from panic.",
    chinese_question: "当她意识到钱包丢了时，她开始因恐慌而 __________ 。",
    answers: [
        { option: "A", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "B", answer: "hyperventilate", chinese_answer: "过度换气", chinese_romanization: "guòdù huànqì" },
        { option: "C", answer: "exhale", chinese_answer: "呼气", chinese_romanization: "hūqì" },
        { option: "D", answer: "whisper", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'hyperventilate' means to breathe at an abnormally rapid rate, especially as a result of panic or anxiety." +
        "<br><br>" +
        "(A) 'relax' means to become less tense." +
        "<br><br>" +
        "(C) 'exhale' means to breathe out." +
        "<br><br>" +
        "(D) 'whisper' means to speak very softly.",
    chinese_explanation: "B) '过度换气' 意味着以异常快速的速度呼吸，尤其是由于恐慌或焦虑。" +
        "<br><br>" +
        "(A) '放松' 意味着变得不那么紧张。" +
        "<br><br>" +
        "(C) '呼气' 意味着呼气。" +
        "<br><br>" +
        "(D) '低声说' 意味着非常轻声地说话。"
    },
    {
        id: 10,
    question: "She found it difficult to __________ the urge to check her phone during the meeting.",
    chinese_question: "她发现很难 __________ 在会议期间查看手机的冲动。",
    answers: [
        { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
        { option: "B", answer: "follow", chinese_answer: "跟随", chinese_romanization: "gēnsuí" },
        { option: "C", answer: "fulfill", chinese_answer: "完成", chinese_romanization: "wánchéng" },
        { option: "D", answer: "allow", chinese_answer: "允许", chinese_romanization: "yǔnxǔ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'resist' means to withstand the action or effect of." +
        "<br><br>" +
        "(B) 'follow' means to go or come after a person or thing proceeding ahead." +
        "<br><br>" +
        "(C) 'fulfill' means to bring to completion or reality." +
        "<br><br>" +
        "(D) 'allow' means to give permission for.",
    chinese_explanation: "(A) '抵抗' 意味着经受住某事的作用或影响。" +
        "<br><br>" +
        "(B) '跟随' 意味着在一个人或事物之后行走或到来。" +
        "<br><br>" +
        "(C) '完成' 意味着实现或现实。" +
        "<br><br>" +
        "(D) '允许' 意味着给予许可。"
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
