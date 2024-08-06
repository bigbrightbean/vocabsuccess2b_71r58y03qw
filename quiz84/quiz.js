// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team was not __________ by the early setbacks and continued to strive for victory.",
        chinese_question: "团队没有被早期的挫折 __________ ，继续努力争取胜利。",
        answers: [
                { option: "A", answer: "fazed", chinese_answer: "受到影响", chinese_romanization: "shòudào yǐngxiǎng" },
                { option: "B", answer: "encouraged", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "hindered", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fazed' means to disturb or disconcert someone, used figuratively here." +
                "<br><br>" +
                "(B) 'encouraged' means to give support, confidence, or hope to someone." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'hindered' means to create difficulties for someone or something.",
        chinese_explanation: "(A) '受到影响' 意味着使某人不安或困扰，这里是比喻用法。" +
                "<br><br>" +
                "(B) '鼓励' 意味着给予支持、信心或希望。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '阻碍' 意味着制造困难。"
    },
    {
        id: 2,
        question: "The company issued an apology to __________ the public outcry over the controversial advertisement.",
        chinese_question: "公司发表了道歉声明，以 __________ 公众对争议广告的强烈抗议。",
        answers: [
            { option: "A", answer: "inflame", chinese_answer: "激怒", chinese_romanization: "jīnù" },
            { option: "B", answer: "dismiss", chinese_answer: "驳回", chinese_romanization: "bóhuí" },
            { option: "C", answer: "aggravate", chinese_answer: "加剧", chinese_romanization: "jiājù" },
            { option: "D", answer: "placate", chinese_answer: "平息", chinese_romanization: "píngxī" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'placate' means to make someone less angry or hostile." +
            "<br><br>" +
            "(A) 'inflame' means to provoke or intensify strong feelings." +
            "<br><br>" +
            "(B) 'dismiss' means to order or allow to leave; send away." +
            "<br><br>" +
            "(C) 'aggravate' means to make a problem or offense worse or more serious.",
        chinese_explanation: "(D) '平息' 意味着使某人不再生气或敌对。" +
            "<br><br>" +
            "(A) '激怒' 意味着激起或加剧强烈的情感。" +
            "<br><br>" +
            "(B) '驳回' 意味着命令或允许离开；送走。" +
            "<br><br>" +
            "(C) '加剧' 意味着使问题或冒犯变得更糟或更严重。"
    },
    {
        id: 3,
        question: "A warm light seemed to __________ from the fireplace, creating a cozy atmosphere in the room.",
        chinese_question: "温暖的光芒似乎从壁炉中 __________ 出来，为房间营造出舒适的氛围。",
        answers: [
            { option: "A", answer: "emanate", chinese_answer: "散发", chinese_romanization: "sànfā" },
            { option: "B", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
            { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'emanate' means to issue or spread out from a source." +
            "<br><br>" +
            "(B) 'conceal' means to keep from being seen; hide." +
            "<br><br>" +
            "(C) 'diminish' means to make or become less." +
            "<br><br>" +
            "(D) 'obscure' means to keep from being seen; conceal.",
        chinese_explanation: "(A) '散发' 意味着从源头发出或散发。" +
            "<br><br>" +
            "(B) '隐藏' 意味着防止被看到；隐藏。" +
            "<br><br>" +
            "(C) '减少' 意味着减少或变少。" +
            "<br><br>" +
            "(D) '遮掩' 意味着防止被看到；隐藏。"
    },
    {
        id: 4,
    question: "As the investigation continued, it __________ that several employees were involved in the scheme.",
    chinese_question: "随着调查的进行，逐渐 __________ 多名员工参与了这个计划。",
    answers: [
        { option: "A", answer: "transpired", chinese_answer: "透露", chinese_romanization: "tòulù" },
        { option: "B", answer: "faded", chinese_answer: "褪色", chinese_romanization: "tuìsè" },
        { option: "C", answer: "remained", chinese_answer: "保持", chinese_romanization: "bǎochí" },
        { option: "D", answer: "confused", chinese_answer: "混淆", chinese_romanization: "hùnxiáo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'transpired' means to become known or revealed." +
        "<br><br>" +
        "(B) 'faded' means to lose brightness or color." +
        "<br><br>" +
        "(C) 'remained' means to stay in place." +
        "<br><br>" +
        "(D) 'confused' means to make unclear.",
    chinese_explanation: "(A) '透露' 一词意味着变得为人所知或被揭示。" +
        "<br><br>" +
        "(B) '褪色' 意味着失去亮度或颜色。" +
        "<br><br>" +
        "(C) '保持' 意味着保持原状。" +
        "<br><br>" +
        "(D) '混淆' 意味着使不清楚。"
    },
    {
        id: 5,
    question: "He decided to __________ the project after realizing it was no longer feasible.",
    chinese_question: "他意识到项目不再可行后，决定 __________ 这个项目。",
    answers: [
        { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "B", answer: "scuttle", chinese_answer: "终止", chinese_romanization: "zhōngzhǐ" },
        { option: "C", answer: "promote", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
        { option: "D", answer: "continue", chinese_answer: "继续", chinese_romanization: "jìxù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'scuttle' means to deliberately cause something to fail or end." +
        "<br><br>" +
        "(A) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(C) 'promote' means to further the progress of something." +
        "<br><br>" +
        "(D) 'continue' means to persist in an activity or process.",
    chinese_explanation: "(B) '终止' 意味着故意使某事失败或结束。" +
        "<br><br>" +
        "(A) '支持' 意味着承担某物的全部或部分重量。" +
        "<br><br>" +
        "(C) '推动' 意味着推进某事的进展。" +
        "<br><br>" +
        "(D) '继续' 意味着继续进行某项活动或过程。"
    },
    {
        id: 6,
        question: "She tried to __________ herself with the popular kids by dressing like them and mimicking their behavior.",
        chinese_question: "她通过穿得像他们一样并模仿他们的行为来 __________ 自己与受欢迎的孩子们的关系。",
        answers: [
                { option: "A", answer: "isolate", chinese_answer: "孤立", chinese_romanization: "gūlì" },
                { option: "B", answer: "ingratiate", chinese_answer: "讨好", chinese_romanization: "tǎohǎo" },
                { option: "C", answer: "avoid", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
                { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ingratiate' means to bring oneself into favor with someone by flattering or trying to please them." +
                "<br><br>" +
                "(A) 'isolate' means to cause a person or place to be or remain alone or apart from others." +
                "<br><br>" +
                "(C) 'avoid' means to keep away from or stop oneself from doing something." +
                "<br><br>" +
                "(D) 'oppose' means to disapprove of and attempt to prevent, especially by argument.",
        chinese_explanation: "(B) '讨好' 意味着通过奉承或试图取悦某人使自己受到某人的喜欢。" +
                "<br><br>" +
                "(A) '孤立' 意味着使一个人或地方处于或保持独自或与他人隔离。" +
                "<br><br>" +
                "(C) '避免' 意味着避开或阻止自己做某事。" +
                "<br><br>" +
                "(D) '反对' 意味着不赞成并试图阻止，尤其是通过争论."
    },
    {
        id: 7,
    question: "The idea of winning the lottery __________ him, even though he knew the odds were slim.",
    chinese_question: "赢得彩票的想法 __________ 他，尽管他知道中奖的几率很小。",
    answers: [
        { option: "A", answer: "deterred", chinese_answer: "阻止", chinese_romanization: "zǔzhǐ" },
        { option: "B", answer: "tantalized", chinese_answer: "诱惑", chinese_romanization: "yòuhuò" },
        { option: "C", answer: "satisfied", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
        { option: "D", answer: "calmed", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'tantalized' means to torment or tease someone with the sight or promise of something that is unobtainable." +
        "<br><br>" +
        "(A) 'deterred' means to discourage someone from doing something." +
        "<br><br>" +
        "(C) 'satisfied' means to meet the expectations, needs, or desires of someone." +
        "<br><br>" +
        "(D) 'calmed' means to make someone tranquil and quiet.",
    chinese_explanation: "(B) '诱惑' 意味着用无法得到的东西的景象或承诺来折磨或戏弄某人。" +
        "<br><br>" +
        "(A) '阻止' 意味着阻止某人做某事。" +
        "<br><br>" +
        "(C) '满足' 意味着满足某人的期望、需求或愿望。" +
        "<br><br>" +
        "(D) '平静' 意味着使某人安静和平静。"
    },
    {
        id: 8,
        question: "The children __________ through the house on Christmas morning, excited to open their presents.",
        chinese_question: "圣诞节早晨，孩子们兴奋地在房子里 __________，急切地想打开他们的礼物。",
        answers: [
            { option: "A", answer: "sulked", chinese_answer: "生闷气", chinese_romanization: "shēng mèn qì" },
            { option: "B", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "C", answer: "moped", chinese_answer: "闷闷不乐", chinese_romanization: "mènmènbùlè" },
            { option: "D", answer: "cavorted", chinese_answer: "欢跃", chinese_romanization: "huānyuè" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'cavorted' means to jump or dance around excitedly." +
            "<br><br>" +
            "(A) 'sulked' means to be silent, morose, and bad-tempered out of annoyance or disappointment." +
            "<br><br>" +
            "(B) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(C) 'moped' means to be dejected and apathetic.",
        chinese_explanation: "(D) '欢跃' 意味着兴奋地跳跃或舞蹈。" +
            "<br><br>" +
            "(A) '生闷气' 意味着因为恼怒或失望而沉默、阴郁和坏脾气。" +
            "<br><br>" +
            "(B) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
            "<br><br>" +
            "(C) '闷闷不乐' 意味着沮丧和冷漠。"
    },
    {
        id: 9,
    question: "When asked about his views, he could only __________ what he had heard on the news, without any personal insight.",
    chinese_question: "当被问及他的观点时，他只能 __________ 从新闻中听到的内容，而没有任何个人见解。",
    answers: [
        { option: "A", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "B", answer: "regurgitate", chinese_answer: "机械重复", chinese_romanization: "jīxiè chóngfù" },
        { option: "C", answer: "analyze", chinese_answer: "分析", chinese_romanization: "fēnxī" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'regurgitate' means to repeat information without understanding or adding original thoughts." +
        "<br><br>" +
        "(A) 'refute' means to prove a statement or theory to be wrong or false." +
        "<br><br>" +
        "(C) 'analyze' means to examine something in detail." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '机械重复' 意味着重复信息而不理解或添加原创思想。" +
        "<br><br>" +
        "(A) '反驳' 意味着证明某个陈述或理论是错误的或虚假的。" +
        "<br><br>" +
        "(C) '分析' 意味着详细地检查某事。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 10,
        question: "With laughter and tears in his eyes, he couldn't help but __________ at the absurdity of the situation.",
        chinese_question: "笑着，眼里含着泪水，他忍不住对这种荒谬的情况 __________。",
        answers: [
                { option: "A", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
                { option: "B", answer: "guffaw", chinese_answer: "哄笑", chinese_romanization: "hōngxiào" },
                { option: "C", answer: "sigh", chinese_answer: "叹息", chinese_romanization: "tànxī" },
                { option: "D", answer: "murmur", chinese_answer: "低声说", chinese_romanization: "dīshēng shuō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'guffaw' means a loud and boisterous laugh." +
                "<br><br>" +
                "(A) 'whisper' means to speak very softly using one's breath without one's vocal cords." +
                "<br><br>" +
                "(C) 'sigh' means to emit a long, deep, audible breath expressing sadness, relief, or weariness." +
                "<br><br>" +
                "(D) 'murmur' means to say something in a low, soft, or indistinct voice.",
        chinese_explanation: "(B) '哄笑' 意味着响亮而欢闹的笑声。" +
                "<br><br>" +
                "(A) '低语' 意味着用气音非常轻声地说话。" +
                "<br><br>" +
                "(C) '叹息' 意味着发出长而深的声音，表达悲伤、宽慰或疲倦。" +
                "<br><br>" +
                "(D) '低声说' 意味着用低沉、柔和或模糊的声音说话。"
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
