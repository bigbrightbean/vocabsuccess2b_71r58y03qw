// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The employee's __________ of the new manager led to a tense work environment.",
    chinese_question: "员工对新经理的 __________ 导致了紧张的工作环境。",
    answers: [
        { option: "A", answer: "trust", chinese_answer: "信任", chinese_romanization: "xìnrèn" },
        { option: "B", answer: "faith", chinese_answer: "信心", chinese_romanization: "xìnxīn" },
        { option: "C", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" },
        { option: "D", answer: "mistrust", chinese_answer: "不信任", chinese_romanization: "bù xìnrèn" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'mistrust' means lack of trust or confidence." +
        "<br><br>" +
        "(A) 'trust' means firm belief in the reliability, truth, ability, or strength of someone or something." +
        "<br><br>" +
        "(B) 'faith' means complete trust or confidence in someone or something." +
        "<br><br>" +
        "(C) 'admiration' means respect and warm approval.",
    chinese_explanation: "(D) '不信任' 意味着缺乏信任或信心。" +
        "<br><br>" +
        "(A) '信任' 意味着对某人或某事的可靠性、真实性、能力或力量的坚定信念。" +
        "<br><br>" +
        "(B) '信心' 意味着完全的信任或信心。" +
        "<br><br>" +
        "(C) '钦佩' 意味着尊重和高度认可。"
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
        question: "The board of directors feared a __________ within the company as employees began to take sides in the ongoing dispute.",
        chinese_question: "董事会担心公司内部会出现 __________，因为员工开始在持续的争端中站队。",
        answers: [
                { option: "A", answer: "merger", chinese_answer: "合并", chinese_romanization: "hébìng" },
                { option: "B", answer: "schism", chinese_answer: "分裂", chinese_romanization: "fēnliè" },
                { option: "C", answer: "reconciliation", chinese_answer: "和解", chinese_romanization: "héjiě" },
                { option: "D", answer: "cooperation", chinese_answer: "合作", chinese_romanization: "hézuò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'schism' means a split or division between strongly opposed sections or parties, caused by differences in opinion or belief." +
                "<br><br>" +
                "(A) 'merger' means the combination of two things, especially companies, into one." +
                "<br><br>" +
                "(C) 'reconciliation' means the restoration of friendly relations." +
                "<br><br>" +
                "(D) 'cooperation' means the process of working together to the same end.",
        chinese_explanation: "(B) '分裂'一词意味着由于意见或信仰的分歧而在强烈反对的部分或政党之间的分裂或分裂。" +
                "<br><br>" +
                "(A) '合并' 意味着将两个事物，特别是公司，合并为一个。" +
                "<br><br>" +
                "(C) '和解' 意味着恢复友好关系。" +
                "<br><br>" +
                "(D) '合作' 意味着共同朝着同一目标努力的过程。"
    },
    {
        id: 4,
    question: "There was a noticeable __________ in community support for the project after the campaign.",
    chinese_question: "在活动之后，社区对该项目的支持显著 __________ 。",
    answers: [
        { option: "A", answer: "increase", chinese_answer: "增加", chinese_romanization: "zēngjiā" },
        { option: "B", answer: "drop", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
        { option: "C", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "D", answer: "absence", chinese_answer: "缺席", chinese_romanization: "quēxí" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'increase' means a rise in the amount, number, or value of something." +
        "<br><br>" +
        "(B) 'drop' means a decline or reduction." +
        "<br><br>" +
        "(C) 'failure' means lack of success." +
        "<br><br>" +
        "(D) 'absence' means the state of being away from a place or person.",
    chinese_explanation: "(A) '增加' 意味着某物的数量、数目或价值的上升。" +
        "<br><br>" +
        "(B) '下降' 意味着下降或减少。" +
        "<br><br>" +
        "(C) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(D) '缺席' 意味着不在场的状态。"
    },
    {
        id: 5,
    question: "Having access to the executive lounge is a __________ reserved for senior managers.",
    chinese_question: "使用行政休息室是留给高级经理的 __________ 。",
    answers: [
        { option: "A", answer: "privilege", chinese_answer: "特权", chinese_romanization: "tèquán" },
        { option: "B", answer: "punishment", chinese_answer: "惩罚", chinese_romanization: "chéngfá" },
        { option: "C", answer: "duty", chinese_answer: "责任", chinese_romanization: "zérèn" },
        { option: "D", answer: "obligation", chinese_answer: "义务", chinese_romanization: "yìwù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'privilege' means a special right, advantage, or immunity granted or available only to a particular person or group." +
        "<br><br>" +
        "(B) 'punishment' means the infliction or imposition of a penalty as retribution for an offense." +
        "<br><br>" +
        "(C) 'duty' means a moral or legal obligation; a responsibility." +
        "<br><br>" +
        "(D) 'obligation' means an act or course of action to which a person is morally or legally bound; a duty or commitment.",
    chinese_explanation: "(A) '特权' 意味着仅特定人或群体拥有的特殊权利、优势或豁免。" +
        "<br><br>" +
        "(B) '惩罚' 意味着作为对犯罪的报复而施加的惩罚。" +
        "<br><br>" +
        "(C) '责任' 意味着道德或法律上的义务；责任。" +
        "<br><br>" +
        "(D) '义务' 意味着一个人道德上或法律上必须履行的行为或行动；责任或承诺。"
    },
    {
        id: 6,
    question: "His __________ of his neighbor's new pool was obvious from his frequent glances over the fence.",
    chinese_question: "他对邻居新游泳池的 __________ 从他频繁的目光中显而易见。",
    answers: [
        { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
        { option: "B", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
        { option: "C", answer: "pity", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
        { option: "D", answer: "admiration", chinese_answer: "钦佩", chinese_romanization: "qīnpèi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'envy' means a feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck." +
        "<br><br>" +
        "(A) 'joy' means a feeling of great pleasure and happiness." +
        "<br><br>" +
        "(C) 'pity' means the feeling of sorrow and compassion caused by the suffering and misfortunes of others." +
        "<br><br>" +
        "(D) 'admiration' means respect and warm approval.",
    chinese_explanation: "(B) '嫉妒' 意味着对他人的财产、品质或运气产生不满或怨恨的感觉。" +
        "<br><br>" +
        "(A) '喜悦' 意味着极大的快乐和幸福。" +
        "<br><br>" +
        "(C) '同情' 意味着因他人的痛苦和不幸而产生的悲伤和怜悯。" +
        "<br><br>" +
        "(D) '钦佩' 意味着尊重和高度认可。"
    },
    {
        id: 7,
    question: "The long-time __________ of the village were proud of their heritage and traditions.",
    chinese_question: "村里的老 __________ 为他们的遗产和传统感到自豪。",
    answers: [
        { option: "A", answer: "residents", chinese_answer: "居民", chinese_romanization: "jūmín" },
        { option: "B", answer: "tourists", chinese_answer: "游客", chinese_romanization: "yóukè" },
        { option: "C", answer: "visitors", chinese_answer: "访客", chinese_romanization: "fǎngkè" },
        { option: "D", answer: "strangers", chinese_answer: "陌生人", chinese_romanization: "mòshēngrén" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'residents' means people who live somewhere permanently or on a long-term basis." +
        "<br><br>" +
        "(B) 'tourists' means people who are traveling or visiting a place for pleasure." +
        "<br><br>" +
        "(C) 'visitors' means people who visit a person or place." +
        "<br><br>" +
        "(D) 'strangers' means people whom one does not know or with whom one is not familiar.",
    chinese_explanation: "(A) '居民' 意味着长期或永久居住在某地的人。" +
        "<br><br>" +
        "(B) '游客' 意味着为娱乐而旅行或参观某地的人。" +
        "<br><br>" +
        "(C) '访客' 意味着访问某人或某地的人。" +
        "<br><br>" +
        "(D) '陌生人' 意味着一个人不认识或不熟悉的人。"
    },
    {
        id: 8,
    question: "She raised her hand as a __________ to ask a question.",
    chinese_question: "她举起手作为 __________ 提问。",
    answers: [
        { option: "A", answer: "clue", chinese_answer: "线索", chinese_romanization: "xiànsuǒ" },
        { option: "B", answer: "gesture", chinese_answer: "手势", chinese_romanization: "shǒushì" },
        { option: "C", answer: "signal", chinese_answer: "信号", chinese_romanization: "xìnhào" },
        { option: "D", answer: "expression", chinese_answer: "表情", chinese_romanization: "biǎoqíng" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'signal' means a gesture, action, or sound that is used to convey information or instructions." +
        "<br><br>" +
        "(A) 'clue' means a piece of evidence or information used in the detection of a crime or solving of a mystery." +
        "<br><br>" +
        "(B) 'gesture' means a movement of part of the body, especially a hand or the head, to express an idea or meaning." +
        "<br><br>" +
        "(D) 'expression' means the process of making known one's thoughts or feelings.",
    chinese_explanation: "(C) '信号' 意味着用来传达信息或指示的手势、动作或声音。" +
        "<br><br>" +
        "(A) '线索' 意味着用来侦破犯罪或解决谜题的证据或信息。" +
        "<br><br>" +
        "(B) '手势' 意味着身体的一部分，特别是手或头部的运动，用来表达一个想法或意义。" +
        "<br><br>" +
        "(D) '表情' 意味着表达思想或感情的过程。"
    },
    {
        id: 9,
    question: "His __________ in handling confidential information resulted in a major security breach.",
    chinese_question: "他处理机密信息的 __________ 导致了重大安全漏洞。",
    answers: [
        { option: "A", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
        { option: "C", answer: "discretion", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
        { option: "D", answer: "prudence", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
        "<br><br>" +
        "(B) 'diligence' means careful and persistent work or effort." +
        "<br><br>" +
        "(C) 'discretion' means the quality of behaving or speaking in such a way as to avoid causing offense or revealing private information." +
        "<br><br>" +
        "(D) 'prudence' means the quality of being prudent; cautiousness.",
    chinese_explanation: "(A) '鲁莽' 意味着对危险或后果缺乏关注。" +
        "<br><br>" +
        "(B) '勤奋' 意味着仔细和持续的工作或努力。" +
        "<br><br>" +
        "(C) '谨慎' 意味着行为或言语的质量，以避免引起冒犯或泄露私人信息。" +
        "<br><br>" +
        "(D) '谨慎' 意味着谨慎的品质。"
    },
    {
        id: 10,
        question: "Her natural kindness was __________ by a firm sense of discipline, which made her an effective and respected teacher.",
        chinese_question: "她的自然善良因严格的纪律感而得到了 __________，这使她成为一名有效且受尊敬的教师。",
        answers: [
                { option: "A", answer: "masked", chinese_answer: "掩盖", chinese_romanization: "yǎngài" },
                { option: "B", answer: "tempered", chinese_answer: "缓和", chinese_romanization: "huǎnhé" },
                { option: "C", answer: "exaggerated", chinese_answer: "夸大", chinese_romanization: "kuādà" },
                { option: "D", answer: "minimized", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tempered' means to serve as a counterbalancing force to something; to moderate or mitigate." +
                "<br><br>" +
                "(A) 'masked' means to cover (the face) with a mask." +
                "<br><br>" +
                "(C) 'exaggerated' means regarded or represented as larger, better, or worse than in reality." +
                "<br><br>" +
                "(D) 'minimized' means to reduce something, especially something unwanted or unpleasant, to the smallest possible amount or degree.",
        chinese_explanation: "(B) '缓和'一词意味着作为某物的平衡力；调节或减轻。" +
                "<br><br>" +
                "(A) '掩盖' 意味着用面具覆盖（脸）。" +
                "<br><br>" +
                "(C) '夸大' 意味着被看作或表现得比实际更大、更好或更糟。" +
                "<br><br>" +
                "(D) '减少' 意味着将某物，尤其是某些不需要的或不愉快的事物减少到最小可能数量或程度。"
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
