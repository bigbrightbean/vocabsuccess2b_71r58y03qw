// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The contractor’s team __________ the renovation, resulting in costly repairs.",
    chinese_question: "承包商的团队 __________ 了装修工作，导致了昂贵的维修。",
    answers: [
        { option: "A", answer: "bungled", chinese_answer: "搞砸", chinese_romanization: "gǎo zá" },
        { option: "B", answer: "perfected", chinese_answer: "完善", chinese_romanization: "wánshàn" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "expedited", chinese_answer: "加快", chinese_romanization: "jiākuài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'bungled' means to carry out a task clumsily or incompetently." +
        "<br><br>" +
        "(B) 'perfected' means to make something completely free from faults or defects." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'expedited' means to make an action or process happen sooner or be accomplished more quickly.",
    chinese_explanation: "(A) '搞砸' 意味着笨拙或无能地完成一项任务。" +
        "<br><br>" +
        "(B) '完善' 意味着使某物完全没有错误或缺陷。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '加快' 意味着使某行动或过程更快发生或完成。"
    },
    {
        id: 2,
    question: "The news network aims to __________ accurate and unbiased information to its viewers.",
    chinese_question: "新闻网络旨在向观众 __________ 准确和公正的信息。",
    answers: [
        { option: "A", answer: "distort", chinese_answer: "歪曲", chinese_romanization: "wāiqū" },
        { option: "B", answer: "purvey", chinese_answer: "传播", chinese_romanization: "chuánbō" },
        { option: "C", answer: "retract", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
        { option: "D", answer: "obscure", chinese_answer: "遮掩", chinese_romanization: "zhēyǎn" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'purvey' means to supply or spread information or ideas." +
        "<br><br>" +
        "(A) 'distort' means to give a misleading or false account." +
        "<br><br>" +
        "(C) 'retract' means to withdraw or go back on a promise or statement." +
        "<br><br>" +
        "(D) 'obscure' means to keep from being seen.",
    chinese_explanation: "(B) '传播' 意味着提供或传播信息或观点。" +
        "<br><br>" +
        "(A) '歪曲' 意味着给出误导或虚假的描述。" +
        "<br><br>" +
        "(C) '撤回' 意味着撤回或违背承诺或声明。" +
        "<br><br>" +
        "(D) '遮掩' 意味着防止被看到。"
    },
    {
        id: 3,
    question: "On social media, people often __________ others without knowing the full story, leading to unnecessary conflict.",
    chinese_question: "在社交媒体上，人们经常在不了解全貌的情况下 __________ 其他人，导致不必要的冲突。",
    answers: [
        { option: "A", answer: "uplift", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "vilify", chinese_answer: "诋毁", chinese_romanization: "dǐhuǐ" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'vilify' means to speak or write about in an abusively disparaging manner." +
        "<br><br>" +
        "(A) 'uplift' means to raise the level of something." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy event.",
    chinese_explanation: "(B) '诋毁' 意味着以辱骂性的贬低方式谈论或写作。" +
        "<br><br>" +
        "(A) '提升' 意味着提升某物的水平。" +
        "<br><br>" +
        "(C) '支持' 意味着承担某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '庆祝' 意味着承认重要或愉快的事件。"
    },
    {
        id: 4,
        question: "She tends to __________ her impulsive purchases by claiming they were necessary for her well-being.",
        chinese_question: "她倾向于通过声称这些冲动购买对她的健康是必要的来 __________ 。",
        answers: [
            { option: "A", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
            { option: "B", answer: "rationalize", chinese_answer: "合理化", chinese_romanization: "hélǐhuà" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "invalidate", chinese_answer: "否定", chinese_romanization: "fǒudìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rationalize' means to attempt to explain or justify behavior or an attitude with logical reasons, even if these are not appropriate." +
            "<br><br>" +
            "(A) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'invalidate' means to make an argument, statement, or theory unsound or erroneous.",
        chinese_explanation: "(B) '合理化' 意味着试图用合理的理由解释或证明行为或态度，即使这些理由并不合适。" +
            "<br><br>" +
            "(A) '批评' 意味着以不赞成的方式指出某人或某物的错误。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '否定' 意味着使论点、陈述或理论不健全或错误。"
    },
    {
        id: 5,
    question: "The repetitive noise from the construction site was enough to __________ anyone within earshot.",
    chinese_question: "建筑工地重复的噪音足以让任何在耳朵范围内的人感到 __________。",
    answers: [
        { option: "A", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
        { option: "B", answer: "madden", chinese_answer: "发狂", chinese_romanization: "fākuáng" },
        { option: "C", answer: "amuse", chinese_answer: "逗乐", chinese_romanization: "dòulè" },
        { option: "D", answer: "calm", chinese_answer: "冷静", chinese_romanization: "lěngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'madden' means to make someone very angry." +
        "<br><br>" +
        "(A) 'soothe' means to gently calm a person or their feelings." +
        "<br><br>" +
        "(C) 'amuse' means to cause someone to find something funny." +
        "<br><br>" +
        "(D) 'calm' means to make someone tranquil and quiet.",
    chinese_explanation: "(B) '发狂' 一词意味着使某人非常生气。" +
        "<br><br>" +
        "(A) '抚慰' 意味着轻轻地使人或他们的感情平静下来。" +
        "<br><br>" +
        "(C) '逗乐' 意味着使某人觉得某事有趣。" +
        "<br><br>" +
        "(D) '冷静' 意味着使某人平静和安静。"
    },
    {
        id: 6,
    question: "The family was devastated to find out that the contractor they hired had __________ them out of thousands of dollars.",
    chinese_question: "家人发现他们雇用的承包商 __________ 了他们数千美元，感到非常震惊。",
    answers: [
        { option: "A", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
        { option: "B", answer: "swindled", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "C", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "informed", chinese_answer: "告知", chinese_romanization: "gàozhī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'swindled' means to deceive someone in order to take their money or possessions." +
        "<br><br>" +
        "(A) 'assisted' means to help someone." +
        "<br><br>" +
        "(C) 'supported' means to bear all or part of the weight of something." +
        "<br><br>" +
        "(D) 'informed' means to give someone facts or information.",
    chinese_explanation: "(B) '欺骗' 意味着为了骗取某人的钱或财物而欺骗某人。" +
        "<br><br>" +
        "(A) '帮助' 意味着帮助某人。" +
        "<br><br>" +
        "(C) '支持' 意味着承担某物的全部或部分重量。" +
        "<br><br>" +
        "(D) '告知' 意味着给某人提供事实或信息。"
    },
    {
        id: 7,
        question: "Due to the budget cuts, the department was forced to __________ some of its responsibilities to other teams.",
        chinese_question: "由于预算削减，该部门被迫将一些职责 __________ 给其他团队。",
        answers: [
            { option: "A", answer: "relegate", chinese_answer: "降级", chinese_romanization: "jiàngjí" },
            { option: "B", answer: "promote", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "C", answer: "commend", chinese_answer: "表扬", chinese_romanization: "biǎoyáng" },
            { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'relegate' means to assign an inferior rank or position to someone or something." +
            "<br><br>" +
            "(B) 'promote' means to raise someone to a higher rank or position." +
            "<br><br>" +
            "(C) 'commend' means to praise formally or officially." +
            "<br><br>" +
            "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
        chinese_explanation: "(A) '降级'一词意味着将某人或某物分配到较低的级别或职位。" +
            "<br><br>" +
            "(B) '提升' 意味着将某人提升到更高的职位或级别。" +
            "<br><br>" +
            "(C) '表扬' 意味着正式或官方地赞美。" +
            "<br><br>" +
            "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 8,
    question: "The lecturer accused the students of simply __________ facts without engaging with the material.",
    chinese_question: "讲师指责学生只是 __________ 事实，而没有深入理解材料。",
    answers: [
        { option: "A", answer: "analyzing", chinese_answer: "分析", chinese_romanization: "fēnxī" },
        { option: "B", answer: "regurgitating", chinese_answer: "机械重复", chinese_romanization: "jīxiè chóngfù" },
        { option: "C", answer: "ignoring", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "synthesizing", chinese_answer: "综合", chinese_romanization: "zōnghé" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'regurgitating' means to repeat information without understanding or analyzing it." +
        "<br><br>" +
        "(A) 'analyzing' means to examine something in detail." +
        "<br><br>" +
        "(C) 'ignoring' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'synthesizing' means to combine different ideas or information to create something new.",
    chinese_explanation: "(B) '机械重复' 意味着重复信息而不理解或分析。" +
        "<br><br>" +
        "(A) '分析' 意味着详细地检查某事。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '综合' 意味着将不同的想法或信息结合起来创造新的东西。"
    },
    {
        id: 9,
    question: "Her attempts to __________ her emotions were futile; everyone could see how upset she was.",
    chinese_question: "她试图 __________ 自己情绪的努力是徒劳的；每个人都能看出她有多难过。",
    answers: [
        { option: "A", answer: "reveal", chinese_answer: "显示", chinese_romanization: "xiǎnshì" },
        { option: "B", answer: "muffle", chinese_answer: "抑制", chinese_romanization: "yìzhì" },
        { option: "C", answer: "express", chinese_answer: "表达", chinese_romanization: "biǎodá" },
        { option: "D", answer: "amplify", chinese_answer: "放大", chinese_romanization: "fàngdà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'muffle' figuratively means to suppress or hide." +
        "<br><br>" +
        "(A) 'reveal' means to show." +
        "<br><br>" +
        "(C) 'express' means to convey thoughts or feelings." +
        "<br><br>" +
        "(D) 'amplify' means to make louder.",
    chinese_explanation: "(B) '抑制' 一词在比喻上意味着压抑或隐藏。" +
        "<br><br>" +
        "(A) '显示' 意味着展示。" +
        "<br><br>" +
        "(C) '表达' 意味着传达想法或感受。" +
        "<br><br>" +
        "(D) '放大' 意味着使声音更大。"
    },
    {
        id: 10,
    question: "He was hesitant to __________ the issue of his overdue promotion with his boss, fearing it might lead to an uncomfortable conversation.",
    chinese_question: "他犹豫是否要和老板 __________ 自己迟来的晋升问题，担心这可能会导致一次尴尬的对话。",
    answers: [
        { option: "A", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "broach", chinese_answer: "提出", chinese_romanization: "tíchū" },
        { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
        { option: "D", answer: "conclude", chinese_answer: "结束", chinese_romanization: "jiéshù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'broach' means to raise a sensitive or difficult subject for discussion." +
        "<br><br>" +
        "(A) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'support' means to bear all or part of the weight; hold up." +
        "<br><br>" +
        "(D) 'conclude' means to bring something to an end.",
    chinese_explanation: "(B) '提出' 意味着提出一个敏感或困难的话题进行讨论。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '支持' 意味着承受全部或部分重量；支撑。" +
        "<br><br>" +
        "(D) '结束' 意味着使某事物结束。"
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
