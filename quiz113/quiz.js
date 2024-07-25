// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The report __________ the challenges the company faces in the coming years.",
        chinese_question: "该报告 __________ 了公司未来几年面临的挑战。",
        answers: [
            { option: "A", answer: "downplays", chinese_answer: "淡化", chinese_romanization: "dànhuà" },
            { option: "B", answer: "underscores", chinese_answer: "强调", chinese_romanization: "qiángdiào" },
            { option: "C", answer: "neglects", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "obscures", chinese_answer: "掩盖", chinese_romanization: "yǎngài" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'underscores' means to emphasize or highlight the importance of something." +
            "<br><br>" +
            "(A) 'downplays' means to make something appear less important than it really is." +
            "<br><br>" +
            "(C) 'neglects' means to fail to care for properly." +
            "<br><br>" +
            "(D) 'obscures' means to keep from being seen; conceal.",
        chinese_explanation: "(B) '强调'一词意味着强调或突出某事的重要性。" +
            "<br><br>" +
            "(A) '淡化' 意味着使某事显得不那么重要。" +
            "<br><br>" +
            "(C) '忽视' 意味着未能妥善照顾。" +
            "<br><br>" +
            "(D) '掩盖' 意味着防止被看到；隐藏。"
    },
    {
        id: 2,
        question: "The team worked together to __________ a solution to the complex problem.",
        chinese_question: "团队共同努力 __________ 出一个解决复杂问题的方案。",
        answers: [
            { option: "A", answer: "devise", chinese_answer: "设计", chinese_romanization: "shèjì" },
            { option: "B", answer: "destroy", chinese_answer: "破坏", chinese_romanization: "pòhuài" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devise' figuratively means to plan or invent (a complex procedure, system, or mechanism) by careful thought." +
            "<br><br>" +
            "(B) 'destroy' means to end the existence of (something) by damaging or attacking it." +
            "<br><br>" +
            "(C) 'delay' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(A) '设计' 在此语境下比喻通过仔细思考来计划或发明（复杂的程序、系统或机制）。" +
            "<br><br>" +
            "(B) '破坏' 意味着通过破坏或攻击来终结（某物）的存在。" +
            "<br><br>" +
            "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 3,
        question: "Starting a business __________ taking financial risks and working long hours.",
        chinese_question: "创业 __________ 承担财务风险和长时间工作。",
        answers: [
            { option: "A", answer: "avoids", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "B", answer: "entails", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "C", answer: "simplifies", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "D", answer: "excludes", chinese_answer: "排除", chinese_romanization: "páichú" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'entails' means to involve something as a necessary or inevitable part or consequence." +
            "<br><br>" +
            "(A) 'avoids' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(C) 'simplifies' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(D) 'excludes' means to deny someone access to or bar someone from a place, group, or privilege.",
        chinese_explanation: "(B) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
            "<br><br>" +
            "(A) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(C) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(D) '排除' 意味着拒绝某人进入某个地方、群体或特权。"
    },
    {
        id: 4,
        question: "The professor asked the students to __________ the main points of the lecture.",
        chinese_question: "教授要求学生 __________ 讲座的要点。",
        answers: [
            { option: "A", answer: "enumerate", chinese_answer: "列举", chinese_romanization: "lièjǔ" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "summarize", chinese_answer: "总结", chinese_romanization: "zǒngjié" },
            { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enumerate' means to mention (a number of things) one by one." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'summarize' means to give a brief statement of the main points of something." +
            "<br><br>" +
            "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '列举' 意味着一一提到（若干事情）。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '总结' 意味着对某事的要点进行简要陈述。" +
            "<br><br>" +
            "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 5,
        question: "She didn't want to __________ his cooking, but she felt the need to offer some suggestions for improvement.",
        chinese_question: "她不想 __________ 他的烹饪，但她觉得有必要提出一些改进建议。",
        answers: [
            { option: "A", answer: "disparage", chinese_answer: "贬低", chinese_romanization: "biǎndī" },
            { option: "B", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparage' means to regard or represent as being of little worth." +
            "<br><br>" +
            "(B) 'praise' means to express warm approval or admiration of." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'support' means to give assistance to.",
        chinese_explanation: "(A) '贬低' 意味着认为或表现出某事物没有价值。" +
            "<br><br>" +
            "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '支持' 意味着给予帮助。"
    },
    {
        id: 6,
    question: "Even though he worked hard, his efforts were __________ by those who didn't understand his vision.",
    chinese_question: "即使他努力工作，他的努力也被那些不理解他愿景的人 __________ 了。",
    answers: [
        { option: "A", answer: "appreciated", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
        { option: "B", answer: "derided", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
        { option: "C", answer: "acknowledged", chinese_answer: "承认", chinese_romanization: "chéngrèn" },
        { option: "D", answer: "supported", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'derided' means to express contempt for; ridicule." +
        "<br><br>" +
        "(A) 'appreciated' means to recognize the full worth of." +
        "<br><br>" +
        "(C) 'acknowledged' means to accept or admit the existence or truth of." +
        "<br><br>" +
        "(D) 'supported' means to bear all or part of the weight of something.",
    chinese_explanation: "(B) '嘲笑' 意味着表达蔑视；嘲弄。" +
        "<br><br>" +
        "(A) '欣赏' 意味着认识到某物的全部价值。" +
        "<br><br>" +
        "(C) '承认' 意味着接受或承认某物的存在或真实性。" +
        "<br><br>" +
        "(D) '支持' 意味着承担某物的全部或部分重量。"
    },
    {
        id: 7,
        question: "The captivating novel __________ her, and she couldn't put it down until she finished it.",
        chinese_question: "这部引人入胜的小说 __________ 了她，她直到看完才舍得放下。",
        answers: [
                { option: "A", answer: "enthralled", chinese_answer: "迷住了", chinese_romanization: "mízhùle" },
                { option: "B", answer: "repelled", chinese_answer: "排斥", chinese_romanization: "páichì" },
                { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "bored", chinese_answer: "使厌烦", chinese_romanization: "shǐ yànfán" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enthralled' means to capture the fascinated attention of someone." +
                "<br><br>" +
                "(B) 'repelled' means to drive or force back or away." +
                "<br><br>" +
                "(C) 'ignored' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'bored' means to make someone feel weary and uninterested.",
        chinese_explanation: "(A) '迷住了' 意味着吸引某人的注意力。" +
                "<br><br>" +
                "(B) '排斥' 意味着驱逐或逼退。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '使厌烦' 意味着使某人感到厌倦和无趣。"
    },
    {
        id: 8,
    question: "Realizing he had no other options, he finally __________ to the demands of his superiors.",
    chinese_question: "意识到别无选择，他最终 __________ 上司的要求。",
    answers: [
        { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "B", answer: "acquiesced", chinese_answer: "默许", chinese_romanization: "mòxǔ" },
        { option: "C", answer: "challenged", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
        { option: "D", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'acquiesced' means to accept something reluctantly but without protest." +
        "<br><br>" +
        "(A) 'ignored' means to refuse to take notice of." +
        "<br><br>" +
        "(C) 'challenged' means to dispute the truth or validity of." +
        "<br><br>" +
        "(D) 'dismissed' means to order or allow to leave; send away.",
    chinese_explanation: "(B) '默许' 意味着不情愿地接受某事但不抗议。" +
        "<br><br>" +
        "(A) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(C) '挑战' 意味着质疑某事的真实性或有效性。" +
        "<br><br>" +
        "(D) '解雇' 意味着命令或允许离开；送走。"
    },
    {
        id: 9,
        question: "His quick thinking and ability to __________ orders in a crisis saved many lives.",
        chinese_question: "他在危机中迅速思考和 __________ 命令的能力挽救了许多生命。",
        answers: [
            { option: "A", answer: "dispatch", chinese_answer: "派遣", chinese_romanization: "pàiqiǎn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "hinder", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dispatch' figuratively means to send off to a destination or for a purpose." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'delay' means to make (someone or something) late or slow." +
            "<br><br>" +
            "(D) 'hinder' means to create difficulties for someone or something, resulting in delay or obstruction.",
        chinese_explanation: "(A) '派遣' 在此语境下比喻发送到一个目的地或出于某种目的。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '延迟' 意味着使（某人或某事）变迟或变慢。" +
            "<br><br>" +
            "(D) '阻碍' 意味着制造困难，导致延误或障碍。"
    },
    {
        id: 10,
        question: "In times of trouble, people often __________ with those who are suffering to show they care.",
        chinese_question: "在困难时期，人们常常 __________ 那些正在受苦的人，以示关心。",
        answers: [
                { option: "A", answer: "commiserate", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
                { option: "B", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "compete", chinese_answer: "竞争", chinese_romanization: "jìngzhēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'commiserate' means to express or feel sympathy or pity, used figuratively here." +
                "<br><br>" +
                "(B) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'compete' means to strive to gain or win something by defeating or establishing superiority over others.",
        chinese_explanation: "(A) '同情' 意味着表达或感受到同情或怜悯，这里是比喻用法。" +
                "<br><br>" +
                "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '竞争' 意味着通过击败或建立优势来争取或赢得某物。"
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
