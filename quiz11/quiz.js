// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ reaction to the unfair accusation surprised everyone, as they had never seen her so angry before.",
        chinese_question: "她对不公正指控的 __________ 反应让所有人感到惊讶，因为他们从未见过她如此愤怒。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "C", answer: "vehement", chinese_answer: "激烈的", chinese_romanization: "jīliè de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vehement' means showing strong feeling; forceful, passionate, or intense." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(C) '激烈的' 意味着表现出强烈的情感；有力的，充满激情的或激烈的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈的情感。" +
            "<br><br>" +
            "(B) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。"
    },
    {
        id: 2,
    question: "Time is __________; spend it wisely and cherish every moment.",
    chinese_question: "时间是 __________ 的；明智地利用它，珍惜每一刻。",
    answers: [
        { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "B", answer: "negligible", chinese_answer: "微不足道的", chinese_romanization: "wēi bùzú dào de" },
        { option: "C", answer: "precious", chinese_answer: "珍贵的", chinese_romanization: "zhēnguì de" },
        { option: "D", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'precious' means of great value; not to be wasted or treated carelessly." +
        "<br><br>" +
        "(A) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(B) 'negligible' means so small or unimportant as to be not worth considering." +
        "<br><br>" +
        "(D) 'insignificant' means too small or unimportant to be worth considering.",
    chinese_explanation: "(C) '珍贵的' 意味着具有巨大价值的；不可浪费或轻视的。" +
        "<br><br>" +
        "(A) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(B) '微不足道的' 意味着如此小或不重要，不值得考虑的。" +
        "<br><br>" +
        "(D) '不重要的' 意味着太小或不重要，不值得考虑的。"
    },
    {
        id: 3,
        question: "The new software provided __________ feedback, allowing users to see changes immediately.",
        chinese_question: "新软件提供了 __________ 的反馈，使用户能够立即看到变化。",
        answers: [
            { option: "A", answer: "intermittent", chinese_answer: "间歇", chinese_romanization: "jiànxiē" },
            { option: "B", answer: "prolonged", chinese_answer: "持久", chinese_romanization: "chíjiǔ" },
            { option: "C", answer: "eventual", chinese_answer: "最终", chinese_romanization: "zuìzhōng" },
            { option: "D", answer: "instant", chinese_answer: "即时", chinese_romanization: "jíshí" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'instant' means happening or coming immediately." +
            "<br><br>" +
            "(A) 'intermittent' means occurring at irregular intervals; not continuous or steady." +
            "<br><br>" +
            "(B) 'prolonged' means continuing for a long time or longer than usual; lengthy." +
            "<br><br>" +
            "(C) 'eventual' means occurring at the end of or as a result of a process or period of time.",
        chinese_explanation: "(D) '即时' 意味着立即发生或来到。" +
            "<br><br>" +
            "(A) '间歇' 意味着不定期发生的；不连续或不稳定。" +
            "<br><br>" +
            "(B) '持久' 意味着持续很长时间或比平常时间更长；冗长。" +
            "<br><br>" +
            "(C) '最终' 意味着在过程或一段时间结束时发生或作为结果发生。"
    },
    {
        id: 4,
    question: "The scientist faced a __________ challenge in trying to find a cure for the disease.",
    chinese_question: "科学家在试图找到这种疾病的治疗方法时面临 __________ 的挑战。",
    answers: [
        { option: "A", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" },
        { option: "B", answer: "minor", chinese_answer: "次要", chinese_romanization: "cìyào" },
        { option: "C", answer: "formidable", chinese_answer: "强大", chinese_romanization: "qiángdà" },
        { option: "D", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
        "<br><br>" +
        "(A) 'simple' means easily understood or done; presenting no difficulty." +
        "<br><br>" +
        "(B) 'minor' means lesser in importance, seriousness, or significance." +
        "<br><br>" +
        "(D) 'easy' means achieved without great effort; presenting few difficulties.",
    chinese_explanation: "(C) '强大' 意味着通过令人印象深刻的大、强大、强烈或有能力而激发恐惧或尊重。" +
        "<br><br>" +
        "(A) '简单' 意味着容易理解或完成；没有困难。" +
        "<br><br>" +
        "(B) '次要' 意味着重要性、严重性或意义较小的。" +
        "<br><br>" +
        "(D) '容易' 意味着没有付出很大努力就能实现；难度不大。"
    },
    {
        id: 5,
        question: "The __________ points of her argument convinced the jury of her client's innocence.",
        chinese_question: "她论点中的__________要点说服了陪审团她的客户是无辜的。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
            { option: "C", answer: "salient", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'salient' means most noticeable or important. Figuratively, it can mean being very prominent and convincing." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '显著的'一词意味着最显眼或最重要的。比喻地，它可以表示非常突出的和令人信服的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较低的。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要以至于不值得考虑的。" +
            "<br><br>" +
            "(D) '琐碎的' 意味着价值或重要性很小的。"
    },
    {
        id: 6,
        question: "The discovery of penicillin was a __________ breakthrough in medicine, leading to the development of antibiotics.",
        chinese_question: "青霉素的发现是医学上的一个 __________ 突破，促成了抗生素的发展。",
        answers: [
            { option: "A", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "B", answer: "monumental", chinese_answer: "重要的", chinese_romanization: "zhòngyào de" },
            { option: "C", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" },
            { option: "D", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'monumental' means great in importance, extent, or size." +
            "<br><br>" +
            "(A) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(C) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(B) '重要的' 意味着在重要性、范围或规模上非常大的。" +
            "<br><br>" +
            "(A) '普通的' 意味着没有特别或独特的特征；正常的。" +
            "<br><br>" +
            "(C) '不重要的' 意味着太小或不重要而不值得考虑的。" +
            "<br><br>" +
            "(D) '次要的' 意味着重要性、严重性或意义较小的。"
    },
    {
        id: 7,
        question: "The __________ conditions for plant growth include adequate sunlight, water, and nutrient-rich soil.",
        chinese_question: "植物生长的 __________ 条件包括充足的阳光、水和富含营养的土壤。",
        answers: [
            { option: "A", answer: "unfavorable", chinese_answer: "不利的", chinese_romanization: "bùlì de" },
            { option: "B", answer: "detrimental", chinese_answer: "有害的", chinese_romanization: "yǒuhài de" },
            { option: "C", answer: "optimal", chinese_answer: "最佳的", chinese_romanization: "zuìjiā de" },
            { option: "D", answer: "inadequate", chinese_answer: "不足的", chinese_romanization: "bùzú de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'optimal' means best or most favorable; optimum." +
            "<br><br>" +
            "(A) 'unfavorable' means not advantageous or beneficial." +
            "<br><br>" +
            "(B) 'detrimental' means tending to cause harm." +
            "<br><br>" +
            "(D) 'inadequate' means lacking the quality or quantity required; insufficient for a purpose.",
        chinese_explanation: "(C) '最佳的' 意味着最好或最有利的。" +
            "<br><br>" +
            "(A) '不利的' 意味着不利的或无益的。" +
            "<br><br>" +
            "(B) '有害的' 意味着容易造成伤害的。" +
            "<br><br>" +
            "(D) '不足的' 意味着缺乏所需的质量或数量的；不够目的的。"
    },
    {
        id: 8,
    question: "The __________ technology is expected to revolutionize the industry once it is fully developed.",
    chinese_question: "这种 __________ 的技术一旦完全开发出来，预计将彻底改变整个行业。",
    answers: [
        { option: "A", answer: "outdated", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
        { option: "B", answer: "obsolete", chinese_answer: "淘汰的", chinese_romanization: "táotài de" },
        { option: "C", answer: "nascent", chinese_answer: "新兴的", chinese_romanization: "xīnxīng de" },
        { option: "D", answer: "old", chinese_answer: "旧的", chinese_romanization: "jiù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nascent' means just coming into existence and beginning to display signs of future potential." +
        "<br><br>" +
        "(A) 'outdated' means no longer produced or used; out of date." +
        "<br><br>" +
        "(B) 'obsolete' means no longer produced or used; out of date." +
        "<br><br>" +
        "(D) 'old' means having lived for a long time; no longer young.",
    chinese_explanation: "(C) '新兴的' 意味着刚刚出现并开始显示未来潜力的。" +
        "<br><br>" +
        "(A) '过时的' 意味着不再生产或使用；过时的。" +
        "<br><br>" +
        "(B) '淘汰的' 意味着不再生产或使用；过时的。" +
        "<br><br>" +
        "(D) '旧的' 意味着生活了很长时间的；不再年轻的。"
    },
    {
        id: 9,
    question: "He felt __________ after working long hours without a break, unable to concentrate on his tasks.",
    chinese_question: "长时间连续工作后，他感到 __________，无法集中注意力完成任务。",
    answers: [
        { option: "A", answer: "refreshed", chinese_answer: "恢复精力的", chinese_romanization: "huīfù jīnglì de" },
        { option: "B", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīngdǎcǎi de" },
        { option: "C", answer: "invigorated", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
        { option: "D", answer: "focused", chinese_answer: "专注的", chinese_romanization: "zhuānzhù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'listless' means lacking energy or enthusiasm." +
        "<br><br>" +
        "(A) 'refreshed' means having regained strength or energy." +
        "<br><br>" +
        "(C) 'invigorated' means give strength or energy to." +
        "<br><br>" +
        "(D) 'focused' means directing a great deal of attention, interest, or activity towards a particular aim.",
    chinese_explanation: "(B) '无精打采的' 意味着缺乏能量或热情的。" +
        "<br><br>" +
        "(A) '恢复精力的' 意味着重新获得力量或能量的。" +
        "<br><br>" +
        "(C) '精力充沛的' 意味着给予力量或能量的。" +
        "<br><br>" +
        "(D) '专注的' 意味着将大量的注意力、兴趣或活动引导向特定目标的。"
    },
    {
        id: 10,
    question: "The news of the accident was __________, leaving everyone in shock and grief.",
    chinese_question: "事故的消息令人__________，让每个人都感到震惊和悲痛。",
    answers: [
        { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
        { option: "B", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
        { option: "C", answer: "ghastly", chinese_answer: "可怕的", chinese_romanization: "kěpà de" },
        { option: "D", answer: "delightful", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'ghastly' means causing great horror or fear; frightful or macabre. Figuratively, it can mean very upsetting or shocking." +
        "<br><br>" +
        "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
        "<br><br>" +
        "(B) 'beautiful' means pleasing the senses or mind aesthetically." +
        "<br><br>" +
        "(D) 'delightful' means causing delight; charming.",
    chinese_explanation: "(C) '可怕的'一词意味着引起极大的恐惧或害怕的；令人害怕或与死亡有关的。比喻地，它可以表示非常令人沮丧或震惊的。" +
        "<br><br>" +
        "(A) '愉快的' 意味着给人快乐或满足感的。" +
        "<br><br>" +
        "(B) '美丽的' 意味着在美学上愉悦感官或心灵的。" +
        "<br><br>" +
        "(D) '令人愉快的' 意味着引起愉悦的；迷人的。"
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
