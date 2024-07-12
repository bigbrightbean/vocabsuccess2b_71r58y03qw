// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The filmmaker skillfully used __________ to highlight the plight of the homeless, moving the audience deeply.",
        chinese_question: "电影制作人巧妙地运用了 __________ 来突显无家可归者的困境，深深打动了观众。",
        answers: [
                { option: "A", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
                { option: "B", answer: "pathos", chinese_answer: "悲情", chinese_romanization: "bēiqíng" },
                { option: "C", answer: "irony", chinese_answer: "讽刺", chinese_romanization: "fèngcì" },
                { option: "D", answer: "satire", chinese_answer: "讽刺", chinese_romanization: "fèngcì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pathos' means a quality that evokes pity or sadness." +
                "<br><br>" +
                "(A) 'humor' means the quality of being amusing or comic." +
                "<br><br>" +
                "(C) 'irony' means the expression of one's meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect." +
                "<br><br>" +
                "(D) 'satire' means the use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices.",
        chinese_explanation: "(B) '悲情'一词意味着引发怜悯或悲伤的品质。" +
                "<br><br>" +
                "(A) '幽默' 意味着令人发笑或滑稽的品质。" +
                "<br><br>" +
                "(C) '讽刺' 意味着通过使用通常表示相反意义的语言来表达某人的意义，通常是为了幽默或强调的效果。" +
                "<br><br>" +
                "(D) '讽刺' 意味着利用幽默、讽刺、夸张或嘲笑来揭露和批评人们的愚蠢或恶习。"
    },
    {
        id: 2,
    question: "The __________ of her response took him aback; he hadn’t expected such a vehement reaction.",
    chinese_question: "她的回应的 __________ 让他大吃一惊；他没有预料到会有如此激烈的反应。",
    answers: [
        { option: "A", answer: "mildness", chinese_answer: "温和", chinese_romanization: "wēnhé" },
        { option: "B", answer: "ferocity", chinese_answer: "凶猛", chinese_romanization: "xiōngměng" },
        { option: "C", answer: "serenity", chinese_answer: "宁静", chinese_romanization: "níngjìng" },
        { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'ferocity' means the state or quality of being ferocious; fierceness." +
        "<br><br>" +
        "(A) 'mildness' means the quality or state of being gentle or temperate." +
        "<br><br>" +
        "(C) 'serenity' means the state of being calm, peaceful, and untroubled." +
        "<br><br>" +
        "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
    chinese_explanation: "(B) '凶猛' 一词意味着凶猛的状态或品质；激烈。" +
        "<br><br>" +
        "(A) '温和' 意味着温柔或温和的品质或状态。" +
        "<br><br>" +
        "(C) '宁静' 意味着平静、安宁、无忧无虑的状态。" +
        "<br><br>" +
        "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 3,
    question: "His naturally optimistic __________ allowed him to remain hopeful even in difficult times.",
    chinese_question: "他天生乐观的 __________ 使他即使在困难时期也能保持希望。",
    answers: [
        { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
        { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "C", answer: "temperament", chinese_answer: "性情", chinese_romanization: "xìngqíng" },
        { option: "D", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'temperament' means a person's or animal's nature, especially as it permanently affects their behavior." +
                "<br><br>" +
                "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
                "<br><br>" +
                "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
                "<br><br>" +
                "(D) 'reluctance' means unwillingness or disinclination to do something.",
    chinese_explanation: "(C) '性情' 意味着一个人或动物的本性，尤其是它永久地影响他们的行为。" +
                "<br><br>" +
                "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
                "<br><br>" +
                "(B) '冷漠' 意味着缺缺乏兴趣、热情或关心。" +
                "<br><br>" +
                "(D) '不情愿' 是指不愿意或不愿做某事。"

    },
    {
        id: 4,
    question: "His frequent phone calls were seen as an __________ on her personal time, making it difficult for her to relax.",
    chinese_question: "他频繁的电话被视为对她私人时间的一种 __________，使她难以放松。",
    answers: [
        { option: "A", answer: "relief", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "B", answer: "benefit", chinese_answer: "利益", chinese_romanization: "lìyì" },
        { option: "C", answer: "imposition", chinese_answer: "强加", chinese_romanization: "qiángjiā" },
        { option: "D", answer: "courtesy", chinese_answer: "礼貌", chinese_romanization: "lǐmào" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'imposition' means the action or process of imposing something, especially a burden or obligation." +
        "<br><br>" +
        "(A) 'relief' means a feeling of reassurance and relaxation following release from anxiety or distress." +
        "<br><br>" +
        "(B) 'benefit' means an advantage or profit gained from something." +
        "<br><br>" +
        "(D) 'courtesy' means the showing of politeness in one's attitude and behavior toward others.",
    chinese_explanation: "(C) '强加' 一词意味着施加某物的行动或过程，尤其是负担或义务。" +
        "<br><br>" +
        "(A) '缓解' 意味着在焦虑或痛苦得到缓解后的安心和放松。" +
        "<br><br>" +
        "(B) '利益' 意味着从某事中获得的优势或利润。" +
        "<br><br>" +
        "(D) '礼貌' 意味着对他人的态度和行为表现出的礼貌。"
    },
    {
        id: 5,
    question: "The new advertising campaign resulted in a significant __________ in sales.",
    chinese_question: "新的广告活动导致销售量显著 __________。",
    answers: [
        { option: "A", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" },
        { option: "B", answer: "drop", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "D", answer: "decline", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'boost' means an increase or improvement." +
        "<br><br>" +
        "(B) 'drop' means a fall or decrease." +
        "<br><br>" +
        "(C) 'failure' means lack of success." +
        "<br><br>" +
        "(D) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value.",
    chinese_explanation: "(A) '提升' 意味着增加或改善。" +
        "<br><br>" +
        "(B) '下降' 意味着下降或减少。" +
        "<br><br>" +
        "(C) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(D) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。"
    },
    {
        id: 6,
    question: "The __________ between the two neighbors over the property line quickly escalated into a shouting match.",
    chinese_question: "两位邻居关于地界的 __________ 很快升级为一场叫骂。",
    answers: [
        { option: "A", answer: "altercation", chinese_answer: "争吵", chinese_romanization: "zhēngchǎo" },
        { option: "B", answer: "agreement", chinese_answer: "协议", chinese_romanization: "xiéyì" },
        { option: "C", answer: "celebration", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
        { option: "D", answer: "dialogue", chinese_answer: "对话", chinese_romanization: "duìhuà" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'altercation' means a noisy argument or disagreement, especially in public." +
        "<br><br>" +
        "(B) 'agreement' means harmony or accordance in opinion or feeling." +
        "<br><br>" +
        "(C) 'celebration' means the action of marking one's pleasure at an important event or occasion by engaging in enjoyable, typically social, activity." +
        "<br><br>" +
        "(D) 'dialogue' means a conversation between two or more people as a feature of a book, play, or movie.",
    chinese_explanation: "(A) '争吵' 意味着特别是在公共场合的喧闹争论或争执。" +
        "<br><br>" +
        "(B) '协议' 意味着意见或感觉上的和谐或一致。" +
        "<br><br>" +
        "(C) '庆祝' 意味着通过参加愉快的社交活动来纪念一个重要事件或场合的行为。" +
        "<br><br>" +
        "(D) '对话' 意味着书籍、戏剧或电影中的两人或多人之间的对话。"
    },
    {
        id: 7,
    question: "The collector was thrilled to confirm the __________ of the painting, ensuring it was indeed an original by the famous artist.",
    chinese_question: "收藏家确认这幅画的 __________，确保它确实是这位著名艺术家的原作。",
    answers: [
        { option: "A", answer: "authenticity", chinese_answer: "真实性", chinese_romanization: "zhēnshí xìng" },
        { option: "B", answer: "forgery", chinese_answer: "伪造品", chinese_romanization: "wěizào pǐn" },
        { option: "C", answer: "imitation", chinese_answer: "模仿", chinese_romanization: "mófǎng" },
        { option: "D", answer: "replica", chinese_answer: "复制品", chinese_romanization: "fùzhì pǐn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'authenticity' means the quality of being genuine or real." +
        "<br><br>" +
        "(B) 'forgery' means the action of forging or producing a copy of a document, signature, banknote, or work of art." +
        "<br><br>" +
        "(C) 'imitation' means a thing intended to simulate or copy something else." +
        "<br><br>" +
        "(D) 'replica' means an exact copy or model of something, especially one on a smaller scale.",
    chinese_explanation: "(A) '真实性' 意味着真实或真品的质量。" +
        "<br><br>" +
        "(B) '伪造品' 意味着伪造或制作文件、签名、钞票或艺术品副本的行为。" +
        "<br><br>" +
        "(C) '模仿' 意味着旨在模拟或复制其他事物的事物。" +
        "<br><br>" +
        "(D) '复制品' 意味着某物的精确复制品或模型，尤指较小规模的。"
    },
    {
        id: 8,
    question: "The __________ study indicated that the project could be completed within the allocated budget and timeframe.",
    chinese_question: "可行性研究表明，该项目可以在分配的预算和时间范围内完成。",
    answers: [
        { option: "A", answer: "feasibility", chinese_answer: "可行性", chinese_romanization: "kěxíng xìng" },
        { option: "B", answer: "impossibility", chinese_answer: "不可能性", chinese_romanization: "bù kěnéng xìng" },
        { option: "C", answer: "absurdity", chinese_answer: "荒谬", chinese_romanization: "huāngmiù" },
        { option: "D", answer: "rarity", chinese_answer: "稀有", chinese_romanization: "xīyǒu" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'feasibility' means the state or degree of being easily or conveniently done." +
        "<br><br>" +
        "(B) 'impossibility' means the state or fact of being impossible." +
        "<br><br>" +
        "(C) 'absurdity' means the quality or state of being ridiculous or wildly unreasonable." +
        "<br><br>" +
        "(D) 'rarity' means the state or quality of being rare.",
    chinese_explanation: "(A) '可行性' 意味着容易或方便完成的状态或程度。" +
        "<br><br>" +
        "(B) '不可能性' 意味着不可能的状态或事实。" +
        "<br><br>" +
        "(C) '荒谬' 意味着荒谬或极不合理的质量或状态。" +
        "<br><br>" +
        "(D) '稀有' 意味着稀有的状态或质量。"
    },
    {
        id: 9,
    question: "The military __________ of the country focused on maintaining a strong defense system and readiness for any potential threats.",
    chinese_question: "该国的军事 __________ 侧重于保持强大的防御系统和随时准备应对任何潜在威胁。",
    answers: [
        { option: "A", answer: "doctrine", chinese_answer: "教义", chinese_romanization: "jiàoyì" },
        { option: "B", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
        { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
        { option: "D", answer: "negligence", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'doctrine' means a belief or set of beliefs held and taught by a Church, political party, or other group." +
        "<br><br>" +
        "(B) 'suggestion' means an idea or plan put forward for consideration." +
        "<br><br>" +
        "(C) 'indifference' means lack of interest, concern, or sympathy." +
        "<br><br>" +
        "(D) 'negligence' means failure to take proper care over something.",
    chinese_explanation: "(A) '教义' 一词意味着一个教会、政党或其他团体持有并教授的信仰或信念。" +
        "<br><br>" +
        "(B) '建议' 意味着提出考虑的想法或计划。" +
        "<br><br>" +
        "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
        "<br><br>" +
        "(D) '疏忽' 意味着未能妥善照顾某事。"
    },
    {
        id: 10,
    question: "He felt a sense of __________ towards his new job, as he was thrilled by the opportunity but anxious about the responsibilities.",
    chinese_question: "他对新工作感到一种 __________，因为他对这个机会感到兴奋，但对责任感到焦虑。",
    answers: [
        { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
        { option: "B", answer: "confidence", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
        { option: "C", answer: "determination", chinese_answer: "决心", chinese_romanization: "juéxīn" },
        { option: "D", answer: "eagerness", chinese_answer: "渴望", chinese_romanization: "kěwàng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'ambivalence' means the state of having mixed feelings or contradictory ideas about something or someone." +
        "<br><br>" +
        "(B) 'confidence' means the feeling or belief that one can rely on someone or something; firm trust." +
        "<br><br>" +
        "(C) 'determination' means firmness of purpose; resoluteness." +
        "<br><br>" +
        "(D) 'eagerness' means keen or enthusiastic interest.",
    chinese_explanation: "(A) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法的状态。" +
        "<br><br>" +
        "(B) '信心' 意味着相信自己可以依赖某人或某事的感觉或信念；坚定的信任。" +
        "<br><br>" +
        "(C) '决心' 意味着坚定的目标；果断。" +
        "<br><br>" +
        "(D) '渴望' 意味着强烈或热切的兴趣。"
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
