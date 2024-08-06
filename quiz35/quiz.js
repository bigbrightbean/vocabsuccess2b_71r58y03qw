// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ understanding of human nature allowed him to create relatable and complex characters in his novels.",
    chinese_question: "他对人性的 __________ 理解使他能够在小说中创造出有共鸣且复杂的角色。",
    answers: [
        { option: "A", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
        { option: "B", answer: "fundamental", chinese_answer: "基本的", chinese_romanization: "jīběn de" },
        { option: "C", answer: "cursory", chinese_answer: "粗略的", chinese_romanization: "cūlüè de" },
        { option: "D", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fundamental' means forming a necessary base or core; of central importance." +
        "<br><br>" +
        "(A) 'superficial' means existing or occurring at or on the surface." +
        "<br><br>" +
        "(C) 'cursory' means hasty and therefore not thorough or detailed." +
        "<br><br>" +
        "(D) 'shallow' means of little depth.",
    chinese_explanation: "(B) '基本的' 意味着构成必要的基础或核心；具有重要意义的。" +
        "<br><br>" +
        "(A) '表面的' 意味着存在或发生在表面上的。" +
        "<br><br>" +
        "(C) '粗略的' 意味着草率的，因此不彻底或不详细的。" +
        "<br><br>" +
        "(D) '浅薄的' 意味着深度很小的。"
    },
    {
        id: 2,
        question: "The committee's report provided __________ evidence of the environmental damage caused by the factory, leading to immediate regulatory action.",
        chinese_question: "委员会的报告提供了工厂造成环境破坏的 __________ 证据，导致了立即的监管行动。",
        answers: [
            { option: "A", answer: "substantive", chinese_answer: "实质性的", chinese_romanization: "shízhì xìng de" },
            { option: "B", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
            { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "D", answer: "insubstantial", chinese_answer: "不坚实的", chinese_romanization: "bù jiānshí de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'substantive' means having a firm basis in reality and therefore important, meaningful, or considerable." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at or on the surface." +
            "<br><br>" +
            "(D) 'insubstantial' means lacking strength and solidity.",
        chinese_explanation: "(A) '实质性的' 意味着在现实中有坚实基础的，因此重要、有意义或相当可观的。" +
            "<br><br>" +
            "(B) '琐碎的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '表面的' 意味着存在或发生在表面上。" +
            "<br><br>" +
            "(D) '不坚实的' 意味着缺乏强度和坚固性的。"
    },
    {
        id: 3,
        question: "Her __________ support for her friend during the difficult times was truly admirable.",
        chinese_question: "在困难时期，她对朋友的 __________ 支持确实令人钦佩。",
        answers: [
            { option: "A", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "B", answer: "fickle", chinese_answer: "多变的", chinese_romanization: "duōbiàn de" },
            { option: "C", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "D", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(A) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(B) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
            "<br><br>" +
            "(C) 'wavering' means shaking with a quivering motion; becoming weaker; faltering.",
        chinese_explanation: "(D) '坚定的' 意味着稳定或坚定；不动摇。" +
            "<br><br>" +
            "(A) '犹豫的' 意味着试探性的、不确定的或行动或讲话缓慢的。" +
            "<br><br>" +
            "(B) '多变的' 意味着经常变化，特别是在忠诚或感情方面。" +
            "<br><br>" +
            "(C) '动摇的' 意味着颤抖的动作；变得更弱；衰退。"
    },
    {
        id: 4,
        question: "She wore a __________ evening gown to the gala, impressing everyone with her elegance.",
        chinese_question: "她穿着一件 __________ 的晚礼服出席晚会，以她的优雅给每个人留下了深刻印象。",
        answers: [
            { option: "A", answer: "unsophisticated", chinese_answer: "不复杂的", chinese_romanization: "bù fùzá de" },
            { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture; highly developed or complex." +
            "<br><br>" +
            "(A) 'unsophisticated' means lacking refined worldly knowledge or tastes." +
            "<br><br>" +
            "(B) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(D) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(C) '复杂的' 意味着具有、揭示或涉及大量的世俗经验和时尚文化知识；高度发达或复杂的。" +
            "<br><br>" +
            "(A) '不复杂的' 意味着缺乏精致的世俗知识或品味。" +
            "<br><br>" +
            "(B) '朴素的' 意味着不装饰或复杂的；简单或普通的性格。" +
            "<br><br>" +
            "(D) '随意的' 意味着放松和不关心的。"
    },
    {
        id: 5,
        question: "Despite the challenges, she remained __________ in her decision to start her own business, never wavering in her determination.",
        chinese_question: "尽管面临挑战，她仍然 __________ 地决定创业，从未动摇她的决心。",
        answers: [
            { option: "A", answer: "resolute", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "B", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "indecisive", chinese_answer: "优柔寡断的", chinese_romanization: "yōuróu guǎduàn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'resolute' means admirably purposeful, determined, and unwavering." +
            "<br><br>" +
            "(B) 'uncertain' means not able to be relied on; not known or definite." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'indecisive' means not settling an issue; unable to make decisions.",
        chinese_explanation: "(A) '坚定的' 意味着令人钦佩的有目的性、决心和不动摇。" +
            "<br><br>" +
            "(B) '不确定的' 意味着不能依赖的；不确定的或明确的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着行动或说话时迟疑不决、不确定或缓慢的。" +
            "<br><br>" +
            "(D) '优柔寡断的' 意味着不能解决问题；不能做出决定的。"
    },
    {
        id: 6,
    question: "Her __________ stance on the issue allowed her to mediate effectively between the two parties.",
    chinese_question: "她在这个问题上的 __________ 立场使她能够在两方之间有效地调解。",
    answers: [
        { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
        { option: "B", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
        { option: "C", answer: "opinionated", chinese_answer: "固执己见的", chinese_romanization: "gùzhí jǐjiàn de" },
        { option: "D", answer: "partisan", chinese_answer: "党派的", chinese_romanization: "dǎngpài de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'neutral' means not supporting or helping either side in a conflict, disagreement, etc.; impartial." +
        "<br><br>" +
        "(A) 'biased' means unfairly prejudiced for or against someone or something." +
        "<br><br>" +
        "(C) 'opinionated' means conceitedly assertive and dogmatic in one's opinions." +
        "<br><br>" +
        "(D) 'partisan' means prejudiced in favor of a particular cause.",
    chinese_explanation: "(B) '中立的' 意味着不支持或帮助冲突、争论等中的任何一方；公正的。" +
        "<br><br>" +
        "(A) '有偏见的' 意味着对某人或某事不公平地有偏见。" +
        "<br><br>" +
        "(C) '固执己见的' 意味着自负地断言和教条地坚持自己的观点。" +
        "<br><br>" +
        "(D) '党派的' 意味着偏向某一特定原因的。"
    },
    {
        id: 7,
    question: "The CEO's __________ decision left no room for doubt; the company would not be merging with the competitor.",
    chinese_question: "CEO的 __________ 决定不留任何疑问，公司不会与竞争对手合并。",
    answers: [
        { option: "A", answer: "ambiguous", chinese_answer: "模糊", chinese_romanization: "móhú" },
        { option: "B", answer: "equivocal", chinese_answer: "含糊", chinese_romanization: "hánhú" },
        { option: "C", answer: "unequivocal", chinese_answer: "明确", chinese_romanization: "míngquè" },
        { option: "D", answer: "uncertain", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'unequivocal' means leaving no doubt; unambiguous." +
        "<br><br>" +
        "(A) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
        "<br><br>" +
        "(B) 'equivocal' means open to more than one interpretation; ambiguous." +
        "<br><br>" +
        "(D) 'uncertain' means not able to be relied on; not known or definite.",
    chinese_explanation: "(C) '明确' 意味着毫无疑问的；不模糊的。" +
        "<br><br>" +
        "(A) '模糊' 意味着可以有多种解释；没有明显的意义。" +
        "<br><br>" +
        "(B) '含糊' 意味着可以有多种解释；模棱两可的。" +
        "<br><br>" +
        "(D) '不确定' 意味着不能依赖的；未知或不确定的。"
    },
    {
        id: 8,
    question: "He was __________ by the lack of support from his colleagues.",
    chinese_question: "他对同事们缺乏支持感到__________。",
    answers: [
        { option: "A", answer: "pleased", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
        { option: "B", answer: "dismayed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
        { option: "C", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
        { option: "D", answer: "satisfied", chinese_answer: "满意的", chinese_romanization: "mǎnyì de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dismayed' means feeling distressed or shocked. Figuratively, it can mean being disappointed or upset by someone's actions." +
        "<br><br>" +
        "(A) 'pleased' means feeling or showing pleasure and satisfaction, especially at an event or a situation." +
        "<br><br>" +
        "(C) 'excited' means very enthusiastic and eager." +
        "<br><br>" +
        "(D) 'satisfied' means contented; pleased.",
    chinese_explanation: "(B) '沮丧'一词意味着感到痛苦或震惊。比喻地，它可以表示对某人的行为感到失望或难过。" +
        "<br><br>" +
        "(A) '高兴' 意味着感到或表现出愉快和满意，特别是在事件或情况发生时。" +
        "<br><br>" +
        "(C) '兴奋' 意味着非常热情和渴望的。" +
        "<br><br>" +
        "(D) '满意' 意味着满意的；高兴的。"
    },
    {
        id: 9,
        question: "The artist's __________ nature led to bursts of creativity followed by periods of inactivity.",
        chinese_question: "艺术家的__________性格导致了创意爆发期和不活跃期的交替。",
        answers: [
            { option: "A", answer: "temperamental", chinese_answer: "喜怒无常的", chinese_romanization: "xǐ nù wú cháng de" },
            { option: "B", answer: "consistent", chinese_answer: "一贯的", chinese_romanization: "yīguàn de" },
            { option: "C", answer: "uniform", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "D", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'temperamental' means liable to unreasonable changes of mood." +
            "<br><br>" +
            "(B) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(C) 'uniform' means not changing in form or character; remaining the same in all cases and at all times." +
            "<br><br>" +
            "(D) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(A) '喜怒无常的'一词意味着容易出现情绪变化的。" +
            "<br><br>" +
            "(B) '一贯的' 意味着以相同方式进行或完成的，尤其是为了公平或准确。" +
            "<br><br>" +
            "(C) '一致的' 意味着在所有情况下和所有时候都不改变形式或性格；保持不变的。" +
            "<br><br>" +
            "(D) '可靠的' 意味着质量或性能始终如一；能够被信任的。"
    },
    {
        id: 10,
    question: "The __________ explanation provided by the teacher helped the students grasp the difficult concept quickly.",
    chinese_question: "老师提供的 __________ 解释帮助学生们迅速掌握了这个困难的概念。",
    answers: [
        { option: "A", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "B", answer: "limpid", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "C", answer: "ambiguous", chinese_answer: "模棱两可的", chinese_romanization: "móléngliǎngkě de" },
        { option: "D", answer: "convoluted", chinese_answer: "复杂的", chinese_romanization: "fùzá de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'limpid' means clear and easy to understand." +
        "<br><br>" +
        "(A) 'obscure' means not discovered or known about; uncertain." +
        "<br><br>" +
        "(C) 'ambiguous' means open to more than one interpretation; not having one obvious meaning." +
        "<br><br>" +
        "(D) 'convoluted' means extremely complex and difficult to follow.",
    chinese_explanation: "(B) '清晰的' 意味着清楚易懂的。" +
        "<br><br>" +
        "(A) '模糊的' 意味着未被发现或不知道的；不确定的。" +
        "<br><br>" +
        "(C) '模棱两可的' 意味着不止一种解释；没有一个明显的意义。" +
        "<br><br>" +
        "(D) '复杂的' 意味着极其复杂和难以理解的。"
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
