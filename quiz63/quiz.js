// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ between her personal values and her job responsibilities created a constant inner struggle.",
    chinese_question: "她的个人价值观和工作职责之间的 __________ 造成了持续的内心斗争。",
    answers: [
        { option: "A", answer: "consonance", chinese_answer: "一致", chinese_romanization: "yīzhì" },
        { option: "B", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
        { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
        { option: "D", answer: "unity", chinese_answer: "团结", chinese_romanization: "tuánjié" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dissonance' means a conflict of people's opinions or actions or characters." +
        "<br><br>" +
        "(A) 'consonance' means agreement or compatibility between opinions or actions." +
        "<br><br>" +
        "(C) 'harmony' means agreement or concord." +
        "<br><br>" +
        "(D) 'unity' means the state of being united or joined as a whole.",
    chinese_explanation: "(B) '不和谐' 一词意味着人们意见、行动或性格之间的冲突。" +
        "<br><br>" +
        "(A) '一致' 意味着意见或行动之间的协议或兼容性。" +
        "<br><br>" +
        "(C) '和谐' 意味着协议或和睦。" +
        "<br><br>" +
        "(D) '团结' 意味着团结或联合为整体的状态。"
    },
    {
        id: 2,
        question: "She had no __________ about speaking her mind during the meeting, even if it meant disagreeing with her boss.",
        chinese_question: "她在会议上毫无 __________ 地表达了自己的想法，即使这意味着要与老板意见不一致。",
        answers: [
                { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
                { option: "B", answer: "enthusiasm", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
                { option: "D", answer: "assurance", chinese_answer: "确信", chinese_romanization: "quèxìn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' means an uneasy feeling of doubt, worry, or fear, especially about one's own conduct; a misgiving." +
                "<br><br>" +
                "(B) 'enthusiasm' means intense and eager enjoyment, interest, or approval." +
                "<br><br>" +
                "(C) 'trust' means firm belief in the reliability, truth, or ability of someone or something." +
                "<br><br>" +
                "(D) 'assurance' means confidence or certainty in one's own abilities.",
        chinese_explanation: "(A) '不安' 意味着对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
                "<br><br>" +
                "(B) '热情' 意味着强烈和热切的享受、兴趣或赞同。" +
                "<br><br>" +
                "(C) '信任' 意味着对某人或某事可靠性、真实性或能力的坚定信念。" +
                "<br><br>" +
                "(D) '确信' 意味着对自己能力的信心或确定性。"
    },
    {
        id: 3,
    question: "His cheerful __________ made him popular among his colleagues, who appreciated his positive attitude.",
    chinese_question: "他开朗的 __________ 使他在同事中很受欢迎，他们很欣赏他的积极态度。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
        { option: "C", answer: "temperament", chinese_answer: "性情", chinese_romanization: "xìngqíng" },
        { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'temperament' means a person's or animal's nature, especially as it permanently affects their behavior." +
                "<br><br>" +
                "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
                "<br><br>" +
                "(B) 'reluctance' means unwillingness or disinclination to do something." +
                "<br><br>" +
                "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
    chinese_explanation: "(C) '性情'一词意味着一个人或动物的本性，尤其是它永久地影响他们的行为。" +
                "<br><br>" +
                "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
                "<br><br>" +
                "(B) '勉强' 意味着不愿意或不情愿做某事。" +
                "<br><br>" +
                "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 4,
    question: "She showed a strong __________ for creative writing, often spending hours crafting stories and poems.",
    chinese_question: "她对创意写作表现出强烈的 __________，经常花几个小时创作故事和诗歌。",
    answers: [
        { option: "A", answer: "aptitude", chinese_answer: "天赋", chinese_romanization: "tiānfù" },
        { option: "B", answer: "inclination", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
        { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'inclination' means a natural tendency or urge to act or feel in a particular way." +
        "<br><br>" +
        "(A) 'aptitude' means a natural ability to do something." +
        "<br><br>" +
        "(C) 'aversion' means a strong dislike or disinclination." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '倾向' 一词意味着自然的倾向或冲动去以某种方式行动或感觉。" +
        "<br><br>" +
        "(A) '天赋' 意味着自然的能力。" +
        "<br><br>" +
        "(C) '厌恶' 意味着强烈的反感或不情愿。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关注或同情。"
    },
    {
        id: 5,
        question: "The leader’s optimism was __________ by the knowledge of the challenges that lay ahead, and he felt both determined and cautious.",
        chinese_question: "领导者的乐观情绪因知道前方的挑战而得到 __________，他感到既坚定又谨慎。",
        answers: [
                { option: "A", answer: "unaltered", chinese_answer: "未改变", chinese_romanization: "wèi gǎibiàn" },
                { option: "B", answer: "tempered", chinese_answer: "缓和", chinese_romanization: "huǎnhé" },
                { option: "C", answer: "heightened", chinese_answer: "加强", chinese_romanization: "jiāqiáng" },
                { option: "D", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tempered' means to serve as a counterbalancing force to something; to moderate or mitigate." +
                "<br><br>" +
                "(A) 'unaltered' means remaining the same; unchanged." +
                "<br><br>" +
                "(C) 'heightened' means to make or become more intense or acute." +
                "<br><br>" +
                "(D) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally.",
        chinese_explanation: "(B) '缓和'一词意味着作为某物的平衡力；调节或减轻。" +
                "<br><br>" +
                "(A) '未改变' 意味着保持不变；未改变。" +
                "<br><br>" +
                "(C) '加强' 意味着使变得更强烈或尖锐。" +
                "<br><br>" +
                "(D) '忽视' 意味着拒绝注意或承认；故意忽略。"
    },
    {
        id: 6,
        question: "The CEO's __________ to oust the board members was revealed in a series of leaked emails where he discussed secret plans and strategies.",
        chinese_question: "泄露的一系列电子邮件揭示了首席执行官驱逐董事会成员的 __________，其中他讨论了秘密计划和策略。",
        answers: [
                { option: "A", answer: "collaboration", chinese_answer: "合作", chinese_romanization: "hézuò" },
                { option: "B", answer: "machination", chinese_answer: "阴谋", chinese_romanization: "yīnmóu" },
                { option: "C", answer: "incompetence", chinese_answer: "无能", chinese_romanization: "wúnéng" },
                { option: "D", answer: "transparency", chinese_answer: "透明", chinese_romanization: "tòumíng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'machination' means a plot or scheme." +
                "<br><br>" +
                "(A) 'collaboration' means the action of working with someone to produce or create something." +
                "<br><br>" +
                "(C) 'incompetence' means inability to do something successfully." +
                "<br><br>" +
                "(D) 'transparency' means the condition of being transparent.",
        chinese_explanation: "(B) '阴谋' 意味着一个阴谋或计划。" +
                "<br><br>" +
                "(A) '合作' 意味着与某人合作生产或创造某物的行动。" +
                "<br><br>" +
                "(C) '无能' 意味着无法成功完成某事的能力。" +
                "<br><br>" +
                "(D) '透明' 意味着透明的条件。"
    },
    {
        id: 7,
    question: "The project was delayed due to a __________ of resources.",
    chinese_question: "由于 __________ 资源，项目被延迟了。",
    answers: [
        { option: "A", answer: "surplus", chinese_answer: "过剩", chinese_romanization: "guòshèng" },
        { option: "B", answer: "abundance", chinese_answer: "丰富", chinese_romanization: "fēngfù" },
        { option: "C", answer: "lack", chinese_answer: "缺乏", chinese_romanization: "quēfá" },
        { option: "D", answer: "excess", chinese_answer: "过量", chinese_romanization: "guòliàng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'lack' means the state of being without or not having enough of something." +
        "<br><br>" +
        "(A) 'surplus' means an amount of something left over when requirements have been met; an excess of production or supply." +
        "<br><br>" +
        "(B) 'abundance' means a very large quantity of something." +
        "<br><br>" +
        "(D) 'excess' means an amount of something that is more than necessary, permitted, or desirable.",
    chinese_explanation: "(C) '缺乏' 意味着没有或不足够某物的状态。" +
        "<br><br>" +
        "(A) '过剩' 意味着在满足需求后剩余的数量；生产或供应过剩。" +
        "<br><br>" +
        "(B) '丰富' 意味着大量的某物。" +
        "<br><br>" +
        "(D) '过量' 意味着超过必要、允许或理想的数量。"
    },
    {
        id: 8,
        question: "He pursued his goals with such __________ that nothing could deter him from achieving them.",
        chinese_question: "他以如此 __________ 追求自己的目标，没有什么能阻止他实现这些目标。",
        answers: [
                { option: "A", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
                { option: "B", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
                { option: "D", answer: "reluctance", chinese_answer: "不情愿", chinese_romanization: "bùqíngyuàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fervour' means intense and passionate feeling." +
                "<br><br>" +
                "(A) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'hesitation' means the action of pausing before saying or doing something." +
                "<br><br>" +
                "(D) 'reluctance' means unwillingness or disinclination to do something.",
        chinese_explanation: "(B) '热情'一词意味着强烈而热情的感觉。" +
                "<br><br>" +
                "(A) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '犹豫' 意味着在说或做某事之前的暂停动作。" +
                "<br><br>" +
                "(D) '不情愿' 意味着不愿意或不情愿做某事。"
    },
    {
        id: 9,
    question: "The new CEO brought innovative ideas to the company, building on the solid foundation laid by his __________.",
    chinese_question: "新任首席执行官为公司带来了创新的想法，建立在他的 __________ 打下的坚实基础上。",
    answers: [
        { option: "A", answer: "predecessor", chinese_answer: "前任", chinese_romanization: "qiánrèn" },
        { option: "B", answer: "successor", chinese_answer: "继任者", chinese_romanization: "jìrènzhě" },
        { option: "C", answer: "colleague", chinese_answer: "同事", chinese_romanization: "tóngshì" },
        { option: "D", answer: "competitor", chinese_answer: "竞争者", chinese_romanization: "jìngzhēng zhě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'predecessor' means a person who held a job or office before the current holder." +
        "<br><br>" +
        "(B) 'successor' means a person or thing that succeeds another." +
        "<br><br>" +
        "(C) 'colleague' means a person with whom one works, especially in a profession or business." +
        "<br><br>" +
        "(D) 'competitor' means a person or organization against whom one is competing.",
    chinese_explanation: "(A) '前任' 意味着在现任持有者之前担任某职位或职务的人。" +
        "<br><br>" +
        "(B) '继任者' 意味着接替另一人的人或事物。" +
        "<br><br>" +
        "(C) '同事' 意味着与某人一起工作的人，尤其是在职业或业务中。" +
        "<br><br>" +
        "(D) '竞争者' 意味着与某人竞争的个人或组织。"
    },
    {
        id: 10,
    question: "The teacher earned the __________ of her students by being fair and understanding.",
    chinese_question: "这位老师通过公平和理解赢得了学生的 __________ 。",
    answers: [
        { option: "A", answer: "respect", chinese_answer: "尊重", chinese_romanization: "zūnzhòng" },
        { option: "B", answer: "disregard", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "contempt", chinese_answer: "轻视", chinese_romanization: "qīngshì" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
        "<br><br>" +
        "(B) 'disregard' means to pay no attention to; ignore." +
        "<br><br>" +
        "(C) 'contempt' means the feeling that a person or a thing is beneath consideration, worthless, or deserving scorn." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(A) '尊重' 意味着对某人的能力、品质或成就的深深钦佩之情。" +
        "<br><br>" +
        "(B) '忽视' 意味着不注意；忽略。" +
        "<br><br>" +
        "(C) '轻视' 意味着认为某人或某物不值得考虑、无价值或应受鄙视的感觉。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
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
