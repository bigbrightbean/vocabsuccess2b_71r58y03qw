// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's __________ was palpable when they learned their project deadline had been moved up by a week.",
        chinese_question: "当团队得知他们的项目截止日期提前了一周时，他们的 __________ 是显而易见的。",
        answers: [
                { option: "A", answer: "relief", chinese_answer: "轻松", chinese_romanization: "qīngsōng" },
                { option: "B", answer: "consternation", chinese_answer: "惊愕", chinese_romanization: "jīng’è" },
                { option: "C", answer: "confidence", chinese_answer: "自信", chinese_romanization: "zìxìn" },
                { option: "D", answer: "joy", chinese_answer: "快乐", chinese_romanization: "kuàilè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'consternation' figuratively means feelings of anxiety or dismay, typically at something unexpected." +
                "<br><br>" +
                "(A) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
                "<br><br>" +
                "(C) 'confidence' means the feeling or belief that one can rely on someone or something." +
                "<br><br>" +
                "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(B) '惊愕' 在此语境下意指通常因意外事情引起的焦虑或惊慌的感觉。" +
                "<br><br>" +
                "(A) '轻松' 意味着在解除焦虑或痛苦后的放心和放松感觉。" +
                "<br><br>" +
                "(C) '自信' 意味着可以依赖某人或某事的感觉或信念。" +
                "<br><br>" +
                "(D) '快乐' 意味着极大的愉快和幸福感。"
    },
    {
        id: 2,
    question: "There is always a __________ of injury when playing contact sports.",
    chinese_question: "进行接触性运动时总会有受伤的 __________。",
    answers: [
        { option: "A", answer: "risk", chinese_answer: "风险", chinese_romanization: "fēngxiǎn" },
        { option: "B", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìngxìng" },
        { option: "C", answer: "safety", chinese_answer: "安全", chinese_romanization: "ānquán" },
        { option: "D", answer: "guarantee", chinese_answer: "保证", chinese_romanization: "bǎozhèng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'risk' means a situation involving exposure to danger." +
        "<br><br>" +
        "(B) 'certainty' means the state of being sure or confident." +
        "<br><br>" +
        "(C) 'safety' means the condition of being protected from or unlikely to cause danger, risk, or injury." +
        "<br><br>" +
        "(D) 'guarantee' means a formal assurance that certain conditions will be fulfilled.",
    chinese_explanation: "(A) '风险' 意味着涉及暴露于危险的情况。" +
        "<br><br>" +
        "(B) '确定性' 意味着确定或自信的状态。" +
        "<br><br>" +
        "(C) '安全' 意味着受到保护的状态或不太可能导致危险、风险或伤害的状态。" +
        "<br><br>" +
        "(D) '保证' 意味着对某些条件将得到满足的正式保证。"
    },
    {
        id: 3,
    question: "The lawyer demanded __________ to support the claims made by the witness.",
    chinese_question: "律师要求提供 __________ 来支持证人的说法。",
    answers: [
        { option: "A", answer: "proof", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
        { option: "B", answer: "assumption", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "C", answer: "rumor", chinese_answer: "谣言", chinese_romanization: "yáoyán" },
        { option: "D", answer: "hypothesis", chinese_answer: "假说", chinese_romanization: "jiǎshuō" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'proof' means evidence or argument establishing a fact or the truth of a statement." +
        "<br><br>" +
        "(B) 'assumption' means a thing that is accepted as true or as certain to happen, without proof." +
        "<br><br>" +
        "(C) 'rumor' means a currently circulating story or report of uncertain or doubtful truth." +
        "<br><br>" +
        "(D) 'hypothesis' means a supposition or proposed explanation made on the basis of limited evidence.",
    chinese_explanation: "(A) '证据' 意味着确立事实或陈述真理的证据或论据。" +
        "<br><br>" +
        "(B) '假设' 意味着在没有证据的情况下被接受为真实或确定会发生的事物。" +
        "<br><br>" +
        "(C) '谣言' 意味着不确定或可疑的传闻或报道。" +
        "<br><br>" +
        "(D) '假说' 意味着基于有限证据提出的假设或解释。"
    },
    {
        id: 4,
        question: "The __________ of the curriculum allowed students to gain a well-rounded education in both the arts and sciences.",
        chinese_question: "课程的 __________ 使学生能够在艺术和科学方面获得全面的教育。",
        answers: [
                { option: "A", answer: "breadth", chinese_answer: "广度", chinese_romanization: "guǎngdù" },
                { option: "B", answer: "specificity", chinese_answer: "具体性", chinese_romanization: "jùtǐ xìng" },
                { option: "C", answer: "narrowness", chinese_answer: "狭窄", chinese_romanization: "xiázhǎi" },
                { option: "D", answer: "precision", chinese_answer: "精确", chinese_romanization: "jīngquè" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'breadth' means the extent of something, especially when it is large; comprehensive quality." +
                "<br><br>" +
                "(B) 'specificity' means the quality of being specific rather than general." +
                "<br><br>" +
                "(C) 'narrowness' means limited in extent, amount, or scope." +
                "<br><br>" +
                "(D) 'precision' means the quality, condition, or fact of being exact and accurate.",
        chinese_explanation: "(A) '广度' 意味着某物的范围，尤其是大的范围；全面的品质。" +
                "<br><br>" +
                "(B) '具体性' 意味着具体而不是一般的质量。" +
                "<br><br>" +
                "(C) '狭窄' 意味着范围、数量或范围有限。" +
                "<br><br>" +
                "(D) '精确' 意味着准确和精确的质量、条件或事实。"
    },
    {
        id: 5,
    question: "Her __________ in the power of education drove her to establish several schools in underprivileged areas.",
    chinese_question: "她对教育力量的 __________ 促使她在贫困地区建立了几所学校。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
        { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'conviction' means a firmly held belief or opinion." +
        "<br><br>" +
        "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
        "<br><br>" +
        "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
        "<br><br>" +
        "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
    chinese_explanation: "(B) '信念' 一词意味着坚定的信仰或意见。" +
        "<br><br>" +
        "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
        "<br><br>" +
        "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
        "<br><br>" +
        "(D) '怀疑' 意味着不确定的感觉或缺乏信念。"
    },
    {
        id: 6,
    question: "The environmental __________ worked tirelessly to promote policies that protect natural habitats.",
    chinese_question: "这位环境 __________ 不知疲倦地工作，以促进保护自然栖息地的政策。",
    answers: [
        { option: "A", answer: "advocate", chinese_answer: "倡导者", chinese_romanization: "chàngdǎo zhě" },
        { option: "B", answer: "antagonist", chinese_answer: "对立者", chinese_romanization: "duìlì zhě" },
        { option: "C", answer: "neutral", chinese_answer: "中立者", chinese_romanization: "zhōnglì zhě" },
        { option: "D", answer: "detractor", chinese_answer: "贬低者", chinese_romanization: "biǎndī zhě" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'advocate' figuratively means a person who publicly supports or recommends a particular cause or policy." +
        "<br><br>" +
        "(B) 'antagonist' means a person who actively opposes or is hostile to someone or something." +
        "<br><br>" +
        "(C) 'neutral' means a person who does not support or help either side in a conflict or disagreement." +
        "<br><br>" +
        "(D) 'detractor' means a person who disparages someone or something.",
    chinese_explanation: "(A) '倡导者' 在此语境下意指公开支持或推荐特定事业或政策的人。" +
        "<br><br>" +
        "(B) '对立者' 意味着积极反对或敌视某人或某事的人。" +
        "<br><br>" +
        "(C) '中立者' 意味着在冲突或争执中不支持或帮助任何一方的人。" +
        "<br><br>" +
        "(D) '贬低者' 意味着贬低某人或某事的人。"
    },
    {
        id: 7,
    question: "The teacher's __________ in grading assignments ensured that all students were evaluated solely on their performance.",
    chinese_question: "老师在批改作业时的 __________ 确保所有学生都仅根据他们的表现进行评估。",
    answers: [
        { option: "A", answer: "favoritism", chinese_answer: "偏爱", chinese_romanization: "piān'ài" },
        { option: "B", answer: "impartiality", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
        { option: "C", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
        { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'impartiality' means equal treatment of all rivals or disputants; fairness." +
        "<br><br>" +
        "(A) 'favoritism' means the practice of giving unfair preferential treatment to one person or group at the expense of another." +
        "<br><br>" +
        "(C) 'bias' means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
        "<br><br>" +
        "(D) 'indifference' means lack of interest, concern, or sympathy.",
    chinese_explanation: "(B) '公正' 一词意味着对所有对手或争论者的平等对待；公平。" +
        "<br><br>" +
        "(A) '偏爱' 意味着给予一个人或一个群体不公平的优待的做法。" +
        "<br><br>" +
        "(C) '偏见' 意味着对某人或某团体的倾向或偏见，尤其是被认为不公平的方式。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 8,
        question: "The illusionist's show featured an incredible act of __________, where he seemed to defy gravity.",
        chinese_question: "魔术师的表演中有一个令人难以置信的 __________ 环节，看起来他似乎违背了重力。",
        answers: [
                { option: "A", answer: "levitation", chinese_answer: "悬浮", chinese_romanization: "xuánfú" },
                { option: "B", answer: "camouflage", chinese_answer: "伪装", chinese_romanization: "wěizhuāng" },
                { option: "C", answer: "manipulation", chinese_answer: "操控", chinese_romanization: "cāokòng" },
                { option: "D", answer: "endurance", chinese_answer: "忍耐", chinese_romanization: "rěnnài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'levitation' means the action of rising or causing something to rise and hover in the air, typically by means of supposed magical powers." +
                "<br><br>" +
                "(B) 'camouflage' means the disguising of military personnel, equipment, and installations by painting or covering them to make them blend in with their surroundings." +
                "<br><br>" +
                "(C) 'manipulation' means the action of manipulating something in a skillful manner." +
                "<br><br>" +
                "(D) 'endurance' means the fact or power of enduring an unpleasant or difficult process or situation without giving way.",
        chinese_explanation: "(A) '悬浮'一词意味着上升或使某物在空中悬浮的动作，通常通过假想的魔力。" +
                "<br><br>" +
                "(B) '伪装' 意味着通过绘画或覆盖使军事人员、设备和设施与周围环境融为一体的伪装。" +
                "<br><br>" +
                "(C) '操控' 意味着以巧妙的方式操控某物的行为。" +
                "<br><br>" +
                "(D) '忍耐' 意味着在不屈服的情况下忍受不愉快或困难过程的事实或力量。"
    },
    {
        id: 9,
    question: "The poet's use of rhythmic __________ in his verses created a musical quality that captivated readers.",
    chinese_question: "诗人用在诗句中使用的节奏 __________ 创造了一种音乐般的品质，吸引了读者。",
    answers: [
        { option: "A", answer: "prose", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
        { option: "B", answer: "cadences", chinese_answer: "韵律", chinese_romanization: "yùnlǜ" },
        { option: "C", answer: "interruptions", chinese_answer: "打断", chinese_romanization: "dǎduàn" },
        { option: "D", answer: "monotony", chinese_answer: "单调", chinese_romanization: "dāndiào" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'cadences' means rhythmic flows of a sequence of sounds or words." +
        "<br><br>" +
        "(A) 'prose' means written or spoken language in its ordinary form." +
        "<br><br>" +
        "(C) 'interruptions' means breaking the continuity of something." +
        "<br><br>" +
        "(D) 'monotony' means lack of variety and interest.",
    chinese_explanation: "(B) '韵律' 意味着一系列声音或词语的节奏流动。" +
        "<br><br>" +
        "(A) '散文' 意味着普通形式的书面或口头语言。" +
        "<br><br>" +
        "(C) '打断' 意味着打破连续性。" +
        "<br><br>" +
        "(D) '单调' 意味着缺乏多样性和趣味。"
    },
    {
        id: 10,
        question: "The author’s latest novel was met with __________ by critics, who dismissed it as a poorly written piece.",
        chinese_question: "这位作家的最新小说遭到了评论家的 __________，他们将其视为一部写得很差的作品。",
        answers: [
                { option: "A", answer: "acclaim", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
                { option: "B", answer: "derision", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
                { option: "C", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
                { option: "D", answer: "interest", chinese_answer: "兴趣", chinese_romanization: "xìngqù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'derision' means contemptuous ridicule or mockery." +
                "<br><br>" +
                "(A) 'acclaim' means enthusiastic and public praise." +
                "<br><br>" +
                "(C) 'admiration' means respect and warm approval." +
                "<br><br>" +
                "(D) 'interest' means the state of wanting to know or learn about something or someone.",
        chinese_explanation: "(B) '嘲笑'一词意味着轻蔑的嘲讽或戏弄。" +
                "<br><br>" +
                "(A) '赞扬' 意味着热情的公开赞美。" +
                "<br><br>" +
                "(C) '钦佩' 意味着尊重和热情的赞同。" +
                "<br><br>" +
                "(D) '兴趣' 意味着想知道或了解某事或某人的状态。"
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
