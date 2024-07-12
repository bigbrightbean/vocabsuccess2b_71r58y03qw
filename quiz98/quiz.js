// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "He feared that his actions would __________ the family's honour and reputation.",
    chinese_question: "他担心自己的行为会 __________ 家庭的荣誉和声誉。",
    answers: [
        { option: "A", answer: "elevate", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "sully", chinese_answer: "玷污", chinese_romanization: "diànwū" },
        { option: "C", answer: "preserve", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "D", answer: "honor", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'sully' means to damage the purity or integrity of; defile." +
        "<br><br>" +
        "(A) 'elevate' means to raise or lift to a higher position." +
        "<br><br>" +
        "(C) 'preserve' means to maintain something in its original or existing state." +
        "<br><br>" +
        "(D) 'honor' means to regard with great respect.",
    chinese_explanation: "(B) '玷污' 意味着损害纯洁性或完整性；玷污。" +
        "<br><br>" +
        "(A) '提升' 意味着提高到更高的位置。" +
        "<br><br>" +
        "(C) '保护' 意味着保持某物的原始或现有状态。" +
        "<br><br>" +
        "(D) '尊敬' 意味着非常尊重。"
    },
    {
        id: 2,
        question: "The timid student began to __________ in his seat when the teacher called on him unexpectedly.",
        chinese_question: "当老师突然叫他时，那个胆小的学生在座位上开始 __________ 。",
        answers: [
                { option: "A", answer: "cower", chinese_answer: "畏缩", chinese_romanization: "wèisuō" },
                { option: "B", answer: "rise", chinese_answer: "站起来", chinese_romanization: "zhàn qǐlái" },
                { option: "C", answer: "boast", chinese_answer: "吹嘘", chinese_romanization: "chuīxū" },
                { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cower' means to crouch down in fear, used figuratively here." +
                "<br><br>" +
                "(B) 'rise' means to move from a lower position to a higher one." +
                "<br><br>" +
                "(C) 'boast' means to talk with excessive pride and self-satisfaction about one's achievements, possessions, or abilities." +
                "<br><br>" +
                "(D) 'ignore' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(A) '畏缩' 意味着害怕地蜷缩下来，这里是比喻用法。" +
                "<br><br>" +
                "(B) '站起来' 意味着从低位移动到高位。" +
                "<br><br>" +
                "(C) '吹嘘' 意味着对自己的成就、财产或能力过度自豪和自满地谈论。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 3,
    question: "The con artist attempted to __________ the elderly couple into signing over their property.",
    chinese_question: "骗子试图 __________ 老年夫妇签署他们的财产。",
    answers: [
        { option: "A", answer: "beguile", chinese_answer: "欺骗", chinese_romanization: "qīpiàn" },
        { option: "B", answer: "protect", chinese_answer: "保护", chinese_romanization: "bǎohù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "enlighten", chinese_answer: "启迪", chinese_romanization: "qǐdí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'beguile' means to charm or enchant someone in a deceptive way." +
        "<br><br>" +
        "(B) 'protect' means to keep safe from harm or injury." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'enlighten' means to give someone greater knowledge and understanding about a subject or situation.",
    chinese_explanation: "(A) '欺骗' 意味着以欺骗的方式迷住或吸引某人。" +
        "<br><br>" +
        "(B) '保护' 意味着使免受伤害或损害。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '启迪' 意味着给予某人对某个主题或情况的更大知识和理解。"
    },
    {
        id: 4,
        question: "Getting a driver's license __________ passing both a written and a practical exam.",
        chinese_question: "获得驾驶执照 __________ 通过笔试和实际考试。",
        answers: [
            { option: "A", answer: "simplifies", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
            { option: "B", answer: "entails", chinese_answer: "需要", chinese_romanization: "xūyào" },
            { option: "C", answer: "avoids", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
            { option: "D", answer: "ignores", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'entails' means to involve something as a necessary or inevitable part or consequence." +
            "<br><br>" +
            "(A) 'simplifies' means to make something simpler or easier to do or understand." +
            "<br><br>" +
            "(C) 'avoids' means to keep away from or stop oneself from doing something." +
            "<br><br>" +
            "(D) 'ignores' means to refuse to take notice of or acknowledge.",
        chinese_explanation: "(B) '需要'一词意味着作为必要或不可避免的一部分或结果而涉及某事。" +
            "<br><br>" +
            "(A) '简化' 意味着使某事变得更简单或更容易做或理解。" +
            "<br><br>" +
            "(C) '避免' 意味着远离或阻止自己做某事。" +
            "<br><br>" +
            "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 5,
        question: "The new policy __________ a lot of discussion and debate among the employees.",
        chinese_question: "新政策在员工中 __________ 了大量讨论和辩论。",
        answers: [
            { option: "A", answer: "spawned", chinese_answer: "引发", chinese_romanization: "yǐnfā" },
            { option: "B", answer: "ended", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "silenced", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spawned' figuratively means to generate or bring forth." +
            "<br><br>" +
            "(B) 'ended' means to bring to a conclusion." +
            "<br><br>" +
            "(C) 'concealed' means to keep something secret or hidden." +
            "<br><br>" +
            "(D) 'silenced' means to cause to be silent; prohibit or prevent from speaking.",
        chinese_explanation: "(A) '引发' 在此语境下比喻生成或引发。" +
            "<br><br>" +
            "(B) '结束' 意味着带来结论。" +
            "<br><br>" +
            "(C) '隐藏' 意味着将某事保密或隐藏。" +
            "<br><br>" +
            "(D) '沉默' 意味着使其沉默；禁止或阻止说话。"
    },
    {
        id: 6,
    question: "To __________ from the flu, he drank plenty of fluids and got ample rest.",
    chinese_question: "为了 __________ 流感，他喝了大量的液体并得到了充足的休息。",
    answers: [
        { option: "A", answer: "aggravate", chinese_answer: "加重", chinese_romanization: "jiāzhòng" },
        { option: "B", answer: "recuperate", chinese_answer: "恢复", chinese_romanization: "huīfù" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "worsen", chinese_answer: "恶化", chinese_romanization: "èhuà" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'recuperate' means to recover from illness or exertion." +
        "<br><br>" +
        "(A) 'aggravate' means to make a problem or injury worse or more serious." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'worsen' means to make or become worse.",
    chinese_explanation: "(B) '恢复' 意味着从疾病或劳累中恢复。" +
        "<br><br>" +
        "(A) '加重' 意味着使问题或伤害变得更糟或更严重。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '恶化' 意味着变得或使更糟。"
    },
    {
        id: 7,
        question: "Seeing the approaching bear, the campers began to __________ in their tents, hoping not to be noticed.",
        chinese_question: "看到逼近的熊，露营者们开始在帐篷里 __________ ，希望不被发现。",
        answers: [
                { option: "A", answer: "cower", chinese_answer: "畏缩", chinese_romanization: "wèisuō" },
                { option: "B", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
                { option: "C", answer: "dance", chinese_answer: "跳舞", chinese_romanization: "tiàowǔ" },
                { option: "D", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'cower' means to crouch down in fear." +
                "<br><br>" +
                "(B) 'cheer' means to shout for joy or in praise or encouragement." +
                "<br><br>" +
                "(C) 'dance' means to move rhythmically to music." +
                "<br><br>" +
                "(D) 'relax' means to make or become less tense or anxious.",
        chinese_explanation: "(A) '畏缩' 意味着害怕地蜷缩下来。" +
                "<br><br>" +
                "(B) '欢呼' 意味着因喜悦、赞美或鼓励而大声喊叫。" +
                "<br><br>" +
                "(C) '跳舞' 意味着随着音乐有节奏地移动。" +
                "<br><br>" +
                "(D) '放松' 意味着使或变得不那么紧张或焦虑。"
    },
    {
        id: 8,
        question: "In order to secure the promotion, he would __________ over his superiors at every opportunity.",
        chinese_question: "为了确保升职，他会在每个机会都 __________ 上司。",
        answers: [
                { option: "A", answer: "fawn", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
                { option: "B", answer: "criticize", chinese_answer: "批评", chinese_romanization: "pīpíng" },
                { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                { option: "D", answer: "oppose", chinese_answer: "反对", chinese_romanization: "fǎnduì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'fawn' means to give a servile display of exaggerated flattery or affection, typically to gain favor, used figuratively here." +
                "<br><br>" +
                "(B) 'criticize' means to indicate the faults of someone or something in a disapproving way." +
                "<br><br>" +
                "(C) 'ignore' means to refuse to take notice of or acknowledge." +
                "<br><br>" +
                "(D) 'oppose' means to disapprove of and attempt to prevent.",
        chinese_explanation: "(A) '奉承' 意味着表现出卑微的、夸张的恭维或爱慕，通常是为了获得青睐，这里是比喻用法。" +
                "<br><br>" +
                "(B) '批评' 意味着以不赞成的方式指出某人或某事的错误。" +
                "<br><br>" +
                "(C) '忽视' 意味着拒绝注意或承认。" +
                "<br><br>" +
                "(D) '反对' 意味着不赞成并试图阻止。"
    },
    {
        id: 9,
    question: "The government attempted to __________ the rebellion by arresting its leaders.",
    chinese_question: "政府试图通过逮捕叛乱的领导人来 __________ 叛乱。",
    answers: [
        { option: "A", answer: "promote", chinese_answer: "推动", chinese_romanization: "tuīdòng" },
        { option: "B", answer: "quash", chinese_answer: "镇压", chinese_romanization: "zhènyā" },
        { option: "C", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quash' means to suppress or put an end to forcibly." +
        "<br><br>" +
        "(A) 'promote' means to further the progress of something." +
        "<br><br>" +
        "(C) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy event.",
    chinese_explanation: "(B) '镇压' 意味着强行压制或终止。" +
        "<br><br>" +
        "(A) '推动' 意味着推进某事的进展。" +
        "<br><br>" +
        "(C) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(D) '庆祝' 意味着承认重要或愉快的事件。"
    },
    {
        id: 10,
        question: "The sight of the decaying food in the refrigerator __________ him, and he quickly closed the door.",
        chinese_question: "看到冰箱里腐烂的食物 __________ 了他，他迅速关上了门。",
        answers: [
            { option: "A", answer: "repulsed", chinese_answer: "使厌恶", chinese_romanization: "shǐ yànwù" },
            { option: "B", answer: "fascinated", chinese_answer: "使着迷", chinese_romanization: "shǐ zháomí" },
            { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "soothed", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'repulsed' means to cause someone to feel intense distaste and aversion." +
            "<br><br>" +
            "(B) 'fascinated' means to attract and hold the attention of someone." +
            "<br><br>" +
            "(C) 'ignored' means to refuse to take notice of." +
            "<br><br>" +
            "(D) 'soothed' means to gently calm someone.",
        chinese_explanation: "(A) '使厌恶' 意味着使某人感到强烈的反感和厌恶。" +
            "<br><br>" +
            "(B) '使着迷' 意味着吸引并吸引某人的注意力。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '安慰' 意味着轻轻地安抚某人。"
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
