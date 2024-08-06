// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Her social media __________ was evident from the way she could influence public opinion with just a single post.",
    chinese_question: "她的社交媒体 __________ 显而易见，她仅凭一条帖子就能影响公众舆论。",
    answers: [
        { option: "A", answer: "clout", chinese_answer: "影响力", chinese_romanization: "yǐngxiǎng lì" },
        { option: "B", answer: "isolation", chinese_answer: "隔离", chinese_romanization: "gélí" },
        { option: "C", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" },
        { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'clout' means influence or power, especially in social media." +
        "<br><br>" +
        "(B) 'isolation' means the process or fact of isolating or being isolated." +
        "<br><br>" +
        "(C) 'ignorance' means lack of knowledge or information." +
        "<br><br>" +
        "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
    chinese_explanation: "(A) '影响力' 意味着特别是在社交媒体上的影响力或权力。" +
        "<br><br>" +
        "(B) '隔离' 意味着隔离或被隔离的过程或事实。" +
        "<br><br>" +
        "(C) '无知' 意味着缺乏知识或信息。" +
        "<br><br>" +
        "(D) '犹豫' 意味着在说或做某事之前的停顿或犹豫行为。"
    },
    {
        id: 2,
    question: "The investor emphasized the importance of __________ by putting money into stocks, bonds, and real estate to minimize risks.",
    chinese_question: "投资者强调了通过将资金投入股票、债券和房地产来 __________ 的重要性，以降低风险。",
    answers: [
        { option: "A", answer: "diversification", chinese_answer: "多元化", chinese_romanization: "duōyuán huà" },
        { option: "B", answer: "concentration", chinese_answer: "集中", chinese_romanization: "jízhōng" },
        { option: "C", answer: "speculation", chinese_answer: "投机", chinese_romanization: "tóujī" },
        { option: "D", answer: "uniformity", chinese_answer: "统一性", chinese_romanization: "tǒngyī xìng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'diversification' means spreading investments to reduce risk." +
        "<br><br>" +
        "(B) 'concentration' means focusing on a single area or aspect." +
        "<br><br>" +
        "(C) 'speculation' means investment in stocks, property, or other ventures in the hope of gain but with the risk of loss." +
        "<br><br>" +
        "(D) 'uniformity' means the quality or state of being the same or homogeneous.",
    chinese_explanation: "(A) '多元化' 意味着分散投资以降低风险。" +
        "<br><br>" +
        "(B) '集中' 意味着专注于单一领域或方面。" +
        "<br><br>" +
        "(C) '投机' 意味着希望获得收益但有损失风险的股票、财产或其他风险投资。" +
        "<br><br>" +
        "(D) '统一性' 意味着相同或同质的质量或状态。"
    },
    {
        id: 3,
    question: "The writer's __________ was evident in her heartfelt letters, which expressed deep emotion and compassion.",
    chinese_question: "作家在她充满感情的信中表达了深深的 __________，流露出深厚的情感和同情。",
    answers: [
        { option: "A", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
        { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "D", answer: "sentiment", chinese_answer: "情感", chinese_romanization: "qínggǎn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sentiment' means a view or attitude toward a situation or event; an opinion or feeling." +
        "<br><br>" +
        "(A) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
        "<br><br>" +
        "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
        "<br><br>" +
        "(C) 'aversion' means a strong dislike or disinclination.",
    chinese_explanation: "(D) '情感' 一词意味着对某种情况或事件的看法或态度；意见或感觉。" +
        "<br><br>" +
        "(A) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。" +
        "<br><br>" +
        "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
        "<br><br>" +
        "(C) '厌恶' 意味着强烈的厌恶或不情愿。"
    },
    {
        id: 4,
        question: "The __________ from the construction site next door was so loud that it interrupted their conversation.",
        chinese_question: "隔壁建筑工地的 __________ 大到打断了他们的谈话。",
        answers: [
                { option: "A", answer: "quiet", chinese_answer: "安静", chinese_romanization: "ānjìng" },
                { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
                { option: "C", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
                { option: "D", answer: "peace", chinese_answer: "和平", chinese_romanization: "hépíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise." +
                "<br><br>" +
                "(A) 'quiet' means the absence of noise or bustle; silence; calm." +
                "<br><br>" +
                "(C) 'calm' means the absence of violent or confrontational activity within a place or group." +
                "<br><br>" +
                "(D) 'peace' means freedom from disturbance; tranquility.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音。" +
                "<br><br>" +
                "(A) '安静' 意味着没有噪音或喧嚣；安静；平静。" +
                "<br><br>" +
                "(C) '平静' 意味着一个地方或团体内部没有暴力或对抗活动。" +
                "<br><br>" +
                "(D) '和平' 意味着没有干扰；宁静。"
    },
    {
        id: 5,
    question: "The __________ of electric cars has significantly impacted the automotive industry, pushing for more sustainable practices.",
    chinese_question: "电动汽车的 __________ 对汽车行业产生了重大影响，推动了更多可持续的做法。",
    answers: [
        { option: "A", answer: "advent", chinese_answer: "到来", chinese_romanization: "dàolái" },
        { option: "B", answer: "regression", chinese_answer: "倒退", chinese_romanization: "dàotuì" },
        { option: "C", answer: "retreat", chinese_answer: "撤退", chinese_romanization: "chètuì" },
        { option: "D", answer: "exit", chinese_answer: "退出", chinese_romanization: "tuìchū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'advent' means the arrival of a notable person, thing, or event." +
        "<br><br>" +
        "(B) 'regression' means a return to a former or less developed state." +
        "<br><br>" +
        "(C) 'retreat' means the act of moving back or withdrawing." +
        "<br><br>" +
        "(D) 'exit' means the act of going out or leaving a place.",
    chinese_explanation: "(A) '到来' 意味着一个显著的人、事或事件的到来。" +
        "<br><br>" +
        "(B) '倒退' 意味着回到从前或较不发达的状态。" +
        "<br><br>" +
        "(C) '撤退' 意味着后退或撤退的行为。" +
        "<br><br>" +
        "(D) '退出' 意味着离开某地的行为。"
    },
    {
        id: 6,
        question: "The __________ in income between the richest and the poorest citizens has widened significantly over the past decade.",
        chinese_question: "在过去的十年中，最富有和最贫穷的公民之间的收入 __________ 显著扩大。",
        answers: [
                { option: "A", answer: "disparity", chinese_answer: "差距", chinese_romanization: "chājù" },
                { option: "B", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
                { option: "C", answer: "equality", chinese_answer: "平等", chinese_romanization: "píngděng" },
                { option: "D", answer: "equivalence", chinese_answer: "相等", chinese_romanization: "xiāngděng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disparity' means a great difference." +
                "<br><br>" +
                "(B) 'similarity' means the state of being similar." +
                "<br><br>" +
                "(C) 'equality' means the state of being equal, especially in status, rights, or opportunities." +
                "<br><br>" +
                "(D) 'equivalence' means the condition of being equal or equivalent in value, worth, function, etc.",
        chinese_explanation: "(A) '差距' 意味着巨大的差异。" +
                "<br><br>" +
                "(B) '相似' 意味着相似的状态。" +
                "<br><br>" +
                "(C) '平等' 意味着在地位、权利或机会方面的平等状态。" +
                "<br><br>" +
                "(D) '相等' 意味着在价值、价值、功能等方面的平等状态。"
    },
    {
        id: 7,
    question: "After losing his job, he experienced significant __________ while trying to support his family.",
    chinese_question: "失业后，他在努力养家时经历了巨大的 __________ 。",
    answers: [
        { option: "A", answer: "hardship", chinese_answer: "困苦", chinese_romanization: "kùnkǔ" },
        { option: "B", answer: "prosperity", chinese_answer: "繁荣", chinese_romanization: "fánróng" },
        { option: "C", answer: "ease", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
        { option: "D", answer: "fortune", chinese_answer: "运气", chinese_romanization: "yùnqì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hardship' means severe suffering or privation." +
        "<br><br>" +
        "(B) 'prosperity' means the state of being prosperous." +
        "<br><br>" +
        "(C) 'ease' means absence of difficulty or effort." +
        "<br><br>" +
        "(D) 'fortune' means luck, especially good luck.",
    chinese_explanation: "(A) '困苦' 意味着严重的痛苦或贫困。" +
        "<br><br>" +
        "(B) '繁荣' 意味着繁荣的状态。" +
        "<br><br>" +
        "(C) '轻松' 意味着没有困难或努力。" +
        "<br><br>" +
        "(D) '运气' 意味着运气，尤其是好运。"
    },
    {
        id: 8,
        question: "He was a __________ liar, able to deceive even the most skeptical people with his charm and confidence.",
        chinese_question: "他是个 __________ 的骗子，能够以他的魅力和自信欺骗甚至最怀疑的人。",
        answers: [
                { option: "A", answer: "amateur", chinese_answer: "业余", chinese_romanization: "yèyú" },
                { option: "B", answer: "consummate", chinese_answer: "完美", chinese_romanization: "wánměi" },
                { option: "C", answer: "hesitant", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "D", answer: "clumsy", chinese_answer: "笨拙", chinese_romanization: "bènzhuō" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
                "<br><br>" +
                "(A) 'amateur' means engaging or engaged in without payment; non-professional." +
                "<br><br>" +
                "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
                "<br><br>" +
                "(D) 'clumsy' means awkward in movement or in handling things.",
        chinese_explanation: "(B) '完美'一词意味着显示出高度的技能和天赋；完整或完美。" +
                "<br><br>" +
                "(A) '业余' 意味着不支付报酬的；非专业的。" +
                "<br><br>" +
                "(C) '犹豫' 意味着在行动或说话上犹豫不决、不确定或缓慢。" +
                "<br><br>" +
                "(D) '笨拙' 意味着在移动或处理事物时笨拙。"
    },
    {
        id: 9,
        question: "His __________ at the funeral, such as making light-hearted remarks and chuckling, was shocking to those who expected a more respectful demeanor.",
        chinese_question: "他在葬礼上的 __________，比如说一些轻松的话并轻笑，让那些期待更尊重态度的人感到震惊。",
        answers: [
                { option: "A", answer: "gravity", chinese_answer: "严肃", chinese_romanization: "yánsù" },
                { option: "B", answer: "levity", chinese_answer: "轻率", chinese_romanization: "qīngshuài" },
                { option: "C", answer: "solemnity", chinese_answer: "庄严", chinese_romanization: "zhuāngyán" },
                { option: "D", answer: "sobriety", chinese_answer: "清醒", chinese_romanization: "qīngxǐng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'levity' means humor or frivolity, especially the treatment of a serious matter with humor or in a manner lacking due respect." +
                "<br><br>" +
                "(A) 'gravity' means extreme importance or seriousness." +
                "<br><br>" +
                "(C) 'solemnity' means the state or quality of being serious and dignified." +
                "<br><br>" +
                "(D) 'sobriety' means the state of being sober.",
        chinese_explanation: "(B) '轻率'一词意味着幽默或轻浮，特别是以幽默或不尊重的方式对待严肃问题。" +
                "<br><br>" +
                "(A) '严肃' 意味着极端重要或严肃。" +
                "<br><br>" +
                "(C) '庄严' 意味着严肃和尊严的状态或质量。" +
                "<br><br>" +
                "(D) '清醒' 意味着清醒的状态。"
    },
    {
        id: 10,
    question: "Her father's __________ was evident when he found out she had been lying about her whereabouts.",
    chinese_question: "当父亲发现她一直在撒谎关于她的行踪时，他的 __________ 显而易见。",
    answers: [
        { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
        { option: "C", answer: "relief", chinese_answer: "宽慰", chinese_romanization: "kuānwèi" },
        { option: "D", answer: "pride", chinese_answer: "自豪", chinese_romanization: "zìháo" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
        "<br><br>" +
        "(A) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(C) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
        "<br><br>" +
        "(D) 'pride' means a feeling or deep pleasure or satisfaction derived from one's own achievements.",
    chinese_explanation: "(B) '责备' 意味着表示不赞成或失望。" +
        "<br><br>" +
        "(A) '喜悦' 意味着极大的愉快和幸福的感觉。" +
        "<br><br>" +
        "(C) '宽慰' 意味着在解除焦虑或痛苦后的宽慰和放松感。" +
        "<br><br>" +
        "(D) '自豪' 意味着因自己的成就而产生的深深的愉快或满足感。"
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
